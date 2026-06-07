"use client";
import { motion } from "framer-motion";
import { Zap, Tv2, Smartphone, Monitor, Crown, CheckCircle2, Star } from "lucide-react";

const brands = [
  { name: "Prime Video", logo: "/prime.webp" },
  { name: "HBO", logo: "/hbo.png" },
  { name: "Netflix", logo: "/netflix.jpg" }, 
  { name: "Bein Sports", logo: "/bein.png" },
  { name: "Disney+", logo: "/disney.svg" },
  { name: "Apple TV", logo: "/apple.jpeg" },
];

const scrollingBrands = [...brands, ...brands, ...brands];

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

const WHATSAPP_LINK = "https://wa.me/447828714977?text=Hello! I want to try the free trial of Flash 4K IPTV.";

export default function HeroPage() {
  return (
    <main className="bg-[#02040a] text-white selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      
      {/* ────── DYNAMIC BACKGROUND ────── */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.1] scale-110"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
        />
        {/* Creative Glows */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100%] h-[40%] bg-cyan-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-transparent to-[#02040a]" />
      </div>

      {/* ────── SECTION 1: HERO ────── */}
      <section id="home" className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-8 backdrop-blur-2xl">
            <Zap size={14} className="text-cyan-400 animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase text-cyan-400">next-gen flash 4k iptv service</span>
          </div>

          {/* Typography Design */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.8] lowercase">
            flash <span className="text-cyan-500 italic drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">4k iptv</span> <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20 font-light italic text-4xl md:text-7xl lg:text-8xl py-2">
              experience.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
            Experience the ultimate entertainment with <span className="text-white font-medium underline decoration-cyan-500/50 decoration-2 underline-offset-4">4K & 8K Streaming</span>. No buffering, no limits with flash 4k iptv.
          </p>

          {/* Optimized Buttons for Touch */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 px-4">
            <a href="#pricing" className="group relative px-12 py-5 bg-cyan-500 rounded-2xl font-black text-black uppercase tracking-tighter transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] active:scale-95 text-lg">
              explore plans
            </a>
            <a href={WHATSAPP_LINK} target="_blank" className="px-12 py-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black transition-all backdrop-blur-md text-white uppercase tracking-tighter text-lg">
              GET TRIAL
            </a>
          </div>
        </motion.div>
      </section>

      {/* ────── SECTION 2: BRANDS (Silky Marquee) ────── */}
      <section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-3xl relative z-10 overflow-hidden">
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-12 md:gap-20 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {scrollingBrands.map((b, i) => (
              <div key={i} className="flex-shrink-0 w-28 md:w-40 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img src={b.logo} alt={b.name} className="h-6 md:h-10 w-auto object-contain mx-auto" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ────── SECTION 3: PRICING (Modern Cards) ────── */}
      <section id="pricing" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4 italic uppercase tracking-tighter">
              premium <span className="text-cyan-500 lowercase">flash 4k iptv</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className={`relative p-8 md:p-10 rounded-[3rem] border transition-all duration-500 hover:scale-[1.02] ${
                  plan.recommended 
                  ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/[0.08] to-transparent shadow-[0_20px_50px_rgba(6,182,212,0.15)]' 
                  : 'border-white/5 bg-white/[0.02]'
                } backdrop-blur-3xl`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[10px] font-black px-5 py-2 rounded-full uppercase flex items-center gap-1 shadow-lg shadow-cyan-500/40">
                    <Star size={10} fill="black" /> Best Selling
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tighter">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-6xl font-black tracking-tighter">${plan.price}</span>
                  <span className="text-gray-500 font-medium lowercase">/{plan.duration}</span>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 font-light italic">
                      <CheckCircle2 size={16} className="text-cyan-500 mt-0.5" />{feat}
                    </li>
                  ))}
                </ul>

                <a href={WHATSAPP_LINK} target="_blank" className={`block text-center py-5 rounded-2xl font-black uppercase tracking-tighter transition-all ${
                  plan.recommended ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 hover:bg-cyan-400' : 'bg-white/5 text-white hover:bg-white/10'
                }`}>
                  Subscribe Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── SECTION 4: FEATURES (Bento Grid Style) ────── */}
      <section className="pb-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Tv2 />, title: "Live TV", desc: "20,000+ Channels" },
            { icon: <Monitor />, title: "Movies", desc: "60,000+ VODs" },
            { icon: <Smartphone />, title: "All Devices", desc: "TV, Phone, PC" },
            { icon: <Crown />, title: "Ultra HD", desc: "4K & 8K Support" },
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center backdrop-blur-md hover:bg-cyan-500/[0.03] hover:border-cyan-500/20 transition-all duration-500">
              <div className="p-4 bg-white/5 rounded-2xl text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="font-bold mb-1 italic uppercase text-[12px] tracking-tight">{item.title}</h3>
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
