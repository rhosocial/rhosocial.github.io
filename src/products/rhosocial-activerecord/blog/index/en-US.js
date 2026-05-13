window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' }, nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices', blog: 'Blog' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Auto (theme default)' },
  hero: { eyebrow: "Blog", title: "rhosocial ActiveRecord <em>Tech Blog</em>.", sub: "Design decisions, implementation details, and best practices behind the product." },
  topics: { label: "POSTS", title: "Latest <em>Articles</em>." },
  posts: {
    whyActiverecord: {
      slug: "why-activerecord", date: "2026-05-13", cats: ["Design","Architecture"],
      title: "Why the ActiveRecord Pattern",
      desc: "Why ActiveRecord over Data Mapper; five core reasons: intuitiveness, less boilerplate, Python dynamic nature, synergy with Pydantic, and fit for the web ecosystem."
    },
    whyPydanticV2: {
      slug: "why-pydantic-v2", date: "2026-05-13", cats: ["Design","Architecture"],
      title: "Why We Chose Pydantic v2 as ActiveRecord's Base Class",
      desc: "Analyzing Pydantic v2 over custom metaclass or declarative approaches from four dimensions: type safety, validation, serialization, IDE support. Also covers how to escape BaseModel tracking."
    },
    fluentApi: {
      slug: "fluent-api", date: "2026-05-14", cats: ["Design","API"],
      title: "Fluent API: ActiveRecord.save and ActiveQuery",
      desc: "ActiveRecord.save model-as-data-source, ActiveQuery fluent query builder, making code read like English. Batch operations, chaining, query operators."
    },
    relationMapping: {
      slug: "relation-mapping", date: "2026-05-15", cats: ["Relation","Design"],
      title: "Relation Mapping: Declaration & Loading Strategies",
      desc: "belongs_to / has_many / has_one declarative relation definitions. Relations are not Pydantic fields. Lazy loading vs. eager loading."
    },
    fieldProxy: {
      slug: "field-proxy", date: "2026-05-16", cats: ["Architecture","Field"],
      title: "Why We Need Field Proxy",
      desc: "Limitations of Pydantic fields. How Field Proxy works: lazy loading, change tracking, type conversion, access control."
    },
    coreBackendSeparation: {
      slug: "core-backend-separation", date: "2026-05-17", cats: ["Architecture","Backend"],
      title: "ActiveRecord-Backend Separation: Design Philosophy & Practice",
      desc: "Design behind independent core/backend releases; extension point mechanism for third-party backends; version compatibility; built-in SQLite; contract testing."
    },
    syncAsyncSymmetry: {
      slug: "sync-async-symmetry", date: "2026-05-18", cats: ["Design","API"],
      title: "Sync/Async API Symmetry: The Art of Naming",
      desc: "Identical method names, Async-prefixed classes; the design philosophy behind unified naming; model definition reuse."
    },
    expressionSystemDesign: {
      slug: "expression-system-design", date: "2026-05-19", cats: ["Query","Architecture"],
      title: "The Design Philosophy of the Expression System",
      desc: "Why expression trees over string concatenation for SQL; type-safe, dialect-independent, composable, optimizable. Expression types overview. Dummy demo backend."
    },
    dialectAbstraction: {
      slug: "dialect-abstraction", date: "2026-05-20", cats: ["Dialect","Extension"],
      title: "Dialect System: Common Expressions & Dialect Extensions",
      desc: "Common expression layer design; how dummy backend validates dialect correctness; how each backend extends dialects (expression renderers, type mapping, function registration)."
    },
    namedConnections: { slug: "", date: "TBD", cats: ["Connection","Management"], title: "Named Connections: Multi-Database Connection Management", desc: "How to declare and use named database connections; connection pool and lifecycle management." },
    namedQueries: { slug: "", date: "TBD", cats: ["Query","Optimization"], title: "Named Queries: Registration and Reuse of Predefined Queries", desc: "Declaration, registration and invocation mechanisms for named queries; improving code maintainability." },
    namedProcedures: { slug: "", date: "TBD", cats: ["Procedure","Runtime"], title: "Named Procedures: Elegant Encapsulation of Stored Procedures at Runtime", desc: "Introduction to named procedure graphs and runtime named procedures; encapsulating complex database procedures." },
    postgresFeatures: { slug: "", date: "TBD", cats: ["PostgreSQL","PostGIS"], title: "PostgreSQL Backend Advanced Features", desc: "PostGIS, JSON/JSONB, array types, full-text search and more." },
    mysqlMariadbFeatures: { slug: "", date: "TBD", cats: ["MySQL","MariaDB"], title: "MySQL & MariaDB Backends: Feature Differences & Compatibility", desc: "Commonalities and differences; JSON types, window functions." },
    sqlserverOracleAdaptation: { slug: "", date: "TBD", cats: ["SQL Server","Oracle"], title: "SQL Server & Oracle Backends: Adaptation Challenges", desc: "Pagination, transaction isolation levels, and other adaptation details." },
    backendSpecialFeatures: { slug: "", date: "TBD", cats: ["Backend","Guide"], title: "Multi-Backend Special Features Guide", desc: "How to use each backend's unique features uniformly; feature detection and graceful degradation." },
    dualValidation: { slug: "", date: "TBD", cats: ["Validation","Security"], title: "Dual Validation Guarantee", desc: "Pydantic + DDL constraint division of labor." },
    batchOperations: { slug: "", date: "TBD", cats: ["Performance","Batch"], title: "Batch Operations & Performance Optimization", desc: "bulk_insert / bulk_update performance considerations." },
    migrationSystem: { slug: "", date: "TBD", cats: ["Migration","Schema"], title: "Migration System Operation Guide", desc: "Versioned schema management; safe forward/rollback migration." },
    testContract: { slug: "", date: "TBD", cats: ["Testing","QA"], title: "Test Strategy: The Contract Testing System", desc: "How standardized test contracts ensure consistent behavior across all backends." }
  }
};