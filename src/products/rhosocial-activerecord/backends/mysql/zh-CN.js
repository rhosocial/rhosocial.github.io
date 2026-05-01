window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
meta: { name: '简体中文' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
hero: { back: '返回后端', sub: '成熟的企业级关系数据库。连接池、SSL 加密、字符集与分区完整支持。' },
features: {
label: 'Features', title: 'MySQL 特性。',
enterprise: { title: '企业级', desc: '连接池、SSL/TLS 加密、多字符集与排序规则。支持 READ_UNCOMMITTED / READ_COMMITTED / REPEATABLE_READ / SERIALIZABLE 四种隔离级别。' },
upsert: { title: '原生 Upsert', desc: 'ON DUPLICATE KEY UPDATE / REPLACE INTO / INSERT IGNORE 三种冲突处理策略，无需额外扩展。' },
partition: { title: '分区表', desc: 'RANGE / LIST / HASH / KEY 分区。通过 MySQLPartitionSupport 协议格式化分区 DDL。' },
show: { title: 'SHOW 命令', desc: '17 种 SHOW 表达式类，覆盖 SHOW CREATE TABLE / SHOW COLUMNS / SHOW INDEX / SHOW STATUS 等。' }
},
connection: {
label: 'Connection', title: '连接配置。',
desc: 'MySQLConnectionConfig 继承 ConnectionConfig，混入 SSL / Charset / Timezone 三组配置。支持环境变量。'
},
config_mixins: {
label: 'Config Mixins', title: '配置混入。',
ssl: 'SSLMixin',
charset: 'CharsetMixin',
timezone: 'TimezoneMixin'
},
ssl_config: { label: 'SSL', title: 'SSL 连接示例。' },
type_helpers: {
label: 'Type Helpers', title: 'MySQL 类型辅助。',
enum: 'MySQLEnumType',
set: 'MySQLSetType'
},
dialect: {
label: 'Dialect', title: 'MySQLDialect 版本感知。',
desc: 'MySQLDialect 在初始化时接受版本元组，动态启用/禁用协议方法。8.0+ 是关键分界线。'
},
dialect_features: {
label: 'Feature Matrix', title: '方言功能矩阵。',
supported: '支持',
unsupported: '不支持',
mysql_specific: 'MySQL 专有'
},
insert_syntax: { label: 'INSERT Syntax', title: 'INSERT 语法扩展。' },
protocols: {
label: 'Protocols', title: 'MySQL 专有协议。',
show: 'MySQLShowSupport',
partition: 'MySQLPartitionSupport',
engine: 'MySQLEngineSupport'
},
show_code: { label: 'SHOW Example', title: 'SHOW 命令示例。' },
partition_code: { label: 'Partition', title: '分区表示例。' },
functions: {
label: 'Functions', title: 'MySQL 专有函数工厂。',
json: 'JSON',
spatial: '空间',
fulltext: '全文搜索',
set_enum: 'SET / ENUM',
string: '字符串',
datetime: '日期时间',
system: '系统'
},
function_code: { label: 'Function Example', title: '函数使用示例。' },
transaction: {
label: 'Transaction', title: '事务控制。',
desc: 'MySQLTransactionManager 支持全部四种 SQL 标准隔离级别。默认 REPEATABLE_READ。'
},
async: {
label: 'Async', title: '异步支持。',
desc: 'AsyncMySQLBackend / AsyncMySQLTransactionManager 懒加载，需安装 aiomysql。'
},
env_config: { label: 'Environment', title: '环境变量配置。' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};