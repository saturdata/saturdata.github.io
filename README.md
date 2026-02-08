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
