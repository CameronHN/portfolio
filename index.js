// header.js
function loadHeader() {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      initHeaderInteractions();
    })
    .catch((error) => console.error("Error loading header:", error));
}

// ---
function initHeaderInteractions() {
  const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
  const smallMenu = document.querySelector(".header__sm-menu");
  const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
  const headerHamMenuCloseBtn = document.querySelector(
    ".header__main-ham-menu-close",
  );
  const headerSmallMenuLinks = document.querySelectorAll(
    ".header__sm-menu-link",
  );
  const headerLogoContainer = document.querySelector(".header__logo-container");

  if (
    !hamMenuBtn ||
    !smallMenu ||
    !headerHamMenuBtn ||
    !headerHamMenuCloseBtn ||
    !headerLogoContainer
  ) {
    return;
  }

  hamMenuBtn.addEventListener("click", () => {
    if (smallMenu.classList.contains("header__sm-menu--active")) {
      smallMenu.classList.remove("header__sm-menu--active");
    } else {
      smallMenu.classList.add("header__sm-menu--active");
    }
    if (headerHamMenuBtn.classList.contains("d-none")) {
      headerHamMenuBtn.classList.remove("d-none");
      headerHamMenuCloseBtn.classList.add("d-none");
    } else {
      headerHamMenuBtn.classList.add("d-none");
      headerHamMenuCloseBtn.classList.remove("d-none");
    }
  });

  for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener("click", () => {
      smallMenu.classList.remove("header__sm-menu--active");
      headerHamMenuBtn.classList.remove("d-none");
      headerHamMenuCloseBtn.classList.add("d-none");
    });
  }

  headerLogoContainer.addEventListener("click", () => {
    location.href = "index.html";
  });
}

// footer.js
function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// Run automatically when the page loads
document.addEventListener("DOMContentLoaded", loadHeader);
document.addEventListener("DOMContentLoaded", loadFooter);

const greetings = ["morning", "afternoon", "evening", "day"];
const hour = new Date().getHours();
if (hour >= 0 && hour <= 11) {
  document.getElementById("greeting").innerHTML = greetings[0];
} else if (hour >= 12 && hour <= 17) {
  document.getElementById("greeting").innerHTML = greetings[1];
} else if (hour >= 18 && hour <= 23) {
  document.getElementById("greeting").innerHTML = greetings[2];
} else {
  document.getElementById("greeting").innerHTML = greetings[3];
}
