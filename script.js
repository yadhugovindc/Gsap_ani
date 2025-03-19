let tl = gsap.timeline();

tl.from(".nav h2,.nav h4,.nav button", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay:.5,
  stagger:.3
});
tl.from(".content .left h1,.content .left p,.content .left button",{
  x:-200 ,opacity: 0,
  duration: .5,
  delay:.5,
  stagger:.3
})

tl.from(".content .right",{
  x:-200 ,
  opacity: 0,
  duration: .5,
  delay:.5,
  stagger:.3,
  rotation:30
})

tl.from(".right-section",{
  x:200,  opacity: 0,
  duration: .5,
  delay:.5,
  stagger:.3,
})
tl.from(".left-section",{
  x:-200 ,opacity: 0,
  duration: .5,
  delay:.5,
  stagger:.3
})


const whyChooseUsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-fluid",
    start: "top 80%", // Start when the section is 80% from the top of the viewport
    end: "bottom 20%", // End when the section is 20% from the bottom
    scrub: 1, // Smooth scrubbing effect
    markers: false, // Set to true for debugging
  },
});
whyChooseUsTl
  .from(".left-section", {
    x: -200,
    opacity: 0,
    duration: 1,
  })
  .from(".right-section", {
    x: 200,
    opacity: 0,
    duration: 1,
  }, "-=0.5"); // Overlap with the previous animation by 0.5s

// 4. Rotator List Animation
gsap.set("li > span", { transformOrigin: "0 50%" });
gsap.set("li:not(:first-of-type) span", { opacity: 0.2, scale: 0.8 });

const rotatorTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cols2",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false, // Set to true for debugging
  },
});
rotatorTl
  .to("li:not(:first-of-type) span", {
    opacity: 1,
    scale: 1,
    stagger: 0.5,
  })
  .to("li:not(:last-of-type) span", {
    opacity: 0.2,
    scale: 0.8,
    stagger: 0.5,
  }, 0); // Run simultaneously with the previous animation

// Optional: Pin the h1 in the .cols2 section while the list animates
ScrollTrigger.create({
  trigger: ".cols2 h1",
  start: "top 20%",
  endTrigger: "li:last-of-type",
  end: "center center",
  pin: true,
  markers: false, // Set to true for debugging
});

