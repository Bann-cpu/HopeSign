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

//?ANIMATION DU DONUTS BACKGROUND
window.addEventListener("DOMContentLoaded", () => { 
  VANTA.TRUNK({
    el: "#vanta-element",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: "#23153c",
    spacing: 1.5,
    chaos: 4.0,
  });
});

let fiEnv = gsap.to(".icon_envelopper", {
  x: 165,
  ease: "steps(12)",
  duration: 3,
});

//?ANIMATION DU CURSEUR
const cursorStyle = document.querySelector(".inner-cursor");
const cursorSndStyle = document.querySelector(".outer-cursor");
console.log(cursorSndStyle);


window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    cursorStyle.style.left = `${x}px`;
    cursorStyle.style.top = `${y}px`;
  
    cursorSndStyle.style.top = `${y}px`;
    cursorSndStyle.style.left = `${x}px`;
  });  
})

const paraArray = Array.from(document.querySelectorAll("p"));
paraArray.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorStyle.classList.add("grow")
  });
  element.addEventListener("mouseleave", () => {
    cursorStyle.classList.remove("grow")
  })
});

