// زر اللغة (عربي / English)
const langBtn = document.getElementById("lang-btn");
let isArabic = false;

langBtn.addEventListener("click", () => {
  isArabic = !isArabic;
  langBtn.textContent = isArabic ? "English" : "العربية";
  document.body.dir = isArabic ? "rtl" : "ltr";

  document.querySelector(".hero-text h1").innerHTML = isArabic
    ? "مرحبًا بك في <span class='highlight'>BitLine</span>"
    : "Welcome to <span class='highlight'>BitLine</span>";
  document.querySelector(".hero-text p").textContent = isArabic
    ? "بوابتك إلى عالم تكنولوجيا المعلومات"
    : "Your Gateway to the World of Information Technology";

  document.querySelector("#about h2").textContent = isArabic
    ? "ما هي تكنولوجيا المعلومات (IT)؟"
    : "What is Information Technology (IT)?";
  document.querySelector("#about p").textContent = isArabic
    ? "تكنولوجيا المعلومات (IT) هي العمود الفقري للعالم الرقمي الحديث، وتشمل البرمجيات والأجهزة والشبكات والأمن السيبراني والحوسبة السحابية. يعمل المتخصصون في IT على تصميم وبناء وتأمين الأنظمة التي تدير الأعمال وتربط العالم."
    : "Information Technology (IT) is the backbone of the modern digital world. It covers everything from software and hardware to networking, cybersecurity, and cloud computing.";

  document.querySelector("#downloads h2").textContent = isArabic
    ? "مكتبة برامج الـ IT"
    : "IT Software Library";

  document.querySelector("#downloads p").textContent = isArabic
    ? "استكشف وحمّل أهم أدوات الـ IT بضغطة واحدة."
    : "Discover and download the most essential IT tools instantly.";

  document.querySelector("#contact h2").textContent = isArabic
    ? "تواصل معنا"
    : "Contact Us";
  document.querySelector("#contact p").innerHTML = isArabic
    ? "لديك أسئلة أو ملاحظات؟ تواصل معنا على <b>support@bitline.tech</b>"
    : "Have questions or feedback? Reach out to us at <b>support@bitline.tech</b>";

  document.querySelector("footer p").textContent = isArabic
    ? "© 2025 BitLine | مصمم بحب 💙 لمحترفي تكنولوجيا المعلومات"
    : "© 2025 BitLine | Designed with 💙 for IT Professionals";

  document.querySelectorAll("nav ul li a").forEach(link => {
    link.textContent = isArabic ? link.dataset.ar : link.dataset.en;
  });
});
