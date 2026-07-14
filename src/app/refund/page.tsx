"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageCircle, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function RefundPage() {
  const WHATSAPP = "https://wa.me/212753936672";

  return (
    <main className="min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-primary selection:text-white">
      <Navbar />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto pt-48 px-6 pb-32">
        <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] lowercase text-gray-400 italic">flash 4k iptv guarantee</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.95] italic uppercase">
          REFUND <span className="text-primary">POLICY</span>
        </h1>

        <p className="text-gray-500 text-lg mb-16 italic lowercase font-medium">last updated: july 1, 2026</p>

        <div className="space-y-10 text-gray-400 text-base leading-relaxed">

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">1. general refund policy</h2>
            <p>at flash 4k iptv, customer satisfaction is our top priority. we stand behind the quality of our iptv service and want every subscriber to have a seamless streaming experience. this refund policy outlines the conditions under which you may be eligible for a refund, the process for requesting one, and the timelines involved. please read this policy carefully before purchasing a subscription.</p>
          </section>

          <section className="relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10">
            <div className="flex gap-6 items-start">
              <div className="bg-green-500/10 p-3 rounded-2xl shrink-0">
                <ShieldCheck size={32} className="text-green-500" />
              </div>
              <div>
                <h2 className="text-white text-2xl font-black mb-3 italic lowercase tracking-tight">2. 7-day money-back guarantee</h2>
                <p>flash 4k iptv offers a <span className="text-green-500 font-bold">7-day money-back guarantee</span> on all subscription plans. if you experience persistent technical issues — such as buffering, channel unavailability, or connectivity problems — that our technical support team is unable to resolve within a reasonable timeframe, you are entitled to a full refund of your subscription payment.</p>
                <p className="mt-4">this guarantee applies to first-time subscribers and reflects our confidence in the flash 4k iptv service quality. we encourage you to test the service thoroughly during this period and reach out to our support team with any concerns.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">3. conditions for refund</h2>
            <p className="mb-4">to qualify for a refund under the 7-day guarantee, the following conditions must be met:</p>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                <span>the refund request must be submitted within 7 calendar days from the date of payment.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                <span>you must have contacted flash 4k iptv support via whatsapp and allowed our team to attempt troubleshooting.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                <span>the issue must be technical in nature and related to our service delivery, rather than incompatibility with your device or internet connection.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                <span>refunds are issued to the original payment method used during purchase.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">4. how to request a refund</h2>
            <p className="mb-4">requesting a refund from flash 4k iptv is simple and straightforward. all refund requests must be initiated through our official whatsapp support line. to begin the process:</p>
            <ul className="space-y-3 pl-6 mb-6">
              <li className="list-disc">open a chat with flash 4k iptv on whatsapp at +212 753936672</li>
              <li className="list-disc">provide your account or payment details so we can locate your subscription</li>
              <li className="list-disc">describe the technical issue you are experiencing in detail</li>
              <li className="list-disc">allow our team to attempt troubleshooting — if the issue persists, we will process your refund</li>
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary px-6 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 font-bold italic lowercase"
            >
              <MessageCircle size={20} />
              request refund on whatsapp
            </a>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">5. exceptions & non-refundable scenarios</h2>
            <p className="mb-4">the following situations are not eligible for a refund under our policy:</p>
            <ul className="space-y-3 pl-6">
              <li className="list-disc">change of mind after the subscription has been activated and no technical issues are present</li>
              <li className="list-disc">issues caused by your internet service provider, home network configuration, or insufficient bandwidth</li>
              <li className="list-disc">incompatibility with unsupported devices that are not listed on our website</li>
              <li className="list-disc">subscriptions that were used extensively before requesting a refund (abuse of the guarantee policy)</li>
              <li className="list-disc">requests submitted after the 7-day guarantee period has expired</li>
              <li className="list-disc">chargebacks or disputes filed through payment providers without first contacting flash 4k iptv support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">6. processing time</h2>
            <div className="flex gap-4 items-start mb-4">
              <Clock size={24} className="text-primary shrink-0 mt-1" />
              <p>once your refund request is approved by flash 4k iptv, refunds are typically processed within 3–7 business days. the time it takes for the funds to appear in your account depends on your payment provider and bank. flash 4k iptv will send you a confirmation message via whatsapp once the refund has been initiated. if you do not receive the refund within 10 business days, please contact us for follow-up.</p>
            </div>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">7. contact information</h2>
            <p className="mb-6">for any questions about this refund policy or to begin the refund process, reach out to flash 4k iptv directly:</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary px-6 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 font-bold italic lowercase"
            >
              <MessageCircle size={20} />
              +212 753936672 — chat on whatsapp
            </a>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
