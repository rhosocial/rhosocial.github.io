window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { eyebrow: 'Type-safe by Construction', title: '用 Python 类型注解<em>定义模型</em>。', sub: '类型即字段，同步/异步一套 API。', back: '返回 ActiveRecord' },
  topics: { label: 'Topics', title: '选择你的<em>主题</em>。', model: { desc: '字段、Mixin、事件钩子。' }, crud: { desc: 'Create, Read, Update, Delete。' }, relations: { desc: 'has_one, has_many, belongs_to。' }, tx: { desc: '事务、savepoint、嵌套。' }, queries: { desc: 'where, order_by, join, prefetch。' }, cte: { desc: '公共表表达式、递归查询。' }, set: { desc: 'UNION / INTERSECT / EXCEPT。' }, migrations: { desc: '版本化数据库模式变更。' }, validations: { desc: 'Pydantic 校验、回调钩子。' }, advanced: { desc: '性能优化、调试技巧。' } },
  pythonic: { label: 'Pythonic', title: '像读<em>英语</em>一样写代码。', intro: '无需 DSL，方法即语义。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};