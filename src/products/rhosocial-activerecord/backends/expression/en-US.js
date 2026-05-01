window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
  hero: { back: 'Backends', sub: 'Expressions collect semantics, dialects generate SQL.' },
  expr_basics: { label: 'Expression Basics', title: 'Expression Basics.', desc: 'BaseExpression.to_sql(dialect) — expressions delegate to dialect for SQL generation.' },
  core_expr: { label: 'Core Expressions', title: 'Core Expressions.' },
  operator_overload: { label: 'Operator Overload', title: 'Operator Overload.', arithmetic: 'Arithmetic: + - * / %', comparison: 'Comparison: == != < > <= >=', string: 'String: like() / ilike() / concat()', casting: 'Type casting: ::type', logical: 'Logical: & (AND) | (OR) ~ (NOT)', alias: 'Alias: .as_()' },
  predicates: { label: 'Predicates', title: 'Predicates.' },
  advanced_expr: { label: 'Advanced', title: 'Advanced Expressions.', case: 'CASE WHEN ... THEN ... ELSE ... END', exists: 'EXISTS / NOT EXISTS', any_all: 'ANY / ALL / SOME', window: 'Window functions OVER (...)', filter: 'FILTER (WHERE ...)' },
  query_parts: { label: 'Query Parts', title: 'Query Parts.' },
  query_sources: { label: 'Query Sources', title: 'Query Sources.' },
  dql: { label: 'DQL', title: 'SELECT Statement.' },
  dml: { label: 'DML', title: 'INSERT / UPDATE / DELETE / MERGE.' },
  ddl: { label: 'DDL', title: 'Data Definition Language.' },
  functions: { label: 'Functions', title: 'Function Factory.', aggregate: 'Aggregate: count / sum / avg / min / max', window: 'Window: row_number / rank / dense_rank / lag / lead', string: 'String: concat / substring / trim / replace ...', datetime: 'Datetime: now / date_add / date_trunc / extract ...', math: 'Math: abs / round / ceil / floor / sqrt ...', conditional: 'Conditional: case / nullif / coalesce / greatest / least', json: 'JSON: json_extract / json_array_length ...', grouping: 'Grouping: ROLLUP / CUBE / GROUPING SETS' },
  graph: { label: 'Graph', title: 'Graph Query SQL/PGQ.', desc: 'SQL 2023 standard property graph traversal.' },
  introspection: { label: 'Introspection', title: 'Introspection Expressions.', desc: 'Database/table/column/index/foreign key/primary key/trigger/view info queries.' },
  dialect_protocol: { label: 'Dialect Protocol', title: 'Dialect Protocol.', desc: '35+ @runtime_checkable protocols detect backend capabilities.' },
  dialect_mixin: { label: 'Dialect Mixin', title: 'Dialect Mixin.', desc: 'One Mixin per protocol, supports_*() + format_*() default implementation.' },
  dialect_base: { label: 'Dialect Base', title: 'Dialect Base.', desc: 'SQLDialectBase — 100+ format_*() abstract methods.' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
