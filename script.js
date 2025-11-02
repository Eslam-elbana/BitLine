const typingText = document.getElementById("typing-text");
const textArray = [
  "Explore the world of IT with Artificial Intelligence 💻",
  "Learn computer basics step by step.",
  "BitLine — Designed for IT minds 🧠"
];

let index = 0;
let char = 0;
let isDeleting = false;

function typeEffect() {
  const text = textArray[index];
  typingText.textContent = text.substring(0, char);

  if (!isDeleting && char < text.length) {
    char++;
    setTimeout(typeEffect, 80);
  } else if (isDeleting && char > 0) {
    char--;
    setTimeout(typeEffect, 40);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % textArray.length;
    setTimeout(typeEffect, 1500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
