/**
 * index/zh-cn.js — 首页中文词典
 * 规范：window.I18N['zh-cn'] 合并写入（同名 key 覆盖）
 */
window.I18N = window.I18N || {};
window.I18N['zh-cn'] = Object.assign(window.I18N['zh-cn'] || {}, {
  meta: { name: '简体中文' },
  brand: { subtitle: '· Theme Lab' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices' },
  control: {
    theme_label: '主题',
    font_label: '字体',
    lang_label: '语言',
    font_auto: '跟随主题'
  },

  /* Hero */
  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord,<br>为 Python <em>重新设计</em>。',
    sub: '<strong>rhosocial-activerecord</strong> 用 Python 原生类型注解定义模型。',
    cta_secondary: '查看特性 →'
  },

  /* 6-Feature 卡片 */
  features: {
    label: 'Why · 六个核心承诺',
    title: '为什么是 <em>rhosocial ActiveRecord</em>。',
    f1: { num: '01 / 类型即字段', title: '<em>Type-safe</em> by construction', desc: '字段就是 <code>name: str</code>，存储、校验、IDE 补全合而为一。' },
    f2: { num: '02 / 异步一等',   title: 'Sync &amp; async, <em>one API</em>',  desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code>，语义一致。' },
    f3: { num: '03 / 后端可插拔', title: 'Pluggable <em>backends</em>',        desc: 'SQLite 内置；Postgres/MySQL/SQLServer/Oracle 独立包；可自写后端。' },
    f4: { num: '04 / 关系显式',   title: '<em>Relations</em> made explicit',   desc: '<code>ClassVar</code> + 描述符协议，运行时自动替换。' },
    f5: { num: '05 / 事务原子',   title: 'Transactions, <em>properly nested</em>', desc: '上下文管理器 + savepoint，异常即回滚。' },
    f6: { num: '06 / Pythonic',    title: 'Reads like <em>English</em>',        desc: '<code>User.query().where(...).all()</code>——就是 Python。' }
  },

  /* Feature 详情 section */
  f1: {
    label: '01 / Type-safe',
    title: '<em>类型即字段</em>，从 3.8 到 3.12。',
    intro: 'Python 类型注解即模型定义，无需额外 DSL。Pydantic 运行时验证，IDE 完整类型推导。'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>同步 = 异步</em>，语义一致。',
    intro: '同步/异步共享同一套模型定义。<code>for</code> → <code>async for</code>，其他代码不变。'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>后端可插拔</em>，按需选用。',
    intro: '核心包仅依赖 Pydantic。SQLite 内置，其他数据库以独立包发布，<code>configure()</code> 一行切换。'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>关系显式</em>，ClassVar + 描述符。',
    intro: '使用 <code>ClassVar</code> 声明关系字段，避免 Pydantic 扫描。运行时自动替换为 <code>relation()</code>。'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>事务原子</em>，嵌套 savepoint。',
    intro: '嵌套事务自动创建 SAVEPOINT。上下文管理器自动提交/回滚，异常自动回到最近保存点。'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>如英语般阅读</em>，无需 DSL。',
    intro: '链式调用，阅读流畅如英语。<code>.to_sql()</code> 透明查看实际生成 SQL。'
  },

  /* Architecture · 内部三层 (Expression → Dialect → Backend) */
  arch: {
    label: 'Architecture · 三层架构',
    title: '<em>表达式 → 方言 → 后端</em>，职责分明。',
    intro: '查询逻辑、SQL 生成、数据库执行三层解耦。协议（<code>@runtime_checkable</code>）在边界处声明能力——后端不支持的特性抛出 <code>UnsupportedFeatureError</code>，而非静默失败。',
    col1: {
      num: '表达式层',
      title: '<em>语义收集</em>，不含 SQL 细节',
      desc: '<code>BaseExpression.to_sql(dialect)</code> 委托方言生成目标 SQL。同一表达式对象可在所有方言间复用，零 SQL 硬编码。'
    },
    col2: {
      num: '方言层（33 协议）',
      title: '<em>33 协议</em>声明能力边界',
      desc: '<code>format_*()</code> 方法生成目标数据库 SQL。能力检测公式：\\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num: '后端层（12 层 Mixin）',
      title: '<em>12 层 Mixin</em> MRO 组合',
      desc: 'Template Method 模式：非 I/O 逻辑放 Mixin 共享，I/O 逻辑分别实现。\\(n = 12\\) 层 MRO 组合，零重复代码。'
    }
  },

  /* Component Architecture · ActiveRecord + Backend 两层 */
  arch_comp: {
    label: '组件架构',
    title: 'ActiveRecord + Backend，<em>两层独立组合</em>。',
    intro: 'ActiveRecord 是 Backend 的用户；Backend 可独立工作。同步与异步各自对应，互不通用。',

    ar_badge: '应用层',
    ar_title: 'ActiveRecord',
    ar_desc: '模型定义、查询构建、关系管理、事务处理。包含 ActiveQuery、SetOperation、CTEQuery。',

    be_badge: '独立层',
    be_title: 'Backend',
    be_desc: '数据库 I/O 层，可脱离 ActiveRecord 单独使用。SQLite 内置，其他数据库以扩展包形式提供。',

    uses_label: '调用',
    sync_async_note: '同步 ↔ 同步 · 异步 ↔ 异步',

    /* Mermaid DSL — ActiveRecord 侧 */
    ar_diagram: `flowchart TB
    subgraph AR_SYNC["ActiveRecord（同步）"]
        direction TB
        ARS["ActiveRecord"]
        AQS["ActiveQuery"]
        SOS["SetOperation\n(UNION / INTERSECT / EXCEPT)"]
        CTES["CTEQuery\n(WITH ...)"]
        ARS --> AQS
        ARS --> SOS
        ARS --> CTES
    end
    subgraph AR_ASYNC["AsyncActiveRecord（异步）"]
        direction TB
        ARA["AsyncActiveRecord"]
        AQA["AsyncActiveQuery"]
        SOA["AsyncSetOperation"]
        CTEA["AsyncCTEQuery"]
        ARA --> AQA
        ARA --> SOA
        ARA --> CTEA
    end
    AR_SYNC ~~~ AR_ASYNC`,

    /* Mermaid DSL — Backend 侧 */
    be_diagram: `flowchart TB
    subgraph SYNC["同步后端"]
        direction TB
        SB["StorageBackend\n（抽象基类）"]
        subgraph Builtin["内置"]
            SQLS["SQLiteBackend"]
        end
        subgraph Ext["扩展包"]
            direction LR
            MYS["MySQL / MariaDB"]
            PGS["PostgreSQL"]
            ORS["Oracle"]
            SSS["SQL Server"]
        end
        SB --> Builtin
        SB --> Ext
    end
    subgraph ASYNC["异步后端"]
        direction TB
        ASB["AsyncStorageBackend\n（抽象基类）"]
        subgraph ABuiltin["内置"]
            ASQLS["AsyncSQLiteBackend"]
        end
        subgraph AExt["扩展包"]
            direction LR
            AMYS["MySQL / MariaDB"]
            APGS["PostgreSQL"]
            AORS["Oracle"]
            ASSS["SQL Server"]
        end
        ASB --> ABuiltin
        ASB --> AExt
    end
    SYNC ~~~ ASYNC`,

    note1_title: '相互独立',
    note1_desc: 'Backend 暴露清晰的抽象基类（ABC），可不依赖 ActiveRecord 直接使用，适合轻量脚本或嵌入式场景。',

    note2_title: '按需扩展',
    note2_desc: 'SQLite 随核心包一起发布；MySQL、MariaDB、PostgreSQL、Oracle、SQL Server 为独立扩展包，按需安装。',

    note3_title: '类型安全配对',
    note3_desc: '<code>ActiveRecord</code> 配对 <code>StorageBackend</code>；<code>AsyncActiveRecord</code> 配对 <code>AsyncStorageBackend</code>。交叉使用将触发类型错误。'
  },

  /* Quick Taste */
  qt: {
    label: 'Quick Taste · 30 秒体验',
    title: '从安装到<em>第一个查询</em>，不超过 30 行。',
    btn_backends: '完整后端文档 →',
    btn_ar: 'ActiveRecord 详情 →',
    btn_practices: '实践场景 →'
  },

  /* Compare */
  compare: {
    label: 'Compare',
    title: '与其它 Python ORM <em>对比</em>。',
    col_feature: '特性',
    row1:  '设计模式',      row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  '后端可独立使用',
    row3:  '无 Session 概念',
    row4:  '同步 / 异步 API 一致',
    row5:  '原生 Pydantic 集成',
    row6:  '运行时数据验证',
    row7:  '完整 SQL 表达力',
    row8:  '能力声明机制',
    row9:  'SQL 透明 <code>.to_sql()</code>',
    row10: '零强制迁移依赖',
    row11: '最小依赖',
    row12: '显式关系定义'
  },

  /* Voices */
  voices: {
    label: 'Voices · 用户之声',
    title: '他们<em>这样说</em>。',
    q1: 'rhosocial-activerecord 终于让我不再和 ORM 搏斗了。类型注解就是模型定义，太对了。',
    q1_role: 'Backend Engineer · Kyoto',
    q2: 'Async 和 sync 共用一套 API，重构时几乎零成本。我的 FastAPI 项目整个迁移只改了两行。',
    q2_role: 'Staff Engineer · Berlin',
    q3: '我自己接了 DuckDB 后端，看了 Backend ABC 不到一个下午就跑通了。这才是可扩展。',
    q3_role: 'Data Platform · Singapore',
    q4: 'IDE 里每一步链式调用都有正确的类型推导。Pydantic 的力量用在了刀刃上。',
    q4_role: 'Senior Python · São Paulo',
    q5: '零运行时依赖是关键。嵌入式部署场景里我们再也不用为 SQLAlchemy 的体积头疼了。',
    q5_role: 'IoT 工程师 · 深圳'
  },

  /* Stats */
  stats: {
    label: 'By the numbers',
    title: '一些<em>数字</em>。',
    s1: '可选数据库方言',
    s2: '类型注解覆盖',
    s3: '最低 Python 版本',
    s4: '外部 ORM 依赖',
    s5: '能力声明协议',
    s6: '后端 MRO 层'
  },

  /* Install */
  install: {
    label: 'Get started',
    title: '一行安装，<em>十分钟</em>上手。',
    sub: '已在 PyPI 发布。SQLite 后端随核心包一起。其他后端按需安装对应包即可。',
    docs: '阅读文档 →',
    practices: '实践场景 →'
  },

  /* 通用 */
  common: { detail: '查看详情 →' },

  /* Footer */
  footer: { hotkeys: '26 themes · Ctrl+key theme · Shift+key font · Alt+key lang' }
});
