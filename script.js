// TOGGLE THEMES SCRIPT
const toggleButton = document.getElementById("toggleButton");
const iconElement = document.getElementById("iconElement");

// Function to enable dark mode
const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
};

// Function to disable dark mode
const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", null);
};

// Check the current dark mode setting in localStorage
const darkMode = localStorage.getItem("dark-mode");

// Apply the appropriate theme based on the darkMode setting
if (darkMode === "enabled") {
  enableDarkMode();
  // Optionally, update the icon to indicate dark mode
  iconElement.textContent = "dark_mode";
} else {
  disableDarkMode();
  // Optionally, update the icon to indicate light mode
  iconElement.textContent = "light_mode";
}

// Add a click event listener to toggle dark mode
toggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    disableDarkMode();
    iconElement.textContent = "light_mode";
  } else {
    enableDarkMode();
    iconElement.textContent = "dark_mode";
  }
});

// Navbar query script
document.addEventListener("DOMContentLoaded", function () {
  var sidebarBtn = document.querySelector(".sidebarBtn");
  var sideBar = document.querySelector(".sideBar");

  sidebarBtn.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  });
});
// Contact script

// Scroll script
document.addEventListener("DOMContentLoaded", function () {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500, // Adjust the scroll speed as needed
    offset: function (anchor, toggle) {
      // Calculate the offset dynamically based on the screen width
      if (window.innerWidth < 370) {
        return 55; // Offset for screens narrower than 370px
      } else if (window.innerWidth < 500) {
        return 65; // Offset for screens between 370px and 500px
      } else if (window.innerWidth < 700) {
        return 75; // Offset for screens between 500px and 700px
      } else if (window.innerWidth < 852) {
        return 85; // Offset for screens between 700px and 852px
      } else if (window.innerWidth < 992) {
        return 95; // Offset for screens between 852px and 992px
      } else {
        return 0; // Default offset for larger screens
      }
    },
  });
});

// Animation script
const contactButton = document.querySelector(".boldContact");
const circleContact = document.querySelector(".goBack-btn a:nth-child(2)");

// Define the GSAP animation timeline
const tl = gsap.timeline({ repeat: -1 });

tl.to(contactButton, {
  duration: 0.1,
  x: 5,
  ease: "power1.inOut",
})
  .to(contactButton, {
    duration: 0.1,
    x: -9,
    ease: "power1.inOut",
  })
  .to(contactButton, {
    duration: 0.1,
    x: 9,
    ease: "power1.inOut",
  })
  .to(contactButton, {
    duration: 0.1,
    x: -9,
    ease: "power1.inOut",
  })
  .to(contactButton, {
    duration: 0.1,
    x: 0,
    ease: "power1.inOut",
  })
  .to({}, { duration: 5 }); // Pause for 5 seconds

// Start the animation
tl.play();

tl.to(circleContact, {
  duration: 0.1,
  x: 5,
  ease: "power1.inOut",
})
  .to(circleContact, {
    duration: 0.1,
    x: -9,
    ease: "power1.inOut",
  })
  .to(circleContact, {
    duration: 0.1,
    x: 9,
    ease: "power1.inOut",
  })
  .to(circleContact, {
    duration: 0.1,
    x: -9,
    ease: "power1.inOut",
  })
  .to(circleContact, {
    duration: 0.1,
    x: 0,
    ease: "power1.inOut",
  })
  .to({}, { duration: 5 }); // Pause for 5 seconds

// Start the animation
tl.play();

const timeLine = gsap.timeline({
  // defaults: {
  //     duration: 1
  // }
});

const element = document.querySelector(".waving");
const timewave = gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" });

// Add animation to the timeline
timewave
  .to(element, {
    duration: 0.5, // Animation duration in seconds
    rotate: 30,
    // Rotate the element to 20 degrees
  })
  .to(element, {
    duration: 5,
    rotate: 0,
  });

timeLine
  .fromTo(
    ".myNavbar",
    {
      y: "-100%",
    },
    {
      duration: 1,
      y: 0,
      ease: "bounce",
    }
  )
  .fromTo(
    ".navbar-brandd p",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    ".hidden-hero img",
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "bounce",
    }
  )
  .fromTo(
    ".hidden-hero h1",
    {
      y: "100%",
    },
    {
      y: 0,
    }
  )
  .fromTo(
    ".hidden-hero p",
    {
      y: "100%",
    },
    {
      y: 0,
    }
  )
  .fromTo(
    ".socialBtns",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    ".socialBtns a button",
    {
      scale: 0,
    },
    {
      stagger: 0.2,
      ease: "bounce",
      scale: 1,
    }
  )
  .fromTo(
    ".hidden-hero .scroll-down",
    {
      y: "100%",
    },
    {
      y: 0,
    }
  )

  .fromTo(
    ".sidebarBtn .span",
    {
      x: "-100px",
    },
    {
      x: 0,
      ease: "bounce",
      stagger: 0.5,
    }
  )
  .fromTo(
    ".centerNav a",
    {
      y: "-500px",
    },
    {
      y: 0,
      ease: "power2.in",
      stagger: 0.1,
    }
  )
  .fromTo(
    ".display-theme",
    {
      scale: 0,
    },
    {
      ease: "bounce",
      scale: 1,
    }
  )
  .fromTo(
    ".navBtns a",
    {
      scale: 0,
    },
    {
      stagger: 0.2,
      ease: "bounce",
      scale: 1,
    }
  )
  .fromTo(
    " .bottom-page-nav ",
    {
      y: "100%",
    },
    {
      y: 0,
    }
  )
  .fromTo(
    " .bottom-page-nav div",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    ".goBack-btn a",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".left-about h3",
  {
    opacity: 0,
    scale: 1,
    y: "100%",
  },
  {
    scrollTrigger: {
      trigger: ".left-about",
      start: "top 90%",
      end: "bottom top",
      toggleActions: "restart",
    },
    opacity: 1,
    scale: 1,
    ease: "power2.in",
    duration: 1,
    y: 0,
  }
);
gsap.to(".left-about p", {
  scrollTrigger: {
    trigger: ".left-about",
    start: "top 80%",
    end: "bottom 80%",
    toggleActions: "restart",
  },
  opacity: 1,
  duration: 1,
  delay: 0.8,
  y: 0,
});
gsap.to(".mySkills h3", {
  scrollTrigger: {
    trigger: ".mySkills",
    start: "-45% center",
    end: "bottom top",
    toggleActions: "restart",
  },
  opacity: 1,
  scale: 1,
  ease: "power2.in",
  duration: 1,
  y: 0,
});
gsap.fromTo(
  ".mySkills .slide",
  {
    opacity: 0,
    y: "-100%",
  },
  {
    scrollTrigger: {
      trigger: ".mySkills",
      start: "-45% center",
      end: "bottom top",
      toggleActions: "restart",
    },
    ease: "bounce",
    delay: 1.2,
    stagger: 0.3,
    opacity: 1,
    y: 0,
  }
);
gsap.to(".projects h3", {
  scrollTrigger: {
    trigger: ".projects",
    start: "-30% center",
    end: "bottom top",
    toggleActions: "restart",
  },
  opacity: 1,
  scale: 1,
  ease: "power2.in",
  duration: 1,
  y: 0,
});
gsap.to(".projects .myprojects", {
  scrollTrigger: {
    trigger: ".projects",
    start: "-100px center",
    end: "bottom top",
    toggleActions: "restart",
  },
  opacity: 1,
  duration: 2,
  delay: 0.5,
});
gsap.to(".contact-sec h3", {
  scrollTrigger: {
    trigger: ".contact-sec",
    start: "-30% center",
    end: "bottom top",
    toggleActions: "restart",
  },
  opacity: 1,
  scale: 1,
  markers: true,
  duration: 1,
});
gsap.to("fieldset", {
  scrollTrigger: {
    trigger: ".contact-sec",
    start: "-100px center",
    end: "bottom top",
    toggleActions: "restart",
  },
  opacity: 1,
  duration: 2,
  delay: 1,
});
