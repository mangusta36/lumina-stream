"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageCircle } from "lucide-react";

export default function PrivacyPage() {
  const WHATSAPP = "https://wa.me/447828714977";

  return (
    <main className="min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-primary selection:text-white">
      <Navbar />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto pt-48 px-6 pb-32">
        <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] lowercase text-gray-400 italic">flash 4k iptv privacy</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.95] italic uppercase">
          PRIVACY <span className="text-primary">POLICY</span>
        </h1>

        <p className="text-gray-500 text-lg mb-16 italic lowercase font-medium">last updated: july 1, 2026</p>

        <div className="space-y-10 text-gray-400 text-base leading-relaxed">

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">1. introduction</h2>
            <p>flash 4k iptv (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. this privacy policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and use our iptv subscription services. by using flash 4k iptv, you consent to the data practices described in this policy. if you do not agree with any part of this policy, you must discontinue use of our services immediately.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">2. information we collect</h2>
            <p className="mb-4">we collect the following categories of information to provide and improve our services:</p>
            <ul className="space-y-3 pl-6">
              <li className="list-disc"><span className="text-white font-bold">personal identification data:</span> name, email address, phone number, and billing information provided during account registration or purchase.</li>
              <li className="list-disc"><span className="text-white font-bold">device & usage data:</span> ip address, device type, operating system, browser type, internet service provider, and streaming performance metrics to optimize your experience.</li>
              <li className="list-disc"><span className="text-white font-bold">communication data:</span> records of your interactions with our whatsapp support team, including chat history and troubleshooting details.</li>
              <li className="list-disc"><span className="text-white font-bold">payment data:</span> payment method details are collected and processed by our secure third-party payment processors. flash 4k iptv does not store full credit card numbers or banking information on our servers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">3. how we use your information</h2>
            <p className="mb-4">flash 4k iptv uses the collected information for the following purposes:</p>
            <ul className="space-y-3 pl-6">
              <li className="list-disc">to activate, maintain, and manage your iptv subscription account</li>
              <li className="list-disc">to process payments and deliver digital receipts</li>
              <li className="list-disc">to provide technical support and respond to inquiries via whatsapp</li>
              <li className="list-disc">to monitor and improve service quality, streaming performance, and user experience</li>
              <li className="list-disc">to detect, prevent, and address fraud, abuse, or security incidents</li>
              <li className="list-disc">to comply with applicable legal obligations and regulatory requirements</li>
              <li className="list-disc">to send important service updates, policy changes, or promotional offers (with your consent where required)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">4. data sharing & third parties</h2>
            <p className="mb-4">flash 4k iptv does not sell, trade, or rent your personal information to third parties. we may share your data only in the following circumstances:</p>
            <ul className="space-y-3 pl-6">
              <li className="list-disc"><span className="text-white font-bold">service providers:</span> trusted third-party vendors who assist with payment processing, server hosting, analytics, and customer support, under strict confidentiality agreements.</li>
              <li className="list-disc"><span className="text-white font-bold">legal compliance:</span> when required by law, court order, or government regulation, or to protect our rights, property, or safety.</li>
              <li className="list-disc"><span className="text-white font-bold">business transfers:</span> in the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">5. cookies & tracking technologies</h2>
            <p>flash 4k iptv uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. cookies are small text files stored on your device by your web browser. you can control cookie preferences through your browser settings — disabling cookies may affect certain website functionalities. we use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted). we also use analytics services that may collect aggregated, anonymized data about user interactions with our website.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">6. data security</h2>
            <p>flash 4k iptv implements industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. these measures include secure socket layer (ssl) encryption on our website, restricted access to personal data on a need-to-know basis, and regular security audits of our systems. however, no method of transmission over the internet or electronic storage is 100% secure. we cannot guarantee absolute security, and you share information with us at your own risk.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">7. your rights (gdpr & ccpa)</h2>
            <p className="mb-4">depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul className="space-y-3 pl-6">
              <li className="list-disc"><span className="text-white font-bold">right to access:</span> request a copy of the personal data we hold about you.</li>
              <li className="list-disc"><span className="text-white font-bold">right to rectification:</span> request correction of inaccurate or incomplete data.</li>
              <li className="list-disc"><span className="text-white font-bold">right to erasure (&quot;right to be forgotten&quot;):</span> request deletion of your personal data, subject to legal retention obligations.</li>
              <li className="list-disc"><span className="text-white font-bold">right to restrict processing:</span> request limitation of how we use your data.</li>
              <li className="list-disc"><span className="text-white font-bold">right to data portability:</span> request transfer of your data to another service provider in a structured, machine-readable format.</li>
              <li className="list-disc"><span className="text-white font-bold">right to object:</span> object to processing of your data for direct marketing or legitimate interests.</li>
              <li className="list-disc"><span className="text-white font-bold">right to withdraw consent:</span> withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p className="mt-4">to exercise any of these rights, please contact us via whatsapp. we will respond to your request within the timeframes required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">8. children&apos;s privacy</h2>
            <p>flash 4k iptv services are not intended for individuals under the age of 18. we do not knowingly collect personal information from children. if we become aware that a child under 18 has provided us with personal data, we will take immediate steps to delete such information. parents or guardians who believe a child has provided us with personal data should contact us immediately via whatsapp.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">9. changes to this policy</h2>
            <p>flash 4k iptv reserves the right to update or modify this privacy policy at any time. changes will be posted on this page with an updated &quot;last updated&quot; date. we encourage you to review this policy periodically. material changes will be communicated to active subscribers via email or whatsapp notification. continued use of our services after changes take effect constitutes your acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-black mb-4 italic lowercase tracking-tight">10. contact information</h2>
            <p className="mb-6">if you have questions, concerns, or requests regarding this privacy policy or your personal data, please contact flash 4k iptv:</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary px-6 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 font-bold italic lowercase"
            >
              <MessageCircle size={20} />
              +44 7828714977 — chat on whatsapp
            </a>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
