window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
  hero: { back: 'Backends', sub: 'Microsoft enterprise RDBMS. OUTPUT clause / MERGE / CROSS APPLY / IDENTITY / OFFSET-FETCH / Table hints / Indexed views.' },
  features: {
    label: 'Features', title: 'SQL Server Features.',
    output: { title: 'OUTPUT Clause', desc: 'INSERT / UPDATE / DELETE / MERGE support OUTPUT clause. inserted.* / deleted.* virtual tables, replacing RETURNING.' },
    merge: { title: 'MERGE', desc: 'MERGE ... USING ... ON ... WHEN MATCHED / NOT MATCHED. Supports $action output. UPSERT via MERGE.' },
    apply: { title: 'CROSS / OUTER APPLY', desc: 'Replaces LATERAL JOIN. CROSS APPLY (inner) / OUTER APPLY (left). Correlated subquery lateral correlation.' },
    identity: { title: 'IDENTITY', desc: 'IDENTITY(1,1) auto-increment. SET IDENTITY_INSERT ON/OFF. SCOPE_IDENTITY() / IDENT_CURRENT() / DBCC CHECKIDENT.' },
    pagination: { title: 'OFFSET-FETCH', desc: 'OFFSET n ROWS FETCH NEXT m ROWS ONLY (2012+). Older versions use TOP / ROW_NUMBER() pagination.' },
    hints: { title: 'Table Hints', desc: 'WITH (NOLOCK / UPDLOCK / XLOCK / READPAST / TABLOCKX / INDEX / HOLDLOCK) — query-level lock control.' }
  },
  connection: {
    label: 'Connection', title: 'Connection Configuration.',
    desc: 'SQLServerConnectionConfig extends pydantic.BaseModel (pure Pydantic, no framework mixins). ODBC connection string builder.'
  },
  config_fields: {
    label: 'Config Fields', title: 'Configuration Fields.',
    host: 'host',
    port: 'port',
    database: 'database',
    driver: 'driver',
    auth: 'Auth',
    encrypt: 'Encrypt',
    pool: 'Pool'
  },
  dialect: {
    label: 'Dialect', title: 'SQLServerDialect Version-Aware.',
    desc: 'SQLServerDialect relies on version constants: 2012 / 2014 / 2016 / 2017 / 2019 / 2022, driving feature toggles.'
  },
  dialect_features: {
    label: 'Feature Matrix', title: 'Dialect Feature Matrix.',
    supported: 'Supported',
    unsupported: 'Not Supported',
    sqlserver_specific: 'SQL Server-specific'
  },
  protocols: {
    label: 'Protocols', title: 'SQL Server-specific Protocols.',
    indexed_view: 'SQLServerIndexedViewSupport',
    identity: 'SQLServerIdentitySupport',
    table_hint: 'SQLServerTableHintSupport',
    output: 'SQLServerOutputSupport'
  },
  output_code: { label: 'OUTPUT', title: 'OUTPUT Clause Example.' },
  merge_code: { label: 'MERGE', title: 'MERGE Statement Example.' },
  set_statements: { label: 'SET', title: 'SET Statement Control.' },
  type_adapters: { label: 'Type Adapters', title: 'SQL Server Type Adapters.' },
  functions: {
    label: 'Functions', title: 'SQL Server-specific Functions.',
    json: 'JSON (2016+)',
    string: 'String (2017+)',
    datetime: 'DateTime (2012+)',
    hierarchy: 'Hierarchy'
  },
  transaction: {
    label: 'Transaction', title: 'Transaction Control.',
    desc: 'SQLServerTransactionManager supports five isolation levels including SQL Server-specific SNAPSHOT. SET LOCK_TIMEOUT / DEADLOCK_PRIORITY supported.'
  },
  async: {
    label: 'Async', title: 'Async Support.',
    desc: 'AsyncSQLServerBackend lazily loaded, using aioodbc async driver. Note: inherits sync StorageBackend base class.'
  },
  env_config: { label: 'Environment', title: 'Environment Variable Configuration.' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
