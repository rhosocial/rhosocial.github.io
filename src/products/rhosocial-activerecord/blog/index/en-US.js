window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' },
  nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices', blog: 'Blog' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Auto (theme default)' },
  hero: {
    eyebrow: "Blog",
    title: "rhosocial ActiveRecord <em>Tech Blog</em>.",
    sub: "Design decisions, implementation details, and best practices behind the product."
  },
  topics: {
    label: "POSTS",
    title: "Latest <em>Articles</em>."
  },
  posts: {
    whyPydanticV2: {
      slug: "why-pydantic-v2",
      date: "2026-05-12",
      cats: ["Design", "Architecture"],
      title: "Why ActiveRecord Chose Pydantic v2 as Its Model Base Class",
      desc: "Analyzing the choice of Pydantic v2 over custom metaclass systems or other ORM declarative approaches from four dimensions: type safety, validation pipeline, serialization, and IDE support."
    },
    coreBackendSeparation: {
      slug: "",
      date: "TBD",
      cats: ["Architecture"],
      title: "ActiveRecord-Backend Separation Architecture: Design Philosophy & Practice",
      desc: "Design considerations behind independent releases of core library and database backends; extension point mechanisms for third-party backends; version compatibility strategy."
    },
    fieldProxySystem: {
      slug: "",
      date: "TBD",
      cats: ["Architecture"],
      title: "Field Proxy System: Layering Custom Behaviors on Top of Pydantic",
      desc: "How the Field Proxy mechanism layers ORM-specific field semantics on top of Pydantic without modifying its descriptor protocol."
    },
    syncAsyncSymmetry: {
      slug: "",
      date: "TBD",
      cats: ["Design"],
      title: "Sync/Async API Symmetry: The Art of Naming",
      desc: "Why synchronous and asynchronous APIs share identical method names with an Async prefix on classes; the API design philosophy and developer experience considerations."
    },
    expressionSystemDesign: {
      slug: "",
      date: "TBD",
      cats: ["Query", "Architecture"],
      title: "The Design Philosophy of the Expression System",
      desc: "Why expression trees over string concatenation for SQL generation; type-safe query composition and composability."
    },
    dialectAbstraction: {
      slug: "",
      date: "TBD",
      cats: ["Dialect", "Extension"],
      title: "Dialect System: Common Expressions & Dialect Extensions",
      desc: "Design of the common expression layer; how the dummy demo backend validates dialect correctness; how each backend extends dialects for its own features."
    },
    namedConnections: {
      slug: "",
      date: "TBD",
      cats: ["Connection", "Management"],
      title: "Named Connections: Multi-Database Connection Management",
      desc: "How to declare and use named database connections; connection pool and lifecycle management."
    },
    namedQueries: {
      slug: "",
      date: "TBD",
      cats: ["Query", "Optimization"],
      title: "Named Queries: Registration and Reuse of Predefined Queries",
      desc: "Declaration, registration and invocation mechanisms for named queries; improving code maintainability through named queries."
    },
    namedProcedures: {
      slug: "",
      date: "TBD",
      cats: ["Procedure", "Runtime"],
      title: "Named Procedures: Elegant Encapsulation of Stored Procedures at Runtime",
      desc: "Introduction to named procedure graphs (compile-time) and runtime named procedures; encapsulating complex database procedures as reusable components."
    },
    postgresFeatures: {
      slug: "",
      date: "TBD",
      cats: ["PostgreSQL", "PostGIS"],
      title: "PostgreSQL Backend Advanced Features",
      desc: "ActiveRecord encapsulation of PostGIS geospatial queries, JSON/JSONB fields, array types, full-text search and more."
    },
    mysqlMariadbFeatures: {
      slug: "",
      date: "TBD",
      cats: ["MySQL", "MariaDB"],
      title: "MySQL & MariaDB Backends: Feature Differences & Compatibility",
      desc: "Commonalities and differences between the two backends; support for JSON types, window functions and more."
    },
    sqlserverOracleAdaptation: {
      slug: "",
      date: "TBD",
      cats: ["SQL Server", "Oracle"],
      title: "SQL Server & Oracle Backends: Adaptation Challenges",
      desc: "Pagination syntax differences (OFFSET/LIMIT vs TOP/ROWNUM), transaction isolation levels, and other adaptation details."
    },
    backendSpecialFeatures: {
      slug: "",
      date: "TBD",
      cats: ["Backend", "Guide"],
      title: "Multi-Backend Special Features Guide",
      desc: "How to use each backend's unique features uniformly in ActiveRecord; feature detection and graceful degradation strategies."
    },
    relationMapping: {
      slug: "",
      date: "TBD",
      cats: ["Relation", "Loading"],
      title: "Relation Mapping: Declaration & Loading Strategies",
      desc: "belongs_to / has_many relationship definitions; trade-offs and performance implications of eager/lazy loading."
    },
    migrationSystem: {
      slug: "",
      date: "TBD",
      cats: ["Migration", "Schema"],
      title: "Migration System Operation Guide",
      desc: "Versioned schema management; safe forward/rollback migration workflows."
    },
    dualValidation: {
      slug: "",
      date: "TBD",
      cats: ["Validation", "Security"],
      title: "Dual Validation Guarantee",
      desc: "Division of labor and synergy between application-layer Pydantic validation and database-layer DDL constraints."
    },
    batchOperations: {
      slug: "",
      date: "TBD",
      cats: ["Performance", "Batch"],
      title: "Batch Operations & Performance Optimization",
      desc: "Performance considerations for bulk_insert / bulk_update and optimization strategies for each backend."
    },
    testContract: {
      slug: "",
      date: "TBD",
      cats: ["Testing", "QA"],
      title: "Test Strategy: The Contract Testing System of testsuite",
      desc: "How standardized test contracts ensure consistent behavior across all backends; the complete workflow from definition to implementation."
    }
  }
};