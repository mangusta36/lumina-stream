"use client"; // ضروري هادي تكون هي أول سطر

import { motion } from "framer-motion";
import { Zap, Tv2, ShieldCheck } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="why-us" className="relative py-32 px-6 overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-purple-500 font-black tracking-[0.5em] uppercase text-xs"
          >
            World Class Service
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 tracking-tighter uppercase italic"
          >
            Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">The #1 Choice</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just provide channels; we provide a premium cinematic experience with the most stable infrastructure in the market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Ultimate Stability",
              desc: "Our servers use Anti-Freeze 10.0 technology. No buffering, even during major sports events like the World Cup.",
              icon: <Zap className="text-purple-500" size={32} />,
              stat: "99.9% Uptime"
            },
            {
              title: "True 4K Quality",
              desc: "While others compress quality, we provide raw 4K & 8K streams. Pure clarity for your big screen TV.",
              icon: <Tv2 className="text-cyan-400" size={32} />,
              stat: "Real Ultra HD"
            },
            {
              title: "Instant Support",
              desc: "Our technical team is available 24/7. Activation happens in less than 5 minutes after your order.",
              icon: <ShieldCheck className="text-purple-500" size={32} />,
              stat: "24/7 Response"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="text-sm font-black text-purple-400 uppercase tracking-widest bg-purple-500/10 w-fit px-4 py-1 rounded-full">
                  {item.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats Bar */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/5 backdrop-blur-xl flex flex-wrap justify-around gap-10 text-center"
        >
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">50K+</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Happy Customers</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">20K+</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Premium Channels</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">15+</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Server Locations</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">24/7</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Live Support</div>
          </div>
        </motion.div>

      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
