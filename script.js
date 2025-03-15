let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputMessage = document.getElementById('textarea');

document.addEventListener('DOMContentLoaded', () => {
  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";

  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").style.display = "block";

  initializeTheme();
  setupNavbar();
  setupContactForm();
  setupServiceHoverEffect();
  setupResponsiveFontSize();
  setupSmoothScroll();
});

// TOGGLE THEMES SCRIPT
const toggleButton = document.getElementById("theme-toggle__btn");
const iconElement = document.getElementById("theme-toggle__icon");

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
  iconElement.textContent = "dark_mode";
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "disabled");
  iconElement.textContent = "light_mode";
}

function initializeTheme() {
  localStorage.getItem("dark-mode") === "enabled" ? enableDarkMode() : disableDarkMode();
  toggleButton.addEventListener("click", () => {
    document.body.classList.contains("dark-mode") ? disableDarkMode() : enableDarkMode();
  });
}

// Navbar script
function setupNavbar() {
  const sidebarBtn = document.querySelector(".navbar__burger-menu");
  const sideBar = document.querySelector(".side-navbar");
  const centerNav = document.querySelector(".navbar-links__center");

  [centerNav, sidebarBtn].forEach(el => el.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  }));
}

// Contact script
function setupContactForm() {
  document.getElementById('myForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formspreeURL = "https://formspree.io/f/xyyqbvbq";

    try {
      const response = await fetch(formspreeURL, {
        method: "POST",
        body: new FormData(event.target),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) window.location.href = "https://codevine.vercel.app/PAGES/thankyou.html";
      else alert('There was an error submitting the form.');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  });
}

// MY SERVICES HOVER FOLLOW EFFECT SCRIPT
function setupServiceHoverEffect() {
  document.querySelectorAll('.service-card').forEach(box => {
    if (window.innerWidth < 992) return;
    box.addEventListener('mouseenter', (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const translateX = x < rect.width / 2 ? '-100%' : '100%';
      const translateY = y < rect.height / 2 ? '-100%' : '100%';
      const beforeElement = document.createElement('div');
      beforeElement.classList.add('hover-overlay');
      Object.assign(beforeElement.style, {
        position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--blue-text').trim(),
        transform: `translate(${translateX}, ${translateY})`, transition: 'transform 0.3s ease-in-out',
        zIndex: '-1'
      });
      box.appendChild(beforeElement);
      setTimeout(() => beforeElement.style.transform = 'translate(0, 0)', 10);
      box.addEventListener('mouseleave', () => {
        beforeElement.style.transform = `translate(${translateX}, ${translateY})`;
        setTimeout(() => beforeElement.remove(), 300);
      }, { once: true });
    });
  });
}

// SKILLS FONT-SIZE SCRIPT
function setupResponsiveFontSize() {
  function setFontSize() {
    document.querySelectorAll('.slide p').forEach(text => {
      text.style.setProperty('--responsive-font-size', `${text.parentElement.offsetWidth * 0.08}px`);
    });
  }
  setFontSize();
  window.addEventListener('resize', setFontSize);
}

// PROJECT POP UP SCRIPT
function openDialog(boxNumber) {
  document.getElementById('dialog' + boxNumber).showModal();
}

function closeDialog(boxNumber) {
  document.getElementById('dialog' + boxNumber).close();
}

// Smooth Scroll script
function setupSmoothScroll() {
  new SmoothScroll('a[href*="#"]', {
    speed: 500,
    offset: () => {
      const width = window.innerWidth;
      return width < 370 ? 55 : width < 500 ? 65 : width < 700 ? 75 : width < 852 ? 85 : width < 992 ? 95 : 70;
    },
  });
}

// THANK YOU PAGE SCRIPT
function startConfettiAnimation() {
  bodymovin.loadAnimation({
    wrapper: document.querySelector(".thank-you"),
    animType: "svg", loop: false, autoplay: true,
    path: "https://lottie.host/6dc5f5b5-8697-4e9d-b781-127bc2c459fd/Crhu8Rzi3M.json"
  });
}
