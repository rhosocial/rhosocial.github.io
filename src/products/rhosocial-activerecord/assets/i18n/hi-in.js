/**
 * assets/i18n/hi-in.js — Global Hindi dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/hi-in.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['hi-in'] = {
  meta: { name: 'हिन्दी' },
  brand: { name: 'rhosocial ActiveRecord', subtitle: 'Theme Lab' },
  control: { theme_label: 'थीम', font_label: 'फ़ॉन्ट', lang_label: 'भाषा', font_auto: 'स्वचालित (थीम डिफ़ॉल्ट)' },
  footer: { license: 'Apache 2.0', github: 'GitHub', hotkeys: '26 थीम · Ctrl+अक्षर · Shift+अक्षर · Alt+अक्षर' },
  common: { detail: 'विवरण देखें →', back: '← वापस', copy: 'कॉपी', copied: 'कॉपी!', loading: 'लोड हो रहा…', error: 'लोड त्रुटि', expand: 'विस्तार', collapse: 'संकुचित', prev: 'पिछला', next: 'अगला', close: 'बंद' }
};