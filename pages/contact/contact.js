function clearErrors() {
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".error-input")
    .forEach((el) => el.classList.remove("error-input"));
}

function csendMessage() {
  alert("Sending message...");
  clearErrors();

  let nameField = document.getElementById("cname");
  let emailField = document.getElementById("cemail");
  let phoneField = document.getElementById("cphone");
  let messageField = document.getElementById("cmessage");

  let name = nameField.value.trim();
  let email = emailField.value.trim();
  let phone = phoneField.value.trim();
  let message = messageField.value.trim();

  let isValid = true;

  // Name validation
  if (name.length < 2) {
    showError(nameField, "Please enter your name (at least 2 characters).");
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError(emailField, "Please enter a valid email address.");
    isValid = false;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    showError(phoneField, "Please enter a valid 10-digit phone number.");
    isValid = false;
  }

  // Message validation
  if (message.length < 5) {
    showError(messageField, "Please enter a message (at least 5 characters).");
    isValid = false;
  }

  if (!isValid) return; // Stop if validation fails

  // Send WhatsApp message
  let whatsappNumber = "916397012423"; // Your WhatsApp number
  let text =
    `*Contact Form Submission*%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Email: ${encodeURIComponent(email)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Message: ${encodeURIComponent(message)}`;

  let url = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(url, "_blank");
}

function showError(inputElement, message) {
  let errorEl = inputElement.parentElement.querySelector(".error-message");
  if (errorEl) {
    errorEl.innerText = message;
    errorEl.style.display = "block";
  }
  inputElement.classList.add("error-input");
}
