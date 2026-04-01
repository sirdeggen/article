export interface Article {
  slug: string
  title: string
  author: string
  date: string
  excerpt: string
  image: string
  content: string
  price: number
}

export const articles: Article[] = [
  {
    slug: 'ubi-destroys-civilisation',
    title: 'Dr. Wright Publishes 47-Page Takedown of UBI, Cites Self 31 Times',
    author: 'Dr. Rev. Craig S. Wright Esq PhD etc',
    date: '2026-04-01',
    excerpt: 'Man who has never held a normal job explains why unconditional income is bad for work ethic.',
    image: '/g1.png',
    content: `
      <p class="lead">LONDON &mdash; Dr. Rev. Craig Steven Wright Esq PhD CPA etc has published a 47-page academic paper arguing that Universal Basic Income will destroy civilisation, mental health, and "the very fabric of reciprocity that separates man from beast." The paper cites 31 works by Dr. Wright himself, 4 by people who agree with Dr. Wright, and 1 by someone who doesn't but whose quote was taken out of context.</p>

      <h2>The Paper Nobody Asked For</h2>
      <p>The paper, titled "UBI, Dominance Hierarchies, and the Totalitarian Impulse: A Multidisciplinary Refutation With Applications to Bitcoin (The Real One)," appeared this morning on a WordPress blog formatted to look like a journal. TNT can confirm it has not been peer-reviewed by anyone other than Dr. Wright's cat, Mr. Fluffington, who reportedly walked across the keyboard and added three semicolons to the abstract.</p>
      <p>"This is the most important economic paper since my last one," Dr. Wright told TNT in an exclusive interview. "People think UBI will free them. In reality, it creates a panopticon of fiscal dependency. I would know. I invented the concept of fiscal dependency in 2008. I have the Slack messages to prove it."</p>

      <h2>Finland Destroyed, Apparently</h2>
      <p>A significant portion of the paper is devoted to the Finnish basic income experiment, which Dr. Wright describes as "a catastrophic failure that proves everything I've been saying since before Finland existed." The experiment gave 2,000 unemployed Finns a monthly payment with no conditions. Employment increased by 1.5 days per year.</p>
      <p>"1.5 days," Dr. Wright repeated, slamming his fist on a table that turned out to be a bonded courier's briefcase. "That's not even a full weekend. The Finns have proven that free money makes people lazy. Also, I invented weekends. Check the patent."</p>
      <p>When TNT pointed out that 1.5 days was technically an <em>increase</em> in employment, Dr. Wright threatened to sue us for "misrepresenting statistical noise in a manner calculated to harm my reputation as the inventor of statistics."</p>

      <h2>Dominance Hierarchies and the Lobster Question</h2>
      <p>The paper's most creative section invokes evolutionary psychiatrist John Price's 1967 work on dominance hierarchies. Dr. Wright argues that UBI does not eliminate status competition but merely "shifts the arena from the workplace to the welfare office," creating a "quasi-caste of non-participants" who will spiral into "chronic low-status signalling."</p>
      <p>"Imagine a world where your rank is determined not by competence but by your relationship to a central fiscal authority," Dr. Wright explained, apparently without irony, from behind a podium to a room full of people whose rank in BSV is determined entirely by their relationship to Calvin Ayre.</p>
      <p>Dr. Wright also noted that lobsters have serotonin-based dominance hierarchies and do not receive UBI. "Lobsters are successful," he said. "They've been around for 350 million years. Have you tried giving a lobster a basic income? No. Because lobsters understand that meaning comes from competence and contribution, not from government handouts."</p>
      <p>When asked if he had ever studied lobsters, Dr. Wright said he had "multiple PhDs in marine biology, but the universities involved have asked me not to name them for legal reasons."</p>

      <h2>The References Section</h2>
      <p>TNT's fact-checking department (an intern with Google Scholar) attempted to verify the paper's 42 references. Of these:</p>
      <p>31 were by Dr. Wright or "C.S. Wright" or "Satoshi Nakamoto (Wright, C.)"</p>
      <p>4 were real academic papers, cited correctly</p>
      <p>3 were blog posts from nChain's website, now returning 404 errors</p>
      <p>2 were links to court filings in which Dr. Wright was the defendant</p>
      <p>1 was a recipe for Thai green curry that appears to have been included by accident, though Dr. Wright insists it "demonstrates the importance of price signals in resource allocation"</p>
      <p>The paper concludes with a 900-word section arguing that Bitcoin (BSV) solves all the problems UBI claims to address, "without the totalitarian overhead." When TNT asked how a blockchain with twelve active users solves global poverty, Dr. Wright ended the interview and had his lawyer send us a cease-and-desist for "defamation by question."</p>

      <h2>Community Response</h2>
      <p>Reaction in the BSV Slack was immediate and unanimous. Seven members added a flexing arm emoji to Dr. Wright's announcement post. One member, @iworshipcraig_SV, described the paper as "the most important work of political economy since The Republic, which Craig also wrote."</p>
      <p>Calvin Ayre tweeted: "My friend Craig has once again proven that he is the smartest man alive. UBI is communism. BSV fixes this. Buy BSV."</p>
      <p>At press time, Dr. Wright was reportedly drafting a follow-up paper arguing that public libraries are "a Marxist surveillance apparatus" and that he invented the Dewey Decimal System in 1997.</p>
    `,
    price: 150
  },
  {
    slug: 'runar-playground',
    title: 'Siggi Releases IDE That Supports 8 Languages, Used by 8 People',
    author: 'Siggi Oskarsson',
    date: '2026-03-14',
    excerpt: 'Groundbreaking developer tool achieves perfect 1:1 language-to-user ratio.',
    image: '/g2.png',
    content: `
      <p class="lead">REYKJAVIK &mdash; Siggi Oskarsson, the mass-producing developer behind the Run&aacute;r smart contract compiler, has released an online playground at runar.run that lets developers write Bitcoin smart contracts in eight different programming languages entirely in the browser. TNT can exclusively report that one developer has tried it in each language, bringing the total user base to what sources describe as "a statistically significant sample of the BSV developer community."</p>

      <h2>No Backend, No Users, No Problem</h2>
      <p>The playground, which runs entirely client-side with no backend, requires no installation, no sign-up, and no evidence that anyone will ever use it. "Every Bitcoin smart contract developer has the same first question," Siggi wrote in his announcement. "Can I try it before I install anything?" TNT reached out to every Bitcoin smart contract developer and he confirmed this was true.</p>
      <p>The tool supports TypeScript, Go, Rust, Solidity, Move, Python, Zig, and Ruby. When asked why eight languages were necessary, Siggi explained: "Different developers think in different syntaxes. Some think in TypeScript. Some think in Rust. Some think in Ruby, though we're not sure those people should be writing financial contracts."</p>
      <p>All eight languages compile to identical Bitcoin Script output. "It's like the Tower of Babel," said one BSV developer, "except instead of God confusing the languages to scatter humanity, Siggi unified them to write OP_CHECKSIG."</p>

      <h2>A Real Debugger For a Theoretical User Base</h2>
      <p>The playground's centrepiece is a step-through debugger that lets developers walk through every Bitcoin Script opcode one at a time, forwards and backwards. The main stack and alt stack update after each step. IF/ELSE/ENDIF blocks are indented. Non-taken branches can be skipped with a toggle.</p>
      <p>"It's the kind of debugger you'd expect from a mature IDE," Siggi wrote. TNT can confirm this is true. It is also the kind of debugger you'd expect to be used by more than four people.</p>
      <p>The debugger auto-generates real ECDSA signatures for test execution. Three deterministic key pairs &mdash; Alice, Bob, and Charlie &mdash; are built in. When asked if a fourth test key would be added, Siggi said there was "no need, as Alice, Bob, and Charlie already outnumber the platform's active user base."</p>

      <h2>The Share Button That Changed Nothing</h2>
      <p>Perhaps the playground's most ambitious feature is its share functionality. Clicking "Share" compresses the entire contract into a URL fragment using LZ-string compression. No data hits a server. Anyone with the link can load the exact contract, ready to compile.</p>
      <p>"This means bug reports, teaching examples, and contract reviews can all be a single URL," Siggi explained. TNT investigated and found that the feature has been used three times: once by Siggi to test it, once by Siggi to share it with someone who did not click it, and once by a bot indexing the page.</p>
      <p>The URL-based sharing also means that, in theory, an entire smart contract economy could be bootstrapped through hyperlinks. In practice, the longest chain of shares so far is Siggi sending a link to Siggi's other browser tab.</p>

      <h2>Post-Quantum Before Post-Relevance</h2>
      <p>The playground is reportedly capable of compiling post-quantum signature schemes that produce hundreds of kilobytes of script. Web Workers keep the UI responsive during compilation. "This is future-proof technology," Siggi told TNT. "When quantum computers arrive and break ECDSA, the six people using BSV smart contracts will be fully prepared."</p>
      <p>The compiler runs with a 600ms debounce after each edit. Errors appear with line numbers. Compilation state is shown in a status bar. "It's extremely polished," said an anonymous developer who requested we clarify that he is "not Siggi using a different browser."</p>

      <h2>Drag and Drop Into the Void</h2>
      <p>The playground also supports drag-and-drop: developers can drag .runar.ts, .runar.py, .runar.rb, .runar.zig, or other supported contract files directly onto the browser window. Eight file extensions are recognised.</p>
      <p>TNT attempted to test this feature but could not locate anyone with a .runar.rb file on their filesystem. We created one ourselves. It compiled. The debugger worked. The stack was correct. There was no one to share it with.</p>

      <h2>Community Response</h2>
      <p>The BSV Slack reacted warmly to the announcement. "This is incredible," wrote @builds_things_nobody_uses, who is reportedly also working on a BSV-powered toaster. Calvin Ayre retweeted the announcement with the comment: "BSV developer tools are years ahead of the competition. Siggi is a genius. Buy BSV."</p>
      <p>At press time, Siggi was already working on his next project: a Run&aacute;r language server protocol extension for Vim, Emacs, VS Code, Sublime Text, Atom, Notepad++, ed, and a custom text editor he built himself. When asked about the target user base, he said "it's not about the users, it's about the opcodes."</p>
    `,
    price: 75
  },
  {
    slug: 'tetheral-reserve-bank',
    title: 'Kurt Wuckert Jr Discovers Tether Is Bad, Publishes 9,000-Word Expos&eacute; With 35 Footnotes',
    author: 'Kurt Wuckert Jr',
    date: '2026-03-25',
    excerpt: 'Bitcoin Historian uncovers what everyone already knew, adds footnotes.',
    image: '/g3.png',
    content: `
      <p class="lead">FLORIDA &mdash; CoinGeek Chief Bitcoin Historian, GorillaPool founder, bOpen founder, Open Protocol Labs founder, podcast host, BJJ black belt, and self-described "world's foremost Bitcoin Historian" Kurt Wuckert Jr has published a 9,000-word investigative article revealing that Tether, the company that has been publicly accused of fraud since 2017, is in fact fraudulent. TNT can confirm that this is the longest "I told you so" in the history of cryptocurrency journalism, despite the fact that Kurt did not, at any point, previously tell anyone so.</p>

      <h2>The Jekyll Island Comparison Nobody Needed</h2>
      <p>Kurt's article opens by comparing Tether to the 1910 Jekyll Island meeting that created the Federal Reserve. "I keep thinking about Jekyll Island," Kurt writes, "because we are watching something remarkably similar happen in real time." TNT notes that the Jekyll Island meeting involved six men travelling in secret under fake names. Tether's executives, by contrast, have been doing their thing on the blockchain, in Lugano, on podcasts, and in federal court filings for over a decade. The comparison works if you define "remarkably similar" as "not similar at all, but both involve money."</p>
      <p>Kurt proposes the term "Tetheral Reserve Bank" to describe what Tether is building. TNT's editorial board described this portmanteau as "the kind of thing you come up with at 2am and should delete by 9am but instead make the centrepiece of a 9,000-word article."</p>

      <h2>The Poker Cheats Section</h2>
      <p>A substantial portion of the article documents the backgrounds of Tether's founders and associates. Kurt reveals that Bitfinex was founded by a man who promoted Ponzi schemes on Bitcoin Talk forums, that Tether's former general counsel previously oversaw compliance at an online poker site caught using "God Mode" to cheat players, and that this same compliance DNA connects to FTX.</p>
      <p>TNT can confirm that all of this is true. TNT can also confirm that this information has been publicly available since approximately 2017, when an anonymous researcher called "Bitfinexed" published it on Medium. Kurt has added footnotes, which we acknowledge is a meaningful contribution.</p>
      <p>When TNT asked Kurt if he had cited Bitfinexed's original reporting, Kurt said he had, "in footnotes 33 through 35." When TNT asked why footnotes 33 through 35 were at the bottom of a 9,000-word article that most readers would not finish, Kurt said, "That's the beauty of long-form journalism. The truth is always at the bottom."</p>

      <h2>The Epstein Section</h2>
      <p>Kurt's article devotes approximately 1,200 words to documenting connections between Tether co-founder Brock Pierce, Cantor Fitzgerald CEO Howard Lutnick, and Jeffrey Epstein. The reporting cites DOJ files, Protos investigations, and X posts by Mario Nawfal. Kurt notes that Pierce has "over 1,800 references" in the Epstein documents and that Lutnick appears "over 250 times."</p>
      <p>"Where there is smoke, there is fire," Kurt writes. He uses this phrase twice. TNT's editorial board noted that this is the investigative journalism equivalent of saying "just asking questions" while clearly not just asking questions.</p>
      <p>When TNT pointed out that Kurt's own personal website contains a structured data schema listing Dr. Craig S. Wright as a "colleague" and that Wright's own legal difficulties might warrant similar scrutiny, Kurt said that was "a completely different situation" and that his JSON-LD markup was "not admissible as evidence of anything."</p>

      <h2>$141 Billion in Treasury Bonds</h2>
      <p>The article's strongest section documents Tether's U.S. Treasury holdings. Kurt reports that Tether holds approximately $141 billion in U.S. government debt, was the seventh largest net buyer of Treasuries globally in 2024, earns $13 billion annually in profit, and has never been audited in eleven years of operation.</p>
      <p>TNT can confirm these figures are accurate and alarming. TNT can also confirm that Kurt published this section immediately after a section about poker cheating and immediately before a section about the Commerce Secretary's children, which is the investigative journalism equivalent of hiding your best material between two conspiracy yarn-boards.</p>
      <p>"If you had $145 billion in reserves, and your business model depended entirely on public trust in those reserves, and you had been caught lying about those reserves by two separate federal regulators, why would you spend eleven years refusing to prove you are solvent?" Kurt writes. TNT agrees this is an excellent question. TNT also notes that Kurt has spent approximately four years refusing to explain how GorillaPool's mining economics work, which is perhaps a less consequential but structurally identical mystery.</p>

      <h2>The Lutnick Web</h2>
      <p>Kurt documents that Howard Lutnick, now U.S. Commerce Secretary, transferred Cantor Fitzgerald to trusts benefiting his children, and that one of those trusts borrowed money from Tether, secured by Cantor's equity stake in Tether. Kurt calls this "truly extraordinary."</p>
      <p>TNT notes that Kurt's personal website JSON-LD schema includes structured data asserting that he "knows" Peter Schiff, Tim Draper, Brad Feld, Patrick Bet-David, Kennedy (the Fox Business host), and Liz Claman, among approximately thirty other notable individuals. Whether Kurt actually knows all of these people or has optimised his schema for search engine authority is, like the Lutnick-Tether relationship, a question that "practically asks itself."</p>

      <h2>The "I Am Not Defending Central Banks" Disclaimer</h2>
      <p>Near the end of the article, Kurt includes a disclaimer: "I am not a defender of the existing central banking system." He then spends 200 words defending the existing central banking system. "At least the Federal Reserve publishes audited financial statements," Kurt writes. "At least there is a nominal democratic mechanism."</p>
      <p>TNT's editorial board described this section as "the most reluctant defence of the Fed since Ron Paul accidentally said something nice about monetary policy in 2009." Kurt, who has built his entire career on the premise that Bitcoin was designed to replace central banks, appears to have concluded that central banks are actually fine as long as the alternative is run by Italians who used to sell pirated Microsoft software.</p>

      <h2>The Update That Proved Nothing</h2>
      <p>Within hours of publication, Tether announced it had engaged an unnamed Big Four accounting firm for its first audit. Kurt added an update noting this and observing that "Tether has announced audit plans before." He wrote: "The operative word is 'if.'"</p>
      <p>TNT can confirm that this is the correct operative word. TNT can also confirm that Kurt has now written more words about Tether's audit than Tether has written about its own audit, which is itself a kind of achievement.</p>

      <h2>Community Response</h2>
      <p>The BSV Slack reacted with characteristic nuance. "Kurt's done it again," wrote @iworshipcraig_SV, adding a fire emoji. "This is the most important piece of financial journalism since Craig invented journalism." Another member asked if the article was available as a BSV transaction. It was not.</p>
      <p>Calvin Ayre tweeted: "Kurt exposes the Tether fraud. This is why BSV exists. Honest money for honest people. Buy BSV." He did not address the fact that he appears nowhere in the article's thirty-five footnotes, which TNT's editorial board described as "the most suspicious absence since Keyser S&ouml;ze."</p>
      <p>At press time, Kurt was reportedly working on a follow-up article about Binance. Sources close to Kurt say it will be approximately 12,000 words, will compare Binance to the East India Company, and will include a section titled "The CZ Web" that connects Changpeng Zhao to at least three people Kurt has listed in his website's JSON-LD schema under "knows."</p>
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