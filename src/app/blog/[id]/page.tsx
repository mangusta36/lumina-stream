import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { blogPosts, type FaqItem } from "../../../lib/posts";

const BASE_URL = "https://www.flash4kiptv.vip";

export const dynamicParams = true;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

function toIsoDate(dateStr: string): string {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toISOString().split("T")[0];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return {};

  const publishedTime = toIsoDate(post.date);
  const modifiedTime = toIsoDate(post.lastModified || post.date);

  return {
    title: post.seoTitle || post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.id}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.metaDescription,
      url: `/blog/${post.id}`,
      images: [{ url: post.image, alt: post.imageAlt || post.title }],
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [post.author],
    },
  };
}

function generateBlogPostingSchema(post: {
  id: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  image: string;
  date: string;
  lastModified?: string;
  author: string;
}) {
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${BASE_URL}${post.image}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description: post.metaDescription,
    image: imageUrl,
    datePublished: toIsoDate(post.date),
    dateModified: toIsoDate(post.lastModified || post.date),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Flash 4K IPTV",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icones.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.id}`,
    },
  };
}

function generateBreadcrumbSchema(post: { id: string; title: string; seoTitle?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.seoTitle || post.title,
        item: `${BASE_URL}/blog/${post.id}`,
      },
    ],
  };
}

function generateFaqSchema(faqs?: FaqItem[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default async function BlogPostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = generateBlogPostingSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema(post);
  const faqSchema = generateFaqSchema(post.faqs);

  return (
    <main className="bg-[#0b0a15] min-h-screen text-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <article className="max-w-4xl mx-auto pt-40 px-6 pb-40">
        <h1 className="text-4xl md:text-7xl font-black italic uppercase mb-8">{post.title}</h1>
        <div
          className="prose prose-invert max-w-none text-gray-300 italic text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <Footer />
    </main>
  );
}
