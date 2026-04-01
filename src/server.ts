import express from 'express'
import cors from 'cors'
import { createBsvPaymentMiddleware, getServerIdentityKey } from './middleware/payment.js'
import { getAllArticles, getArticle, Article } from './articles.js'

const app = express()
const PORT = 3000

app.use(cors({
  exposedHeaders: ['x-bsv-sats', 'x-bsv-server']
}))
app.use(express.json())

const paymentMiddleware = createBsvPaymentMiddleware()

function pageShell(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Georgia', 'Times New Roman', serif; background: #fafaf7; color: #1a1a1a; line-height: 1.7; }
    a { color: inherit; }
    .container { max-width: 680px; margin: 0 auto; padding: 0 20px; }
    .site-header { border-bottom: 1px solid #e0ddd5; padding: 24px 0; margin-bottom: 32px; }
    .site-title { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; }
    .site-title a { text-decoration: none; }
    .site-subtitle { font-size: 0.85rem; color: #6b6b6b; margin-top: 4px; font-family: system-ui, sans-serif; }
  </style>
</head>
<body>
  <div class="container">
    <header class="site-header">
      <div class="site-title"><a href="/">The BSV Reader</a></div>
      <div class="site-subtitle">Quality content, paid with micropayments</div>
    </header>
    ${body}
  </div>
</body>
</html>`
}

function articleCard(a: Omit<Article, 'content'>) {
  return `
    <article style="margin-bottom: 36px; padding-bottom: 36px; border-bottom: 1px solid #e8e6df;">
      <a href="/articles/${a.slug}" style="text-decoration: none; display: block;">
        <h2 style="font-size: 1.6rem; line-height: 1.3; letter-spacing: -0.02em; margin-bottom: 8px;">${a.title}</h2>
        <p style="color: #555; font-size: 1.05rem; margin-bottom: 12px;">${a.excerpt}</p>
        <div style="font-family: system-ui, sans-serif; font-size: 0.8rem; color: #888; display: flex; gap: 16px; align-items: center;">
          <span>${a.author}</span>
          <span>${new Date(a.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span style="margin-left: auto; background: #f0ede5; padding: 2px 10px; border-radius: 12px; color: #7a6f5e;">${a.price} sats</span>
        </div>
      </a>
    </article>`
}

app.get('/', (req, res) => {
  const articles = getAllArticles()
  const cards = articles.map(a => articleCard(a)).join('')
  res.send(pageShell('The BSV Reader', cards))
})

app.get('/.well-known/bsv-identity', (req, res) => {
  const key = getServerIdentityKey()
  res.json({ identityKey: key || 'not-initialized' })
})

app.get('/articles/:slug', paymentMiddleware, (req, res) => {
  const article = getArticle(req.params.slug)
  if (!article) {
    return res.status(404).send(pageShell('Not Found', '<p style="text-align:center;padding:60px 0;color:#888;">Article not found.</p>'))
  }

  const body = `
    <article>
      <header style="margin-bottom: 32px;">
        <h1 style="font-size: 2.2rem; line-height: 1.2; letter-spacing: -0.03em; margin-bottom: 12px;">${article.title}</h1>
        <div style="font-family: system-ui, sans-serif; font-size: 0.85rem; color: #888; display: flex; gap: 16px; align-items: center;">
          <span style="font-weight: 500; color: #555;">${article.author}</span>
          <span>${new Date(article.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </header>
      <div style="font-size: 1.15rem;">
        <style>
          article .lead { font-size: 1.3rem; color: #333; line-height: 1.6; margin-bottom: 24px; }
          article h2 { font-size: 1.4rem; margin: 36px 0 12px; letter-spacing: -0.01em; }
          article p { margin-bottom: 16px; }
        </style>
        ${article.content}
      </div>
      <footer style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e0ddd5; font-family: system-ui, sans-serif; font-size: 0.85rem; color: #888;">
        Paid with BSV &middot; ${article.price} sats
      </footer>
    </article>`

  res.send(pageShell(article.title, body))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})