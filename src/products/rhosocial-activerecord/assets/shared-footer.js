(function () {
  var STYLE_ID = 'rho-footer-style';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var css = [
      '.rho-footer{border-top:1px solid var(--r-border,var(--border,rgba(255,255,255,0.06)));padding:2rem 3rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem 1.5rem}',
      '.rho-footer .logo{font-family:var(--r-font-mono,var(--font-mono,"JetBrains Mono",monospace));font-size:13px;color:var(--r-text3,var(--fg-faint,#4a5568))}',
      '.rho-footer .links{display:flex;gap:1.5rem;flex-wrap:wrap}',
      '.rho-footer .links a{color:var(--r-text3,var(--fg-faint,#4a5568));text-decoration:none;font-size:13px}',
      '.rho-footer .links a:hover{color:var(--r-text,var(--fg,#e2e8f0))}',
      '@media(max-width:600px){.rho-footer{justify-content:center;text-align:center}.rho-footer .links{justify-content:center;gap:0.75rem 1rem}}'
    ].join('');
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  var LABELS = {
    'zh-cn': { license: 'Apache 2.0 许可', privacy: '隐私政策', about: '关于我们', contact: '联系我们', github: 'GitHub', pypi: 'PyPI' },
    'en-us': { license: 'Apache 2.0 License', privacy: 'Privacy Policy', about: 'About Us', contact: 'Contact Us', github: 'GitHub', pypi: 'PyPI' }
  };
  var FALLBACKS = ['ja-jp', 'de-de', 'fr-fr', 'ko-kr', 'pt-pt', 'nl-nl', 'it-it', 'ru-ru', 'es-es', 'tr-tr', 'el-gr', 'ar', 'hi-in', 'id-id', 'vi-vn', 'pl-pl', 'th-th', 'uk-ua', 'fa-ir', 'bn-bd', 'ro-ro', 'cs-cz'];
  FALLBACKS.forEach(function (l) { LABELS[l] = { license: 'Apache 2.0', privacy: 'Privacy Policy', about: 'About Us', contact: 'Contact Us', github: 'GitHub', pypi: 'PyPI' }; });

  function label(key) {
    var lang = (window.__STATE__ && window.__STATE__.get('lang')) || 'zh-cn';
    return (LABELS[lang] || LABELS['zh-cn'])[key] || key;
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

  injectStyles();

  var footer = document.createElement('footer');
  footer.className = 'rho-footer';
  footer.innerHTML = render();
  var mains = document.getElementsByTagName('main');
  if (mains.length > 0) {
    mains[0].parentNode.insertBefore(footer, mains[0].nextSibling);
  } else {
    document.body.appendChild(footer);
  }

  if (window.__STATE__) {
    window.__STATE__.subscribe(['lang'], function () {
      var el = document.querySelector('.rho-footer');
      if (el) el.innerHTML = render();
    });
  }
})();