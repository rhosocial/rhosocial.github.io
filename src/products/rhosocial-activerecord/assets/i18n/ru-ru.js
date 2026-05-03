/**
 * assets/i18n/ru-ru.js — Global Russian dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/ru-ru.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['ru-ru'] = {
  /** Language meta */
  meta: { name: 'Русский' },

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
    theme_label: 'Тема',
    font_label:  'Шрифт',
    lang_label:  'Язык',
    font_auto:   'Автоматически (по умолчанию темы)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 тем · Ctrl+буква · Shift+буква · Alt+буква'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Подробнее →',
    back:     '← Назад',
    copy:     'Копировать',
    copied:  'Скопировано!',
    loading: 'Загрузка…',
    error:   'Ошибка загрузки',
    expand:  'Развернуть',
    collapse: 'Свернуть',
    prev:    'Предыдущий',
    next:    'Следующий',
    close:   'Закрыть'
  }
};