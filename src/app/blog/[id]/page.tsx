import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/posts";

type BlogPostPageProps = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return {
      title: "Post Not Found | Flash 4K IPTV Blog",
      description: "the requested flash 4k iptv blog post could not be found.",
    };
  }

  return {
    title: post.seoTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
  };
}

export default function BlogPostDetail({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
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
          <span>
            <Calendar size={14} className="inline mr-2 text-primary" /> {post.date}
          </span>
          <span>
            <User size={14} className="inline mr-2 text-primary" /> {post.author}
          </span>
        </div>
        <img
          src={post.image}
          alt={post.imageAlt ?? post.title}
          className="w-full h-[500px] object-cover rounded-[3rem] mb-16 shadow-2xl"
        />
        <div
          className="prose prose-invert max-w-none text-gray-300 italic text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Footer />
    </main>
  );
}
