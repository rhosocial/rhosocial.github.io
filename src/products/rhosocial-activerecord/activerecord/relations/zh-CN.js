window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { back: '返回 ActiveRecord', sub: '模型间关系映射，优雅解决 N+1。' },
  belongs_to: { label: 'BelongsTo', title: '多对一关系。', desc: '子记录属于父记录，外键在子表。' },
  has_one: { label: 'HasOne', title: '一对一关系。' },
  has_many: { label: 'HasMany', title: '一对多关系。' },
  forward_ref: { label: 'Forward Ref', title: '前向引用。', desc: '字符串引用解决循环依赖。' },
  eager: { label: 'Eager Loading', title: '预加载避免 N+1。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};