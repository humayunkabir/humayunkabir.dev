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
- `pnpm deploy`: Builds the project and deploys it (configured for GitHub Pages).

## Project Structure

- `src/app/` - Next.js App Router pages, layouts, and API routes.
- `src/components/` - Reusable React components.
- `src/styles/` - Global stylesheets.
- `src/assets/` - Static assets and media files.

## Deployment

### GitHub Pages

The project is configured for easy deployment to GitHub Pages. The `deploy` script handles the build process and pushes the `out` directory to the `gh-pages` branch.

1. Ensure your Next.js configuration is set up for static exports (e.g., `output: 'export'` in `next.config.ts`).
2. Run the deployment command:
   ```bash
   pnpm deploy
   ```
This will automatically build your static site, create the `out` directory, and push it to the `gh-pages` branch. Make sure GitHub Pages is enabled in your repository settings to serve from the `gh-pages` branch.

### Cloudflare Pages

To deploy this static Next.js project on Cloudflare Pages:

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
2. Click **Create** > **Pages** > **Connect to Git** and select this repository.
3. Configure the following build settings during setup:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `pnpm build`
   - **Build output directory:** `out`
4. Under **Environment variables (advanced)**, you may want to set `NODE_VERSION` to a version compatible with your setup (e.g., `20` or higher).
5. Click **Save and Deploy**. 

Cloudflare will now automatically trigger a build and deploy your site on every push to your production branch.
