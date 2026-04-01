import { Request, Response, NextFunction } from 'express'
import { WalletInterface, Utils, Beef } from '@bsv/sdk'
import { makeWallet } from '../wallet.js'
import { getArticle } from '../articles.js'

declare global {
  namespace Express {
    interface Request {
      payment?: {
        accepted: boolean
        satoshisPaid: number
      }
    }
  }
}

export function getServerIdentityKey() {
  return cachedIdentityKey
}

const PAYMENT_HEADER_PREFIX = 'x-bsv-'

console.log('✅ BSV Payment Middleware LOADED with strict header checking')

let wallet: WalletInterface
let cachedIdentityKey = ''

async function initWallet() {
  if (!wallet) {
    const { wallet: w, identityKey } = await makeWallet()
    wallet = w
    cachedIdentityKey = identityKey
  }
  return wallet
}

function send402(res: Response, sats: number = 100) {
  res.set({
    [`${PAYMENT_HEADER_PREFIX}sats`]: String(sats),
    [`${PAYMENT_HEADER_PREFIX}server`]: cachedIdentityKey
  })
  return res.status(402).end()
}

export function createBsvPaymentMiddleware() {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Initialize wallet on first request
      if (!wallet) {
        await initWallet()
      }

      const isArticleRoute = req.path.startsWith('/articles/')
      
      // Free routes
      if (!isArticleRoute && req.path !== '/articles') {
        return next()
      }

      const slug = req.path.replace('/articles/', '')
      const article = getArticle(slug)
      const price = article?.price ?? 100

      const hasPaymentHeader = req.headers[`${PAYMENT_HEADER_PREFIX}beef`]
      
      if (!hasPaymentHeader) {
        console.log('Returning 402 with payment headers for:', req.path, `(${price} sats)`)
        return send402(res, price)
      }

      // Has payment headers - STRICT validation (all 5 headers required)
      const sender = req.headers[`${PAYMENT_HEADER_PREFIX}sender`] as string
      const beef = req.headers[`${PAYMENT_HEADER_PREFIX}beef`] as string
      const prefix = req.headers[`${PAYMENT_HEADER_PREFIX}prefix`] as string
      const suffix = req.headers[`${PAYMENT_HEADER_PREFIX}suffix`] as string
      const vout = req.headers[`${PAYMENT_HEADER_PREFIX}vout`] as string

      if (!sender || !beef || !prefix || !suffix || !vout) {
        console.warn('Missing required payment headers, returning 402')
        return send402(res)
      }

      console.log('Payment headers present, validating...', {
        sender,
        beef: beef.substring(0, 50) + '...',
        prefix,
        suffix,
        vout
      })

      const beefArr = Utils.toArray(beef, 'base64')
      const beefObj = Beef.fromBinary(beefArr)
      console.log(beefObj.toLogString())
      
      // Internalize the payment transaction
      await wallet.internalizeAction({
        tx: beefArr,
        outputs: [{
          outputIndex: Number.parseInt(vout),
          protocol: 'wallet payment',
          paymentRemittance: {
            derivationPrefix: prefix,
            derivationSuffix: suffix,
            senderIdentityKey: sender
          }
        }],
        description: `Payment for ${req.path}`
      })

      console.log(`Payment accepted for ${req.path} from ${sender}`)
      req.payment = { accepted: true, satoshisPaid: 100 }
      
      next()
    } catch (error) {
      console.error('Payment validation failed:', error)
      return send402(res)
    }
  }
}