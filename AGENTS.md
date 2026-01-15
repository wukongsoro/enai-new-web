# React Best Practices for ENAI Website

This document outlines the React and Next.js best practices followed in this codebase, 
based on [Vercel's React Best Practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices).

## 1. Bundle Size Optimization (CRITICAL)

### ✅ optimizePackageImports Configured

All major libraries are configured in `next.config.ts` for automatic import optimization:
- Icon libraries: `lucide-react`, `@heroicons/react`, `@tabler/icons-react`
- UI components: All `@radix-ui/*` packages, `@headlessui/react`
- Animation: `framer-motion`, `motion`
- Utilities: `date-fns`, `lodash`, `class-variance-authority`

This provides **15-70% faster dev boot** and **40% faster cold starts**.

## 2. Static Export Configuration

Since this is a static site deployed to Netlify:
- `output: 'export'` is enabled
- `images.unoptimized: true` (Netlify handles CDN optimization)
- No server-side features (no API routes, no middleware)

## 3. Client Components

Client components (`"use client"`) are used only where necessary:
- Interactive UI components (navigation, forms, carousels)
- Animation components (framer-motion effects)
- Event handlers (click, hover, scroll)

Page components remain Server Components by default for optimal performance.

## 4. Security

- `poweredByHeader: false` - Don't expose Next.js version
- `compress: true` - Enable gzip compression
- Headers configured in `netlify.toml` for CSP, X-Frame-Options, etc.

## 5. Audit Status

- **Vulnerabilities**: 0 (all fixed via package updates and overrides)
- **Next.js Version**: 16.1.2 (latest stable)
- **React Version**: 19.2.3 (latest stable)
