/**
 * assets/i18n/ja-jp.js — Global Japanese dictionary
 *
 * Contains UI text shared across all pages (nav, control, brand, footer, common).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/ja-jp.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['ja-jp'] = {
  /** Language meta */
  meta: { name: '日本語' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
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
    theme_label: 'テーマ',
    font_label:  'フォント',
    lang_label: '言語',
    font_auto:  '自動（テーマ既定）'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26テーマ · Ctrl+文字 · Shift+文字 · Alt+文字'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   '詳細を見る →',
    back:     '← 戻る',
    copy:     'コピー',
    copied:   'コピー完了!',
    loading:  '読み込み中…',
    error:    '読み込みエラー',
    expand:   '展開',
    collapse: '折りたたむ',
    prev:     '前へ',
    next:     '次へ',
    close:    '閉じる'
  }
};