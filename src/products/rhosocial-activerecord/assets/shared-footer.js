(function () {
  var LABELS = {
    'zh-cn': { license: 'Apache 2.0 许可', privacy: '隐私政策', about: '关于我们', contact: '联系我们', github: 'GitHub', pypi: 'PyPI' },
    'en-us': { license: 'Apache 2.0 License', privacy: 'Privacy Policy', about: 'About Us', contact: 'Contact Us', github: 'GitHub', pypi: 'PyPI' },
    'ja-jp': { license: 'Apache 2.0 ライセンス', privacy: 'プライバシーポリシー', about: '私たちについて', contact: 'お問い合わせ', github: 'GitHub', pypi: 'PyPI' },
    'de-de': { license: 'Apache 2.0 Lizenz', privacy: 'Datenschutz', about: 'Über uns', contact: 'Kontakt', github: 'GitHub', pypi: 'PyPI' },
    'fr-fr': { license: 'Licence Apache 2.0', privacy: 'Politique de confidentialité', about: 'À propos', contact: 'Contact', github: 'GitHub', pypi: 'PyPI' },
    'ko-kr': { license: 'Apache 2.0 라이선스', privacy: '개인정보처리방침', about: '소개', contact: '문의하기', github: 'GitHub', pypi: 'PyPI' },
    'pt-pt': { license: 'Licença Apache 2.0', privacy: 'Política de Privacidade', about: 'Sobre Nós', contact: 'Contacto', github: 'GitHub', pypi: 'PyPI' },
    'nl-nl': { license: 'Apache 2.0-licentie', privacy: 'Privacybeleid', about: 'Over ons', contact: 'Contact', github: 'GitHub', pypi: 'PyPI' },
    'it-it': { license: 'Licenza Apache 2.0', privacy: 'Informativa sulla privacy', about: 'Chi siamo', contact: 'Contatti', github: 'GitHub', pypi: 'PyPI' },
    'ru-ru': { license: 'Лицензия Apache 2.0', privacy: 'Политика конфиденциальности', about: 'О нас', contact: 'Контакты', github: 'GitHub', pypi: 'PyPI' },
    'es-es': { license: 'Licencia Apache 2.0', privacy: 'Política de privacidad', about: 'Sobre nosotros', contact: 'Contacto', github: 'GitHub', pypi: 'PyPI' },
    'tr-tr': { license: 'Apache 2.0 Lisansı', privacy: 'Gizlilik Politikası', about: 'Hakkımızda', contact: 'İletişim', github: 'GitHub', pypi: 'PyPI' },
    'el-gr': { license: 'Άδεια Apache 2.0', privacy: 'Πολιτική Απορρήτου', about: 'Σχετικά με εμάς', contact: 'Επικοινωνία', github: 'GitHub', pypi: 'PyPI' },
    'ar':    { license: 'رخصة Apache 2.0', privacy: 'سياسة الخصوصية', about: 'من نحن', contact: 'اتصل بنا', github: 'GitHub', pypi: 'PyPI' },
    'hi-in': { license: 'Apache 2.0 लाइसेंस', privacy: 'गोपनीयता नीति', about: 'हमारे बारे में', contact: 'संपर्क करें', github: 'GitHub', pypi: 'PyPI' },
    'id-id': { license: 'Lisensi Apache 2.0', privacy: 'Kebijakan Privasi', about: 'Tentang Kami', contact: 'Hubungi Kami', github: 'GitHub', pypi: 'PyPI' },
    'vi-vn': { license: 'Giấy phép Apache 2.0', privacy: 'Chính sách bảo mật', about: 'Về chúng tôi', contact: 'Liên hệ', github: 'GitHub', pypi: 'PyPI' },
    'pl-pl': { license: 'Licencja Apache 2.0', privacy: 'Polityka prywatności', about: 'O nas', contact: 'Kontakt', github: 'GitHub', pypi: 'PyPI' },
    'th-th': { license: 'สัญญาอนุญาต Apache 2.0', privacy: 'นโยบายความเป็นส่วนตัว', about: 'เกี่ยวกับเรา', contact: 'ติดต่อเรา', github: 'GitHub', pypi: 'PyPI' },
    'uk-ua': { license: 'Ліцензія Apache 2.0', privacy: 'Політика конфіденційності', about: 'Про нас', contact: 'Контакти', github: 'GitHub', pypi: 'PyPI' },
    'fa-ir': { license: 'مجوز Apache 2.0', privacy: 'سیاست حفظ حریم خصوصی', about: 'درباره ما', contact: 'تماس با ما', github: 'GitHub', pypi: 'PyPI' },
    'bn-bd': { license: 'Apache 2.0 লাইসেন্স', privacy: 'গোপনীয়তা নীতি', about: 'আমাদের সম্পর্কে', contact: 'যোগাযোগ', github: 'GitHub', pypi: 'PyPI' },
    'ro-ro': { license: 'Licența Apache 2.0', privacy: 'Politica de confidențialitate', about: 'Despre noi', contact: 'Contact', github: 'GitHub', pypi: 'PyPI' },
    'cs-cz': { license: 'Licence Apache 2.0', privacy: 'Zásady ochrany soukromí', about: 'O nás', contact: 'Kontakt', github: 'GitHub', pypi: 'PyPI' },
  };

  function label(key) {
    var lang = (window.__STATE__ && window.__STATE__.get('lang')) || 'zh-cn';
    return (LABELS[lang] || LABELS['zh-cn'])[key] || key;
  }

  function render() {
    var BASE_URL = (window.__BASE_URL__ || '');
    return '<div class="logo">ρ rhosocial-activerecord · ' + label('license') + '</div>' +
      '<div class="links">' +
        '<a href="' + BASE_URL + '/privacy-policy.html">' + label('privacy') + '</a>' +
        '<a href="' + BASE_URL + '/about-us.html">' + label('about') + '</a>' +
        '<a href="' + BASE_URL + '/contact-us.html">' + label('contact') + '</a>' +
        '<a href="https://github.com/rhosocial/python-activerecord" target="_blank">' + label('github') + '</a>' +
        '<a href="https://pypi.org/project/rhosocial-activerecord/" target="_blank">' + label('pypi') + '</a>' +
      '</div>';
  }

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
    window.__STATE__.subscribe(['theme', 'font', 'lang'], function () {
      var el = document.querySelector('.rho-footer');
      if (el) el.innerHTML = render();
    });
  }
})();