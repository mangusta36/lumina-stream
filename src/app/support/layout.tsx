import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://www.flash4kiptv.vip";

export const metadata: Metadata = {
  title: "Flash 4K IPTV Support | 24/7 Customer Care & FAQ",
  description:
    "Get 24/7 support for flash 4k iptv. Live WhatsApp chat, setup guides, troubleshooting, and frequently asked questions. Our team is here to help anytime.",
  keywords: ["flash 4k iptv", "IPTV support", "IPTV help", "IPTV customer service", "IPTV WhatsApp", "IPTV setup help", "IPTV troubleshooting"],
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Flash 4K IPTV | 24/7 Customer Support & Help Center",
    description: "Need help with flash 4k iptv? Contact our 24/7 support team via WhatsApp for instant assistance with setup, billing, or troubleshooting.",
    url: `${BASE_URL}/support`,
    siteName: "Flash 4K IPTV",
    images: [{ url: "/slides/image1.jpg", width: 1200, height: 630, alt: "Flash 4K IPTV support center" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash 4K IPTV | 24/7 Customer Support & Help Center",
    description: "Need help with flash 4k iptv? Contact our 24/7 support team via WhatsApp for instant assistance with setup, billing, or troubleshooting.",
    images: ["/slides/image1.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Support", item: `${BASE_URL}/support` },
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Flash 4K IPTV Support | 24/7 Customer Care & FAQ",
  description: "Get 24/7 support for flash 4k iptv. Live WhatsApp chat, setup guides, troubleshooting, and FAQs.",
  publisher: {
    "@type": "Organization",
    name: "Flash 4K IPTV",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/icones.png` },
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to activate my flash 4k iptv account?",
      acceptedAnswer: { "@type": "Answer", "text": "Activation is usually instant. You will receive your credentials via WhatsApp within 5 to 15 minutes after payment." }
    },
    {
      "@type": "Question",
      name: "Which devices does flash 4k iptv support?",
      acceptedAnswer: { "@type": "Answer", "text": "We support all 2026 devices: Smart TVs, Firestick, Android boxes, MAG, PC, and all smartphones." }
    },
    {
      "@type": "Question",
      name: "Do you offer a refund if the service doesn't work?",
      acceptedAnswer: { "@type": "Answer", "text": "Yes, flash 4k iptv offers a 7-day money-back guarantee for any technical issues we cannot solve." }
    },
    {
      "@type": "Question",
      name: "Can I use flash 4k iptv on multiple devices?",
      acceptedAnswer: { "@type": "Answer", "text": "Standard plans are for 1 device. Contact our WhatsApp support for special multi-room discounts." }
    }
  ]
};

export default function SupportLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      {children}
    </>
  );
}
