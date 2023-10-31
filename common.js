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
