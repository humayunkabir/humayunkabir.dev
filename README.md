# humayunkabir.dev

Personal portfolio and web space for Humayun Kabir.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Linter & Formatter:** [Biome](https://biomejs.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Getting Started

First, install the dependencies using `pnpm`:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project running.

## Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs Biome for code linting and formatting.

## Project Structure

- `src/app/` - Next.js App Router pages, layouts, and API routes.
- `src/components/` - Reusable React components.
- `src/styles/` - Global stylesheets.
- `src/assets/` - Static assets and media files.

## Deployment

### Cloudflare Pages

The project is configured to deploy full-stack Next.js features to Cloudflare Pages (via OpenNext).

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
2. Click **Create** > **Pages** > **Connect to Git** and select this repository.
3. Configure the following build settings during setup:
   - **Framework preset:** Next.js
   - **Build command:** `pnpm build`
4. Under **Environment variables (advanced)**, set `NODE_VERSION` to `22.12.0` (or your compatible local Node version).
5. Click **Save and Deploy**. 

Cloudflare will now automatically trigger a build and deploy your site using OpenNext on every push to your production branch.
