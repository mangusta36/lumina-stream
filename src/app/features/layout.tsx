import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://www.flash4kiptv.vip";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Features | 4K Streaming & Anti-Freeze Technology",
  description:
    "Explore flash 4k iptv premium features: pure 4K Ultra HD streaming, anti-freeze zero-lag technology, 20,000+ live channels, 99.9% uptime, and global server network. The ultimate IPTV experience.",
  keywords: ["flash 4k iptv", "IPTV features", "4K streaming", "anti-freeze technology", "IPTV server", "zero lag streaming", "Ultra HD"],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Flash 4K IPTV | Premium IPTV Features & Technology",
    description: "flash 4k iptv delivers true 4K HDR streaming with anti-freeze nodes, 20,000+ channels, and enterprise-grade infrastructure. See the features.",
    url: `${BASE_URL}/features`,
    siteName: "Flash 4K IPTV",
    images: [{ url: "/slides/image1.jpg", width: 1200, height: 630, alt: "Flash 4K IPTV features overview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash 4K IPTV | Premium IPTV Features & Technology",
    description: "flash 4k iptv delivers true 4K HDR streaming with anti-freeze nodes, 20,000+ channels, and enterprise-grade infrastructure.",
    images: ["/slides/image1.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Features", item: `${BASE_URL}/features` },
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Flash 4K IPTV Features | 4K Streaming & Anti-Freeze Technology",
  description: "Explore flash 4k iptv premium features: pure 4K Ultra HD streaming, anti-freeze zero-lag technology, and global server network.",
  publisher: {
    "@type": "Organization",
    name: "Flash 4K IPTV",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/icones.png` },
  },
};

export default function FeaturesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      {children}
    </>
  );
}
