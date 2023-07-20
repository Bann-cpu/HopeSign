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


  let underlineHome = gsap.to(
    "#underlinehome",
    {
      width: 645,
      ease: "power1.out",
      duration: 0.5,
    },
    ">"
  );
  
  let fiEnv = gsap.to(".icon_envelopper", {
    x: 165,
    ease: "steps(12)",
    duration: 3,
  });

  /*! Carousel Animation with addEventListeners*/

const carouselItems = document.querySelectorAll("carouselItem");
const carouselContainer = document.querySelector("itemContainer");
const btnCard = document.getElementById("btnCard");

let index = 0;

function carouselStarting() {
  index++;

  if (index > carouselItems.length -1) {
    index = 0;
  }

  carouselItems.style.transform = `translateY(${-index * 100}px)`
}

btnCard.addEventListener("click", () => {
  carouselStarting();
  console.log("Le bouton fonctionne bien");
})
