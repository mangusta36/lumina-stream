import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Flash 4K IPTV",
  description: "The page you are looking for does not exist. Return to flash 4k iptv home page for premium IPTV streaming.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b0a15] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-[12rem] md:text-[18rem] font-black leading-none text-primary/10 select-none">404</span>
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter -mt-12 mb-6">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12 italic max-w-md mx-auto">
          This page does not exist. It may have been moved, deleted, or the link was incorrect.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:bg-secondary transition-all shadow-xl shadow-primary/30 hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
