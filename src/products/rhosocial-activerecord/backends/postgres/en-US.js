window.I18N = window.I18N || {};
window.I18N['en-us'] = {
meta: { name: 'English' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
hero: { back: 'Backends', sub: 'The most feature-rich open-source database. Full coverage of ENUM / ARRAY / JSONB / Range / Partition / Materialized Views.' },
features: {
label: 'Features', title: 'PostgreSQL Features.',
types: { title: 'Rich Types', desc: 'Native ENUM / ARRAY / JSONB / Range / UUID / HSTORE. PostgresEnumType helper manages DDL lifecycle automatically.' },
merge: { title: 'MERGE Statement', desc: 'PostgreSQL 15+ native MERGE INTO support, standardized upsert semantics replacing INSERT ... ON CONFLICT.' },
partition: { title: 'Declarative Partitioning', desc: 'RANGE / LIST / HASH declarative partitioning. PostgresPartitionSupport protocol + ATTACH / DETACH management.' },
mvcc: { title: 'MVCC', desc: 'Multi-version concurrency control, all four isolation levels supported. RETURNING clause, SAVEPOINT, advisory lock complete.' }
},
connection: {
label: 'Connection', title: 'Connection Configuration.',
desc: 'PostgresConnectionConfig extends ConnectionConfig, mixing in SSL / SearchPath / Timezone configuration groups.'
},
config_mixins: {
label: 'Config Mixins', title: 'Configuration Mixins.',
ssl: 'SSLMixin',
search_path: 'SearchPathMixin',
timezone: 'TimezoneMixin'
},
ssl_config: { label: 'SSL', title: 'SSL Connection Example.' },
type_helpers: {
label: 'Type Helpers', title: 'PostgreSQL Type Helpers.',
enum: 'PostgresEnumType',
array: 'ARRAY',
jsonb: 'JSONB',
range: 'Range'
},
enum_ddl: { label: 'ENUM DDL', title: 'Enum Type DDL.' },
dialect: {
label: 'Dialect', title: 'PostgresDialect Version-Aware.',
desc: 'PostgresDialect accepts a version tuple at init, dynamically enabling/disabling protocol methods.'
},
dialect_features: {
label: 'Feature Matrix', title: 'Dialect Feature Matrix.',
supported: 'Supported',
unsupported: 'Not Supported',
pg_specific: 'PostgreSQL-specific'
},
protocols: {
label: 'Protocols', title: 'PostgreSQL-specific Protocols.',
partition: 'PostgresPartitionSupport',
enum: 'PostgresEnumSupport',
range: 'PostgresRangeTypeSupport'
},
ddl_expressions: {
label: 'DDL', title: 'PostgreSQL-specific DDL Expressions.',
maintenance: 'Maintenance',
partition_ddl: 'Partition',
statistics: 'Statistics',
metadata: 'Metadata'
},
ddl_code: { label: 'DDL Example', title: 'DDL Operations Example.' },
functions: {
label: 'Functions', title: 'PostgreSQL-specific Function Factories.',
json: 'JSON/JSONB',
string: 'String',
range: 'Range',
aggregate: 'Aggregate',
system: 'System',
spatial: 'PostGIS',
datetime: 'Date/Time'
},
function_code: { label: 'Function Example', title: 'Function Usage Example.' },
transaction: {
label: 'Transaction', title: 'Transaction Control.',
desc: 'PostgresTransactionManager supports all four SQL standard isolation levels. Default is READ_COMMITTED. SET TRANSACTION supported.'
},
async: {
label: 'Async', title: 'Async Support.',
desc: 'AsyncPostgresBackend / AsyncPostgresTransactionManager lazily loaded, requires asyncpg.'
},
env_config: { label: 'Environment', title: 'Environment Variable Configuration.' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};