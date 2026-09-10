// src/lib/posts/how-to-verify-real-4k-iptv-stream.ts

import type { FaqItem } from "../posts";

const faqs: FaqItem[] = [
  {
    question: "Does 3840×2160 mean the IPTV stream is real 4K?",
    answer: "It means the encoded stream's frame dimensions are 3840×2160, which is genuine, checkable evidence of delivered resolution. It does not by itself prove the original camera or broadcast master was natively produced at that resolution — a lower-resolution source can be upscaled and re-encoded into a 3840×2160 container. Resolution metadata confirms what was delivered, not what was originally captured."
  },
  {
    question: "What bitrate should a 4K IPTV stream have?",
    answer: "There is no single correct number. Bitrate requirements depend on codec (AV1 and HEVC need far less than H.264 for the same quality), frame rate, content complexity, and whether HDR/10-bit is involved. YouTube's own live-encoder guidance recommends roughly 30 Mbps for H.264 at 2160p30 versus 8–35 Mbps for AV1/HEVC at the same resolution — a more than 4x spread for the same picture. Treat bitrate as one contextual data point, not a pass/fail authenticity test."
  },
  {
    question: "Can H.264 carry a 4K stream?",
    answer: "Yes. H.264/AVC is technically capable of encoding 3840×2160 video, and current streaming hardware decodes it at that resolution — Amazon's published Fire TV Stick specifications list H.264 decoding up to 4K at 60fps on several current models. Codec choice affects efficiency, not whether 4K is possible."
  },
  {
    question: "Is HEVC required for 4K IPTV?",
    answer: "No. HEVC (H.265) and AV1 are more bandwidth-efficient at 4K than H.264, which is why they're commonly preferred for UHD delivery, but H.264 can also carry a 3840×2160 stream. Codec is a compression-efficiency choice, not a resolution requirement or a proof of authenticity."
  },
  {
    question: "Does 60 FPS mean a stream is 4K?",
    answer: "No. Frame rate and spatial resolution are independent properties. A stream can be 1080p60, 2160p24, 2160p50, or 2160p60 — the frame rate tells you about motion smoothness, not pixel dimensions. Don't infer resolution from frame rate or vice versa."
  },
  {
    question: "Is HDR the same as 4K?",
    answer: "No. HDR (HDR10, HDR10+, HLG, Dolby Vision) describes dynamic range and color metadata, and resolution describes frame dimensions — they are separate technical properties that can combine in any pairing. A stream can be 4K SDR, 4K HDR, 1080p SDR, or in some cases 1080p HDR. Never assume one property from the other."
  },
  {
    question: "Why does my IPTV player say 4K but the image still looks soft?",
    answer: "A player's resolution badge typically reflects the decoded frame dimensions reported by the stream, which is real metadata — but it says nothing about the bitrate, compression quality, or whether the original source was upscaled before encoding. A technically valid 3840×2160 stream can still look soft if it was encoded from an upscaled or heavily compressed source."
  },
  {
    question: "Can ffprobe tell whether a video was originally recorded in native 4K?",
    answer: "No. ffprobe reports the properties of the file or stream you feed it — width, height, codec, frame rate, pixel format, and similar container-level metadata. It cannot see upstream of that file to the original camera or master. It's a tool for verifying delivered stream properties, not for proving source provenance."
  },
  {
    question: "Why does my TV say 2160p when the IPTV stream is only 1080p?",
    answer: "Your TV's input/output resolution indicator reflects what your streaming device (Fire TV, Android box, Smart TV app) is outputting over HDMI, not necessarily the native resolution of the video stream itself. A device can upscale a 1080p stream internally and output 3840×2160 over HDMI — the TV correctly reports what arrived at the HDMI port, which is not the same fact as what resolution the source stream was encoded at."
  }
];

export const howToVerifyReal4kIptvStream = {
  id: "how-to-verify-real-4k-iptv-stream",
  title: "how to verify a real 4k iptv stream: resolution, bitrate, codec, fps & hdr explained",
  seoTitle: "How to Verify a Real 4K IPTV Stream: Resolution, Bitrate, FPS & HDR",
  metaDescription: "Learn how to inspect resolution, bitrate, codec, frame rate, and HDR metadata to verify what an IPTV stream is actually delivering — not just what the channel name claims.",
  category: "TECHNICAL DEEP DIVE",
  date: "Sep 10, 2026",
  author: "FLASH TEAM",
  image: "/images/blog/router-dns-security.webp",
  imageAlt: "Network and technical equipment representing the hardware layer between a streamed video signal and the screen",
  excerpt: "a channel named 4k or uhd is not technical evidence. this guide shows how to actually inspect resolution, bitrate, codec, frame rate, and hdr metadata to see what a stream is really delivering.",
  faqs,
  content: `    <h2 class="text-4xl font-extrabold mb-6">How to Verify a Real 4K IPTV Stream: Resolution, Bitrate, Codec, FPS & HDR Explained</h2>

    <div class="space-y-10 text-gray-300 italic text-lg leading-relaxed">

      <!-- Direct Answer -->
      <section class="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-2xl">
        <h2 class="text-2xl font-black text-primary uppercase italic mb-4">Direct Answer</h2>
        <p class="text-white font-medium not-italic leading-relaxed">
          The reliable way to verify an IPTV stream is to inspect several independent technical properties — resolution, bitrate, codec, frame rate, and HDR metadata — rather than trusting a channel name containing "4K" or "UHD." A stream reporting 3840×2160 confirms the encoded frame dimensions that were actually delivered to your device. It does not, on its own, prove that the original camera feed or broadcast master was natively produced at that resolution — a lower-resolution source can be upscaled and re-encoded into a 3840×2160 stream. No single field, including resolution, bitrate, or codec, conclusively proves native-source 4K by itself.
        </p>
      </section>

      <!-- 1. What Does Real 4K IPTV Actually Mean -->
      <section id="what-does-real-4k-mean">
        <h2 class="text-4xl font-black text-white uppercase italic mb-6 border-l-8 border-primary pl-6">1. what does "real 4k iptv" actually mean?</h2>
        <p>
          "Real 4K" gets used loosely in IPTV marketing and community discussion to mean several different things at once, and conflating them is where most confusion starts. It helps to separate the question into two genuinely different claims.
        </p>
        <p class="mt-4">
          <strong>A. Verifying the delivered stream properties.</strong> This is the frame dimensions, codec, bitrate, frame rate, and color/HDR metadata that your player or a tool like ffprobe can read directly from the stream you're receiving right now. These are objective, checkable facts about what arrived at your device.
        </p>
        <p class="mt-4">
          <strong>B. Proving native source provenance.</strong> This is a separate, much harder claim — that the original camera feed or broadcast master was itself captured and mastered at 3840×2160 rather than upscaled from a lower-resolution source somewhere upstream. Transport and codec metadata generally cannot prove this on their own, because upscaling happens before encoding and leaves no mandatory metadata trail.
        </p>
        <p class="mt-4">
          This guide teaches (A) thoroughly and rigorously, because it's genuinely verifiable. It treats (B) honestly: you can gather supporting clues, but you should not expect metadata alone to settle it.
        </p>
      </section>

      <!-- 2. Verification Ladder -->
      <section id="verification-ladder" class="bg-white/5 p-8 rounded-[2rem] border border-white/10">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">2. the 4k stream verification ladder</h2>
        <p>
          Evidence quality is not all equal. Some signals are marketing; others are objective, machine-readable facts about the file or stream itself. This ladder orders the available signals from weakest to strongest.
        </p>
        <div class="space-y-4 mt-6">
          <div class="border-l-4 border-white/20 pl-6 py-2">
            <h3 class="text-white font-black uppercase text-sm tracking-wide">Level 0 — Channel Name</h3>
            <p class="text-sm mt-1">Example: "SPORT UHD". What it proves: almost nothing technically — it's a label, not a measurement. What it does not prove: resolution, codec, bitrate, HDR, or native source.</p>
          </div>
          <div class="border-l-4 border-white/20 pl-6 py-2">
            <h3 class="text-white font-black uppercase text-sm tracking-wide">Level 1 — Player Stream Info</h3>
            <p class="text-sm mt-1">Most IPTV players (TiviMate, IPTV Smarters, OTT Navigator) expose a stream-info overlay showing reported resolution, FPS, and sometimes codec or bitrate. This reflects what the player's decoder actually received — real evidence, though display and depth of detail vary by app.</p>
          </div>
          <div class="border-l-4 border-white/20 pl-6 py-2">
            <h3 class="text-white font-black uppercase text-sm tracking-wide">Level 2 — HLS Manifest / Stream Metadata</h3>
            <p class="text-sm mt-1">Where the delivery format exposes it (HLS variant playlists in particular), attributes like RESOLUTION, FRAME-RATE, CODECS, BANDWIDTH, and AVERAGE-BANDWIDTH are declared by the source. These are stronger, standardized signals — but declared values should ideally be checked against the actual decoded stream, since a manifest can misstate what's really being sent.</p>
          </div>
          <div class="border-l-4 border-primary pl-6 py-2">
            <h3 class="text-white font-black uppercase text-sm tracking-wide">Level 3 — Direct Stream Inspection (ffprobe)</h3>
            <p class="text-sm mt-1">Inspecting the stream directly with a tool like ffprobe reads the actual encoded properties — width, height, codec, pixel format, frame rate, and available color metadata — rather than relying on a label or a declared manifest value. This is the strongest verification level covered in this guide, and it's detailed in Section 6.</p>
          </div>
        </div>
      </section>

      <!-- 3. Step 1: Resolution -->
      <section id="step-1-resolution">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">3. step 1: check the actual resolution</h2>
        <p>
          Resolution is expressed as width × height in pixels. The two figures that matter for this discussion:
        </p>
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">1920 × 1080</h3>
            <p class="text-sm">Commonly called Full HD or 1080p.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">3840 × 2160</h3>
            <p class="text-sm">The consumer resolution commonly marketed as "4K" or "UHD" (technically "UHD-1"). This is distinct from cinema DCI 4K, which is 4096 × 2160 and used in theatrical production, not consumer streaming.</p>
          </div>
        </div>
        <p>
          Width × height tells you the encoded frame dimensions the stream is carrying right now. It does <strong>not</strong> by itself tell you the original camera or master resolution, the bitrate or compression quality being used to encode those dimensions, whether HDR is present, the frame rate, or whether upscaling occurred upstream before this stream was produced. Resolution is one axis of information among several — treat it as a starting point, not a conclusion.
        </p>
      </section>

      <!-- 4. Step 2: Bitrate -->
      <section id="step-2-bitrate" class="bg-white/5 p-8 rounded-[2rem] border border-white/10">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">4. step 2: measure bitrate without a fake universal threshold</h2>
        <p>
          Bitrate describes how much encoded data is delivered per second of video, typically in megabits per second (Mbps). It's tempting to treat "below X Mbps, it can't really be 4K" as a rule of thumb — but this is not technically sound, and this guide will not present it as one.
        </p>
        <p class="mt-4">
          A higher bitrate can allow more detail at the same codec and settings, but higher bitrate does not automatically mean better quality, and a lower bitrate does not automatically mean fake or downscaled resolution. What a given bitrate is "enough" for depends on several factors simultaneously:
        </p>
        <ul class="list-disc ml-8 space-y-2 mt-4">
          <li><strong>Codec</strong> — AV1 and HEVC compress far more efficiently than H.264 at the same visual quality.</li>
          <li><strong>Encoder quality</strong> — a well-tuned encoder extracts more quality per bit than a poorly configured one.</li>
          <li><strong>Frame rate</strong> — 60fps content needs meaningfully more data than 24fps content at equivalent quality, because there's more motion information per second.</li>
          <li><strong>Content complexity</strong> — a static news desk compresses far more efficiently than a fast-moving sports broadcast with crowd detail.</li>
          <li><strong>Bit depth / HDR</strong> — 10-bit HDR content carries more per-pixel information than 8-bit SDR.</li>
        </ul>
        <p class="mt-4">
          A concrete illustration of how much codec alone changes the picture: YouTube's own published live-encoder guidance recommends different bitrate ranges for the same 2160p resolution depending on codec and frame rate.
        </p>
        <div class="overflow-x-auto my-6 border border-white/10 rounded-2xl bg-black/40 p-4">
          <table class="w-full text-left text-sm text-gray-300">
            <thead class="text-xs uppercase text-white border-b border-white/20">
              <tr>
                <th class="py-3 px-4">Resolution / FPS</th>
                <th class="py-3 px-4">H.264</th>
                <th class="py-3 px-4 text-primary">AV1 / HEVC</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10">
              <tr>
                <td class="py-3 px-4 font-bold text-white">2160p @ 30fps</td>
                <td class="py-3 px-4">~30 Mbps recommended</td>
                <td class="py-3 px-4 text-primary">8–35 Mbps (min–max)</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">2160p @ 60fps</td>
                <td class="py-3 px-4">~35 Mbps recommended</td>
                <td class="py-3 px-4 text-primary">10–40 Mbps (min–max)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mt-4 text-sm text-gray-400">
          <strong class="text-white">Important context:</strong> this table is YouTube's own live-streaming ingest guidance for creators uploading to YouTube — it is not an IPTV requirement, an authenticity threshold, or a general streaming standard. It's included here purely to demonstrate, with real published numbers from a major streaming platform, that "acceptable bitrate for 4K" is not one number — it varies by more than 4x depending on codec and frame rate alone. Use bitrate as one contextual data point when evaluating a stream, never as a pass/fail test on its own.
        </p>
      </section>

      <!-- 5. Step 3: Codec -->
      <section id="step-3-codec">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">5. step 3: identify the codec</h2>
        <p>
          A codec (coder-decoder) is the compression format used to encode and decode the video. The codec in use affects how efficiently a given bitrate is spent — it does not, by itself, determine or limit spatial resolution.
        </p>
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">H.264 / AVC</h3>
            <p class="text-sm">The oldest and most universally compatible codec in current use. Requires the highest bitrate of the four for a given visual quality, but is fully capable of carrying 3840×2160 video — resolution and codec are independent properties.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">HEVC / H.265</h3>
            <p class="text-sm">Roughly 40–50% more bandwidth-efficient than H.264 at equivalent quality, which is why it's commonly preferred for UHD delivery. Widely supported in modern streaming hardware.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">VP9</h3>
            <p class="text-sm">An open, royalty-free codec with efficiency broadly comparable to HEVC, commonly used by some streaming platforms and supported on many current streaming devices.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">AV1</h3>
            <p class="text-sm">The newest open, royalty-free codec of the four, generally the most bandwidth-efficient at UHD resolutions. Hardware decoding support is now common on current-generation streaming devices, though older hardware may lack it.</p>
          </div>
        </div>
        <p>
          A frequent — and incorrect — assumption is that "H.264 means the stream can't really be 4K." This does not hold up against actual current hardware specifications. Amazon's published Fire TV Stick device specifications list H.264 decoding up to 4K at 60fps as a supported capability on several current-generation models, alongside HEVC, AV1, and VP9 support at the same resolution on the higher-tier devices. Codec choice is a compression-efficiency and compatibility decision — not evidence, on its own, of whether a stream's resolution claim is genuine.
        </p>
      </section>

      <!-- 6. Step 4: Frame Rate -->
      <section id="step-4-frame-rate" class="bg-white/5 p-8 rounded-[2rem] border border-white/10">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">6. step 4: check 24 / 25 / 30 / 50 / 60 fps</h2>
        <p>
          Frame rate measures temporal sampling — how many complete frames are captured and delivered per second — and it is a separate axis from spatial resolution. Common values include 24fps (traditional cinema), 25fps and 50fps (regions built around the 50Hz broadcast standard), and 30fps and 60fps (regions built around the 60Hz standard).
        </p>
        <p class="mt-4">
          Because frame rate and resolution are independent, all of the following are valid, real combinations: a 2160p24 movie, a 2160p50 sports broadcast, a 2160p60 sports or event stream, and a 1080p60 sports broadcast. None of these combinations is inherently more "real" than another — they simply reflect different source content and regional broadcast conventions. Higher frame rates are commonly used for sports and fast-motion content specifically because they reduce perceived motion blur and judder during quick camera pans, which is a genuine viewing-quality benefit independent of resolution.
        </p>
        <p class="mt-4">
          One area to be careful with is interlaced versus progressive video (historically notated as, for example, 1080i versus 1080p) and the related distinction between fields and frames. Interlacing is a legacy broadcast technique where each frame is split into two alternating fields; it behaves differently from progressive scanning and is a distinct technical topic from simple frame-rate comparison. If you encounter interlaced source material, treat the field rate and frame rate as separate figures rather than assuming they're interchangeable, and verify against an authoritative technical reference rather than an informal explanation.
        </p>
      </section>

      <!-- 7. Step 5: HDR -->
      <section id="step-5-hdr">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">7. step 5: verify hdr and bit depth</h2>
        <p>
          HDR (High Dynamic Range) and spatial resolution are separate properties that happen to often appear together in premium content, which is part of why they get conflated. They are not the same thing: a stream can be 4K SDR, 4K HDR, or 1080p SDR. Do not assume HDR implies 4K, and do not assume 4K implies HDR.
        </p>
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">HDR10</h3>
            <p class="text-sm">The baseline open HDR standard, using static metadata and 10-bit color depth. The most widely supported HDR format across streaming hardware.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">HDR10+</h3>
            <p class="text-sm">An extension of HDR10 that adds dynamic (scene-by-scene) metadata instead of a single static value for the whole title.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">HLG (Hybrid Log-Gamma)</h3>
            <p class="text-sm">An HDR format designed to remain backward-compatible with SDR displays, commonly used for live broadcast HDR delivery.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">Dolby Vision</h3>
            <p class="text-sm">A proprietary HDR format using dynamic metadata, requiring licensed decoding support on both the content and playback-device side.</p>
          </div>
        </div>
        <p>
          Relevant metadata concepts when checking for HDR at the file/stream level include bit depth (commonly 8-bit for SDR versus 10-bit for HDR content), color primaries, and transfer characteristics (the curve that maps encoded values to display brightness). In HLS specifically, Apple's HLS Authoring Specification for Apple Devices defines a VIDEO-RANGE attribute that signals whether a variant is SDR or uses a high-dynamic-range transfer characteristic such as PQ (used by HDR10 and Dolby Vision) or HLG.
        </p>
        <p class="mt-4">
          A TV displaying an "HDR" indicator badge is useful supporting evidence that an HDR signal mode was triggered on the display, but interpreting it correctly still depends on the full playback chain — the source stream, the player, the streaming device's output settings, and the TV's own HDR handling all have to agree for the badge to reliably reflect the content's actual HDR metadata.
        </p>
      </section>

      <!-- 8. ffprobe -->
      <section id="ffprobe-inspection" class="bg-white/5 p-8 rounded-[2rem] border border-white/10 my-12 shadow-2xl">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">8. how to inspect an iptv stream with ffprobe</h2>
        <p>
          ffprobe is the inspection companion to FFmpeg, and its official documentation describes it as a tool to "show information about the container format of the input multimedia stream" and to "show information about each media stream contained in the input multimedia stream." In plain terms: it reads a file or stream URL and reports back the real, decoded technical properties — not a label, not a guess.
        </p>
        <p class="mt-4">
          The following command requests stream and format information in JSON, restricted to the first video stream:
        </p>
        <div class="bg-black/60 p-6 rounded-xl border border-white/10 font-mono text-sm text-gray-300 my-6 overflow-x-auto">
          ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,profile,width,height,pix_fmt,r_frame_rate,avg_frame_rate,bit_rate,color_range,color_space,color_transfer,color_primaries,bits_per_raw_sample -show_format -print_format json INPUT_URL
        </div>
        <p class="text-sm text-gray-400">
          Replace <code class="bg-black/30 px-2 py-0.5 rounded text-primary">INPUT_URL</code> with a stream URL or local file you are authorized to inspect — never paste real account credentials, private Xtream Codes usernames/passwords, or personal playlist URLs into a command you're sharing or documenting. <code class="bg-black/30 px-2 py-0.5 rounded text-primary">-select_streams v:0</code> restricts the output to the first video stream (per ffprobe's official documentation, this option "affects only the options related to streams"), and <code class="bg-black/30 px-2 py-0.5 rounded text-primary">-show_entries</code> limits the output to the specific fields you want rather than the full dump.
        </p>
        <div class="overflow-x-auto my-8 border border-white/10 rounded-2xl bg-black/40 p-4">
          <table class="w-full text-left text-sm text-gray-300">
            <thead class="text-xs uppercase text-white border-b border-white/20">
              <tr>
                <th class="py-3 px-4">Field</th>
                <th class="py-3 px-4">What it tells you</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10">
              <tr><td class="py-3 px-4 font-bold text-white">width / height</td><td class="py-3 px-4">Encoded frame dimensions of the delivered stream</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">codec_name / profile</td><td class="py-3 px-4">Which codec is encoding the video, and which profile/feature tier</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">r_frame_rate / avg_frame_rate</td><td class="py-3 px-4">Reported and average frame rate of the stream</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">bit_rate</td><td class="py-3 px-4">Reported bitrate, when the container exposes it (not always present for live streams)</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">pix_fmt / bits_per_raw_sample</td><td class="py-3 px-4">Pixel format and bit depth — relevant to whether 10-bit/HDR content is actually being carried</td></tr>
              <tr><td class="py-3 px-4 font-bold text-white">color_range / color_space / color_transfer / color_primaries</td><td class="py-3 px-4">Color metadata relevant to confirming SDR vs. HDR transfer characteristics, when present</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          A practical note: adaptive and live streams can change mid-broadcast (for example, during a quality-adaptation event or a mid-stream re-encode), so a single ffprobe check is a snapshot, not a permanent guarantee. Running the check at a few different moments gives a more reliable picture than a single sample.
        </p>
      </section>

      <!-- 9. HLS Manifest -->
      <section id="hls-manifest">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">9. how to read hls stream metadata</h2>
        <p>
          Where a stream is delivered over HLS, the variant playlist can declare several attributes on its <code class="bg-black/30 px-2 py-0.5 rounded text-primary">EXT-X-STREAM-INF</code> lines. Per the IETF HLS specification (RFC 8216), these attributes are formally defined as:
        </p>
        <ul class="list-disc ml-8 space-y-3 mt-4">
          <li><strong class="text-white">RESOLUTION</strong> — "the optimal pixel resolution at which to display all the video in the Variant Stream."</li>
          <li><strong class="text-white">FRAME-RATE</strong> — "the maximum frame rate for all the video in the Variant Stream, rounded to three decimal places."</li>
          <li><strong class="text-white">CODECS</strong> — "a comma-separated list of formats, where each format specifies a media sample type that is present in one or more Renditions."</li>
          <li><strong class="text-white">BANDWIDTH</strong> — "the peak segment bit rate of the Variant Stream," in bits per second.</li>
          <li><strong class="text-white">AVERAGE-BANDWIDTH</strong> — "the average segment bit rate of the Variant Stream," in bits per second.</li>
        </ul>
        <p class="mt-4">
          Apple's HLS Authoring Specification for Apple Devices additionally documents a <strong class="text-white">VIDEO-RANGE</strong> attribute for signaling dynamic range — typically SDR for standard dynamic range, or a value corresponding to a high-dynamic-range transfer characteristic such as PQ (used by HDR10/Dolby Vision) or HLG, for variants carrying HDR content.
        </p>
        <p class="mt-4">
          These are declared values from the manifest — the source is telling the player what to expect for that variant. They're a strong, standardized signal, but where possible it's worth comparing a manifest's declared RESOLUTION or BANDWIDTH against what a direct stream inspection (Section 8) actually reports for the segments being played, since a manifest can in principle declare one thing while the underlying segments differ.
        </p>
      </section>

      <!-- 10. Display Output Trap -->
      <section id="display-output-trap" class="bg-white/5 p-8 rounded-[2rem] border border-white/10 my-12 shadow-2xl">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">10. why a 4k tv output does not prove a 4k stream</h2>
        <p>
          This is one of the most common sources of confusion, and it deserves to be stated plainly: <strong class="text-white">your TV displaying "2160p" as its current input resolution does not mean the video stream you're watching was encoded at 2160p.</strong>
        </p>
        <p class="mt-4">
          The signal passes through several independent stages before it reaches your eyes, and each stage can change the resolution:
        </p>
        <div class="flex flex-col md:flex-row items-center justify-between gap-3 my-8 text-center">
          <div class="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 flex-1">
            <span class="text-white font-black uppercase text-xs tracking-wide">Source Stream</span>
          </div>
          <span class="text-primary text-2xl font-black hidden md:block">→</span>
          <span class="text-primary text-2xl font-black md:hidden">↓</span>
          <div class="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 flex-1">
            <span class="text-white font-black uppercase text-xs tracking-wide">Player App</span>
          </div>
          <span class="text-primary text-2xl font-black hidden md:block">→</span>
          <span class="text-primary text-2xl font-black md:hidden">↓</span>
          <div class="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 flex-1">
            <span class="text-white font-black uppercase text-xs tracking-wide">Streaming Device</span>
          </div>
          <span class="text-primary text-2xl font-black hidden md:block">→</span>
          <span class="text-primary text-2xl font-black md:hidden">↓</span>
          <div class="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 flex-1">
            <span class="text-white font-black uppercase text-xs tracking-wide">HDMI Output</span>
          </div>
          <span class="text-primary text-2xl font-black hidden md:block">→</span>
          <span class="text-primary text-2xl font-black md:hidden">↓</span>
          <div class="bg-primary/10 border border-primary/30 rounded-2xl px-5 py-4 flex-1">
            <span class="text-primary font-black uppercase text-xs tracking-wide">TV</span>
          </div>
        </div>
        <p>
          A Fire TV device or Android box commonly outputs its entire interface — including video played through an app — at a fixed HDMI resolution such as 3840×2160, regardless of the native resolution of the content it's decoding. If the underlying stream is actually 1920×1080, the device upscales it internally before handing the frame to the HDMI output stage. Your TV then correctly reports that it's receiving a 2160p signal at its input — because it is — but that fact describes the HDMI handoff, not the original stream's encoded resolution.
        </p>
        <p class="mt-4">
          <strong class="text-white">TV output resolution and stream resolution are not necessarily the same fact.</strong> If you want to know the stream's real resolution, check it at Level 1–3 of the verification ladder (Section 2) — inside the player or via direct stream inspection — not at the TV's input display.
        </p>
      </section>

      <!-- 11. Detecting Upscaling -->
      <section id="detecting-upscaling">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">11. can you detect upscaled 1080p?</h2>
        <p>
          This section needs to stay nuanced, because it's the point where people most often overreach. Encoded stream metadata — resolution, codec, bitrate, ffprobe output — can reliably establish the stream's <em>delivered</em> technical properties. It generally cannot, by itself, conclusively prove whether the content was natively captured at that resolution or upscaled from a lower-resolution source before encoding, because upscaling is a processing step that happens before encoding and doesn't leave mandatory, standardized metadata behind.
        </p>
        <p class="mt-4">
          That said, there are visual and technical clues that can raise reasonable suspicion — treat these as clues, not proof:
        </p>
        <ul class="list-disc ml-8 space-y-2 mt-4">
          <li>Fine detail (text, distant crowd texture, grass/turf patterns) that looks soft or smeared relative to what genuine native 4K sources typically resolve at similar bitrates.</li>
          <li>A bitrate far too low, for the specific codec in use, to plausibly carry the detail level a native 4K source would contain — judged using the multi-factor context from Section 4, not a fixed threshold.</li>
          <li>Comparing the same event or channel across two different providers, where one visibly resolves more real detail at a similar bitrate and codec.</li>
        </ul>
        <p class="mt-4">
          None of these, individually or combined, is definitive proof. They're reasonable circumstantial evidence at best. If a claim about source provenance needs to be airtight, the honest position is that transport/codec metadata alone usually cannot get you there — you would need information about the production and mastering chain that isn't available from the delivered stream.
        </p>
      </section>

      <!-- 12. Signal Verification Table -->
      <section id="signal-table" class="bg-white/5 p-8 rounded-[2rem] border border-white/10 my-12 shadow-2xl">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">12. signal verification table</h2>
        <p>
          The single most important habit this guide is trying to build: never collapse "resolution," "quality," and "native source" into one concept. This table separates what each signal actually proves from what it's commonly mistaken for.
        </p>
        <div class="overflow-x-auto my-6 border border-white/10 rounded-2xl bg-black/40 p-4">
          <table class="w-full text-left text-sm text-gray-300">
            <thead class="text-xs uppercase text-white border-b border-white/20">
              <tr>
                <th class="py-3 px-4">Signal</th>
                <th class="py-3 px-4 text-primary">What It Proves</th>
                <th class="py-3 px-4">What It Does NOT Prove</th>
                <th class="py-3 px-4">How to Check</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10">
              <tr>
                <td class="py-3 px-4 font-bold text-white">Channel name says "4K"</td>
                <td class="py-3 px-4">Nothing technical</td>
                <td class="py-3 px-4">Resolution, codec, bitrate, HDR, source</td>
                <td class="py-3 px-4">N/A — not a measurement</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">3840×2160 resolution</td>
                <td class="py-3 px-4">Delivered encoded frame dimensions</td>
                <td class="py-3 px-4">Native source resolution; whether it was upscaled</td>
                <td class="py-3 px-4">Player info, ffprobe, HLS manifest</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">Bitrate</td>
                <td class="py-3 px-4">Data volume delivered per second</td>
                <td class="py-3 px-4">Quality in isolation — depends on codec, FPS, content, HDR</td>
                <td class="py-3 px-4">ffprobe (bit_rate), player overlay</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">Codec</td>
                <td class="py-3 px-4">Compression format in use</td>
                <td class="py-3 px-4">Resolution, authenticity, or quality by itself</td>
                <td class="py-3 px-4">ffprobe (codec_name), HLS CODECS attribute</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">Frame rate</td>
                <td class="py-3 px-4">Temporal sampling rate (motion smoothness)</td>
                <td class="py-3 px-4">Spatial resolution</td>
                <td class="py-3 px-4">ffprobe (r_frame_rate), HLS FRAME-RATE attribute</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">10-bit pixel format</td>
                <td class="py-3 px-4">Color bit depth being carried</td>
                <td class="py-3 px-4">Resolution or HDR presentation on your display</td>
                <td class="py-3 px-4">ffprobe (pix_fmt, bits_per_raw_sample)</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">HDR metadata</td>
                <td class="py-3 px-4">Dynamic-range signaling present in the stream</td>
                <td class="py-3 px-4">Resolution — HDR and 4K are independent</td>
                <td class="py-3 px-4">ffprobe (color_transfer), HLS VIDEO-RANGE</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">TV output resolution</td>
                <td class="py-3 px-4">What arrived at the HDMI input</td>
                <td class="py-3 px-4">The stream's original encoded resolution (device may upscale)</td>
                <td class="py-3 px-4">Not reliable for this purpose — see Section 10</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">Player's "UHD" badge</td>
                <td class="py-3 px-4">The app's own resolution classification of the decoded stream</td>
                <td class="py-3 px-4">Native source authenticity; exact bitrate/codec unless also shown</td>
                <td class="py-3 px-4">Cross-check with ffprobe when in doubt</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-bold text-white">Visual sharpness</td>
                <td class="py-3 px-4">A subjective impression, useful as a clue</td>
                <td class="py-3 px-4">Any specific technical property on its own</td>
                <td class="py-3 px-4">Compare alongside objective metadata, not instead of it</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 13. Practical Workflow -->
      <section id="verification-workflow">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">13. practical verification workflow</h2>
        <ol class="list-decimal ml-8 space-y-3">
          <li>Ignore the channel name initially — treat it as unverified until checked.</li>
          <li>Start playback and let it stabilize for a few seconds.</li>
          <li>Inspect the player-reported resolution and FPS (Level 1).</li>
          <li>Inspect the codec, if your player exposes it.</li>
          <li>Inspect the bitrate, if available, and interpret it contextually (Section 4) rather than against a fixed threshold.</li>
          <li>Inspect HDR / bit-depth metadata if the content is expected to be HDR.</li>
          <li>Where technically and legally possible, use ffprobe for a deeper, direct check (Section 8).</li>
          <li>Compare results at more than one moment — adaptive and live streams can change mid-broadcast.</li>
          <li>Keep "delivered 2160p, verified" and "proven native 4K source" as two separate conclusions — don't merge them into one claim.</li>
          <li>Record what you found, with the device, player, and timestamp, so the result is reproducible later.</li>
        </ol>
        <p class="mt-6">
          A simple template for recording results, useful if you're comparing multiple channels or checking back over time:
        </p>
        <div class="overflow-x-auto my-6 border border-white/10 rounded-2xl bg-black/40 p-4">
          <table class="w-full text-left text-sm text-gray-300">
            <thead class="text-xs uppercase text-white border-b border-white/20">
              <tr>
                <th class="py-2 px-3">Channel</th>
                <th class="py-2 px-3">Date/Time</th>
                <th class="py-2 px-3">Device</th>
                <th class="py-2 px-3">Player</th>
                <th class="py-2 px-3">Resolution</th>
                <th class="py-2 px-3">Codec</th>
                <th class="py-2 px-3">FPS</th>
                <th class="py-2 px-3">Bitrate</th>
                <th class="py-2 px-3">Bit Depth</th>
                <th class="py-2 px-3">HDR</th>
                <th class="py-2 px-3">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10 text-gray-500 italic">
              <tr>
                <td class="py-3 px-3" colspan="11">— fill in per test; this is a blank methodology template, not sample data —</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 14. Checklist -->
      <section id="verification-checklist" class="bg-white/5 p-8 rounded-[2rem] border border-white/10">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 text-primary">14. 4k iptv verification checklist</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3"><span class="text-primary mt-1">✓</span><span>I checked resolution at the player or stream level, not just the channel name.</span></li>
          <li class="flex items-start gap-3"><span class="text-primary mt-1">✓</span><span>I did not treat bitrate as a fixed pass/fail threshold.</span></li>
          <li class="flex items-start gap-3"><span class="text-primary mt-1">✓</span><span>I identified the codec without assuming H.264 rules out 4K or HEVC guarantees it.</span></li>
          <li class="flex items-start gap-3"><span class="text-primary mt-1">✓</span><span>I checked frame rate as a separate property from resolution.</span></li>
          <li class="flex items-start gap-3"><span class="text-primary mt-1">✓</span><span>I checked HDR/bit-depth separately from resolution.</span></li>
          <li class="flex items-start gap-3"><span class="text-primary mt-1">✓</span><span>I did not rely on my TV's input-resolution display as proof of the stream's native resolution.</span></li>
          <li class="flex items-start gap-3"><span class="text-primary mt-1">✓</span><span>I kept "delivered stream properties" and "native source provenance" as separate conclusions.</span></li>
        </ul>
      </section>

      <!-- 15. Myths -->
      <section id="myths">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-b border-primary/20 pb-4">15. common myths about "real 4k"</h2>
        <div class="space-y-6 mt-6">
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">Myth: If the channel is named UHD or 4K, it is real 4K.</h3>
            <p class="text-sm">A channel label is marketing metadata, not a technical measurement. It establishes nothing about delivered resolution — see Section 3.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">Myth: If the stream reports 3840×2160, it proves the original source was native 4K.</h3>
            <p class="text-sm">This overstates the evidence. It proves the encoded, delivered frame dimensions — it doesn't rule out an upscaled source. See Sections 1 and 11.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">Myth: Any 4K stream below 15–20 Mbps must be fake.</h3>
            <p class="text-sm">Bitrate needs vary with codec, encoder, FPS, content complexity, and HDR. YouTube's own live-encoder guidance shows more than a 4x spread for the same 2160p resolution depending on codec. See Section 4.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">Myth: H.264 means the stream cannot be 4K.</h3>
            <p class="text-sm">False. H.264 can technically encode 3840×2160 video, and current Fire TV hardware specifications confirm H.264 decoding up to 4K@60fps on several models. See Section 5.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">Myth: 60 FPS means higher resolution.</h3>
            <p class="text-sm">Frame rate and resolution are independent. 1080p60 and 2160p24 are both valid, real combinations. See Section 6.</p>
          </div>
          <div class="border border-white/5 p-6 rounded-2xl bg-black/20">
            <h3 class="text-white font-black uppercase mb-2">Myth: HDR means 4K.</h3>
            <p class="text-sm">HDR and spatial resolution are separate properties that can combine in any pairing. See Section 7.</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faqs">
        <h2 class="text-3xl font-black text-white uppercase italic mb-6 border-l-8 border-primary pl-6">16. frequently asked questions</h2>
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
          Verifying an IPTV stream's real technical properties is genuinely achievable — resolution, codec, frame rate, and HDR metadata can all be checked directly through your player, HLS manifest attributes, or a tool like ffprobe, rather than taken on faith from a channel name. What isn't achievable from that same metadata is a conclusive claim about the original source's provenance: a 3840×2160 stream confirms delivered frame dimensions, not what camera or master the content started from. Per the <a href="https://ffmpeg.org/ffprobe.html" class="text-primary underline underline-offset-4 font-bold" target="_blank" rel="noopener noreferrer">official ffprobe documentation</a>, the tool is built to report exactly this kind of container and stream information; per the <a href="https://datatracker.ietf.org/doc/html/rfc8216" class="text-primary underline underline-offset-4 font-bold" target="_blank" rel="noopener noreferrer">IETF HLS specification (RFC 8216)</a>, manifest attributes like RESOLUTION and BANDWIDTH are formally defined and standardized. Keeping "what was delivered" and "what was originally captured" as two separate questions is the single most useful habit this guide can leave you with.
        </p>
      </section>

      <!-- Further Reading -->
      <section class="mt-8">
        <h3 class="text-xl font-black text-white uppercase italic mb-4">further reading</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm text-gray-300">
          <li><a href="/blog/iptv-internet-speed-bandwidth-requirements" class="text-primary underline">IPTV bandwidth requirements</a> — how much connection headroom a given resolution and codec actually needs.</li>
          <li><a href="/blog/stop-iptv-buffering-forever" class="text-primary underline">Diagnosing IPTV buffering</a> — if a verified high-bitrate stream still stalls, this moves from quality verification to network diagnosis.</li>
          <li><a href="/blog/best-iptv-players-2026" class="text-primary underline">IPTV player comparison</a> — which player apps expose useful stream-info overlays for Level 1 verification.</li>
          <li><a href="/blog/top-10-android-boxes-2026" class="text-primary underline">4K-capable streaming hardware</a> — which devices decode which codecs and HDR formats at 4K.</li>
          <li><a href="/blog/smart-tv-optimization-guide" class="text-primary underline">Smart TV playback optimization</a> — HDMI and display-side settings relevant to the playback chain in Section 10.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-white/10">
        <p class="text-sm text-gray-500 not-italic">
          This is a technical reference guide, not a claim about any specific provider's stream quality. Actual delivered resolution, bitrate, and codec vary by channel, source, and moment, and should be verified using the methods above rather than assumed from a channel name — including on <strong>flash 4k iptv</strong>.
        </p>
      </section>

    </div>
  `
};
