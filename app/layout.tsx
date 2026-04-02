import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { baseMetadata, defaultViewport, structuredData } from '@/lib/metadata';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = baseMetadata;
export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData()),
          }}
        />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="google4f16a66da72c5c2a" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-950 text-gray-200 font-poppins">
        <Navbar />
        <main className="flex-1" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
