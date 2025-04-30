// Button click event
const actionButton = document.getElementById('actionButton');
actionButton.addEventListener('click', () => {
  actionButton.textContent = "You clicked me!";
  actionButton.style.backgroundColor = '#3978c9';
});

// Hover effect on button
actionButton.addEventListener('mouseover', () => {
  actionButton.style.backgroundColor = '#3978c9';
});
actionButton.addEventListener('mouseout', () => {
  actionButton.style.backgroundColor = '#4e91f7';
});

// Image gallery navigation
const images = document.querySelectorAll('.gallery-item');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Form validation with real-time feedback
const form = document.getElementById('formData');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const feedbackMessage = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  if (!emailInput.value.includes('@')) {
    feedbackMessage.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (passwordInput.value.length < 8) {
    feedbackMessage.textContent = "Password must be at least 8 characters.";
    isValid = false;
  }

  if (isValid) {
    feedbackMessage.textContent = "Form submitted successfully!";
    feedbackMessage.style.color = "#2ecc71";
  }
});

// Real-time email format feedback
emailInput.addEventListener('input', () => {
  if (!emailInput.value.includes('@')) {
    feedbackMessage.textContent = "Email must contain '@'.";
    feedbackMessage.style.color = "#e74c3c";
  } else {
    feedbackMessage.textContent = "";
  }
});

// Secret action (double-click)
actionButton.addEventListener('dblclick', () => {
  alert("You found the secret double-click action!");
});
