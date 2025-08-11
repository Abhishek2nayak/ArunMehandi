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

burger.addEventListener("change", function () {
  nav.classList.toggle("is-open", this.checked);
});

redirectToAnotherPage(images, "pages/gallery/gallery.html");
