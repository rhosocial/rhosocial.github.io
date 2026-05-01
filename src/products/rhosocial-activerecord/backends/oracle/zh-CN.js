window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { back: '返回后端', sub: '企业级 RDBMS。层次查询 / PIVOT / MERGE / FETCH FIRST / 查询提示 / FOR UPDATE 扩展。' },
  features: {
    label: 'Features', title: 'Oracle 特性。',
    hierarchical: { title: '层次查询', desc: 'CONNECT BY / START WITH / PRIOR / LEVEL / CONNECT_BY_ROOT / SYS_CONNECT_BY_PATH / NOCYCLE / SIBLINGS 排序。' },
    pivot: { title: 'PIVOT / UNPIVOT', desc: '行转列 / 列转行。PIVOT ... IN / UNPIVOT ... INCLUDE|EXCLUDE NULLS（11g+）。' },
    merge: { title: 'MERGE', desc: 'MERGE INTO ... USING ... ON ... WHEN MATCHED / NOT MATCHED。Oracle 原生 MERGE 语法。' },
    hints: { title: '查询提示', desc: 'FULL / INDEX / PARALLEL / USE_NL / USE_HASH / DRIVING_SITE / APPEND 等 Oracle 优化器提示。' },
    pagination: { title: 'FETCH FIRST', desc: 'OFFSET ... ROWS FETCH NEXT ... ROWS ONLY（12c+）。旧版本使用 ROWNUM 分页。' },
    for_update: { title: 'FOR UPDATE 扩展', desc: 'FOR UPDATE OF / NOWAIT / WAIT n / SKIP LOCKED。Oracle 独有的行锁等待控制。' }
  },
  connection: {
    label: 'Connection', title: '连接配置。',
    desc: 'OracleConnectionConfig 继承 ConnectionConfig，混入 Pool / SSL / Timezone / Version / Logging 五组配置。'
  },
  config_mixins: {
    label: 'Config Mixins', title: '配置混入。',
    pool: 'ConnectionPoolMixin',
    ssl: 'SSLMixin',
    timezone: 'TimezoneMixin',
    version: 'VersionMixin',
    logging: 'LoggingMixin'
  },
  dialect: {
    label: 'Dialect', title: 'OracleDialect 版本感知。',
    desc: 'OracleDialect 依赖 _ORACLE_VERSION_BOUNDARIES 字典，版本阈值驱动功能开关：10g / 11g / 12c / 12.2 / 18c / 21c / 23ai。'
  },
  dialect_features: {
    label: 'Feature Matrix', title: '方言功能矩阵。',
    supported: '支持',
    unsupported: '不支持',
    oracle_specific: 'Oracle 专有'
  },
  protocols: {
    label: 'Protocols', title: 'Oracle 专有协议。',
    hierarchical: 'OracleHierarchicalQuerySupport',
    pivot: 'OraclePivotSupport',
    hint: 'OracleQueryHintSupport',
    flashback: 'OracleFlashbackSupport',
    for_update: 'OracleForUpdateSupport'
  },
  hierarchical_code: { label: 'Hierarchical', title: '层次查询示例。' },
  pivot_code: { label: 'PIVOT', title: 'PIVOT / UNPIVOT 示例。' },
  merge_code: { label: 'MERGE', title: 'MERGE 语句示例。' },
  hint_code: { label: 'Hints', title: '查询提示示例。' },
  type_adapters: { label: 'Type Adapters', title: 'Oracle 类型适配器。' },
  functions: {
    label: 'Functions', title: 'Oracle 专有函数工厂。',
    json: 'JSON',
    hierarchical: '层次',
    analytics: '分析',
    datetime: '日期时间'
  },
  transaction: {
    label: 'Transaction', title: '事务控制。',
    desc: 'OracleTransactionManager 支持四种隔离级别，默认 READ_COMMITTED。支持 SET TRANSACTION / SAVEPOINT / 只读事务。'
  },
  async: {
    label: 'Async', title: '异步支持。',
    desc: 'AsyncOracleBackend 懒加载，使用 oracledb 异步驱动。'
  },
  env_config: { label: 'Environment', title: '环境变量配置。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' }
};
