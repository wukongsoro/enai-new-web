import { MetadataRoute } from 'next'

/**
 * Sitemap for Enai AI - Revenue Operating System
 * Founder & CEO: Nikhil Nehra
 * Website: https://www.enai.ai
 * LinkedIn: https://www.linkedin.com/in/nikhilnehra
 */

// Force static generation for sitemap
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.enai.ai'
  
  // Launch-ready blog post slugs
  const blogPosts = [
    'founder-enterprise-autonomous-governance',
    'governed-revenue-execution-vs-ai-sdr-tools',
    'enai-for-logistics-transport-revenue-execution',
    'enai-for-healthcare-revenue-execution',
    'enai-for-wholesale-b2b-retail-revenue-execution',
    'enai-for-industrials-revenue-workflows',
    'enai-for-professional-services-business-development',
    'enai-for-private-equity-deal-sourcing',
    'enai-for-financial-services-compliant-revenue-workflows',
    'enai-for-software-revenue-workflows',
    'enai-for-hardware-sales-workflows',
    'enai-for-ai-native-companies',
    'enai-for-sovereign-ai-revenue-workflows',
  ]

  // Comparison pages are excluded from launch sitemap until rewritten.
  const comparisonPages: string[] = [
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
    'london',
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
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demo-library`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
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
    {
      url: `${baseUrl}/webinar/revenue-execution-gap`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ]

  // Blog posts
  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: slug === 'founder-enterprise-autonomous-governance' ? 0.9 : 0.85,
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
