import { Metadata, Viewport } from 'next';

export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
};

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://hotsonia.in'),
  title: 'Escorts In Patna | ₹9K Call Girls 24/7 Booking | Verified Models',
  description: 'Premium Escorts In Patna ✓ Book verified call girls starting ₹9,000. Incall & outcall services 24/7 at hotels & residences. 50+ locations. 100% genuine & discreet.',
  keywords: 'Escorts in Patna, Patna Escorts, Call Girls in Patna, Patna Call Girls, Escort Service in Patna, VIP Escorts, Premium Call Girls, Verified Escorts Patna',
  authors: [{ name: 'Escorts In Patna' }],
  creator: 'Escorts In Patna',
  publisher: 'Escorts In Patna',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://hotsonia.in',
    title: 'Escorts In Patna | ₹9K Call Girls In Patna 24/7 – Verified Models',
    description: 'Premium Escorts In Patna ✓ Book verified call girls starting ₹9,000. Incall & outcall services 24/7. 100% genuine & discreet.',
    images: [
      {
        url: '/images/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Escorts In Patna - Premium Verified Escort Service',
        type: 'image/webp',
      },
    ],
    siteName: 'Escorts In Patna',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@escortsinpatna',
    creator: '@escortsinpatna',
    title: 'Escorts In Patna | ₹9K Call Girls In Patna 24/7 – Verified Models',
    description: 'Book verified escorts in Patna starting ₹9,000. Incall & outcall 24/7. 100% genuine, discreet & confidential.',
    images: ['/images/banner.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'google4f16a66da72c5c2a',
  },
  category: 'Adult',
  alternates: {
    canonical: 'https://hotsonia.in',
  },
};

export function generateLocationMetadata(location: string, locationArea: string): Metadata {
  return {
    metadataBase: new URL('https://hotsonia.in'),
    title: `Escorts In ${locationArea} Patna | ₹9K Call Girls 24/7 | Verified Models`,
    description: `Premium Escorts In ${locationArea} Patna ✓ Book verified call girls from ₹9,000. Incall & outcall 24/7 at hotels & residences. 100% genuine, discreet & confidential.`,
    keywords: `Escorts in ${locationArea} Patna, ${locationArea} Call Girls, Patna Escorts, VIP Escorts ${locationArea}, Premium Companions ${locationArea}`,
    openGraph: {
      url: `https://hotsonia.in/locations/${location}`,
      type: 'website',
      title: `Escorts In ${locationArea} Patna | ₹9K Call Girls 24/7 – Verified Models`,
      description: `Book verified escorts in ${locationArea}, Patna starting ₹9,000. Incall & outcall 24/7. 100% genuine.`,
      images: [
        {
          url: 'https://hotsonia.in/images/banner.webp',
          width: 1200,
          height: 630,
        },
      ],
    },
    other: {
      'geo:region': 'IN-BR',
      'geo:placename': `${locationArea}, Patna`,
      'geo:position': '25.6093;85.1376',
      'ICBM': '25.6093, 85.1376',
    },
  };
}

export const structuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Escorts In Patna',
  url: 'https://hotsonia.in',
  logo: 'https://hotsonia.in/images/logo.png',
  image: 'https://hotsonia.in/images/banner.webp',
  description: 'Premium verified escort service agency in Patna offering high profile models, incall and outcall services 24/7 across 50+ locations.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
    areaServed: 'Patna',
  },
});
