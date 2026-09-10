// src/lib/posts/iptv-error-codes.ts

import type { FaqItem } from "../posts";

const faqs: FaqItem[] = [
  {
    question: "Does an error code mean my subscription expired?",
    answer: "It can, but not always. 401 Unauthorized is the code most commonly associated with an expired or invalid subscription, since the portal is rejecting your credentials outright. 403 Forbidden more often means the account is still active but something about the request is restricted — a connection limit, for example. Check the code first, then check your subscription status, rather than assuming expiry from any error."
  },
  {
    question: "Why does one channel fail while the rest of my list works fine?",
    answer: "This points to the individual stream endpoint, not your login. If the portal/API request that loads your channel list succeeds but one specific channel returns an error when you tap it, that channel's stream ID was likely removed, renamed, or renumbered on the provider's side — a 404 or 410 on that single stream URL, not a problem with your account or the rest of your playlist."
  },
  {
    question: "Will a VPN fix an IPTV error code?",
    answer: "Only when the underlying cause is actually your network path — for example, an ISP that interferes with the connection before it reaches the provider. A VPN cannot fix wrong credentials (401), a plan's device limit (403), a channel the provider removed (404/410), or a fault on the provider's own servers (5xx). Treat it as one thing to try when the cause is genuinely unclear, not a universal fix."
  },
  {
    question: "Why do I get a black screen with no error code at all?",
    answer: "Some player apps swallow the underlying HTTP response and just show a spinner or black screen instead of surfacing the actual status code. This is exactly why Section 5 of this guide shows how to check the real status directly, using your browser's network tab or a headers-only request, instead of relying on the app's generic failure screen."
  },
  {
    question: "Is 403 the same thing as \"max connections reached\"?",
    answer: "A connection-limit refusal is one common cause of a 403 on IPTV panels, but 403 is a general \"understood your request but won't authorize it\" response — it can also mean an IP/region restriction or a suspended account. And per RFC 6585, a server hitting a usage limit isn't required to return 429 or even 403 at all; dropping the connection is explicitly allowed, which is why a connection-limit hit can just as easily show up as a stall or a black screen."
  },
  {
    question: "Can changing my DNS fix a 500 error?",
    answer: "No. A 500 Internal Server Error means the provider's own server hit an unexpected fault while processing your request — it's generated after your request already reached their infrastructure. DNS only affects how your device finds the server's address; it has no influence over what the server does once your request arrives. This is a provider-side fault to report, not a network setting to tune."
  }
];

export const iptvErrorCodes = {
  id: "iptv-error-codes",
  title: "iptv error codes explained: 401, 403, 404, 410, 429, 451, 500, 502, 503 & 504",
  seoTitle: "IPTV Error Codes Explained: 401, 403, 404, 429, 500 & More",
  metaDescription: "What each IPTV error code means — 401, 403, 404, 410, 429, 451, 500, 502, 503 and 504 — how to tell whether the problem is your account, your network, or the server, and what to do next.",
  category: "TROUBLESHOOTING",
  date: "Sep 10, 2026",
  author: "FLASH TEAM",
  image: "/images/blog/iptv-smarters-pro-setup.webp",
  imageAlt: "An IPTV player app interface on a streaming device, representing where account and connection error codes appear during playback",
  excerpt: "your app just showed a number instead of a channel. here is what 401, 403, 404, 410, 429, 451, 500, 502, 503 and 504 actually mean, which one is your problem and which one is the provider's, and exactly how to check.",
  faqs,
  content: `    <h2 class="text-4xl font-extrabold mb-6">IPTV Error Codes Explained: 401, 403, 404, 410, 429, 451, 500, 502, 503 & 504</h2>

    <div class="space-y-10 text-gray-300 italic text-lg leading-relaxed">

      <!-- Direct Answer -->
      <section class="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-2xl">
        <h2 class="text-2xl font-black text-primary uppercase italic mb-4">Direct Answer</h2>
        <p class="text-white font-medium not-italic leading-relaxed">
          IPTV error codes split into two families. <strong>4xx codes (401, 403, 404, 410, 429, 451)</strong> mean your request was rejected — wrong or expired credentials, a permission or connection-limit issue, a stream that no longer exists, too many requests, or a legal restriction. These are usually something you or your provider's account settings can resolve. <strong>5xx codes (500, 502, 503, 504)</strong> mean your request was accepted but something failed while the server tried to fulfill it — this is almost always on the provider's side, not yours. Jump to your exact code below, or read Section 5 first to find out what code you're actually dealing with if your app only shows a generic "Connection Failed" message.
        </p>
      </section>

      <!-- 1. Quick Reference Table -->
      <section id="quick-reference" class="bg-white/5 p-8 rounded-[2rem] border border-white/10">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">1. quick reference: every code at a glance</h2>
        <div class="overflow-x-auto my-2 border border-white/10 rounded-2xl bg-black/40 p-4">
          <table class="w-full text-left text-sm text-gray-300">
            <thead class="text-xs uppercase text-white border-b border-white/20">
              <tr>
                <th class="py-3 px-4">Code</th>
                <th class="py-3 px-4">Standard meaning</th>
                <th class="py-3 px-4">Usually means on IPTV</th>
                <th class="py-3 px-4 text-primary">Who fixes it</th>
                <th class="py-3 px-4">Safe to retry?</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10">
              <tr><td class="py-3 px-4 font-bold text-white">401</td><td class="py-3 px-4">Missing/invalid credentials</td><td class="py-3 px-4">Wrong login, expired subscription, credentials in wrong field</td><td class="py-3 px-4 text-primary">You</td><td class="py-3 px-4">Only after fixing credentials</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">403</td><td class="py-3 px-4">Authenticated but not authorized</td><td class="py-3 px-4">Connection limit reached, IP/region restriction, suspended account</td><td class="py-3 px-4 text-primary">Either</td><td class="py-3 px-4">Only after resolving the restriction</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">404</td><td class="py-3 px-4">Resource not found (or hidden)</td><td class="py-3 px-4">That specific stream ID was removed or renumbered</td><td class="py-3 px-4 text-primary">Provider</td><td class="py-3 px-4">Won't resolve itself</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">410</td><td class="py-3 px-4">Resource permanently gone</td><td class="py-3 px-4">Channel deliberately discontinued</td><td class="py-3 px-4 text-primary">Provider</td><td class="py-3 px-4">No — not coming back</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">429</td><td class="py-3 px-4">Too many requests</td><td class="py-3 px-4">Too many rapid reconnects/API calls in a short window</td><td class="py-3 px-4 text-primary">You</td><td class="py-3 px-4">Yes, after waiting</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">451</td><td class="py-3 px-4">Unavailable for legal reasons</td><td class="py-3 px-4">Content blocked under a legal/regulatory demand</td><td class="py-3 px-4 text-primary">Provider</td><td class="py-3 px-4">No</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">500</td><td class="py-3 px-4">Unexpected server error</td><td class="py-3 px-4">Fault in the provider's panel/portal software</td><td class="py-3 px-4 text-primary">Provider</td><td class="py-3 px-4">Yes, may be transient</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">502</td><td class="py-3 px-4">Invalid response from upstream</td><td class="py-3 px-4">Proxy/restreamer got a bad reply from the origin server</td><td class="py-3 px-4 text-primary">Provider</td><td class="py-3 px-4">Yes, may be transient</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">503</td><td class="py-3 px-4">Server temporarily unavailable</td><td class="py-3 px-4">Overload or scheduled maintenance</td><td class="py-3 px-4 text-primary">Provider</td><td class="py-3 px-4">Yes, respect Retry-After</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">504</td><td class="py-3 px-4">Upstream didn't respond in time</td><td class="py-3 px-4">Origin/restreamer too slow or unreachable</td><td class="py-3 px-4 text-primary">Provider</td><td class="py-3 px-4">Yes, may be transient</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 2. 4xx vs 5xx -->
      <section id="4xx-vs-5xx">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">2. 4xx vs 5xx: who actually has to fix it</h2>
        <p>
          This is the single most useful distinction on this page, and it takes one sentence: a <strong class="text-white">4xx</strong> code means the server understood your request and actively declined it for a specific reason — credentials, permission, or a missing resource. A <strong class="text-white">5xx</strong> code means the server accepted your request and then failed while trying to actually fulfill it. Reinstalling an app, clearing a cache, or changing a DNS setting can plausibly fix a 4xx caused by bad local configuration, but none of those touch a 5xx — the failure already happened on infrastructure you don't control, after your request was accepted.
        </p>
      </section>

      <!-- 3. Where the error comes from -->
      <section id="where-it-comes-from" class="bg-white/5 p-8 rounded-[2rem] border border-white/10 my-12 shadow-2xl">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">3. where the error actually comes from</h2>
        <p>
          An IPTV request doesn't go directly from your player to one single server. It passes through several hops, and each one is capable of generating its own error independently of the others:
        </p>
        <div class="flex flex-col md:flex-row items-center justify-between gap-3 my-8 text-center">
          <div class="bg-black/40 border border-white/10 rounded-2xl px-4 py-4 flex-1"><span class="text-white font-black uppercase text-xs tracking-wide">App / Player</span></div>
          <span class="text-primary text-2xl font-black hidden md:block">→</span><span class="text-primary text-2xl font-black md:hidden">↓</span>
          <div class="bg-black/40 border border-white/10 rounded-2xl px-4 py-4 flex-1"><span class="text-white font-black uppercase text-xs tracking-wide">Portal / Panel API</span></div>
          <span class="text-primary text-2xl font-black hidden md:block">→</span><span class="text-primary text-2xl font-black md:hidden">↓</span>
          <div class="bg-black/40 border border-white/10 rounded-2xl px-4 py-4 flex-1"><span class="text-white font-black uppercase text-xs tracking-wide">Reverse Proxy / LB</span></div>
          <span class="text-primary text-2xl font-black hidden md:block">→</span><span class="text-primary text-2xl font-black md:hidden">↓</span>
          <div class="bg-black/40 border border-white/10 rounded-2xl px-4 py-4 flex-1"><span class="text-white font-black uppercase text-xs tracking-wide">Origin / Restreamer</span></div>
          <span class="text-primary text-2xl font-black hidden md:block">→</span><span class="text-primary text-2xl font-black md:hidden">↓</span>
          <div class="bg-primary/10 border border-primary/30 rounded-2xl px-4 py-4 flex-1"><span class="text-primary font-black uppercase text-xs tracking-wide">CDN Edge</span></div>
        </div>
        <p>
          Your ISP and DNS resolver sit in between every one of these hops too, which is a separate failure path from any of the servers themselves. The practical result: the same numeric code can mean something different depending on which hop produced it. A 401 from the portal API means your login was rejected before anything else happened. A 504 from the CDN edge means a hop further upstream never answered in time. Knowing roughly which hop you're looking at narrows the cause a lot faster than guessing from the number alone.
        </p>
        <h3 class="text-xl font-bold text-white mt-8 mb-3 uppercase italic">portal endpoint vs. stream endpoint</h3>
        <p>
          There are two genuinely different requests happening in a typical session, and they fail for different reasons:
        </p>
        <div class="grid md:grid-cols-2 gap-6 mt-4">
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h4 class="text-white font-black uppercase mb-2">Portal / API request</h4>
            <p class="text-sm">Example: <code class="bg-black/30 px-1.5 py-0.5 rounded text-primary">player_api.php</code> or <code class="bg-black/30 px-1.5 py-0.5 rounded text-primary">get.php</code>. This is what logs you in and returns your channel list. If this fails, nothing loads at all — a 401 or 403 here is a login/account problem.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h4 class="text-white font-black uppercase mb-2">Stream request</h4>
            <p class="text-sm">The actual <code class="bg-black/30 px-1.5 py-0.5 rounded text-primary">.m3u8</code> or <code class="bg-black/30 px-1.5 py-0.5 rounded text-primary">.ts</code> URL for one specific channel. If your list loads fine but one channel errors, the failure is here — usually a 404 or 410 on that one stream, unrelated to your login.</p>
          </div>
        </div>
      </section>

      <!-- 4. How to see the real code -->
      <section id="how-to-check">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">4. how to see the real error code yourself</h2>
        <p>
          Most player apps translate whatever the server actually sent into a generic message like "Connection Failed" or just leave you on a spinner. To see the real status code, check the request directly instead of trusting the app's summary of it.
        </p>
        <h3 class="text-xl font-bold text-white mt-6 mb-3 uppercase italic">Method 1 — browser network tab</h3>
        <ol class="list-decimal list-inside space-y-2 mt-2">
          <li>Open your portal or stream URL directly in a desktop browser.</li>
          <li>Open developer tools (F12 or right-click → Inspect) and switch to the Network tab.</li>
          <li>Reload the page and click the request that failed.</li>
          <li>Read the status code shown next to it, and check the Response Headers panel for the fields below.</li>
        </ol>
        <h3 class="text-xl font-bold text-white mt-6 mb-3 uppercase italic">Method 2 — headers-only request</h3>
        <div class="bg-black/60 p-6 rounded-xl border border-white/10 font-mono text-sm text-gray-300 my-4 overflow-x-auto">
          curl -I "INPUT_URL"
        </div>
        <p class="text-sm text-gray-400">
          Replace <code class="bg-black/30 px-2 py-0.5 rounded text-primary">INPUT_URL</code> with the portal or stream URL you want to check. <code class="bg-black/30 px-2 py-0.5 rounded text-primary">-I</code> requests headers only, so you get the status line and diagnostic headers without downloading the actual stream.
        </p>
        <p class="mt-4">
          Once you have the response, three headers matter most: <strong class="text-white">WWW-Authenticate</strong> (accompanies a 401, and describes how the server expects you to authenticate), <strong class="text-white">Retry-After</strong> (accompanies a 429 or 503, and tells you how long to wait, as either a number of seconds or an HTTP date), and <strong class="text-white">Link: rel="blocked-by"</strong> (can accompany a 451, identifying the entity that requested the block). Check both the portal URL and the stream URL separately — they can return different codes for different reasons, per Section 3.
        </p>
        <div class="bg-red-950/20 border-l-4 border-red-500 p-6 rounded-r-2xl mt-6">
          <p class="text-white font-bold text-sm uppercase tracking-wide not-italic">Important</p>
          <p class="text-sm mt-2 not-italic">Never paste or share your real Xtream Codes username, password, or full M3U URL publicly when asking for help — anyone who has them can log in and consume your account's connection slots. Redact credentials before posting a URL or a curl command anywhere, including to this guide's examples.</p>
        </div>
      </section>

      <!-- 5. Client-side codes -->
      <section id="client-side-codes">
        <h2 class="text-3xl font-black text-white uppercase italic mb-8 border-b border-primary/20 pb-4">5. client-side codes (4xx)</h2>

        <div class="space-y-8">
          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">401 Unauthorized — the server did not accept your login</h3>
            <p><strong class="text-white">Definition:</strong> the request lacks valid authentication credentials for the resource being requested.</p>
            <p class="mt-3"><strong class="text-white">On IPTV, this commonly means:</strong> the wrong username or password, credentials pasted into the wrong field, or a subscription that has expired.</p>
            <ul class="list-disc ml-6 mt-3 space-y-1 text-sm">
              <li><strong>Symptom:</strong> app rejects login immediately, no channel list loads.</li>
              <li><strong>Likely cause:</strong> typo in credentials, or subscription lapsed.</li>
              <li><strong>What to do:</strong> re-enter your Server URL, Username, and Password exactly as provided — see our <a href="/blog/m3u-vs-xtream-codes-api-iptv-guide" class="text-primary underline">M3U vs Xtream Codes format guide</a> if you're unsure which field is which. If credentials are confirmed correct, contact support to check subscription status.</li>
            </ul>
            <p class="mt-3 text-sm"><strong class="text-white">Confirm it:</strong> the response should carry a <code class="bg-black/30 px-1.5 py-0.5 rounded text-primary">WWW-Authenticate</code> header. <strong class="text-white">Fixes it:</strong> You.</p>
          </div>

          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">403 Forbidden — your login worked, access was refused</h3>
            <p><strong class="text-white">Definition:</strong> the server understood the request but refuses to authorize it.</p>
            <p class="mt-3"><strong class="text-white">On IPTV, this commonly means:</strong> an active account that's hit its concurrent-connection limit, an IP/region restriction, or a suspended account.</p>
            <ul class="list-disc ml-6 mt-3 space-y-1 text-sm">
              <li><strong>Symptom:</strong> login appears to succeed but playback or the list is refused.</li>
              <li><strong>Likely cause:</strong> another device is already using your connection slot, or a restricted IP range.</li>
              <li><strong>What to do:</strong> close the app on any other device that might be logged in. Check your plan's device limit on the pricing page, or contact support if it persists.</li>
            </ul>
            <p class="mt-3 text-sm"><strong class="text-white">Confirm it:</strong> compare with what you'd expect from Section 3 — a 403 on the portal endpoint is account-level; on a single stream, it's usually channel-specific. <strong class="text-white">Fixes it:</strong> Either.</p>
          </div>

          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">404 Not Found — that stream is not there</h3>
            <p><strong class="text-white">Definition:</strong> the origin server did not find a current representation for the resource, or is not willing to disclose that one exists.</p>
            <p class="mt-3"><strong class="text-white">On IPTV, this commonly means:</strong> the specific channel's stream ID was removed, renamed, or renumbered while the rest of your playlist still works fine.</p>
            <ul class="list-disc ml-6 mt-3 space-y-1 text-sm">
              <li><strong>Symptom:</strong> one channel fails, others play normally.</li>
              <li><strong>Likely cause:</strong> stream ID changed on the provider's side; your app's cached playlist still points to the old one.</li>
              <li><strong>What to do:</strong> refresh/re-add the playlist to pull current stream IDs. If it persists on that one channel only, report the specific channel name to support.</li>
            </ul>
            <p class="mt-3 text-sm"><strong class="text-white">Confirm it:</strong> check the stream URL specifically, not just the portal. <strong class="text-white">Fixes it:</strong> Provider.</p>
          </div>

          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">410 Gone — that stream was removed on purpose</h3>
            <p><strong class="text-white">Definition:</strong> the origin server knows the resource is no longer available at any URI, and this condition is likely permanent.</p>
            <p class="mt-3"><strong class="text-white">On IPTV, this commonly means:</strong> a channel was deliberately discontinued, not just temporarily glitching.</p>
            <ul class="list-disc ml-6 mt-3 space-y-1 text-sm">
              <li><strong>Symptom:</strong> one channel consistently fails, every time, indefinitely.</li>
              <li><strong>Likely cause:</strong> the channel was dropped from the lineup.</li>
              <li><strong>What to do:</strong> remove it from your favorites/list — retrying will not bring it back. Ask support whether a replacement channel exists.</li>
            </ul>
            <p class="mt-3 text-sm"><strong class="text-white">Confirm it:</strong> a 410 that persists across multiple days confirms permanence, unlike a transient 404. <strong class="text-white">Fixes it:</strong> Provider.</p>
          </div>

          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">429 Too Many Requests — you are being rate limited</h3>
            <p><strong class="text-white">Definition:</strong> you've sent too many requests in a given amount of time.</p>
            <p class="mt-3"><strong class="text-white">On IPTV, this commonly means:</strong> rapid repeated reconnect attempts or API calls in a short window — often from an app aggressively auto-retrying after a different failure.</p>
            <ul class="list-disc ml-6 mt-3 space-y-1 text-sm">
              <li><strong>Symptom:</strong> works, then suddenly refuses connections for a period.</li>
              <li><strong>Likely cause:</strong> repeated manual reloads, or an app stuck in an auto-retry loop.</li>
              <li><strong>What to do:</strong> stop retrying immediately and wait — check for a <code class="bg-black/30 px-1.5 py-0.5 rounded text-primary">Retry-After</code> value if you inspected the headers (Section 4).</li>
            </ul>
            <p class="mt-3 text-sm"><strong class="text-white">Confirm it:</strong> per RFC 6585, servers are not required to use 429 for usage limits at all — a connection-limit hit can just as easily present as a dropped connection or a 403 instead. <strong class="text-white">Fixes it:</strong> You.</p>
          </div>

          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">451 Unavailable for Legal Reasons — access blocked for legal reasons</h3>
            <p><strong class="text-white">Definition:</strong> the server is denying access to the resource as a consequence of a legal demand.</p>
            <p class="mt-3"><strong class="text-white">On IPTV, this commonly means:</strong> content restricted under a regulatory or legal requirement in a given jurisdiction.</p>
            <ul class="list-disc ml-6 mt-3 space-y-1 text-sm">
              <li><strong>Symptom:</strong> specific content or channels are unavailable, consistently.</li>
              <li><strong>What to do:</strong> this is a status code, not a technical fault — contact your provider about content availability rather than attempting to work around it.</li>
            </ul>
            <p class="mt-3 text-sm"><strong class="text-white">Confirm it:</strong> per RFC 7725, a 451 response may include a <code class="bg-black/30 px-1.5 py-0.5 rounded text-primary">Link: rel="blocked-by"</code> header naming the blocking entity — though the spec also notes 451 "implies neither the existence nor nonexistence" of the resource, and servers aren't required to use it even when a legal block is in effect. <strong class="text-white">Fixes it:</strong> Provider.</p>
          </div>
        </div>
      </section>

      <!-- 6. Server-side codes -->
      <section id="server-side-codes" class="bg-white/5 p-8 rounded-[2rem] border border-white/10 my-12">
        <h2 class="text-3xl font-black text-white uppercase italic mb-8 text-primary">6. server-side codes (5xx)</h2>
        <p class="mb-6">
          Every code in this section is generated after your request already reached the provider's infrastructure. Reinstalling your app, resetting your device, or changing DNS servers will not fix any of these — the fault is upstream of anything you control.
        </p>

        <div class="space-y-8">
          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">500 Internal Server Error</h3>
            <p><strong class="text-white">Definition:</strong> the server encountered an unexpected condition that prevented it from fulfilling the request.</p>
            <p class="mt-3"><strong class="text-white">On IPTV:</strong> typically a fault in the provider's panel or portal software itself.</p>
            <p class="mt-3 text-sm"><strong class="text-white">What to do:</strong> wait a few minutes and retry once; if it persists, report it with the exact time and what you were doing. <strong class="text-white">Fixes it:</strong> Provider.</p>
          </div>
          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">502 Bad Gateway</h3>
            <p><strong class="text-white">Definition:</strong> a gateway or proxy received an <em>invalid response</em> from an inbound server it accessed while trying to fulfill the request.</p>
            <p class="mt-3"><strong class="text-white">On IPTV:</strong> the reverse proxy or restreamer got a reply from the origin, but the reply itself was malformed or unusable.</p>
            <p class="mt-3 text-sm"><strong class="text-white">What to do:</strong> same as 500 — this is not fixable from your side. <strong class="text-white">Fixes it:</strong> Provider.</p>
          </div>
          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">503 Service Unavailable</h3>
            <p><strong class="text-white">Definition:</strong> the server is currently unable to handle the request due to temporary overload or scheduled maintenance.</p>
            <p class="mt-3"><strong class="text-white">On IPTV:</strong> often coincides with peak usage hours or announced maintenance windows.</p>
            <p class="mt-3 text-sm"><strong class="text-white">What to do:</strong> check for a <code class="bg-black/30 px-1.5 py-0.5 rounded text-primary">Retry-After</code> header and wait that long before trying again — repeatedly reloading during a 503 adds to the exact load causing it. <strong class="text-white">Fixes it:</strong> Provider.</p>
          </div>
          <div class="border border-white/5 p-8 rounded-[2rem] bg-black/20">
            <h3 class="text-2xl font-bold text-white mb-3 italic">504 Gateway Timeout</h3>
            <p><strong class="text-white">Definition:</strong> a gateway or proxy did not receive a <em>timely response</em> from an upstream server it needed to access.</p>
            <p class="mt-3"><strong class="text-white">On IPTV:</strong> the difference from 502 is precise — here the upstream server didn't respond at all in time, rather than responding with something invalid.</p>
            <p class="mt-3 text-sm"><strong class="text-white">What to do:</strong> wait and retry once; report if it's consistent across multiple channels. <strong class="text-white">Fixes it:</strong> Provider.</p>
          </div>
        </div>
      </section>

      <!-- 7. Confused codes -->
      <section id="confused-codes">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">7. codes that get confused with each other</h2>
        <div class="space-y-4 mt-4">
          <div class="border-l-4 border-primary pl-6 py-2">
            <h3 class="text-white font-black uppercase text-sm tracking-wide">401 vs 403</h3>
            <p class="text-sm mt-1">401 means you were never authenticated in the first place — the credentials themselves were rejected. 403 means authentication succeeded, but the specific request is still refused. If your login screen accepted your details and the failure happens after that, you're looking at 403 territory, not 401.</p>
          </div>
          <div class="border-l-4 border-primary pl-6 py-2">
            <h3 class="text-white font-black uppercase text-sm tracking-wide">403 vs 404</h3>
            <p class="text-sm mt-1">RFC 9110's own definition of 404 includes servers "not willing to disclose" that a resource exists — meaning a server can deliberately return 404 instead of confirming a restriction via 403, specifically to avoid revealing that the resource is there at all.</p>
          </div>
          <div class="border-l-4 border-primary pl-6 py-2">
            <h3 class="text-white font-black uppercase text-sm tracking-wide">403 vs 429</h3>
            <p class="text-sm mt-1">Both can result from hitting a limit, but per RFC 6585, a server is not required to use 429 when limiting usage — dropping the connection or returning 403 instead is explicitly allowed. Don't assume a connection-limit refusal will always show up as a clean, labeled 429.</p>
          </div>
          <div class="border-l-4 border-primary pl-6 py-2">
            <h3 class="text-white font-black uppercase text-sm tracking-wide">502 vs 504</h3>
            <p class="text-sm mt-1">502 means the upstream server answered, but with something invalid. 504 means the upstream server never answered in time at all. Both point at the same layer of the delivery chain; the difference is whether a (bad) response arrived or no response arrived.</p>
          </div>
          <div class="border-l-4 border-primary pl-6 py-2">
            <h3 class="text-white font-black uppercase text-sm tracking-wide">404 vs 410</h3>
            <p class="text-sm mt-1">404 leaves the door open — the resource might come back, or might never have existed in the first place. 410 is a deliberate signal that the resource is gone and isn't coming back. A provider that bothers to return 410 instead of 404 is telling you specifically not to keep retrying.</p>
          </div>
        </div>
      </section>

      <!-- 8. Retry guidance -->
      <section id="retry-guidance" class="bg-white/5 p-8 rounded-[2rem] border border-white/10">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">8. when to retry, and how long to wait</h2>
        <p>
          The <code class="bg-black/30 px-1.5 py-0.5 rounded text-primary">Retry-After</code> header, when present on a 429 or 503 response, tells you exactly how long to wait — expressed either as a number of seconds or as an HTTP date. Respecting it matters beyond politeness: repeatedly reloading during a 429 or 503 adds more load to the exact system that's already struggling, which can extend the outage for everyone hitting it, including you.
        </p>
        <p class="mt-4">
          As a general rule: 429, 500, 502, 503, and 504 are all worth retrying once after a short wait, since each can be transient. 401 and 403 are not worth retrying until you've actually changed something (fixed credentials, closed another session). 404, 410, and 451 are not going to resolve themselves through retrying at all — retrying doesn't change whether a resource exists, is gone, or is legally blocked.
        </p>
      </section>

      <!-- 9. Contacting support -->
      <section id="contacting-support">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">9. what to send your provider when you contact support</h2>
        <p>A support request that includes the following gets resolved faster than "it's not working":</p>
        <ul class="list-disc ml-6 space-y-2 mt-4">
          <li>The exact error code, if you have one (Section 4 shows how to find it).</li>
          <li>Whether it's one channel or the entire list/playlist.</li>
          <li>Whether the failure is on the portal/login or on playback of a specific stream.</li>
          <li>Your device and app name/version.</li>
          <li>When it started, and whether it's constant or intermittent.</li>
          <li>What you've already tried.</li>
          <li>Whether other devices on your account are affected too.</li>
        </ul>
        <div class="bg-red-950/20 border-l-4 border-red-500 p-6 rounded-r-2xl mt-6">
          <p class="text-sm not-italic"><strong class="text-white">Never include your username, password, or full M3U/Xtream URL</strong> in a public post, forum, or screenshot — only send credentials through a private channel directly to support.</p>
        </div>
        <p class="mt-6">
          For flash 4k iptv specifically, reach the support team directly via <a href="https://wa.me/212753936672" target="_blank" rel="noopener noreferrer" class="text-primary underline">WhatsApp</a> with the details above.
        </p>
      </section>

      <!-- FAQ -->
      <section id="faqs">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-l-8 border-primary pl-6">10. frequently asked questions</h2>
        <div class="space-y-6 mt-6">
          ${faqs
            .map(
              (faq) => `
          <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 class="text-xl font-bold text-white mb-2 italic">${faq.question}</h3>
            <p class="text-gray-300 text-base leading-relaxed">${faq.answer}</p>
          </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- Conclusion -->
      <section class="mt-12 border-t border-white/10 pt-8">
        <h2 class="text-2xl font-black text-white uppercase italic mb-4">conclusion</h2>
        <p class="text-gray-300">
          The number your app shows — or hides behind a generic "Connection Failed" screen — is a real, specific signal about which part of the delivery chain rejected your request and why. 4xx codes are worth investigating on your end first: credentials, connection limits, or a specific removed channel. 5xx codes mean the fault is already on the provider's infrastructure by the time you see it, and no amount of local troubleshooting will change that. Per the <a href="https://www.rfc-editor.org/rfc/rfc9110.html" class="text-primary underline underline-offset-4 font-bold" target="_blank" rel="noopener noreferrer">IETF's HTTP Semantics specification (RFC 9110)</a>, which defines 401, 403, 404, 410, and the 5xx codes covered here, and <a href="https://datatracker.ietf.org/doc/html/rfc6585" class="text-primary underline underline-offset-4 font-bold" target="_blank" rel="noopener noreferrer">RFC 6585</a>, which defines 429, these codes exist precisely so this kind of diagnosis is possible — the fastest fix usually starts with reading the actual code rather than the app's summary of it.
        </p>
      </section>

      <!-- Further Reading -->
      <section class="mt-8">
        <h3 class="text-xl font-black text-white uppercase italic mb-4">further reading</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm text-gray-300">
          <li><a href="/blog/m3u-vs-xtream-codes-api-iptv-guide" class="text-primary underline">M3U vs Xtream Codes format guide</a> — the login format behind most 401/403 cases.</li>
          <li><a href="/blog/stop-iptv-buffering-forever" class="text-primary underline">Diagnosing IPTV buffering</a> — for playback that's slow or stuttering rather than outright refused.</li>
          <li><a href="/blog/how-to-watch-iptv-on-firestick-2026-setup" class="text-primary underline">Firestick setup and troubleshooting</a> — device-level steps if the app itself needs reinstalling or reconfiguring.</li>
          <li><a href="/pricing" class="text-primary underline">Plan and device limits</a> — check your subscription's simultaneous-connection allowance.</li>
          <li><a href="/support" class="text-primary underline">Contact support</a> — for anything this guide narrows down to a provider-side issue.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-white/10">
        <p class="text-sm text-gray-500 not-italic">
          This guide explains what each status code means and how to narrow down the cause. It can't diagnose your specific account remotely — for that, use Section 9's checklist and contact support directly.
        </p>
      </section>

    </div>
  `
};
