window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices', blog: 'Blog' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Auto (theme default)' },
  hero: {
    back: "Back to Blog",
    eyebrow: "2026-05-13 · Design · Architecture",
    title: "Why We Chose Pydantic v2 as ActiveRecord's Base Class",
    sub: "Trade-offs in type safety, validation pipeline, and IDE experience."
  },
  body: [
    { tag: "p", html: "<strong>2026-05-13</strong> · by rhosocial team" },
    { tag: "lead", html: "When designing and implementing rhosocial ActiveRecord, we faced a critical decision: what should be the base class for models? Traditional ORMs tend to use metaclasses or decorators to declare fields, but ActiveRecord chose to directly inherit Pydantic's <code>BaseModel</code>. This article explains the reasoning behind this decision, along with the capabilities and constraints it brings." },

    { tag: "h2", html: "Comparing the Options" },
    { tag: "p", html: "In the Python ORM ecosystem, model definition roughly falls into three approaches:" },
    { tag: "ul", items: [
      "<strong>Metaclass approach</strong> (e.g., SQLAlchemy's <code>declarative_base</code>): intercepts class creation via metaclasses, converting class attributes into special descriptors.",
      "<strong>Decorator approach</strong>: marks classes with decorators like <code>@model</code>, rewriting class definitions at runtime.",
      "<strong>Inheritance approach</strong>: directly inherits from a base class with a built-in field system."
    ]},
    { tag: "p", html: "The inheritance approach is the most intuitive for Python programmers. The question is: should this base class be self-built, or should we reuse an existing mature solution?" },

    { tag: "h2", html: "Defining Fields: Attributes Are Database Columns" },
    { tag: "p", html: "In AR, every type-annotated attribute on a model corresponds to a database table column. Since <code>ActiveRecord</code> directly inherits Pydantic's <code>BaseModel</code>, all fields are standard Pydantic fields—Pydantic automatically tracks their types, defaults, and validation rules:" },
    { tag: "code", text: "from rhosocial.activerecord import ActiveRecord\n\nclass User(ActiveRecord):\n    id:    int | None = None\n    name:  str\n    email: str\n    age:   int = 0" },
    { tag: "p", html: "Here <code>id</code>, <code>name</code>, <code>email</code>, and <code>age</code> are both Python type annotations and database table columns. Pydantic's <code>BaseModel</code> automatically records metadata about each field—its type, default value, whether it's required, and so on. AR builds on this, mapping each field to a database column." },
    { tag: "p", html: "This means developers don't need to learn two separate field declaration syntaxes—Pydantic's syntax is AR's declaration syntax, and vice versa. This also brings type safety, validation pipelines, and serialization out of the box." },

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

    { tag: "h2", html: "How to Escape BaseModel Tracking" },
    { tag: "p", html: "Inheriting Pydantic's <code>BaseModel</code> means every type-annotated attribute is tracked by Pydantic. But in real ORM usage, some attributes <strong>should not</strong> be tracked by Pydantic or mapped to database columns:" },
    { tag: "ul", items: [
      "<strong>Relations</strong>: <code>posts: list[Post]</code> is a logical relationship derived through foreign keys, not a database column",
      "<strong>Field Proxies</strong>: Some attributes appear as regular Pydantic fields but need special ORM behavior (lazy loading, computed properties)",
      "<strong>Non-persistent attributes</strong>: Runtime state such as caches or temporary computed values should not be serialized or persisted"
    ]},
    { tag: "p", html: "AR provides several ways to bypass or extend BaseModel's default tracking behavior:" },

    { tag: "h3", html: "Approach 1: Pydantic's PrivateAttr" },
    { tag: "p", html: "Pydantic v2 provides <code>PrivateAttr</code>. Attributes marked with this are not serialized, validated, or included in the schema by Pydantic. AR will also not map these to database columns:" },
    { tag: "code", text: "from pydantic import PrivateAttr\n\nclass User(ActiveRecord):\n    name: str\n    _cache: dict = PrivateAttr(default_factory=dict)" },

    { tag: "h3", html: "Approach 2: Field-Level Exclusion" },
    { tag: "p", html: "AR allows specifying column mapping behavior at the field declaration level. When <code>column=None</code>, the field remains a Pydantic field (participating in validation and serialization) but is not mapped to a database table column:" },
    { tag: "code", text: "class User(ActiveRecord):\n    name: str\n    computed_score: float = Field(default=0.0, column=None)" },

    { tag: "h3", html: "Approach 3: Field Proxy" },
    { tag: "p", html: "Field Proxy is AR's core extension mechanism. It allows layering custom ORM behavior—such as lazy loading, change tracking, and access interception—on top of Pydantic fields without modifying their behavior. This will be discussed in detail in a later article." },

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
    { tag: "next", html: "Next: Fluent API — ActiveRecord.save and ActiveQuery, making code read like English." }
  ]
};