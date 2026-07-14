"use client";
import { Check, Star, MessageCircle, Crown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PricingPage() {
  const plans = [
    {
      badge: "— starter —",
      name: "flash 4k iptv 3 months",
      price: "37",
      monthly: "12.33",
      save: "",
      features: ["26,000+ live channels", "100,000+ vods", "4k & fhd quality", "anti-freeze servers", "all devices supported", "24/7 whatsapp support"],
      isPopular: false,
      isBestValue: false,
      waMessage: "Hello, I want to order the Flash 4K IPTV Basic Package — 3 Months — $37."
    },
    {
      badge: "— popular —",
      name: "flash 4k iptv 6 months",
      price: "49",
      monthly: "8.16",
      save: "save 18% vs monthly",
      features: ["26,000+ live channels", "100,000+ vods", "4k & fhd quality", "anti-freeze servers", "all devices supported", "24/7 whatsapp support"],
      isPopular: true,
      isBestValue: false,
      waMessage: "Hello, I want to order the Flash 4K IPTV Silver Package — 6 Months — $49."
    },
    {
      badge: "— premium —",
      name: "flash 4k iptv 12 months",
      price: "67",
      monthly: "5.58",
      save: "save 32% vs monthly",
      features: ["26,000+ live channels", "100,000+ vods", "4k & fhd quality", "anti-freeze servers", "all devices supported", "24/7 whatsapp support", "free setup assistance"],
      isPopular: false,
      isBestValue: true,
      waMessage: "Hello, I want to order the Flash 4K IPTV Gold Package — 12 Months — $67."
    }
  ];

  const WHATSAPP_NUMBER = "212753936672";

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      <Navbar />
      
      <div className="max-w-7xl mx-auto pt-48 pb-20 px-6 overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] -z-10" />

        {/* --- Header --- */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 lowercase italic">
            unbeatable <span className="text-primary not-italic">flash 4k iptv</span> pricing
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium lowercase italic">
            join thousands of happy viewers with flash 4k iptv. high-speed streaming, 
            zero buffering, and the best quality in 2026.
          </p>
        </div>

        {/* --- Pricing Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col rounded-[3.5rem] transition-all duration-500 hover:translate-y-[-10px] ${
                plan.isPopular 
                ? 'bg-[#0A0A0A] border-2 border-primary shadow-[0_0_40px_-15px_rgba(168,85,247,0.4)]' 
                : 'bg-surface border border-white/5 shadow-2xl'
              }`}
            >
              {/* Badges */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <Star size={12} fill="white" /> most popular
                </div>
              )}
              {plan.isBestValue && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <Crown size={12} fill="black" /> best value
                </div>
              )}

              <div className="p-10 lg:p-12 flex flex-col h-full">
                {/* Badge Label */}
                <span className="text-primary font-black tracking-[0.2em] text-[11px] lowercase mb-6 block opacity-80">
                  {plan.badge}
                </span>

                {/* Plan Name */}
                <h2 className="text-2xl font-black mb-8 tracking-tight lowercase italic">{plan.name}</h2>

                {/* Pricing Area */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black tracking-tighter text-white">€{plan.price}</span>
                  </div>
                  <div className="mt-2 flex flex-col">
                    <span className="text-primary font-bold text-lg lowercase">€{plan.monthly} /mo</span>
                    {plan.save && (
                      <span className="text-green-500 text-[11px] font-black lowercase mt-1 bg-green-500/10 w-fit px-2 py-0.5 rounded">
                        {plan.save}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="mt-1 bg-primary/20 p-0.5 rounded-full">
                         <Check size={14} className="text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-[14px] font-semibold text-gray-400 group-hover:text-white transition-colors lowercase italic">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Order Button */}
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.waMessage)}`}
                  target="_blank"
                  className={`flex items-center justify-center gap-3 w-full py-5 rounded-[2rem] font-black text-xs tracking-[0.2em] transition-all active:scale-95 ${
                    plan.isPopular 
                    ? 'bg-primary text-white hover:bg-white hover:text-black shadow-xl shadow-primary/20' 
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black'
                  }`}
                >
                  <MessageCircle size={18} />
                  ORDER NOW
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Small Trust Note */}
        <div className="mt-20 text-center">
            <p className="text-gray-600 text-[10px] font-black tracking-widest flex items-center justify-center gap-4 lowercase italic opacity-60">
              <span className="w-10 h-[1px] bg-white/10" />
              secure checkout via flash 4k iptv whatsapp support
              <span className="w-10 h-[1px] bg-white/10" />
            </p>
        </div>

      </div>
      <Footer />
    </main>
  );
}
