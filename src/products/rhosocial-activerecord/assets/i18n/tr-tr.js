/**
 * assets/i18n/tr-tr.js — Global Turkish dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/tr-tr.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['tr-tr'] = {
  /** Language meta */
  meta: { name: 'Türkçe' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'Dizin',
    backends:     'Arka Uçlar',
    activerecord: 'ActiveRecord',
    practices:    'Pratikler'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'Tema',
    font_label:  'Yazı tipi',
    lang_label:  'Dil',
    font_auto:  'Otomatik (tema varsayılanı)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 themes · Ctrl+key theme · Shift+key font · Alt+key lang'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Ayrıntıları gör →',
    back:     '← Geri',
    copy:     'Kopyala',
    copied:   'Kopyalandı!',
    loading:  'Yükleniyor…',
    error:    'Yükleme hatası',
    expand:   'Genişlet',
    collapse: 'Daralt',
    prev:     'Önceki',
    next:     'Sonraki',
    close:    'Kapat'
  }
};