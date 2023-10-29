window.onscroll = function () {
  scrollFunction();
};

const navBar = document.getElementById("nav");
const navLinks = document.getElementById("links");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.classList.add("active");
    navBar.style.padding = "1.5rem 15rem 0";
  } else {
    navBar.classList.remove("active");
    navBar.style.padding = "3rem 15rem 0 15rem";
    navLinks.style.transform = "trnaslateY(0)";
  }
}
