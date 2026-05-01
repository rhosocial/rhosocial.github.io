window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
meta: { name: '简体中文' },
nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
hero: { back: '返回后端', sub: '功能最丰富的开源数据库。ENUM / ARRAY / JSONB / Range / 分区 / 物化视图全覆盖。' },
features: {
label: 'Features', title: 'PostgreSQL 特性。',
types: { title: '丰富类型', desc: '原生 ENUM / ARRAY / JSONB / Range / UUID / HSTORE。PostgresEnumType 类型辅助自动管理 DDL。' },
merge: { title: 'MERGE 语句', desc: 'PostgreSQL 15+ 原生 MERGE INTO 支持，标准化 upsert 语义替代 INSERT ... ON CONFLICT。' },
partition: { title: '声明式分区', desc: 'RANGE / LIST / HASH 声明式分区。PostgresPartitionSupport 协议 + ATTACH / DETACH 分区管理。' },
mvcc: { title: 'MVCC', desc: '多版本并发控制，四种隔离级别全支持。RETURNING 子句、SAVEPOINT、advisory lock 完备。' }
},
connection: {
label: 'Connection', title: '连接配置。',
desc: 'PostgresConnectionConfig 继承 ConnectionConfig，混入 SSL / SearchPath / Timezone 三组配置。'
},
config_mixins: {
label: 'Config Mixins', title: '配置混入。',
ssl: 'SSLMixin',
search_path: 'SearchPathMixin',
timezone: 'TimezoneMixin'
},
ssl_config: { label: 'SSL', title: 'SSL 连接示例。' },
type_helpers: {
label: 'Type Helpers', title: 'PostgreSQL 类型辅助。',
enum: 'PostgresEnumType',
array: 'ARRAY',
jsonb: 'JSONB',
range: 'Range'
},
enum_ddl: { label: 'ENUM DDL', title: '枚举类型 DDL。' },
dialect: {
label: 'Dialect', title: 'PostgresDialect 版本感知。',
desc: 'PostgresDialect 在初始化时接受版本元组，动态启用/禁用协议方法。'
},
dialect_features: {
label: 'Feature Matrix', title: '方言功能矩阵。',
supported: '支持',
unsupported: '不支持',
pg_specific: 'PostgreSQL 专有'
},
protocols: {
label: 'Protocols', title: 'PostgreSQL 专有协议。',
partition: 'PostgresPartitionSupport',
enum: 'PostgresEnumSupport',
range: 'PostgresRangeTypeSupport'
},
ddl_expressions: {
label: 'DDL', title: 'PostgreSQL 专有 DDL 表达式。',
maintenance: '维护',
partition_ddl: '分区',
statistics: '统计',
metadata: '元数据'
},
ddl_code: { label: 'DDL Example', title: 'DDL 操作示例。' },
functions: {
label: 'Functions', title: 'PostgreSQL 专有函数工厂。',
json: 'JSON/JSONB',
string: '字符串',
range: 'Range',
aggregate: '聚合',
system: '系统',
spatial: 'PostGIS',
datetime: '日期时间'
},
function_code: { label: 'Function Example', title: '函数使用示例。' },
transaction: {
label: 'Transaction', title: '事务控制。',
desc: 'PostgresTransactionManager 支持全部四种 SQL 标准隔离级别。默认 READ_COMMITTED。支持 SET TRANSACTION 设置。'
},
async: {
label: 'Async', title: '异步支持。',
desc: 'AsyncPostgresBackend / AsyncPostgresTransactionManager 懒加载，需安装 asyncpg。'
},
env_config: { label: 'Environment', title: '环境变量配置。' },
footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};