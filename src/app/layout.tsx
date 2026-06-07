import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flash 4K IPTV | Premium IPTV Subscription",
  description:
    "Flash 4K IPTV offers 20,000+ live channels, movies, sports, and ultra-fast 4K streaming with instant activation and 24/7 support.",

  keywords: [
    "Flash 4K IPTV",
    "IPTV Subscription",
    "4K IPTV",
    "Premium IPTV",
    "Live TV Streaming",
    "IPTV Service",
    "Sports IPTV",
    "Movies IPTV",
  ],

  icons: {
    icon: "/icones.png",
    shortcut: "/icones.png",
    apple: "/icones.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
