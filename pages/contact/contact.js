function csendMessage() {
  let name = document.getElementById("cname").value;
  let email = document.getElementById("cemail").value;
  let phone = document.getElementById("cphone").value;
  let message = document.getElementById("cmessage").value;

  let whatsappNumber = "YOUR_PHONE_NUMBER"; // Example: "919876543210" without +

  let text = `*Contact Form Submission*%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Message: ${message}`;

  let url = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(url, "_blank");
}

const burger = document.querySelector('.hamburger input[type="checkbox"]');
const nav = document.querySelector("#main-nav");

burger.addEventListener("change", function () {
  nav.classList.toggle("is-open", this.checked);
});
