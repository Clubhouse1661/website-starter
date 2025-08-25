// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
}

// Smooth scroll for internal anchors (fallback for browsers without CSS smooth)
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Contact form simple validation + fake submit
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl && (statusEl.textContent = 'Sending…');

  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();
  const message = (data.get('message') || '').toString().trim();

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    statusEl && (statusEl.textContent = 'Please fill all fields with a valid email.');
    statusEl && statusEl.classList.remove('ok');
    return;
  }

  // Fake send delay
  await new Promise(r => setTimeout(r, 800));
  statusEl && (statusEl.textContent = 'Thanks! Your message was sent.');
  statusEl && statusEl.classList.add('ok');
  form.reset();
});

// Year in footer
const yearEl = document.getElementById('year');
yearEl && (yearEl.textContent = String(new Date().getFullYear()));
