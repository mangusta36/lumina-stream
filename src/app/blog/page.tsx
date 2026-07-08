"use client";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { estimateReadingTime, getPublishedBlogPosts } from "@/lib/posts";
import { slugifyCategory } from "@/lib/categories";

const BASE_URL = "https://www.flash4kiptv.vip";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Flash 4K IPTV Blog",
  description:
    "Expert IPTV guides, setup tutorials, device optimization tips, and streaming insights from flash 4k iptv.",
  publisher: {
    "@type": "Organization",
    name: "Flash 4K IPTV",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/icones.png`,
    },
  },
};

export default function BlogPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const posts = useMemo(() => getPublishedBlogPosts(), []);

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const q = searchQuery.toLowerCase().trim();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.seoTitle?.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
    );
  }, [posts, searchQuery]);

  const clearSearch = useCallback(() => setSearchQuery(""), []);

  return (
    <main className="bg-[#0b0a15] min-h-screen text-white font-sans">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[130px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block">Information Hub</span>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">
              FLASH <span className="text-primary not-italic text-outline">4K</span> INSIGHTS
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic text-balance">
              The world&apos;s most comprehensive 2026 guides for <span className="text-white font-bold underline decoration-primary">Ultra-HD Streaming</span> and IPTV Technology.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="mt-12 max-w-2xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 2026 trends, guides, and tutorials..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 outline-none focus:border-primary/50 transition-all text-white placeholder:text-gray-600 italic"
            />
            {searchQuery ? (
              <button onClick={clearSearch} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            ) : (
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            )}
          </div>
          {searchQuery && (
            <p className="text-gray-500 text-sm mt-4 italic">
              {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
            </p>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-32 px-6">
        {filteredPosts.length === 0 ? (
          <div className="max-w-7xl mx-auto text-center py-20">
            <p className="text-gray-500 text-xl italic mb-4">No articles match your search.</p>
            <p className="text-gray-600 text-sm italic">Try different keywords like &ldquo;4K&rdquo;, &ldquo;setup&rdquo;, or &ldquo;Firestick&rdquo;.</p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-[#121121] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 group flex-col flex h-full hover:shadow-[0_20px_50px_rgba(234,0,30,0.1)]"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.imageAlt ?? post.title} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121121] via-transparent to-transparent opacity-60" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/blog/category/${slugifyCategory(post.category)}`);
                      }}
                      className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black px-3 py-1 rounded-md tracking-widest uppercase shadow-lg shadow-primary/20 hover:bg-secondary transition-colors z-10 cursor-pointer"
                    >
                      {post.category}
                    </button>
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
                       <span className="text-[10px] font-black text-gray-500 tracking-tighter uppercase">Est. Read: {estimateReadingTime(post.content)}</span>
                       <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary text-white transition-all duration-300">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
