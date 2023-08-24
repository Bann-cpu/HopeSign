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

gsap.registerPlugin(MotionPathPlugin);

const animationSvg = gsap.to(
  ".lineSvgAnimation",
  {
    width: 700,
    ease: "power1.out",
    duration: 20,
  },
);

const animationBoxSections = gsap.to(
  ".containerOfAboutSectionOne", 
  {
    x: -800,
    ease: "power1.out",
    duration: 20 ,
})

ScrollTrigger.create({ /* Ligne animation */
  trigger: ".triggerSvgAnimation",
  start: "top center", // Point de départ de l'animation
  end: "center center", // Point où l'animation se déclenche
  animation: animationSvg, // L'animation GSAP que vous avez créée
  scrub: true,
})

ScrollTrigger.create({ /* Boîte */
  trigger: ".triggerSvgAnimation",
  animation: animationBoxSections,
  start: "top center", // Point de départ de l'animation
  end: "center center",
  scrub: true,
})

/* */

const animationSvgLineTwo = gsap.from(".lineSvgAnimationTwo", {
  x: 1000,
  ease: "power1",
  duration: 5,
})

const animationBoxSectionTwo = gsap.to(".containerOfAboutSectionTwo", {
  x: 700, 
  ease: "power1.out",
  duration: 5,
})

ScrollTrigger.create({ /* Ligne animation */
  trigger: ".triggerSvgAnimationTwo",
  start: "top center", // Point de départ de l'animation
  end: "center center", // Point où l'animation se déclenche
  animation: animationSvgLineTwo, // L'animation GSAP que vous avez créée
  scrub: true,
})

ScrollTrigger.create({ /* Boîte */
  trigger: ".triggerSvgAnimationTwo",
  animation: animationBoxSectionTwo,
  start: "top center", // Point de départ de l'animation
  end: "center center",
  scrub: true,
})

/* */


const animationSvgThree = gsap.to(
  ".lineSvgAnimationThree",
  {
    width: 700,
    ease: "power1.out",
    duration: 20,
  },
);

const animationBoxSectionsThree = gsap.to(
  ".containerOfAboutSectionThree", 
  {
    x: -800,
    ease: "power1.out",
    duration: 20 ,
})

ScrollTrigger.create({ /* Ligne animation */
  trigger: ".triggerSvgAnimationThree",
  start: "top center", // Point de départ de l'animation
  end: "center center", // Point où l'animation se déclenche
  animation: animationSvgThree, // L'animation GSAP que vous avez créée
  scrub: true,
})

ScrollTrigger.create({ /* Boîte */
  trigger: ".triggerSvgAnimationThree",
  animation: animationBoxSectionsThree,
  start: "top center", // Point de départ de l'animation
  end: "center center",
  scrub: true,
})