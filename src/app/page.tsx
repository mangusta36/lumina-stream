import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MoviesCarousel from "@/components/sections/MoviesCarousel";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import SeoContent from "@/components/sections/SeoContent";
import LatestArticles from "@/components/sections/LatestArticles";

export const metadata: Metadata = {
  title: "Flash 4K IPTV | Premium 4K IPTV Subscription",
  description:
    "flash 4k iptv offers 26,000+ live channels, 100,000+ movies & series, true 4K Ultra HD streaming, anti-freeze technology, instant activation, and 24/7 customer support. The premium IPTV experience.",
  keywords: [
    "flash 4k iptv",
    "IPTV subscription",
    "4K IPTV",
    "premium IPTV",
    "live TV streaming",
    "sports IPTV",
    "movies IPTV",
    "IPTV service",
    "IPTV channels",
    "best IPTV",
    "IPTV 4K",
    "IPTV provider",
    "IPTV streaming",
    "IPTV sports",
    "IPTV movies",
    "IPTV setup",
    "IPTV devices",
    "IPTV support",
    "IPTV technology",
    "IPTV benefits",
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Flash 4K IPTV Subscription",
  "description": "Premium IPTV subscription with 26,000+ live channels, 100,000+ movies and series, true 4K Ultra HD streaming, anti-freeze technology, instant activation, and 24/7 support.",
  "brand": {
    "@type": "Brand",
    "name": "Flash 4K IPTV"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "37",
    "highPrice": "67",
    "offerCount": "3",
    "availability": "https://schema.org/InStock"
  },
  "category": "IPTV Subscription"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly is flash 4k iptv?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "flash 4k iptv is a premium IPTV subscription service that delivers live television channels, on-demand movies, and sports events over the internet. It works on Smart TVs, phones, tablets, computers, and streaming devices through a compatible IPTV player app."
      }
    },
    {
      "@type": "Question",
      "name": "How is flash 4k iptv different from cable TV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike cable television, flash 4k iptv streams over your internet connection with no long-term contracts, no installation fees, and no expensive equipment rentals. You get access to thousands more channels at a lower monthly cost with the flexibility to watch on any device anywhere in the world."
      }
    },
    {
      "@type": "Question",
      "name": "What devices can I use with flash 4k iptv?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "flash 4k iptv supports Samsung Smart TV, LG Smart TV, Android TV, Apple TV, Amazon Firestick, Fire TV Cube, NVIDIA Shield, MAG boxes, Android boxes, iPhone, iPad, Android smartphones, tablets, Windows PCs, Mac computers, and Linux systems."
      }
    },
    {
      "@type": "Question",
      "name": "What internet speed do I need for 4K streaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For the best experience with flash 4k iptv, we recommend at least 12 Mbps for HD streaming, 25 Mbps for smooth 4K Ultra HD streaming, and 50 Mbps for select 8K channels."
      }
    },
    {
      "@type": "Question",
      "name": "How long does activation take after payment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Activation for flash 4k iptv is almost instant. Most customers receive their login credentials and setup instructions within 5 to 15 minutes after completing payment via WhatsApp."
      }
    },
    {
      "@type": "Question",
      "name": "Does flash 4k iptv work outside my home country?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, flash 4k iptv works worldwide. As long as you have a stable internet connection, you can access your subscription from anywhere in the world."
      }
    },
    {
      "@type": "Question",
      "name": "What channels and content are included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "flash 4k iptv includes 26,000+ live channels covering sports, news, entertainment, movies, kids, documentaries, music, and international programming. The VOD library contains 100,000+ movies and TV series."
      }
    },
    {
      "@type": "Question",
      "name": "How do I set up flash 4k iptv on my device?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After subscribing, you will receive an M3U link and Xtream Codes credentials. Download a compatible IPTV player app such as IPTV Smarters, TiviMate, or VLC Media Player, enter your credentials, and start streaming immediately."
      }
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

      <SeoContent />

      <section id="pricing">
        <Pricing />
      </section>

      <LatestArticles />

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
