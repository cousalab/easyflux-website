import './style.css';

// Smooth-scroll handled by html { scroll-behavior: smooth }
// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
  // Auto-close after a link click on mobile
  navMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      if (window.innerWidth < 768) navMenu.classList.add('hidden');
    })
  );
}

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
