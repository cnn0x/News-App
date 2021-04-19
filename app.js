let scrollPos = 0;
const screenBody = document.querySelector(".home-page");
const scrollCheck = document.querySelector(".scroll-check");
const topBar = document.querySelector(".top-nav");
const bottomBar = document.querySelector(".bottom-nav");
const width = document.querySelectorAll(".content").offsetWidth;
const trendsPage = document.querySelector(".trends-page");
const videosPage = document.querySelector(".videos-page");
const bookmarkPage = document.querySelector(".bookmark-page");

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

document.addEventListener("click", function (e) {
  if (e.target.className === "content-box") {
    document.querySelector(".post-active").style.transform = "translateY(0)";
  }
});

document.addEventListener("click", function (e) {
  if (e.target.id === "cb") {
    document.querySelector(".post-active").style.transform = "translateY(0)";
  }
});

function closePost() {
  document.querySelector(".post-active").style.transform = "translateY(100%)";
}

function rightMenuOpen() {
  document.querySelector(".right-menu").style.transform = "translateX(0)";
  document.querySelector(".left-menu").style.transform = "translateX(-100%)";
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
  trendsPage.style.transform = "translateY(100%)";
  videosPage.style.transform = "translateY(100%)";
  bookmarkPage.style.transform = "translateY(100%)";
});
bottomLinks2.addEventListener("click", function () {
  bottomLinks2.classList.add("bl-active");
  bottomLinks3.classList.remove("bl-active");
  bottomLinks1.classList.remove("bl-active");
  bottomLinks4.classList.remove("bl-active");
  bottomLinks2.setAttribute("data-value", "Trend");
  trendsPage.style.transform = "translateY(0)";
  videosPage.style.transform = "translateY(100%)";
  bookmarkPage.style.transform = "translateY(100%)";
});
bottomLinks3.addEventListener("click", function () {
  bottomLinks3.classList.add("bl-active");
  bottomLinks2.classList.remove("bl-active");
  bottomLinks1.classList.remove("bl-active");
  bottomLinks4.classList.remove("bl-active");
  bottomLinks3.setAttribute("data-value", "Videos");
  trendsPage.style.transform = "translateY(100%)";
  videosPage.style.transform = "translateY(0)";
  bookmarkPage.style.transform = "translateY(100%)";
});
bottomLinks4.addEventListener("click", function () {
  bottomLinks4.classList.add("bl-active");
  bottomLinks3.classList.remove("bl-active");
  bottomLinks1.classList.remove("bl-active");
  bottomLinks2.classList.remove("bl-active");
  bottomLinks4.setAttribute("data-value", "Bookmarked");
  trendsPage.style.transform = "translateY(100%)";
  videosPage.style.transform = "translateY(100%)";
  bookmarkPage.style.transform = "translateY(0)";
});

const content = document.querySelector(".content");
const funFact = document.querySelector(".fun-fact");

function closeff() {
  funFact.style.transform = "translateY(-100%)";
}

document.addEventListener("click", function (e) {
  if (e.target.className == "content") {
    funFact.style.transform = "translateY(0)";
  }
});

let ts;
let te;
let tc;
let isT = false;
let ic = 1000;

funFact.addEventListener("mousedown", (e) => {
  ts = e.clientX;
});

funFact.addEventListener("mouseup", (e) => {
  te = e.clientX;

  if (ts - te > 0) {
    ic++;
    document.querySelector(".fimg").src =
      "https://source.unsplash.com/500x" + ic;
  }
});

const loadingIcon = document.querySelector(".loading");

funFact.addEventListener("touchstart", (e) => {
  ts = e.touches[0].clientX;
});

funFact.addEventListener("touchmove", (e) => {
  te = e.touches[0].clientX;

  if (ts - te > 50) {
    loadingIcon.style.display = "block";
    ic++;
    document.querySelector(".fimg").src =
      "https://source.unsplash.com/500x" + ic;
  }

  setTimeout(() => {
    loadingIcon.style.display = "none";
  }, 2000);
});

function bookmarked() {
  document.querySelector(".fa-bookmark").classList.toggle("fas");
}

document.querySelector("bookmark").addEventListener("click", function () {
  document.querySelector(".fa-bookmark").classList.toggle("fas");
});

function profileOpen() {
  document.querySelector(".left-menu").style.transform = "translateX(0)";
  document.querySelector(".right-menu").style.transform = "translateX(100%)";
}

function profileClose() {
  document.querySelector(".left-menu").style.transform = "translateX(-100%)";
}
