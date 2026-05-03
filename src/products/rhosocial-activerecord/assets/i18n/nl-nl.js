/**
 * assets/i18n/nl-nl.js — Global Dutch dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/nl-nl.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['nl-nl'] = {
  /** Language meta */
  meta: { name: 'Nederlands' },

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
    theme_label: 'Thema',
    font_label:  'Lettertype',
    lang_label:  'Taal',
    font_auto:   'Automatisch (themastandaard)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 themas · Ctrl+letter · Shift+letter · Alt+letter'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Details bekijken →',
    back:     '← Terug',
    copy:     'Kopieer',
    copied:  'Gekopieerd!',
    loading: 'Laden…',
    error:   'Laden mislukt',
    expand:  'Uitbreiden',
    collapse: 'Inklappen',
    prev:    'Vorige',
    next:    'Volgende',
    close:   'Sluiten'
  }
};