# My First Mini App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`npx create-onchain@alpha --mini`](https://docs.base.org/builderkits/minikit/getting-started) that demonstrates the capabilities of MiniKit from OnchainKit.

![Mini App Demo](public/Mini-App.gif)

## About MiniKit

MiniKit is a powerful toolkit by OnchainKit that enables developers to build onchain mini apps compatible with the [Frames v2](https://docs.farcaster.xyz/developers/frames/v2/getting-started) standard.. It provides a set of React components and hooks for building decentralized applications on Base.

> **Note:** MiniKit is currently in alpha. We would love your community feedback! Please tag @buildonchain with your questions, suggestions, or issues.

### MiniKit Features

- **Frame Integration**: Add your app as a Frame v2 with `useAddFrame` hook
- **Out-of-box compatibility**: Works out of box for Coinbas Wallet, Warpcast, and other Frames v2 clients.
- **Wallet Connection**: Easy wallet connectivity 
- **Identity Management**: Display user identities with Basename support
- **Transaction Handling**: Simplified transaction creation and management
- **Notification System**: Send notifications to users
- **Responsive Design**: Built-in responsive components for all devices

## Demo App Features

This demo app showcases various MiniKit capabilities:

### Core Features

- **Responsive UI**: Beautiful, minimalistic interface that works on all devices
- **Wallet Integration**: Connect your wallet to interact with the app
- **Frame Support**: Save the app as a Frame with one click
- **Theme Support**: Dark mode compatibility

### Interactive Components

- **Todo List**: Add, complete, and delete tasks with a clean interface
- **Transaction Demo**: Experience seamless sponsored transactions
- **Snake Game**: Play a fully-featured Snake game with:
  - Multiple levels with increasing difficulty
  - High score tracking with blockchain attestations
  - Leaderboard with on-chain verification
  - Special konami code easter egg

### Backend Capabilities

- **Redis Integration**: Store and retrieve data with Upstash Redis
- **API Routes**: Endpoints for scores, notifications, and webhooks
- **Blockchain Attestations**: Record high scores on-chain with EAS
- **Notification System**: Send and manage user notifications

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Update your .env file with your Redis credentials and OnchainKit API key:

```
REDIS_URL=your-redis-url
REDIS_TOKEN=your-redis-token
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your-api-key
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=My First Mini App
NEXT_PUBLIC_ICON_URL=your-icon-url
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

- `/app`: Next.js app directory with pages and components
  - `/components`: Reusable UI components
  - `/api`: API routes for backend functionality
  - `/svg`: SVG components for icons and graphics
- `/lib`: Utility functions and API clients
- `/public`: Static assets

## Learn More

To learn more about OnchainKit and MiniKit, see the [documentation](https://docs.base.org/builderkits/minikit/getting-started).

To learn more about Next.js, see the [Next.js documentation](https://nextjs.org/docs).

To learn more about Base, visit [base.org](https://base.org/builders/minikit).
