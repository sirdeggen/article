import { Request, Response, NextFunction } from 'express'
import { WalletInterface, Utils, Beef } from '@bsv/sdk'
import { makeWallet } from '../wallet.js'

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

export function createBsvPaymentMiddleware() {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Initialize wallet on first request
    if (!wallet) {
      await initWallet()
    }

    const isArticleRoute = req.path.startsWith('/articles/')
    
    // Free routes
    if (!isArticleRoute && req.path !== '/articles') {
      return next()
    }

    const hasPaymentHeader = req.headers[`${PAYMENT_HEADER_PREFIX}beef`]
    
    if (!hasPaymentHeader) {
      console.log('Returning 402 with payment headers for:', req.path)
      res.set({
        [`${PAYMENT_HEADER_PREFIX}sats`]: '100',
        [`${PAYMENT_HEADER_PREFIX}server`]: cachedIdentityKey
      })
       
      return res.status(402).end() // No body as requested
    }

    // Has payment headers - STRICT validation (all 5 headers required)
    try {
      const sender = req.headers[`${PAYMENT_HEADER_PREFIX}sender`] as string
      const beef = req.headers[`${PAYMENT_HEADER_PREFIX}beef`] as string
      const prefix = req.headers[`${PAYMENT_HEADER_PREFIX}prefix`] as string
      const suffix = req.headers[`${PAYMENT_HEADER_PREFIX}suffix`] as string
      const vout = req.headers[`${PAYMENT_HEADER_PREFIX}vout`] as string

      // Check for presence of ALL required headers
      if (!sender || !beef || !prefix || !suffix || !vout) {
        return res.status(400).json({ 
          error: 'Missing required payment headers',
          required: ['sender', 'beef', 'prefix', 'suffix', 'vout']
        })
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
      res.status(400).json({ 
        error: 'Invalid payment',
        message: error instanceof Error ? error.message : 'Unknown error'
      })
    }
  }
}