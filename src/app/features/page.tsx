"use client";
import { Zap, ShieldCheck, MonitorPlay, Globe, Cpu, Smartphone, CheckCircle2, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function FeaturesPage() {
  const WHATSAPP_URL = "https://wa.me/447828714977";

  return (
    <main className="min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* --- Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      {/* --- Hero Section --- */}
      <div className="max-w-7xl mx-auto pt-48 px-6 text-center mb-28 relative">
        <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 hover:bg-white/[0.05] transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] lowercase text-gray-400 italic">flash 4k iptv next-gen technology</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] lg:max-w-5xl mx-auto italic uppercase">
          THE ART OF <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">ULTRA STREAMING.</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed italic lowercase">
          we’ve redefined stability. enjoy 20,000+ channels with <span className="text-white">flash 4k iptv</span> server architecture designed for 0% downtime and 100% clarity.
        </p>
      </div>

      {/* --- Section 2: Premium Big Cards --- */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 mb-8">
        {/* 4K Card */}
        <div className="md:col-span-7 group relative overflow-hidden rounded-[3.5rem] bg-[#080808] border border-white/[0.05] p-10 lg:p-14 transition-all duration-500 hover:border-primary/40 shadow-2xl">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
              <MonitorPlay size={32} className="text-primary" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight italic lowercase">pure 4k <br /> experience.</h2>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed group-hover:text-gray-300 transition-colors italic lowercase">
              experience depth like never before. <span className="text-primary">flash 4k iptv</span> delivers 60 fps streaming with hdr10 support on all major networks.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-0 rounded-full group-hover:bg-primary/10 transition-all" />
        </div>

        {/* Anti-Freeze Card */}
        <div className="md:col-span-5 group relative overflow-hidden rounded-[3.5rem] bg-[#080808] border border-white/[0.05] p-10 lg:p-14 transition-all duration-500 hover:border-primary/40 shadow-2xl">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
              <Cpu size={32} className="text-primary" />
            </div>
            <h2 className="text-4xl font-black mb-6 tracking-tight italic lowercase">zero-lag <br /> node 5.0.</h2>
            <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-300 transition-colors italic lowercase">
              proprietary buffering technology by <span className="text-primary">flash 4k iptv</span> that predicts network drops before they happen.
            </p>
          </div>
        </div>
      </div>

      {/* --- Section 3: Bento Grid --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        
        {/* 20K Channels */}
        <div className="p-10 rounded-[3rem] bg-[#080808] border border-white/[0.05] hover:bg-white/[0.01] transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <Globe className="text-primary" size={24} />
            <span className="text-sm font-bold tracking-widest text-gray-500 lowercase italic">content</span>
          </div>
          <h3 className="text-2xl font-black mb-3 italic lowercase">20,000+ channels</h3>
          <p className="text-gray-500 text-sm leading-relaxed lowercase italic">daily updated library of global channels, movies, and series with <span className="text-white">flash 4k iptv</span>.</p>
        </div>

        {/* Device Compatibility */}
        <div className="p-10 rounded-[3rem] bg-[#080808] border border-white/[0.05] hover:bg-white/[0.01] transition-all">
          <div className="flex items-center gap-4 mb-6">
            <Smartphone className="text-primary" size={24} />
            <span className="text-sm font-bold tracking-widest text-gray-500 lowercase italic">compatibility</span>
          </div>
          <h3 className="text-2xl font-black mb-3 italic lowercase">any device</h3>
          <p className="text-gray-500 text-sm leading-relaxed lowercase italic">native support for smart tvs, firestick, and all mobile os with <span className="text-white">flash 4k iptv</span>.</p>
        </div>

        {/* 99.9% Uptime */}
        <div className="p-10 rounded-[3rem] bg-[#080808] border border-white/[0.05] hover:bg-white/[0.01] transition-all">
          <div className="flex items-center gap-4 mb-6">
            <CheckCircle2 className="text-primary" size={24} />
            <span className="text-sm font-bold tracking-widest text-gray-500 lowercase italic">reliability</span>
          </div>
          <h3 className="text-2xl font-black mb-3 italic lowercase">99.9% uptime</h3>
          <p className="text-gray-500 text-sm leading-relaxed lowercase italic">our <span className="text-white">flash 4k iptv</span> servers are monitored 24/7 with automatic failover protection.</p>
        </div>
      </div>

      {/* --- Section 4: Call to Action (WhatsApp) --- */}
      <div className="max-w-7xl mx-auto px-6 mt-20 mb-32">
        <div className="relative rounded-[4rem] overflow-hidden bg-gradient-to-r from-primary to-purple-600 p-[1px]">
          <div className="bg-[#080808] rounded-[3.9rem] px-8 py-20 text-center relative overflow-hidden group">
            
            {/* Animated Glow in CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] -z-0" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic lowercase underline decoration-primary underline-offset-8">flash 4k iptv <br /> is a click away.</h2>
              <p className="text-gray-400 max-w-md mx-auto mb-12 text-lg italic lowercase">join 15,000+ happy customers worldwide and start your premium experience today.</p>
              
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black text-xs tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group"
              >
                <MessageCircle size={20} className="group-hover:fill-white" />
                GET STARTED ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
