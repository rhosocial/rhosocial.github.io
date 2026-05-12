/**
 * shared-footer.js — Unified footer for all subpages
 * Component self-contained i18n (24 languages).
 * Subscribes to lang changes via state-manager.
 * Injects rho-footer with GitHub & PyPI links.
 * Load after </main>, before inline <script>.
 */
(function() {
  var LABELS = {
    'zh-cn': { license:'Apache 2.0 许可', privacy:'隐私政策', about:'关于我们', contact:'联系我们', github:'GitHub', pypi:'PyPI' },
    'en-us': { license:'Apache 2.0 License', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'ja-jp': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'de-de': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'fr-fr': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'ko-kr': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'pt-pt': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'nl-nl': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'it-it': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'ru-ru': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'es-es': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'tr-tr': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'el-gr': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'ar':    { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'hi-in': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'id-id': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'vi-vn': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'pl-pl': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'th-th': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'uk-ua': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'fa-ir': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'bn-bd': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'ro-ro': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
    'cs-cz': { license:'Apache 2.0', privacy:'Privacy Policy', about:'About Us', contact:'Contact Us', github:'GitHub', pypi:'PyPI' },
  };

  function label(key) {
    var lang = (window.__STATE__ && window.__STATE__.get('lang')) || 'zh-cn';
    var dict = LABELS[lang] || LABELS['zh-cn'];
    return dict[key] || key;
  }

  function render() {
    return '<div class="logo">ρ rhosocial-activerecord · ' + label('license') + '</div>' +
      '<div class="links">' +
        '<a href="privacy-policy.html">' + label('privacy') + '</a>' +
        '<a href="about-us.html">' + label('about') + '</a>' +
        '<a href="contact-us.html">' + label('contact') + '</a>' +
        '<a href="https://github.com/rhosocial/python-activerecord" target="_blank">' + label('github') + '</a>' +
        '<a href="https://pypi.org/project/rhosocial-activerecord/" target="_blank">' + label('pypi') + '</a>' +
      '</div>';
  }

  // Initial render
  var footer = document.createElement('footer');
  footer.className = 'rho-footer';
  footer.innerHTML = render();
  var mains = document.getElementsByTagName('main');
  if (mains.length > 0) {
    mains[0].parentNode.insertBefore(footer, mains[0].nextSibling);
  } else {
    document.body.appendChild(footer);
  }

  // Subscribe to lang changes
  if (window.__STATE__) {
    window.__STATE__.subscribe(['lang'], function() {
      var el = document.querySelector('.rho-footer');
      if (el) el.innerHTML = render();
    });
  }
})();