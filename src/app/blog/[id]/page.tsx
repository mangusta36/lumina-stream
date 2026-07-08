import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight, Calendar, User } from "lucide-react";
import {
  blogPosts,
  type FaqItem,
  estimateReadingTime,
  getPublishedBlogPosts,
  isPublishedPost,
} from "../../../lib/posts";
import { slugifyCategory, getPostsByCategory } from "../../../lib/categories";

const BASE_URL = "https://www.flash4kiptv.vip";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({
    id: post.id,
  }));
}

function toIsoDate(dateStr: string): string {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toISOString().split("T")[0];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id && isPublishedPost(p));
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
  const post = blogPosts.find((p) => p.id === id && isPublishedPost(p));

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
      {/* Related Articles */}
      {post.category && (() => {
        const related = getPostsByCategory(post.category).filter(p => p.id !== post.id).slice(0, 3);
        if (related.length === 0) return null;
        return (
          <section className="max-w-7xl mx-auto px-6 pb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
                Related <span className="text-primary">Articles</span>
              </h2>
              <p className="text-gray-500 text-sm mt-4 italic">
                More {post.category.toLowerCase()} guides from flash 4k iptv
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.id}`} className="group">
                  <article className="bg-[#121121] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 h-full flex flex-col">
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-4 font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {rp.date}</span>
                        <span className="flex items-center gap-1.5"><User size={12} className="text-primary" /> {rp.author}</span>
                      </div>
                      <h3 className="text-lg font-black mb-3 group-hover:text-primary transition-colors leading-[1.2] italic tracking-tight text-white/90">
                        {rp.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3 italic flex-grow">
                        {rp.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mt-auto">
                        Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      <Footer />
    </main>
  );
}
