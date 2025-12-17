// ===== Experimental Scroll + Mouse Interactivity =====

// Smooth scroll-based background color shift
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;

  // Background gradient warp
  const r = Math.floor(15 + 40 * scrollPercent);
  const g = Math.floor(17 + 60 * scrollPercent);
  const b = Math.floor(26 + 100 * scrollPercent);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// ===== Particle background effect =====
const particleCount = 50;
const particles = [];

for (let i = 0; i < particleCount; i++) {
  const div = document.createElement("div");
  div.classList.add("particle");
  div.style.left = Math.random() * 100 + "vw";
  div.style.top = Math.random() * 100 + "vh";
  div.style.width = 3 + Math.random() * 3 + "px";
  div.style.height = div.style.width;
  document.body.appendChild(div);
  particles.push(div);
}

// Mouse-follow effect
document.addEventListener("mousemove", (e) => {
  particles.forEach((p, i) => {
    const speed = (i + 1) / particleCount;
    p.style.transform = `translate(${(e.clientX - window.innerWidth/2)*0.02*speed}px, ${(e.clientY - window.innerHeight/2)*0.02*speed}px)`;
  });
});

// ===== Project card lift on scroll =====
const cards = document.querySelectorAll(".project-card");
window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const center = window.innerHeight / 2;
    const offset = rect.top + rect.height / 2 - center;
    const rotate = offset / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotate}deg)`;
  });
});



