---
title: "Synopsis"
layout: splash
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Synopsis-BR-1.jpg
  actions:
    - label: "Github"
      url: "https://github.com/Synopsis"
excerpt: "Open Source Computational Cinematography"

intro: 
  - excerpt: 'Synopsis is currently under heavy development and in alpha phase. Want to know more - [join our slack channel](https://join.slack.com/t/synopsis-discuss/shared_invite/enQtODIzNjg5MzA1MDYwLTg4OGM5ZGMzZTQ3OTBjYTQzZDMyNDY0ZWM3NzFkN2YxZTE5NWI5NWQyMmZjMGE1OGYyZmExMWFlZWVkMDE4ZWQ) for info'

outro: 
  - excerpt: 'Synopsis is built with love by [Anton Marini](http://vade.info), with major support from [Vidvox](http://vidvox.net). <br /><br />If Synopsis is useful to you - please support out project by [contributing](contribute).'

about:
  - image_path: /assets/images/Icon-512.png
    alt: "Synopsis"
    title: "Synopsis"
    excerpt: "Synopsis is a suite of open source software for computational cinematography - tools that help the creation of visual media.<br /><br />Synopsis is built to help editors, artists, indie film makers, a/v developers and creators do what they do best - tell stories, make experiences and build amazing tools.<br /><br />Synopsis is not an automation tool - its made by creators for creators, not to replace them."

cinemanet:
  - image_path: /assets/images/CinemaNet-1.png
    alt: "CinemaNet"
    title: "CinemaNet"
    excerpt: "CinemaNet is the open source library of over 200 visual, cinematic, photographic and compositional concepts that powers Synopsis's machine learning engine.<br /><br />CinemaNet is crowd sourced - contribute and evolve the taxonomy."
    url: "cinemanet"
    btn_label: "Learn More about CinemaNet"
    btn_class: "btn--inverse"


analyzer:
  - image_path: /assets/images/Analyzer-1.png
    alt: "Synopsis Analyzer"
    title: "Synopsis Analyzer"
    excerpt: 'Synopsis Analyzer is an industrial grade video encoder and analysis tool for macOS. Analyzer ingests compatible media files and embeds metadata to them - without easy to lose sidecar files - making them searchable, comparable, sortable, and smart, all while being Quicktime compliant.<br /><br/> Did we mention Spotlight integration?'

    url: "analyzer"
    btn_label: "Learn More about Analyzer"
    btn_class: "btn--inverse"

inspector:
  - image_path: /assets/images/Synopsis-BR-1.jpg
    alt: "Synopsis Inspector"
    title: "Synopsis Inspector"
    excerpt: 'Synopsis Inspector is a next generation smart media manager. Synopsis Inspector auto-discovers analyzed files on your system or locally attached drives, and lets you filter, sort, 
    search and compare media, explore analyzed metadata, and features new UI paradigms like interactive visual similarity and content clustering.<br /><br />Find and explore content visually and intuitively.'
    url: "inspector"
    btn_label: "Learn More about Inspector"
    btn_class: "btn--inverse"

sdk:
  - image_path: /assets/images/SDK-1.png
    alt: "SDK"
    title: "SDK"
    excerpt: 'Want to add media intelligence to your macOS or iOS applications? The Synopsis SDK can help.<br /><br /> Synopsis Analyzer and Inspector are both built using the Synopsis SDK, a macOS and iOS Objective-C framework that features metadata analysis, archiving, encoding and decoding to compatible Quicktime files, as well as metadata comparison, sorting and similarity functionality.'
    url: "sdk"
    btn_label: "Learn More about our SDK"
    btn_class: "btn--inverse"    
---

{% include feature_row id="intro" type="center" %}

{% include feature_row id="about" type="left" %}

{% include feature_row id="cinemanet" type="right" %}

{% include feature_row id="analyzer" type="left" %}

{% include feature_row id="inspector" type="right" %}

{% include feature_row id="sdk" type="left" %}

{% include feature_row id="outro" type="center" %}



