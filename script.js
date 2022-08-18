// NAV BAR TRANSITIONS

// OPENS NAV AND CHANGES Z-INDEX

let menu = document.getElementById("checkbox");
let wrapper = document.getElementById("wrapper");
let myName = document.getElementById("my-name");
let subtitle = document.getElementById("subtitle");

menu.addEventListener("click", () => {
  wrapper.classList.toggle("open-nav");
  wrapper.style.zIndex = -2;

  myName.classList.toggle("lower");
  subtitle.classList.toggle("lower");

  wrapper.ontransitionend = () => {
    wrapper.style.zIndex = 2;
  };
  wrapper.style.zIndex = -2;
});

// HIDES NAVBAR AND CLOSES MENU WHEN SCROLLING
// DOWN AND SHOWS NAVBAR WHEN SCROLLING UP
let prevScroll = window.pageYOffset;

window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  let nav = document.getElementById("nav");
  let checkbox = document.getElementById("checkbox");

  if (prevScroll > currentScroll || window.pageYOffset === 0) {
    nav.style.top = "0";
  } else if (
    prevScroll < currentScroll &&
    wrapper.classList.contains("open-nav")
  ) {
    wrapper.classList.remove("open-nav");
    myName.classList.toggle("lower");
    subtitle.classList.toggle("lower");

    // THIS CHANGES THE MENU ANIMATION
    checkbox.checked = false;
  } else {
    nav.style.top = "-60px";
  }

  prevScroll = currentScroll;
};

// ENDS NAV BAR

// FRONT-PAGE TYPING ANIMATION
window.addEventListener("load", () => {
  setTimeout(() => {
    myName.classList.remove("name");
    subtitle.style.visibility = "visible";
    subtitle.classList.add("sub");
  }, 5000);
});

// INTERSECTION OBSERVER

let articles = document.querySelectorAll(".articles");

let options = {
  rootMargin: "0px",
  threshold: 0.25, //How much of the element is shown (default is zero)
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
    }
  });
}, options);

articles.forEach((article) => {
  observer.observe(article);
});
