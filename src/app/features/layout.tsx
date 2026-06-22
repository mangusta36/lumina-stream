import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Features | 4K Streaming & Anti-Freeze Technology",
  description:
    "Explore flash 4k iptv premium features: pure 4K Ultra HD streaming, anti-freeze zero-lag technology, 20,000+ live channels, 99.9% uptime, and global server network. The ultimate IPTV experience.",
  openGraph: {
    title: "Flash 4K IPTV | Premium IPTV Features & Technology",
    description: "flash 4k iptv delivers true 4K HDR streaming with anti-freeze nodes, 20,000+ channels, and enterprise-grade infrastructure. See the features.",
    images: [{ url: "/slides/image1.jpg", width: 1200, height: 630, alt: "Flash 4K IPTV features overview" }],
  },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
