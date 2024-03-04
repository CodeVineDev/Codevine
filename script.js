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

// Navbar script
document.addEventListener("DOMContentLoaded", function () {
  var sidebarBtn = document.querySelector(".sidebarBtn");
  var sideBar = document.querySelector(".sideBar");
  var centerNav = document.querySelector(".centerNav");

  centerNav.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  });

  sidebarBtn.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  });
});
// Contact script

// PROJECT POP UP SCRIPT
let openModal = document.querySelector('.show-card');
let closeModal = document.querySelector('.fa-times');
let modal = document.querySelector('.project-preview')
let modalContent = document.querySelector('.project-preview .preview');
let body = document.getElementById('body');

openModal.addEventListener('click', () => {
  modal.showModal();
  body.style.overflowY = 'hidden';
  modalContent.scrollTo(0, 0);
})
// modal.addEventListener('click', e => {
//   const dialogDimensions = modal.getBoundingClientRect()
// if {
//   e.clientX < dialogDimensions.left ||
//     e.clientX > dialogDimensions.right ||
//     e.clientY < dialogDimensions.top ||
//     e.clientY > dialogDimensions.bottom

// } {
//   modal.close();
//   body.style.overflowY = 'scroll';
// }
// })
closeModal.addEventListener('click', () => {
  modal.close();
  body.style.overflowY = 'scroll';
})


// let previewContainer = document.querySelector(".project-preview");
// let previewBox = previewContainer.querySelectorAll(".preview");
// let previewCard = document.querySelector("#preview-card");

// document.querySelectorAll(".myprojects .project-card .show-card").forEach((project) => {
//   project.onclick = () => {
//     previewContainer.style.display = "flex";
//     previewContainer.style.pointerEvents = "visible";
//     previewContainer.style.opacity = "1";
//     previewCard.style.opacity = "1";
//     previewCard.style.transform = "translate(0, 10px)";
//     let name = project.getAttribute("data-name");

//     previewBox.forEach((preview) => {
//       let target = preview.getAttribute("data-target");
//       if (name == target) {
//         preview.classList.add("active");
//       }
//     });
//   };
// });
// previewBox.forEach((close) => {
//   close.querySelector(".fa-times").onclick = () => {
//     close.classList.remove("active");
//     previewContainer.style.pointerEvents = "none";
//     previewContainer.style.opacity = "0";
//     previewCard.style.transform = "translate(0, -10px)";
//     previewCard.style.opacity = 0;
//   };
// });

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
        return 0 + "88px"; // Default offset for larger screens
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
  defaults: {
    duration: .3
  }
});

timeLine
  .fromTo(
    ".myNavbar",
    {
      y: "-100%",
    },
    {
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
