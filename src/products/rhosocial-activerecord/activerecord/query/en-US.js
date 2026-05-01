window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
  hero: { back: 'ActiveRecord', sub: 'Chainable query builder, from simple to complex.' },
  entry: { label: 'Entry', title: 'Query Entry.', sync: 'Model.query() → ActiveQuery', async_: 'Model.query() → AsyncActiveQuery' },
  where: { label: 'WHERE', title: 'Condition Filtering.', basic: 'Equality and comparison.', logical: 'AND / OR / NOT combination.', in_: 'IN predicate.', like: 'LIKE fuzzy match.', is_null: 'IS NULL.' },
  order: { label: 'ORDER BY', title: 'Ordering.', asc: 'Ascending', desc: 'Descending', multi: 'Multi-column ordering' },
  limit: { label: 'LIMIT / OFFSET', title: 'Pagination.' },
  join: { label: 'JOIN', title: 'Join Queries.', inner: 'INNER JOIN', left: 'LEFT JOIN' },
  eager: { label: 'Eager Loading', title: 'Eager Loading.', simple: 'Simple eager loading', nested: 'Nested eager loading', conditional: 'Conditional eager loading' },
  aggregate: { label: 'Aggregate', title: 'Aggregate Functions.', count: 'COUNT', sum: 'SUM', avg: 'AVG', min: 'MIN', max: 'MAX' },
  terminal: { label: 'Terminal', title: 'Terminal Methods.', all: '.all() returns list', one: '.one() returns single or None', sql: '.to_sql() gets SQL' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};