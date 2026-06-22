import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Pricing | Best IPTV Subscription Plans 2026",
  description:
    "flash 4k iptv pricing: 3-month ($37), 6-month ($49), 12-month ($67) plans. Save up to 32% with annual subscription. 26,000+ channels, 4K streaming, instant activation.",
  openGraph: {
    title: "Flash 4K IPTV | Affordable IPTV Subscription Plans",
    description: "Choose the best IPTV plan for your needs. flash 4k iptv offers unbeatable pricing with 26,000+ channels, 100,000+ VODs, and premium 4K quality.",
    images: [{ url: "/slides/image1.jpg", width: 1200, height: 630, alt: "Flash 4K IPTV pricing plans" }],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
