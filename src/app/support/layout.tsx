import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Support | 24/7 Customer Care & FAQ",
  description:
    "Get 24/7 support for flash 4k iptv. Live WhatsApp chat, setup guides, troubleshooting, and frequently asked questions. Our team is here to help anytime.",
  openGraph: {
    title: "Flash 4K IPTV | 24/7 Customer Support & Help Center",
    description: "Need help with flash 4k iptv? Contact our 24/7 support team via WhatsApp for instant assistance with setup, billing, or troubleshooting.",
    images: [{ url: "/slides/image1.jpg", width: 1200, height: 630, alt: "Flash 4K IPTV support center" }],
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
