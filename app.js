let scrollPos = 0;
const screenBody = document.querySelector(".screen-body");
const scrollCheck = document.querySelector(".scroll-check");
const topBar = document.querySelector(".screen-top");
const bottomBar = document.querySelector(".screen-bottom");
const width = document.querySelectorAll(".content").offsetWidth;

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

const slider = document.querySelector(".imp-news");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});

const post = document.querySelector(".post-content");

post.addEventListener("click", function () {
  document.querySelector(".post-active").style.display = "block";
});

function closePost() {
  document.querySelector(".post-active").style.display = "none";
}
