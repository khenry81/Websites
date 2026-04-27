/* ============================================================
   VANTAGE — Main Script
   ============================================================ */

// --- Scrolled nav state -----------------------------------
const header = document.getElementById('site-header');

const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 50);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load

// --- Mobile menu toggle -----------------------------------
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });
}

// --- Scroll reveal (IntersectionObserver) -----------------
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => revealObserver.observe(el));
} else {
  // Fallback: show all immediately
  reveals.forEach((el) => el.classList.add('is-visible'));
}

// --- Newsletter / footer form submit ----------------------
document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn  = form.querySelector('button[type="submit"]');

    if (!emailInput?.value || !submitBtn) return;

    const original = submitBtn.textContent;
    submitBtn.textContent = 'Subscribed!';
    submitBtn.disabled = true;
    emailInput.value = '';

    setTimeout(() => {
      submitBtn.textContent = original;
      submitBtn.disabled = false;
    }, 3000);
  });
});

// --- Respect reduced motion for marquee ------------------
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const setMarqueeState = (reduceMotion) => {
  const inner = document.querySelector('.logos__inner');
  if (inner) inner.style.animationPlayState = reduceMotion ? 'paused' : 'running';
};

setMarqueeState(prefersReducedMotion.matches);
prefersReducedMotion.addEventListener('change', (e) => setMarqueeState(e.matches));
