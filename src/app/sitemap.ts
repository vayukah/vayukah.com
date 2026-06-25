import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://vayukah6650.builtwithrocket.new';
  return [
    { url: `${base}/home-page`, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/drone`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/dronesharpgcs`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/dronesharpcloud`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/drones4relief`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.7 },
  ];
}