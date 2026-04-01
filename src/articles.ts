export interface Article {
  slug: string
  title: string
  author: string
  date: string
  excerpt: string
  content: string
  price: number
}

export const articles: Article[] = [
  {
    slug: 'future-of-money',
    title: 'The Future of Money is Programmable',
    author: 'Dr. Craig S. Wright',
    date: '2026-04-01',
    excerpt: 'How Bitcoin SV is redefining what money can be in the digital age.',
    content: `
      <p class="lead">Bitcoin was never just about digital cash. It was about creating a system where value can be programmed, transferred, and composed with the same ease as software.</p>
      <h2>Beyond Digital Cash</h2>
      <p>When Satoshi Nakamoto published the Bitcoin whitepaper in 2008, most people saw it as a new form of money. But the true innovation was far deeper: a timestamped, immutable ledger that could serve as the foundation for any kind of digital agreement.</p>
      <p>Think about what this means. Every financial instrument, every contract, every form of value can exist on a single, global, permissionless network. No intermediaries. No gatekeepers. Just math and consensus.</p>
      <h2>Programmable Value</h2>
      <p>Smart contracts on BSV aren't limited by artificial block size caps or high fees. They can process thousands of transactions per second at fractions of a cent. This makes micropayments not just possible, but practical.</p>
      <p>Imagine paying a fraction of a cent to read an article. Or streaming money to a musician in real-time as you listen. Or a machine autonomously purchasing the resources it needs to operate.</p>
      <h2>The Present, Not the Future</h2>
      <p>This is not science fiction. The infrastructure exists today. The tools are being built. The only question is how quickly the world will adopt them.</p>
      <p>The future of money is programmable. And that future is already here.</p>
    `,
    price: 150
  },
  {
    slug: 'data-ownership',
    title: 'Why Data Ownership Matters',
    author: 'Siggi Oskarsson',
    date: '2026-03-14',
    excerpt: 'Your data should belong to you, not to corporations.',
    content: `
      <p class="lead">In the age of AI and surveillance capitalism, personal data has become the most valuable resource on earth. But who actually owns it?</p>
      <h2>The Attention Economy</h2>
      <p>Every search query, every like, every scroll generates data that feeds the algorithms of trillion-dollar corporations. In return, you get "free" services. But the true cost is your privacy, your autonomy, and your agency.</p>
      <p>The business model of the modern internet is fundamentally broken. Users create the value, but platforms capture it.</p>
      <h2>A New Paradigm</h2>
      <p>What if every piece of data you created was signed with your identity key? What if you controlled who could access it, and under what terms? What if you could monetize your own attention directly?</p>
      <p>With Bitcoin SV and protocols like BRC-29, we can build systems where users truly own their data. Identity is self-sovereign. Permissions are granular. And value flows directly to creators.</p>
      <h2>The Path Forward</h2>
      <p>The transition won't happen overnight. But every application that gives users control over their data is a step in the right direction. Every micropayment that replaces an ad impression shifts power back to the individual.</p>
      <p>Data ownership isn't just a technical problem. It's a human rights issue. And the tools to solve it are finally within reach.</p>
    `,
    price: 75
  },
  {
    slug: 'micropayments-web',
    title: 'Micropayments Will Fix the Web',
    author: 'Kurt Wuckert Jr',
    date: '2025-04-20',
    excerpt: 'How sub-cent payments can replace ads and restore quality content.',
    content: `
      <p class="lead">The advertising model broke the web. Micropayments can fix it. Here's how sub-cent transactions change everything.</p>
      <h2>The Ad-Supported Trap</h2>
      <p>When content is "free," you are the product. Publishers optimize for clicks, not quality. Designers optimize for engagement, not utility. The result is a web full of clickbait, pop-ups, and dark patterns.</p>
      <p>We tried paywalls, but monthly subscriptions create their own problems. Nobody wants to pay $10/month for every website they occasionally visit.</p>
      <h2>The Micropayment Solution</h2>
      <p>What if you could pay 1 cent to read an article? Or 0.1 cents to skip an ad? The technology to do this has existed in Bitcoin since day one &mdash; but high fees on other networks made it impractical.</p>
      <p>BSV transactions cost fractions of a cent. HTTP 402 &mdash; the "Payment Required" status code &mdash; was reserved in the original HTTP spec for exactly this purpose. We're finally using it.</p>
      <h2>A Better Web</h2>
      <p>When readers pay directly, writers can focus on quality. When users pay for what they consume, designers can build for clarity. When value flows without friction, the entire incentive structure of the internet realigns.</p>
      <p>The web doesn't need more ads. It needs better plumbing. And that plumbing is here.</p>
    `,
    price: 200
  }
]

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getAllArticles() {
  return articles.map(({ content, ...article }) => article)
}