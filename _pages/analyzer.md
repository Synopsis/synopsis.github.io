---
permalink: /analyzer/
title: "Synopsis Analyzer"
layout: splash
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Synopsis-BR-1.jpg
  actions:
    - label: "Github"
      url: "https://github.com/Synopsis"
excerpt: "Industrial strength media encoder and analyzer for macOS"

intro: 
  - excerpt: '[Synopsis Public Beta 1](https://github.com/Synopsis/Synopsis-Inspector/releases) is available. Want to know more? - [join our slack channel](https://join.slack.com/t/synopsis-discuss/shared_invite/enQtODIzNjg5MzA1MDYwLTg4OGM5ZGMzZTQ3OTBjYTQzZDMyNDY0ZWM3NzFkN2YxZTE5NWI5NWQyMmZjMGE1OGYyZmExMWFlZWVkMDE4ZWQ)'

encoding:
  - image_path: "/assets/images/Analyzer-Prefs.png"
    alt: "Pro Video and Audio Encoding"
    excerpt: 'Analyze your MP4, Quicktime and MFX media, and output to a metadata enhanced standard Quicktime container.<br /><br />Analyzer supports standard pro video codecs, such as Uncompressed 8 and 10 bit 4:22, Apple Pro Res, AVC-Intra, H.263, h.264 (AVC), h.265 (HEVC), JPEG, Apple Intermediate, DV, DVCPro, DVCProHD, MPEG IMX and the open source <a href="https://hap.video">HAP video codec</a>.<br /><br />Use our built in presets to choose your audio and video encoding and analysis settings, or make your own.<br /><br />Stay tuned for more container and codec support in the future.'
---

{% include feature_row id="intro" type="center" %}

<!-- Synopsis Analyzer is a super powered video encoder that can analyze your video and add metadata. -->

<!-- {% include figure image_path="/assets/images/Analyzer-2.png" alt="Synopsis Analyzer" %} -->

<div align="center"><a href="https://github.com/Synopsis/Synopsis-Inspector/releases" class="btn btn--inverse btn--x-large">Download Synopsis Public Beta 1</a></div>
<br />


{% include video id="382329504" provider="vimeo" %}


# Mega Metadata

Synopsis Analyzer creates visual fingerprints of of every frame of your content - like a video bar code or unique visual id - and embeds these fingerprints in a standard Quicktime metadata track right along your video and audio. 

Analyzer also creates an aggregate global fingerprint to identify the entire content of your media - a Synopsis (get it?) - allowing quick search, comparison, filtering and comparison of media. No side car files to manage or get lost.  

Why would you want to do this? These fingerprints are machine comparable, letting supported tools find matching clips, allowing you to search, sort, filter and compare your media at scale, all locally.

Metadata added to your files is compressed using industry standard [ZStandard](https://facebook.github.io/zstd/) format for speed and optimal file size. You can also export sidecar JSON metadata should you need it.


# Pro Video and Audio Encoding

{% include feature_row id="encoding" type="left" %}

<!-- ![image-left](/assets/images/Analyzer-Prefs.png){: .align-left} Analyze your MP4, Quicktime and MFX media, and output to a metadata enhanced standard Quicktime container. Analyzer supports standard pro video codecs, such as Uncompressed 8 and 10 bit 4:22, Apple Pro Res, AVC-Intra, H.263, h.264 (AVC), h.265 (HEVC), JPEG, Apple Intermediate, DV, DVCPro, DVCProHD, MPEG IMX and the open source <a href="https://hap.video">HAP video codec</a>. Use our built in presets or make your own. Stay tuned for more container and codec support in the future. 
 -->
# Embarassingly Parallel

![image-left](/assets/images/cpu.png){: .align-left} ![image-left](/assets/images/gpu.png){: .align-left} Analyzer is multi-threaded for video encoding and decoding and GPU Accelerated for analysis using Metal and CoreML. Use all of your available horsepower, including all CPU cores and all available GPUs, even external. Analyzer even targets appropriate device encoders and decoders, trying to manage expensive PCI transfers for video frames.

<!-- Even when running expensive machine learning analysis per frame, Analyzer beats out Apple's Compressor and Adobe Media Encoder in transcoding tasks.
 -->
Dont want to use all that horsepower? Manage how many concurrent encoding operations run on on the fly. 

# No Cloud required.

Synopsis Analyzer uses local compute to analyze your media. No fussing with cloud providers, no internet connection required, no uploading gigabytes of media. Run Synopsis Analyzer on set, on location, at your facility, in your studio, at home, or on the go. We wont stop you.

Because your media is analyzed locally by your own systems, you know exactly who has access to your metadata. Just you. We dont send, collect, store, harvest, or in any way try to syphon data from your media.  

# Organized

Analyzer can process entire folder structures. Want to update your media library? Drag the top level folder in and Analyzer will suss it all out.

Manage output destinations (including entire folder structures) or let analyzer place files next to originals.


# Watch Folders 

Automate encode and analysis by using watch folders - any supported media files are recursively discovered and automatically enqued for analysis. You can set up output destination folders, and even use remote file systems. Analyzer can will even copy non media items to output folders, to help automate any workflows you need.

# Import Python

Run custom Python scripts on the completion of an analysis session or per file completion. Want to add your video files metadata to a data base? Copy files to remote servers? Automatically trigger actions? Analyzer's Python scripting can help you. Coming soon.