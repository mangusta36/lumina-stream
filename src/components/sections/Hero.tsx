"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Tv2, Smartphone, Monitor, Crown, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

// 1. إعدادات الصور (Slider)
const slides = [
  "/slides/image1.jpg",
  "/slides/image2.jpg",
  "/slides/image3.jpg",
  "/slides/image4.jpg",
];

// 2. البراندات
const brands = [
  { name: "Prime Video", logo: "/prime.webp" },
  { name: "HBO", logo: "/hbo.png" },
  { name: "Netflix", logo: "/netflix.jpg" }, 
  { name: "Bein Sports", logo: "/bein.png" },
  { name: "Disney+", logo: "/disney.svg" },
  { name: "Apple TV", logo: "/apple.jpeg" },
];

const PRICING_PLANS = [
  {
    name: "basic access",
    price: "37",
    duration: "3 Months",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support"],
    recommended: false,
  },
  {
    name: "ultimate vip",
    price: "67",
    duration: "12 Months",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support", "Free Setup Assistance"],
    recommended: true,
  },
  {
    name: "standard pro",
    price: "49",
    duration: "6 Months",
    features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Servers", "All Devices Supported", "24/7 WhatsApp Support"],
    recommended: false,
  },
];

// النمرة الجديدة هنا (بدون + وبدون فراغات باش يخدم الرابط مزيان)
const WHATSAPP_LINK = "https://wa.me/447828714977?text=Hello! I want to try the free trial of Flash 4K IPTV.";

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
      
      {/* ────── BACKGROUND ANIMATION ────── */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse delay-1000 opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-blue-500/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* ────── SECTION 1: HERO (H1 SEO) ────── */}
      <section id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-xl">
              <Zap size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400">next-gen flash 4k iptv service</span>
            </div>

            {/* H1 SEO Optimized - lowercase brand */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85] lowercase">
              flash <span className="text-cyan-500 italic">4k iptv</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 font-light italic">experience.</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light italic">
              Experience the ultimate entertainment with <span className="text-white font-medium">4K & 8K Streaming</span>. No buffering, no limits with flash 4k iptv.
            </p>
            <div className="flex flex-wrap gap-4 text-center">
              <a href="#pricing" className="group relative px-10 py-5 bg-cyan-500 rounded-2xl font-black text-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(6,182,212,0.3)]">explore plans</a>
              <a href={WHATSAPP_LINK} target="_blank" className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black transition-all backdrop-blur-md text-white">
                GET TRIAL
              </a>
            </div>
          </motion.div>

          {/* Right Side Stage */}
          <div className="relative flex justify-center items-center">
             <div className="relative z-10 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative w-[320px] md:w-[480px] aspect-[16/10] bg-black rounded-[2rem] p-2 border border-white/20 shadow-2xl overflow-hidden backdrop-blur-3xl">
                <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={current} 
                      src={slides[current]} 
                      alt={`flash 4k iptv cinematic showcase slide ${current + 1}`} 
                      initial={{ opacity: 0, scale: 1.1 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0 }} 
                      transition={{ duration: 0.8 }} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── SECTION 2: BRANDS ────── */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01] backdrop-blur-3xl relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center justify-center">
            {brands.map((b, i) => (
              <div key={i} className="flex justify-center items-center h-10 md:h-14">
                <img src={b.logo} alt={`${b.name} logo - flash 4k iptv official partner`} className="max-h-full w-auto object-contain hover:scale-110 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── SECTION 3: PRICING (H2 & H3 SEO) ────── */}
      <section id="pricing" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter">
              premium <span className="text-cyan-500 lowercase">flash 4k iptv</span> subscription
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto italic font-light">instant activation, high stability, and 24/7 technical support for your flash 4k iptv service.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative p-8 rounded-[2.5rem] border ${plan.recommended ? 'border-cyan-500 bg-cyan-500/5' : 'border-white/10 bg-white/[0.02]'} backdrop-blur-3xl group transition-all text-white`}>
                {plan.recommended && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Most Popular</div>}
                
                {/* H3 لأسماء الخطط */}
                <h3 className="text-2xl font-bold mb-2 uppercase italic tracking-tighter">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">${plan.price}</span>
                  <span className="text-gray-500 font-medium lowercase">/{plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-light italic"><CheckCircle2 size={16} className="text-cyan-500" />{feat}</li>
                  ))}
                </ul>
                <a href={WHATSAPP_LINK} target="_blank" className={`block text-center py-4 rounded-2xl font-black uppercase tracking-tighter transition-all ${plan.recommended ? 'bg-cyan-500 text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>Get Started</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── SECTION 4: FEATURES (H2 & H3 SEO) ────── */}
      <section className="pb-32 px-6 z-10 relative text-white">
        <div className="max-w-7xl mx-auto">
          {/* H2 مخفي لتعريف القسم لـ Google والـ AI */}
          <h2 className="sr-only uppercase italic">why choose flash 4k iptv core features</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Tv2 />, title: "Live TV", desc: "20,000+ Channels" },
              { icon: <Monitor />, title: "Movies", desc: "60,000+ VODs" },
              { icon: <Smartphone />, title: "All Devices", desc: "TV, Phone, PC" },
              { icon: <Crown />, title: "Ultra HD", desc: "4K & 8K Support" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center backdrop-blur-md">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-500 mb-4">{item.icon}</div>
                {/* H3 لكل ميزة فرعية */}
                <h3 className="font-bold mb-1 italic uppercase text-sm tracking-tighter">{item.title}</h3>
                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
