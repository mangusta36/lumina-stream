import Link from "next/link";
import { Monitor, Smartphone, Laptop, Tv, Globe, ShieldCheck, Zap, HeadphonesIcon, Film, Radio, PlayCircle, Star, CheckCircle2, Award, Wifi, Users, TrendingUp, Clock, BookOpen, Server, Cpu, Signal, RefreshCw, HeartHandshake, Sparkles, Trophy } from "lucide-react";

const compatibilityList = [
  { icon: <Tv size={20} />, label: "Samsung TV" },
  { icon: <Tv size={20} />, label: "LG TV" },
  { icon: <Monitor size={20} />, label: "Android TV" },
  { icon: <Monitor size={20} />, label: "Apple TV" },
  { icon: <Monitor size={20} />, label: "Firestick" },
  { icon: <Smartphone size={20} />, label: "iPhone & iPad" },
  { icon: <Smartphone size={20} />, label: "Android Phone" },
  { icon: <Laptop size={20} />, label: "Windows & Mac" },
  { icon: <Server size={20} />, label: "MAG Box" },
  { icon: <Monitor size={20} />, label: "Android Box" },
];

const featuresList = [
  { icon: <Zap size={24} />, title: "Anti-Freeze 10.0", desc: "Proprietary buffer-prevention technology ensures 99.9% uptime even during peak hours and major live events." },
  { icon: <Globe size={24} />, title: "26,000+ Live Channels", desc: "Access channels from every region including sports, news, entertainment, kids, documentaries, and premium content." },
  { icon: <Film size={24} />, title: "100,000+ VOD Library", desc: "Massive on-demand collection of the latest movies, complete TV series seasons, and exclusive content updated weekly." },
  { icon: <Cpu size={24} />, title: "Global Server Network", desc: "Strategically placed servers across 15+ countries deliver low-latency streaming with automatic failover routing." },
  { icon: <Signal size={24} />, title: "4K & 8K Support", desc: "Genuine Ultra HD streaming with high-bitrate sources. Experience vibrant colors and sharp detail on any screen." },
  { icon: <RefreshCw size={24} />, title: "Instant Activation", desc: "Get your M3U link and Xtream Codes credentials within 5 to 15 minutes after completing your subscription order." },
  { icon: <Monitor size={24} />, title: "Multi-Device Access", desc: "Use your subscription on Smart TVs, phones, tablets, computers, and streaming boxes with a single account." },
  { icon: <HeadphonesIcon size={24} />, title: "24/7 Live Support", desc: "Technical support team available around the clock via WhatsApp. Setup help, troubleshooting, and account assistance." },
];

const testimonials = [
  { name: "Ahmed Al-Rashid", location: "Dubai, UAE", rating: 5, text: "I have tried many IPTV services over the years, but flash 4k iptv is on another level. The 4K quality is genuinely stunning and the channel selection is incredible. Premier League matches in 4K with zero buffering. Highly recommended for sports fans.", avatar: "A" },
  { name: "Sarah Mitchell", location: "London, UK", rating: 5, text: "Switched from Sky to flash 4k iptv and wish I had done it sooner. The setup was incredibly easy and the picture quality matches what I was getting before at a fraction of the price. Customer support answered my questions within minutes on WhatsApp.", avatar: "S" },
  { name: "Carlos Mendez", location: "Madrid, Spain", rating: 5, text: "My family uses flash 4k iptv across three devices simultaneously and it works flawlessly. The kids have their cartoons, I watch football, and my wife watches her series. The VOD library is massive. Best value IPTV subscription I have found.", avatar: "C" },
  { name: "James Wilson", location: "New York, USA", rating: 5, text: "Cut the cable cord last month and flash 4k iptv was the best decision. I get every channel I need including local US networks and premium sports. The anti-freeze technology actually works during big games. No more buffering during the Super Bowl.", avatar: "J" },
];

const faqData = [
  { q: "What exactly is flash 4k iptv?", a: "flash 4k iptv is a premium IPTV subscription service that delivers live television channels, on-demand movies, and sports events over the internet. It works on Smart TVs, phones, tablets, computers, and streaming devices through a compatible IPTV player app." },
  { q: "How is flash 4k iptv different from cable TV?", a: "Unlike cable television, flash 4k iptv streams over your internet connection with no long-term contracts, no installation fees, and no expensive equipment rentals. You get access to thousands more channels at a lower monthly cost with the flexibility to watch on any device anywhere in the world." },
  { q: "What devices can I use with flash 4k iptv?", a: "flash 4k iptv supports Samsung Smart TV, LG Smart TV, Android TV, Apple TV, Amazon Firestick, Fire TV Cube, NVIDIA Shield, MAG boxes, Android boxes, iPhone, iPad, Android smartphones, tablets, Windows PCs, Mac computers, and Linux systems. Any device that supports IPTV player apps will work." },
  { q: "What internet speed do I need for 4K streaming?", a: "For the best experience with flash 4k iptv, we recommend at least 12 Mbps for HD streaming, 25 Mbps for smooth 4K Ultra HD streaming, and 50 Mbps for select 8K channels. A stable wired or strong WiFi connection is recommended for optimal performance." },
  { q: "How long does activation take after payment?", a: "Activation for flash 4k iptv is almost instant. Most customers receive their login credentials and setup instructions within 5 to 15 minutes after completing payment via WhatsApp. In some cases during peak hours it may take up to 30 minutes." },
  { q: "Can I use flash 4k iptv on multiple devices at the same time?", a: "You can install the flash 4k iptv service on as many devices as you like, but simultaneous streaming depends on your chosen subscription plan. Our plans support one connection for Basic, with higher-tier plans supporting multiple concurrent streams for family use." },
  { q: "Does flash 4k iptv work outside my home country?", a: "Yes, flash 4k iptv works worldwide. As long as you have a stable internet connection, you can access your subscription from anywhere in the world. This makes it perfect for travelers, expats, and anyone who wants to stay connected to content from their home country." },
  { q: "What channels and content are included?", a: "flash 4k iptv includes 26,000+ live channels covering sports, news, entertainment, movies, kids, documentaries, music, and international programming. The VOD library contains 100,000+ movies and TV series. Premium channels like HBO, Netflix, Disney+, Prime Video, and Bein Sports are also available." },
  { q: "Do you offer a free trial or money-back guarantee?", a: "Yes, flash 4k iptv offers a free trial so you can test the service before committing. Contact us via WhatsApp to request your trial. We also provide support throughout the trial period to help you set up and evaluate the service." },
  { q: "How do I set up flash 4k iptv on my device?", a: "Setting up flash 4k iptv is simple. After subscribing, you will receive an M3U link and Xtream Codes credentials. Download a compatible IPTV player app on your device such as IPTV Smarters, TiviMate, or VLC Media Player, enter your credentials, and start streaming immediately." },
];

const useCases = [
  { icon: <Trophy size={28} />, title: "Sports Fans", desc: "Watch Premier League, UEFA Champions League, NBA, NFL, UFC, Formula 1, and more live in 4K. Never miss a match with dedicated sports channels and multi-angle coverage." },
  { icon: <Film size={28} />, title: "Movie Lovers", desc: "Access 100,000+ movies on demand including the latest releases, classic cinema, and international films. New titles added weekly so there is always something fresh." },
  { icon: <Users size={28} />, title: "Families", desc: "One subscription covers the whole household. Kids channels, family movies, and diverse content for every age group. Use on multiple devices simultaneously." },
  { icon: <Globe size={28} />, title: "Travelers & Expats", desc: "Stay connected to channels from your home country while abroad. Access regional content, local news, and familiar programming anywhere in the world." },
  { icon: <TrendingUp size={28} />, title: "Cord-Cutters", desc: "Replace expensive cable and satellite subscriptions with flash 4k iptv. Pay less, get more channels, and enjoy the freedom of streaming on your terms." },
  { icon: <HeartHandshake size={28} />, title: "Budget-Conscious Viewers", desc: "Get premium entertainment at a fraction of traditional TV costs. No hidden fees, no equipment rentals, and no long-term commitments." },
];

const comparisonData = [
  { feature: "Monthly Cost", iptv: "$12 - $22/mo", cable: "$80 - $150/mo", satellite: "$70 - $130/mo" },
  { feature: "Live Channels", iptv: "26,000+", cable: "200 - 500", satellite: "200 - 400" },
  { feature: "4K Streaming", iptv: "Yes, true 4K & 8K", cable: "Limited", satellite: "Limited" },
  { feature: "On-Demand Library", iptv: "100,000+ titles", cable: "Varies", satellite: "Varies" },
  { feature: "Device Flexibility", iptv: "Any device, any screen", cable: "TV only", satellite: "TV only" },
  { feature: "Contract Length", iptv: "No contract", cable: "12 - 24 months", satellite: "12 - 24 months" },
  { feature: "Watch Abroad", iptv: "Yes, worldwide", cable: "No", satellite: "No" },
  { feature: "Installation", iptv: "Self-setup, 5 min", cable: "Professional, days", satellite: "Professional, days" },
  { feature: "Content Updates", iptv: "Daily/Weekly", cable: "Monthly", satellite: "Monthly" },
];

export default function SeoContent() {
  return (
    <>
      {/* ────── 1. WHY CHOOSE flash 4k iptv ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Trusted Worldwide</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              Why Choose <span className="text-cyan-500 lowercase">flash 4k iptv</span>?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              With hundreds of IPTV providers available, flash 4k iptv stands apart through a combination of
              genuine 4K quality, enterprise-grade infrastructure, and a relentless focus on customer
              satisfaction. Here is why thousands of subscribers choose us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex items-start gap-5">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500 shrink-0"><Award size={24} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase italic tracking-tight">Genuine 4K Quality</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Unlike providers that compress 4K streams, flash 4k iptv delivers true high-bitrate Ultra HD with vibrant colors and sharp detail on every compatible channel.</p>
              </div>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex items-start gap-5">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500 shrink-0"><Server size={24} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase italic tracking-tight">Enterprise Infrastructure</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Our anti-freeze servers across 15+ countries provide automatic failover routing, 99.9% uptime, and buffer-free streaming even during major global events.</p>
              </div>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex items-start gap-5">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500 shrink-0"><HeadphonesIcon size={24} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase italic tracking-tight">24/7 Customer Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Real human support available around the clock via WhatsApp. Average response time is under 5 minutes. Setup assistance, troubleshooting, and account help included.</p>
              </div>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex items-start gap-5">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500 shrink-0"><ShieldCheck size={24} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase italic tracking-tight">Instant Activation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Order to streaming in under 15 minutes. No waiting for installation appointments, no equipment shipping delays. Subscribe via WhatsApp and start watching immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── 2. IPTV FEATURES ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Premium Features</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              IPTV <span className="text-cyan-500 lowercase">Features</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Every feature of flash 4k iptv is designed to deliver the best possible streaming experience.
              From anti-freeze technology to global server coverage, here is what makes our IPTV service exceptional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuresList.map((f, i) => (
              <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group">
                <div className="p-3 bg-white/5 rounded-xl text-cyan-500 w-fit mb-5 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase italic tracking-tight">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── 3. 4K STREAMING BENEFITS ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Ultra HD Experience</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              4K Streaming <span className="text-cyan-500 lowercase">Benefits</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Streaming in 4K Ultra HD transforms your viewing experience. With flash 4k iptv, you get
              genuine high-bitrate 4K content that brings every detail to life on your screen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 md:p-10 rounded-[3rem] bg-gradient-to-br from-cyan-900/10 to-transparent border border-white/5">
              <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-500 w-fit mb-6"><Tv size={32} /></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tighter">True Ultra HD Quality</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                4K streaming delivers four times the resolution of Full HD. With flash 4k iptv, you get genuine
                3840 x 2160 pixel resolution with high bitrate encoding. This means sharper images, more
                detailed textures, and a significantly more immersive viewing experience on compatible screens.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Select channels also support 8K resolution for the ultimate picture clarity on next-generation displays.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-[3rem] bg-gradient-to-br from-purple-900/10 to-transparent border border-white/5">
              <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-500 w-fit mb-6"><Zap size={32} /></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tighter">Smooth Performance</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                4K streaming requires stable bandwidth and optimized routing. flash 4k iptv anti-freeze technology
                automatically adjusts stream quality based on your connection, ensuring smooth playback without
                stuttering or buffering interruptions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With servers in 15+ countries, your stream routes through the fastest path available for low-latency delivery.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-[3rem] bg-gradient-to-br from-cyan-900/10 to-transparent border border-white/5">
              <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-500 w-fit mb-6"><Monitor size={32} /></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tighter">Optimized for All Screens</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Whether you are watching on a 75-inch Smart TV, a laptop screen, or a phone display, flash 4k iptv
                dynamically optimizes the stream for your device. 4K content downscales beautifully on smaller
                screens while retaining exceptional clarity.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Experience cinema-quality picture whether you are at home on the big screen or catching up on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────── 4. IPTV vs TRADITIONAL TV (COMPARISON TABLE) ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">See the Difference</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              IPTV vs Cable vs <span className="text-cyan-500 lowercase">Satellite</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              See how flash 4k iptv compares to traditional television services. The differences in value,
              flexibility, and content access are significant.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-5 md:p-6 text-white font-black uppercase tracking-tight italic text-sm">Feature</th>
                  <th className="p-5 md:p-6 text-cyan-500 font-black uppercase tracking-tight italic text-sm">flash 4k iptv</th>
                  <th className="p-5 md:p-6 text-gray-500 font-black uppercase tracking-tight italic text-sm">Cable TV</th>
                  <th className="p-5 md:p-6 text-gray-500 font-black uppercase tracking-tight italic text-sm">Satellite TV</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 md:p-6 text-white font-bold text-sm">{row.feature}</td>
                    <td className="p-5 md:p-6 text-cyan-500 text-sm">{row.iptv}</td>
                    <td className="p-5 md:p-6 text-gray-500 text-sm">{row.cable}</td>
                    <td className="p-5 md:p-6 text-gray-500 text-sm">{row.satellite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 md:p-8 rounded-[2rem] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-cyan-500/10 text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              With flash 4k iptv, you get more channels, better quality, and total flexibility at a fraction of the cost.
              <span className="block text-cyan-500 font-bold mt-2">Save up to 80% compared to traditional TV subscriptions.</span>
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black rounded-2xl font-black uppercase tracking-tighter text-sm hover:scale-105 transition-all">View IPTV Subscription Plans</Link>
              <Link href="/features" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-tighter text-sm hover:bg-white/10 transition-all">Explore Premium Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────── 5. COMPATIBLE DEVICES ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Works Everywhere</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              Compatible <span className="text-cyan-500 lowercase">Devices</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              flash 4k iptv works on virtually every modern streaming platform. Watch on your living room TV,
              bedroom tablet, or office computer without missing a beat.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {compatibilityList.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-3 text-center hover:border-cyan-500/20 transition-all duration-300 group">
                <div className="p-3 bg-white/5 rounded-xl text-cyan-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-white font-bold text-sm uppercase tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tighter">Smart TVs & Boxes</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Samsung Smart TV, LG Smart TV, Android TV, Apple TV, Amazon Firestick, Fire TV Cube,
                NVIDIA Shield, MAG boxes, and all Android TV boxes. Install any IPTV player app, enter
                your flash 4k iptv credentials, and start watching instantly. Visit our <Link href="/features" className="text-cyan-500 hover:underline">IPTV features page</Link> for detailed device setup guides.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tighter">Mobile & Tablet</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                iPhone, iPad, Android smartphones, and Android tablets. Download an IPTV player from the
                App Store or Google Play, log in with your flash 4k iptv details, and enjoy live TV and
                on-demand content wherever you go.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tighter">Computer & Laptop</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Windows, macOS, and Linux. Use VLC Media Player, IPTV Smarters, TiviMate, or any
                M3U-compatible application. Perfect for watching while working, studying, or traveling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────── 6. SPORTS, MOVIES & TV SHOWS + INTERNATIONAL ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Endless Entertainment</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              Sports, Movies & <span className="text-cyan-500 lowercase">TV Shows</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              With 26,000+ live channels and 100,000+ titles on demand, flash 4k iptv offers more
              entertainment than any single streaming service can match.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 md:p-10 rounded-[3rem] bg-gradient-to-br from-purple-900/10 to-transparent border border-white/5">
              <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-500 w-fit mb-6"><Trophy size={32} /></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tighter">Live Sports Coverage</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Watch every major league and event live: Premier League, La Liga, Serie A, Bundesliga, Ligue 1,
                NBA, NFL, NHL, MLB, UFC, WWE, boxing, tennis grand slams, Formula 1, MotoGP, cricket, golf majors,
                and the Olympics. Dedicated sports channels broadcast in 4K for premium events.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Never miss a goal, touchdown, or knockout with flash 4k iptv comprehensive sports coverage.
                Multi-angle streams and backup channels ensure you always have access.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-[3rem] bg-gradient-to-br from-cyan-900/10 to-transparent border border-white/5">
              <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-500 w-fit mb-6"><Film size={32} /></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tighter">Blockbuster Movies</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                The flash 4k iptv VOD library includes the latest Hollywood blockbusters, classic films,
                award-winning international cinema, and independent productions. New movies added weekly
                so there is always something fresh to watch on demand.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From action, comedy, drama, and horror to sci-fi, thriller, romance, and documentary, the
                movie collection covers every genre. Start any title instantly with no wait times.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-[3rem] bg-gradient-to-br from-purple-900/10 to-transparent border border-white/5">
              <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-500 w-fit mb-6"><BookOpen size={32} /></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tighter">TV Series & Box Sets</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Binge-watch complete seasons of popular TV series from around the world. US network shows,
                British television, Korean dramas, Turkish series, Japanese anime, Spanish telenovelas,
                and more. Every episode available on demand.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Libraries updated regularly with the latest episodes. Catch up on current seasons or
                discover classic series you have been meaning to watch.
              </p>
            </div>
          </div>

          {/* International Channels */}
          <div className="p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-cyan-900/5 to-purple-900/5 border border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <Globe size={32} className="text-cyan-500 shrink-0" />
              <h3 className="text-3xl font-bold text-white uppercase italic tracking-tighter">International Channels</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-4xl">
              flash 4k iptv brings you channels from every region of the world. Whether you want news from
              your home country, international sports leagues, or foreign-language entertainment, our global
              channel lineup has you covered.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { region: "USA & Canada", channels: "ABC, NBC, CBS, CNN, FOX, ESPN, HBO, Discovery, National Geographic, Comedy Central" },
                { region: "UK & Ireland", channels: "BBC One, BBC Two, ITV, Channel 4, Sky Sports, BT Sport, UKTV, Dave" },
                { region: "Europe", channels: "France 2, TF1, Canal+, RAI, Mediaset, ARD, ZDF, RTL, TVE, Antena 3" },
                { region: "Middle East", channels: "Bein Sports, MBC, Al Jazeera, Dubai TV, OSN, Rotana, LBCI" },
                { region: "Asia", channels: "Hotstar, Sony TV, Zee TV, Star Plus, NHK, Fuji TV, CCTV, KBS" },
                { region: "Latin America", channels: "Televisa, Globo, Telefe, Caracol, TV Azteca, Univision" },
                { region: "Africa", channels: "Supersport, DStv, ONTV, NTA, M-Net, StarTimes" },
                { region: "Australia & NZ", channels: "ABC Australia, SBS, Nine Network, Sky NZ, Maori TV" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-tight">{item.region}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.channels}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────── 7. IPTV USE CASES ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">For Everyone</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              IPTV Use <span className="text-cyan-500 lowercase">Cases</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              flash 4k iptv adapts to your lifestyle. However you watch, wherever you are, there is a plan
              and setup that fits perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group">
                <div className="p-4 bg-white/5 rounded-2xl text-cyan-500 w-fit mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── 8. IPTV TECHNOLOGY EXPLAINED ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              IPTV Technology <span className="text-cyan-500 lowercase">Explained</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Understanding how IPTV works helps you get the most from your flash 4k iptv subscription.
              Here is a straightforward explanation of the technology behind the service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase italic tracking-tighter flex items-center gap-3">
                <Radio className="text-cyan-500" size={24} />
                What Is IPTV?
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                IPTV stands for Internet Protocol Television. Instead of broadcasting signals through
                traditional cable wires or satellite dishes, IPTV delivers television content over the
                same internet connection you use for browsing and streaming. This allows for two-way
                communication, on-demand access, and much greater flexibility than traditional broadcast methods.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With flash 4k iptv, your content travels as data packets through our optimized server
                network and is reassembled in real time on your device. This means you can watch live
                TV, pause and rewind, access on-demand libraries, and switch between devices seamlessly.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase italic tracking-tighter flex items-center gap-3">
                <Wifi className="text-cyan-500" size={24} />
                How Streaming Works
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                When you select a channel or movie on flash 4k iptv, your device sends a request to our
                nearest server. The server responds with the video stream, delivered in small data packets
                that your device buffers and plays in sequence. This process happens in milliseconds,
                creating a seamless viewing experience.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our anti-freeze technology monitors your connection in real time. If bandwidth fluctuates,
                the system automatically adjusts stream quality to prevent buffering. With servers in 15+
                countries, your connection routes through the fastest available path every time. Read our <Link href="/blog/ultimate-iptv-setup-guide-2026" className="text-cyan-500 hover:underline">complete IPTV setup guide</Link> for advanced optimization tips.
              </p>
            </div>
          </div>

          <div className="mt-8 p-8 md:p-10 rounded-[3rem] bg-gradient-to-br from-cyan-900/5 to-purple-900/5 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase italic tracking-tighter text-center">What Makes flash 4k iptv Different</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Server size={28} />, title: "Dedicated Infrastructure", desc: "Unlike resellers who share generic servers, flash 4k iptv operates its own network of enterprise-grade servers with automatic load balancing and failover protection." },
                { icon: <Sparkles size={28} />, title: "High-Bitrate Sources", desc: "We source our 4K content from premium providers at full bitrate. No compression artifacts, no quality loss. What you see is true Ultra HD." },
                { icon: <Clock size={28} />, title: "Real-Time Optimization", desc: "Our system continuously analyzes network conditions and adjusts routing in real time. When one server path slows down, traffic is instantly redirected." },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="p-4 bg-white/5 rounded-2xl text-cyan-500 w-fit mx-auto mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase italic tracking-tight">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────── 9. CUSTOMER TESTIMONIALS ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Real Reviews</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              What Our <span className="text-cyan-500 lowercase">Customers Say</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Join over 50,000 satisfied subscribers who have made flash 4k iptv their premium
              IPTV service of choice. Here is what they have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-cyan-500 fill-cyan-500" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 font-black text-lg">{t.avatar}</div>
                  <div>
                    <div className="text-white font-bold text-sm uppercase tracking-tight">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── E-E-A-T: ABOUT flash 4k iptv ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Company Information</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              About <span className="text-cyan-500 lowercase">flash 4k iptv</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              flash 4k iptv is a premium IPTV service provider dedicated to delivering high-quality
              entertainment to viewers worldwide. With thousands of satisfied customers across the globe,
              we have established ourselves as a trusted name in IPTV streaming.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center">
              <div className="text-4xl font-black text-cyan-500 mb-2">50,000+</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Global Subscribers</div>
              <p className="text-gray-500 text-sm leading-relaxed">Trusted by tens of thousands of customers across 100+ countries for premium IPTV entertainment.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center">
              <div className="text-4xl font-black text-cyan-500 mb-2">15+</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Server Locations</div>
              <p className="text-gray-500 text-sm leading-relaxed">Strategic global server network ensuring low-latency streaming and automatic failover for uninterrupted viewing.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center">
              <div className="text-4xl font-black text-cyan-500 mb-2">24/7</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Customer Support</div>
              <p className="text-gray-500 text-sm leading-relaxed">Dedicated support team available around the clock via WhatsApp for setup help, troubleshooting, and account assistance.</p>
            </div>
          </div>

          <div className="mt-12 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-cyan-900/5 to-purple-900/5 border border-white/5 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase italic tracking-tighter text-center">Our Commitment to Quality</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 leading-relaxed text-sm mb-4">
                  We believe premium entertainment should be accessible to everyone. That is why flash 4k iptv
                  combines enterprise-grade streaming infrastructure with affordable pricing. Every aspect of our
                  service is designed to deliver a superior viewing experience without the high costs of traditional TV.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Our team continuously monitors server performance, updates content libraries, and improves
                  streaming technology to ensure you always get the best possible IPTV experience. We stand
                  behind our service with responsive customer support and a commitment to excellence.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold uppercase tracking-tight text-sm mb-3">Why Customers Trust Us</h4>
                <ul className="space-y-2">
                  {[
                    "Enterprise-grade anti-freeze servers with 99.9% uptime",
                    "Genuine high-bitrate 4K and 8K streaming sources",
                    "Instant activation within 5 to 15 minutes of ordering",
                    "24/7 live customer support via WhatsApp",
                    "No long-term contracts or hidden cancellation fees",
                    "Regular content updates with new channels and VODs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── 10. COMPLETE SETUP GUIDE ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Start in Minutes</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              How to Set Up <span className="text-cyan-500 lowercase">flash 4k iptv</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Setting up flash 4k iptv takes just a few minutes. Follow these simple steps and
              start enjoying premium IPTV streaming on any device.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 md:p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-8 uppercase italic tracking-tighter flex items-center gap-3">
                <PlayCircle className="text-cyan-500" size={24} />
                Setup Steps
              </h3>
              <ol className="space-y-6">
                {[
                  { step: "Choose Your Plan", desc: "Select from Basic, Standard Pro, or Ultimate VIP based on your viewing needs and budget. See all options on our pricing page." },
                  { step: "Contact Us on WhatsApp", desc: "Send us a message to complete your order and request instant activation for flash 4k iptv." },
                  { step: "Receive Your Credentials", desc: "We will send your M3U link and Xtream Codes credentials within 5 to 15 minutes via WhatsApp." },
                  { step: "Install an IPTV Player", desc: "Download IPTV Smarters, TiviMate, VLC, or any compatible player on your preferred device. Read our setup guide for detailed installation steps." },
                  { step: "Enter Credentials & Watch", desc: "Open the app, enter your flash 4k iptv details, and start streaming thousands of channels instantly." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 font-black shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <div className="text-white font-bold uppercase tracking-tight text-sm mb-1">{item.step}</div>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-8 md:p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase italic tracking-tighter flex items-center gap-3">
                <HeadphonesIcon className="text-cyan-500" size={24} />
                24/7 Customer Support
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                flash 4k iptv provides round-the-clock customer support to help with setup, troubleshooting,
                and any questions you may have. Our technical team is available every day of the year.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Contact us via WhatsApp for instant assistance. Whether you need help configuring your IPTV
                player, understanding your subscription features, or resolving a playback issue, the
                flash 4k iptv support team is always ready to help. Visit our <Link href="/support" className="text-cyan-500 hover:underline">IPTV support page</Link> for FAQs and troubleshooting guides.
              </p>
              <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-cyan-500 font-bold">Quick Tip:</span> Most activation requests are
                  processed within 5 to 15 minutes after payment. Our team typically responds to
                  support messages within minutes. You are never alone with flash 4k iptv.
                </p>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { stat: "50K+", label: "Happy Customers" },
              { stat: "26K+", label: "Live Channels" },
              { stat: "100K+", label: "Movies & Series" },
              { stat: "24/7", label: "Live Support" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{item.stat}</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── 11. FREQUENTLY ASKED QUESTIONS ────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Got Questions?</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              Frequently Asked <span className="text-cyan-500 lowercase">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about flash 4k iptv. If you need more help,
              visit our <Link href="/support" className="text-cyan-500 hover:underline">IPTV support center</Link> or contact us 24/7 via WhatsApp.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase italic tracking-tight">{item.q}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
