let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputMessage = document.getElementById('textarea')
window.addEventListener('load', () => {
  // window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";

  // Hide the preloader
  document.getElementById("preloader").style.display = "none";

  // Show the main content
  document.getElementById("content").style.display = "block";

});
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
      window.location.href = "https://codevine.vercel.app/PAGES/thankyou.html";
    } else {
      alert('There was an error submitting the form.');
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting the form.');
  });
});




// MY SERVICES HOVER FOLLOW EFFECT SCRIPT
document.querySelectorAll('.service-card').forEach(box => {
  const rootStyles = getComputedStyle(document.documentElement);
  const blueTextColor = rootStyles.getPropertyValue('--blue-text').trim();

  box.addEventListener('mouseenter', (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let translateX = '0', translateY = '0';

    // Determine the entry side
    if (x < rect.width / 2 && Math.abs(x - rect.width / 2) > Math.abs(y - rect.height / 2)) {
      translateX = '-100%'; // Entering from left
    } else if (x > rect.width / 2 && Math.abs(x - rect.width / 2) > Math.abs(y - rect.height / 2)) {
      translateX = '100%'; // Entering from right
    } else if (y < rect.height / 2) {
      translateY = '-100%'; // Entering from top
    } else {
      translateY = '100%'; // Entering from bottom
    }

    // Set the entry position
    box.style.setProperty('--translate-x', translateX);
    box.style.setProperty('--translate-y', translateY);

    // Apply transform dynamically
    const beforeElement = document.createElement('div');
    beforeElement.classList.add('hover-overlay');
    beforeElement.style.position = 'absolute';
    beforeElement.style.top = '0';
    beforeElement.style.left = '0';
    beforeElement.style.width = '100%';
    beforeElement.style.height = '100%';
    beforeElement.style.backgroundColor = blueTextColor;
    beforeElement.style.transform = `translate(${translateX}, ${translateY})`;
    beforeElement.style.transition = 'transform 0.3s ease-in-out';
    beforeElement.style.zIndex = '-1';

    box.appendChild(beforeElement);

    // Trigger the entry animation
    setTimeout(() => {
      beforeElement.style.transform = 'translate(0, 0)';
    }, 10);

    // Handle mouse leave to exit in the correct direction
    box.addEventListener('mouseleave', (leaveEvent) => {
      const leaveX = leaveEvent.clientX - rect.left;
      const leaveY = leaveEvent.clientY - rect.top;

      let exitX = '0', exitY = '0';

      if (leaveX < rect.width / 2 && Math.abs(leaveX - rect.width / 2) > Math.abs(leaveY - rect.height / 2)) {
        exitX = '-100%'; // Exiting left
      } else if (leaveX > rect.width / 2 && Math.abs(leaveX - rect.width / 2) > Math.abs(leaveY - rect.height / 2)) {
        exitX = '100%'; // Exiting right
      } else if (leaveY < rect.height / 2) {
        exitY = '-100%'; // Exiting top
      } else {
        exitY = '100%'; // Exiting bottom
      }

      // Apply exit animation
      beforeElement.style.transform = `translate(${exitX}, ${exitY})`;

      setTimeout(() => {
        beforeElement.remove();
      }, 300); // Remove after animation
    }, { once: true }); // Ensure event only runs once per hover
  });
});



//SKILLS FONT-SIZE SCRIPT
document.addEventListener('DOMContentLoaded', function () {
  function setResponsiveFontSize() {
    const parents = document.querySelectorAll('.slide');
    parents.forEach(parent => {
      const responsiveText = parent.querySelector('.slide p');
      if (responsiveText) {
        const parentWidth = parent.offsetWidth;
        const fontSize = parentWidth * 0.08; // Adjust the multiplier as needed
        responsiveText.style.setProperty('--responsive-font-size', `${fontSize}px`);
      }
    });
  }

  setResponsiveFontSize();
  window.addEventListener('resize', setResponsiveFontSize);
});


// PROJECT POP UP SCRIPT
function openDialog(boxNumber) {
  var dialog = document.getElementById('dialog' + boxNumber);
  dialog.showModal();
}

function closeDialog(boxNumber) {
  var dialog = document.getElementById('dialog' + boxNumber);
  dialog.close();
}


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
        return 0 + "70px"; // Default offset for larger screens
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
