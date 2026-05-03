/**
 * assets/i18n/uk-ua.js — Global Ukrainian dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/uk-ua.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['uk-ua'] = {
  /** Language meta */
  meta: { name: 'Українська' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'Головна',
    backends:     'Backends',
    activerecord: 'ActiveRecord',
    practices:    'Практики'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'Тема',
    font_label:  'Шрифт',
    lang_label:  'Мова',
    font_auto:  'Авто (типова для теми)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 themes · Ctrl+key theme · Shift+key font · Alt+key lang'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Детальніше →',
    back:     '← Назад',
    copy:     'Копіювати',
    copied:   'Скопійовано!',
    failed:   'Помилка копіювання',
    loading:  'Завантаження…',
    error:    'Помилка завантаження',
    expand:   'Розгорнути',
    collapse: 'Згорнути',
    prev:     'Попередній',
    next:     'Наступний',
    close:    'Закрити'
  }
};