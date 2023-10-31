window.onscroll = function () {
  scrollFunction();
};

// handle big navbar on scroll
const navBar = document.getElementById("nav");
const navLinks = document.getElementById("links");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
}

// handle small navbar menu

const burger = document.getElementById("burger");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll(".overlay a");

burger.addEventListener("click", (e) => {
  e.preventDefault();

  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    if (!overlay.classList.contains("hidden")) {
      overlay.classList.add("hidden");
    } else {
      return;
    }
  })
);

// handle overlay with screen size

window.addEventListener("resize", () => {
  if (window.innerWidth > 900 && !overlay.classList.contains("hidden")) {
    overlay.classList.add("hidden");
  }
});
