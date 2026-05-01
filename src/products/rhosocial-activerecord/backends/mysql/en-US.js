window.I18N = window.I18N || {};
window.I18N['en-us'] = {
meta: { name: 'English' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
hero: { back: 'Backends', sub: 'Mature enterprise-grade relational database. Connection pool, SSL encryption, charset, and partition support.' },
features: {
label: 'Features', title: 'MySQL Features.',
enterprise: { title: 'Enterprise-Grade', desc: 'Connection pool, SSL/TLS encryption, multiple charsets and collations. Supports all four isolation levels: READ_UNCOMMITTED / READ_COMMITTED / REPEATABLE_READ / SERIALIZABLE.' },
upsert: { title: 'Native Upsert', desc: 'ON DUPLICATE KEY UPDATE / REPLACE INTO / INSERT IGNORE — three conflict resolution strategies with no extra extensions needed.' },
partition: { title: 'Partitioned Tables', desc: 'RANGE / LIST / HASH / KEY partitioning. Format partition DDL via MySQLPartitionSupport protocol.' },
show: { title: 'SHOW Commands', desc: '17 SHOW expression classes covering SHOW CREATE TABLE / SHOW COLUMNS / SHOW INDEX / SHOW STATUS and more.' }
},
connection: {
label: 'Connection', title: 'Connection Configuration.',
desc: 'MySQLConnectionConfig extends ConnectionConfig, mixing in SSL / Charset / Timezone configuration groups. Environment variables supported.'
},
config_mixins: {
label: 'Config Mixins', title: 'Configuration Mixins.',
ssl: 'SSLMixin',
charset: 'CharsetMixin',
timezone: 'TimezoneMixin'
},
ssl_config: { label: 'SSL', title: 'SSL Connection Example.' },
type_helpers: {
label: 'Type Helpers', title: 'MySQL Type Helpers.',
enum: 'MySQLEnumType',
set: 'MySQLSetType'
},
dialect: {
label: 'Dialect', title: 'MySQLDialect Version-Aware.',
desc: 'MySQLDialect accepts a version tuple at init, dynamically enabling/disabling protocol methods. 8.0+ is the key threshold.'
},
dialect_features: {
label: 'Feature Matrix', title: 'Dialect Feature Matrix.',
supported: 'Supported',
unsupported: 'Not Supported',
mysql_specific: 'MySQL-specific'
},
insert_syntax: { label: 'INSERT Syntax', title: 'INSERT Syntax Extensions.' },
protocols: {
label: 'Protocols', title: 'MySQL-specific Protocols.',
show: 'MySQLShowSupport',
partition: 'MySQLPartitionSupport',
engine: 'MySQLEngineSupport'
},
show_code: { label: 'SHOW Example', title: 'SHOW Command Example.' },
partition_code: { label: 'Partition', title: 'Partitioned Table Example.' },
functions: {
label: 'Functions', title: 'MySQL-specific Function Factories.',
json: 'JSON',
spatial: 'Spatial',
fulltext: 'Full-Text Search',
set_enum: 'SET / ENUM',
string: 'String',
datetime: 'Date/Time',
system: 'System'
},
function_code: { label: 'Function Example', title: 'Function Usage Example.' },
transaction: {
label: 'Transaction', title: 'Transaction Control.',
desc: 'MySQLTransactionManager supports all four SQL standard isolation levels. Default is REPEATABLE_READ.'
},
async: {
label: 'Async', title: 'Async Support.',
desc: 'AsyncMySQLBackend / AsyncMySQLTransactionManager lazily loaded, requires aiomysql.'
},
env_config: { label: 'Environment', title: 'Environment Variable Configuration.' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};