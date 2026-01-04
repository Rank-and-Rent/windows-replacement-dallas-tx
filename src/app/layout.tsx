import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://windowreplacementdallastx.com'),
  title: {
    default: 'Window Replacements of Dallas | Premium Window Installation in Dallas, TX',
    template: '%s | Window Replacements of Dallas',
  },
  description: 'Professional window and door replacement services in Dallas, TX. Andersen, Pella, JELD-WEN, and Marvin windows and doors. Free estimates. Call 214-949-8227.',
  keywords: [
    'window replacement Dallas TX',
    'window installation Dallas',
    'Andersen windows Dallas',
    'Pella windows Texas',
    'JELD-WEN windows Dallas',
    'double hung windows Dallas',
    'casement windows Dallas TX',
    'bay windows installation',
    'residential window replacement',
    'energy efficient windows Dallas',
    'replacement windows Dallas County',
    'window contractor Dallas',
  ],
  authors: [{ name: 'Window Replacements of Dallas' }],
  creator: 'Window Replacements of Dallas',
  publisher: 'Window Replacements of Dallas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Best Window Replacement in Dallas, TX',
    description: 'Premium window replacement services in Dallas, TX. We carry Andersen, Pella, JELD-WEN, and Marvin windows. Expert installation with lifetime warranty.',
    url: 'https://windowreplacementdallastx.com',
    siteName: 'Window Replacements of Dallas',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Window Replacements of Dallas - Premium Window Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Window Replacements of Dallas',
    description: 'Premium window replacement in Dallas, TX. Andersen, Pella & JELD-WEN windows.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://windowreplacementdallastx.com',
  },
  verification: {
    google: 'verification-token',
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: {
      rel: 'android-chrome-192x192',
      url: '/favicon/android-chrome-192x192.png',
    },
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Dallas" />
        <meta name="geo.position" content="32.7767;-96.7970" />
        <meta name="ICBM" content="32.7767, -96.7970" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              '@id': 'https://windowreplacementdallastx.com/#organization',
              name: 'Window Replacements of Dallas',
              alternateName: 'Dallas Window Replacement',
              description: 'Professional window and door replacement services in Dallas, Texas. Expert installation of Andersen, Pella, and JELD-WEN windows and doors.',
              url: 'https://windowreplacementdallastx.com',
              telephone: '+1-214-949-8227',
              email: 'hello@windowreplacementdallastx.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '600 N Pearl St #1615',
                addressLocality: 'Dallas',
                addressRegion: 'TX',
                postalCode: '75201',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 32.7767,
                longitude: -96.7970,
              },
              areaServed: [
                { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'State', name: 'Texas' } },
                { '@type': 'City', name: 'Fort Worth' },
                { '@type': 'City', name: 'Arlington' },
                { '@type': 'City', name: 'Plano' },
                { '@type': 'City', name: 'Frisco' },
                { '@type': 'City', name: 'Irving' },
                { '@type': 'City', name: 'Garland' },
              ],
              knowsAbout: [
                'Window Replacement',
                'Window Installation',
                'Door Replacement',
                'Door Installation',
                'Energy Efficient Windows',
                'Double-Hung Windows',
                'Casement Windows',
                'Bay Windows',
                'Bow Windows',
                'Entry Doors',
                'Patio Doors',
                'French Doors',
              ],
              brand: [
                { '@type': 'Brand', name: 'Andersen' },
                { '@type': 'Brand', name: 'Pella' },
                { '@type': 'Brand', name: 'JELD-WEN' },
                { '@type': 'Brand', name: 'Marvin' },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              priceRange: '$$',
              currenciesAccepted: 'USD',
              paymentAccepted: 'Cash, Credit Card, Financing',
              image: 'https://windowreplacementdallastx.com/og-image.jpg',
              logo: 'https://windowreplacementdallastx.com/logo.png',
              slogan: 'Premium Window Replacement for Dallas Homes',
              foundingDate: '2010',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
                bestRating: '5',
                worstRating: '1',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Window & Door Replacement Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Double-Hung Window Installation',
                      description: 'Professional installation of double-hung windows with energy-efficient Low-E glass.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Casement Window Installation',
                      description: 'Side-hinged casement windows for maximum ventilation and energy efficiency.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Entry Door Installation',
                      description: 'Premium entry doors combining security, beauty, and energy efficiency.',
                    },
                  },
                ],
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://windowreplacementdallastx.com/#website',
              name: 'Window Replacements of Dallas',
              url: 'https://windowreplacementdallastx.com',
              publisher: { '@id': 'https://windowreplacementdallastx.com/#organization' },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://windowreplacementdallastx.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://windowreplacementdallastx.com/#org',
              name: 'Window Replacements of Dallas',
              url: 'https://windowreplacementdallastx.com',
              logo: 'https://windowreplacementdallastx.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-214-949-8227',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: ['English', 'Spanish'],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
