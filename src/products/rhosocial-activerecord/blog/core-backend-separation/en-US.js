window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' }, nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices', blog: 'Blog' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Auto (theme default)' },
  hero: { back: "Back to Blog", eyebrow: "2026-05-17 · Architecture · Backend", title: "ActiveRecord-Backend Separation: Design Philosophy & Practice", sub: "Decoupling the core library from database backends, enabling third-party implementations." },
  body: [
    { tag: "p", html: "<strong>2026-05-17</strong> · by rhosocial team" },
    { tag: "lead", html: "One of rhosocial ActiveRecord's core design decisions is that the core library (<code>python-activerecord</code>) and each database backend (<code>python-activerecord-mysql</code>, <code>python-activerecord-postgres</code>, etc.) are released independently. The core library depends only on Pydantic 2.x and has zero database driver dependencies. This article explains the design philosophy and implementation of this separation architecture." },
    { tag: "h2", html: "Why Separate" },
    { tag: "p", html: "Traditional Python ORMs typically bundle core ORM logic with database drivers. For example, while SQLAlchemy supports multiple databases, its core package still requires installing the appropriate drivers. AR takes a different path:" },
    { tag: "ul", items: [
      "The core library is lightweight and pure—only depends on Pydantic 2.x, zero database driver dependencies",
      "Each backend is versioned independently—MySQL backend updates don't affect PostgreSQL users",
      "Third parties can implement their own backends—by implementing the agreed-upon interface"
    ]},
    { tag: "h2", html: "Extension Point Mechanism" },
    { tag: "p", html: "The core library defines a clear backend interface. Each backend must implement these core components:" },
    { tag: "ul", items: [
      "<strong>Connection Manager</strong>: Manages database connections, connection pooling, and lifecycle",
      "<strong>Dialect</strong>: Handles SQL syntax differences including data type mapping, pagination syntax, function implementations",
      "<strong>Expression Implementation</strong>: Translates the common expression tree into database-specific SQL",
      "<strong>Migration</strong>: Manages schema version changes, forward/rollback migrations"
    ]},
    { tag: "p", html: "Any package implementing these interfaces can serve as an AR backend. The core library doesn't care which database driver a backend uses—<code>mysql-connector-python</code>, <code>psycopg</code>, <code>mariadb</code>, <code>pyodbc</code>, <code>oracledb</code> are all internal implementation details of each backend." },
    { tag: "h2", html: "Repository Organization" },
    { tag: "p", html: "All backend repositories follow a consistent naming and structure convention:" },
    { tag: "code", text: "rhosocial-activerecord (core library)\n├── python-activerecord              # Core implementation, SQLite built-in\n├── python-activerecord-mysql        # MySQL backend\n├── python-activerecord-postgres     # PostgreSQL backend\n├── python-activerecord-mariadb      # MariaDB backend\n├── python-activerecord-sqlserver    # SQL Server backend\n├── python-activerecord-oracle       # Oracle backend\n├── python-activerecord-devtools     # Developer tools\n├── python-activerecord-testsuite    # Test suite\n└── python-activerecord-intellij-plugin # IntelliJ plugin" },
    { tag: "p", html: "Each backend is installed via extras: <code>pip install rhosocial-activerecord[backend]</code>. The core library itself provides SQLite support via <code>pip install rhosocial-activerecord</code>." },
    { tag: "h2", html: "Significance of Built-in SQLite" },
    { tag: "p", html: "SQLite is built directly into the core library rather than being a separate backend package. This decision is based on several considerations:" },
    { tag: "ul", items: [
      "SQLite is part of Python's standard library—no additional driver installation needed",
      "Developers can use AR out of the box without configuring any database backend",
      "SQLite is ideal for development, testing, and small-scale deployments",
      "SQLite also serves as a reference implementation—new backend developers can study it"
    ]},
    { tag: "callout", html: "<strong>Design principle:</strong> \"Zero-configuration startup\" is AR's core experience goal. Developers <code>pip install rhosocial-activerecord</code> and immediately define models, create tables, and execute CRUD—no additional steps required." },
    { tag: "h2", html: "Version Compatibility Strategy" },
    { tag: "p", html: "Version relationships between the core library and backends follow a clear strategy:" },
    { tag: "ul", items: [
      "A major version change in the core library (e.g., 1.x → 2.x) signals potentially incompatible backend interface changes",
      "Backend versions are independent of the core library—backends declare compatibility with specific core library version ranges",
      "Tool repositories like devtools and testsuite are also independently versioned, using the same compatibility declaration pattern"
    ]},
    { tag: "p", html: "This strategy means database backends can evolve independently of the core library. A MySQL backend can fix a connection pool bug and release a patch version without waiting for the core library's release cycle." },
    { tag: "h2", html: "Test Contract System" },
    { tag: "p", html: "To ensure consistent behavior across all backends, AR uses Contract Testing. The core library defines a set of standardized test contracts that each backend must pass." },
    { tag: "p", html: "Test contracts cover the following dimensions:" },
    { tag: "ul", items: [
      "Basic CRUD operation behavior",
      "Query builder correctness",
      "Transaction behavior (commit, rollback, nested transactions)",
      "Migration version management and rollback",
      "Data type mapping completeness",
      "Backend-specific advanced features (e.g., PostGIS, JSON fields)"
    ]},
    { tag: "p", html: "This test contract system is maintained by the <code>python-activerecord-testsuite</code> project (in development)." },
    { tag: "h2", html: "Summary" },
    { tag: "p", html: "Core benefits of the ActiveRecord-Backend separation architecture:" },
    { tag: "ul", items: [
      "Minimal core library—focused only on core ORM abstractions and SQL construction",
      "Backend freedom—each backend evolves independently, unaffected by the core or other backends",
      "Open ecosystem—third parties can implement their own backends by following the conventions",
      "Testable consistency—contract testing ensures uniform behavior across all backends"
    ]},
    { tag: "hr" },
    { tag: "next", html: "Next: Sync/Async API symmetry—unified naming conventions and the design philosophy behind them." }
  ]
};