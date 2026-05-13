window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' }, nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices', blog: 'Blog' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Auto (theme default)' },
  hero: { back: "Back to Blog", eyebrow: "2026-05-16 · Architecture · Field", title: "Why We Need Field Proxy", sub: "Layering ORM-specific custom behaviors on top of Pydantic fields." },
  body: [
    { tag: "p", html: "<strong>2026-05-16</strong> · by rhosocial team" },
    { tag: "lead", html: "Field Proxy is one of AR's core extension mechanisms. It bridges the gap between Pydantic's field system and the unique requirements of ORM scenarios, allowing developers to layer ORM-specific custom behaviors on top of Pydantic fields without modifying their behavior." },
    { tag: "h2", html: "Limitations of Pydantic Fields" },
    { tag: "p", html: "Pydantic's <code>BaseModel</code> field system is powerful—type checking, validation, serialization, JSON Schema generation. But these capabilities are designed for \"data validation and transport\" scenarios, not fully covering ORM needs:" },
    { tag: "ul", items: [
      "Lazy Loading: ORM fields may contain data not yet loaded from the database; Pydantic has no concept of \"unloaded\"",
      "Change Tracking: ORMs need to know which fields were modified to generate UPDATE statements; Pydantic doesn't track changes by default",
      "Access Control: Some ORM fields need read-only protection (e.g., primary keys should be immutable after creation) or getter/setter interception",
      "Type Conversion: Application-layer and database-layer types may not align perfectly; implicit conversion is needed between Oracle DATE and Python datetime"
    ]},
    { tag: "p", html: "Field Proxy's goal is to fill these gaps—let Pydantic do what it does well (type safety, validation), and let ORM do what it needs (lazy loading, tracking, access control)." },
    { tag: "h2", html: "How Field Proxy Works" },
    { tag: "p", html: "Field Proxy is a wrapper between Pydantic fields and ORM logic: users see the field proxy, Pydantic sees a regular field, and ORM sees interceptable behavior." },
    { tag: "code", text: "# Pseudocode illustrating Field Proxy's responsibilities\nclass FieldProxy:\n    \"\"\"ORM logic layer wrapping around Pydantic fields\"\"\"\n    def __get__(self, instance, owner):\n        if not self._loaded and instance:\n            self._lazy_load(instance)\n        self._track_access(instance)\n        return self._value\n\n    def __set__(self, instance, value):\n        self._track_change(instance)\n        self._value = self._convert(value)\n        super().__set__(instance, self._value)" },
    { tag: "h2", html: "Lazy Loading" },
    { tag: "p", html: "Lazy loading is the most common use case for Field Proxy. When a model is loaded from the database, certain fields (large text, JSON, BLOBs) may not need to be loaded immediately. Field proxy can defer loading until the field is actually accessed:" },
    { tag: "code", text: "class Article(ActiveRecord):\n    id: int | None = None\n    title: str\n    content: str = Field(lazy=True)\n\narticles = Article.query().all()\nprint(articles[0].title)      # content not loaded\nprint(articles[0].content)    # loaded from DB on access" },
    { tag: "p", html: "This is especially useful for large fields. An article's body might be 100KB of HTML—when only titles are needed for a list view, lazy loading avoids unnecessary I/O." },
    { tag: "h2", html: "Change Tracking" },
    { tag: "p", html: "AR needs to know which fields changed when <code>save()</code> is called. Field Proxy records each field's \"original value\" and \"current value\" to generate precise UPDATE statements:" },
    { tag: "code", text: "user = User.query().where(id=1).first()\n# user.name original = \"Alice\"\n\nuser.name = \"Bob\"\n# Field proxy records: name \"Alice\" → \"Bob\"\n\nuser.save()\n# Generates: UPDATE users SET name = 'Bob' WHERE id = 1" },
    { tag: "p", html: "Precise change tracking offers two benefits: less network transfer (only changed fields are sent) and fewer lock conflicts (only changed columns are locked)." },
    { tag: "h2", html: "Type Conversion" },
    { tag: "p", html: "Pydantic's type system and database type systems differ. Field Proxy performs transparent conversion between the two:" },
    { tag: "ul", items: [
      "<strong>Enums</strong>: Python Enum ↔ VARCHAR / INTEGER, converted back on read",
      "<strong>Datetime</strong>: Python datetime → database-specific format (Oracle DATE, PostgreSQL TIMESTAMPTZ), handles timezone conversion",
      "<strong>JSON</strong>: Python dict/list → JSON string / JSONB binary, deserialized on read",
      "<strong>Custom types</strong>: Developers can register their own type converters"
    ]},
    { tag: "h2", html: "Access Control" },
    { tag: "p", html: "Field Proxy also supports access control. For example, primary key fields should be immutable after creation; computed fields should remain read-only:" },
    { tag: "code", text: "class User(ActiveRecord):\n    id: int | None = None\n    name: str\n    full_name: str = Field(read_only=True, computed=\"CONCAT(first_name, ' ', last_name)\")" },
    { tag: "h2", html: "Collaboration with Pydantic" },
    { tag: "p", html: "The collaboration model: Pydantic handles type checking → Field Proxy layers ORM behavior after Pydantic validation. This layered design ensures they don't interfere:" },
    { tag: "ul", items: [
      "During model initialization, Pydantic validates field type correctness first",
      "After validation passes, Field Proxy records each field's initial value (for change tracking)",
      "On attribute access, Field Proxy decides whether to lazy load and track changes",
      "When save() is called, Field Proxy provides the change list to the SQL generator"
    ]},
    { tag: "h2", html: "Summary" },
    { tag: "p", html: "Field Proxy is the bridge between Pydantic and AR's ORM layer. It doesn't modify any Pydantic behavior—it layers ORM extensions on top. This design lets AR fully leverage Pydantic's type system and validation while meeting ORM-specific needs for lazy loading, change tracking, and access control." },
    { tag: "hr" },
    { tag: "next", html: "Next: ActiveRecord-Backend Separation Architecture—decoupling the core library from database backends." }
  ]
};