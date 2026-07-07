import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.flash4kiptv.vip'),
  title: "Flash 4K IPTV | Premium IPTV Subscription",
  description:
    "flash 4k iptv offers 26,000+ live channels, 100,000+ movies & series, true 4K streaming, anti-freeze technology, instant activation, and 24/7 support. Premium IPTV service.",

  alternates: {
    canonical: '/',
  },

  keywords: [
    "flash 4k iptv",
    "IPTV subscription",
    "4K IPTV",
    "premium IPTV",
    "live TV streaming",
    "IPTV service",
    "sports IPTV",
    "movies IPTV",
    "IPTV channels",
    "best IPTV",
    "IPTV provider",
    "IPTV streaming",
  ],

  openGraph: {
    title: "Flash 4K IPTV | Premium IPTV Subscription - 26,000+ Channels",
    description: "flash 4k iptv delivers 26,000+ live channels, 100,000+ movies & series in true 4K. Anti-freeze servers, instant activation, 24/7 support.",
    url: "https://www.flash4kiptv.vip", 
    siteName: "Flash 4K IPTV",
    images: [
      {
        url: "/slides/image1.jpg",
        width: 1200,
        height: 630,
        alt: "Flash 4K IPTV - Premium IPTV Service with 26,000+ Channels",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flash 4K IPTV | Premium IPTV Streaming",
    description: "26,000+ live channels, 100,000+ movies & series in true 4K. Anti-freeze technology. Subscribe now.",
    images: ["/slides/image1.jpg"],
  },

  icons: {
    icon: "/icones.png",
    shortcut: "/icones.png",
    apple: "/icones.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Flash 4K IPTV",
  "url": "https://www.flash4kiptv.vip",
  "description": "Premium IPTV streaming service offering 26,000+ live channels, 100,000+ movies and series in 4K quality with anti-freeze technology and 24/7 customer support.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "telephone": "+212-776203783",
    "availableLanguage": ["English", "Arabic", "French", "Spanish"]
  },
    "sameAs": [
      "https://wa.me/212776203783"
    ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Flash 4K IPTV",
  "url": "https://www.flash4kiptv.vip",
  "description": "Premium IPTV subscription with 26,000+ live channels, 100,000+ movies and series, true 4K streaming, anti-freeze technology, and 24/7 support.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.flash4kiptv.vip/blog?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
