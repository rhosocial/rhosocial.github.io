/**
 * assets/i18n/bn-bd.js — Global Bengali dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/bn-bd.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['bn-bd'] = {
  /** Language meta */
  meta: { name: 'বাংলা' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'হোম',
    backends:     'ব্যাকএন্ড',
    activerecord: 'ActiveRecord',
    practices:    'অনুশীলন'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'থিম',
    font_label:  'ফন্ট',
    lang_label: 'ভাষা',
    font_auto:  'স্বয়ংক্রিয় (থিমের ডিফল্ট)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 থিম · Ctrl+key · Shift+key · Alt+key'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'বিস্তারিত দেখুন →',
    back:     '← ফিরে যান',
    copy:     'কপি',
    copied:   'কপি হয়েছে!',
    loading:  'লোড হচ্ছে…',
    error:    'লোড ব্যর্থ',
    expand:   'সম্প্রসারণ',
    collapse: 'সংকোচন',
    prev:     'আগে',
    next:     'পরে',
    close:    'বন্ধ'
  }
};