let navElements = gsap.from(".button", {
  y: "random(-200, 200)",
  stagger: 0.5,
  opacity: 0,
  duration: 1,
});
let homeElements = gsap.from("#home_intro p , #home_intro svg", {
  y: -100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});

let underlineHome = gsap.to(
  "#underlinehome",
  {
    width: 645,
    ease: "power1.out",
    duration: 0.5,
  },
  ">"
);

window.addEventListener("DOMContentLoaded", () => {
  VANTA.NET({
    el: "#vanta-element",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    points: 15.00
    //?backgroundAlpha: 0.0,
  });
});

let fiEnv = gsap.to(".icon_envelopper", {
  x: 165,
  ease: "steps(12)",
  duration: 3,
})
