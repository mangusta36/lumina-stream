import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://www.flash4kiptv.vip";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Blog | IPTV Guides, Tutorials & Insights 2026",
  description:
    "Explore the flash 4k iptv blog for expert IPTV guides, setup tutorials, device optimization tips, and streaming insights. Discover how to get the most from your IPTV subscription.",
  keywords: [
    "flash 4k iptv blog",
    "IPTV guides",
    "IPTV setup tutorial",
    "IPTV tips",
    "IPTV streaming",
    "IPTV technology",
    "IPTV devices",
    "IPTV 2026",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Flash 4K IPTV Blog | IPTV Guides, Tutorials & Insights 2026",
    description:
      "Expert IPTV guides, setup tutorials, device optimization tips, and streaming insights from flash 4k iptv.",
    url: `${BASE_URL}/blog`,
    siteName: "Flash 4K IPTV",
    images: [
      {
        url: "/icones.png",
        width: 512,
        height: 512,
        alt: "Flash 4K IPTV logo — premium IPTV subscription provider",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash 4K IPTV Blog | IPTV Guides, Tutorials & Insights 2026",
    description:
      "Expert IPTV guides, setup tutorials, device optimization tips, and streaming insights from flash 4k iptv.",
    images: ["/icones.png"],
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
