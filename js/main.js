/* ── HAMBURGER MENU ──────────────── */
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── NAV SCROLL ──────────────────── */
const nav = document.querySelector('nav');
const ribbon = document.querySelector('.ribbon');
if (nav && !nav.classList.contains('nav-solid')) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 80;
    nav.classList.toggle('scrolled', scrolled);
    if (ribbon) {
      ribbon.style.transform = scrolled ? 'translateY(-100%)' : 'translateY(0)';
      ribbon.style.transition = 'transform 0.4s ease';
    }
  });
}

/* ── SCROLL REVEAL ───────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── SMOOTH SCROLL ───────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ── FORM SUBMIT ─────────────────── */
function handleSubmit(btn) {
  const original = btn.innerHTML;
  btn.innerHTML = 'Inquiry Sent &#10003;';
  btn.classList.add('sent');
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = original;
    btn.classList.remove('sent');
    btn.disabled = false;
  }, 5000);
}
