/* ========== simple network particles + lines on canvas ========== */
function createNetworkCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  let w=canvas.width = window.innerWidth;
  let h=canvas.height = window.innerHeight;

  const nodes = [];
  const NODE_COUNT = Math.max(12, Math.floor(w/120));

  function rand(min, max){ return Math.random()*(max-min)+min; }

  function init() {
    nodes.length = 0;
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    for (let i=0;i<NODE_COUNT;i++){
      nodes.push({
        x: rand(0,w),
        y: rand(0,h),
        vx: rand(-0.3,0.3),
        vy: rand(-0.3,0.3),
        r: rand(1.5,3.5),
        alpha: rand(0.4,0.95)
      });
    }
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    // faint grid overlay
    const grd = ctx.createLinearGradient(0,0,w,h);
    grd.addColorStop(0, 'rgba(6,12,28,0.22)');
    grd.addColorStop(1, 'rgba(3,8,20,0.22)');
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,w,h);

    // draw lines between nearby nodes
    for (let i=0;i<nodes.length;i++){
      for (let j=i+1;j<nodes.length;j++){
        const a=nodes[i], b=nodes[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const dist=Math.hypot(dx,dy);
        if(dist < 160){
          const t = 1 - dist/160;
          ctx.strokeStyle = `rgba(31,182,255,${0.08 * t})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }

    // draw nodes
    nodes.forEach(n=>{
      ctx.beginPath();
      ctx.fillStyle = `rgba(31,182,255,${0.12 * n.alpha})`;
      ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
      ctx.fill();
    });
  }

  function step(){
    nodes.forEach(n=>{
      n.x += n.vx;
      n.y += n.vy;
      if(n.x < 0 || n.x > w) n.vx *= -1;
      if(n.y < 0 || n.y > h) n.vy *= -1;
    });
    draw();
    requestAnimationFrame(step);
  }

  window.addEventListener('resize', ()=> init());
  init();
  step();
  return canvas;
}

/* create two canvases (home + downloads) if exist */
createNetworkCanvas('networkCanvas');
createNetworkCanvas('networkCanvas2');


/* ========== header scroll small effect ========== */
window.addEventListener('scroll', ()=> {
  const header = document.querySelector('header');
  if(window.scrollY > 40) header.style.backdropFilter = 'blur(10px)';
  else header.style.backdropFilter = 'blur(4px)';
});


/* ========== download open (opens official link in new tab) ========== */
function startDownload(link) {
  if(!link) return;
  // If direct file URL and you want to force download, you can use:
  // window.location.href = link;
  window.open(link, '_blank');
}

/* ========== Page transition (small fade) ========== */
document.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href') || '';
    if(href.includes('.html')){
      e.preventDefault();
      document.body.style.transition = 'opacity 0.28s ease';
      document.body.style.opacity = '0';
      setTimeout(()=> window.location.href = href, 300);
    }
  });
});

/* ========== Auto dark tweak (example) ========== */
(function autoTheme(){
  const hour = new Date().getHours();
  if(hour >= 19 || hour < 6){
    // already dark by default; could toggle accents
  }
})();
