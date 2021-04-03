let scrollPos = 0;
const screenBody = document.querySelector(".home-page");
const scrollCheck = document.querySelector(".scroll-check");
const topBar = document.querySelector(".top-nav");
const bottomBar = document.querySelector(".bottom-nav");
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
  slider.scrollLeft = scrollLeft - walk * 3;
});

const post = document.querySelector(".content-box");

post.addEventListener("click", function () {
  document.querySelector(".post-active").style.transform = "translateY(0)";
});

function closePost() {
  document.querySelector(".post-active").style.transform = "translateY(100%)";
}

function rightMenuOpen() {
  document.querySelector(".right-menu").style.transform = "translateX(0)";
}

function rightMenuClose() {
  document.querySelector(".right-menu").style.transform = "translateX(100%)";
}

const bottomLinks1 = document.querySelector(".bl1");
const bottomLinks2 = document.querySelector(".bl2");
const bottomLinks3 = document.querySelector(".bl3");
const bottomLinks4 = document.querySelector(".bl4");

let pageCounter = 1;
bottomLinks1.setAttribute("data-value", "Feed");

bottomLinks1.addEventListener("click", function () {
  bottomLinks1.classList.add("bl-active");
  bottomLinks3.classList.remove("bl-active");
  bottomLinks2.classList.remove("bl-active");
  bottomLinks4.classList.remove("bl-active");
  bottomLinks1.setAttribute("data-value", "Feed");
});
bottomLinks2.addEventListener("click", function () {
  bottomLinks2.classList.add("bl-active");
  bottomLinks3.classList.remove("bl-active");
  bottomLinks1.classList.remove("bl-active");
  bottomLinks4.classList.remove("bl-active");
  bottomLinks2.setAttribute("data-value", "Trend");
});
bottomLinks3.addEventListener("click", function () {
  bottomLinks3.classList.add("bl-active");
  bottomLinks2.classList.remove("bl-active");
  bottomLinks1.classList.remove("bl-active");
  bottomLinks4.classList.remove("bl-active");
  bottomLinks3.setAttribute("data-value", "Videos");
});
bottomLinks4.addEventListener("click", function () {
  bottomLinks4.classList.add("bl-active");
  bottomLinks3.classList.remove("bl-active");
  bottomLinks1.classList.remove("bl-active");
  bottomLinks2.classList.remove("bl-active");
  bottomLinks4.setAttribute("data-value", "Bookmarked");
});

const content = document.querySelector(".content");
const funFact = document.querySelector(".fun-fact");

content.addEventListener("click", function () {
  funFact.style.transform = "translateY(0)";
});

function closeff() {
  funFact.style.transform = "translateY(-100%)";
}

const ptr = document.querySelector(".p-tr");
const wp = document.querySelector(".mobile-container");

let start;
let end;
let change;
let isStarted = false;

wp.addEventListener("mousedown", function (e) {
  start = e.clientY;
  console.log("start", start);
  isStarted = true;
});

wp.addEventListener("mousemove", function (e) {
  if (!isStarted) return;
  if (screenBody.scrollTop === 0) {
    end = e.clientY;
    console.log("end", end);
    let change = end - start;
    console.log("change", change);
    ptr.style.height = change + "px";
  }
});

wp.addEventListener("mouseup", function (e) {
  isStarted = false;
});
