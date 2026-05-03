/**
 * assets/i18n/de-de.js — Global German dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/de-de.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['de-de'] = {
  /** Language meta */
  meta: { name: 'Deutsch' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'Startseite',
    backends:     'Backends',
    activerecord: 'ActiveRecord',
    practices:    'Praktiken'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'Design',
    font_label:  'Schrift',
    lang_label:  'Sprache',
    font_auto:  'Automatisch (Design-Vorgabe)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 Designs · Ctrl+Buchstabe · Shift+Buchstabe · Alt+Buchstabe'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Details ansehen →',
    back:     '← Zurück',
    copy:     'Kopieren',
    copied:   'Kopiert!',
    loading:  'Laden…',
    error:    'Fehler beim Laden',
    expand:   'Erweitern',
    collapse: 'Zusammenklappen',
    prev:     'Vorheriges',
    next:     'Nächstes',
    close:    'Schließen'
  }
};