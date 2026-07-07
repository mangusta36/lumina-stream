import { blogPosts, type BlogPost } from "./posts";

export interface CategoryInfo {
  slug: string;
  name: string;
  posts: BlogPost[];
  description: string;
  longDescription: string;
}

const categoryDescriptions: Record<string, { description: string; longDescription: string }> = {
  "BEGINNER": {
    description: "Start your IPTV journey with beginner-friendly guides from flash 4k iptv. Learn what IPTV is, how it works, and how to get started.",
    longDescription: "New to IPTV? Our beginner category covers everything you need to know to start streaming with flash 4k iptv. From understanding what IPTV is and how it differs from traditional cable TV, to choosing the right devices and setting up your first subscription. These guides break down complex topics into simple, actionable steps so anyone can start enjoying premium IPTV streaming in minutes."
  },
  "TUTORIAL": {
    description: "Step-by-step IPTV tutorials from flash 4k iptv. Detailed guides for Firestick, Apple TV, Android boxes, and more.",
    longDescription: "Our tutorial category provides comprehensive step-by-step guides for setting up flash 4k iptv on every major device platform. Whether you are configuring a Firestick, Apple TV, Android box, or Smart TV, each tutorial covers installation, configuration, optimization, and troubleshooting. Follow along with clear instructions and screenshots to get the most from your IPTV subscription."
  },
  "TROUBLESHOOTING": {
    description: "Solve common IPTV issues with flash 4k iptv troubleshooting guides. Fix buffering, lag, EPG problems, and connectivity issues.",
    longDescription: "Experiencing technical issues with your IPTV service? Our troubleshooting category contains in-depth guides to diagnose and resolve common problems. Learn how to eliminate buffering, fix EPG and catch-up functionality, optimize your network for streaming, and resolve connectivity issues. Each guide provides practical solutions tested by our technical team."
  },
  "GUIDE": {
    description: "Comprehensive IPTV guides from flash 4k iptv. Learn about setup, optimization, recording, parental controls, and multi-device streaming.",
    longDescription: "Explore our extensive collection of IPTV guides covering every aspect of your flash 4k iptv experience. From advanced setup configurations to DVR recording, parental controls, channel list organization, and multi-device usage, these guides help you master every feature of your IPTV subscription."
  },
  "HARDWARE": {
    description: "Best hardware for IPTV streaming in 2026. Reviews and guides for Android boxes, Firestick, and streaming devices from flash 4k iptv.",
    longDescription: "Choosing the right hardware is essential for the best IPTV experience. Our hardware category reviews and compares the top streaming devices including Android boxes, Firestick models, and TV boxes. Learn which devices deliver the best 4K performance, which offer the best value, and how to optimize your hardware for peak streaming quality with flash 4k iptv."
  },
  "SOFTWARE": {
    description: "Best IPTV player apps and software for 2026. Reviews of TiviMate, IPTV Smarters, and more from flash 4k iptv.",
    longDescription: "The right IPTV player app can transform your streaming experience. Our software category reviews the top IPTV player applications including TiviMate, IPTV Smarters Pro, OTT Navigator, and VLC Media Player. Compare features, performance, and compatibility to find the perfect player for your flash 4k iptv setup."
  },
  "SECURITY": {
    description: "IPTV security and privacy guides from flash 4k iptv. Learn about VPNs, safe streaming, and protecting your connection.",
    longDescription: "Protect your privacy while streaming with our security-focused guides. Learn why using a VPN with flash 4k iptv is recommended, how to configure VPN protocols for optimal streaming performance, and how to secure your home network against threats. Our security category ensures you can stream with complete peace of mind."
  },
  "SPORTS TECH": {
    description: "Sports streaming technology guides from flash 4k iptv. Watch live sports in 4K with zero buffering.",
    longDescription: "Sports fans demand the highest quality streaming, and our sports technology category delivers. Learn how flash 4k iptv delivers live Premier League, UEFA Champions League, NBA, NFL, UFC, and Formula 1 in stunning 4K quality. Discover tips for optimizing your setup for live sports events and ensuring buffer-free coverage of every match."
  },
  "SPORTS EXCLUSIVE": {
    description: "Exclusive sports streaming coverage from flash 4k iptv. World Cup 2026 guides and premium sports content.",
    longDescription: "Get ready for the biggest sporting events with our exclusive sports coverage. The World Cup 2026 guides prepare you for ultra HD streaming of every match. Learn about the best settings, devices, and network configurations to ensure you never miss a moment of the action with flash 4k iptv."
  },
  "INDUSTRY ANALYSIS": {
    description: "IPTV industry analysis and insights from flash 4k iptv. Compare IPTV vs cable, satellite, and explore the future of streaming.",
    longDescription: "Stay informed with our in-depth industry analysis. Compare IPTV against traditional cable and satellite television across cost, channel selection, quality, and flexibility. Explore the future of IPTV technology from 2026 to 2030, and understand why millions of viewers worldwide are choosing flash 4k iptv for their entertainment needs."
  },
  "TRENDS": {
    description: "Latest IPTV trends and streaming insights from flash 4k iptv. Stay ahead with the newest technology and viewing patterns.",
    longDescription: "Keep up with the rapidly evolving world of IPTV and streaming technology. Our trends category covers emerging viewing patterns, new streaming technologies, market developments, and predictions for the future of television. Stay informed with flash 4k iptv expert analysis."
  },
  "ENTERTAINMENT": {
    description: "IPTV entertainment guides from flash 4k iptv. Build the ultimate home cinema experience and discover new ways to watch.",
    longDescription: "Transform your home entertainment with our comprehensive guides. Learn how to build the ultimate home cinema experience with flash 4k iptv, optimize your viewing environment, and discover new ways to enjoy live TV, movies, and sports. From sound system setup to lighting optimization, make every viewing session cinematic."
  },
  "FAMILY TECH": {
    description: "Family-friendly IPTV guides from flash 4k iptv. Parental controls, child safety, and multi-device family setups.",
    longDescription: "Keep your family safe while enjoying premium entertainment. Our family technology guides cover parental controls, child safety settings, and how to set up flash 4k iptv for the whole family. Learn about content filtering, viewing time management, and creating individual profiles for each family member."
  },
  "GLOBAL STREAMING": {
    description: "Global streaming guides from flash 4k iptv. Watch your home country content while traveling abroad.",
    longDescription: "Never miss content from home while traveling abroad. Our global streaming category provides guides for expats, travelers, and international viewers who want to stay connected to channels from their home country. Learn how flash 4k iptv works worldwide and how to optimize your setup for international streaming."
  },
  "MASTERCLASS": {
    description: "Advanced IPTV masterclass guides from flash 4k iptv. Reseller guides, business insights, and professional streaming knowledge.",
    longDescription: "Take your IPTV knowledge to the next level with our masterclass series. These advanced guides cover reseller opportunities, business insights, and professional-grade streaming configurations. Whether you are looking to become a reseller or simply want to master every aspect of flash 4k iptv, these in-depth resources provide expert-level knowledge."
  },
  "BUSINESS MASTERCLASS": {
    description: "IPTV business masterclass from flash 4k iptv. Learn about reseller programs, business models, and industry opportunities.",
    longDescription: "Explore the business side of IPTV with our business masterclass category. Learn about reseller programs, pricing strategies, customer acquisition, and how to build a successful IPTV business. These guides provide actionable insights for entrepreneurs looking to enter the IPTV market with flash 4k iptv."
  },
  "TECHNICAL DEEP DIVE": {
    description: "Advanced technical IPTV guides from flash 4k iptv. Deep dives into EPG, catch-up, network optimization, and streaming protocols.",
    longDescription: "For technical enthusiasts and advanced users, our technical deep dive category explores the inner workings of IPTV technology. Learn about EPG configuration, catch-up TV functionality, network optimization techniques, streaming protocols, and advanced troubleshooting methods to get the absolute best performance from flash 4k iptv."
  }
};

export function getUniqueCategories(): string[] {
  const cats = new Set(blogPosts.map((p) => p.category));
  return Array.from(cats).sort();
}

export function slugifyCategory(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function categoryFromSlug(slug: string): string | null {
  const cat = getUniqueCategories().find((c) => slugifyCategory(c) === slug);
  return cat ?? null;
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getCategoryDisplayInfo(slug: string): CategoryInfo | null {
  const name = categoryFromSlug(slug);
  if (!name) return null;
  const desc = categoryDescriptions[name] || {
    description: `Browse all ${name} articles from flash 4k iptv. Expert guides, tutorials, and insights about IPTV streaming.`,
    longDescription: `Explore our collection of ${name} articles from flash 4k iptv. Each guide is carefully written to help you get the most from your IPTV subscription.`
  };
  return {
    slug,
    name,
    posts: getPostsByCategory(name),
    description: desc.description,
    longDescription: desc.longDescription,
  };
}
