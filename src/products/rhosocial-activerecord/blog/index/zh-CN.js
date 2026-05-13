window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: '首页', backends: '后端', activerecord: 'ActiveRecord', practices: '实践', blog: 'Blog' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: {
    eyebrow: "Blog",
    title: "rhosocial ActiveRecord <em>技术博客</em>。",
    sub: "产品背后的设计决策、实现细节与最佳实践。"
  },
  topics: {
    label: "POSTS",
    title: "最新<em>文章</em>。"
  },
  posts: {
    whyActiverecord: {
      slug: "why-activerecord",
      date: "2026-05-13",
      cats: ["Design", "Architecture"],
      status: "published",
      title: "为什么选择 ActiveRecord 设计模式",
      sub: "在众多 ORM 和数据库访问模式中，为什么 ActiveRecord 模式仍然是最优解？",
      desc: "为什么选择 ActiveRecord 模式而非 Data Mapper；五个核心原因：直观性、更少样板代码、适合 Python 动态特性、与 Pydantic 组合优势、适合 Web 生态。"
    },
    whyPydanticV2: {
      slug: "why-pydantic-v2",
      date: "2026-05-13",
      cats: ["Design", "Architecture"],
      status: "published",
      title: "为什么我们选择 Pydantic v2 作为 ActiveRecord 的基类",
      sub: "类型安全、验证管道与 IDE 体验的取舍。",
      desc: "从类型安全、验证管道、序列化、IDE 补全四个维度，分析为何选择 Pydantic v2 而非自研元类系统或其它 ORM 的声明式方案。同时介绍如何避开 BaseModel 跟踪。"
    },
    fluentApi: {
      slug: "fluent-api",
      date: "2026-05-14",
      cats: ["Design", "API"],
      status: "published",
      title: "流式 API：ActiveRecord.save 与 ActiveQuery",
      sub: "让代码读起来像英语——流式 API 的设计哲学与实践。",
      desc: "ActiveRecord.save 模型即数据源，ActiveQuery 流式查询构建器，让代码读起来像英语。批量操作、链式调用、查询运算符。"
    },
    relationMapping: {
      slug: "relation-mapping",
      date: "2026-05-15",
      cats: ["Relation", "Design"],
      status: "published",
      title: "关系映射：声明方式与加载策略",
      sub: "belongs_to / has_many 的关系定义，eager/lazy loading 的策略权衡。",
      desc: "belongs_to / has_many / has_one 的声明式关系定义。关系不是 Pydantic 字段。延迟加载与预加载策略。"
    },
    fieldProxy: {
      slug: "field-proxy",
      date: "2026-05-16",
      cats: ["Architecture", "Field"],
      status: "published",
      title: "为什么需要字段代理",
      sub: "在 Pydantic 字段之上叠加 ORM 特有的自定义行为。",
      desc: "Pydantic 字段的局限性。字段代理的工作原理：延迟加载、变更追踪、类型转换、访问控制。"
    },
    coreBackendSeparation: {
      slug: "core-backend-separation",
      date: "2026-05-17",
      cats: ["Architecture", "Backend"],
      status: "published",
      title: "ActiveRecord-后端分离架构：设计理念与实践",
      sub: "核心库与后端的解耦设计，让第三方可以自由实现自己的数据库后端。",
      desc: "核心库与数据库后端独立发布的设计考量；扩展点机制如何让第三方实现自己的后端；版本兼容策略；SQLite 内置的意义；契约测试体系。"
    },
    syncAsyncSymmetry: {
      slug: "sync-async-symmetry",
      date: "2026-05-18",
      cats: ["Design", "API"],
      status: "published",
      title: "Sync/Async API 对称设计：命名的艺术",
      sub: "为何同步异步方法名完全一致、类名加 Async 前缀。",
      desc: "为何同步异步方法名完全一致、类名加 Async 前缀；背后的 API 设计哲学与开发者体验考量；模型定义可复用。"
    },
    expressionSystemDesign: {
      slug: "expression-system-design",
      date: "2026-05-19",
      cats: ["Query", "Architecture"],
      status: "published",
      title: "Expression 系统的设计哲学",
      sub: "为什么选择表达式树而非字符串拼接来生成 SQL。",
      desc: "为什么选择表达式树而非字符串拼接来生成 SQL；类型安全、方言无关、可组合、可优化。表达式类型一览。Dummy 演示后端。"
    },
    dialectAbstraction: {
      slug: "dialect-abstraction",
      date: "2026-05-20",
      cats: ["Dialect", "Extension"],
      status: "published",
      title: "Dialect 系统：通用表达式与方言扩展",
      sub: "通用表达式层的设计；dummy 演示后端如何验证方言系统的正确性；各后端如何根据自身特性扩展方言。",
      desc: "通用表达式层的设计；dummy 演示后端如何验证方言系统的正确性；各后端如何根据自身特性扩展方言（表达式渲染器、类型映射、函数注册）。"
    },
    namedConnections: {
      slug: "", date: "TBD", cats: ["Connection", "Management"], status: "planned",
      title: "命名连接：多数据库连接管理",
      sub: "",
      desc: "如何声明和使用命名数据库连接；连接池与连接生命周期的管理。"
    },
    namedQueries: {
      slug: "", date: "TBD", cats: ["Query", "Optimization"], status: "planned",
      title: "命名查询：预定义查询的注册与复用",
      sub: "",
      desc: "命名查询的声明、注册与调用机制；如何通过命名查询提升代码可维护性。"
    },
    namedProcedures: {
      slug: "", date: "TBD", cats: ["Procedure", "Runtime"], status: "planned",
      title: "命名过程：存储过程与运行时的优雅封装",
      sub: "",
      desc: "介绍命名过程图（编译时声明）和运行时命名过程；如何将复杂数据库过程封装为可复用的组件。"
    },
    postgresFeatures: {
      slug: "", date: "TBD", cats: ["PostgreSQL", "PostGIS"], status: "planned",
      title: "PostgreSQL 后端的高级功能支持",
      sub: "",
      desc: "PostGIS 地理空间查询、JSON/JSONB 字段、数组类型、全文搜索等特性的 ActiveRecord 封装。"
    },
    mysqlMariadbFeatures: {
      slug: "", date: "TBD", cats: ["MySQL", "MariaDB"], status: "planned",
      title: "MySQL 与 MariaDB 后端：特性差异与兼容处理",
      sub: "",
      desc: "两后端共性与差异；JSON 类型、窗口函数等特性的支持方式。"
    },
    sqlserverOracleAdaptation: {
      slug: "", date: "TBD", cats: ["SQL Server", "Oracle"], status: "planned",
      title: "SQL Server 与 Oracle 后端：适配的挑战",
      sub: "",
      desc: "分页语法差异（OFFSET/LIMIT vs TOP/ROWNUM）、事务隔离级别等适配细节。"
    },
    backendSpecialFeatures: {
      slug: "", date: "TBD", cats: ["Backend", "Guide"], status: "planned",
      title: "各数据库后端特殊功能支持指南",
      sub: "",
      desc: "各后端特有功能如何在 ActiveRecord 中统一使用；功能检测与降级策略。"
    },
    migrationSystem: {
      slug: "", date: "TBD", cats: ["Migration", "Schema"], status: "planned",
      title: "迁移（Migration）系统运作指南",
      sub: "",
      desc: "版本化 schema 管理；安全的前向/回滚迁移流程。"
    },
    dualValidation: {
      slug: "", date: "TBD", cats: ["Validation", "Security"], status: "planned",
      title: "数据验证的双重保障",
      sub: "",
      desc: "应用层 Pydantic 校验 + 数据库层 DDL 约束的分工与协同。"
    },
    batchOperations: {
      slug: "", date: "TBD", cats: ["Performance", "Batch"], status: "planned",
      title: "批量操作与性能优化",
      sub: "",
      desc: "bulk_insert / bulk_update 的性能考量与各后端优化策略。"
    },
    testContract: {
      slug: "", date: "TBD", cats: ["Testing", "QA"], status: "planned",
      title: "测试策略：testsuite 的契约测试体系",
      sub: "",
      desc: "标准化测试契约如何确保所有后端行为一致；从定义到实现的完整流程。"
    }
  }
};