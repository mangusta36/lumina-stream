import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MoviesCarousel from "@/components/sections/MoviesCarousel";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash 4K IPTV | Premium IPTV Service Provider",
  description:
    "Experience premium entertainment with Flash 4K IPTV. Enjoy over 20,000 live channels, movies, sports, and 4K streaming with instant activation.",
  keywords: [
    "Flash 4K IPTV",
    "IPTV Subscription",
    "4K IPTV",
    "Premium IPTV",
    "Live TV Streaming",
    "Sports IPTV",
    "Movies IPTV",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="service">
        <MoviesCarousel />
      </section>

      <section id="why-us">
        <Features />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
