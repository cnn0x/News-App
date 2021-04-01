let scrollPos = 0;
const screenBody = document.querySelector(".screen-body");
const scrollCheck = document.querySelector(".scroll-check");
const topBar = document.querySelector(".screen-top");
const bottomBar = document.querySelector(".screen-bottom");
const width = document.querySelectorAll(".content").offsetWidth;
const slider = document.querySelector(".imp-news");

screenBody.addEventListener("scroll", function () {
  if (scrollCheck.getBoundingClientRect().top > scrollPos) {
    scrollPos = scrollCheck.getBoundingClientRect().top;
    topBar.style.transform = "translateY(0)";
    bottomBar.style.transform = "translateY(0)";
  } else {
    scrollPos = scrollCheck.getBoundingClientRect().top;
    topBar.style.transform = "translateY(-50px)";
    bottomBar.style.transform = "translateY(50px)";
  }
});
