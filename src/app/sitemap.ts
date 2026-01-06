import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://windowreplacementdallastx.com'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/materials',
    '/windows',
    '/doors',
    '/locations',
    '/brands',
    '/brands/andersen-windows-doors',
    '/brands/jeld-wen-windows-doors',
    '/brands/marvin-windows-doors',
    '/brands/pella-windows-doors',
  ]

  // Window types
  const windowTypes = [
    'double-hung-windows',
    'single-hung-windows',
    'casement-windows',
    'awning-windows',
    'sliding-windows',
    'picture-windows',
    'bay-and-bow-windows',
    'special-shape-windows',
    'vinyl-windows',
    'aluminum-windows',
    'fibrex-windows',
    'fiberglass-windows',
    'wood-clad-windows',
    'wood-windows',
  ]

  // Door types
  const doorTypes = [
    'entry-door-installation',
    'patio-door-installation',
    'french-door-installation',
    'sliding-glass-door-installation',
    'storm-door-installation',
    'custom-door-installation',
  ]

  // Service pages
  const servicePages = [
    'bifold-doors',
    'french-hinged-patio-doors',
    'front-entry-doors',
    'multi-slide-doors',
    'sliding-patio-doors',
  ]

  // Location pages
  const locationPages = [
    'arlington-tx',
    'carrollton-tx',
    'dallas-tx',
    'fort-worth-tx',
    'frisco-tx',
    'grand-prairie-tx',
    'irving-tx',
    'lewisville-tx',
    'plano-tx',
    'richardson-tx',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add static pages
  staticPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: page === '' ? 1 : 0.8,
    })
  })

  // Add window pages
  windowTypes.forEach(windowType => {
    sitemap.push({
      url: `${baseUrl}/windows/${windowType}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add door pages
  doorTypes.forEach(doorType => {
    sitemap.push({
      url: `${baseUrl}/doors/${doorType}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add service pages
  servicePages.forEach(servicePage => {
    sitemap.push({
      url: `${baseUrl}/services/${servicePage}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  // Add location pages
  locationPages.forEach(locationPage => {
    sitemap.push({
      url: `${baseUrl}/locations/${locationPage}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  return sitemap
}