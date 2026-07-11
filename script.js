// Mini nav appears after scrolling past the hero
const miniNav = document.querySelector('.mini-nav');
const hero = document.getElementById('hero');

if (miniNav && hero) {
  const navObserver = new IntersectionObserver(
    ([entry]) => {
      miniNav.classList.toggle('visible', !entry.isIntersecting);
    },
    { rootMargin: '-80% 0px 0px 0px' }
  );
  navObserver.observe(hero);
}

// Fade-in on scroll for sections and cards
const fadeTargets = document.querySelectorAll(
  '.cycle-node, .value-card, .impact-card, .section-title, .contribute-text'
);

fadeTargets.forEach((el) => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeTargets.forEach((el) => fadeObserver.observe(el));

// Fallback initials if profile photo is missing
const heroPhoto = document.getElementById('hero-photo');
const heroPhotoFallback = document.getElementById('hero-photo-fallback');

if (heroPhoto && heroPhotoFallback) {
  heroPhoto.addEventListener('error', () => {
    heroPhoto.hidden = true;
    heroPhotoFallback.hidden = false;
  });
}
