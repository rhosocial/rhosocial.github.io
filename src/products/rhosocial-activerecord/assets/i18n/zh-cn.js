/**
 * assets/i18n/zh-cn.js — Global Chinese dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/zh-cn.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  /** Language meta */
  meta: { name: '简体中文' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: '· Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        '首页',
    backends:     '后端',
    activerecord: 'ActiveRecord',
    practices:    '实践'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: '主题',
    font_label:  '字体',
    lang_label:  '语言',
    font_auto:  '跟随主题'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0 许可',
    github:  'GitHub',
    hotkeys: '26 主题 · Ctrl+键主题 · Shift+键字体 · Alt+键语言'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   '查看详情 →',
    back:     '← 返回',
    copy:     '复制',
    copied:   '已复制!',
    loading:  '加载中…',
    error:    '加载失败',
    expand:   '展开',
    collapse: '收起',
    prev:     '上一个',
    next:     '下一个',
    close:    '关闭'
  }
};