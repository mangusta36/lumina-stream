"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#0a0a0f] border border-white/5 rounded-2xl overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-6 hover:bg-white/5 transition-colors text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-bold text-white text-lg">{item.title}</span>
            <ChevronDown
              className={
                "text-purple-500 transition-transform duration-300 " +
                (openIndex === index ? "rotate-180" : "")
              }
            />
          </button>
          <div
            className={
              "transition-all duration-300 ease-in-out overflow-hidden " +
              (openIndex === index ? "max-h-96" : "max-h-0")
            }
          >
            <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
