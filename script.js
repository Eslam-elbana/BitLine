// ✅ نص متغير في الهيرو (كتابة متحركة)
const typingText = document.getElementById("typing-text");
const textArray = [
  "Welcome to BitLine — The Future of IT Excellence 💻",
  "Explore programs, drivers, and complete media tools.",
  "Discover the world of Information Technology with us 🚀"
];

let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = textArray[textIndex];
  typingText.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, 80);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 40);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 1500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// ✅ تأثير تغيير شكل الهيدر عند التمرير
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ✅ زر تغيير اللغة
const langBtn = document.getElementById("lang-btn");
let isArabic = false;

langBtn.addEventListener("click", () => {
  const heroTitle = document.querySelector(".hero-text h1");
  const aboutTitle = document.querySelector(".about h2");
  const aboutText = document.querySelector(".about p");
  const downloadsTitle = document.querySelector(".downloads h2");
  const contactTitle = document.querySelector(".contact h2");
  const aboutMeTitle = document.querySelector(".aboutme h2");
  const footerText = document.querySelector("footer p");

  if (!isArabic) {
    // التحويل للعربية
    heroTitle.innerHTML = "قسم <span class='highlight'>نظم المعلومات IT</span>";
    aboutTitle.textContent = "ما هو قسم الـ IT؟";
    aboutText.textContent =
      "قسم تكنولوجيا المعلومات هو القلب النابض لأي مؤسسة عصرية. يختص بدراسة الشبكات، البرمجة، قواعد البيانات، والأمن السيبراني. يهدف القسم إلى إعداد كوادر قادرة على التعامل مع التكنولوجيا الحديثة وتطوير حلول ذكية للمشكلات التقنية.";
    downloadsTitle.textContent = "تحميل البرامج";
    contactTitle.textContent = "تواصل معنا";
    aboutMeTitle.textContent = "عن المصمم";
    footerText.textContent = "جميع الحقوق محفوظة © لموقع BitLine — تصميم: إسلام البنا";
    langBtn.textContent = "EN";
    isArabic = true;
    document.body.style.direction = "rtl";
  } else {
    // العودة للإنجليزية
    heroTitle.innerHTML = "Welcome to <span class='highlight'>BitLine</span>";
    aboutTitle.textContent = "About IT";
    aboutText.textContent =
      "The IT department is the backbone of any modern organization, focusing on networking, programming, databases, and cybersecurity — preparing professionals for the digital future.";
    downloadsTitle.textContent = "Downloads";
    contactTitle.textContent = "Contact Us";
    aboutMeTitle.textContent = "About the Developer";
    footerText.textContent = "All rights reserved © BitLine — Designed by Eslam Elbana";
    langBtn.textContent = "AR";
    isArabic = false;
    document.body.style.direction = "ltr";
  }
});
