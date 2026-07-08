import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/posts";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function LatestArticles() {
  const latest = getPublishedBlogPosts().slice(0, 6);

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">From Our Blog</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
            Latest IPTV <span className="text-cyan-500 lowercase">Articles</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest guides, tutorials, and insights about IPTV streaming,
            4K technology, device setups, and optimizing your flash 4k iptv experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <article className="p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">
                  <span className="text-cyan-500 font-black text-[9px] px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">{post.category}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-500 transition-colors uppercase italic tracking-tight leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-bold uppercase tracking-tight mt-auto">
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black uppercase tracking-tighter text-white transition-all text-sm"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
