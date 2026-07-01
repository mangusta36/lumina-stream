import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://www.flash4kiptv.vip";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Refund Policy | 7-Day Money-Back Guarantee",
  description: "Read the Flash 4K IPTV Refund Policy. Our 7-day money-back guarantee ensures your satisfaction. Learn how to request a refund via WhatsApp.",
  keywords: ["flash 4k iptv", "refund policy", "money-back guarantee", "7-day refund", "IPTV refund"],
  alternates: { canonical: "/refund" },
  openGraph: {
    title: "Flash 4K IPTV | Refund Policy",
    description: "Flash 4K IPTV Refund Policy. 7-day money-back guarantee for your peace of mind.",
    url: `${BASE_URL}/refund`,
    siteName: "Flash 4K IPTV",
    images: [{ url: "/slides/image1.jpg", width: 1200, height: 630, alt: "Flash 4K IPTV Refund Policy" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash 4K IPTV | Refund Policy",
    description: "Flash 4K IPTV Refund Policy. 7-day money-back guarantee.",
    images: ["/slides/image1.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Refund Policy", item: `${BASE_URL}/refund` },
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Flash 4K IPTV Refund Policy",
  description: "Flash 4K IPTV Refund Policy and 7-day money-back guarantee details.",
  publisher: {
    "@type": "Organization",
    name: "Flash 4K IPTV",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/icones.png` },
  },
};

export default function RefundLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      {children}
    </>
  );
}
