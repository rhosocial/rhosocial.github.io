/**
 * assets/i18n/fr-fr.js — Global French dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/fr-fr.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['fr-fr'] = {
  /** Language meta */
  meta: { name: 'Français' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'Accueil',
    backends:     'Backends',
    activerecord: 'ActiveRecord',
    practices:    'Pratiques'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'Thème',
    font_label:  'Police',
    lang_label:  'Langue',
    font_auto:  'Auto (par défaut du thème)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 thèmes · Ctrl+lettre · Shift+lettre · Alt+lettre'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Voir les détails →',
    back:     '← Retour',
    copy:     'Copier',
    copied:   'Copié !',
    failed:   'Échec de la copie',
    loading:  'Chargement…',
    error:    'Erreur de chargement',
    expand:   'Développer',
    collapse: 'Réduire',
    prev:     'Précédent',
    next:     'Suivant',
    close:    'Fermer'
  }
};