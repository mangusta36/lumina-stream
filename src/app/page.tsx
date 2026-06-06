import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MoviesCarousel from "@/components/sections/MoviesCarousel";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LuminaStream | Premium 4K IPTV Service Provider",
  description:
    "Experience the next generation of television with LuminaStream. Over 20,000 channels, 4K quality, and instant setup.",
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
