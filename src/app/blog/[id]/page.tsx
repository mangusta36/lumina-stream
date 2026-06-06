"use client";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ChevronLeft } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "1",
    title: "How to setup flash 4k iptv on Smart TV",
    content: (
      <div className="space-y-8">
        <p>Setting up your flash 4k iptv on a Smart TV in 2026 has been made incredibly simple. To enjoy the full 4K experience, follow these exact steps for Samsung, LG, and Android-based TVs.</p>
        
        <div className="space-y-4">
          <h3 className="text-white font-black italic text-xl uppercase">1. Install the Application</h3>
          <p>Navigate to your TV's App Store (Samsung Hub, LG Content Store, or Google Play). Search for our official recommended player or "IPTV Smarters Pro". flash 4k iptv is compatible with all major players in 2026.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-black italic text-xl uppercase">2. Enter your Credentials</h3>
          <p>Once the app is open, select "Add New User". You will need to enter the Xtream Codes API details provided in your flash 4k iptv activation email: Your Username, Password, and the Server URL.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-black italic text-xl uppercase">3. Configuration for 4K</h3>
          <p>Go to the app settings and ensure "Hardware Decoding" is enabled. This allows your TV's processor to handle the heavy 4K streams from flash 4k iptv servers without any lag or buffering.</p>
        </div>
      </div>
    ),
    date: "Jan 15, 2026",
    author: "FLASH TEAM",
    image: "https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    title: "Watch Champions League 2026 on flash 4k iptv",
    content: (
      <div className="space-y-6">
        <p>The 2026 Champions League season is the most anticipated sporting event of the year. flash 4k iptv provides dedicated 4K Ultra HD channels for every single match, from the group stages to the final.</p>
        <p>Our servers use the latest H.265 compression technology. This means you get the highest possible picture quality even if your internet speed is not at its peak. With flash 4k iptv, there is zero delay, making sure you hear the goal at the same time as the stadium fans.</p>
      </div>
    ),
    date: "Jan 12, 2026",
    author: "FLASH TEAM",
    image: "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    title: "Best VPNs for flash 4k iptv in 2026",
    content: (
      <div className="space-y-6">
        <p>While flash 4k iptv is 100% secure, some Internet Service Providers (ISPs) may try to throttle your bandwidth when they detect high-quality 4K streaming. A VPN ensures your connection remains private and fast.</p>
        <p>In 2026, we recommend using VPNs with WireGuard protocol for the best performance with flash 4k iptv. Security and privacy are our top priorities, and we ensure that all our payment methods and streaming links are fully encrypted to protect our users.</p>
      </div>
    ),
    date: "Jan 10, 2026",
    author: "FLASH TEAM",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    title: "flash 4k iptv: Top Android Boxes for 2026",
    content: (
      <div className="space-y-8">
        <p>If you want the absolute best performance from flash 4k iptv, using a dedicated Android Box is highly recommended. These devices offer more power than built-in TV apps.</p>
        
        <div className="space-y-4">
          <h3 className="text-white font-black italic text-xl uppercase">1. Nvidia Shield TV Pro (2026 Edition)</h3>
          <p>The king of IPTV devices. Its AI upscaling makes even HD content look like 4K, and it runs flash 4k iptv flawlessly with lightning-fast channel switching.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-black italic text-xl uppercase">2. Amazon Firestick 4K Max</h3>
          <p>The best budget-friendly option. It supports Wi-Fi 6E, which is perfect for the high-bitrate 4K channels offered by flash 4k iptv.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-black italic text-xl uppercase">3. Formuler Z11 Pro Max</h3>
          <p>Specifically designed for IPTV. Its MyTVOnline 3 interface integrates perfectly with flash 4k iptv playlists for a professional setup.</p>
        </div>
      </div>
    ),
    date: "Jan 05, 2026",
    author: "FLASH TEAM",
    image: "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function PostPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) return <div className="text-white text-center pt-40 text-2xl font-black italic uppercase">POST NOT FOUND...</div>;

  return (
    <main className="bg-[#0b0a15] min-h-screen text-white">
      <Navbar />

      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <Link href="/blog" className="text-primary flex items-center gap-2 mb-10 font-black italic uppercase text-xs hover:gap-4 transition-all w-fit">
          <ChevronLeft size={18} /> Back to Blog
        </Link>

        <h1 className="text-4xl md:text-6xl font-black italic mb-8 leading-tight tracking-tighter">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-[10px] text-gray-500 mb-12 font-black uppercase tracking-[0.2em] border-y border-white/5 py-4">
          <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
          <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
        </div>

        <div className="rounded-[2.5rem] overflow-hidden mb-12 border border-white/5 shadow-2xl shadow-primary/10">
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
        </div>

        <div className="text-gray-300 text-lg md:text-xl leading-[1.8] font-medium space-y-6 italic">
          {post.content}
          
          <div className="pt-10 border-t border-white/5 mt-10">
            <p className="text-white font-black italic border-l-4 border-primary pl-6 py-2">
              "flash 4k iptv is the leading provider in 2026, offering 100% uptime and Ultra HD streaming on all devices."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
