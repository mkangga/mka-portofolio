import { PROJECTS, Project } from '../data/projects';

export interface SitemapEntry {
  url: string;
  relativePath: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  title: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  isProject?: boolean;
  externalLink?: string;
}

export const DEFAULT_BASE_URL = 'https://www.mka.my.id';

/**
 * Returns dynamic base URL from window location if available, otherwise default production domain.
 */
export function getSiteBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    // Avoid localhost if user wants to copy production sitemap, or return current origin
    const origin = window.location.origin;
    if (!origin.includes('localhost') && !origin.includes('127.0.0.1')) {
      return origin;
    }
  }
  return DEFAULT_BASE_URL;
}

/**
 * Get all sitemap entries including core pages and dynamic project detail pages.
 * Any new project added to PROJECTS is automatically included here!
 */
export function getSitemapEntries(baseUrl: string = DEFAULT_BASE_URL): SitemapEntry[] {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages: SitemapEntry[] = [
    {
      url: `${cleanBase}/`,
      relativePath: '/',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
      title: 'Home – Muhammad Karim Anggara (MKA.DEV)',
      description: 'Portfolio utama Muhammad Karim Anggara, AI Vibe Coder & Full Stack Web Developer.'
    },
    {
      url: `${cleanBase}/work`,
      relativePath: '/work',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9,
      title: 'Selected Work & Projects Showcase',
      description: 'Daftar portofolio proyek web modern, e-commerce, POS, AI apps, dan simulasi kreatif.'
    },
    {
      url: `${cleanBase}/services`,
      relativePath: '/services',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
      title: 'Services & Development Solutions',
      description: 'Layanan web development, UI/UX design, AI integration, dan rapid prototyping modern.'
    },
    {
      url: `${cleanBase}/about`,
      relativePath: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
      title: 'About Muhammad Karim Anggara',
      description: 'Profil, latar belakang, filosofi vibe coding, dan keahlian teknologi Muhammad Karim Anggara.'
    },
    {
      url: `${cleanBase}/connect`,
      relativePath: '/connect',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
      title: 'Connect & Social Channels',
      description: 'Jaringan media sosial, GitHub, LinkedIn, dan kanal kolaborasi digital.'
    },
    {
      url: `${cleanBase}/contact`,
      relativePath: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
      title: 'Contact Muhammad Karim Anggara',
      description: 'Hubungi langsung untuk konsultasi proyek web development dan kolaborasi digital.'
    },
    {
      url: `${cleanBase}/sitemap`,
      relativePath: '/sitemap',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6,
      title: 'HTML Sitemap & Search Console Hub',
      description: 'Peta situs lengkap semua halaman dan proyek terindeks untuk Google Search Console.'
    }
  ];

  // Map every single project dynamically into indexable sitemap URLs
  const projectPages: SitemapEntry[] = PROJECTS.map((project: Project) => {
    // Project lastmod can be estimated from year or current date
    const yearDate = `${project.year || '2026'}-01-01`;
    const lastmod = yearDate > currentDate ? currentDate : yearDate;

    return {
      url: `${cleanBase}/work/${project.id}`,
      relativePath: `/work/${project.id}`,
      lastmod,
      changefreq: 'weekly',
      priority: 0.8,
      title: `${project.title} – ${project.category}`,
      category: project.category,
      description: project.description,
      imageUrl: project.image,
      isProject: true,
      externalLink: project.link
    };
  });

  return [...staticPages, ...projectPages];
}

/**
 * Generates official XML sitemap string conforming to sitemaps.org & Google Search Console standards.
 */
export function generateSitemapXml(baseUrl: string = DEFAULT_BASE_URL): string {
  const entries = getSitemapEntries(baseUrl);

  const xmlUrls = entries
    .map((entry) => {
      let xml = `  <url>\n    <loc>${escapeXml(entry.url)}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority.toFixed(1)}</priority>`;

      if (entry.imageUrl) {
        xml += `\n    <image:image>\n      <image:loc>${escapeXml(entry.imageUrl)}</image:loc>\n      <image:title>${escapeXml(entry.title)}</image:title>\n      <image:caption>${escapeXml(entry.description || entry.title)}</image:caption>\n    </image:image>`;
      }

      xml += `\n  </url>`;
      return xml;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlUrls}
</urlset>`;
}

/**
 * Generates standard robots.txt targeting Googlebot and web crawlers with reference to sitemap.xml.
 */
export function generateRobotsTxt(baseUrl: string = DEFAULT_BASE_URL): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  return `# Robots.txt for Muhammad Karim Anggara (MKA.DEV)
# Automated crawler indexing directives

User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*

User-agent: Googlebot
Allow: /
Allow: /work/
Allow: /images/

User-agent: Googlebot-Image
Allow: /

# Canonical Sitemap location for Google Search Console & Search Engines
Sitemap: ${cleanBase}/sitemap.xml
`;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
