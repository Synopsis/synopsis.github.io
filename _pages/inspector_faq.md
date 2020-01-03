---
permalink: /inspector/FAQ
title: "FAQ: Synopsis Inspector"
layout: splash
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Synopsis-BR-1.jpg
  actions:
    - label: "Github"
      url: "https://github.com/Synopsis"
excerpt: "Next smart generation media manager"

intro: 
  - excerpt: '[Synopsis Public Beta 1](https://github.com/Synopsis/Synopsis-Inspector/releases) is available. Want to know more? - [join our slack channel](https://join.slack.com/t/synopsis-discuss/shared_invite/enQtODIzNjg5MzA1MDYwLTg4OGM5ZGMzZTQ3OTBjYTQzZDMyNDY0ZWM3NzFkN2YxZTE5NWI5NWQyMmZjMGE1OGYyZmExMWFlZWVkMDE4ZWQ)'
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

# Synopsis Inspector - Frequently asked Questions: 

***The description of my media is wrong***
<p class="answer">
Sorry about that! <a href="https://synopsis.video/analyzer/">Synopsis Analyzer</a> tries to predict (a fancy way of using statistics to guess) the right descriptions of your media. If we've gotten something wrong, <a href="https://github.com/Synopsis/Synopsis-Inspector/issues/new/choose">please report a bug</a>, and if possible, share the media file with us so we can teach the analyzer to be better! Analyzer learns by examples, and the more examples the better it will get.

If you want to help make Analyzer and Inspector the even better, <a href="https://synopsis.video/crowdsource/">sign up for crowd labelling</a> to seriously help us out!
</p>

***Inspector doesn't show my media. Why?***

<p class="answer">
Synopsis Inspector only loads media that has been analyzed by <a href="https://synopsis.video/analyzer/">Synopsis Analyzer</a> or other supported tools that output compatible files. Please analyze your media and store it on a volume that supports extended attributes - and Synopsis Inspector will automatically discover it and load it.
</p>

<p class="answer">
If you are curious to try out Inspector without analyzing your media, you can download some sample media that has been 'pre-analyzed'.
</p>

***What do the various sort buttons do in the Inspector toolbar?***

<p class="answer">
When selecting a single piece of content in Inspector main panel (the reference clip), one can sort all loaded media by how similar they are to your reference clip. 
</p>

<p class="answer">
There are a few ways the decide how things are similar - does it have similar colors, does it describe the same scene, is the image layed out similarly, etc. Each sorting button provides similar funcionality:
</p>

<p class="answer">
<b>Histogram</b> Similarity orders clips based on a <a href="https://en.wikipedia.org/wiki/Bhattacharyya_distance">histogram similarity metric</a>. This more or less results in sorting based on color and over all brightness / expsoure of the scene.
</p>


<p class="answer">
<b>Prediction Similarity</b> orders clips based on the similarity of confidence values (how likely each concept is present in the video) for all of the CinemaNet concepts. You can think of this as shot similarity. Is the shot location, framing, subject matter, etc similar? The default metric is <a href="https://en.wikipedia.org/wiki/Cosine_similarity">cosine similarity</a>.
</p>

<p class="answer">
<b>Embedding Similarity</b> orders clips based on a (not human interpretable) 'embedding vector' which can be thought of as a by product of computing the prediction above. The embedding vector is loosely equivalent to spatial similarity - ie, the over all shape, color, contrast, texture of the scene. Embedding similarity is roughly equivalent to a 'structure' similarity. The default metric is <a href="https://en.wikipedia.org/wiki/Cosine_similarity">cosine similarity</a>.
</p>

<p class="answer">
<b>All</b> uses the above 3 similarity scores together and gives a hybrid similarity score which clips are ordered by. Its a touch more expensive (slower) but results in generally a more pleasing and expected ordering.
</p>

***Where is the metadata stored?***

<p class="answer">
By Default <a href="https://synopsis.video/analyzer/">Synopsis Analyzer</a> encodes metadata directly into the output Quicktime container file. There are no side car files unless you optionally specify them by choosing an appropriate preset in Synopsis Analyzer.
</p>


