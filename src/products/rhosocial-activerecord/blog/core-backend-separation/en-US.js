window.I18N = window.I18N || {};
window.I18N['en-us'] = {
  meta: { name: 'English' }, nav: { index: 'Index', backends: 'Backends', activerecord: 'ActiveRecord', practices: 'Practices', blog: 'Blog' },
  control: { theme_label: 'Theme', font_label: 'Font', lang_label: 'Language', font_auto: 'Auto (theme default)' },
  hero: { back: "Back to Blog", eyebrow: "2026-05-17 · Architecture · Backend", title: "Why ActiveRecord Needs a Backend Abstraction", sub: "Cross-database behavioral consistency requires more than just swapping SQL dialects." },
  body: [
    { tag: "p", html: "<strong>2026-05-17</strong> · by rhosocial team" },
    { tag: "lead", html: "At first glance, the idea of separating core ActiveRecord from database backends seems obvious: ActiveRecord talks to databases, so naturally it needs database drivers. But the real motivation runs deeper. It's not about enabling database access—it's about ensuring behavior consistency across different databases while respecting each backend's unique semantics. This article explains why a backend abstraction layer is essential, not optional." },

    { tag: "h2", html: "The Core Challenge: Same Pattern, Different Databases" },
    { tag: "p", html: "All relational databases roughly follow the relational model, but each one has its own personality. Consider these everyday scenarios:" },
    { tag: "ul", items: [
      "<strong>Auto-increment</strong>: MySQL uses <code>AUTO_INCREMENT</code>, PostgreSQL uses <code>SERIAL</code>/<code>IDENTITY</code>, SQLite uses <code>AUTOINCREMENT</code>, Oracle uses sequences",
      "<strong>Pagination</strong>: MySQL/MariaDB/SQLite use <code>LIMIT ... OFFSET</code>, SQL Server uses <code>OFFSET ... FETCH NEXT</code> or <code>TOP</code>, Oracle 11g uses <code>ROWNUM</code> while 12c+ uses <code>OFFSET ... FETCH</code>",
      "<strong>JSON support</strong>: PostgreSQL has native JSON operators (<code>-></code>, <code>->></code>), MySQL has <code>JSON_EXTRACT()</code>, SQLite added JSON functions in 3.38",
      "<strong>Transaction isolation</strong>: <code>READ COMMITTED</code> is the default in PostgreSQL but <code>REPEATABLE READ</code> in MySQL InnoDB, and <code>SERIALIZABLE</code> semantics differ subtly between databases",
      "<strong>Returning clause</strong>: PostgreSQL supports <code>INSERT ... RETURNING</code> natively; MySQL 8.0.21+ needs workarounds; SQL Server uses <code>OUTPUT</code>"
    ]},
    { tag: "p", html: "If an ORM simply generates SQL strings with parameter substitution, each of these differences becomes a special case scattered across the codebase. The result is fragile, untestable, and database-specific logic leaking into every query operation." },

    { tag: "h2", html: "Why Not Just Use SQL in ActiveRecord?" },
    { tag: "p", html: "Some might argue: if each database is different, why not let ActiveRecord remain simple and push all complexity into the SQL? There are two problems with this approach:" },
    { tag: "ul", items: [
      "Application code becomes littered with database-specific SQL, negating the portability promise of an ORM",
      "The ActiveRecord pattern—where model objects handle their own persistence—becomes impossible to implement generically when every CRUD operation needs database-specific SQL generation"
    ]},
    { tag: "p", html: "The solution is not to eliminate differences—that's impossible—but to <strong>abstract them behind a consistent interface</strong> so that ActiveRecord itself never needs to know which database it's talking to." },

    { tag: "h2", html: "Backend as a Decoupled Module, Not an ActiveRecord Dependency" },
    { tag: "p", html: "A critical design decision in rhosocial ActiveRecord is that the backend is <strong>not a part of ActiveRecord</strong>. Instead, the backend is an independent module that can work on its own. ActiveRecord is just one consumer of the backend—not the other way around." },
    { tag: "p", html: "This means:" },
    { tag: "ul", items: [
      "The backend manages connections, executes SQL, and handles transactions without any knowledge of ActiveRecord models",
      "ActiveRecord calls the backend through a clean interface, treating it as a persistence engine",
      "Third-party tools or scripts can use the backend directly without loading ActiveRecord models at all"
    ]},
    { tag: "p", html: "This decoupling ensures that backend evolution does not require ActiveRecord changes, and vice versa. A backend can add connection pooling optimizations, implement new transaction isolation levels, or fix driver-specific bugs—all without modifying a single line in the core ActiveRecord library." },

    { tag: "h2", html: "Beyond SQL Strings: A Common Expression System" },
    { tag: "p", html: "Abstracting SQL generation is the obvious part. What's less obvious—and more powerful—is abstracting query semantics through a <strong>common expression system</strong>." },
    { tag: "p", html: "rhosocial ActiveRecord defines a set of universal expression nodes that represent query operations independent of any database dialect:" },
    { tag: "ul", items: [
      "<strong>Comparison expressions</strong>: equals, not equals, greater than, less than, IN, BETWEEN, LIKE, IS NULL",
      "<strong>Logical expressions</strong>: AND, OR, NOT combining arbitrary sub-expressions",
      "<strong>Aggregate expressions</strong>: COUNT, SUM, AVG, MIN, MAX with optional DISTINCT and GROUP BY",
      "<strong>Function expressions</strong>: date manipulation, string operations, mathematical functions",
      "<strong>Subquery expressions</strong>: correlated and uncorrelated subqueries in SELECT, FROM, WHERE, and HAVING clauses"
    ]},
    { tag: "p", html: "Each backend then translates this expression tree into database-specific SQL. The expression system itself knows nothing about MySQL, PostgreSQL, or Oracle—it's a pure data structure. Each backend's dialect implementation contains all the translation logic." },

    { tag: "h2", html: "Respecting Backend-Specific Semantics" },
    { tag: "p", html: "A one-size-fits-all expression system would be too rigid. Different databases have genuinely different capabilities and semantics that developers should be able to leverage:" },
    { tag: "ul", items: [
      "<strong>PostgreSQL-specific operators</strong>: <code>->></code> for JSON fields, <code>@></code> for array containment, <code>SIMILAR TO</code> for regex matching",
      "<strong>MySQL-specific clauses</strong>: <code>ON DUPLICATE KEY UPDATE</code>, fulltext search with <code>MATCH ... AGAINST</code>, <code>GROUP_CONCAT</code>",
      "<strong>SQLite extensions</strong>: <code>UPSERT</code> (since 3.24), <code>JSON</code> functions (since 3.38), <code>STRICT</code> tables",
      "<strong>SQL Server features</strong>: <code>TOP</code> with ties, <code>OUTPUT</code> clause, <code>PIVOT</code>/<code>UNPIVOT</code>, <code>APPLY</code> operator",
      "<strong>Oracle capabilities</strong>: <code>CONNECT BY</code> for hierarchical queries, <code>MERGE</code> for upsert, <code>FLASHBACK</code> queries"
    ]},
    { tag: "p", html: "Rather than hiding these differences, the expression system provides <strong>extension points</strong> where backends can register custom expression nodes. The common expression tree serves as a safety net—ensuring portable queries work everywhere—while the extension mechanism allows each backend to expose its unique powers." },

    { tag: "h2", html: "Backend Interface Architecture" },
    { tag: "p", html: "The backend interface is designed around four core components, each independently replaceable:" },
    { tag: "ul", items: [
      "<strong>Connection Manager</strong>: handles connection lifecycle, pooling strategies, and driver-specific configuration. Does not depend on ActiveRecord models.",
      "<strong>Dialect</strong>: translates expression trees into SQL strings and handles data type mapping. This is where database-specific syntax lives.",
      "<strong>Expression Implementation</strong>: extends the common expression system with database-specific nodes and optimizations.",
      "<strong>Migration Engine</strong>: manages schema versioning, DDL generation, and forward/rollback operations."
    ]},
    { tag: "p", html: "Each component is a plain Python class that implements a documented protocol. ActiveRecord calls these components through the backend interface, never directly." },

    { tag: "h2", html: "Built-in SQLite: The Reference Backend" },
    { tag: "p", html: "SQLite is included in the core library—not because it's special, but because it serves as the <strong>reference implementation</strong> of the backend interface. New backend developers can study the SQLite dialect to understand the contract they need to fulfill." },
    { tag: "p", html: "SQLite also enables the zero-configuration startup experience: <code>pip install rhosocial-activerecord</code> and immediately define models, create tables, and run CRUD. No database server setup required." },

    { tag: "h2", html: "Contract Testing: Consistency Across Backends" },
    { tag: "p", html: "Abstract interfaces alone are not enough. Behavior consistency requires <strong>contract testing</strong>. The <code>python-activerecord-testsuite</code> project defines a set of test contracts that every backend must pass:" },
    { tag: "ul", items: [
      "CRUD operations behave identically across all backends",
      "Query builder produces semantically equivalent results",
      "Transaction semantics (commit, rollback, savepoints) are consistent",
      "Migration operations produce equivalent schema states",
      "Data type mappings cover the full type spectrum"
    ]},
    { tag: "p", html: "A backend that passes all contract tests guarantees that application code written against it will work identically on any other compliant backend—without SQL-level differences leaking into the application layer." },

    { tag: "h2", html: "Summary" },
    { tag: "p", html: "The core-backend separation in rhosocial ActiveRecord is driven by a single, pragmatic motivation: <strong>relational databases share the relational model but differ in the details</strong>. A backend abstraction layer is the proven way to manage this tension." },
    { tag: "ul", items: [
      "The backend is a decoupled module that works independently—ActiveRecord is its user, not its owner",
      "A common expression system provides portable query semantics",
      "Extension points allow backends to expose database-specific capabilities",
      "Contract testing guarantees behavioral consistency across all backends",
      "The built-in SQLite backend serves as both the zero-config default and a reference implementation"
    ]},
    { tag: "hr" },
    { tag: "next", html: "Next: Sync/Async API symmetry—unified naming conventions and the design philosophy behind them." }
  ]
};