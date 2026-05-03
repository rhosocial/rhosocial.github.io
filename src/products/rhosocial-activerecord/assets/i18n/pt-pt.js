/**
 * assets/i18n/pt-pt.js — Global Portuguese dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/pt-pt.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['pt-pt'] = {
  /** Language meta */
  meta: { name: 'Português' },

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
    theme_label: 'Tema',
    font_label:  'Fonte',
    lang_label:  'Idioma',
    font_auto:   'Automático (padrão do tema)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 temas · Ctrl+letra · Shift+letra · Alt+letra'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Ver detalhes →',
    back:     '← Voltar',
    copy:     'Copiar',
    copied:  'Copiado!',
    loading: 'A carregar…',
    error:   'Erro ao carregar',
    expand:  'Expandir',
    collapse: 'Recolher',
    prev:    'Anterior',
    next:    'Seguinte',
    close:   'Fechar'
  }
};