// ------------------- Typed.js Hero Section -------------------
var typed = new Typed('#typed', {
  strings: [
    "تعلم الشبكات بطريقة مبسطة!",
    "تعرف على السيرفرات والأمان!",
    "ابدأ البرمجة وطور مهاراتك!"
  ],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// ------------------- Smooth Scroll -------------------
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// ------------------- Canvas Background -------------------
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const points = [];
for(let i = 0; i < 60; i++){
  points.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() - 0.5) * 1.2,
    dy: (Math.random() - 0.5) * 1.2
  });
}

function animateCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI*2);
    ctx.fillStyle = "rgba(255,140,66,0.5)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if(p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateCanvas);
}
animateCanvas();

// ------------------- Chatbot AI -------------------
const chatbotMessages = document.getElementById('chatbot-messages');
function sendMessage(){
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();
  if(!message) return;

  const userMsg = document.createElement('div');
  userMsg.textContent = "أنت: " + message;
  chatbotMessages.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.textContent = "BIT LINE AI: " + generateAIResponse(message);
  chatbotMessages.appendChild(botMsg);

  input.value = '';
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateAIResponse(msg){
  msg = msg.toLowerCase();
  if(msg.includes("شبكات")) return "ابدأ بتعلم أساسيات TCP/IP وأجهزة الشبكة مثل Routers وSwitches.";
  if(msg.includes("سيرفرات")) return "تعلم إدارة السيرفرات، النسخ الاحتياطي، وقواعد البيانات.";
  if(msg.includes("أمان") || msg.includes("سيبر")) return "ابدأ بحماية الأنظمة، واستخدام Firewalls وAntivirus.";
  if(msg.includes("برمجة")) return "ابدأ بتعلم Python أو JavaScript لإنشاء تطبيقات ومشاريع عملية.";
  return "أرحب بسؤالك! سأحاول مساعدتك بأفضل طريقة ممكنة.";
}

// ------------------- Language Toggle (dummy) -------------------
function toggleLang(){
  alert('تغيير اللغة AR/EN');
}

// ------------------- Window Resize -------------------
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
