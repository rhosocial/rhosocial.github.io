window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: { eyebrow: 'Pluggable Backends', title: '用 <em>Backend ABC</em> 写你的数据库。', sub: '后端可插拔，一套 API 兼容多方言。', back: '返回后端' },
  backends: {
    label: 'Supported',
    title: '选择你的<em>后端</em>。',
    sqlite: { desc: '内置、零依赖、单文件。WAL 并发，PRAGMA 精细控制。' },
    postgres: { desc: '30+ 扩展生态，Advisory Lock，DEFERRABLE 事务，向量搜索。' },
    mysql: { desc: 'JSON、全文搜索、空间数据、分区表、17 种 SHOW 命令。' },
    mariadb: { desc: 'SEQUENCE、RETURNING、系统版本化表、INTERSECT/EXCEPT。' },
    sqlserver: { desc: 'OUTPUT 子句、SNAPSHOT 隔离、CROSS/OUTER APPLY、表提示。' },
    oracle: { desc: '层次查询 CONNECT BY、PIVOT/UNPIVOT、Flashback、MERGE。' },
    develop: { title: 'Develop', desc: '实现 Backend ABC，33 协议驱动，命名空间包架构。' }
  },
  architecture: {
    label: 'Architecture',
    title: '表达式-方言-后端。',
    expression: '收集语义参数，不含 SQL 细节。BaseExpression.to_sql(dialect) 委托方言生成目标 SQL。',
    dialect: 'format_*() 方法生成目标数据库 SQL。33 @runtime_checkable 协议声明能力边界。',
    backend: '执行 SQL、管理连接、处理结果。12 层 Mixin MRO 组合，Template Method 模式。'
  },
  sync_async: {
    label: 'Sync / Async',
    title: '同步/异步<em>对等</em>。',
    desc: 'StorageBackend / AsyncStorageBackend API 完全一致，切换成本为零。非 I/O 逻辑放 Mixin 共享，I/O 逻辑分别实现。'
  },
  protocol_driven: {
    label: 'Protocol Driven',
    title: '协议<em>驱动</em>。',
    desc: '@runtime_checkable 协议检测后端能力，不支持的特性抛出 UnsupportedFeatureError 而非静默失败。isinstance(dialect, Protocol) 安全使用。'
  },
  comparison: {
    label: 'Comparison',
    title: '后端<em>对比</em>。',
    headers: { feature: '特性', sqlite: 'SQLite', mysql: 'MySQL', postgres: 'PostgreSQL', mariadb: 'MariaDB', oracle: 'Oracle', sqlserver: 'SQL Server' },
    rows: {
      cte: 'CTE (WITH)',
      window: '窗口函数',
      returning: 'RETURNING',
      merge: 'MERGE',
      lateral: 'LATERAL',
      json: 'JSON',
      array: '数组类型',
      ilike: 'ILIKE / 大小写不敏感',
      upsert: 'Upsert',
      partition: '分区表',
      savepoint: '保存点',
      async_driver: '异步驱动'
    }
  },
  features: { label: 'Features', title: 'SQLite 特性。', zero: { title: '零配置', desc: '开箱即用，无需安装服务器。' }, file: { title: '单文件', desc: '整个数据库是一个文件，便于分发。' }, acid: { title: '完整 ACID', desc: '事务保证原子性、一致性、隔离性、持久性。' }, cross: { title: '跨平台', desc: 'Windows、Linux、macOS、Android、iOS 通用的。' } },
  example: { label: 'Example', title: '快速开始。' },
  abc: { label: 'Backend ABC', title: '写你自己的<em>后端</em>，也就几十行。', intro: '实现 Backend 接口，即可接入新数据库。12 层 Mixin MRO 组合，33 协议驱动，命名空间包架构自动发现。' },
  footer: { hotkeys: '25 themes · Ctrl+key theme / Alt+key lang' },
  create: { label: 'Create', title: '创建记录。' },
  read: { label: 'Read', title: '读取记录。' },
  update: { label: 'Update', title: '更新记录。' },
  delete: { label: 'Delete', title: '删除记录。' }
};
