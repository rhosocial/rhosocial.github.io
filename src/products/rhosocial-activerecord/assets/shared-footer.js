/**
 * shared-footer.js — Unified footer for all subpages
 * Injects rho-footer with GitHub & PyPI links.
 * Load after </main>, before inline <script>.
 */
(function() {
  var footer = document.createElement('footer');
  footer.className = 'rho-footer';
  footer.innerHTML =
    '<div class="logo">ρ rhosocial-activerecord · Apache 2.0</div>' +
    '<div class="links">' +
      '<a href="https://github.com/rhosocial/python-activerecord" target="_blank">GitHub</a>' +
      '<a href="https://pypi.org/project/rhosocial-activerecord/" target="_blank">PyPI</a>' +
    '</div>';
  // Insert after </main>
  var mains = document.getElementsByTagName('main');
  if (mains.length > 0) {
    mains[0].parentNode.insertBefore(footer, mains[0].nextSibling);
  }
})();