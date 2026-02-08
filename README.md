# Saturdata Website

A modern, database IDE-themed website for the Saturdata podcast built with Next.js 16.

## Features

- 🎨 Database IDE aesthetic with dark theme
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 and React 19
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS v4 for styling
- 🚀 Static export ready for GitHub Pages

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
```

This creates a static export in the `out/` directory ready for deployment.

## Deployment to GitHub Pages

This site is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Initial Setup (One-time)

1. Go to your repository settings on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Build and deployment**, set:
   - **Source**: GitHub Actions
4. Save the settings

### Automatic Deployment

Once configured, the site will automatically deploy when you push to the `main` branch:

```bash
git add .
git commit -m "your commit message"
git push origin main
```

The GitHub Actions workflow will:
1. Build your Next.js site
2. Export it as static files
3. Deploy to GitHub Pages

You can monitor the deployment progress in the **Actions** tab of your GitHub repository.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── episode-card.tsx
│   ├── host-card.tsx
│   ├── ide-sidebar.tsx
│   ├── ide-tabs.tsx
│   ├── query-editor.tsx
│   ├── results-table.tsx
│   └── status-bar.tsx
├── lib/               # Utility functions
│   ├── content-data.ts # Content data
│   └── utils.ts       # Helper functions
└── public/            # Static assets
    ├── assets/        # Images
    └── favicons/      # Favicons
```

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Components**: Radix UI
- **Analytics**: Vercel Analytics

## License

All rights reserved © 2026 Saturdata
