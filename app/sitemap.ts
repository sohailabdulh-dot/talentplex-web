import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.talentplexglobal.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services/recruitment', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/services/technology', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/digital', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/recruitment-websites', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/solutions', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/solutions/custom-software', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/solutions/recruitment-technology', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/solutions/staffing-launch', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/solutions/automation', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/company', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/work', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
