// ---- Gallery controls (multi-image carousels per project) ----
document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const slides = Array.from(gallery.querySelectorAll('.gallery-slide'));
  const counter = gallery.querySelector('.gallery-counter');
  const prevBtn = gallery.querySelector('.gallery-prev');
  const nextBtn = gallery.querySelector('.gallery-next');
  let index = slides.findIndex(s => s.classList.contains('is-active'));
  if (index < 0) index = 0;

  if (slides.length <= 1) {
    gallery.classList.add('single');
  }

  function render() {
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      render();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      render();
    });
  }

  render();
});

// ---- Scroll-reveal for project sheets / tables ----
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ---- Scrollspy: highlight the active tab as each section scrolls into view ----
const tabs = Array.from(document.querySelectorAll('.tab'));
const sections = tabs
  .map(tab => document.getElementById(tab.dataset.tab))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const setActive = (id) => {
    tabs.forEach(tab => tab.classList.toggle('is-active', tab.dataset.tab === id));
  };

  const spy = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting);
    if (visible.length) {
      visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      setActive(visible[0].target.id);
    }
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });

  sections.forEach(section => spy.observe(section));

  // Edge case: once scrolled to (or near) the very bottom of the page,
  // the last section's observer band may never trigger — force it active.
  window.addEventListener('scroll', () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (nearBottom) setActive(sections[sections.length - 1].id);
  }, { passive: true });
}
