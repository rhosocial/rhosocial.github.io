/**
 * assets/i18n/id-id.js — Global Indonesian dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/id-id.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['id-id'] = {
  /** Language meta */
  meta: { name: 'Bahasa Indonesia' },

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
    font_label:  'Font',
    lang_label:  'Bahasa',
    font_auto:   'Otomatis (bawaan tema)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 tema · Ctrl+huruf · Shift+huruf · Alt+huruf'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Lihat detail →',
    back:     '← Kembali',
    copy:     'Salin',
    copied:   'Tersalin!',
    loading:  'Memuat…',
    error:    'Gagal memuat',
    expand:   'Perluas',
    collapse: 'Ciutkan',
    prev:     'Sebelumnya',
    next:     'Berikutnya',
    close:    'Tutup'
  }
};