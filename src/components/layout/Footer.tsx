'use client';
import { useState } from 'react';
import { MonitorPlay, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What devices do you support?",
    answer: "We support all devices: Smart TVs (Samsung, LG, Android), Firestick, Apple TV, Android Boxes, Smartphones, and PC."
  },
  {
    question: "How long does activation take?",
    answer: "Activation is almost instant. Usually, you will receive your access details within 15 to 30 minutes after payment."
  },
  {
    question: "What is the recommended internet speed?",
    answer: "For a smooth experience, we recommend at least 12 Mbps for HD and 25 Mbps or more for 4K streaming."
  },
  {
    question: "Can I use the subscription on multiple devices?",
    answer: "You can install the app on multiple devices, but you can only watch on one device at a time unless you have a multi-connection plan."
  }
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* القسم الجديد والوحيد ديال الأسئلة */}
      <section className="py-20 bg-black relative">
        {/* Grid background effect optional */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-12 text-center">
            GOT QUESTIONS?
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#0a0a0f] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl"
              >
                <button 
                  className="w-full flex justify-between items-center p-6 hover:bg-white/5 transition-colors text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-white text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`text-purple-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الفوتر التحتاني */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.5)]">
               <MonitorPlay className="text-white w-5 h-5" />
            </div>
            <span className="font-black text-xl uppercase tracking-tighter italic text-white">
              Flash <span className="text-purple-500">4K IPTV</span>
            </span>
          </div>
          
          <div className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Flash 4K. All rights reserved. 
          </div>

          <div className="flex gap-6 text-gray-400 text-sm font-medium">
            <a href="#" className="hover:text-purple-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Refund</a>
          </div>
        </div>
      </footer>
    </>
  );
}
