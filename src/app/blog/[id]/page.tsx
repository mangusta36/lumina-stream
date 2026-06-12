import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
// جرب هاد الـ Import النسبي (Relative) باش نتهناو من شكوك الـ Path
import { blogPosts } from "../../../lib/posts"; 

export const dynamicParams = true;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostDetail({ params }: { params: any }) {
  // هادي ضرورية لـ Next.js 15
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // هاد السطر غادي يورينا في الـ Terminal واش الداتا كتوصل فعلاً
  console.log("---------------------------------");
  console.log("Requested ID:", id);
  console.log("Total Posts Available:", blogPosts.length);
  console.log("All IDs:", blogPosts.map(p => p.id));
  console.log("---------------------------------");

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#0b0a15] min-h-screen text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-40 px-6 pb-40">
        <h1 className="text-4xl md:text-7xl font-black italic uppercase mb-8">{post.title}</h1>
        <div 
          className="prose prose-invert max-w-none text-gray-300 italic text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
      <Footer />
    </main>
  );
}
