import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_BASE_URL } from '../utils/sitemapGenerator';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  breadcrumbs?: BreadcrumbItem[];
}

const DEFAULT_TITLE = 'Muhammad Karim Anggara | MKA.DEV – AI Vibe Coder & Full Stack Developer';
const DEFAULT_DESCRIPTION = 'Muhammad Karim Anggara (MKA.DEV) adalah AI Vibe Coder, Web Developer, dan Prompt Engineer yang membangun website modern, aplikasi web interaktif, dan solusi cerdas.';
const DEFAULT_KEYWORDS = 'Muhammad Karim Anggara, MKA.DEV, AI Vibe Coder, Web Developer Indonesia, Prompt Engineer, React, Full Stack Developer, MacroPOS, ILMORA LMS, SecondText';
const DEFAULT_IMAGE = 'https://picsum.photos/seed/mkadev/1200/630';

const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  image = DEFAULT_IMAGE,
  type = 'website',
  author = 'Muhammad Karim Anggara',
  publishedTime,
  modifiedTime,
  structuredData,
  breadcrumbs,
}) => {
  // Format title: if specific title is provided, ensure brand suffix is clean
  const fullTitle = title 
    ? (title.includes('MKA') || title.includes('Muhammad Karim Anggara') ? title : `${title} | MKA.DEV`)
    : DEFAULT_TITLE;

  // Resolve base and full URL
  const origin = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : DEFAULT_BASE_URL;

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const resolvedPath = canonicalPath !== undefined ? canonicalPath : currentPath;
  const canonicalUrl = `${origin}${resolvedPath}`.replace(/\/+$/, '') || `${origin}/`;

  // Build breadcrumbs JSON-LD if provided
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${origin}${item.path}`
    }))
  } : null;

  return (
    <Helmet>
      {/* HTML Title & Description */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="MKA.DEV" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="id_ID" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mka_dev" />
      <meta name="twitter:creator" content="@mka_dev" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data JSON-LD */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
