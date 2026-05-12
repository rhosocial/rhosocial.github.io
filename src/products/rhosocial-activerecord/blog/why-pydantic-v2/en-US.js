window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices', blog: 'Blog' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Auto (theme default)' },
  hero: {
    back: "Back to Blog",
    eyebrow: "2026-05-12 · Design",
    title: "Why ActiveRecord Chose Pydantic v2 as Its Model Base Class",
    sub: "Trade-offs in type safety, validation pipeline, and IDE experience."
  },
  body: [
    { tag: "p", html: "<strong>2026-05-12</strong> · by rhosocial team" },
    { tag: "lead", html: "When designing and implementing rhosocial ActiveRecord, we faced a critical decision: what should be the base class for models? Traditional ORMs tend to use metaclasses or decorators to declare fields, but ActiveRecord chose to directly inherit Pydantic's <code>BaseModel</code>. This article explains the reasoning behind this decision." },
    { tag: "h2", html: "Comparing the Options" },
    { tag: "p", html: "In the Python ORM ecosystem, model definition roughly falls into three approaches:" },
    { tag: "ul", items: [
      "<strong>Metaclass approach</strong> (e.g., SQLAlchemy's <code>declarative_base</code>): intercepts class creation via metaclasses, converting class attributes into special descriptors.",
      "<strong>Decorator approach</strong>: marks classes with decorators like <code>@model</code>, rewriting class definitions at runtime.",
      "<strong>Inheritance approach</strong>: directly inherits from a base class with a built-in field system."
    ]},
    { tag: "p", html: "The inheritance approach is the most intuitive for Python programmers. The question is: should this base class be self-built, or should we reuse an existing mature solution?" },
    { tag: "h2", html: "Why Not a Custom Metaclass" },
    { tag: "p", html: "Building a custom metaclass system means implementing from scratch:" },
    { tag: "ul", items: [
      "Field type inference",
      "Data validation pipeline (type checking, custom validators)",
      "Serialization / deserialization (<code>model_dump</code> / <code>model_validate</code>)",
      "JSON Schema generation",
      "IDE type completion support"
    ]},
    { tag: "p", html: "This is a massive undertaking. More importantly, the community already has mature, battle-tested libraries like Pydantic. Pydantic v2 rewrote its core validation engine in Rust, achieving 5-50x performance improvements over v1." },
    { tag: "callout", html: "<strong>Core principle:</strong> Don't reinvent the wheel unless existing wheels can't meet your needs. Pydantic v2 not only meets our needs—it does so better than any custom solution would." },
    { tag: "h2", html: "What Pydantic v2 Brings" },
    { tag: "h3", html: "1. Type Safety" },
    { tag: "p", html: "Pydantic v2 is fully based on Python type annotations. Field types <em>are</em> Python types, giving perfect IDE completion and type checking:" },
    { tag: "code", text: "from rhosocial.activerecord import ActiveRecord\n\nclass User(ActiveRecord):\n    id:    int | None = None\n    name:  str\n    email: str\n    age:   int = 0" },
    { tag: "p", html: "Since <code>ActiveRecord</code> directly inherits <code>BaseModel</code>, all fields are standard Pydantic fields. This means:" },
    { tag: "ul", items: [
      "Pyright / mypy / PyCharm all correctly infer each field's type",
      "Passing wrong types during instantiation gets immediate IDE feedback",
      "<code>model_dump()</code> / <code>model_validate()</code> serialization methods work out of the box"
    ]},
    { tag: "h3", html: "2. Validation Pipeline" },
    { tag: "p", html: "Pydantic v2's validator system allows adding validation logic at both the field and model levels:" },
    { tag: "code", text: "from pydantic import field_validator\n\nclass User(ActiveRecord):\n    email: str\n\n    @field_validator(\"email\")\n    @classmethod\n    def _normalize_email(cls, v: str) -> str:\n        if \"@\" not in v:\n            raise ValueError(\"invalid email\")\n        return v.lower().strip()" },
    { tag: "p", html: "AR triggers a full Pydantic validation before each <code>save()</code>, ensuring data integrity before it reaches the database. This provides additional runtime guarantees on top of Python's type checking." },
    { tag: "h3", html: "3. Zero Additional Learning Cost" },
    { tag: "p", html: "If developers are already familiar with Pydantic, using AR requires no new field declaration syntax. If they're not familiar with Pydantic, what they learn about Pydantic applies equally to AR—a two-way protection on developer time investment." },
    { tag: "h2", html: "Key Differences from Custom Solutions" },
    { tag: "p", html: "Choosing Pydantic also means giving up certain freedoms. For example, AR cannot control the internal representation of fields—reading and writing fields fully follows Pydantic's descriptor protocol. But this is not actually a limitation: the Field Proxy mechanism lets developers attach custom methods without modifying Pydantic field behavior." },
    { tag: "p", html: "On the other hand, Pydantic v2's Rust core means AR's model instantiation performance far exceeds pure-Python metaclass-based solutions. This is especially important for batch data processing scenarios." },
    { tag: "h2", html: "Summary" },
    { tag: "p", html: "Choosing Pydantic v2 as the model base class is ultimately a decision to stand on the shoulders of giants:" },
    { tag: "ul", items: [
      "Validation and serialization go to Pydantic — it does this better than any custom ORM solution could",
      "SQL generation and database operations go to AR — this is our area of focus",
      "Developers just write business logic — no need to care about how the field system works internally"
    ]},
    { tag: "hr" },
    { tag: "next", html: "Next up: How AR's Field Proxy system layers custom behavior on top of Pydantic fields." }
  ]
};