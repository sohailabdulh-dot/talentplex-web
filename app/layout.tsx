import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://www.talentplexglobal.com';
const siteName = 'TalentPlex Global';
const defaultTitle = 'TalentPlex Global | Direct Hire, Contract Staffing & Recruitment Services';
const defaultDescription = 'TalentPlex Global provides direct hire, contract staffing, executive search and recruitment support across engineering, manufacturing, construction, technology and more.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | TalentPlex Global',
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: 'TalentPlex Global LLC', url: siteUrl }],
  creator: 'TalentPlex Global LLC',
  publisher: 'TalentPlex Global LLC',
  category: 'Recruitment and Staffing',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [{
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'TalentPlex Global — Recruitment, Staffing, Technology and Digital Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/opengraph-image'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      { url: '/favicon.png?v=5', type: 'image/png' },
      { url: '/favicon.svg?v=5', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.png?v=5',
    apple: '/apple-touch-icon.png?v=5',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      alternateName: ['TalentPlex', 'TalentPlex Global LLC'],
      inLanguage: 'en-US',
    },
    {
      '@type': ['Organization', 'EmploymentAgency'],
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      legalName: 'TalentPlex Global LLC',
      alternateName: 'TalentPlex',
      url: siteUrl,
      logo: `${siteUrl}/brand/talentplex-logo-master.png`,
      image: `${siteUrl}/opengraph-image`,
      description: defaultDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5900 Balcones Drive, STE 100',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78731',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      serviceType: [
        'Direct Hire',
        'Contract Staffing',
        'Contract-to-Hire',
        'Executive Search',
        'Recruitment Process Outsourcing',
        'Recruitment Support',
      ],
      knowsAbout: [
        'Engineering Recruitment',
        'Manufacturing Staffing',
        'Construction Recruitment',
        'Automotive Recruitment',
        'Energy Staffing',
        'Supply Chain and Logistics Recruitment',
        'Technology Staffing',
        'Finance and Accounting Recruitment',
        'Healthcare Recruitment',
        'Professional Services Recruitment',
      ],
      brand: {
        '@type': 'Brand',
        name: 'NimbussOS',
        url: 'https://www.nimbussos.com/',
      },
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: '#E3131B',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
