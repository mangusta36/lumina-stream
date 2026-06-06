"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "GUIDE 2026",
    title: "How to setup flash 4k iptv on Smart TV",
    excerpt: "The complete 2026 guide to install and configure your flash 4k iptv subscription on Samsung, LG, and Android TVs...",
    date: "Jan 15, 2026",
    author: "FLASH TEAM",
    image: "https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    category: "LIVE SPORTS",
    title: "Watch Champions League 2026 on flash 4k iptv",
    excerpt: "Get the best sports experience. Low latency streaming for football fans with our exclusive 4K sports package...",
    date: "Jan 12, 2026",
    author: "FLASH TEAM",
    image: "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    category: "VPN & SECURITY",
    title: "Best VPNs for flash 4k iptv in 2026",
    excerpt: "Maximize your privacy and bypass ISP throttling with these recommended VPN services for 4K streaming...",
    date: "Jan 10, 2026",
    author: "FLASH TEAM",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    category: "DEVICES",
    title: "flash 4k iptv: Top Android Boxes for 2026",
    excerpt: "Reviewing the fastest hardware to run our 2026 IPTV app. From Nvidia Shield to the latest Firestick 4K Max...",
    date: "Jan 05, 2026",
    author: "FLASH TEAM",
    image: "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#0b0a15] min-h-screen text-white">
      <Navbar />

      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[130px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">
              flash <span className="text-primary not-italic">4k</span> blog
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
              Exclusive 2026 updates from the world of <span className="text-white font-bold tracking-tight">flash 4k iptv.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#161527] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 group flex flex-col h-full cursor-pointer"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-[#2a2845]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase">
                    <Tag size={12} className="inline mr-1" /> {post.category}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-[10px] text-gray-500 mb-6 font-black uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                  </div>
                  
                  {/* حيدت uppercase هنا باش تبقى السمية كيمما بغيتي */}
                  <h2 className="text-2xl font-black mb-5 group-hover:text-primary transition-colors leading-tight italic tracking-tight text-white">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                     <div className="bg-white/5 group-hover:bg-primary text-white border border-white/10 group-hover:border-primary px-6 py-3 rounded-2xl font-black italic text-xs flex items-center gap-3 transition-all duration-300 w-fit">
                      READ 2026 GUIDE <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
