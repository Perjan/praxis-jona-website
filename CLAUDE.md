# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual medical practice website for "Praxis Jona" in Berlin, built with Next.js 13+ App Router and TypeScript. The site serves patients with information, blog content, and appointment booking integration.

## Common Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Start production server
npm run start
```

## Architecture & Key Patterns

### Tech Stack
- **Framework**: Next.js 13.4+ with App Router
- **Language**: TypeScript (tsconfig strict mode disabled)
- **Styling**: Tailwind CSS with custom medical theme colors
- **Content**: MDX blog posts via Contentlayer
- **Email**: SendGrid API for contact forms
- **Analytics**: Vercel Analytics + Umami

### Directory Structure
- `/app` - Next.js App Router pages and components
- `/app/en` - English version pages (German is default)
- `/app/components` - Shared UI components
- `/app/api` - API routes (sendgrid, analytics)
- `/posts` - MDX blog content
- `/public` - Static assets

### Key Development Patterns

1. **Internationalization**: Manual i18n with `/en` routes for English content. German pages are at root level.

2. **Blog Posts**: Create MDX files in `/posts` directory. Contentlayer automatically processes them on build.

3. **Styling**: Use Tailwind utilities. Custom animations are in `/app/styles/animations.css`.

4. **External Integrations**:
   - Doctolib appointment booking (via redirects in next.config.js)
   - SendGrid for email (requires SENDGRID_API_KEY env var)

5. **Page Creation**: When adding new pages, create both German (root) and English (`/en`) versions.

## Important Configuration

- **next.config.js**: Contains redirects for appointment booking and URL rewrites for legal pages
- **Environment Variables**: SENDGRID_API_KEY required for contact form functionality
- **No test suite**: Project currently has no testing framework configured