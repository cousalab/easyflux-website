import './style.css';

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('hidden'));
  navMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      if (window.innerWidth < 768) navMenu.classList.add('hidden');
    })
  );
}

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// =========== CMS content loader ===========
// Fetches /content/site.json (written by the admin panel) and replaces
// elements tagged with data-cms / data-cms-src / data-cms-href / data-cms-mailto.
// Falls back silently if the file is missing or unreadable so the hard-coded
// content in index.html stays visible.
(async function loadCmsContent() {
  try {
    const res = await fetch('/content/site.json', { cache: 'no-store' });
    if (!res.ok) return;
    const c = await res.json();

    // Replace text content where elements carry [data-cms="key"]
    document.querySelectorAll('[data-cms]').forEach((el) => {
      const key = el.getAttribute('data-cms');
      if (!key) return;
      // contact_linkedin_display gets a display-stripped LinkedIn URL
      if (key === 'contact_linkedin_display' && c.contact_linkedin) {
        el.textContent = c.contact_linkedin.replace(/^https?:\/\//, '');
        return;
      }
      if (c[key] !== undefined && c[key] !== null && c[key] !== '') {
        el.textContent = c[key];
      }
    });

    // Replace image src where elements carry [data-cms-src="key"]
    document.querySelectorAll('[data-cms-src]').forEach((el) => {
      const key = el.getAttribute('data-cms-src');
      if (key && c[key]) {
        el.removeAttribute('onerror');
        el.src = c[key];
      }
    });

    // Replace href where elements carry [data-cms-href="key"]
    document.querySelectorAll('[data-cms-href]').forEach((el) => {
      const key = el.getAttribute('data-cms-href');
      if (key && c[key]) el.href = c[key];
    });

    // Replace mailto: hrefs where elements carry [data-cms-mailto="email_key"]
    document.querySelectorAll('[data-cms-mailto]').forEach((el) => {
      const key = el.getAttribute('data-cms-mailto');
      if (key && c[key]) el.href = 'mailto:' + c[key];
    });
  } catch {
    // ignore - hard-coded fallback content stays
  }
})();
