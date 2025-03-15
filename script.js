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
const toggleButton = document.getElementById("theme-toggle__btn");
const iconElement = document.getElementById("theme-toggle__icon");

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
  var sidebarBtn = document.querySelector(".navbar__burger-menu");
  var sideBar = document.querySelector(".side-navbar");
  var centerNav = document.querySelector(".navbar-links__center");

  centerNav.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  });

  sidebarBtn.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  });
});

const contactButton = document.querySelector(".navbar__contact");
const circleContact = document.querySelector(".back-to a:nth-child(2)");







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
    // Check if the screen width is less than 992px
    if (window.innerWidth < 992) {
      return; // Exit the function if the screen width is less than 992px
    }

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







// Smooth Scroll script
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





// THANK YOU PAGE SCRIPT
// Function to start the confetti animation
function startConfettiAnimation() {
  let confetti_container = document.querySelector(".thank-you");
  let animItem = bodymovin.loadAnimation({
    wrapper: confetti_container,
    animType: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/6dc5f5b5-8697-4e9d-b781-127bc2c459fd/Crhu8Rzi3M.json",
  });

  // Play the animation
  animItem.play();
}