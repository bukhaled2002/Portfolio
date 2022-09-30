const skills = document.querySelectorAll(".skills-boxes .progress span");

const skillsSection = document.querySelector(".skills");
const skillbox = document.querySelectorAll(".skills-boxes .box>span");
const aboutSection = document.querySelector(".about");
const aboutImg = document.querySelector(".about .img");
window.onscroll = function () {};
//header
const header = document.querySelector(".header");
const navigation = document.querySelectorAll(".header .links li a");
window.onscroll = () => {
  // console.log(window.pageYOffset);
  if (window.pageYOffset > 75) {
    header.classList.add("onScroll");
    // console.log(window.pageYOffset > 75);
  } else {
    header.classList.remove("onScroll");
    // console.log(window.pageYOffset > 75);
  }
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    skills.forEach((skill) => {
      console.log(skill.dataset.progress);
      skill.style.width = skill.dataset.progress;
      skill.parentElement.parentElement.dataset.progress;
    });
  } else {
    skills.forEach((skill) => {
      skill.style.width = 0;
    });
  }
  if (window.scrollY >= aboutSection.offsetTop - 250) {
    aboutImg.classList.add("on-scroll");
  }
};
//links toggle
const icon = document.querySelector(".icon");
const links = document.querySelector(".header .links");
icon.onclick = () => {
  links.classList.toggle("active");
  icon.classList.toggle("active");
};

//testimonials spin
// let current = 1,
//   numOfShow = 3;

// const testimonials = document.querySelectorAll(".testimonials .zoom-box");
// for (let i = 0; i < current * numOfShow; i++) {}
// scrollto functon
function scrollto(elements) {
  elements.forEach((element) => {
    addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.dataset.nav != null) {
        document.querySelector(e.target.dataset.nav).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}
scrollto(navigation);
//skills box navigate

//gallery
let gallery = document.querySelector(".gallery");
let pictures = document.querySelectorAll(".gallery .container > div");
pictures.forEach((picture) => {
  picture.onclick = (e) => {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    gallery.appendChild(overlay);
    let box = document.createElement("div");
    let img = document.createElement("img");
    img.src = e.target.src;
    box.classList.add("popup-box");
    let close = document.createElement("span");
    close.innerHTML = "X";
    close.classList.add("close");
    box.appendChild(close);
    box.appendChild(img);
    gallery.appendChild(box);
    close.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target == close || e.target == overlay) {
        box.remove();
        overlay.remove();
      }
    });
  };
});
