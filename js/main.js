//header
const header = document.querySelector(".header");
window.onscroll = () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 75) {
    header.classList.add("onScroll");
    console.log(window.pageYOffset > 75);
  } else {
    header.classList.remove("onScroll");
    console.log(window.pageYOffset > 75);
  }
};
//links toggle
const icon = document.querySelector(".icon");
const links = document.querySelector(".header .links");
icon.onclick = () => {
  links.classList.toggle("active");
};
