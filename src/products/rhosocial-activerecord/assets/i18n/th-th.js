/**
 * assets/i18n/th-th.js — Global Thai dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/th-th.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['th-th'] = {
  /** Language meta */
  meta: { name: 'ไทย' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'หน้าแรก',
    backends:     'Backends',
    activerecord: 'ActiveRecord',
    practices:    'แนวปฏิบัติ'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'ธีม',
    font_label:  'ฟอนต์',
    lang_label:  'ภาษา',
    font_auto:  'อัตโนมัติ (ค่าเริ่มต้นของธีม)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26 themes · Ctrl+key theme · Shift+key font · Alt+key lang'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'ดูรายละเอียด →',
    back:     '← กลับ',
    copy:     'คัดลอก',
    copied:   'คัดลอกแล้ว!',
    failed:   'คัดลอกไม่สำเร็จ',
    loading:  'กำลังโหลด…',
    error:    'โหลดล้มเหลว',
    expand:   'ขยาย',
    collapse: 'ย่อ',
    prev:     'ก่อนหน้า',
    next:     'ถัดไป',
    close:    'ปิด'
  }
};