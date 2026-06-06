"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, ShieldCheck, Zap, Tv2, Smartphone, Monitor, Crown, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

// ... الداتا (slides, brands, PRICING_PLANS) تبقى كما هي ...

export default function HeroPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#02040a] text-white selection:bg-cyan-500/30 overflow-hidden">
      
      {/* BACKGROUND ANIMATION تبقى كما هي */}

      {/* ────── SECTION 1: HERO ────── */}
      <section id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-xl">
              <Zap size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400">Next-Gen IPTV Service</span>
            </div>
            
            {/* H1: العنوان الرئيسي الوحيد في الصفحة */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85]">
              flash <span className="text-cyan-500 italic text-5xl md:text-7xl block md:inline">4k iptv</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 font-light uppercase">experience.</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
              Experience the ultimate entertainment with <span className="text-white font-medium">4K & 8K Streaming</span> via flash 4k iptv. No buffering, no limits.
            </p>
            {/* الأزرار تبقى كما هي */}
          </motion.div>
          {/* ... Right Side Stage ... */}
        </div>
      </section>

      {/* ────── SECTION 2: BRANDS ────── */}
      {/* تبقى كما هي */}

      {/* ────── SECTION 3: PRICING ────── */}
      <section id="pricing" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 text-white">
            {/* H2: لتقسيم الصفحة لمحركات البحث */}
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter">
              Premium <span className="text-cyan-500">flash 4k iptv</span> Subscription
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Instant activation, high stability, and 24/7 technical support for our users.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div key={i} ... >
                {/* H3: لكل خطة اشتراك */}
                <h3 className="text-2xl font-bold mb-2 uppercase italic tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">${plan.price}</span>
                  <span className="text-gray-500 font-medium">/{plan.duration}</span>
                </div>
                {/* المميزات والأزرار */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── SECTION 4: FEATURES STRIP ────── */}
      <section className="pb-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* H2 مخفي أو ظاهر لتعريف مميزات flash 4k iptv */}
          <h2 className="sr-only">flash 4k iptv core features</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Tv2 />, title: "Live TV", desc: "20,000+ Channels" },
              { icon: <Monitor />, title: "Movies", desc: "60,000+ VODs" },
              { icon: <Smartphone />, title: "All Devices", desc: "TV, Phone, PC" },
              { icon: <Crown />, title: "Ultra HD", desc: "4K & 8K Support" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center backdrop-blur-md text-white">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-500 mb-4">{item.icon}</div>
                {/* H3: لكل ميزة تقنية */}
                <h3 className="font-bold mb-1 italic uppercase text-sm tracking-wide">{item.title}</h3>
                <p className="text-xs text-gray-500 uppercase font-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
