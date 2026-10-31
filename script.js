import {
  redirectToAnotherPage,
  viewMoreEvent,
  cursorMove,
  Menu,
} from "./utils.js";

const cursor = document.querySelector(".cursor");
const main = document.querySelector(".main");
const serviceCard = document.querySelectorAll(".card-container");
const bottomNav = document.querySelector(".bottom-nav");
const images = document.querySelectorAll(".img");

const burger = document.querySelector('.hamburger input[type="checkbox"]');
const nav = document.querySelector("#main-nav");

const loader = document.getElementById("loader");
const video = document.querySelector("#img-1 video");

if (video && loader) {
  window.addEventListener("load", () => {
    if (video.readyState >= 3) {
      loader.style.display = "none";
    } else {
      video.addEventListener("loadeddata", () => {
        loader.style.display = "none";
      });
    }
  });
}

if (burger && nav) {
  burger.addEventListener("change", function () {
    nav.classList.toggle("is-open", this.checked);
  });
}

redirectToAnotherPage(images, "pages/gallery/gallery.html");

// FAQ toggle
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
