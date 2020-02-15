---
permalink: /analyzer/FAQ
title: "FAQ: Synopsis Analyzer"
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
  - excerpt: '[Synopsis Public Beta 2](https://github.com/Synopsis/Synopsis-Inspector/releases) is available. Want to know more? - [join our slack channel](https://join.slack.com/t/synopsis-discuss/shared_invite/enQtODIzNjg5MzA1MDYwLTg4OGM5ZGMzZTQ3OTBjYTQzZDMyNDY0ZWM3NzFkN2YxZTE5NWI5NWQyMmZjMGE1OGYyZmExMWFlZWVkMDE4ZWQ)'
---

<style>
.answer {
	padding-left:20px;
	padding-right:20px;
	color:#bfbfbf;
	font-style: italic;
}

</style>

{% include feature_row id="intro" type="center" %}

# Synopsis Analyzer - Frequently asked Questions: 

***What is Passthrough Preset and why is it default?***
<p class="answer">
Passthrough preset by default only runs analysis - it does not re-encode your media. Many users already have encoded content and dont want to re-encode their media. The Passthrough preset creates a new file with Synopsis Metadata embedded in it.
</p> 

***Analyzer is using all my CPU and GPU - how do I tone it down?***
<p class="answer">
Analyzer is built for speed, but that also means consuming most of the resources on your system, which may not be ideal if you are multi tasking. You can open up Settings, and navigate to the advanced tab, where you can adjust the number of concurrent jobs.
</p>

***I've made a watch folder, but nothing is happening!?***
<p class="answer">
Synopsis Analyzer only looks for changes (new files) if watching a folder. If you have existing supported media you want to transcode, just drag it into to Analyzer and choose the appropriate preset.
</p>

***Where is the metadata stored?***

<p class="answer">
By Default <a href="https://synopsis.video/analyzer/">Synopsis Analyzer</a> encodes metadata directly into the output Quicktime container file. There are no side car files unless you optionally specify them by choosing an appropriate preset or creating your own preset. Sidecar files are exported as JSON.
</p>


***What does "Copy non media documents to output folder" do?***
<p class="answer">
For some workflows it may be necessary for any arbitrary 3rd party files to accompany analyzed media to the output folder. This can be helpful to move project files, LUTs, images, 3d assets and other files alongside analyzed video. 
</p>