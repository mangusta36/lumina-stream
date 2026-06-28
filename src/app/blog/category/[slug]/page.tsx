import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowRight } from "lucide-react";
import { getCategoryDisplayInfo } from "@/lib/categories";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://www.flash4kiptv.vip";

export async function generateStaticParams() {
  const { getUniqueCategories, slugifyCategory } = await import("@/lib/categories");
  return getUniqueCategories().map((cat) => ({
    slug: slugifyCategory(cat),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { categoryFromSlug } = await import("@/lib/categories");
  const name = categoryFromSlug(slug);
  if (!name) return {};

  return {
    title: `${name} — Flash 4K IPTV Blog | IPTV Guides & Tutorials`,
    description: `Browse all ${name} articles from flash 4k iptv. Expert guides, tutorials, and insights about IPTV streaming in the ${name} category.`,
    alternates: {
      canonical: `/blog/category/${slug}`,
    },
    openGraph: {
      title: `${name} — Flash 4K IPTV Blog`,
      description: `Browse all ${name} IPTV articles from flash 4k iptv.`,
      url: `${BASE_URL}/blog/category/${slug}`,
      siteName: "Flash 4K IPTV",
      images: [{ url: "/icones.png", width: 512, height: 512, alt: "Flash 4K IPTV" }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} — Flash 4K IPTV Blog`,
      description: `Browse all ${name} IPTV articles from flash 4k iptv.`,
      images: ["/icones.png"],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const info = getCategoryDisplayInfo(slug);
  if (!info) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: info.name, item: `${BASE_URL}/blog/category/${slug}` },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${info.name} — Flash 4K IPTV Blog`,
    description: `Browse all ${info.name} articles from flash 4k iptv.`,
    publisher: { "@type": "Organization", name: "Flash 4K IPTV", logo: { "@type": "ImageObject", url: `${BASE_URL}/icones.png` } },
  };

  return (
    <main className="bg-[#0b0a15] min-h-screen text-white font-sans">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Hero */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[130px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block">Category</span>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">
            {info.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
            {info.posts.length} article{info.posts.length !== 1 ? "s" : ""} in the {info.name.toLowerCase()} category from flash 4k iptv.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-8 text-primary hover:text-white transition-colors text-sm font-black tracking-widest uppercase"
          >
            ← Back to all articles
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {info.posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article className="bg-[#121121] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 group flex flex-col h-full hover:shadow-[0_20px_50px_rgba(234,0,30,0.1)]">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121121] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black px-3 py-1 rounded-md tracking-widest uppercase shadow-lg shadow-primary/20">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-4 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User size={12} className="text-primary" /> {post.author}</span>
                  </div>
                  <h2 className="text-xl font-black mb-4 group-hover:text-primary transition-colors leading-[1.2] italic tracking-tight text-white/90">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3 italic">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-500 tracking-tighter uppercase">Est. Read: 45 min</span>
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary text-white transition-all duration-300">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
