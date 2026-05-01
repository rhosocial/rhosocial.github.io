window.I18N = window.I18N || {};
window.I18N['en-us'] = {
meta: { name: 'English' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Follow theme' },
hero: { back: 'Backends', sub: 'MySQL-compatible enhanced fork. Unique support for SEQUENCE / RETURNING / System-Versioned Tables / INTERSECT & EXCEPT.' },
features: {
label: 'Features', title: 'MariaDB Features.',
sequence: { title: 'Sequences', desc: 'CREATE SEQUENCE / NEXTVAL / CURRVAL / SETVAL (10.3+). Independent sequence objects replacing AUTO_INCREMENT.' },
returning: { title: 'RETURNING', desc: 'INSERT / DELETE / REPLACE support RETURNING clause (10.5+). MySQL does not support this.' },
versioning: { title: 'System Versioning', desc: 'WITH SYSTEM VERSIONING / FOR SYSTEM_TIME AS OF / BETWEEN (10.3+). Point-in-time queries without extra tables.' },
set_ops: { title: 'Set Operations', desc: 'INTERSECT / EXCEPT / INTERSECT ALL / EXCEPT ALL (10.3+). MySQL 8.0.31+ only partially supports these.' }
},
connection: {
label: 'Connection', title: 'Connection Configuration.',
desc: 'MariaDBConnectionConfig extends ConnectionConfig, mixing in Pool / SSL / Charset / Timezone / Version / Logging configuration groups.'
},
config_mixins: {
label: 'Config Mixins', title: 'Configuration Mixins.',
pool: 'ConnectionPoolMixin',
ssl: 'SSLMixin',
charset: 'CharsetMixin',
timezone: 'TimezoneMixin',
version: 'VersionMixin',
logging: 'LoggingMixin'
},
dialect: {
label: 'Dialect', title: 'MariaDBDialect Version-Aware.',
desc: 'MariaDBDialect relies on the MARIADB_VERSION_BOUNDARIES dictionary with 11 version thresholds driving feature toggles.'
},
dialect_features: {
label: 'Feature Matrix', title: 'Dialect Feature Matrix.',
supported: 'Supported',
unsupported: 'Not Supported',
mariadb_specific: 'MariaDB-specific'
},
protocols: {
label: 'Protocols', title: 'MariaDB-specific Protocols.',
sequence: 'MariaDBSequenceSupport',
returning: 'MariaDBReturningSupport',
versioning: 'MariaDBSystemVersioningSupport',
set_ops: 'MariaDBIntersectExceptSupport',
json: 'MariaDBJSONFunctionSupport',
fulltext: 'MariaDBFullTextSearchSupport'
},
sequence_code: { label: 'Sequence', title: 'Sequence Operations Example.' },
versioning_code: { label: 'Versioning', title: 'System Versioning Example.' },
insert_syntax: { label: 'INSERT Syntax', title: 'INSERT Syntax Extensions.' },
type_adapters: { label: 'Type Adapters', title: 'MariaDB Type Adapters.' },
functions: {
label: 'Functions', title: 'MariaDB-specific Function Factories.',
json: 'JSON',
sequence: 'Sequence',
fulltext: 'Full-Text Search',
set: 'SET',
spatial: 'Spatial'
},
transaction: {
label: 'Transaction', title: 'Transaction Control.',
desc: 'MariaDBTransactionManager supports all four SQL standard isolation levels. Default is REPEATABLE_READ. START TRANSACTION READ ONLY supported.'
},
async: {
label: 'Async', title: 'Async Support.',
desc: 'AsyncMariaDBBackend lazily loaded. Prefers mariadb.aio, falls back to aiomysql.'
},
env_config: { label: 'Environment', title: 'Environment Variable Configuration.' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};