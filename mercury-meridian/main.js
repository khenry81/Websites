/* ─────────────────────────────────────────
   Mercury Meridian — main.js
───────────────────────────────────────── */

(function () {
  'use strict';

  // ── Announcement Banner ──
  const banner = document.getElementById('announcement-banner');
  const closeBtn = document.getElementById('close-banner');
  const header = document.getElementById('site-header');

  if (closeBtn && banner) {
    closeBtn.addEventListener('click', () => {
      banner.classList.add('hidden');
      header.classList.add('banner-hidden');
      document.documentElement.style.setProperty('--banner-height', '0px');
    });
  }

  // ── Sticky Nav on Scroll ──
  function updateNavOnScroll() {
    const scrolled = window.scrollY > 10;
    header.classList.toggle('scrolled', scrolled);
  }
  window.addEventListener('scroll', updateNavOnScroll, { passive: true });
  updateNavOnScroll();

  // ── Mobile Menu ──
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ── Typewriter Effect ──
  const words = [
    'work',
    'scale',
    'last',
    'enable growth',
    'stay secure',
    'perform',
  ];
  const el = document.getElementById('typewriter-word');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTimeout;

  function typewriterTick() {
    const current = words[wordIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        typingTimeout = setTimeout(typewriterTick, 2200);
        return;
      }
      typingTimeout = setTimeout(typewriterTick, 80);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingTimeout = setTimeout(typewriterTick, 300);
        return;
      }
      typingTimeout = setTimeout(typewriterTick, 45);
    }
  }

  if (el) {
    typingTimeout = setTimeout(typewriterTick, 2000);
  }

  // ── Fade-in on Scroll (service cards, about pillars) ──
  const observerTargets = document.querySelectorAll(
    '.service-card, .pillar, .about-heading, .mission-heading'
  );

  if ('IntersectionObserver' in window && observerTargets.length) {
    observerTargets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    observerTargets.forEach(el => io.observe(el));
  }

})();
