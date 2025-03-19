let ts = gsap.timeline();

ts.from(".nav h2,.nav h4,.nav button", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay:.5,
  stagger:.3
});
ts.from(".content .left h1,.content .left p,.content .left button",{
  x:-200 ,opacity: 0,
  duration: .5,
  delay:.5,
  stagger:.3
})

ts.from(".content .right",{
  x:-200 ,
  opacity: 0,
  duration: .5,
  delay:.5,
  stagger:.3,
  rotation:30
})

ts.from(".right-section",{
  x:200,  opacity: 0,
  duration: .5,
  delay:.5,
  stagger:.3,
})
ts.from(".left-section",{
  x:-200 ,opacity: 0,
  duration: .5,
  delay:.5,
  stagger:.3
})

  
gsap.registerPlugin(ScrollTrigger);

gsap.set("li  span", { transformOrigin: "0 50%" });
gsap.set("li:not(:first-of-type) span", { opacity: 0.2, scale: 0.8 });

const tl = gsap.timeline()
    .to("li:not(:first-of-type) span", { opacity: 1, scale: 1, stagger: 0.5 })
    .to("li:not(:last-of-type) span", { opacity: 0.2, scale: 0.8, stagger: 0.5 }, 0);

ScrollTrigger.create({
    trigger: ".cols2 h1",
    start: "start start",
    endTrigger: "li:last-of-type",
    end: "end end",
    pin: true,
    animation: tl,
    scrub: true,
});
