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
  - excerpt: 'Synopsis is currently under heavy development and in alpha phase. Want to know more - [join our slack channel](https://join.slack.com/t/synopsis-discuss/shared_invite/enQtODIzNjg5MzA1MDYwLTg4OGM5ZGMzZTQ3OTBjYTQzZDMyNDY0ZWM3NzFkN2YxZTE5NWI5NWQyMmZjMGE1OGYyZmExMWFlZWVkMDE4ZWQ) for info'
---

{% include feature_row id="intro" type="center" %}

Synopsis Analyzer is a super powered video encoder that can analyze your video and add metadata.

# Mega Metadata

Analyzer uses CinemaNet to add global and per frame metadata to your content. 

What does that mean? Analyzer creates visual fingerprints of of every frame of your content - like a video bar code or unique visual id - and embeds these fingerprints in a standard Quicktime metadata track right along your video and audio. 

Analyzer also creates an aggregate global fingerprint to identify the entire content of your media - a Synopsis (get it?) - allowing quick search, comparison, filtering and comparison of media. No side car files to manage or get lost.  

Metadata added to your files is compressed using industry standard zstd format for speed and file size. You can optionally export sidecar JSON metadata should you need it.

# Video and Audio Encoding

Synopsis Analyzer outputs industry standard Quicktime media files, and can ingest MFX media as well. Stay tuned for more container and codec support in the future.

* Passthrough (analysis only, your media files are not re-encoded for zero generational loss)
* Uncompressed
* ProRes 
* AVC-Intra
* h.264
* h.265
* MJPEG
* Apple Intermediate Codec
* DV / DVC Pro
* MPEG IMX
* HAP and HAP-Q

# Embarassingly Parallel

Analyzer is multi-threaded for video encoding and decoding and GPU Accelerated for analysis using Metal and CoreML. Use all of your available horsepower, including all CPU cores and all available GPUs, even external. Analyzer even targets appropriate device encoders and decoders, trying to manage expensive PCI transfers for video frames. 

Even when running expensive machine learning analysis per frame, Analyzer beats out Apple's Compressor and Adobe Media Encoder in transcoding tasks.

Dont want to use all that horsepower? Manage how many concurrent encoding operations run on on the fly. 

# Organized

Analyzer can process entire folder structures. Want to update your media library? Drag the top level folder in and Analyzer will suss it all out.

Manage output destinations (including entire folder structures) or  

Automate encode and analysis by using watch folders - any added media files are recusrivly discovered and automatically enqued for analysis. You can set up output destination folders, and even use remote file systems. Analyzer can will even copy non media items to output folders, to help automate any workflows you need.

# Import Python

Run custom Python scripts on the completion of an analysis session or per file completion. Want to add your video files metadata to a data base? Copy files to remote servers? Automatically trigger actions? Analyzer's Python scripting can help you. Coming soon.