window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
  hero: { back: 'Backends', sub: 'Enterprise RDBMS. Hierarchical queries / PIVOT / MERGE / FETCH FIRST / Query hints / FOR UPDATE extensions.' },
  features: {
    label: 'Features', title: 'Oracle Features.',
    hierarchical: { title: 'Hierarchical Queries', desc: 'CONNECT BY / START WITH / PRIOR / LEVEL / CONNECT_BY_ROOT / SYS_CONNECT_BY_PATH / NOCYCLE / SIBLINGS ordering.' },
    pivot: { title: 'PIVOT / UNPIVOT', desc: 'Row-to-column / column-to-row transforms. PIVOT ... IN / UNPIVOT ... INCLUDE|EXCLUDE NULLS (11g+).' },
    merge: { title: 'MERGE', desc: 'MERGE INTO ... USING ... ON ... WHEN MATCHED / NOT MATCHED. Oracle native MERGE syntax.' },
    hints: { title: 'Query Hints', desc: 'FULL / INDEX / PARALLEL / USE_NL / USE_HASH / DRIVING_SITE / APPEND and other Oracle optimizer hints.' },
    pagination: { title: 'FETCH FIRST', desc: 'OFFSET ... ROWS FETCH NEXT ... ROWS ONLY (12c+). Older versions use ROWNUM pagination.' },
    for_update: { title: 'FOR UPDATE Extensions', desc: 'FOR UPDATE OF / NOWAIT / WAIT n / SKIP LOCKED. Oracle-unique row lock wait control.' }
  },
  connection: {
    label: 'Connection', title: 'Connection Configuration.',
    desc: 'OracleConnectionConfig extends ConnectionConfig, mixing in Pool / SSL / Timezone / Version / Logging configuration groups.'
  },
  config_mixins: {
    label: 'Config Mixins', title: 'Configuration Mixins.',
    pool: 'ConnectionPoolMixin',
    ssl: 'SSLMixin',
    timezone: 'TimezoneMixin',
    version: 'VersionMixin',
    logging: 'LoggingMixin'
  },
  dialect: {
    label: 'Dialect', title: 'OracleDialect Version-Aware.',
    desc: 'OracleDialect relies on the _ORACLE_VERSION_BOUNDARIES dictionary with version thresholds: 10g / 11g / 12c / 12.2 / 18c / 21c / 23ai driving feature toggles.'
  },
  dialect_features: {
    label: 'Feature Matrix', title: 'Dialect Feature Matrix.',
    supported: 'Supported',
    unsupported: 'Not Supported',
    oracle_specific: 'Oracle-specific'
  },
  protocols: {
    label: 'Protocols', title: 'Oracle-specific Protocols.',
    hierarchical: 'OracleHierarchicalQuerySupport',
    pivot: 'OraclePivotSupport',
    hint: 'OracleQueryHintSupport',
    flashback: 'OracleFlashbackSupport',
    for_update: 'OracleForUpdateSupport'
  },
  hierarchical_code: { label: 'Hierarchical', title: 'Hierarchical Query Example.' },
  pivot_code: { label: 'PIVOT', title: 'PIVOT / UNPIVOT Example.' },
  merge_code: { label: 'MERGE', title: 'MERGE Statement Example.' },
  hint_code: { label: 'Hints', title: 'Query Hints Example.' },
  type_adapters: { label: 'Type Adapters', title: 'Oracle Type Adapters.' },
  functions: {
    label: 'Functions', title: 'Oracle-specific Function Factories.',
    json: 'JSON',
    hierarchical: 'Hierarchical',
    analytics: 'Analytics',
    datetime: 'DateTime'
  },
  transaction: {
    label: 'Transaction', title: 'Transaction Control.',
    desc: 'OracleTransactionManager supports four isolation levels, default READ_COMMITTED. SET TRANSACTION / SAVEPOINT / read-only transactions supported.'
  },
  async: {
    label: 'Async', title: 'Async Support.',
    desc: 'AsyncOracleBackend lazily loaded, using oracledb async driver.'
  },
  env_config: { label: 'Environment', title: 'Environment Variable Configuration.' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
