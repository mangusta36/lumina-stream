// src/lib/posts.ts

import { organizeIptvChannelList2026 } from "./posts/organize-iptv-channel-list-2026";
import { fixEpgCatchupIptv2026 } from "./posts/fix-epg-catchup-iptv-2026";
import { ultimateIptvSetupGuide2026 } from "./posts/ultimate-iptv-setup-guide-2026";
import { worldCup2026StreamingTrends } from "./posts/world-cup-2026-streaming-trends";
import { top10AndroidBoxes2026 } from "./posts/top-10-android-boxes-2026";
import { stopIptvBufferingForever } from "./posts/stop-iptv-buffering-forever";
import { bestIptvPlayers2026 } from "./posts/best-iptv-players-2026";
import { securityVpnIptv2026 } from "./posts/security-vpn-iptv-2026";
import { smartTvOptimizationGuide } from "./posts/smart-tv-optimization-guide";
import { futureOfIptv20262030 } from "./posts/future-of-iptv-2026-2030";
import { iptvVsCableVsSatellite2026 } from "./posts/iptv-vs-cable-vs-satellite-2026";
import { expatGuideStreamingAbroad2026 } from "./posts/expat-guide-streaming-abroad-2026";
import { multiDeviceIptvSetup2026 } from "./posts/multi-device-iptv-setup-2026";
import { ultimateHomeCinemaIptv2026 } from "./posts/ultimate-home-cinema-iptv-2026";
import { completeIptvResellerGuide2026 } from "./posts/complete-iptv-reseller-guide-2026";
import { stopIptvLagNetworkGuide2026 } from "./posts/stop-iptv-lag-network-guide-2026";
import { worldCup2026UltraHdStreamingGuide } from "./posts/world-cup-2026-ultra-hd-streaming-guide";
import { bestIptvAppsForSmartTv2026 } from "./posts/best-iptv-apps-for-smart-tv-2026";
import { iptvVsCableTv2026 } from "./posts/iptv-vs-cable-tv-2026";
import { whatIsIptv2026BeginnersGuide } from "./posts/what-is-iptv-2026-beginners-guide";
import { howToWatchIptvOnFirestick2026Setup } from "./posts/how-to-watch-iptv-on-firestick-2026-setup";
import { iptvRecordingDvrGuide2026 } from "./posts/iptv-recording-dvr-guide-2026";
import { iptvSportsFans2026Guide } from "./posts/iptv-sports-fans-2026-guide";
import { iptvOnAppleTv2026SetupGuide } from "./posts/iptv-on-apple-tv-2026-setup-guide";
import { iptvParentalControlsChildSafetyGuide } from "./posts/iptv-parental-controls-child-safety-guide";
import { iptvOnPcMacMobile2026 } from "./posts/iptv-on-pc-mac-mobile-2026";
import { applyPostRewrite } from "./post-rewrites";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  category: string;
  date: string;
  author: string;
  image: string;
  imageAlt?: string;
  excerpt: string;
  content: string;
  faqs?: FaqItem[];
  lastModified?: string;
}

export function estimateReadingTime(content: string): string {
  const text = content.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  const words = text.split(" ").length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

export function parsePostDate(dateStr: string): Date {
  return new Date(`${dateStr} UTC`);
}

export function getPostModifiedDate(post: BlogPost): Date {
  return parsePostDate(post.lastModified || post.date);
}

export function isPublishedPost(post: BlogPost, now = new Date()): boolean {
  return parsePostDate(post.date).getTime() <= now.getTime();
}

export function getPublishedBlogPosts(now = new Date()): BlogPost[] {
  return blogPosts.filter((post) => isPublishedPost(post, now));
}

function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => parsePostDate(b.date).getTime() - parsePostDate(a.date).getTime());
}

export const blogPosts: BlogPost[] = sortByDate([
  organizeIptvChannelList2026,
  fixEpgCatchupIptv2026,
  ultimateIptvSetupGuide2026,
  worldCup2026StreamingTrends,
  top10AndroidBoxes2026,
  stopIptvBufferingForever,
  bestIptvPlayers2026,
  securityVpnIptv2026,
  smartTvOptimizationGuide,
  futureOfIptv20262030,
  iptvVsCableVsSatellite2026,
  expatGuideStreamingAbroad2026,
  multiDeviceIptvSetup2026,
  ultimateHomeCinemaIptv2026,
  completeIptvResellerGuide2026,
  stopIptvLagNetworkGuide2026,
  worldCup2026UltraHdStreamingGuide,
  bestIptvAppsForSmartTv2026,
  iptvVsCableTv2026,
  whatIsIptv2026BeginnersGuide,
  howToWatchIptvOnFirestick2026Setup,
  iptvRecordingDvrGuide2026,
  iptvSportsFans2026Guide,
  iptvOnAppleTv2026SetupGuide,
  iptvParentalControlsChildSafetyGuide,
  iptvOnPcMacMobile2026,
]).map(applyPostRewrite);
