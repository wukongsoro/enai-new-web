import type { NextConfig } from "next";

/**
 * Next.js 16 Configuration for Static Export
 * 
 * Following Vercel React Best Practices:
 * @see https://vercel.com/blog/introducing-react-best-practices
 * @see https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices
 * 
 * Using unoptimized: true for static export deployment to Netlify.
 * Netlify handles image optimization at CDN level.
 * 
 * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Performance: compress output
  compress: true,

  // Security: don't expose server info
  poweredByHeader: false,

  // Caching: enable ETags
  generateEtags: true,

  /**
   * CRITICAL: Bundle Size Optimization
   * 
   * Per Vercel best practices, optimizePackageImports auto-transforms
   * barrel file imports (e.g., `import { X } from 'lucide-react'`) 
   * to direct imports at build time.
   * 
   * This provides:
   * - 15-70% faster dev boot
   * - 28% faster builds  
   * - 40% faster cold starts
   * - Significantly faster HMR
   * 
   * @see https://vercel.com/blog/how-we-optimized-package-imports-in-next-js
   */
  experimental: {
    optimizePackageImports: [
      // Icon libraries (can have 1,500-10,000 re-exports)
      'lucide-react',
      '@heroicons/react',
      '@tabler/icons-react',
      'react-icons',

      // UI component libraries
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip',
      '@headlessui/react',

      // Animation libraries
      'framer-motion',
      'motion',

      // Charting
      'recharts',

      // Utility libraries
      'date-fns',
      'lodash',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
    ],
  },
};

export default nextConfig;
