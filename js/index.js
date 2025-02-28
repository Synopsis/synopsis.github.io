// Import the necessary function for preloading images
import { preloadImages, getGrid } from "./utils.js";

// Define a variable that will store the Lenis smooth scrolling object
let lenis;

// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });

  lenis.on("scroll", () => ScrollTrigger.update());

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);
};

// Function to handle intro animation separately
const initIntroAnimation = () => {
  const introGrid = document.querySelector(".grid--intro");
  if (introGrid) {
    const pinWrap = introGrid.closest(".pin-wrap");
    const gridItems = introGrid.querySelectorAll(".grid__item");

    // Check if screen width is greater than 768px (tablet/desktop)
    if (window.innerWidth > 768) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: pinWrap,
            start: "top top",
            end: "+=30vh",
            pin: true,
            pinSpacing: true,
            scrub: 1.5,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          gridItems,
          {
            opacity: 1,
            ease: "power1.inOut",
          },
          {
            opacity: 0,
            ease: "power1.inOut",
          }
        );
    } else {
      // For mobile, just set a static appearance without animation
      gsap.set(pinWrap, { height: "auto", minHeight: "60vh" });
      gsap.set(introGrid, { height: "auto" });
    }
  }
};

// Function to apply scroll-triggered animations to a given gallery
const applyAnimation = (grid, animationType) => {
  const gridWrap = grid.querySelector(".grid-wrap");
  const gridItems = grid.querySelectorAll(".grid__item");
  const gridItemsInner = [...gridItems].map((item) =>
    item.querySelector(".grid__item-inner")
  );

  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: gridWrap,
      start: "top bottom+=10%",
      end: "bottom top",
      scrub: true,
    },
  });

  switch (animationType) {
    case "wheel":
      // Set some CSS related style values
      grid.style.setProperty("--grid-width", "45%");
      grid.style.setProperty("--perspective", "3000px");
      grid.style.setProperty("--grid-item-ratio", "16.0/9.0");
      grid.style.setProperty("--grid-columns", "3");
      grid.style.setProperty("--grid-inner-scale", "0.95");
      grid.style.setProperty("--grid-gap", "0.75vw");

      timeline
        .set(gridWrap, {
          transformOrigin: "0% 50%",
          rotationY: 30,
          xPercent: -75,
        })
        .set(gridItems, {
          transformOrigin: "50% 0%",
        })
        .to(
          gridItems,
          {
            duration: 0.5,
            ease: "power2",
            z: 500,
            stagger: 0.04,
          },
          0
        )
        .to(
          gridItems,
          {
            duration: 0.5,
            ease: "power2.in",
            z: 0,
            stagger: 0.04,
          },
          0.5
        )
        .fromTo(
          gridItems,
          {
            rotationX: -70,
            filter: "brightness(50%)",
          },
          {
            duration: 1,
            rotationX: 70,
            filter: "brightness(120%)",
            stagger: 0.04,
          },
          0
        );
      break;

    case "type3":
      // Set some CSS related style values
      grid.style.setProperty("--grid-width", "105%");
      grid.style.setProperty("--grid-columns", "7");
      grid.style.setProperty("--perspective", "1500px");
      grid.style.setProperty("--grid-inner-scale", "1.0");
      grid.style.setProperty("--grid-item-ratio", "16.0/9.0");

      timeline
        .set(gridItems, {
          transformOrigin: "50% 0%",
          z: () => gsap.utils.random(-5000, -2000),
          rotationX: () => gsap.utils.random(-65, -25),
          filter: "brightness(120%)",
        })
        .to(
          gridItems,
          {
            xPercent: () => gsap.utils.random(-150, 150),
            yPercent: () => gsap.utils.random(-300, 300),
            rotationX: 0,
            filter: "brightness(0%)",
          },
          0
        )
        .to(
          gridWrap,
          {
            z: 6500,
          },
          0
        );
      break;

    case "flock":
      // Set some CSS related style values
      grid.style.setProperty("--perspective", "800px");
      grid.style.setProperty("--grid-inner-scale", "0.95");
      grid.style.setProperty("--grid-item-ratio", "16.0/9.0");

      const seed = 46; // Fixed seed value for deterministic randomization
      const pseudoRandom = (min, max, index) => {
        const value = Math.sin(seed + index * 1000) * 10000;
        const normalized = value - Math.floor(value); // 0 to 1
        return min + normalized * (max - min);
      };

      timeline
        .set(gridWrap, {
          rotationY: 15,
        })
        .set(gridItems, {
          z: (i) => pseudoRandom(-1600, 200, i),
        })
        .fromTo(
          gridItems,
          {
            xPercent: (i) => pseudoRandom(-1000, -500, i),
          },
          {
            xPercent: (i) => pseudoRandom(500, 1000, i),
          },
          0
        )
        .fromTo(
          gridItemsInner,
          {
            scale: 2,
          },
          {
            scale: 0.5,
          },
          0
        );
      break;

    case "horizontal-rails":
      // Set some CSS related style values
      grid.style.setProperty("--grid-width", "130%");
      grid.style.setProperty("--grid-columns", "7");
      grid.style.setProperty("--grid-gap", 0);
      grid.style.setProperty("--grid-item-ratio", "16.0/9.0");
      grid.style.setProperty("--grid-inner-scale", "1.0");

      const gridObj = getGrid(gridItems);

      timeline
        // .set(gridWrap, {
        // 	rotationX: 0
        // })
        // .to(gridWrap, {
        // 	rotationX: 90
        // })
        .set(
          gridObj.rows("even"),
          {
            xPercent: 300,
            // ease: 'power1'
            // z: -500,
          },
          0
        )
        .set(
          gridObj.rows("odd"),
          {
            xPercent: -300,
            // ease: 'power1'
            // z: -500,
          },
          0
        )
        .fromTo(
          gridItems,
          {
            filter: "brightness(50%)",
          },
          {
            filter: "brightness(100%)",
          },
          0
        )
        .to(
          gridObj.rows("even"),
          {
            xPercent: -300,
            // ease: 'power1'
            // z: 500,
          },
          0
        )
        .to(
          gridObj.rows("odd"),
          {
            xPercent: 300,
            // ease: 'power1'
            // z: 500,
          },
          0
        );
      // .addLabel('rowsEnd', '>-=0.15')
      // .to(gridItems, {
      // 	ease: 'power1',
      // 	yPercent: () => gsap.utils.random(-100, 200),
      // }, 'rowsEnd');
      break;

    case "type6":
      // Set some CSS related style values
      grid.style.setProperty("--perspective", "2500px");
      grid.style.setProperty("--grid-width", "100%");
      grid.style.setProperty("--grid-gap", "6");
      grid.style.setProperty("--grid-columns", "3");
      grid.style.setProperty("--grid-item-ratio", "16.0/9.0");
      grid.style.setProperty("--grid-inner-scale", "1.0");

      timeline.fromTo(
        gridItems,
        {
          transformOrigin: "50% 200%",
          rotationX: 0,
          yPercent: 400,
        },
        {
          yPercent: 0,
          rotationY: 360,
          opacity: 0.2,
          scale: 0.8,
          stagger: 0.03,
        }
      );
      break;

    case "type2":
      // Set some CSS related style values
      grid.style.setProperty("--grid-width", "150%");
      grid.style.setProperty("--perspective", "none");
      grid.style.setProperty("--grid-inner-scale", "1.0");
      grid.style.setProperty("--grid-item-ratio", "16.0/9.0");
      grid.style.setProperty("--grid-columns", "4");
      grid.style.setProperty("--grid-gap", "1vw");

      timeline.fromTo(
        gridItems,
        {
          xPercent: -50,
        },
        {
          xPercent: 50,
        },
        0
      );
      break;
  }
};

// Apply animations to each grid
const scroll = () => {
  const precordingSection = document.querySelector(".section--precording");
  if (precordingSection) {
    // Get the film title group
    const filmTitleDiv = precordingSection.querySelector(
      ".content__title--film"
    );
    if (filmTitleDiv) {
      // Remove it from its parent and append it to the body
      // This will ensure it's fixed relative to the viewport
      document.body.appendChild(filmTitleDiv);

      // Initially hide the film title
      gsap.set(filmTitleDiv, { autoAlpha: 0 });

      // No GSAP transforms needed here - let CSS handle it
      const filmTitleGroup = filmTitleDiv.querySelector(
        ".content__title--film-group"
      );
      if (filmTitleGroup) {
        // Just set the transform origin, no other transformations
        gsap.set(filmTitleGroup, {
          transformOrigin: "center right",
        });
      }

      // Create a ScrollTrigger to show/hide the film title
      const filmPanelAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: precordingSection.querySelector(".grid-wrap"),
          start: "top 30%",
          end: "top 25%",
          scrub: 0.2,
        },
      });

      // animation timeline with fade in and fade out
      filmPanelAnimation
        .fromTo(
          filmTitleDiv,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.15 },
          0
        )
        .to(filmTitleDiv, { autoAlpha: 0, duration: 0.15 }, 0.15);
    }
  }

  // Select all grids EXCEPT the intro grid
  const grids = document.querySelectorAll(".grid:not(.grid--intro)");

  grids.forEach((grid, i) => {
    if (grid.closest(".section--precording")) {
      applyAnimation(grid, "flock");

      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === grid.querySelector(".grid-wrap")) {
          st.vars.end = "bottom center"; // End animation sooner
        }
      });

      return; // Skip the default animation assignment
    }

    let animationType;
    switch (i % 6) {
      case 0:
        animationType = "flock";
        break;
      case 1:
        animationType = "horizontal-rails";
        break;
      case 2:
        animationType = "flock";
        break;
      case 3:
        animationType = "horizontal-rails";
        break;
      case 4:
        animationType = "type6";
        break;
      case 5:
        animationType = "type2";
        break;
    }
    applyAnimation(grid, animationType);
  });
};

// Add a resize event listener to handle screen size changes
const handleResize = () => {
  // Store the initial state
  let wasMobile = window.innerWidth <= 768;

  window.addEventListener("resize", () => {
    const isMobile = window.innerWidth <= 768;

    // Only reinitialize if crossing the breakpoint
    if (wasMobile !== isMobile) {
      // Kill any existing ScrollTrigger instances for the intro section
      const introGrid = document.querySelector(".grid--intro");
      if (introGrid) {
        const pinWrap = introGrid.closest(".pin-wrap");
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === pinWrap) {
            trigger.kill();
          }
        });
      }

      // Reinitialize the intro animation
      initIntroAnimation();

      // Update the wasMobile variable for the next resize event
      wasMobile = isMobile;
    }
  });
};

// Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
preloadImages(".grid__item-inner").then(() => {
  initSmoothScrolling();
  initIntroAnimation();
  handleResize(); // Add the resize handler
  scroll();
  document.body.classList.remove("loading");
});
