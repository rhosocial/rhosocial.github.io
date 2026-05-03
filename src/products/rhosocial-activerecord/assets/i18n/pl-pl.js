/**
 * assets/i18n/pl-pl.js — Global Polish dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/pl-pl.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['pl-pl'] = {
  /** Language meta */
  meta: { name: 'Polski' },

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
    theme_label: 'Motyw',
    font_label:  'Font',
    lang_label:  'Język',
    font_auto:   'Automatycznie (domyślny motyw)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 motywów · Ctrl+litera · Shift+litera · Alt+litera'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Zobacz szczegóły →',
    back:     '← Wstecz',
    copy:     'Kopiuj',
    copied:  'Skopiowano!',
    failed:  'Kopiowanie nie powiodło się',
    loading: 'Ładowanie…',
    error:   'Błąd ładowania',
    expand:  'Rozwiń',
    collapse: 'Zwiń',
    prev:    'Poprzedni',
    next:    'Następny',
    close:   'Zamknij'
  }
};