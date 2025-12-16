// Select all project cards
const cards = document.querySelectorAll('.project-card');

// Add hover animation
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
    card.style.boxShadow = '0 0 30px rgba(80, 160, 255, 0.6)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 0 15px rgba(80, 160, 255, 0.2)';
  });
});

