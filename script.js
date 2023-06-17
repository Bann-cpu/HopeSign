//?Animation de la nav bar
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

//?Animation de l'underline
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

let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;

window.addEventListener("DOMContentLoaded", () => {
  animate();
});

function animate() {
  requestAnimationFrame(animate);
  x += (mouseX - x) * 0.2;
  y += (mouseY - y) * 0.2;

  cursorStyle.style.left = `${x}px`;
  cursorStyle.style.top = `${y}px`;

  cursorSndStyle.style.top = `${y}px`;
  cursorSndStyle.style.left = `${x}px`;
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const aArray = Array.from(document.querySelectorAll("a"));
const paraArray = Array.from(document.querySelectorAll("p"));

aArray +
  paraArray.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursorStyle.classList.add("grow");
    });
    element.addEventListener("mouseleave", () => {
      cursorStyle.classList.remove("grow");
    });
  });