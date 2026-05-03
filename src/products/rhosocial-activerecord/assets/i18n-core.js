/**
 * i18n-core.js - ThemeController + detection functions
 * ═══════════════════════════════════════════════════════════════════════
 * - ThemeController: unified control for theme/font/lang
 * - detectTheme/detectFont/detectLang: priority chain detection
 * - applyI18n: language switching
 */
(function() {
  window.RENDER_ADAPTERS = window.RENDER_ADAPTERS || [];

  function currentIsDark() {
    var theme = document.documentElement.getAttribute('data-theme') || '';
    return window.LIGHT_THEMES.indexOf(theme) === -1;
  }

  function isValidTheme(val) {
    return window.THEMES && window.THEMES.some(function(t) { return t[0] === val; });
  }

  function isValidFont(val) {
    return window.FONTS && window.FONTS.some(function(f) { return f[0] === val; });
  }

  function isValidLang(val) {
    return window.LANGS && window.LANGS.some(function(l) { return l[0] === val; });
  }

  window.detectTheme = function() {
    var params = new URLSearchParams(location.search);
    var urlVal = params.get('theme');
    if (urlVal && isValidTheme(urlVal)) return urlVal;

    var stored = localStorage.getItem('theme');
    if (stored && isValidTheme(stored)) return stored;

    return window.DEFAULT_THEME || 'terminal';
  };

  window.detectFont = function(theme) {
    var params = new URLSearchParams(location.search);
    var urlVal = params.get('font');
    if (urlVal && isValidFont(urlVal)) return urlVal;

    var stored = localStorage.getItem('font');
    if (stored && isValidFont(stored)) return stored;

    var mapped = (window.FONT_THEME_MAP || {})[theme];
    if (mapped && isValidFont(mapped)) return mapped;

    return window.DEFAULT_FONT || 'tight';
  };

  window.detectLang = function() {
    var params = new URLSearchParams(location.search);
    var urlVal = (params.get('lang') || '').toLowerCase().replace('_', '-');
    if (urlVal && isValidLang(urlVal)) return urlVal;

    var stored = localStorage.getItem('lang');
    if (stored && isValidLang(stored)) return stored;

    var navLangs = navigator.languages || (navigator.language ? [navigator.language] : []);
    for (var i = 0; i < navLangs.length; i++) {
      var l = navLangs[i].toLowerCase().replace('_', '-');
      if (isValidLang(l)) return l;
      var prefix = l.split('-')[0];
      var partial = window.LANGS && window.LANGS.find(function(lg) { return lg[0].startsWith(prefix); });
      if (partial) return partial[0];
    }

    return window.DEFAULT_LANG || 'zh-cn';
  };

  function ThemeController(options) {
    this.container = options && options.container;
    this.onChange = options && options.onChange || function() {};
    this._state = { theme: null, font: null, lang: null };
    this._selects = {};
    this._bindSelects();
  }

  ThemeController.prototype._bindSelects = function() {
    var self = this;
    ['theme', 'font', 'lang'].forEach(function(type) {
      var sel = self.container && self.container.querySelector('[data-ctrl="' + type + '"]');
      if (sel) self._selects[type] = sel;
    });
  };

  ThemeController.prototype.init = function() {
    var theme = window.detectTheme();
    var font = window.detectFont(theme);
    var lang = window.detectLang();

    this._applyValue('theme', theme, true, true);
    this._applyValue('font', font, true, true);
    this._applyValue('lang', lang, true, true);

    // Removed: window.applyI18n(lang); 
    // Language changes will be handled by onChange callback

    var s = this._state;
    var dark = currentIsDark();
    window.RENDER_ADAPTERS.forEach(function(a) {
      a.onTheme && a.onTheme(s.theme, dark);
      a.onFont && a.onFont(s.font);
      a.onLang && a.onLang(s.lang);
    });
  };

  ThemeController.prototype.setValue = function(type, value, skipStorage) {
    this._applyValue(type, value, !!skipStorage, false);
  };

  ThemeController.prototype._applyValue = function(type, value, skipStorage, skipNotify) {
    var prev = this._state[type];
    if (prev === value) return;

    this._state[type] = value;
    this._writeToDom(type, value, skipStorage);
    this._syncSelect(type, value);

    if (type === 'theme') {
      var mapped = (window.FONT_THEME_MAP || {})[value];
      if (mapped && !localStorage.getItem('font')) {
        this._applyValue('font', mapped, true, skipNotify);
        // Don't sync dropdown UI - keep showing "Auto" when cascading
      }
    }

    if (!skipStorage && type !== 'font') {
      localStorage.setItem(type, value);
    }

    if (!skipNotify) {
      var dark = currentIsDark();
      window.RENDER_ADAPTERS.forEach(function(a) {
        if (type === 'theme') a.onTheme && a.onTheme(value, dark);
        if (type === 'font') a.onFont && a.onFont(value);
        if (type === 'lang') a.onLang && a.onLang(value);
      });
      this.onChange({ type: type, value: value, prev: prev });
    }
  };

  ThemeController.prototype._writeToDom = function(type, value, skipStorage) {
    var el = document.documentElement;
    if (type === 'theme') el.setAttribute('data-theme', value);
    if (type === 'font') {
      var actualFont = value;
      if (value === 'auto') {
        localStorage.removeItem('font');
        // Use theme-recommended font when "auto"
        var theme = el.getAttribute('data-theme') || window.DEFAULT_THEME;
        actualFont = (window.FONT_THEME_MAP || {})[theme] || window.DEFAULT_FONT;
      } else {
        if (!skipStorage) localStorage.setItem('font', value);
      }
      el.setAttribute('data-font', actualFont);
    }
    if (type === 'lang') {
      el.setAttribute('lang', value);
      el.setAttribute('dir', window.RTL_LANGS && window.RTL_LANGS.indexOf(value) !== -1 ? 'rtl' : 'ltr');
    }
  };

  ThemeController.prototype._syncSelect = function(type, value) {
    var sel = this._selects[type];
    if (sel && sel.value !== value) sel.value = value;
  };

  ThemeController.prototype._syncFontDropdownForCascade = function(fontValue) {
    var dd = this.container && this.container.querySelector('[data-dropdown="font"]');
    if (!dd) return;
    dd.querySelectorAll('.dropdown-item').forEach(function(item) {
      item.classList.toggle('is-active', item.dataset.value === fontValue);
    });
    var valueEl = dd.querySelector('.dropdown-value');
    if (valueEl) {
      var item = dd.querySelector('.dropdown-item[data-value="' + fontValue + '"]');
      if (item) valueEl.textContent = item.querySelector('.dropdown-item-label').textContent;
    }
  };

  Object.defineProperty(ThemeController.prototype, 'state', {
    get: function() { return this._state; }
  });

  window.ThemeController = ThemeController;

  window.buildControlBar = function(containerId) {
    var bar = document.getElementById(containerId);
    if (!bar) return;

    var selTheme = bar.querySelector('[data-ctrl="theme"]');
    var selFont = bar.querySelector('[data-ctrl="font"]');
    var selLang = bar.querySelector('[data-ctrl="lang"]');

    if (selTheme && window.THEMES) {
      window.THEMES.forEach(function(t) {
        var o = document.createElement('option');
        o.value = t[0]; o.textContent = t[1];
        selTheme.appendChild(o);
      });
    }

    if (selFont && window.FONTS) {
      window.FONTS.forEach(function(f) {
        var o = document.createElement('option');
        o.value = f[0]; o.textContent = f[1];
        selFont.appendChild(o);
      });
    }

    if (selLang && window.LANGS) {
      window.LANGS.forEach(function(l) {
        var o = document.createElement('option');
        o.value = l[0]; o.textContent = l[1];
        selLang.appendChild(o);
      });
    }
  };

  window.applyI18n = function(lang) {
    var dict = window.I18N && window.I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.dataset.i18n;
      var parts = key.split('.');
      var val = dict;
      for (var i = 0; i < parts.length; i++) { val = val && val[parts[i]]; }
      if (typeof val === 'string') el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function(el) {
      var key = el.dataset.i18nValue;
      var parts = key.split('.');
      var val = dict;
      for (var i = 0; i < parts.length; i++) { val = val && val[parts[i]]; }
      if (typeof val === 'string') el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function(el) {
      var attrDef = el.dataset.i18nAttr;
      var parts = attrDef.split(':');
      var attr = parts[0];
      var key = parts[1];
      var path = key.split('.');
      var val = dict;
      for (var i = 0; i < path.length; i++) { val = val && val[path[i]]; }
      if (typeof val === 'string') el.setAttribute(attr, val);
    });
  };

  window.currentIsDark = currentIsDark;
})();