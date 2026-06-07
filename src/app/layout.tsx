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

  // هادو هما الزيادة اللي غادي تحل ليك مشكل الـ Social Media Tags
  openGraph: {
    title: "Flash 4K IPTV | Premium IPTV Subscription",
    description: "20,000+ live channels, movies, and sports in Ultra HD 4K quality.",
    url: "https://lumina-stream.com", // تأكد من تعويض هاد الرابط برابط السيت ديالك الحقيقي
    siteName: "Flash 4K IPTV",
    images: [
      {
        url: "/slides/image1.jpg", // التصويرة اللي غتبان فاش تبارطاجي السيت
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
      <body className={`${inter.className} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
