import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'TalentPlex — Build. Hire. Grow.', template: '%s | TalentPlex' },
  description: 'Technology, digital and recruitment for ambitious businesses.',
  applicationName: 'TalentPlex',
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  openGraph: {
    type: 'website',
    siteName: 'TalentPlex',
    title: 'TalentPlex — Build. Hire. Grow.',
    description: 'Technology, digital and recruitment for ambitious businesses.',
    images: [{ url: '/brand/talentplex-og.svg', width: 1200, height: 630, alt: 'TalentPlex — Technology. Digital. Talent.' }],
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#E3131B',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
