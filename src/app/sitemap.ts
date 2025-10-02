import { MetadataRoute } from 'next'

/**
 * Sitemap for Enai AI - AI-Powered Sales Automation Platform
 * Founder & CEO: Nikhil Nehra
 * Website: https://www.enai.ai
 * LinkedIn: https://www.linkedin.com/in/nikhilnehra
 */

// Force static generation for sitemap
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.enai.ai'
  
  // Blog post slugs
  const blogPosts = [
    'ai-powered-sales-collaboration-transforms-b2b-revenue',
    'complete-ai-bdr-playbook-scale-outbound-10x',
    'ai-automation-transforms-sales-productivity-70-percent-time-savings',
    'future-ai-sales-automation-trends-2025',
    'roi-ai-powered-sales-automation',
    'ai-vs-human-bdrs-comparison-guide',
    'implement-ai-sales-team-guide',
    'cold-email-automation-best-practices',
    'lead-qualification-ai-complete-guide',
    'scaling-outbound-sales-ai-strategies',
    'ai-sales-tools-comparison-2025',
    'linkedin-automation-sales-guide',
    'b2b-sales-automation-playbook',
  ]

  // Comparison pages
  const comparisonPages = [
    'enai-vs-apollo',
    'enai-vs-outreach',
    'enai-vs-clay',
    'enai-vs-salesloft',
    'best-ai-bdr-tools',
  ]

  // Solution pages
  const solutionPages = [
    'saas',
    'recruiting',
    'agencies',
  ]

  // Location pages
  const locationPages = [
    'san-francisco',
    'new-york',
    'austin',
    'boston',
    'seattle',
    'berlin',
    'amsterdam',
    'paris',
    'singapore',
    'sydney',
  ]

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/knowledge-base`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Blog posts
  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Comparison pages
  const comparisonUrls = comparisonPages.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Solution pages
  const solutionUrls = solutionPages.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Location pages with enhanced priority for major cities
  const locationUrls = locationPages.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: ['new-york', 'london', 'san-francisco'].includes(slug) ? 0.85 : 0.75,
  }))

  return [
    ...mainPages,
    ...blogUrls,
    ...comparisonUrls,
    ...solutionUrls,
    ...locationUrls,
  ]
}

