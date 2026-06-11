import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.flash4kiptv.vip'), // هادي ضرورية فـ Next.js باش يخدمو الروابط صحاح
  title: "Flash 4K IPTV | Premium IPTV Subscription",
  description:
    "Flash 4K IPTV offers 20,000+ live channels, movies, sports, and ultra-fast 4K streaming with instant activation and 24/7 support.",

  // هادا هو الحل ديال المشكل الأول (Canonical URL)
  alternates: {
    canonical: '/',
  },

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

  openGraph: {
    title: "Flash 4K IPTV | Premium IPTV Subscription",
    description: "20,000+ live channels, movies, and sports in Ultra HD 4K quality.",
    url: "https://www.flash4kiptv.vip", 
    siteName: "Flash 4K IPTV",
    images: [
      {
        url: "/slides/image1.jpg",
        width: 1200,
        height: 630,
        alt: "Flash 4K IPTV - Premium Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flash 4K IPTV | Premium Streaming",
    description: "Enjoy ultra-fast 4K streaming with 24/7 support.",
    images: ["/slides/image1.jpg"],
  },

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
      <body className="antialiased bg-background font-sans">
        {children}
      </body>
    </html>
  );
}
