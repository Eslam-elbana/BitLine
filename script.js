// فتح روابط التحميل فعليًا
function startDownload(link) {
  window.open(link, "_blank");
}

// وضع ليلي تلقائي
const hours = new Date().getHours();
if (hours >= 19 || hours < 6) {
  document.body.style.backgroundColor = "#091020";
}

// انتقال أنيق بين الصفحات
document.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", e => {
    if (a.getAttribute("href").includes(".html")) {
      e.preventDefault();
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = a.href;
      }, 300);
    }
  });
});
