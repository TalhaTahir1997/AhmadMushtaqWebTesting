gsap.to(".nav", {
  backgroundColor: "rgba(13, 20, 27, 0.4)",
  height: "90px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 3,
  },
});

function setupRevealAnimations() {
  // Get all sections with the "data-scrolltrigger" attribute
  const sections = document.querySelectorAll("[data-scrolltrigger]");

  // Loop through each section and set up the reveal animation
  sections.forEach((section) => {
    gsap.from(
      section,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          //   end: "+=200",
          toggleActions: "play none none reverse",
          scrub: 3,
          onUpdate: (self) => {
            const progress = self.progress;
            const sectionHeight = section.getBoundingClientRect().height;
            const revealPoints = [0.75, 1.0];

            for (let i = 0; i < revealPoints.length; i++) {
              const revealProgress = Math.min(1, progress / revealPoints[i]);
              const opacity =
                revealProgress <= 1
                  ? revealProgress * 2
                  : 1 - (revealProgress - 1) * 2;
              if (progress >= revealPoints[i]) {
                section.style.opacity = opacity;
              }
            }
          },
        },
      },
      0.3
    );
  });
}

// Call the setup function when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  setupRevealAnimations();
});
