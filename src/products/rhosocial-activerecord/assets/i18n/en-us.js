/**
 * assets/i18n/en-us.js — Global English dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/en-us.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  /** Language meta */
  meta: { name: 'English' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: '· Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'Index',
    backends:     'Backends',
    activerecord: 'ActiveRecord',
    practices:    'Practices'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'Theme',
    font_label:  'Font',
    lang_label:  'Language',
    font_auto:  'Follow theme'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 themes · Ctrl+key theme · Shift+key font · Alt+key lang'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'See details →',
    back:     '← Back',
    copy:     'Copy',
    copied:   'Copied!',
    loading:  'Loading…',
    error:    'Failed to load',
    expand:   'Expand',
    collapse: 'Collapse',
    prev:     'Previous',
    next:     'Next',
    close:    'Close'
  }
};