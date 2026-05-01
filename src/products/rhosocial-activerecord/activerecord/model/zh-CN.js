window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { back: '返回 ActiveRecord', sub: '声明式模型定义，Pydantic 驱动。' },
  basic: { label: 'Basic', title: '基本定义。' },
  fields: { label: 'Fields', title: '字段类型。', use_column: 'UseColumn — 自定义列名映射。', use_adapter: 'UseAdapter — 自定义类型适配器。' },
  mixins: { label: 'Field Mixins', title: '字段 Mixin 组合。' },
  fieldproxy: { label: 'FieldProxy', title: '字段代理。', desc: 'User.c.name 语法，类型安全的表达式构建。' },
  callbacks: { label: 'Callbacks', title: '事件钩子。', desc: 'save / create / update / delete / validate 前后回调。' },
  metaclass: { label: 'Metaclass', title: '元类机制。', desc: 'MetaclassMixin 自动完成：Pydantic 模型生成、表名推断、类方法注入。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};