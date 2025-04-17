const circle = document.querySelector(".cursor-circle");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.1; // delay/smoothness factor

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  // Adjust by half the size of the circle (center it)
  circle.style.transform = `translate3d(${currentX - 7.5}px, ${
    currentY - 7.5
  }px, 0)`;

  requestAnimationFrame(animate);
}

animate();

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
});
