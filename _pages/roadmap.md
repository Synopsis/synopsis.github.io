---
permalink: /roadmap/
title: "Synopsis Roadmap"
layout: splash
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Synopsis-BR-1.jpg
  actions:
    - label: "Github"
      url: "https://github.com/Synopsis"
excerpt: "Next steps"

intro: 
  - excerpt: 'Synopsis is currently under heavy development and in alpha phase. Want to know more - [join our slack channel](https://join.slack.com/t/synopsis-discuss/shared_invite/enQtODIzNjg5MzA1MDYwLTg4OGM5ZGMzZTQ3OTBjYTQzZDMyNDY0ZWM3NzFkN2YxZTE5NWI5NWQyMmZjMGE1OGYyZmExMWFlZWVkMDE4ZWQ) for info'
---
<style>
* {
  box-sizing: border-box;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background-color: lightgray;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  right: -10px;
  background-color: lightgray;
  border: 4px solid lightgray;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid lightgray;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent lightgray;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid lightgray;
  border-width: 10px 10px 10px 0;
  border-color: transparent lightgray transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -12px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: lightgray;
  border: 1px solid lightgray;
  position: relative;
  border-radius: 6px;
  color: #494e52;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  
  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent lightgray transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 19px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
}
</style>

{% include feature_row id="intro" type="center" %}

<center><h1>Roadmap</h1></center>
<div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>Now</h2>
       <p><b>Community building / Crowdsourcing</b></p>

      <p>Introduce Synopsis to a wider audience, build a small community. Vet the initial CinemaNet taxonomy, get feedback on concepts and bias concerns. Fine tune the models.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>Soon</h2>
      <p><b>Private Alpha</b></p>
      <p>Share Analyzer and Inspector with our community in a limited fashion and fix any show stoppers.</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>Soon-ish</h2>
       <p><b>Private Beta</b></p>
      <p>Polish Analyzer and Inspector for public release. </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>Later</h2>
       <p><b>Public Beta</b></p>
      <p>Release Betas of Analyzer and Inspector, and finalize 1.0 CinemaNet taxonomy. Lock features.</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>Subsequently</h2>
       <p><b>Community iteration</b></p>
      <p>Open crowd sourcing to a larger comminty and begin to iterate on taxonomy, and new concept groups.</p>
    </div>
  </div>
</div>
