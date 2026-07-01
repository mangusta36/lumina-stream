import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://www.flash4kiptv.vip";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Privacy Policy | Data Protection",
  description: "Read the Flash 4K IPTV Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with GDPR and CCPA regulations.",
  keywords: ["flash 4k iptv", "privacy policy", "data protection", "GDPR", "CCPA", "privacy"],
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Flash 4K IPTV | Privacy Policy",
    description: "Flash 4K IPTV Privacy Policy. Learn how we protect your personal data.",
    url: `${BASE_URL}/privacy`,
    siteName: "Flash 4K IPTV",
    images: [{ url: "/slides/image1.jpg", width: 1200, height: 630, alt: "Flash 4K IPTV Privacy Policy" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash 4K IPTV | Privacy Policy",
    description: "Flash 4K IPTV Privacy Policy.",
    images: ["/slides/image1.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${BASE_URL}/privacy` },
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Flash 4K IPTV Privacy Policy",
  description: "Flash 4K IPTV Privacy Policy and data protection information.",
  publisher: {
    "@type": "Organization",
    name: "Flash 4K IPTV",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/icones.png` },
  },
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      {children}
    </>
  );
}
