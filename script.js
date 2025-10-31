// خلفية متحركة
const canvas = document.getElementById("bg-animation");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.6 - 0.3;
    this.speedY = Math.random() * 0.6 - 0.3;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "#1b5fff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function connect() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const distance = dx * dx + dy * dy;
      if (distance < 9000) {
        ctx.strokeStyle = "rgba(94, 160, 255, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  connect();
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

// ظهور الأقسام تدريجيًا عند التمرير
const sections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// زرار التحميل مع Progress Bar
const downloadBtns = document.querySelectorAll(".download-btn");
downloadBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.dataset.link;
    const bar = btn.nextElementSibling;
    bar.style.width = "100%";
    setTimeout(() => {
      bar.style.width = "0";
      window.open(link, "_blank");
    }, 3000);
  });
});

const langBtn = document.getElementById("lang-btn");
let isArabic = false;

langBtn.addEventListener("click", () => {
  isArabic = !isArabic;
  langBtn.textContent = isArabic ? "English" : "العربية";
  document.body.dir = isArabic ? "rtl" : "ltr";

  // تغيير العناوين الأساسية
  document.querySelector(".hero-text h1").innerHTML = isArabic
    ? "مرحبًا بك في <span class='highlight'>BitLine</span>"
    : "Welcome to <span class='highlight'>BitLine</span>";
  document.querySelector(".hero-text p").textContent = isArabic
    ? "بوابتك إلى عالم تكنولوجيا المعلومات"
    : "Your Gateway to the World of Information Technology";

  document.querySelector("#about h2").textContent = isArabic
    ? "ما هي تكنولوجيا المعلومات (IT)؟"
    : "What is Information Technology (IT)?";

  document.querySelector("#downloads h2").textContent = isArabic
    ? "أهم أدوات الـ IT"
    : "Essential IT Tools";

  document.querySelector("#contact h2").textContent = isArabic
    ? "تواصل معنا"
    : "Contact Us";

  document.querySelector("#contact p").innerHTML = isArabic
    ? "لديك أسئلة أو ملاحظات؟ تواصل معنا على <b>support@bitline.tech</b>"
    : "Have questions or feedback? Reach out to us at <b>support@bitline.tech</b>";

  // تغيير عناصر القوائم
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.textContent = isArabic ? link.dataset.ar : link.dataset.en;
  });

  // تغيير الفوتر
  document.querySelector("footer p").textContent = isArabic
    ? "© 2025 BitLine | مصمم بحب 💙 لمحترفي تكنولوجيا المعلومات"
    : "© 2025 BitLine | Designed with 💙 for IT Professionals";
});


