window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
  hero: { back: 'ActiveRecord', sub: 'Model relationship mapping, elegantly solve N+1.' },
  belongs_to: { label: 'BelongsTo', title: 'Many-to-One Relationship.', desc: 'Child belongs to parent, FK in child table.' },
  has_one: { label: 'HasOne', title: 'One-to-One Relationship.' },
  has_many: { label: 'HasMany', title: 'One-to-Many Relationship.' },
  forward_ref: { label: 'Forward Ref', title: 'Forward Reference.', desc: 'String reference to solve circular dependency.' },
  eager: { label: 'Eager Loading', title: 'Preload to avoid N+1.' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};