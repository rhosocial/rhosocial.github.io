window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
  hero: { back: 'Backends', sub: 'Built-in, zero-config, single-file database. Sync/async dual mode, fine-grained PRAGMA control.' },
  features: {
    label: 'Features', title: 'SQLite Features.',
    zero: { title: 'Zero Config', desc: 'Out of the box, no server required. WAL mode and foreign keys enabled by default.' },
    file: { title: 'Single File', desc: 'Entire database in one file, easy to distribute. Also supports :memory: in-memory databases.' },
    acid: { title: 'Full ACID', desc: 'Transactions guarantee atomicity, consistency, isolation, durability. DEFERRED / IMMEDIATE / EXCLUSIVE BEGIN modes.' },
    ext: { title: 'Extensions', desc: 'FTS5 full-text search, JSON1, R-Tree, Geopoly virtual table extensions. Runtime availability detection via extension registry.' }
  },
  connection: {
    label: 'Connection', title: 'Connection Configuration.',
    desc: 'SQLiteConnectionConfig extends ConnectionConfig, mixing in Pragma / Driver / Storage configuration groups.'
  },
  config_mixins: {
    label: 'Config Mixins', title: 'Configuration Mixins.',
    pragma: 'SQLitePragmaMixin',
    driver: 'SQLiteDriverMixin',
    storage: 'SQLiteStorageMixin'
  },
  default_pragmas: {
    label: 'Pragmas', title: 'Default PRAGMAs.',
    desc: 'SQLiteConnectionConfig auto-enables the following PRAGMAs, balancing safety and performance:'
  },
  type_adapters: {
    label: 'Type Adapters', title: 'Type Adapters.',
    blob: 'SQLiteBlobAdapter',
    json: 'SQLiteJSONAdapter',
    uuid: 'SQLiteUUIDAdapter'
  },
  dialect: {
    label: 'Dialect', title: 'SQLiteDialect Version-Aware.',
    desc: 'SQLiteDialect accepts a version tuple at init, dynamically enabling/disabling protocol methods.'
  },
  dialect_features: {
    label: 'Feature Matrix', title: 'Dialect Feature Matrix.',
    supported: 'Supported',
    unsupported: 'Not Supported',
    sqlite_specific: 'SQLite-specific'
  },
  insert_syntax: { label: 'INSERT Syntax', title: 'INSERT Syntax Extensions.' },
  protocols: {
    label: 'Protocols', title: 'SQLite-specific Protocols.',
    extension: 'SQLiteExtensionSupport',
    pragma: 'SQLitePragmaSupport',
    vtable: 'SQLiteVirtualTableSupport',
    reindex: 'SQLiteReindexSupport'
  },
  extension: {
    label: 'Extensions', title: 'Extension Framework.',
    desc: 'SQLiteExtensionRegistry manages extension registration and version-aware detection.',
    fts5: 'FTS5 Full-Text Search',
    json1: 'JSON1',
    rtree: 'R-Tree Spatial Index',
    geopoly: 'Geopoly Polygon'
  },
  extension_code: { label: 'FTS5 Example', title: 'FTS5 Full-Text Search Example.' },
  pragma_framework: {
    label: 'Pragma Framework', title: 'PRAGMA Framework.',
    desc: 'PragmaCategory enum classification, PragmaInfo metadata-driven, full coverage of 6 PRAGMA categories.',
    config: 'Configuration', info: 'Information', debug: 'Debug',
    perf: 'Performance', wal: 'WAL', compile: 'Compile-Time'
  },
  pragma_code: { label: 'Pragma API', title: 'PRAGMA Operations Example.' },
  transaction: {
    label: 'Transaction', title: 'Transaction Control.',
    desc: 'SQLiteTransactionManager supports three BEGIN modes, defaulting to SERIALIZABLE isolation level.'
  },
  functions: {
    label: 'Functions', title: 'SQLite-specific Function Factories.',
    string: 'String', datetime: 'Date/Time', math: 'Math',
    json: 'JSON', blob: 'BLOB', system: 'System', conditional: 'Conditional'
  },
  async: {
    label: 'Async', title: 'Async Support.',
    desc: 'AsyncSQLiteBackend / AsyncSQLiteTransactionManager lazily loaded, requires aiosqlite.'
  },
  env_config: { label: 'Environment', title: 'Environment Variable Configuration.' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};