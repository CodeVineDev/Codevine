const circle = document.querySelector(".cursor-circle"),
  cursorText = document.querySelector(".cursor-text"),
  testimonySection = document.querySelector("#testimony"),
  projectLinks = document.querySelectorAll("#project");
let mouseX = 0,
  mouseY = 0,
  currentX = 0,
  currentY = 0;
const cursorSpeed = 0.1;
let animationActive = window.innerWidth >= 1024;
function animateCursor() {
  animationActive &&
    circle &&
    ((currentX += (mouseX - currentX) * 0.1),
    (currentY += (mouseY - currentY) * 0.1),
    (circle.style.transform = `translate3d(${currentX - 25}px, ${
      currentY - 0.1
    }px, 0)`)),
    requestAnimationFrame(animateCursor);
}
window.addEventListener("mousemove", (e) => {
  animationActive && circle && ((mouseX = e.clientX), (mouseY = e.clientY));
}),
  window.addEventListener("resize", () => {
    (animationActive = window.innerWidth >= 1024) ||
      !circle ||
      (circle.style.transform = "translate3d(-100px, -100px, 0)");
  }),
  animateCursor(),
  testimonySection &&
    circle &&
    cursorText &&
    (testimonySection.addEventListener("mouseenter", () => {
      circle.classList.add("expand"), (cursorText.textContent = "testimonials");
    }),
    testimonySection.addEventListener("mouseleave", () => {
      circle.classList.remove("expand"), (cursorText.textContent = "");
    })),
  projectLinks.length &&
    circle &&
    cursorText &&
    projectLinks.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        circle.classList.add("expand"),
          (cursorText.textContent = "view project");
      }),
        e.addEventListener("mouseleave", () => {
          circle.classList.remove("expand"), (cursorText.textContent = "");
        });
    }),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.getElementById("sliderTrack");
    if (!e) {
      console.log("Slider not found on this page.");
      return;
    }
    let t = Array.from(e.children);
    t.forEach((t) => {
      let r = t.cloneNode(!0);
      e.appendChild(r);
    });
    let r = 0;
    function n() {
      r -= 0.5;
      let t = e.scrollWidth / 2;
      Math.abs(r) >= t && (r = 0),
        (e.style.transform = `translateX(${r}px)`),
        requestAnimationFrame(n);
    }
    n();
  });
const hamburger = document.getElementById("hamburger"),
  mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open"), hamburger.classList.toggle("open");
}),
  document.querySelectorAll(".accordion-header").forEach((e) => {
    e.addEventListener("click", () => {
      let t = document.querySelector(".accordion-header.active");
      t &&
        t !== e &&
        (t.classList.remove("active"),
        (t.nextElementSibling.style.maxHeight = "0px")),
        e.classList.toggle("active");
      let r = e.nextElementSibling;
      e.classList.contains("active")
        ? (r.style.maxHeight = r.scrollHeight + "px")
        : (r.style.maxHeight = "0px");
    });
  }),
  document.addEventListener("DOMContentLoaded", () => {
    let e = -1,
      t = ["produce", "craft", "deliver"],
      r = document.getElementById("word");
    (r.textContent = "create"),
      setTimeout(() => {
        setInterval(() => {
          e++,
            (r.style.opacity = 0),
            setTimeout(() => {
              (r.textContent = t[e % t.length]), (r.style.opacity = 1);
            }, 400);
        }, 1500);
      }, 2e3);
  });
const bottomNav = document.getElementById("bottomNav"),
  homeCont = document.querySelector("#homecont");
window.addEventListener("scroll", () => {
  let e = window.scrollY,
    t = homeCont.offsetHeight;
  e > t ? bottomNav.classList.add("show") : bottomNav.classList.remove("show");
}),
  gsap.registerPlugin(ScrollTrigger, CustomEase);
try {
  if ("undefined" != typeof ScrollTrigger && void 0 !== ScrollTrigger.isTouch) {
    let e = (e) => {
      let t = e.textContent.split(" "),
        r = t.map(
          (e, r) =>
            `<span class="word-wrapper"><span class="word">${
              r === t.length - 1 ? e : `${e} `
            }</span></span>`
        );
      e.innerHTML = r.join("");
    };
    document.querySelectorAll(".js-split").forEach((t) => {
      e(t);
      let r = t.querySelectorAll(".word");
      gsap.set(r, { yPercent: 100, opacity: 0, filter: "blur(10px)" }),
        gsap.to(r, {
          scrollTrigger: {
            trigger: t,
            start: "top 98%",
            end: "top 98%",
            toggleActions: "play none none none",
            once: !0,
          },
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.402,0 0.238,0.39 0.428,0.7 0.574,0.938 0.818,1.001 1,1"
          ),
          stagger: { amount: 0.1, ease: "power3.out" },
        });
    }),
      ScrollTrigger.refresh();
  }
} catch (t) {
  console.warn(
    "GSAP animations skipped due to unsupported browser or error:",
    t
  );
}
function openDialog(e) {
  document.getElementById("dialog" + e).showModal();
}
function closeDialog(e) {
  document.getElementById("dialog" + e).close();
}
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  const data = new FormData(form);

  // Replace the action attribute with your Formspree endpoint
  const formspreeURL = "https://formspree.io/f/xyyqbvbq";

  fetch(formspreeURL, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Redirect to a thank you page
      window.location.href = "https://codevinedev.com/pages/thankyou.html";
    } else {
      alert('There was an error submitting the form.');
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting the form.');
  });
});