/**
 * assets/i18n/ro-ro.js — Global Romanian dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/ro-ro.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['ro-ro'] = {
  /** Language meta */
  meta: { name: 'Română' },

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
    theme_label: 'Temă',
    font_label:  'Font',
    lang_label:  'Limba',
    font_auto:  'Automat (implicit temă)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 de teme · Ctrl+literă · Shift+literă · Alt+literă'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Vezi detalii →',
    back:     '← Înapoi',
    copy:     'Copiază',
    copied:  'Copiat!',
    failed:  'Copiere eșuată',
    loading: 'Se încarcă…',
    error:   'Eroare la încărcare',
    expand:  'Extinde',
    collapse: 'Restrânge',
    prev:    'Anterior',
    next:    'Următorul',
    close:   'Închide'
  }
};