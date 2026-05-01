window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { back: '返回后端', sub: '微软企业级 RDBMS。OUTPUT 子句 / MERGE / CROSS APPLY / IDENTITY / OFFSET-FETCH / 表提示 / 索引视图。' },
  features: {
    label: 'Features', title: 'SQL Server 特性。',
    output: { title: 'OUTPUT 子句', desc: 'INSERT / UPDATE / DELETE / MERGE 支持 OUTPUT 子句。inserted.* / deleted.* 虚拟表，替代 RETURNING。' },
    merge: { title: 'MERGE', desc: 'MERGE ... USING ... ON ... WHEN MATCHED / NOT MATCHED。支持 $action 输出。通过 MERGE 实现 UPSERT。' },
    apply: { title: 'CROSS / OUTER APPLY', desc: '替代 LATERAL JOIN。CROSS APPLY（内连接） / OUTER APPLY（左连接）。关联子查询横向关联。' },
    identity: { title: 'IDENTITY', desc: 'IDENTITY(1,1) 自增列。SET IDENTITY_INSERT ON/OFF。SCOPE_IDENTITY() / IDENT_CURRENT() / DBCC CHECKIDENT。' },
    pagination: { title: 'OFFSET-FETCH', desc: 'OFFSET n ROWS FETCH NEXT m ROWS ONLY（2012+）。旧版本使用 TOP / ROW_NUMBER() 分页。' },
    hints: { title: '表提示', desc: 'WITH (NOLOCK / UPDLOCK / XLOCK / READPAST / TABLOCKX / INDEX / HOLDLOCK) — 查询级锁控制。' }
  },
  connection: {
    label: 'Connection', title: '连接配置。',
    desc: 'SQLServerConnectionConfig 继承 pydantic.BaseModel，纯 Pydantic 模型（无框架混入）。ODBC 连接字符串构建。'
  },
  config_fields: {
    label: 'Config Fields', title: '配置字段。',
    host: 'host',
    port: 'port',
    database: 'database',
    driver: 'driver',
    auth: '认证',
    encrypt: '加密',
    pool: '连接池'
  },
  dialect: {
    label: 'Dialect', title: 'SQLServerDialect 版本感知。',
    desc: 'SQLServerDialect 依赖版本常量：2012 / 2014 / 2016 / 2017 / 2019 / 2022，驱动功能开关。'
  },
  dialect_features: {
    label: 'Feature Matrix', title: '方言功能矩阵。',
    supported: '支持',
    unsupported: '不支持',
    sqlserver_specific: 'SQL Server 专有'
  },
  protocols: {
    label: 'Protocols', title: 'SQL Server 专有协议。',
    indexed_view: 'SQLServerIndexedViewSupport',
    identity: 'SQLServerIdentitySupport',
    table_hint: 'SQLServerTableHintSupport',
    output: 'SQLServerOutputSupport'
  },
  output_code: { label: 'OUTPUT', title: 'OUTPUT 子句示例。' },
  merge_code: { label: 'MERGE', title: 'MERGE 语句示例。' },
  set_statements: { label: 'SET', title: 'SET 语句控制。' },
  type_adapters: { label: 'Type Adapters', title: 'SQL Server 类型适配器。' },
  functions: {
    label: 'Functions', title: 'SQL Server 专有函数。',
    json: 'JSON (2016+)',
    string: '字符串 (2017+)',
    datetime: '日期时间 (2012+)',
    hierarchy: '层级'
  },
  transaction: {
    label: 'Transaction', title: '事务控制。',
    desc: 'SQLServerTransactionManager 支持五种隔离级别，含 SQL Server 专有 SNAPSHOT。支持 SET LOCK_TIMEOUT / DEADLOCK_PRIORITY。'
  },
  async: {
    label: 'Async', title: '异步支持。',
    desc: 'AsyncSQLServerBackend 懒加载，使用 aioodbc 异步驱动。注意：继承同步 StorageBackend 基类。'
  },
  env_config: { label: 'Environment', title: '环境变量配置。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
