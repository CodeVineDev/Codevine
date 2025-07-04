// CURSOR LOGIC
const circle = document.querySelector(".cursor-circle");
const cursorText = document.querySelector(".cursor-text");
const testimonySection = document.querySelector("#testimony");
const projectLinks = document.querySelectorAll("#project"); // or ".project-link"

// Animate the cursor even if no sections exist
let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
const cursorSpeed = 0.1;
let animationActive = window.innerWidth >= 1024;

window.addEventListener("mousemove", (e) => {
  if (!animationActive || !circle) return;
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener("resize", () => {
  animationActive = window.innerWidth >= 1024;
  if (!animationActive && circle) {
    circle.style.transform = "translate3d(-100px, -100px, 0)";
  }
});

function animateCursor() {
  if (animationActive && circle) {
    currentX += (mouseX - currentX) * cursorSpeed;
    currentY += (mouseY - currentY) * cursorSpeed;
    circle.style.transform = `translate3d(${currentX - 25}px, ${currentY - 0.1}px, 0)`;
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ✅ Add hover effect for testimony section (if it exists)
if (testimonySection && circle && cursorText) {
  testimonySection.addEventListener("mouseenter", () => {
    circle.classList.add("expand");
    cursorText.textContent = "testimonials";
  });
  testimonySection.addEventListener("mouseleave", () => {
    circle.classList.remove("expand");
    cursorText.textContent = "";
  });
}

// ✅ Add hover effect for project links (if they exist)
if (projectLinks.length && circle && cursorText) {
  projectLinks.forEach(project => {
    project.addEventListener("mouseenter", () => {
      circle.classList.add("expand");
      cursorText.textContent = "view project";
    });
    project.addEventListener("mouseleave", () => {
      circle.classList.remove("expand");
      cursorText.textContent = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.getElementById("sliderTrack");
  if (!sliderTrack) {
    console.log("Slider not found on this page.");
    return; // Exit if there's no slider
  }

  const slides = Array.from(sliderTrack.children);

  // Duplicate slides once for seamless loop
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
  });

  let position = 0;
  const sliderSpeed = 0.5;

  function animateSlider() {
    position -= sliderSpeed;
    const trackWidth = sliderTrack.scrollWidth / 2; // half since we cloned once
    if (Math.abs(position) >= trackWidth) position = 0;
    sliderTrack.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateSlider);
  }

  animateSlider();
});

// HAMBURGER LOGIC
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
});
const moreProject = document.getElementById("extend");
const addProject = document.getElementById("extension");
const iconElement = document.getElementById("icon");

// moreProject.addEventListener("click", () => {
//   addProject.classList.toggle("active");

//   const isActive = addProject.classList.contains("active");

//   // Update button text based on state
//   moreProject.innerHTML =
//     (isActive ? "See Less" : "See More") + iconElement.outerHTML;
// });

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const activeHeader = document.querySelector(".accordion-header.active");

    // Close the previously active accordion if it's not the current one
    if (activeHeader && activeHeader !== header) {
      activeHeader.classList.remove("active");
      activeHeader.nextElementSibling.style.maxHeight = "0px";
    }

    // Toggle the clicked header's active state
    header.classList.toggle("active");

    // Toggle the content's max-height based on active state
    const accordionContent = header.nextElementSibling;
    if (header.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = "0px";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let count = -1; // start with -1
  const initText = "create"; // initial text
  const wordsArray = ["produce", "craft", "deliver"]; // your words

  const wordEl = document.getElementById("word");
  wordEl.textContent = initText;

  // Delay before starting interval
  setTimeout(() => {
    setInterval(() => {
      count++;
      // Fade out
      wordEl.style.opacity = 0;
      setTimeout(() => {
        wordEl.textContent = wordsArray[count % wordsArray.length];
        // Fade in
        wordEl.style.opacity = 1;
      }, 400); // match fadeOut duration
    }, 1500); // interval time
  }, 2000); // initial delay
});
