window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { back: '返回后端', sub: '内置、零依赖、单文件数据库。同步/异步双模式，PRAGMA 精细控制。' },
  features: {
    label: 'Features', title: 'SQLite 特性。',
    zero: { title: '零配置', desc: '开箱即用，无需安装服务器。默认启用 WAL 模式与外键约束。' },
    file: { title: '单文件', desc: '整个数据库是一个文件，便于分发。也支持 :memory: 内存数据库。' },
    acid: { title: '完整 ACID', desc: '事务保证原子性、一致性、隔离性、持久性。DEFERRED / IMMEDIATE / EXCLUSIVE 三种 BEGIN 模式。' },
    ext: { title: '扩展生态', desc: 'FTS5 全文搜索、JSON1、R-Tree、Geopoly 等虚拟表扩展。扩展注册表运行时检测可用性。' }
  },
  connection: {
    label: 'Connection', title: '连接配置。',
    desc: 'SQLiteConnectionConfig 继承 ConnectionConfig，混入 PRAGMA / Driver / Storage 三组配置。'
  },
  config_mixins: {
    label: 'Config Mixins', title: '配置混入。',
    pragma: 'SQLitePragmaMixin',
    driver: 'SQLiteDriverMixin',
    storage: 'SQLiteStorageMixin'
  },
  default_pragmas: {
    label: 'Pragmas', title: '默认 PRAGMA。',
    desc: 'SQLiteConnectionConfig 自动启用以下 PRAGMA，兼顾安全性与性能：'
  },
  type_adapters: {
    label: 'Type Adapters', title: '类型适配器。',
    blob: 'SQLiteBlobAdapter',
    json: 'SQLiteJSONAdapter',
    uuid: 'SQLiteUUIDAdapter'
  },
  dialect: {
    label: 'Dialect', title: 'SQLiteDialect 版本感知。',
    desc: 'SQLiteDialect 在初始化时接受版本元组，动态启用/禁用协议方法。'
  },
  dialect_features: {
    label: 'Feature Matrix', title: '方言功能矩阵。',
    supported: '支持',
    unsupported: '不支持',
    sqlite_specific: 'SQLite 专有'
  },
  insert_syntax: { label: 'INSERT Syntax', title: 'INSERT 语法扩展。' },
  protocols: {
    label: 'Protocols', title: 'SQLite 专有协议。',
    extension: 'SQLiteExtensionSupport',
    pragma: 'SQLitePragmaSupport',
    vtable: 'SQLiteVirtualTableSupport',
    reindex: 'SQLiteReindexSupport'
  },
  extension: {
    label: 'Extensions', title: '扩展框架。',
    desc: 'SQLiteExtensionRegistry 管理扩展注册与版本感知检测。',
    fts5: 'FTS5 全文搜索',
    json1: 'JSON1',
    rtree: 'R-Tree 空间索引',
    geopoly: 'Geopoly 多边形'
  },
  extension_code: { label: 'FTS5 Example', title: 'FTS5 全文搜索示例。' },
  pragma_framework: {
    label: 'Pragma Framework', title: 'PRAGMA 框架。',
    desc: 'PragmaCategory 枚举分类，PragmaInfo 元数据驱动，6 类 PRAGMA 全覆盖。',
    config: '配置类', info: '信息类', debug: '调试类',
    perf: '性能类', wal: 'WAL 类', compile: '编译时类'
  },
  pragma_code: { label: 'Pragma API', title: 'PRAGMA 操作示例。' },
  transaction: {
    label: 'Transaction', title: '事务控制。',
    desc: 'SQLiteTransactionManager 支持三种 BEGIN 模式，默认 SERIALIZABLE 隔离级别。'
  },
  functions: {
    label: 'Functions', title: 'SQLite 专有函数工厂。',
    string: '字符串', datetime: '日期时间', math: '数学',
    json: 'JSON', blob: 'BLOB', system: '系统', conditional: '条件'
  },
  async: {
    label: 'Async', title: '异步支持。',
    desc: 'AsyncSQLiteBackend / AsyncSQLiteTransactionManager 懒加载，需安装 aiosqlite。'
  },
  env_config: { label: 'Environment', title: '环境变量配置。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};