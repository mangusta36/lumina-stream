"use client";
import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/posts"; // السطر المهم
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPostDetail() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return <div className="text-white text-center pt-40">Post Not Found</div>;
  }

  return (
    <main className="bg-[#0b0a15] min-h-screen text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-40 px-6 pb-40">
        <Link href="/blog" className="text-primary flex items-center gap-2 mb-8 font-black italic uppercase">
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        <h1 className="text-4xl md:text-7xl font-black italic uppercase leading-tight mb-8">
          {post.title}
        </h1>
        <div className="flex gap-6 text-gray-500 text-[10px] font-black mb-10 border-b border-white/5 pb-8 uppercase">
           <span><Calendar size={14} className="inline mr-2 text-primary"/> {post.date}</span>
           <span><User size={14} className="inline mr-2 text-primary"/> {post.author}</span>
        </div>
        <img src={post.image} className="w-full h-[500px] object-cover rounded-[3rem] mb-16 shadow-2xl" />
        <div 
          className="prose prose-invert max-w-none text-gray-300 italic text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
      <Footer />
    </main>
  );
}
