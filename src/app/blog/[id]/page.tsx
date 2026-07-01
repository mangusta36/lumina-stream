import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { blogPosts, type FaqItem, estimateReadingTime } from "../../../lib/posts";
import { slugifyCategory } from "../../../lib/categories";

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

  const title = post.seoTitle || post.title;

  return {
    title,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.id}`,
    },
    openGraph: {
      title,
      description: post.metaDescription,
      url: `${BASE_URL}/blog/${post.id}`,
      siteName: "Flash 4K IPTV",
      images: [{ url: post.image, alt: post.imageAlt || post.title }],
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [post.author],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.metaDescription,
      images: [post.image],
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

function generateBreadcrumbSchema(post: { id: string; title: string; seoTitle?: string; category: string }) {
  const categorySlug = slugifyCategory(post.category);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.category, item: `${BASE_URL}/blog/category/${categorySlug}` },
      {
        "@type": "ListItem",
        position: 4,
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
      {/* Visible Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto pt-40 px-6 pb-0">
        <ol className="flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <ChevronRight size={12} className="text-gray-600" />
          <li>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </li>
          <ChevronRight size={12} className="text-gray-600" />
          <li>
            <Link href={`/blog/category/${slugifyCategory(post.category)}`} className="hover:text-primary transition-colors">
              {post.category}
            </Link>
          </li>
          <ChevronRight size={12} className="text-gray-600" />
          <li className="text-primary truncate max-w-[200px] sm:max-w-[400px]" aria-current="page">
            {post.seoTitle || post.title}
          </li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pb-40 mt-12">
        <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-8 font-bold uppercase tracking-widest">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full" />
          <span>{post.author}</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full" />
          <span>Est. Read: {estimateReadingTime(post.content)}</span>
        </div>
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
