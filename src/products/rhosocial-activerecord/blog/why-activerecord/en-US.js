window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices', blog: 'Blog' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Auto (theme default)' },
  hero: {
    back: "Back to Blog",
    eyebrow: "2026-05-13 · Design · Architecture",
    title: "Why the ActiveRecord Pattern",
    sub: "Among countless ORM and data access patterns, why is ActiveRecord still the optimal choice?"
  },
  body: [
    { tag: "p", html: "<strong>2026-05-13</strong> · by rhosocial team" },
    { tag: "lead", html: "In the Python ORM ecosystem, <strong>ActiveRecord</strong> is not a new concept. Rails made it famous, Laravel's Eloquent proved its success in the PHP world. But in Python, SQLAlchemy's Data Mapper pattern has long dominated. Why did rhosocial ActiveRecord choose the ActiveRecord pattern over Data Mapper? This article explains the reasoning." },

    { tag: "h2", html: "ActiveRecord vs Data Mapper" },
    { tag: "p", html: "The core difference lies in <strong>how much the model object knows about persistence</strong>:" },
    { tag: "ul", items: [
      "<strong>ActiveRecord</strong>: The model object knows how to persist itself. <code>user.save()</code> writes directly to the database. <code>User.find(1)</code> loads directly from the database. Model = business logic + persistence logic.",
      "<strong>Data Mapper</strong>: The model object is a pure data container (POJO/POPO), completely unaware of the database. Persistence is handled by a separate Mapper/Repository. <code>session.add(user)</code> / <code>session.commit()</code>. Model ≠ Persistence."
    ]},
    { tag: "p", html: "SQLAlchemy's <code>declarative_base</code> and Session are classic Data Mapper implementations. Django ORM represents the ActiveRecord approach." },

    { tag: "h2", html: "Why Data Mapper Dominates Python" },
    { tag: "p", html: "SQLAlchemy's popularity has accustomed Python developers to the Data Mapper pattern. Its advantages include:" },
    { tag: "ul", items: [
      "Cleaner separation of concerns between model and database",
      "Session provides Unit of Work pattern with fine-grained transaction control",
      "Advanced features like Lazy Loading and Identity Map",
      "More flexible complex queries and inheritance mapping"
    ]},
    { tag: "p", html: "These advantages are valuable for large enterprise applications. But for <strong>the vast majority of web applications and microservices</strong>, the ActiveRecord pattern offers a better development experience with lower cognitive load." },

    { tag: "h2", html: "Why We Chose ActiveRecord" },
    { tag: "p", html: "The core reasons for rhosocial ActiveRecord's choice:" },
    { tag: "h3", html: "1. Intuitiveness" },
    { tag: "p", html: "ActiveRecord's API is more aligned with business intuition. A new developer sees <code>user.save()</code> and immediately understands what it does—no need to understand Session, flush, refresh concepts. AR turns CRUD operations into method calls on model objects, not indirect Repository invocations." },
    { tag: "h3", html: "2. Less Boilerplate" },
    { tag: "p", html: "In Data Mapper mode, even the simplest operation requires full Session management:" },
    { tag: "code", text: "# Data Mapper pattern\nuser = User(name=\"Alice\", email=\"alice@example.com\")\nsession.add(user)\nsession.commit()\n\n# ActiveRecord pattern\nuser = User(name=\"Alice\", email=\"alice@example.com\")\nuser.save()" },
    { tag: "p", html: "ActiveRecord condenses three steps into one. In microservice architectures where each service's database interactions are relatively simple, this advantage is even more pronounced." },
    { tag: "h3", html: "3. Fits Python's Dynamic Nature" },
    { tag: "p", html: "Python's dynamic features make ActiveRecord implementation more natural than in statically typed languages (like Java). Metaclasses, descriptor protocols, and attribute interception allow models to elegantly implement persistence awareness. AR leverages these features so that the code developers write looks just like ordinary Python classes." },
    { tag: "h3", html: "4. Synergy with Pydantic" },
    { tag: "p", html: "AR inherits Pydantic's <code>BaseModel</code>, making field declaration, data validation, and serialization work out of the box. The ActiveRecord pattern's model-as-data-source design naturally aligns with Pydantic's model-as-schema philosophy." },
    { tag: "h3", html: "5. Fits the Python Web Ecosystem" },
    { tag: "p", html: "FastAPI, Flask, Starlette and similar frameworks typically follow a stateless \"request in → process → response out\" pattern in view functions. ActiveRecord's \"model as data source\" style aligns naturally with this pattern, without requiring extra mapping between views and Repositories." },

    { tag: "h2", html: "AR Is Not Pure ActiveRecord" },
    { tag: "p", html: "rhosocial ActiveRecord doesn't blindly copy Rails' ActiveRecord. We made several key improvements:" },
    { tag: "ul", items: [
      "<strong>Optional Query Builder</strong>: AR provides a fluent ActiveQuery API (e.g., <code>User.query().where(...).order_by(...).all()</code>) while also supporting raw SQL—users aren't forced into \"pure ORM thinking\"",
      "<strong>Pydantic Integration</strong>: Model classes are themselves Pydantic models, fully leveraging Pydantic's type system, validation pipeline, and serialization capabilities",
      "<strong>Explicit Over Implicit</strong>: AR avoids Rails' \"convention over configuration\" over-automation—every behavior is predictable and controllable",
      "<strong>Sync/Async Symmetry</strong>: Synchronous and asynchronous APIs are designed consistently, letting developers choose the mode that fits their stack"
    ]},

    { tag: "h2", html: "Summary" },
    { tag: "p", html: "Choosing the ActiveRecord pattern is not a technological regression—it's a pragmatic consideration for developer experience and productivity. For the vast majority of CRUD-intensive web applications, the ActiveRecord pattern provides sufficient capability while significantly reducing cognitive load." },
    { tag: "p", html: "Of course, no pattern is universal. If your application requires complex inheritance mapping, fine-grained Session management, or coordinated transactions across multiple databases, the Data Mapper pattern may be a better fit. For everything else, AR is an efficient, intuitive, and powerful choice." },
    { tag: "hr" },
    { tag: "next", html: "Next: Why we chose Pydantic v2 as ActiveRecord's base class—trade-offs in type safety, validation pipeline, and IDE experience." }
  ]
};