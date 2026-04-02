import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: 'Escorts In Patna | ₹9K Call Girls 24/7 Booking',
  description: 'Escorts In Patna ✔ Book verified call girls starting ₹9,000. Incall & outcall services 24/7 at hotels. 50+ Patna locations.',
  keywords: 'Escorts in Patna, Patna Escorts, Call Girls in Patna, Patna Call Girls, Escort Service in Patna',
  authors: [{ name: 'Escorts In Patna' }],
  openGraph: {
    type: 'website',
    url: 'https://hotsonia.in',
    title: 'Escorts In Patna | ₹9K Call Girls In Patna 24/7 – Verified Models',
    description: 'Escorts In Patna ✔ Book verified call girls starting ₹9,000. Incall & outcall services 24/7 at hotels. 50+ Patna locations.',
    images: [
      {
        url: 'https://hotsonia.in/images/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Escorts In Patna - Premium Escort Service',
      },
    ],
    siteName: 'Escorts In Patna',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts In Patna | ₹9K Call Girls In Patna 24/7 – Verified Models',
    description: 'Escorts In Patna ✔ Book verified call girls starting ₹9,000. Incall & outcall services 24/7 at hotels. 50+ Patna locations.',
    images: ['https://hotsonia.in/images/banner.webp'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: 'google4f16a66da72c5c2a',
  },
};

export function generateLocationMetadata(location: string, locationArea: string): Metadata {
  return {
    title: `Escorts In ${locationArea} Patna | ₹9K Call Girls 24/7`,
    description: `Escorts In ${locationArea} Patna ✔ Book call girls in ${locationArea} from ₹9,000. Incall & outcall 24/7 at hotels. Verified models, doorstep delivery.`,
    openGraph: {
      url: `https://hotsonia.in/locations/${location}`,
      title: `Escorts In ${locationArea} Patna | ₹9K Call Girls 24/7`,
      description: `Book verified escorts in ${locationArea}, Patna starting ₹9,000. Incall & outcall services 24/7.`,
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
