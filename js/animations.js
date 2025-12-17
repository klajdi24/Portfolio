document.addEventListener("DOMContentLoaded", () => {
  // ===== Scroll-based background color warp =====
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    // Strong, obvious color change
    const r = Math.floor(15 + 200 * scrollPercent);
    const g = Math.floor(17 + 100 * scrollPercent);
    const b = Math.floor(26 + 150 * scrollPercent);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  // ===== Particle background =====
  const particleCount = 80; // more particles for effect
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const div = document.createElement("div");
    div.classList.add("particle");
    div.style.left = Math.random() * 100 + "vw";
    div.style.top = Math.random() * 100 + "vh";
    div.style.width = 5 + Math.random() * 5 + "px";
    div.style.height = div.style.width;
    document.body.appendChild(div);
    particles.push(div);
  }

  // Mouse-follow effect
  document.addEventListener("mousemove", (e) => {
    particles.forEach((p, i) => {
      const speed = (i + 1) / particleCount;
      p.style.transform = `translate(${(e.clientX - window.innerWidth/2)*0.05*speed}px, ${(e.clientY - window.innerHeight/2)*0.05*speed}px)`;
    });
  });

  // ===== Project card rotation on scroll =====
  const cards = document.querySelectorAll(".project-card");
  window.addEventListener("scroll", () => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const offset = rect.top + rect.height / 2 - center;
      const rotateX = offset / 15; // bigger rotation
      const rotateY = offset / 30;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });
});




