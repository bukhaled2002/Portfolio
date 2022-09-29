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

//testimonials spin
// let current = 1,
//   numOfShow = 3;

// const testimonials = document.querySelectorAll(".testimonials .zoom-box");
// for (let i = 0; i < current * numOfShow; i++) {}
