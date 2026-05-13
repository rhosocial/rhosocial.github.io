window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' }, nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices', blog: 'Blog' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Auto (theme default)' },
  hero: { eyebrow: "Blog", title: "rhosocial ActiveRecord <em>Tech Blog</em>.", sub: "Design decisions, implementation details, and best practices behind the product." },
  topics: { label: "POSTS", title: "Latest <em>Articles</em>." },
  posts: {
    whyActiverecord: {
      slug: "why-activerecord", date: "2026-05-13", cats: ["Design","Architecture"], status: "published",
      title: "Why the ActiveRecord Pattern",
      sub: "Among countless ORM and data access patterns, why is ActiveRecord still the optimal choice?",
      desc: "Why ActiveRecord over Data Mapper; five core reasons: intuitiveness, less boilerplate, Python dynamic nature, synergy with Pydantic, and fit for the web ecosystem."
    },
    whyPydanticV2: {
      slug: "why-pydantic-v2", date: "2026-05-13", cats: ["Design","Architecture"], status: "published",
      title: "Why We Chose Pydantic v2 as ActiveRecord's Base Class",
      sub: "Trade-offs in type safety, validation pipeline, and IDE experience.",
      desc: "Analyzing Pydantic v2 over custom metaclass or declarative approaches from four dimensions: type safety, validation, serialization, IDE support. Also covers how to escape BaseModel tracking."
    },
    fluentApi: {
      slug: "fluent-api", date: "2026-05-14", cats: ["Design","API"], status: "published",
      title: "Fluent API: ActiveRecord.save and ActiveQuery",
      sub: "Making code read like English—the design philosophy and practice of fluent APIs.",
      desc: "ActiveRecord.save model-as-data-source, ActiveQuery fluent query builder, making code read like English. Batch operations, chaining, query operators."
    },
    relationMapping: {
      slug: "relation-mapping", date: "2026-05-15", cats: ["Relation","Design"], status: "published",
      title: "Relation Mapping: Declaration & Loading Strategies",
      sub: "belongs_to / has_many relationship definitions, eager/lazy loading trade-offs.",
      desc: "belongs_to / has_many / has_one declarative relation definitions. Relations are not Pydantic fields. Lazy loading vs. eager loading."
    },
    fieldProxy: {
      slug: "field-proxy", date: "2026-05-16", cats: ["Architecture","Field"], status: "published",
      title: "Why We Need Field Proxy",
      sub: "Layering ORM-specific custom behaviors on top of Pydantic fields.",
      desc: "Limitations of Pydantic fields. How Field Proxy works: lazy loading, change tracking, type conversion, access control."
    },
    coreBackendSeparation: {
      slug: "core-backend-separation", date: "2026-05-17", cats: ["Architecture","Backend"], status: "published",
      title: "ActiveRecord-Backend Separation: Design Philosophy & Practice",
      sub: "Decoupling the core library from database backends, enabling third-party implementations.",
      desc: "Design behind independent core/backend releases; extension point mechanism for third-party backends; version compatibility; built-in SQLite; contract testing."
    },
    syncAsyncSymmetry: {
      slug: "sync-async-symmetry", date: "2026-05-18", cats: ["Design","API"], status: "published",
      title: "Sync/Async API Symmetry: The Art of Naming",
      sub: "Identical method names, Async-prefixed classes—the design philosophy behind unified naming.",
      desc: "Identical method names, Async-prefixed classes; the design philosophy behind unified naming; model definition reuse."
    },
    expressionSystemDesign: {
      slug: "expression-system-design", date: "2026-05-19", cats: ["Query","Architecture"], status: "published",
      title: "The Design Philosophy of the Expression System",
      sub: "Why expression trees over string concatenation for SQL generation.",
      desc: "Why expression trees over string concatenation for SQL; type-safe, dialect-independent, composable, optimizable. Expression types overview. Dummy demo backend."
    },
    dialectAbstraction: {
      slug: "dialect-abstraction", date: "2026-05-20", cats: ["Dialect","Extension"], status: "published",
      title: "Dialect System: Common Expressions & Dialect Extensions",
      sub: "Design of the common expression layer; how the dummy backend validates dialect correctness; how each backend extends its own dialect.",
      desc: "Common expression layer design; how dummy backend validates dialect correctness; how each backend extends dialects (expression renderers, type mapping, function registration)."
    },
    namedConnections: { slug: "", date: "TBD", cats: ["Connection","Management"], status: "planned", title: "Named Connections: Multi-Database Connection Management", sub: "", desc: "How to declare and use named database connections; connection pool and lifecycle management." },
    namedQueries: { slug: "", date: "TBD", cats: ["Query","Optimization"], status: "planned", title: "Named Queries: Registration and Reuse of Predefined Queries", sub: "", desc: "Declaration, registration and invocation mechanisms for named queries; improving code maintainability." },
    namedProcedures: { slug: "", date: "TBD", cats: ["Procedure","Runtime"], status: "planned", title: "Named Procedures: Elegant Encapsulation of Stored Procedures at Runtime", sub: "", desc: "Introduction to named procedure graphs and runtime named procedures; encapsulating complex database procedures." },
    postgresFeatures: { slug: "", date: "TBD", cats: ["PostgreSQL","PostGIS"], status: "planned", title: "PostgreSQL Backend Advanced Features", sub: "", desc: "PostGIS, JSON/JSONB, array types, full-text search and more." },
    mysqlMariadbFeatures: { slug: "", date: "TBD", cats: ["MySQL","MariaDB"], status: "planned", title: "MySQL & MariaDB Backends: Feature Differences & Compatibility", sub: "", desc: "Commonalities and differences; JSON types, window functions." },
    sqlserverOracleAdaptation: { slug: "", date: "TBD", cats: ["SQL Server","Oracle"], status: "planned", title: "SQL Server & Oracle Backends: Adaptation Challenges", sub: "", desc: "Pagination, transaction isolation levels, and other adaptation details." },
    backendSpecialFeatures: { slug: "", date: "TBD", cats: ["Backend","Guide"], status: "planned", title: "Multi-Backend Special Features Guide", sub: "", desc: "How to use each backend's unique features uniformly; feature detection and graceful degradation." },
    dualValidation: { slug: "", date: "TBD", cats: ["Validation","Security"], status: "planned", title: "Dual Validation Guarantee", sub: "", desc: "Pydantic + DDL constraint division of labor." },
    batchOperations: { slug: "", date: "TBD", cats: ["Performance","Batch"], status: "planned", title: "Batch Operations & Performance Optimization", sub: "", desc: "bulk_insert / bulk_update performance considerations." },
    migrationSystem: { slug: "", date: "TBD", cats: ["Migration","Schema"], status: "planned", title: "Migration System Operation Guide", sub: "", desc: "Versioned schema management; safe forward/rollback migration." },
    testContract: { slug: "", date: "TBD", cats: ["Testing","QA"], status: "planned", title: "Test Strategy: The Contract Testing System", sub: "", desc: "How standardized test contracts ensure consistent behavior across all backends." }
  }
};