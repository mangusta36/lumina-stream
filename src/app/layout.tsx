import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuminaStream | Next-Gen 4K Streaming",
  description: "Experience premium IPTV with over 20,000 channels and ultra-low latency.",
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
