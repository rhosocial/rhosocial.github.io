window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { back: '返回后端', sub: '表达式收集语义，方言生成 SQL。' },
  expr_basics: { label: 'Expression Basics', title: '表达式基础。', desc: 'BaseExpression.to_sql(dialect) — 表达式委托方言生成 SQL。' },
  core_expr: { label: 'Core Expressions', title: '核心表达式。' },
  operator_overload: { label: 'Operator Overload', title: '运算符重载。', arithmetic: '算术：+ - * / %', comparison: '比较：== != < > <= >=', string: '字符串：like() / ilike() / concat()', casting: '类型转换：::type', logical: '逻辑：& (AND) | (OR) ~ (NOT)', alias: '别名：.as_()' },
  predicates: { label: 'Predicates', title: '谓词体系。' },
  advanced_expr: { label: 'Advanced', title: '高级表达式。', case: 'CASE WHEN ... THEN ... ELSE ... END', exists: 'EXISTS / NOT EXISTS', any_all: 'ANY / ALL / SOME', window: '窗口函数 OVER (...)', filter: 'FILTER (WHERE ...)' },
  query_parts: { label: 'Query Parts', title: '查询部件。' },
  query_sources: { label: 'Query Sources', title: '查询源。' },
  dql: { label: 'DQL', title: 'SELECT 语句。' },
  dml: { label: 'DML', title: 'INSERT / UPDATE / DELETE / MERGE。' },
  ddl: { label: 'DDL', title: '数据定义语言。' },
  functions: { label: 'Functions', title: '函数工厂。', aggregate: '聚合：count / sum / avg / min / max', window: '窗口：row_number / rank / dense_rank / lag / lead', string: '字符串：concat / substring / trim / replace ...', datetime: '日期时间：now / date_add / date_trunc / extract ...', math: '数学：abs / round / ceil / floor / sqrt ...', conditional: '条件：case / nullif / coalesce / greatest / least', json: 'JSON：json_extract / json_array_length ...', grouping: '分组：ROLLUP / CUBE / GROUPING SETS' },
  graph: { label: 'Graph', title: '图查询 SQL/PGQ。', desc: 'SQL 2023 标准属性图遍历。' },
  introspection: { label: 'Introspection', title: '内省表达式。', desc: '数据库/表/列/索引/外键/主键/触发器/视图信息查询。' },
  dialect_protocol: { label: 'Dialect Protocol', title: '方言协议。', desc: '35+ @runtime_checkable 协议检测后端能力。' },
  dialect_mixin: { label: 'Dialect Mixin', title: '方言 Mixin。', desc: '每个协议一个 Mixin，supports_*() + format_*() 默认实现。' },
  dialect_base: { label: 'Dialect Base', title: '方言基类。', desc: 'SQLDialectBase — 100+ format_*() 抽象方法。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
