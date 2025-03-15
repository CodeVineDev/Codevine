document.addEventListener("DOMContentLoaded", () => {
  // Clear input fields on page load
  ["name", "email", "textarea"].forEach(id => document.getElementById(id).value = "");
  
  // Hide preloader and show main content
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").style.display = "block";

  // Dark Mode Toggle
  const toggleButton = document.getElementById("theme-toggle__btn");
  const iconElement = document.getElementById("theme-toggle__icon");
  const isDarkMode = localStorage.getItem("dark-mode") === "enabled";

  document.body.classList.toggle("dark-mode", isDarkMode);
  iconElement.textContent = isDarkMode ? "dark_mode" : "light_mode";

  toggleButton.addEventListener("click", () => {
    const enabled = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", enabled ? "enabled" : "disabled");
    iconElement.textContent = enabled ? "dark_mode" : "light_mode";
  });

  // Navbar Toggle
  const sidebarBtn = document.querySelector(".navbar__burger-menu");
  const sideBar = document.querySelector(".side-navbar");
  const centerNav = document.querySelector(".navbar-links__center");

  [sidebarBtn, centerNav].forEach(el => el.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  }));

  // Contact Form Submission
  document.getElementById("myForm").addEventListener("submit", async event => {
    event.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xyyqbvbq", {
        method: "POST",
        body: new FormData(event.target),
        headers: { "Accept": "application/json" }
      });
      window.location.href = response.ok ? "https://codevine.vercel.app/PAGES/thankyou.html" : alert("Error submitting the form.");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form.");
    }
  });

  // Service Card Hover Effect
  document.querySelectorAll(".service-card").forEach(card => {
    const blueTextColor = getComputedStyle(document.documentElement).getPropertyValue("--blue-text").trim();
    card.addEventListener("mouseenter", e => {
      if (window.innerWidth < 992) return;
      const rect = card.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
      const translate = {
        x: x < rect.width / 2 ? "-100%" : "100%",
        y: y < rect.height / 2 ? "-100%" : "100%"
      };
      
      const overlay = document.createElement("div");
      Object.assign(overlay.style, {
        position: "absolute", top: "0", left: "0", width: "100%", height: "100%",
        backgroundColor: blueTextColor, transform: `translate(${translate.x}, ${translate.y})`,
        transition: "transform 0.3s ease-in-out", zIndex: "-1"
      });
      
      card.appendChild(overlay);
      setTimeout(() => overlay.style.transform = "translate(0, 0)", 10);
      
      card.addEventListener("mouseleave", leaveEvent => {
        const leaveX = leaveEvent.clientX - rect.left, leaveY = leaveEvent.clientY - rect.top;
        const exit = {
          x: leaveX < rect.width / 2 ? "-100%" : "100%",
          y: leaveY < rect.height / 2 ? "-100%" : "100%"
        };
        overlay.style.transform = `translate(${exit.x}, ${exit.y})`;
        setTimeout(() => overlay.remove(), 300);
      }, { once: true });
    });
  });

  // Responsive Font Size for Skills Section
  const setFontSize = () => document.querySelectorAll(".slide p").forEach(text =>
    text.style.setProperty("--responsive-font-size", `${text.parentElement.offsetWidth * 0.08}px`));
  setFontSize();
  window.addEventListener("resize", setFontSize);

  // Project Dialog Popups
  window.openDialog = boxNumber => document.getElementById(`dialog${boxNumber}`).showModal();
  window.closeDialog = boxNumber => document.getElementById(`dialog${boxNumber}`).close();

  // Smooth Scroll
  new SmoothScroll('a[href*="#"]', {
    speed: 500,
    offset: () => {
      const width = window.innerWidth;
      return width < 370 ? 55 : width < 500 ? 65 : width < 700 ? 75 : width < 852 ? 85 : width < 992 ? 95 : 70;
    }
  });

  // Confetti Animation on Thank You Page
  const confettiContainer = document.querySelector(".thank-you");
  if (confettiContainer) {
    bodymovin.loadAnimation({
      wrapper: confettiContainer, animType: "svg", loop: false, autoplay: true,
      path: "https://lottie.host/6dc5f5b5-8697-4e9d-b781-127bc2c459fd/Crhu8Rzi3M.json"
    });
  }
});
