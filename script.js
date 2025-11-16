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
const video = document.querySelector("#img-1 video"); // your main hero video

window.addEventListener("load", () => {
  // If video already loaded
  if (video.readyState >= 3) {

    loader.style.display = "none";
  } else {
    // Wait for video to load
    video.addEventListener("loadeddata", () => {
      loader.style.display = "none";
    });
  }
});

burger.addEventListener("change", function () {
  nav.classList.toggle("is-open", this.checked);
});

redirectToAnotherPage(images, "pages/gallery/gallery.html");
