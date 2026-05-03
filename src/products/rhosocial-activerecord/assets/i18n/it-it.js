/**
 * assets/i18n/it-it.js — Global Italian dictionary
 *
 * Contains UI text shared across all pages (nav, control, brand, footer, common).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/it-it.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['it-it'] = {
  /** Language meta */
  meta: { name: 'Italiano' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
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
    theme_label: 'Tema',
    font_label:  'Font',
    lang_label:  'Lingua',
    font_auto:  'Automatico (default tema)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 temi · Ctrl+lettera · Shift+lettera · Alt+lettera'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Vedi dettagli →',
    back:     '← Indietro',
    copy:     'Copia',
    copied:   'Copiato!',
    loading:  'Caricamento…',
    error:    'Errore caricamento',
    expand:   'Espandi',
    collapse: 'Riduci',
    prev:     'Precedente',
    next:     'Successivo',
    close:    'Chiudi'
  }
};