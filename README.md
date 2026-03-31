# BSV Article Platform

A Substack-like article reader with BSV 402 payment middleware.

## What we're doing here

This demo implements a paywalled content platform using Bitcoin SV (BSV) micropayments via the 402 Payment Required HTTP status code and custom headers (BRC-29 inspired).

### Features
- Hardcoded sample articles with prices (100 sats each)
- Express server with payment middleware
- Wallet integration using @bsv/sdk and @bsv/wallet-toolbox
- Strict header-based payment validation for article access
- Returns 402 with payment instructions when no payment provided

## How it works

1. GET `/` - Lists available articles
2. GET `/articles/:slug` - Protected route
   - No `x-bsv-*` headers? Returns 402 with `x-bsv-sats: 100` and server identity
   - Valid payment headers? Validates tx, internalizes payment, serves content

## Setup

1. Copy `.env.example` to `.env`
2. Add `PRIVATE_KEY=your_private_key_here`
3. `npm install`
4. `npm run dev`

## Tech Stack
- TypeScript
- Express
- BSV SDK & Wallet Toolbox
- Testnet by default

See `src/` for implementation details.
