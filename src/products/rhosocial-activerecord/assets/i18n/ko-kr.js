/**
 * assets/i18n/ko-kr.js — Global Korean dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/ko-kr.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['ko-kr'] = {
  /** Language meta */
  meta: { name: '한국어' },

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
    theme_label: '테마',
    font_label:  '글꼴',
    lang_label:  '언어',
    font_auto:  '자동 (테마 기본)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 License',
    github:  'GitHub',
    hotkeys: '26테마 · Ctrl+문자 · Shift+문자 · Alt+문자'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   '세부정보 보기 →',
    back:     '← 뒤로',
    copy:     '복사',
    copied:   '복사됨!',
    failed:   '복사 실패',
    loading:  '로딩 중…',
    error:    '로딩 오류',
    expand:   '펼치기',
    collapse: '접기',
    prev:     '이전',
    next:     '다음',
    close:    '닫기'
  }
};