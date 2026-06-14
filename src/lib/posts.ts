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
}

export const blogPosts: BlogPost[] = [
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
];
