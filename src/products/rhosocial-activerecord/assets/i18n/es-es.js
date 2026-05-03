/**
 * assets/i18n/es-es.js — Global Spanish dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/es-es.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['es-es'] = {
  /** Language meta */
  meta: { name: 'Español' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'Inicio',
    backends:     'Backends',
    activerecord: 'ActiveRecord',
    practices:    'Prácticas'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'Tema',
    font_label:  'Fuente',
    lang_label:  'Idioma',
    font_auto:  'Automático (por defecto del tema)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 temas · Ctrl+letra · Shift+letra · Alt+letra'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Ver detalles →',
    back:     '← Volver',
    copy:     'Copiar',
    copied:   '¡Copiado!',
    failed:   'Error al copiar',
    loading:  'Cargando…',
    error:    'Error al cargar',
    expand:   'Expandir',
    collapse: 'Contraer',
    prev:     'Anterior',
    next:     'Siguiente',
    close:    'Cerrar'
  }
};