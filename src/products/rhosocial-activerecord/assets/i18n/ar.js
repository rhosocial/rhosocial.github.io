/**
 * assets/i18n/ar.js — Global Arabic dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/ar.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['ar'] = {
  /** Language meta */
  meta: { name: 'العربية' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'الرئيسية',
    backends:     'الخوادم',
    activerecord: 'ActiveRecord',
    practices:    'الممارسات'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'السمة',
    font_label:  'الخط',
    lang_label:  'اللغة',
    font_auto:  'تلقائي (افتراضي السمة)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 سمة · Ctrl+حرف · Shift+حرف · Alt+حرف'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'عرض التفاصيل ←',
    back:     '← رجوع',
    copy:     'نسخ',
    copied:   'تم النسخ!',
    failed:   'فشل النسخ',
    loading:  'جاري التحميل…',
    error:    'فشل التحميل',
    expand:   'توسيع',
    collapse: 'طي',
    prev:     'السابق',
    next:     'التالي',
    close:    'إغلاق'
  }
};