window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: '首页', backends: '后端', activerecord: 'ActiveRecord', practices: '实践', blog: 'Blog' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: {
    back: "返回 Blog",
    eyebrow: "2026-05-13 · Architecture",
    title: "ActiveRecord-后端分离架构：设计理念与实践",
    sub: "核心库与后端的解耦设计，让第三方可以自由实现自己的数据库后端。"
  },
  body: [
    { tag: "p", html: "<strong>2026-05-13</strong> · by rhosocial team" },
    { tag: "lead", html: "rhosocial ActiveRecord 的一个核心设计决策是：核心库（<code>python-activerecord</code>）与各个数据库后端（<code>python-activerecord-mysql</code>、<code>python-activerecord-postgres</code> 等）独立发布。这意味着核心库仅依赖 Pydantic 2.x，不绑定任何数据库驱动。这篇文章将解释这种分离架构的设计理念和实现方式。" },

    { tag: "h2", html: "为什么要分离" },
    { tag: "p", html: "传统的 Python ORM 通常将核心 ORM 逻辑和数据库驱动捆绑在一起。例如，SQLAlchemy 虽然支持多种数据库，但它的核心包仍然需要安装相应的驱动。AR 选择了不同的路径：" },
    { tag: "ul", items: [
      "核心库轻量纯净——只依赖 Pydantic 2.x，无任何数据库驱动依赖",
      "每个后端独立版本化——MySQL 后端的更新不会影响 PostgreSQL 用户",
      "第三方可以实现自己的后端——通过实现约定的接口即可接入"
    ]},

    { tag: "h2", html: "扩展点机制" },
    { tag: "p", html: "核心库定义了清晰的后端接口。每个后端需要实现的核心组件包括：" },
    { tag: "ul", items: [
      "<strong>连接管理器（Connection Manager）</strong>：管理与数据库的连接建立、连接池和生命周期",
      "<strong>方言（Dialect）</strong>：处理 SQL 语法差异，包括数据类型映射、分页语法、函数实现等",
      "<strong>表达式实现（Expression Implementation）</strong>：将通用表达式树翻译为具体数据库的 SQL",
      "<strong>迁移（Migration）</strong>：管理 schema 版本变更、前向/回滚迁移"
    ]},
    { tag: "p", html: "任何实现了这些接口的包都可以成为 AR 的一个后端。核心库不关心后端使用的数据库驱动是什么——<code>mysql-connector-python</code>、<code>psycopg</code>、<code>mariadb</code>、<code>pyodbc</code>、<code>oracledb</code> 都是后端的内部实现细节。" },

    { tag: "h2", html: "仓库组织" },
    { tag: "p", html: "所有后端仓库遵循统一的命名和结构约定：" },
    { tag: "code", text: "rhosocial-activerecord (核心库)\n├── python-activerecord              # 核心实现，SQLite 内置\n├── python-activerecord-mysql        # MySQL 后端实现\n├── python-activerecord-postgres     # PostgreSQL 后端实现\n├── python-activerecord-mariadb      # MariaDB 后端实现\n├── python-activerecord-sqlserver    # SQL Server 后端实现\n├── python-activerecord-oracle       # Oracle 后端实现\n├── python-activerecord-devtools     # 开发工具集\n├── python-activerecord-testsuite    # 测试套件\n└── python-activerecord-intellij-plugin # Intellij 插件（独立仓库）" },
    { tag: "p", html: "每个后端仓库通过 <code>pip install rhosocial-activerecord[backend]</code> 这样的 extras 方式安装。核心库本身通过 <code>pip install rhosocial-activerecord</code> 即可获得 SQLite 支持。" },

    { tag: "h2", html: "SQLite 内置的意义" },
    { tag: "p", html: "SQLite 后端直接内置于核心库中，而不是作为一个独立的后端包。这个决策基于几个考量：" },
    { tag: "ul", items: [
      "SQLite 是 Python 标准库的一部分，无需额外安装驱动",
      "开发者可以开箱即用，无需配置任何后端即可开始使用 AR",
      "SQLite 非常适合开发、测试和小型部署场景",
      "SQLite 后端同时也是其他后端的参考实现，新开发后端时可以对照学习"
    ]},

    { tag: "callout", html: "<strong>设计原则：</strong>\"零配置起步\"是 AR 的核心体验目标。开发者 <code>pip install rhosocial-activerecord</code> 后立即可以定义模型、创建表、执行 CRUD，无需任何额外步骤。" },

    { tag: "h2", html: "版本兼容策略" },
    { tag: "p", html: "核心库和各个后端之间的版本关系遵循明确的策略：" },
    { tag: "ul", items: [
      "核心库的主版本号变更（如 1.x → 2.x）意味着后端接口可能发生不兼容变化",
      "后端版本独立于核心库——后端可以针对核心库的特定版本范围声明兼容性",
      "devtools 和 testsuite 等工具仓库同样独立版本化，与后端相同的兼容性声明模式"
    ]},
    { tag: "p", html: "这种策略意味着：数据库后端可以独立于核心库演进。MySQL 后端可以修复一个连接池 bug 并发布补丁版本，而不需要等待核心库的发布周期。" },

    { tag: "h2", html: "测试契约体系" },
    { tag: "p", html: "为了确保所有后端行为一致，AR 采用契约测试（Contract Testing）策略。核心库定义了一组标准化测试契约，每个后端必须通过这些测试。" },
    { tag: "p", html: "测试契约涵盖以下维度：" },
    { tag: "ul", items: [
      "基本的 CRUD 操作行为",
      "查询构建器的正确性",
      "事务行为（提交、回滚、嵌套事务）",
      "迁移的版本管理和回滚",
      "数据类型映射的完整性",
      "特定后端的高级功能（如 PostGIS、JSON 字段等）"
    ]},
    { tag: "p", html: "这套测试契约体系由 <code>python-activerecord-testsuite</code> 项目维护，开发中。" },

    { tag: "h2", html: "总结" },
    { tag: "p", html: "ActiveRecord-后端分离架构的核心收益：" },
    { tag: "ul", items: [
      "核心库极简——只关注 ORM 核心抽象和 SQL 构建",
      "后端自由——每个后端独立演进，不受核心或其他后端的影响",
      "生态开放——第三方可以实现自己的后端，遵循约定即可",
      "测试可验证——契约测试确保多后端行为一致"
    ]},

    { tag: "hr" },
    { tag: "next", html: "下一篇预告：字段代理系统——如何在 Pydantic 字段之上叠加 ORM 特有的自定义行为。" }
  ]
};