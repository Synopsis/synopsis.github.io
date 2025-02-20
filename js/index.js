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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: pinWrap,
          start: "top top",
          end: "+=50vh",
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
          ease: "power1.inOut", // Smoother easing
        },
        {
          opacity: 0,
          ease: "power1.inOut",
        }
      );
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
      start: "top bottom+=5%",
      end: "bottom top-=5%",
      scrub: true,
    },
  });

  switch (animationType) {
    case "wheel":
      // Set some CSS related style values
      grid.style.setProperty("--grid-width", "50%");
      grid.style.setProperty("--perspective", "3000px");
      grid.style.setProperty("--grid-item-ratio", "16.0/9.0");
      grid.style.setProperty("--grid-columns", "3");
      grid.style.setProperty("--grid-inner-scale", "1.0");
      grid.style.setProperty("--grid-gap", "1vw");

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

    case "type1":
      // Set some CSS related style values
      grid.style.setProperty("--perspective", "1000px");
      grid.style.setProperty("--grid-inner-scale", "1.0");
      grid.style.setProperty("--grid-item-ratio", "16.0/9.0");

      timeline
        .set(gridWrap, {
          rotationY: 25,
        })
        .set(gridItems, {
          z: () => gsap.utils.random(-1600, 200),
        })
        .fromTo(
          gridItems,
          {
            xPercent: () => gsap.utils.random(-1000, -500),
          },
          {
            xPercent: () => gsap.utils.random(500, 1000),
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
      grid.style.setProperty("--grid-width", "150%");
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
            z: -500,
          },
          0
        )
        .set(
          gridObj.rows("odd"),
          {
            xPercent: -300,
            // ease: 'power1'
            z: -500,
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
            z: 500,
          },
          0
        )
        .to(
          gridObj.rows("odd"),
          {
            xPercent: 300,
            // ease: 'power1'
            z: 500,
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
  // Select all grids EXCEPT the intro grid
  const grids = document.querySelectorAll(".grid:not(.grid--intro)");

  grids.forEach((grid, i) => {
    let animationType;
    switch (i % 6) {
      case 0:
        animationType = "type1";
        break;
      case 1:
        animationType = "horizontal-rails";
        break;
      case 2:
        animationType = "type1";
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

// Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
preloadImages(".grid__item-inner").then(() => {
  initSmoothScrolling();
  initIntroAnimation();
  scroll();
  document.body.classList.remove("loading");
});
