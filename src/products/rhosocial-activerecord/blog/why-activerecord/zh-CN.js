window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: '首页', backends: '后端', activerecord: 'ActiveRecord', practices: '实践', blog: 'Blog' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: {
    back: "返回 Blog",
    eyebrow: "2026-05-13 · Design · Architecture",
    title: "为什么选择 ActiveRecord 设计模式",
    sub: "在众多 ORM 和数据库访问模式中，为什么 ActiveRecord 模式仍然是最优解？"
  },
  body: [
    { tag: "p", html: "<strong>2026-05-13</strong> · by rhosocial team" },
    { tag: "lead", html: "在 Python ORM 生态中，<strong>ActiveRecord</strong>（活动记录）不是一个新概念。Rails 让它广为人知，Laravel 的 Eloquent 证明了它在 PHP 世界同样成功。但在 Python 世界，SQLAlchemy 的 Data Mapper 模式长期占据主导地位。rhosocial ActiveRecord 为什么选择 ActiveRecord 模式而非 Data Mapper？这篇文章将解释这一决策。" },

    { tag: "h2", html: "ActiveRecord vs Data Mapper" },
    { tag: "p", html: "这两种模式的核心区别在于<strong>模型对象对数据库感知的程度</strong>：" },
    { tag: "ul", items: [
      "<strong>ActiveRecord</strong>：模型对象本身知道如何持久化自己。<code>user.save()</code> 直接写入数据库。<code>User.find(1)</code> 直接从数据库加载。模型 = 业务逻辑 + 持久化逻辑。",
      "<strong>Data Mapper</strong>：模型对象是纯数据容器（POJO/POPO），完全不知道数据库的存在。持久化由独立的 Mapper/Repository 负责。<code>session.add(user)</code> / <code>session.commit()</code>。模型 ≠ 持久化。"
    ]},
    { tag: "p", html: "SQLAlchemy 的 <code>declarative_base</code> 和 Session 是 Data Mapper 的经典实现。Django ORM 则是 ActiveRecord 的代表。" },

    { tag: "h2", html: "为什么 Data Mapper 在 Python 世界流行" },
    { tag: "p", html: "SQLAlchemy 的流行让 Python 开发者习惯了 Data Mapper 模式。它的优势包括：" },
    { tag: "ul", items: [
      "模型和数据库之间的关注点分离更彻底",
      "Session 提供工作单元（Unit of Work）模式，支持事务边界精细控制",
      "延迟加载（Lazy Loading）和 Identity Map 等高级特性",
      "复杂的关联查询和继承映射更灵活"
    ]},
    { tag: "p", html: "这些优势对于大型企业级应用确实有价值。但对于 <strong>绝大多数 Web 应用和微服务</strong>，ActiveRecord 模式提供了更好的开发体验和更低的认知负荷。" },

    { tag: "h2", html: "为什么我们选择 ActiveRecord" },
    { tag: "p", html: "rhosocial ActiveRecord 选择 ActiveRecord 模式的核心原因：" },
    { tag: "h3", html: "1. 直观性" },
    { tag: "p", html: "ActiveRecord 的 API 比 Data Mapper 更贴近业务直觉。新开发者看到 <code>user.save()</code> 就明白它在做什么，不需要理解 Session、flush、refresh 等概念。AR 让 CRUD 操作变成模型对象上的方法调用，而不是间接的 Repository 调用。" },
    { tag: "h3", html: "2. 更少的样板代码" },
    { tag: "p", html: "在 Data Mapper 模式下，即使是最简单的操作也需要完整的 Session 管理：" },
    { tag: "code", text: "# Data Mapper 模式\nuser = User(name=\"Alice\", email=\"alice@example.com\")\nsession.add(user)\nsession.commit()\n\n# ActiveRecord 模式\nuser = User(name=\"Alice\", email=\"alice@example.com\")\nuser.save()" },
    { tag: "p", html: "ActiveRecord 将这三步浓缩为一步。在微服务架构中，每个服务的数据库交互相对简单，ActiveRecord 的这个优势更加突出。" },
    { tag: "h3", html: "3. 适合 Python 的动态特性" },
    { tag: "p", html: "Python 的动态特性让 ActiveRecord 的实现比静态类型语言（如 Java）更自然。元类、描述符协议、属性拦截等机制让模型可以优雅地实现持久化感知。AR 利用这些特性，让开发者写出的代码看起来就像普通的 Python 类。" },
    { tag: "h3", html: "4. 与 Pydantic 的组合优势" },
    { tag: "p", html: "AR 继承 Pydantic 的 <code>BaseModel</code>，使得模型的字段声明、数据验证、序列化开箱即用。ActiveRecord 模式的模型即数据源的设计，与 Pydantic 的模型即 Schema 的理念天然契合。" },
    { tag: "h3", html: "5. 适合 Python Web 生态" },
    { tag: "p", html: "FastAPI、Flask、Starlette 等框架的视图函数通常是\"请求进来→处理→响应出去\"的无状态模式。ActiveRecord 的\"模型即数据源\"风格与这种模式自然匹配，不需要在视图和 Repository 之间做额外映射。" },

    { tag: "h2", html: "AR 并非纯 ActiveRecord" },
    { tag: "p", html: "rhosocial ActiveRecord 并没有盲目照搬 Rails 的 ActiveRecord。我们做了几个关键改进：" },
    { tag: "ul", items: [
      "<strong>可选的 Query Builder</strong>：AR 提供 ActiveQuery 流式 API（如 <code>User.query().where(...).order_by(...).all()</code>），同时支持原生的 SQL 执行——不强制使用者进入\"纯 ORM 思维\"",
      "<strong>Pydantic 集成</strong>：模型类本身就是 Pydantic 模型，充分利用 Pydantic 的类型系统、验证管道和序列化能力",
      "<strong>显式优于隐式</strong>：AR 避免 Rails 那种\"约定优于配置\"的过度自动化，每个行为都是可预期和可控制的",
      "<strong>同步异步对称</strong>：同步和异步 API 设计一致，开发者可以选择适合自己的模式"
    ]},

    { tag: "h2", html: "总结" },
    { tag: "p", html: "选择 ActiveRecord 模式不是技术上的倒退，而是对开发者体验和开发效率的务实考量。对于绝大多数 CRUD 密集型的 Web 应用，ActiveRecord 模式提供了足够的能力，同时大幅降低了认知负荷。" },
    { tag: "p", html: "当然，没有任何模式是万能的。如果你的应用需要复杂的继承映射、精细的 Session 管理、或者需要在多个数据库之间协调事务，Data Mapper 模式可能更适合。但对于其他场景，AR 是一个高效、直观且强大的选择。" },
    { tag: "hr" },
    { tag: "next", html: "下一篇：为什么我们选择 Pydantic v2 作为 ActiveRecord 的基类——类型安全、验证管道与 IDE 体验的取舍。" }
  ]
};