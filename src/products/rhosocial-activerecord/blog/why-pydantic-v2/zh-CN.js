window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  meta: { name: '简体中文' },
  nav: { index: '首页', backends: '后端', activerecord: 'ActiveRecord', practices: '实践', blog: 'Blog' },
  control: { theme_label: '主题', font_label: '字体', lang_label: '语言', font_auto: '跟随主题' },
  hero: {
    back: "返回 Blog",
    eyebrow: "2026-05-12 · Design",
    title: "为什么我们选择 Pydantic v2 作为 ActiveRecord 的基类",
    sub: "类型安全、验证管道与 IDE 体验的取舍。"
  },
  body: [
    { tag: "p", html: "<strong>2026-05-12</strong> · by rhosocial team" },
    { tag: "lead", html: "在设计和实现 rhosocial ActiveRecord 时，我们面临了一个关键决策：模型类的基类应该是什么？传统的 ORM 方案倾向于使用元类（metaclass）或装饰器来声明字段，但 ActiveRecord 选择了直接继承 Pydantic 的 <code>BaseModel</code>。这篇文章将解释这一决策背后的考量。" },
    { tag: "h2", html: "选项对比" },
    { tag: "p", html: "在 Python ORM 生态中，模型定义大致有三种方案：" },
    { tag: "ul", items: [
      "<strong>元类方案</strong>（如 SQLAlchemy 的 <code>declarative_base</code>）：通过元类拦截类创建过程，将类属性转换为特殊描述符。",
      "<strong>装饰器方案</strong>：用 <code>@model</code> 等装饰器标记类，在运行时改写类定义。",
      "<strong>继承方案</strong>：直接继承一个带字段系统的基类。"
    ]},
    { tag: "p", html: "继承方案最符合 Python 程序员的直觉。问题是：这个基类应该是 ORM 自研的，还是复用已有的成熟方案？" },
    { tag: "h2", html: "为什么不是自研元类" },
    { tag: "p", html: "自研元类系统意味着我们需要自己实现：" },
    { tag: "ul", items: [
      "字段类型推导",
      "数据验证管道（类型校验、自定义校验器）",
      "序列化 / 反序列化（<code>model_dump</code> / <code>model_validate</code>）",
      "JSON Schema 生成",
      "IDE 类型补全支持"
    ]},
    { tag: "p", html: "这是一项巨大的工程。更重要的是，社区已经有 Pydantic 这样成熟、经过大规模验证的库。Pydantic v2 用 Rust 重写了核心校验引擎，性能相比 v1 提升了 5-50 倍。" },
    { tag: "callout", html: "<strong>核心原则：</strong>不重复造轮子，除非现有轮子无法满足需求。Pydantic v2 不仅能满足需求，而且做得更好。" },
    { tag: "h2", html: "Pydantic v2 带来的好处" },
    { tag: "h3", html: "1. 类型安全" },
    { tag: "p", html: "Pydantic v2 完全基于 Python 类型注解。字段的类型就是 Python 类型，IDE 可以完美补全和类型检查：" },
    { tag: "code", text: "from rhosocial.activerecord import ActiveRecord\n\nclass User(ActiveRecord):\n    id:    int | None = None\n    name:  str\n    email: str\n    age:   int = 0" },
    { tag: "p", html: "由于 <code>ActiveRecord</code> 直接继承 <code>BaseModel</code>，所有字段都是标准的 Pydantic 字段。这意味着：" },
    { tag: "ul", items: [
      "Pyright / mypy / PyCharm 都能正确推导每个字段的类型",
      "实例化时传错类型会得到 IDE 即时反馈",
      "<code>model_dump()</code> / <code>model_validate()</code> 等序列化方法开箱即用"
    ]},
    { tag: "h3", html: "2. 验证管道" },
    { tag: "p", html: "Pydantic v2 的验证器系统允许在字段级别和模型级别添加校验逻辑：" },
    { tag: "code", text: "from pydantic import field_validator\n\nclass User(ActiveRecord):\n    email: str\n\n    @field_validator(\"email\")\n    @classmethod\n    def _normalize_email(cls, v: str) -> str:\n        if \"@\" not in v:\n            raise ValueError(\"invalid email\")\n        return v.lower().strip()" },
    { tag: "p", html: "AR 在每次 <code>save()</code> 前自动触发一次完整的 Pydantic 校验，确保入库数据合法。这一层在已有的 Python 类型检查之上提供额外的运行时保障。" },
    { tag: "h3", html: "3. 零额外学习成本" },
    { tag: "p", html: "如果开发者已经熟悉 Pydantic，使用 AR 不需要学习新的字段声明语法。如果开发者不熟悉 Pydantic，他们学到的 Pydantic 知识同样适用于 AR——这是对开发者时间投资的双向保护。" },
    { tag: "h2", html: "与自研方案的关键差异" },
    { tag: "p", html: "选择 Pydantic 也意味着放弃了某些自由度。例如，AR 不能控制字段的内部表示方式——字段的读取和写入完全遵循 Pydantic 的描述符协议。但这其实不是限制：字段代理（Field Proxy）机制让开发者可以在不修改 Pydantic 字段行为的前提下挂载自定义方法。" },
    { tag: "p", html: "另一方面，Pydantic v2 的 Rust 核心意味着 AR 的模型实例化性能远超基于纯 Python 元类的方案。对于批量数据处理场景，这一点尤为重要。" },
    { tag: "h2", html: "总结" },
    { tag: "p", html: "选择 Pydantic v2 作为模型基类，本质上是一个\"站在巨人的肩膀上\"的决策：" },
    { tag: "ul", items: [
      "验证和序列化交给 Pydantic——它做得比任何 ORM 自研方案都好",
      "SQL 生成和数据库操作交给 AR——这是我们专注的领域",
      "开发者只写业务代码——不用关心字段系统内部如何工作"
    ]},
    { tag: "hr" },
    { tag: "next", html: "下一篇预告：AR 的字段代理系统是如何在 Pydantic 字段之上叠加自定义行为的。" }
  ]
};