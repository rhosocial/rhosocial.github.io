/**
 * assets/i18n/vi-vn.js — Global Vietnamese dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/vi-vn.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['vi-vn'] = {
  /** Language meta */
  meta: { name: 'Tiếng Việt' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'Trang chủ',
    backends:     'Backends',
    activerecord: 'ActiveRecord',
    practices:    'Thực hành'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'Chủ đề',
    font_label:  'Phông chữ',
    lang_label:  'Ngôn ngữ',
    font_auto:  'Tự động (mặc định của chủ đề)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 themes · Ctrl+key theme · Shift+key font · Alt+key lang'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Xem chi tiết →',
    back:     '← Quay lại',
    copy:     'Sao chép',
    copied:   'Đã sao chép!',
    failed:   'Sao chép thất bại',
    loading:  'Đang tải…',
    error:    'Tải thất bại',
    expand:   'Mở rộng',
    collapse: 'Thu gọn',
    prev:     'Trước',
    next:     'Sau',
    close:    'Đóng'
  }
};