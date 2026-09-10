"use client";
import { useState } from "react";
import { MessageCircle, Zap, Menu, X } from "lucide-react"; // زدنا Zap للوغو
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-background/80 backdrop-blur-md py-5 px-6 md:px-12 border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">

        {/* اللوغو الجديد - بدلت غير هاد الجزء */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Zap size={18} className="text-black fill-black" />
          </div>
          <span className="text-2xl font-black tracking-tighter lowercase text-white">
            flash <span className="text-primary italic">4k iptv</span>
          </span>
        </Link>

        {/* المنيو - الروابط رجعتها كيمما كانت بلا تغيير */}
        <div className="hidden lg:flex gap-10 text-[15px] font-bold text-gray-300">
          <Link href="/" className="hover:text-primary transition-colors uppercase tracking-tight">Home</Link>
          <Link href="/features" className="hover:text-primary transition-colors uppercase tracking-tight">Features</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors uppercase tracking-tight">Pricing</Link>
          <Link href="/blog" className="hover:text-primary transition-colors uppercase tracking-tight">Blog</Link>
          <Link href="/support" className="hover:text-primary transition-colors uppercase tracking-tight">Support</Link>
        </div>

        <div className="flex items-center gap-3">
          {/* زر واتساب - بقا كيمما هو */}
          <a
            href="https://wa.me/212753936672"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-secondary text-white px-7 py-3 rounded-full font-black text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/30 transform hover:scale-105 active:scale-95"
          >
            <MessageCircle size={18} fill="white" />
            WHATSAPP
          </a>

          {/* Mobile menu toggle - only visible below the lg breakpoint */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-white hover:border-primary/50 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-white/5"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-primary transition-colors uppercase tracking-tight font-bold text-[15px] py-3 border-b border-white/5 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
