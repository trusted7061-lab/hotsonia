import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotsonia.in'),
  title: 'Contact Escorts In Patna | Book 24/7 | WhatsApp Booking',
  description: 'Contact escorts in Patna for bookings. WhatsApp +91 92296 04907 24/7. Incall & outcall available. Fast response guaranteed.',
  keywords: 'Contact escorts Patna, Book call girls, WhatsApp booking, Escort contact info',
  alternates: {
    canonical: 'https://hotsonia.in/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://hotsonia.in/contact',
    title: 'Contact Escorts In Patna | Book 24/7',
    description: 'Book verified escorts in Patna via WhatsApp. 24/7 support & fast response.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
