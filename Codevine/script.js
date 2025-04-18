const circle = document.querySelector(".cursor-circle");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.1;
let animationActive = window.innerWidth >= 1024;

window.addEventListener("mousemove", (e) => {
  if (!animationActive) return;
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener("resize", () => {
  animationActive = window.innerWidth >= 1024;
  if (!animationActive) {
    circle.style.transform = "translate3d(-100px, -100px, 0)";
  }
});

function animate() {
  if (animationActive) {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;
    circle.style.transform = `translate3d(${currentX - 7.5}px, ${currentY - 7.5}px, 0)`;
  }
  requestAnimationFrame(animate);
}

animate();

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
});
