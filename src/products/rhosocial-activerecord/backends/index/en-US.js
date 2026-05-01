window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
  hero: { eyebrow: 'Pluggable Backends', title: 'Write your own <em>Backend</em>.', sub: 'Plugable backends, one API for multiple dialects.', back: 'Backends' },
  backends: {
    label: 'Supported',
    title: 'Choose your <em>Backend</em>.',
    sqlite: { desc: 'Built-in, zero dependency, single file. WAL concurrency, fine-grained PRAGMA control.' },
    postgres: { desc: '30+ extension ecosystem, Advisory Lock, DEFERRABLE transactions, vector search.' },
    mysql: { desc: 'JSON, full-text search, spatial data, partitioning, 17 SHOW commands.' },
    mariadb: { desc: 'SEQUENCE, RETURNING, system-versioned tables, INTERSECT/EXCEPT.' },
    sqlserver: { desc: 'OUTPUT clause, SNAPSHOT isolation, CROSS/OUTER APPLY, table hints.' },
    oracle: { desc: 'Hierarchical queries CONNECT BY, PIVOT/UNPIVOT, Flashback, MERGE.' },
    develop: { title: 'Develop', desc: 'Implement Backend ABC, 33 protocol-driven, namespace package architecture.' }
  },
  architecture: {
    label: 'Architecture',
    title: 'Expression &mdash; Dialect &mdash; Backend.',
    expression: 'Collects semantic parameters, no SQL details. BaseExpression.to_sql(dialect) delegates to dialect for target SQL.',
    dialect: 'format_*() methods generate target database SQL. 33 @runtime_checkable protocols declare capability boundaries.',
    backend: 'Execute SQL, manage connections, process results. 12-layer Mixin MRO composition, Template Method pattern.'
  },
  sync_async: {
    label: 'Sync / Async',
    title: 'Sync / Async <em>Parity</em>.',
    desc: 'StorageBackend / AsyncStorageBackend share identical API, zero switching cost. Non-I/O logic in shared Mixins, I/O logic implemented separately.'
  },
  protocol_driven: {
    label: 'Protocol Driven',
    title: 'Protocol <em>Driven</em>.',
    desc: '@runtime_checkable protocols detect backend capabilities. Unsupported features raise UnsupportedFeatureError instead of silent failure. isinstance(dialect, Protocol) for safe usage.'
  },
  comparison: {
    label: 'Comparison',
    title: 'Backend <em>Comparison</em>.',
    headers: { feature: 'Feature', sqlite: 'SQLite', mysql: 'MySQL', postgres: 'PostgreSQL', mariadb: 'MariaDB', oracle: 'Oracle', sqlserver: 'SQL Server' },
    rows: {
      cte: 'CTE (WITH)',
      window: 'Window Functions',
      returning: 'RETURNING',
      merge: 'MERGE',
      lateral: 'LATERAL',
      json: 'JSON',
      array: 'Array Type',
      ilike: 'ILIKE / Case-insensitive',
      upsert: 'Upsert',
      partition: 'Partitioning',
      savepoint: 'Savepoint',
      async_driver: 'Async Driver'
    }
  },
  features: { label: 'Features', title: 'SQLite Features.', zero: { title: 'Zero Config', desc: 'Out of the box, no server installation required.' }, file: { title: 'Single File', desc: 'Entire database in one file, easy to distribute.' }, acid: { title: 'Full ACID', desc: 'Transactions guarantee atomicity, consistency, isolation, durability.' }, cross: { title: 'Cross Platform', desc: 'Works on Windows, Linux, macOS, Android, iOS.' } },
  example: { label: 'Example', title: 'Quick Start.' },
  abc: { label: 'Backend ABC', title: 'Write your own <em>Backend</em> in dozens of lines.', intro: 'Implement the Backend interface to add a new database. 12-layer Mixin MRO composition, 33 protocol-driven, namespace package auto-discovery.' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' },
  create: { label: 'Create', title: 'Create records.' },
  read: { label: 'Read', title: 'Read records.' },
  update: { label: 'Update', title: 'Update records.' },
  delete: { label: 'Delete', title: 'Delete records.' }
};
