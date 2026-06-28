import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://www.flash4kiptv.vip";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Pricing | Best IPTV Subscription Plans 2026",
  description:
    "flash 4k iptv pricing: 3-month ($37), 6-month ($49), 12-month ($67) plans. Save up to 32% with annual subscription. 26,000+ channels, 4K streaming, instant activation.",
  keywords: ["flash 4k iptv", "IPTV pricing", "IPTV subscription", "4K IPTV plans", "best IPTV deal", "IPTV 3 months", "IPTV 12 months"],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Flash 4K IPTV | Affordable IPTV Subscription Plans",
    description: "Choose the best IPTV plan for your needs. flash 4k iptv offers unbeatable pricing with 26,000+ channels, 100,000+ VODs, and premium 4K quality.",
    url: `${BASE_URL}/pricing`,
    siteName: "Flash 4K IPTV",
    images: [{ url: "/slides/image1.jpg", width: 1200, height: 630, alt: "Flash 4K IPTV pricing plans" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash 4K IPTV | Affordable IPTV Subscription Plans",
    description: "Choose the best IPTV plan for your needs. flash 4k iptv offers unbeatable pricing with 26,000+ channels, 100,000+ VODs, and premium 4K quality.",
    images: ["/slides/image1.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${BASE_URL}/pricing` },
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Flash 4K IPTV Pricing | Best IPTV Subscription Plans 2026",
  description: "flash 4k iptv pricing: 3-month ($37), 6-month ($49), 12-month ($67) plans. Save up to 32% with annual subscription.",
  publisher: {
    "@type": "Organization",
    name: "Flash 4K IPTV",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/icones.png` },
  },
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      {children}
    </>
  );
}
