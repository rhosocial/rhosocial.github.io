/**
 * control-bar.js — Control bar component (theme/font/lang dropdowns)
 *
 * Depends on: state-manager.js (must be loaded first)
 *
 * Renders the control bar and binds dropdown interactions.
 * State changes are published to store — subscribers react accordingly.
 *
 * Usage: <script src="assets/control-bar.js" data-variant="ar"></script>
 *        (load at end of <head> or body, no defer needed)
 *
 * Variants:
 *   "ar"   — Theme Lab / Backends / ActiveRecord
 *   "back" — Index / Backends / ActiveRecord
 *   "blog" — Theme Lab / Backends / ActiveRecord / Blog
 */
(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    var variant = document.currentScript && document.currentScript.getAttribute('data-variant') || 'ar';

    // ── Data ──────────────────────────────────────────────────────────
    var THEME_NAMES = {
      terminal:'Terminal',editorial:'Editorial',brutalist:'Brutalist',
      aurora:'Aurora',synthwave:'Synthwave',sumi:'Sumi 墨',
      blueprint:'Blueprint',noir:'Noir',riso:'Riso',nordic:'Nordic',
      solarpunk:'Solarpunk',mocha:'Mocha',wireframe:'Wireframe',
      anderson:'Anderson',tokyo:'Tokyo Night',memphis:'Memphis',
      chalkboard:'Chalkboard',matrix:'Matrix',steel:'Steel',
      frutiger:'Frutiger',newsprint:'Newsprint',candy:'Candy',
      botanical:'Botanical',cyberpunk:'Cyberpunk',parchment:'Parchment',
      glassmorphism:'Glassmorphism'
    };
    var FONT_NAMES = {
      auto:'Auto (theme default)',tight:'Tight Sans',serif:'Editorial Serif',
      geometric:'Geometric',heavy:'Heavy Display',allmono:'All Mono',
      reader:'Reader','display-serif':'Display Serif','neo-future':'Neo Future',
      plex:'IBM Plex',playful:'Playful (Caveat)','classic-serif':'Classic Serif (Garamond)',
      pixel:'Pixel (VT323)',monumental:'Monumental (Unbounded)',slab:'Slab (Roboto Slab)',
      condensed:'Condensed (Oswald)',expressive:'Expressive (Syne)',deco:'Deco (Abril Fatface)',
      stencil:'Stencil (Major Mono)',rubik:'Rubik',bricolage:'Bricolage',
      gloock:'Gloock',crimson:'Crimson',dm:'DM Sans / Mono',outfit:'Outfit',
      literata:'Literata'
    };

    var ALL_THEMES = Object.keys(THEME_NAMES);
    var ALL_FONTS = Object.keys(FONT_NAMES);
    var LANG_NAMES = {
      'zh-cn':'简体中文','en-us':'English','ja-jp':'日本語','de-de':'Deutsch',
      'fr-fr':'Français','ko-kr':'한국어','pt-pt':'Português','nl-nl':'Nederlands',
      'it-it':'Italiano','ru-ru':'Русский','es-es':'Español','tr-tr':'Türkçe',
      'el-gr':'Ελληνικά','ar':'العربية','hi-in':'हिन्दी','id-id':'Bahasa Indonesia',
      'vi-vn':'Tiếng Việt','pl-pl':'Polski','th-th':'ไทย','uk-ua':'Українська',
      'fa-ir':'فارسی','bn-bd':'বাংলা','ro-ro':'Română','cs-cz':'Čeština'
    };
    var ALL_LANGS = Object.keys(LANG_NAMES);

    // ── Nav links (parallel, not breadcrumb) ─────────────────────────
    // Component self-contained i18n (24 languages)
    var NAV_LABELS = {
      'zh-cn': { index:'首页', backends:'后端', activerecord:'ActiveRecord', practices:'实践', blog:'文章' },
      'en-us': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'ja-jp': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'de-de': { index:'Startseite', backends:'Backends', activerecord:'ActiveRecord', practices:'Praktiken', blog:'Blog' },
      'fr-fr': { index:'Accueil', backends:'Backends', activerecord:'ActiveRecord', practices:'Pratiques', blog:'Blog' },
      'ko-kr': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'pt-pt': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'nl-nl': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'it-it': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'ru-ru': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'es-es': { index:'Inicio', backends:'Backends', activerecord:'ActiveRecord', practices:'Prácticas', blog:'Blog' },
      'tr-tr': { index:'Dizin', backends:'Arka Uçlar', activerecord:'ActiveRecord', practices:'Pratikler', blog:'Blog' },
      'el-gr': { index:'Αρχική', backends:'Backends', activerecord:'ActiveRecord', practices:'Πρακτικές', blog:'Blog' },
      'ar':    { index:'الرئيسية', backends:'الخوادم', activerecord:'ActiveRecord', practices:'الممارسات', blog:'Blog' },
      'hi-in': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'id-id': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'vi-vn': { index:'Trang chủ', backends:'Backends', activerecord:'ActiveRecord', practices:'Thực hành', blog:'Blog' },
      'pl-pl': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'th-th': { index:'หน้าแรก', backends:'Backends', activerecord:'ActiveRecord', practices:'แนวปฏิบัติ', blog:'Blog' },
      'uk-ua': { index:'Головна', backends:'Backends', activerecord:'ActiveRecord', practices:'Практики', blog:'Blog' },
      'fa-ir': { index:'خانه', backends:'Backends', activerecord:'ActiveRecord', practices:'تمرین‌ها', blog:'Blog' },
      'bn-bd': { index:'হোম', backends:'ব্যাকএন্ড', activerecord:'ActiveRecord', practices:'অনুশীলন', blog:'Blog' },
      'ro-ro': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Practices', blog:'Blog' },
      'cs-cz': { index:'Index', backends:'Backends', activerecord:'ActiveRecord', practices:'Praxe', blog:'Blog' },
    };
    var CTRL_LABELS = {
      'zh-cn': { theme:'主题', font:'字体', lang:'语言' },
      'en-us': { theme:'Theme', font:'Font', lang:'Language' },
      'ja-jp': { theme:'テーマ', font:'フォント', lang:'言語' },
      'de-de': { theme:'Design', font:'Schrift', lang:'Sprache' },
      'fr-fr': { theme:'Thème', font:'Police', lang:'Langue' },
      'ko-kr': { theme:'테마', font:'글꼴', lang:'언어' },
      'pt-pt': { theme:'Tema', font:'Fonte', lang:'Idioma' },
      'nl-nl': { theme:'Thema', font:'Lettertype', lang:'Taal' },
      'it-it': { theme:'Tema', font:'Font', lang:'Lingua' },
      'ru-ru': { theme:'Тема', font:'Шрифт', lang:'Язык' },
      'es-es': { theme:'Tema', font:'Fuente', lang:'Idioma' },
      'tr-tr': { theme:'Tema', font:'Yazı tipi', lang:'Dil' },
      'el-gr': { theme:'Θέμα', font:'Γραμματοσειρά', lang:'Γλώσσα' },
      'ar':    { theme:'السمة', font:'الخط', lang:'اللغة' },
      'hi-in': { theme:'थीम', font:'फ़ॉन्ट', lang:'भाषा' },
      'id-id': { theme:'Tema', font:'Font', lang:'Bahasa' },
      'vi-vn': { theme:'Chủ đề', font:'Phông chữ', lang:'Ngôn ngữ' },
      'pl-pl': { theme:'Motyw', font:'Font', lang:'Język' },
      'th-th': { theme:'ธีม', font:'ฟอนต์', lang:'ภาษา' },
      'uk-ua': { theme:'Тема', font:'Шрифт', lang:'Мова' },
      'fa-ir': { theme:'تم', font:'فونت', lang:'زبان' },
      'bn-bd': { theme:'থিম', font:'ফন্ট', lang:'ভাষা' },
      'ro-ro': { theme:'Temă', font:'Font', lang:'Limba' },
      'cs-cz': { theme:'Téma', font:'Písmo', lang:'Jazyk' },
    };

    function langLabel(key) {
      return LANG_NAMES[key] || key;
    }
    function navLabel(key) {
      var lang = window.__STATE__.get('lang');
      var dict = NAV_LABELS[lang] || NAV_LABELS['zh-cn'];
      return dict[key] || key;
    }
    function ctrlLabel(key) {
      var lang = window.__STATE__.get('lang');
      var dict = CTRL_LABELS[lang] || CTRL_LABELS['zh-cn'];
      return dict[key] || key;
    }

    // Determine which nav item is current based on URL path
    var pathname = window.location.pathname;
    var currentPage = 'index';
    if (pathname.indexOf('/backends/') !== -1) currentPage = 'backends';
    else if (pathname.indexOf('/blog/') !== -1) currentPage = 'blog';
    else if (pathname.indexOf('/activerecord/') !== -1) currentPage = 'activerecord';

    var isRootLevel = pathname.indexOf('/backends/') === -1 &&
                      pathname.indexOf('/activerecord/') === -1 &&
                      pathname.indexOf('/blog/') === -1;

    var navLinks = [
      { key: 'index',      href: '#',             disabled: false },
      { key: 'backends',   href: '#',    disabled: false },
      { key: 'activerecord', href: '#',            disabled: false },
      { key: 'practices',  href: '#',                         disabled: true },
      { key: 'blog',       href: '#',        disabled: false },
    ];
    // Set hrefs based on current page depth
    var prefix = isRootLevel ? '' : '../';
    navLinks[0].href = prefix + 'index.html';
    navLinks[1].href = prefix + 'backends/index.html';
    navLinks[2].href = prefix + 'activerecord/index.html';
    navLinks[4].href = prefix + 'blog/index.html';

    var navHTML = navLinks.map(function (link) {
      if (link.disabled) return '';
      var cls = link.key === currentPage ? ' is-current' : '';
      return '<a href="' + link.href + '" class="nav-link' + cls + '">' + navLabel(link.key) + '</a>';
    }).join('');

    // ── Build HTML ────────────────────────────────────────────────────
    function dropdownHTML(kind, items) {
      var current = window.__STATE__.get(kind);
      var labelKey = ctrlLabel(kind === 'theme' ? 'theme' : (kind === 'font' ? 'font' : 'lang'));
      var itemsHTML = items.map(function (key) {
        var name = kind === 'theme' ? THEME_NAMES[key] : (kind === 'font' ? FONT_NAMES[key] : langLabel(key));
        var active = key === current ? ' is-active' : '';
        return '<button class="dropdown-item' + active + '" data-value="' + key + '"><span class="dropdown-item-label">' + name + '</span></button>';
      }).join('');

      return '<div class="dropdown" data-dropdown="' + kind + '">' +
        '<button class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">' +
          '<span class="dropdown-label">' + labelKey + '</span>' +
          '<span class="dropdown-value">' + (kind === 'theme' ? THEME_NAMES[current] : (kind === 'font' ? (FONT_NAMES[current] || 'Auto') : langLabel(current))) + '</span>' +
          '<svg class="dropdown-caret" viewBox="0 0 12 12" fill="none"><path d="m3 5 3 3 3-3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
        '<div class="dropdown-menu" role="listbox">' + itemsHTML + '</div>' +
      '</div>';
    }

    var state = window.__STATE__;
    var header = document.createElement('header');
    header.className = 'control-bar';
    header.innerHTML =
      '<div class="control-brand">' +
        '<span class="brand-mark size-md">&rho;<sub>AR</sub></span>' +
        '<span>rhosocial ActiveRecord</span>' +
      '</div>' +
      '<nav class="nav-links">' + navHTML + '</nav>' +
      dropdownHTML('theme', ALL_THEMES) +
      dropdownHTML('font', ALL_FONTS) +
      dropdownHTML('lang', ALL_LANGS);

    document.body.prepend(header);

    // Re-apply i18n for the newly injected breadcrumb
    if (window.__applyI18n) {
      var currentLang = window.__STATE__.get('lang');
      window.__applyI18n(currentLang);
    }

    // ── Dropdown event handlers ───────────────────────────────────────
    function closeAll(except) {
      document.querySelectorAll('.dropdown.is-open').forEach(function (d) {
        if (d !== except) {
          d.classList.remove('is-open');
          var t = d.querySelector('.dropdown-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });
    }

    document.querySelectorAll('[data-dropdown]').forEach(function (dd) {
      var trigger = dd.querySelector('.dropdown-trigger');
      var kind = dd.getAttribute('data-dropdown');

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var willOpen = !dd.classList.contains('is-open');
        closeAll(dd);
        dd.classList.toggle('is-open', willOpen);
        trigger.setAttribute('aria-expanded', String(willOpen));
      });

      dd.querySelectorAll('.dropdown-item').forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          var value = item.getAttribute('data-value');
          state.set(kind, value);
          dd.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        });
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) closeAll();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll();
    });

    // ── Subscribe to state changes → update dropdown UI ───────────────
    state.subscribe(['theme', 'font', 'lang'], function (newState, changed) {
      for (var key in changed) {
        if (!changed.hasOwnProperty(key)) continue;
        var value = changed[key];

        // Update nav labels on lang change
        if (key === 'lang') {
          document.querySelectorAll('.nav-link').forEach(function (link) {
            for (var i = 0; i < navLinks.length; i++) {
              if (navLinks[i].href === link.getAttribute('href')) {
                link.textContent = navLabel(navLinks[i].key);
                break;
              }
            }
          });
        }

        var dd = document.querySelector('[data-dropdown="' + key + '"]');
        if (!dd) return;

        dd.querySelectorAll('.dropdown-item').forEach(function (item) {
          item.classList.toggle('is-active', item.getAttribute('data-value') === value);
        });

        var ve = dd.querySelector('.dropdown-value');
        if (ve) {
          var display = key === 'lang' ? langLabel(value) : (key === 'theme' ? THEME_NAMES[value] : (FONT_NAMES[value] || value));
          ve.textContent = display || value;
        }
      }
    });
  }
})();