// ==========================
// Header scroll effect
// ==========================
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ==========================
// Hero background slider
// ==========================
const images = [
  'https://source.unsplash.com/1600x900/?technology,computer',
  'https://source.unsplash.com/1600x900/?programming,code',
  'https://source.unsplash.com/1600x900/?it,network',
  'https://source.unsplash.com/1600x900/?software,technology'
];

let currentIndex = 0;
const heroSection = document.getElementById('hero');

function changeBackground() {
  heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
changeBackground();

// ==========================
// Download button
// ==========================
function startDownload() {
  const fileUrl = 'https://example.com/your-software.exe';
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  alert('Download started!');
}
