/**
 * scroll-reveal.js — IntersectionObserver entrance animations
 *
 * Scans all .reveal elements and adds .visible when they enter viewport.
 * Depends on: section-common.css (.reveal, .visible)
 */
(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
})();