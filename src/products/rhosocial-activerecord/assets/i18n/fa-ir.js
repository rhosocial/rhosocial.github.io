/**
 * assets/i18n/fa-ir.js — Global Persian dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/fa-ir.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['fa-ir'] = {
  /** Language meta */
  meta: { name: 'فارسی' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'خانه',
    backends:     'Backends',
    activerecord: 'ActiveRecord',
    practices:    'تمرین‌ها'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'تم',
    font_label:  'فونت',
    lang_label:  'زبان',
    font_auto:  'خودکار (پیش‌فرض تم)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 تم · Ctrl+حرف · Shift+حرف · Alt+حرف'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'مشاهده جزئیات →',
    back:     '← بازگشت',
    copy:     'کپی',
    copied:   'کپی شد!',
    failed:   'کپی ناموفق',
    loading:  'بارگذاری…',
    error:    'خطای بارگذاری',
    expand:   'گسترش',
    collapse: 'فشرده‌سازی',
    prev:     'قبلی',
    next:     'بعدی',
    close:    'بستن'
  }
};