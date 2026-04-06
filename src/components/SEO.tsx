import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = 'Muhammad Karim Anggara | MKA.DEV - AI Vibe Coder & Web Developer', 
  description = 'Muhammad Karim Anggara (MKA.DEV) adalah AI Vibe Coder, Web Developer, dan Prompt Engineer yang ahli dalam membangun solusi digital inovatif dan modern.' 
}) => {
  const siteUrl = window.location.origin;
  const ogImage = `https://picsum.photos/seed/mkadev/1200/630`; // Using a placeholder for now

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="AI Vibe Coder, Web Developer, Prompt Engineer, Muhammad Karim Anggara, MKA.DEV, Portfolio, Indonesia" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="MKA.DEV" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={window.location.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@mka_dev" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Muhammad Karim Anggara" />
      <link rel="canonical" href={window.location.href} />

      {/* WhatsApp/LinkedIn specific */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
