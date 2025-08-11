let counters = document.querySelectorAll(".count");
let duration = 2000; // 2 seconds per counter for smooth effect

counters.forEach((item) => {
  let endNumber = parseInt(item.dataset.number);
  let startTime = null;

  function animateCounter(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = (timestamp - startTime) / duration;

    // Ease out function: fast start, slow end
    let easedProgress = 1 - Math.pow(1 - progress, 4);

    let current = Math.floor(easedProgress * endNumber);

    item.innerHTML = current.toLocaleString() + "+";

    if (progress < 1) {
      requestAnimationFrame(animateCounter);
    } else {
      item.innerHTML = endNumber.toLocaleString() + "+";
    }
  }

  requestAnimationFrame(animateCounter);
});

const burger = document.querySelector('.hamburger input[type="checkbox"]');
const nav = document.querySelector("#main-nav");

burger.addEventListener("change", function () {
  nav.classList.toggle("is-open", this.checked);
});
