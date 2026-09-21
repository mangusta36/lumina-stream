import type { BlogPost } from "../posts";

export const iptvEpgXmltvTvgIdChannelMapping: BlogPost = {
  id: "iptv-epg-xmltv-tvg-id-channel-mapping",
  title: "IPTV EPG & XMLTV Explained: tvg-id, Channel Mapping & Missing Guide Data",
  seoTitle: "IPTV EPG & XMLTV Explained: tvg-id & Channel Mapping",
  metaDescription: "How IPTV EPG and XMLTV work, what tvg-id does, and how channel mapping and time zones explain missing guide data, wrong times and No Information errors.",
  category: "TECHNICAL DEEP DIVE",
  date: "Sep 20, 2026",
  lastModified: "Sep 20, 2026",
  author: "FLASH TEAM",
  image: "/images/blog/iptv-epg-xmltv-tvg-id-channel-mapping.webp",
  imageAlt: "IPTV EPG XMLTV tvg-id and channel mapping diagram",
  excerpt: "Trace a playlist channel from tvg-id to XMLTV programme records, understand timezone offsets, and diagnose why live TV can work while its guide is blank or wrong.",
  // Visible FAQs only: Google retired FAQ rich results in May 2026.
  // Shared article rendering supplies BlogPosting and BreadcrumbList schema.
  content: `
    <div class="space-y-10 text-gray-300 italic text-lg leading-relaxed">
      <p class="text-white font-medium not-italic">An IPTV EPG is the programme-guide data beside your live channels. XMLTV is a common format for delivering those listings. The playlist and guide are separate: a value such as <code>tvg-id</code> connects a playlist channel to its XMLTV schedule. If that mapping, the source, timestamps or player configuration is wrong, video can play normally while the guide shows incorrect times or "No Information."</p>

      <section id="what-is-epg">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-l-8 border-primary pl-6">What Is an IPTV EPG?</h2>
        <p>EPG means Electronic Program Guide. It supplies the current and next programme, schedule grid, titles, start/end times and descriptions. Categories, artwork and episode information may also appear when the source provides them and the player supports them.</p>
        <p class="mt-4">The EPG does not deliver video. Selecting a channel opens a media source; opening its guide reads schedule metadata. In the <a href="/" class="text-primary underline">Flash 4K IPTV</a> viewing experience, those systems meet on one screen, but success in one does not prove the other is healthy.</p>
        <div class="overflow-x-auto mt-6" role="region" aria-label="IPTV playlist and guide components" tabindex="0">
          <table class="w-full text-left bg-black/20 rounded-2xl">
            <caption class="text-sm text-gray-400 text-left mb-3">The components in an IPTV EPG/XMLTV setup have different jobs.</caption>
            <thead><tr class="text-white border-b border-white/10"><th scope="col" class="p-4">IPTV Component</th><th scope="col" class="p-4">Purpose</th><th scope="col" class="p-4">Example</th></tr></thead>
            <tbody class="text-sm">
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">Playlist/channel list</th><td class="p-4">Identifies channels and their media addresses</td><td class="p-4">M3U or Xtream-based list</td></tr>
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">Live stream</th><td class="p-4">Carries audio and video</td><td class="p-4">A channel's HLS or TS feed</td></tr>
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">tvg-id</th><td class="p-4">Links a playlist entry to guide data</td><td class="p-4"><code>example.us</code></td></tr>
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">XMLTV channel</th><td class="p-4">Describes a guide channel</td><td class="p-4"><code>&lt;channel id="example.us"&gt;</code></td></tr>
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">XMLTV programme</th><td class="p-4">Describes a scheduled broadcast</td><td class="p-4"><code>&lt;programme ...&gt;</code></td></tr>
              <tr><th scope="row" class="p-4 text-white">EPG URL</th><td class="p-4">Locates the schedule data</td><td class="p-4">XML or compressed XML source</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <figure>
        <img src="/images/blog/iptv-epg-xmltv-tvg-id-channel-mapping.webp" alt="IPTV EPG XMLTV tvg-id and channel mapping diagram" width="1600" height="900" loading="lazy" decoding="async" class="w-full h-auto rounded-[2rem] border border-white/10" />
        <figcaption class="text-sm text-gray-400 mt-3">Matching identifiers connect the channel list to programme metadata. The live video travels separately.</figcaption>
      </figure>

      <section id="xmltv">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">What Is XMLTV?</h2>
        <p>XMLTV is an XML-based television-listings format. Think of it as a structured schedule that software can read. This fictional example contains one channel and one broadcast; the dates demonstrate syntax, not a permanently current guide.</p>
        <pre class="bg-black/40 p-6 rounded-2xl border border-white/10 my-6 font-mono text-sm not-italic overflow-x-auto" tabindex="0" aria-label="Fictional XMLTV example"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;tv&gt;
  &lt;channel id="example.us"&gt;
    &lt;display-name&gt;Example TV&lt;/display-name&gt;
  &lt;/channel&gt;
  &lt;programme start="20260920180000 +0000"
             stop="20260920190000 +0000"
             channel="example.us"&gt;
    &lt;title lang="en"&gt;Evening News&lt;/title&gt;
    &lt;desc lang="en"&gt;A fictional daily news programme.&lt;/desc&gt;
  &lt;/programme&gt;
&lt;/tv&gt;</code></pre>
        <p>The <code>&lt;channel&gt;</code> record describes the station. Its <code>id</code> identifies it, while <code>&lt;display-name&gt;</code> gives a human-readable name. Each <code>&lt;programme&gt;</code> refers to that identifier through its <code>channel</code> attribute. Here, <code>start</code> and <code>stop</code> bound the broadcast, and <code>&lt;title&gt;</code> names it.</p>
        <p class="mt-4">The <a href="https://github.com/XMLTV/xmltv/blob/master/xmltv.dtd" class="text-primary underline" target="_blank" rel="noopener noreferrer">XMLTV project's format definition</a> specifies these relationships. The format permits channel descriptions without programmes, so finding a channel name in a feed does not prove it contains listings for today.</p>
      </section>

      <section id="m3u-mapping">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-l-8 border-primary pl-6">How M3U, tvg-id and XMLTV Work Together</h2>
        <p>Here is the matching M3U entry. The address uses the reserved <code>.example</code> domain for illustration and will not play a real channel.</p>
        <pre class="bg-black/40 p-6 rounded-2xl border border-white/10 my-6 font-mono text-sm not-italic overflow-x-auto" tabindex="0" aria-label="Fictional M3U example"><code>#EXTM3U
#EXTINF:-1 tvg-id="example.us" tvg-name="Example TV",Example TV HD
https://stream.example/live/example.ts</code></pre>
        <figure class="bg-white/5 p-6 rounded-2xl border border-white/10 not-italic">
          <div class="grid md:grid-cols-2 gap-6">
            <div><h3 class="text-white font-bold mb-2">Playlist side</h3><p class="font-mono text-sm">#EXTINF<br />tvg-id="example.us"</p></div>
            <div><h3 class="text-white font-bold mb-2">XMLTV side</h3><p class="font-mono text-sm">&lt;channel id="example.us"&gt;<br />&lt;programme channel="example.us" ...&gt;</p></div>
          </div>
          <figcaption class="text-sm text-gray-400 mt-4">Same identifier &harr; matching guide channel &rarr; programme records &rarr; schedule beside the playlist channel.</figcaption>
        </figure>
        <p class="mt-4">The player loads the channel list, imports guide records, associates their identifiers and displays programmes covering the selected time window. The video URL is independent of this association. A broken match can leave "Example TV HD" playable but its schedule empty.</p>
        <p class="mt-4">Xtream-based players may obtain equivalent channel and guide associations through provider APIs rather than a visible M3U file. That does not eliminate the need for correct metadata. For login and playlist differences, see <a href="/blog/m3u-vs-xtream-codes-api-iptv-guide" class="text-primary underline">M3U vs Xtream Codes</a>.</p>
      </section>

      <section id="tvg-id">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">What Is tvg-id in IPTV?</h2>
        <p><code>tvg-id</code> is a playlist attribute commonly used as the EPG mapping key. It is not the channel's stream address, screen label or logo. These fields can coexist without containing identical text:</p>
        <ul class="list-disc ml-6 space-y-2 mt-4">
          <li><strong>tvg-id:</strong> the guide identifier, such as <code>example.us</code>.</li>
          <li><strong>tvg-name:</strong> a name hint that some players use for matching.</li>
          <li><strong>Visible channel name:</strong> the label after the M3U entry's comma, such as "Example TV HD."</li>
          <li><strong>tvg-logo:</strong> an image reference; matching logos do not establish matching schedules.</li>
        </ul>
        <p class="mt-4">A playlist containing <code>Example.us</code> and a feed containing <code>example.us</code> may behave differently across players. <a href="https://github.com/kodi-pvr/pvr.iptvsimple#epg" class="text-primary underline" target="_blank" rel="noopener noreferrer">Kodi IPTV Simple's documented EPG settings</a> include an option to ignore identifier case. Other implementations may use exact matches or name fallbacks.</p>
        <p class="mt-4">Punctuation, suffixes and regional identifiers also matter: <code>example.us</code> and <code>example.west.us</code> may describe different schedules. Renaming a visible channel does not necessarily change its identifier or repair an existing manual assignment.</p>
      </section>

      <section id="no-information">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">Why IPTV Shows "No Information"</h2>
        <p>The player has no usable programme entry for that channel and displayed time. That symptom alone does not identify the failed layer. Use the scope of the problem to choose the first check.</p>
        <div class="overflow-x-auto mt-6" role="region" aria-label="EPG symptoms and diagnostic checks" tabindex="0">
          <table class="w-full text-left bg-black/20 rounded-2xl">
            <caption class="text-sm text-gray-400 text-left mb-3">These are diagnostic possibilities, not guaranteed causes.</caption>
            <thead><tr class="text-white border-b border-white/10"><th scope="col" class="p-4">Symptom</th><th scope="col" class="p-4">Likely Cause</th><th scope="col" class="p-4">First Diagnostic Step</th></tr></thead>
            <tbody class="text-sm">
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">All channels blank</th><td class="p-4">Unavailable, unassigned or failed EPG source</td><td class="p-4">Verify source assignment and last successful import</td></tr>
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">Some channels blank</th><td class="p-4">Missing programmes or mapping mismatch</td><td class="p-4">Compare tvg-id, XMLTV ID and date coverage</td></tr>
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">Wrong programme shown</th><td class="p-4">Incorrect or regional channel assignment</td><td class="p-4">Compare the assigned channel's actual schedule</td></tr>
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">All programmes shifted</th><td class="p-4">Timezone, source or player offset issue</td><td class="p-4">Check device time and timestamp offsets</td></tr>
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">Old listings remain; EPG stopped updating</th><td class="p-4">Cache, refresh failure or provider change</td><td class="p-4">Inspect feed dates and the last import result</td></tr>
              <tr class="border-b border-white/5"><th scope="row" class="p-4 text-white">Works on only one device</th><td class="p-4">Different app settings, mapping or cache</td><td class="p-4">Compare source, version, assignment and timezone</td></tr>
              <tr><th scope="row" class="p-4 text-white">Channels play; guide does not</th><td class="p-4">Separate media and metadata paths</td><td class="p-4">Inspect guide retrieval independently of playback</td></tr>
            </tbody>
          </table>
        </div>
        <p class="mt-4">If the guide request returns an HTTP error, that is evidence about retrieval, not channel matching. Our <a href="/blog/iptv-error-codes" class="text-primary underline">IPTV error codes</a> guide explains those responses. A successful download still needs to contain valid schedule data, rather than an HTML login page.</p>
      </section>

      <section id="partial-coverage">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">Why Some Channels Have EPG and Others Do Not</h2>
        <p>A partially populated guide suggests that at least some data imported successfully. Compare one working channel with one blank channel: does the blank channel's identifier exist, and are there programme records for it during the missing period?</p>
        <p class="mt-4">Possible causes include absent listings, a renamed channel, changed provider IDs, regional variants, duplicate display names or a source using a different naming system. A schedule might end tonight even though other channels have several days of data.</p>
        <p class="mt-4">Adding another XMLTV source helps only if it supplies the correct schedule and the player associates it correctly. More sources can create ambiguous matches. "Example TV East" and "Example TV West" may share branding while showing different programmes at the same instant.</p>
      </section>

      <section id="assign-epg">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">How IPTV Channel Mapping Works</h2>
        <h3 class="text-xl font-black text-white mb-3">Automatic mapping</h3>
        <p>The player attempts to associate playlist entries with guide channels, often starting with identifiers. Name-based fallbacks are implementation-specific. Matching text is useful evidence, but a similar name alone cannot establish the correct country, region or time-shifted service.</p>
        <h3 class="text-xl font-black text-white mt-6 mb-3">Manual mapping</h3>
        <p>An "Assign EPG" or equivalent feature lets you explicitly associate a playlist channel with a guide entry. Conceptually, select the affected channel, choose the imported source and correct guide channel, then check its current and next programmes. Save the association and confirm it survives a refresh.</p>
        <p class="mt-4">Controls differ between TiviMate, IPTV Smarters, OTT Navigator, Kodi and other <a href="/blog/best-iptv-players-2026" class="text-primary underline">IPTV player apps</a>. Availability also varies on Smart TVs, Firestick, Android TV, Apple TV and mobile devices. If the app lacks manual assignment, an editable playlist may need its identifier corrected instead. Preserve a backup before editing.</p>
        <p class="mt-4">For example, manually linking playlist ID <code>example.us</code> to source ID <code>example-east</code> tells the player they represent the same schedule. It does not rename either record or repair an empty feed. Check the assignment again after changing providers or EPG sources, because the saved target may no longer exist.</p>
      </section>

      <section id="wrong-time">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-l-8 border-primary pl-6">Why Your IPTV EPG Shows the Wrong Time</h2>
        <p><strong>XMLTV does not always store everything in UTC.</strong> A timestamp can include an explicit offset. On September 20, 2026, <code>20260920180000 +0000</code> and <code>20260920200000 +0200</code> represent the same instant: 18:00 UTC.</p>
        <p class="mt-4">The player interprets the timestamp and offset, then displays it using its timezone handling, usually tied to device settings. XMLTV's format definition assumes UTC when no timezone is supplied; a source that writes local clock time without the required offset can therefore mislabel the instant.</p>
        <figure class="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6 not-italic">
          <h3 class="text-white font-bold mb-3">One instant, different clock readings</h3>
          <p class="font-mono text-sm">XMLTV: 20:00 +0200 &rarr; interpreted instant: 18:00 UTC &rarr; player/device zone UTC+01:00 &rarr; displayed time: 19:00</p>
          <figcaption class="text-sm text-gray-400 mt-3">This example uses a fixed UTC+01:00 display zone. A named regional timezone can use a different offset depending on the date.</figcaption>
        </figure>
        <ol class="list-decimal ml-6 space-y-3 mt-6">
          <li><strong>Check device date, time and timezone.</strong> A correct-looking clock with the wrong zone is still suspect.</li>
          <li><strong>Compare a known programme</strong> with the broadcaster's authoritative schedule, accounting for the schedule's displayed timezone and channel region.</li>
          <li><strong>Check the scope.</strong> An equal shift across every channel suggests a shared setting; one affected region suggests a narrower source or mapping issue.</li>
          <li><strong>Inspect the player's EPG offset.</strong> Note global and channel-specific adjustments; an old correction may now be applied twice.</li>
          <li><strong>Inspect the XMLTV timestamp and offset.</strong> Determine whether the source actually describes the expected instant.</li>
          <li><strong>Only then apply a manual correction if necessary.</strong> Record its scope and remove it when the underlying source is corrected.</li>
        </ol>
        <p class="mt-4">A blind +1-hour shift can make today's grid look right while hiding bad provider configuration or app-specific parsing. Tomorrow's listings, another region or the next clock change may expose the error again.</p>
      </section>

      <section id="dst">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">EPG Time Zones and Daylight Saving Time</h2>
        <p>DST introduces a date-dependent offset. The source country's clock rules and the viewer's timezone are separate: countries can change clocks on different dates, and some do not change them at all.</p>
        <p class="mt-4">Correctly offset timestamps identify the broadcast instant even around clock changes. The device or player must then display that instant using the viewer's rules for that date. A provider using last week's fixed offset, outdated timezone information or an old player correction can create a temporary one-hour error.</p>
        <p class="mt-4">During an autumn clock change, the same local clock reading may occur twice with different offsets. Compare complete timestamps, not just "01:30." If only foreign channels shift for a few weeks, investigate their source-region conversion before moving the entire guide.</p>
      </section>

      <section id="epg-url">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">What Is an IPTV EPG URL?</h2>
        <p>An EPG URL points the player to programme-guide data. A playlist URL supplies the channel list and media references. Putting the playlist address into an XMLTV field usually gives the player the wrong kind of document.</p>
        <p class="mt-4">Guide addresses often end in <code>.xml</code> or <code>.xml.gz</code>; the latter commonly contains gzip-compressed XML. Valid endpoints may instead use a script path or query parameters. The returned content and player support matter more than the suffix.</p>
        <p class="mt-4">Use the provider's designated guide address and verify it is assigned to the intended playlist. Some players discover it through playlist metadata or account setup; others need explicit configuration. Treat authenticated guide URLs as private and redact tokens before sharing diagnostic screenshots.</p>
      </section>

      <section id="alternate-source">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">Can You Use a Different XMLTV Source?</h2>
        <p>Often yes, if your player accepts custom EPG sources. Confirm that the alternative covers the exact channel region, contains current dates and uses a supported format. Then compare its IDs with the playlist or assign channels manually.</p>
        <p class="mt-4">A new feed can contain excellent listings under <code>example-east</code> while your playlist expects <code>example.us</code>. Downloading that feed alone does not establish their relationship. With several sources, check assignment or source priority to avoid importing the right schedule but displaying a different one.</p>
        <p class="mt-4">When evaluating guide coverage for <a href="/" class="text-primary underline">flash 4k</a>, distinguish available listings from successful mapping. These are separate checks, just as picture quality and programme descriptions are separate parts of the viewing experience.</p>
      </section>

      <section id="cache">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">EPG Cache, Refresh and Stale Guide Data</h2>
        <p>The provider publishes a schedule; the app downloads and imports it; a local cache or database keeps listings available. Each stage can become stale. A refresh attempt is not necessarily a successful import.</p>
        <p class="mt-4">Check the last successful update and the actual date range in the source. If the feed itself ends yesterday, clearing local data cannot invent today's programmes. If the source is current but the app keeps old records after an endpoint change, a targeted guide refresh or rebuild may help.</p>
        <p class="mt-4">Avoid repeatedly clearing all app storage. That can remove playlists, credentials and manual assignments. Use the documented EPG-specific action where available, and retain your configuration. A successful refresh should be confirmed by updated listings, not merely a spinner disappearing.</p>
      </section>

      <section id="diagnostic-flow" class="bg-white/5 p-6 sm:p-8 rounded-[2rem] border border-white/10">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">Trace the EPG Problem</h2>
        <ol class="list-decimal ml-6 space-y-4">
          <li><strong>Do channels play?</strong> No &rarr; investigate playback/account/connectivity first; the problem may extend beyond EPG. Yes &rarr; follow the guide-data path.</li>
          <li><strong>Is all guide data missing?</strong> Yes &rarr; check source availability, assignment, download and import. No &rarr; narrow the affected channels.</li>
          <li><strong>Are only some channels blank?</strong> Compare tvg-id with XMLTV IDs, then verify programme coverage for the displayed dates.</li>
          <li><strong>Does the guide exist but show wrong times?</strong> Compare device timezone, XMLTV offsets, player adjustments and DST rules.</li>
          <li><strong>Is the wrong programme attached?</strong> Inspect incorrect mapping, duplicates and regional assignments before shifting timestamps.</li>
        </ol>
        <p class="mt-6">Use one affected channel as a traceable example. Record its playlist ID, assigned guide ID, source, programme timestamp and displayed time. That small evidence set is more useful than changing multiple settings at once.</p>
      </section>

      <section id="catch-up">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6">EPG vs Catch-Up TV: What Is the Difference?</h2>
        <p>EPG is schedule metadata. Catch-up is access to previously aired video, requiring provider archives and compatible player behavior. A guide can supply the interface for selecting an earlier programme without guaranteeing that its video is available.</p>
        <p class="mt-4">Correct titles and times do not prove an archive exists, covers that channel or remains within its retention window. If listings are mapped correctly but past programmes fail to play, use the dedicated guide to <a href="/blog/fix-epg-catchup-iptv-2026" class="text-primary underline">fix IPTV EPG and catch-up TV</a>.</p>
      </section>

      <section id="faq">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-l-8 border-primary pl-6">Frequently Asked Questions</h2>
        <div class="space-y-6">
          <div><h3 class="text-xl font-black text-white mb-2">What is EPG in IPTV?</h3><p>An Electronic Program Guide supplies channel schedules, including current and next programmes, titles and broadcast times. It describes the content; it does not carry the video.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">What is XMLTV in IPTV?</h3><p>XMLTV is an XML-based listings format used to exchange channel and programme metadata. A player imports it to populate the TV guide.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">What does tvg-id mean?</h3><p>It is a playlist attribute used to associate a channel with guide records, commonly by matching the XMLTV channel ID. It is separate from the visible name.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">Why does IPTV say "No Information"?</h3><p>The player has no usable listing for that channel and time. Possible causes include failed guide retrieval, missing programme data, incorrect mapping or time interpretation.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">Why does EPG work on some channels but not others?</h3><p>Some identifiers may match while others do not, or the source may cover only certain channels and dates. Compare a working channel with a blank one.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">Why is my IPTV EPG one hour ahead or behind?</h3><p>Check device timezone, source timestamp offsets, DST and existing player corrections. A one-hour discrepancy does not automatically justify a global one-hour shift.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">Can I add my own XMLTV EPG?</h3><p>Often, if the app supports custom sources. The feed must contain suitable schedules, and its channel identifiers still need to map to your playlist.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">Why doesn't a new EPG source automatically match my channels?</h3><p>Importing listings and assigning them are separate operations. Different IDs, regional variants or ambiguous names can require manual mapping even when the schedule exists.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">What is the difference between an EPG URL and an IPTV playlist URL?</h3><p>The playlist URL supplies channels and media references. The EPG URL supplies schedule metadata. They are different inputs even when hosted by the same provider.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">Is EPG required for IPTV to work?</h3><p>Generally no: a player can open a valid live stream without programme listings. Missing guide data can affect navigation without breaking audio or video.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">Does EPG control catch-up TV?</h3><p>It may provide programme selection and timing, but catch-up also requires accessible archived video and compatible requests. Having listings alone does not enable replay.</p></div>
          <div><h3 class="text-xl font-black text-white mb-2">Can two channels use the same EPG data?</h3><p>Yes, when they genuinely share a schedule, such as matching SD and HD simulcasts, and the player supports the association. Regional or delayed variants may need separate assignments.</p></div>
        </div>
      </section>
    </div>
  `,
};
