/**
 * i18n.js — Internationalization component
 *
 * Depends on: state-manager.js (window.__STATE__)
 *
 * Subscribes to 'lang' changes and applies translations.
 * Supports per-page fallback: if a page only defines zh-cn and en-us,
 * unsupported languages automatically fall back to the page default.
 *
 * Usage:
 *   <script src="assets/i18n.js"></script>
 *
 * Translation data format (per-page):
 *   window.I18N = window.I18N || {};
 *   window.I18N['zh-cn'] = { nav: { index: '首页' } };
 *   window.I18N['en-us'] = { nav: { index: 'Home' } };
 */
(function () {
  'use strict';

  var fallbackLang = 'en-us'; // ultimate fallback if page has no zh-cn either

  /**
   * Apply translations for a given language.
   * If the language is not available, falls back to 'zh-cn', then 'en-us'.
   */
  function apply(lang) {
    var dict = resolveDict(lang);
    if (!dict) return;

    // data-i18n → innerHTML
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = getPath(el.getAttribute('data-i18n'), dict);
      if (val !== undefined) el.innerHTML = val;
    });

    // data-i18n-value → textContent
    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      var val = getPath(el.getAttribute('data-i18n-value'), dict);
      if (val !== undefined) el.textContent = val;
    });

    // data-i18n-attr → setAttribute
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var parts = el.getAttribute('data-i18n-attr').split(':');
      if (parts.length !== 2) return;
      var val = getPath(parts[1], dict);
      if (val !== undefined) el.setAttribute(parts[0], val);
    });
  }

  function resolveDict(lang) {
    var dict = window.I18N && window.I18N[lang];
    if (dict) return dict;

    // fallback chain: zh-cn → en-us
    dict = window.I18N && window.I18N['zh-cn'];
    if (dict) return dict;

    return window.I18N && window.I18N[fallbackLang];
  }

  function getPath(path, dict) {
    if (!dict) return undefined;
    var parts = path.split('.');
    var val = dict;
    for (var i = 0; i < parts.length; i++) {
      if (val == null || typeof val !== 'object') return undefined;
      val = val[parts[i]];
    }
    return val;
  }

  // ── Apply on initial state if already available ─────────────────
  var initialLang = window.__STATE__ && window.__STATE__.get('lang');
  if (initialLang) apply(initialLang);

  // Expose for manual re-application (e.g., after dynamic DOM injection)
  window.__applyI18n = apply;

  // ── Subscribe to lang changes ──────────────────────────────────
  if (window.__STATE__) {
    window.__STATE__.subscribe(['lang'], function (state) {
      apply(state.lang);
    });
  }
})();