window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
meta: { name: '简体中文' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
hero: { back: '返回后端', sub: 'MySQL 兼容的增强分支。SEQUENCE / RETURNING / 系统版本化表 / INTERSECT & EXCEPT 独有支持。' },
features: {
label: 'Features', title: 'MariaDB 特性。',
sequence: { title: '序列', desc: 'CREATE SEQUENCE / NEXTVAL / CURRVAL / SETVAL（10.3+）。独立序列对象，替代 AUTO_INCREMENT。' },
returning: { title: 'RETURNING', desc: 'INSERT / DELETE / REPLACE 支持 RETURNING 子句（10.5+）。MySQL 不支持此功能。' },
versioning: { title: '系统版本化', desc: 'WITH SYSTEM VERSIONING / FOR SYSTEM_TIME AS OF / BETWEEN（10.3+）。时点查询，无需额外表。' },
set_ops: { title: '集合运算', desc: 'INTERSECT / EXCEPT / INTERSECT ALL / EXCEPT ALL（10.3+）。MySQL 8.0.31+ 才部分支持。' }
},
connection: {
label: 'Connection', title: '连接配置。',
desc: 'MariaDBConnectionConfig 继承 ConnectionConfig，混入 Pool / SSL / Charset / Timezone / Version / Logging 六组配置。'
},
config_mixins: {
label: 'Config Mixins', title: '配置混入。',
pool: 'ConnectionPoolMixin',
ssl: 'SSLMixin',
charset: 'CharsetMixin',
timezone: 'TimezoneMixin',
version: 'VersionMixin',
logging: 'LoggingMixin'
},
dialect: {
label: 'Dialect', title: 'MariaDBDialect 版本感知。',
desc: 'MariaDBDialect 依赖 MARIADB_VERSION_BOUNDARIES 字典，11 个版本阈值驱动功能开关。'
},
dialect_features: {
label: 'Feature Matrix', title: '方言功能矩阵。',
supported: '支持',
unsupported: '不支持',
mariadb_specific: 'MariaDB 专有'
},
protocols: {
label: 'Protocols', title: 'MariaDB 专有协议。',
sequence: 'MariaDBSequenceSupport',
returning: 'MariaDBReturningSupport',
versioning: 'MariaDBSystemVersioningSupport',
set_ops: 'MariaDBIntersectExceptSupport',
json: 'MariaDBJSONFunctionSupport',
fulltext: 'MariaDBFullTextSearchSupport'
},
sequence_code: { label: 'Sequence', title: '序列操作示例。' },
versioning_code: { label: 'Versioning', title: '系统版本化示例。' },
insert_syntax: { label: 'INSERT Syntax', title: 'INSERT 语法扩展。' },
type_adapters: { label: 'Type Adapters', title: 'MariaDB 类型适配器。' },
functions: {
label: 'Functions', title: 'MariaDB 专有函数工厂。',
json: 'JSON',
sequence: 'Sequence',
fulltext: '全文搜索',
set: 'SET',
spatial: '空间'
},
transaction: {
label: 'Transaction', title: '事务控制。',
desc: 'MariaDBTransactionManager 支持全部四种 SQL 标准隔离级别。默认 REPEATABLE_READ。支持 START TRANSACTION READ ONLY。'
},
async: {
label: 'Async', title: '异步支持。',
desc: 'AsyncMariaDBBackend 懒加载。优先使用 mariadb.aio，回退到 aiomysql。'
},
env_config: { label: 'Environment', title: '环境变量配置。' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};