/**
 * assets/i18n/cs-cz.js — Global Czech dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/cs-cz.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['cs-cz'] = {
  /** Language meta */
  meta: { name: 'Čeština' },

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
    practices:    'Praxe'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'Téma',
    font_label:  'Písmo',
    lang_label: 'Jazyk',
    font_auto:  'Automatické (výchozí tématu)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 témat · Ctrl+klávesa · Shift+klávesa · Alt+klávesa'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Zobrazit detaily →',
    back:     '← Zpět',
    copy:     'Kopírovat',
    copied:   'Zkopírováno!',
    failed:   'Kopírování selhalo',
    loading:  'Načítání…',
    error:    'Chyba načtení',
    expand:   'Rozšířit',
    collapse: 'Sbalit',
    prev:     'Předchozí',
    next:     'Další',
    close:    'Zavřít'
  }
};