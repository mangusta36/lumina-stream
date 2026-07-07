"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageCircle } from "lucide-react";

export default function TermsPage() {
  const WHATSAPP = "https://wa.me/212776203783";

  return (
    <main className="min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-primary selection:text-white">
      <Navbar />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto pt-48 px-6 pb-32">
        <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] lowercase text-gray-400 italic">flash 4k iptv legal</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.95] italic uppercase">
          TERMS OF <span className="text-primary">SERVICE</span>
        </h1>

        <p className="text-gray-500 text-lg mb-16 italic lowercase font-medium">last updated: july 1, 2026</p>

        <div className="space-y-10 text-gray-400 text-base leading-relaxed">

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">1. introduction & acceptance</h2>
            <p>welcome to flash 4k iptv. by accessing or using our website and services, you agree to be bound by these terms of service. if you do not agree with any part of these terms, you must not use our services. flash 4k iptv reserves the right to update these terms at any time, and continued use after changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">2. service description</h2>
            <p>flash 4k iptv provides internet protocol television (iptv) subscription services, granting users access to a vast library of live television channels, video-on-demand (vod) content, movies, and series streamed over the internet. our service includes anti-freeze node technology, 4k ultra hd streaming capabilities, and 24/7 technical support via whatsapp. we do not provide any physical hardware or equipment — all services are delivered digitally.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">3. user responsibilities</h2>
            <p>as a flash 4k iptv subscriber, you agree to: provide accurate and complete registration information; maintain the confidentiality of your account credentials; use the service for personal, non-commercial purposes only; comply with all applicable local, national, and international laws regarding content consumption; and not resell, redistribute, or publicly broadcast any content accessed through our service. you are solely responsible for your internet connection and device compatibility.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">4. payment & billing</h2>
            <p>all flash 4k iptv subscription fees are listed in euros (€) and are payable in full at the time of purchase. payments are processed securely via third-party payment gateways. prices are subject to change at any time, but changes will not affect active subscriptions already paid for. subscribers are responsible for all taxes, fees, and transaction costs associated with their purchase.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">5. subscription terms & renewal</h2>
            <p>flash 4k iptv offers subscription plans of varying durations: monthly, 3-month, 6-month, and 12-month packages. once purchased, your subscription begins immediately after activation, which typically occurs within 5–15 minutes of payment confirmation. subscriptions are prepaid and do not auto-renew. to continue service after your subscription period ends, you must purchase a new plan. flash 4k iptv reserves the right to modify or discontinue subscription plans with reasonable notice to active users.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">6. refund policy</h2>
            <p>flash 4k iptv is proud to offer a 7-day money-back guarantee for subscribers who experience technical issues that our support team cannot resolve. for full details regarding refund eligibility, conditions, and the request process, please refer to our dedicated <a href="/refund" className="text-primary underline underline-offset-4 hover:text-white transition-colors">refund policy page</a>. all refund requests are processed via whatsapp.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">7. prohibited uses</h2>
            <p>you may not use flash 4k iptv services for any unlawful purpose or in violation of these terms. prohibited activities include but are not limited to: reverse engineering, decompiling, or tampering with our streaming technology; attempting to bypass geographic restrictions or content protections; using the service for commercial broadcasting or public exhibition; distributing account credentials to unauthorized users; engaging in any activity that disrupts or degrades service quality for other users; and using automated tools, bots, or scrapers to interact with our platform.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">8. intellectual property</h2>
            <p>all content available through flash 4k iptv, including but not limited to channel names, logos, stream identifiers, software, design elements, and branding assets, are the intellectual property of their respective owners. flash 4k iptv name, logo, and proprietary technology are trademarks of flash 4k iptv. you may not reproduce, distribute, modify, or create derivative works from any content or technology associated with our service without explicit written permission.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">9. limitation of liability</h2>
            <p>flash 4k iptv provides services on an &quot;as is&quot; and &quot;as available&quot; basis. we make no warranties, express or implied, regarding the uninterrupted or error-free operation of our service. to the maximum extent permitted by law, flash 4k iptv shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our service, including but not limited to loss of access, data, or revenue. our total liability shall not exceed the amount paid by you for the subscription during the period in which the claim arose.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">10. termination</h2>
            <p>flash 4k iptv reserves the right to suspend or terminate your access to our services immediately, without prior notice, if you violate these terms or engage in any activity that threatens the integrity or security of our platform. upon termination, your right to use the service ceases immediately, and any prepaid fees may be forfeited. you may discontinue your subscription at any time by not using the service after your prepaid period expires.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">11. governing law</h2>
            <p>these terms of service shall be governed by and construed in accordance with the laws of the united kingdom. any disputes arising under or related to these terms shall be subject to the exclusive jurisdiction of the courts of the united kingdom. the parties agree to attempt to resolve any disputes informally through direct communication before pursuing formal legal action.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">12. contact information</h2>
            <p className="mb-6">for questions, concerns, or inquiries regarding these terms of service, you may contact flash 4k iptv through the following channel:</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary px-6 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 font-bold italic lowercase"
            >
              <MessageCircle size={20} />
              +212 776203783 — chat on whatsapp
            </a>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
