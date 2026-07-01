import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://www.flash4kiptv.vip";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Terms of Service | Legal Information",
  description: "Read the Flash 4K IPTV Terms of Service. Understand your rights, subscription terms, usage policies, and legal agreements for our IPTV service.",
  keywords: ["flash 4k iptv", "terms of service", "IPTV terms", "subscription terms", "legal"],
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Flash 4K IPTV | Terms of Service",
    description: "Flash 4K IPTV Terms of Service. Understand your rights and subscription terms.",
    url: `${BASE_URL}/terms`,
    siteName: "Flash 4K IPTV",
    images: [{ url: "/slides/image1.jpg", width: 1200, height: 630, alt: "Flash 4K IPTV Terms of Service" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash 4K IPTV | Terms of Service",
    description: "Flash 4K IPTV Terms of Service.",
    images: ["/slides/image1.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: `${BASE_URL}/terms` },
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Flash 4K IPTV Terms of Service",
  description: "Flash 4K IPTV Terms of Service and legal agreements.",
  publisher: {
    "@type": "Organization",
    name: "Flash 4K IPTV",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/icones.png` },
  },
};

export default function TermsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      {children}
    </>
  );
}
