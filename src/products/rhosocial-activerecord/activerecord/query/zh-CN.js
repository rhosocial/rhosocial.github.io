window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { back: '返回 ActiveRecord', sub: '链式查询构建器，从简单到复杂。' },
  entry: { label: 'Entry', title: '查询入口。', sync: 'Model.query() → ActiveQuery', async_: 'Model.query() → AsyncActiveQuery' },
  where: { label: 'WHERE', title: '条件过滤。', basic: '等值与比较条件。', logical: 'AND / OR / NOT 组合。', in_: 'IN 谓词。', like: 'LIKE 模糊匹配。', is_null: 'IS NULL。' },
  order: { label: 'ORDER BY', title: '排序。', asc: '升序', desc: '降序', multi: '多列排序' },
  limit: { label: 'LIMIT / OFFSET', title: '分页。' },
  join: { label: 'JOIN', title: '连接查询。', inner: 'INNER JOIN', left: 'LEFT JOIN' },
  eager: { label: 'Eager Loading', title: '预加载。', simple: "简单预加载", nested: "嵌套预加载", conditional: '条件预加载' },
  aggregate: { label: 'Aggregate', title: '聚合函数。', count: 'COUNT', sum: 'SUM', avg: 'AVG', min: 'MIN', max: 'MAX' },
  terminal: { label: 'Terminal', title: '终端方法。', all: '.all() 返回列表', one: '.one() 返回单条或 None', sql: '.to_sql() 获取 SQL' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};