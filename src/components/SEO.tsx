import { Helmet } from 'react-helmet-async';

export type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'service';
  keywords?: string[];
  noIndex?: boolean;
  jsonLd?: Array<Record<string, unknown>>;
};

const SITE_NAME = 'Z Labs';
const SITE_URL = 'https://www.zlabs.company';
const DEFAULT_IMAGE = '/logo.png';
const DEFAULT_KEYWORDS = [
  'digital marketing agency',
  'website development company',
  'mobile app development',
  'AI solutions',
  'CRM development',
  'business automation',
  'digital marketing India',
  'SEO services',
  'Google Ads',
  'Meta Ads',
  'software development agency',
  'Z Labs',
  'zlabs',
];

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = [],
  noIndex = false,
  jsonLd = [],
}: SEOProps) {
  const fullTitle = title.endsWith(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = path.startsWith('http') ? path : `${SITE_URL}${path === '/' ? '' : path}`;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const mergedKeywords = Array.from(new Set([...DEFAULT_KEYWORDS, ...keywords])).join(', ');

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={mergedKeywords} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />
      <meta name="author" content="Z Labs" />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <meta name="theme-color" content="#070b16" />
      <meta name="msapplication-TileColor" content="#070b16" />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} logo`} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Z Labs',
  alternateName: ['Z Labs Digital', 'Z Labs Solutions', 'zlabs'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/logo.png`,
  description:
    'Z Labs is a full-service digital solutions company specializing in Digital Marketing, Website Development, Mobile App Development, AI Solutions, CRM Development, and Business Automation.',
  email: 'contact.zlabs@gmail.com',
  telephone: '+91-7388936927',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-7388936927',
    contactType: 'customer support',
    email: 'contact.zlabs@gmail.com',
    availableLanguage: ['English', 'Hindi'],
    areaServed: ['IN', 'US', 'GB', 'CA', 'AE', 'SG'],
  },
  areaServed: ['Worldwide', 'India', 'USA', 'UK', 'Canada', 'UAE', 'Singapore'],
  sameAs: [
    'https://www.zlabs.company',
    'https://wa.me/917388936927',
  ],
  foundDate: '2023',
  founder: {
    '@type': 'Person',
    name: 'Z Labs',
  },
  numberofEmployees: {
    '@type': 'QuantitativeValue',
    value: 50,
    unitText: 'FTE',
  },
  knowsAbout: [
    'Digital Marketing',
    'SEO',
    'Google Ads',
    'Meta Ads',
    'Website Development',
    'Mobile App Development',
    'Artificial Intelligence',
    'CRM Development',
    'Business Automation',
    'Branding',
  ],
};

export function serviceSchema(
  name: string,
  description: string,
  areas: string[] = ['India', 'Worldwide'],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name: `${name} by Z Labs`,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Z Labs',
      url: SITE_URL,
    },
    areaServed: areas.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    url: `${SITE_URL}/services`,
  };
}

export function webPageSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    publisher: {
      '@type': 'Organization',
      name: 'Z Labs',
      url: SITE_URL,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Z Labs',
      url: SITE_URL,
    },
    inLanguage: 'en-US',
  };
}
