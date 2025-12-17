document.addEventListener("DOMContentLoaded", () => {
  // ===== Particle Background =====
  const particleCount = 80;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const div = document.createElement("div");
    div.classList.add("particle");
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    const size = 4 + Math.random() * 6;
    div.style.width = size + "px";
    div.style.height = size + "px";
    document.body.appendChild(div);
    particles.push(div);
  }

  // ===== Mouse-follow effect =====
  document.addEventListener("mousemove", (e) => {
    particles.forEach((p, i) => {
      const speed = (i + 1) / particleCount;
      p.style.transform = `translate(${(e.clientX - window.innerWidth/2)*0.05*speed}px, ${(e.clientY - window.innerHeight/2)*0.05*speed}px)`;
    });
  });

  // ===== Scroll-based background warp =====
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const r = Math.floor(15 + 200 * scrollPercent);
    const g = Math.floor(17 + 100 * scrollPercent);
    const b = Math.floor(26 + 150 * scrollPercent);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  // ===== Project card rotation on scroll =====
  const cards = document.querySelectorAll(".project-card");
  window.addEventListener("scroll", () => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const offset = rect.top + rect.height / 2 - center;
      const rotateX = (offset / 15) * 2;
      const rotateY = (offset / 30) * 2;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });
});






