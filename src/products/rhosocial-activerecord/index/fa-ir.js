/**
 * index/fa-ir.js — Homepage page-level Persian dictionary (index-specific content only)
 *
 * Dependency: assets/i18n/fa-ir.js must be loaded first (provides meta/brand/nav/control/footer/common).
 * This file extends window.I18N['fa-ir'] via Object.assign, adding homepage-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['fa-ir'] = Object.assign(window.I18N['fa-ir'] || {}, {

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    eyebrow:       'v1.0 · Apache 2.0 · Pure Python',
    title:         'rhosocial ActiveRecord,<br><em>redesigned</em> for Python.',
    sub:           '<strong>rhosocial-activerecord</strong> defines models with native Python type annotations.',
    cta_secondary: 'Explore features →'
  },

  /* ── 6-Feature cards ─────────────────────────────────── */
  features: {
    label: 'Why · Six Core Promises',
    title: 'Why <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Type-safe',         title: '<em>Type-safe</em> by construction',       desc: 'Fields are just <code>name: str</code> — storage, validation, and IDE completion unified.' },
    f2: { num: '02 / Async First',        title: 'Sync &amp; async, <em>one API</em>',       desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> share the same semantics.' },
    f3: { num: '03 / Pluggable',          title: 'Pluggable <em>backends</em>',              desc: 'SQLite built-in; Postgres/MySQL/SQLServer/Oracle as separate packages; write your own.' },
    f4: { num: '04 / Explicit Relations', title: '<em>Relations</em> made explicit',         desc: '<code>ClassVar</code> + descriptor protocol, auto-replaced at runtime.' },
    f5: { num: '05 / Transactions',       title: 'Transactions, <em>properly nested</em>',   desc: 'Context manager + savepoints; exception triggers automatic rollback.' },
    f6: { num: '06 / Pythonic',           title: 'Reads like <em>English</em>',              desc: '<code>User.query().where(...).all()</code> — just Python.' }
  },

  /* ── Feature detail sections ─────────────────────────── */
  f1: {
    label: '01 / Type-safe',
    title: '<em>Types are fields</em>, from 3.8 to 3.12.',
    intro: 'Python type annotations <em>are</em> the model definition — no extra DSL. Pydantic handles runtime validation; your IDE gets full type inference.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, same semantics.',
    intro: 'Sync and async share one model definition. Swap <code>for</code> for <code>async for</code> — nothing else changes.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Pluggable backends</em>, pick what you need.',
    intro: 'The core package depends only on Pydantic. SQLite is built-in; other databases ship as separate packages, switchable with a single <code>configure()</code> call.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Explicit relations</em>, ClassVar + descriptor.',
    intro: 'Declare relation fields with <code>ClassVar</code> to keep them out of Pydantic\'s scan. At runtime they are automatically replaced by <code>relation()</code>.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Atomic transactions</em>, nested savepoints.',
    intro: 'Nested transactions automatically create SAVEPOINTs. The context manager commits or rolls back; exceptions snap to the nearest savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Reads like English</em>, no DSL.',
    intro: 'Fluent chained calls read naturally. <code>.to_sql()</code> makes the generated SQL transparent at any point.'
  },

  /* ── Architecture · Internal three layers ───────────── */
  arch: {
    label: 'Architecture · Three Layers',
    title: '<em>Expression → Dialect → Backend</em>, clear responsibilities.',
    intro: 'Query logic, SQL generation, and database execution are decoupled into three layers. Protocols (<code>@runtime_checkable</code>) declare capabilities at boundaries — unsupported features raise <code>UnsupportedFeatureError</code> instead of failing silently.',
    col1: {
      num:   'Expression Layer',
      title: '<em>Semantic collection</em>, no SQL details',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> delegates SQL generation to the dialect. The same expression object is reusable across all dialects — zero hardcoded SQL.'
    },
    col2: {
      num:   'Dialect Layer (33 protocols)',
      title: '<em>33 protocols</em> declare capability boundaries',
      desc:  '<code>format_*()</code> methods generate target-database SQL. Capability check formula: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Backend Layer (12-layer Mixin)',
      title: '<em>12-layer Mixin</em> MRO composition',
      desc:  'Template Method pattern: non-I/O logic lives in shared Mixins; I/O logic is implemented separately. \\(n = 12\\) MRO layers — zero duplicated code.'
    }
  },

  /* ── Component Architecture · ActiveRecord + Backend ── */
  arch_comp: {
    label: 'Component Architecture',
    title: 'ActiveRecord + Backend, <em>two independent layers</em>.',
    intro: 'ActiveRecord is the user of Backend; Backend can work standalone. Sync and async variants are paired but not interchangeable.',
 
    ar_badge: 'Application Layer',
    ar_title: 'ActiveRecord',
    ar_desc:  'Model definition, query building, relation management, transaction handling. Includes ActiveQuery, SetOperation, CTEQuery.',
 
    be_badge: 'Independent Layer',
    be_title: 'Backend',
    be_desc:  'Database I/O layer; usable without ActiveRecord. SQLite ships built-in; other databases are extension packages.',
 
    uses_label:      'uses',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'Sync pairing — cannot mix with async',
    pair_async_note:  'Async pairing — cannot mix with sync',

    ar_diagram: `flowchart TB
    subgraph AR_SYNC["ActiveRecord (sync)"]
        direction TB
        ARS["ActiveRecord"]
        AQS["ActiveQuery"]
        SOS["SetOperation\n(UNION / INTERSECT / EXCEPT)"]
        CTES["CTEQuery\n(WITH ...)"]
        ARS --> AQS
        ARS --> SOS
        ARS --> CTES
    end
    subgraph AR_ASYNC["AsyncActiveRecord (async)"]
        direction TB
        ARA["AsyncActiveRecord"]
        AQA["AsyncActiveQuery"]
        SOA["AsyncSetOperation"]
        CTEA["AsyncCTEQuery"]
        ARA --> AQA
        ARA --> SOA
        ARA --> CTEA
    end
    AR_SYNC ~~~ AR_ASYNC`,

    be_diagram: `flowchart TB
    subgraph SYNC["Sync backends"]
        direction TB
        SB["StorageBackend\n(Abstract Base Class)"]
        subgraph Builtin["Built-in"]
            SQLS["SQLiteBackend"]
        end
        subgraph Ext["Extension packages"]
            direction LR
            MYS["MySQL / MariaDB"]
            PGS["PostgreSQL"]
            ORS["Oracle"]
            SSS["SQL Server"]
        end
        SB --> Builtin
        SB --> Ext
    end
    subgraph ASYNC["Async backends"]
        direction TB
        ASB["AsyncStorageBackend\n(Abstract Base Class)"]
        subgraph ABuiltin["Built-in"]
            ASQLS["AsyncSQLiteBackend"]
        end
        subgraph AExt["Extension packages"]
            direction LR
            AMYS["MySQL / MariaDB"]
            APGS["PostgreSQL"]
            AORS["Oracle"]
            ASSS["SQL Server"]
        end
        ASB --> ABuiltin
        ASB --> AExt
    end
    SYNC ~~~ ASYNC`,

    note1_title: 'Independent',
    note1_desc:  'Backend exposes a clean ABC. Use it directly without ActiveRecord for lightweight scripts or embedded scenarios.',
    note2_title: 'Extensible',
    note2_desc:  'SQLite ships with the core package. MySQL, MariaDB, PostgreSQL, Oracle, and SQL Server are separate packages — install only what you need.',
    note3_title: 'Type-safe pairing',
    note3_desc:  '<code>ActiveRecord</code> pairs with <code>StorageBackend</code>; <code>AsyncActiveRecord</code> pairs with <code>AsyncStorageBackend</code>. Cross-pairing raises a type error.',

    /* ── D3 diagram: group labels ── */
    node_sync_group:  'Sync',
    node_async_group: 'Async',

    /* ── D3 diagram: node display labels ── */
    node_ar_s:    'ActiveRecord',
    node_aq_s:    'ActiveQuery',
    node_so_s:    'SetOperation',
    node_cte_s:   'CTEQuery',
    node_ar_a:    'AsyncActiveRecord',
    node_aq_a:    'AsyncActiveQuery',
    node_so_a:    'AsyncSetOperation',
    node_cte_a:   'AsyncCTEQuery',
    node_sb_s:    'StorageBackend',
    node_sqlite_s:'SQLiteBackend',
    node_sqlite_a:'AsyncSQLiteBackend',
    node_sb_a:    'AsyncStorageBackend',
    node_ext:     'MySQL · PostgreSQL · SQL Server',
    node_ext_a:   'AsyncMySQL · AsyncPostgreSQL · …',

    /* ── D3 diagram: tooltip descriptions ── */
    tip_ar_s:  'Sync ActiveRecord. Subclass this to define your model; call <code>.save()</code>, <code>.query()</code> and other sync methods to interact with the database.',
    tip_ar_a:  'Async ActiveRecord. API mirrors the sync version exactly — all methods are <code>async/await</code>, ideal for FastAPI / asyncio stacks.',
    tip_aq_s:  'ActiveQuery (sync). Fluently chain WHERE, ORDER BY, JOIN, pagination, etc., then call <code>.all()</code> or <code>.one()</code> to execute.',
    tip_aq_a:  'AsyncActiveQuery (async). Same semantics as the sync version; all terminal methods are coroutines.',
    tip_so_s:  'SetOperation (sync). Combine multiple queries with UNION, INTERSECT, or EXCEPT into a single typed result set.',
    tip_so_a:  'AsyncSetOperation (async). Same as sync; executes asynchronously.',
    tip_cte_s: 'CTEQuery (sync). Build Common Table Expressions using WITH clauses; recursive CTEs are supported.',
    tip_cte_a: 'AsyncCTEQuery (async). Same as sync; executes asynchronously.',
    tip_sb_s:  'StorageBackend ABC (sync). Defines the minimal database I/O interface: execute / fetch / transaction. Usable directly without ActiveRecord.',
    tip_sb_a:  'AsyncStorageBackend ABC (async). Mirrors the sync interface; all I/O methods are coroutines.',
    tip_sqlite: 'SQLite backend — ships with the core package. Zero configuration needed; perfect for development, testing, and embedded use.',
    tip_ext:   'Extension backends (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver. Install only what you need; switch with a single <code>configure()</code> call.',
    tip_ext_a: 'Extension backends (async): one-to-one counterparts of the sync packages, with full async/await support.'
  },

  /* ── Quick Taste ─────────────────────────────────────── */
  qt: {
    label:         'Quick Taste · 30-second preview',
    title:         'From install to <em>first query</em> in under 30 lines.',
    btn_backends:  'Full backend docs →',
    btn_ar:        'ActiveRecord details →',
    btn_practices: 'Practice scenarios →'
  },

  /* ── Compare ────────────────────────────��─��──────────── */
  compare: {
    label:       'Compare',
    title:       'vs. other Python ORMs.',
    col_feature: 'Feature',
    row1:  'Design pattern',              row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend usable standalone',
    row3:  'No Session concept',
    row4:  'Sync / async API consistent',
    row5:  'Native Pydantic integration',
    row6:  'Runtime data validation',
    row7:  'Full SQL expressiveness',
    row8:  'Capability declaration mechanism',
    row9:  'Transparent SQL <code>.to_sql()</code>',
    row10: 'Zero forced migration dependency',
    row11: 'Minimal dependencies',
    row12: 'Explicit relation definition'
  },

  /* ── Voices ──────────────────────────────────────────── */
  voices: {
    label:   'Voices · What users say',
    title:   'What they <em>say</em>.',
    q1:      'rhosocial-activerecord finally lets me stop fighting the ORM. Type annotations as model definitions — absolutely right.',
    q1_role: 'Backend Engineer · Kyoto',
    q2:      'Async and sync share one API — refactoring is nearly zero cost. My entire FastAPI project migrated with two lines changed.',
    q2_role: 'Staff Engineer · Berlin',
    q3:      'I plugged in a DuckDB backend myself. Looked at the Backend ABC for less than an afternoon and it was running. That\'s extensibility.',
    q3_role: 'Data Platform · Singapore',
    q4:      'Every step of the fluent chain has correct type inference in the IDE. Pydantic\'s power applied exactly where it matters.',
    q4_role: 'Senior Python · São Paulo',
    q5:      'Zero runtime dependencies is the key. In embedded deployments we no longer worry about SQLAlchemy\'s footprint.',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  /* ── Stats ───────────────────────────────────────────── */
  stats: {
    label: 'By the numbers',
    title: 'Some <em>numbers</em>.',
    s1: 'Optional DB dialects',
    s2: 'Type annotation coverage',
    s3: 'Minimum Python version',
    s4: 'External ORM dependencies',
    s5: 'Capability protocols',
    s6: 'Backend MRO layers'
  },

  /* ── Install ─────────────────────────────────────────── */
  install: {
    label:     'Get started',
    title:     'One install, <em>ten minutes</em> to first query.',
    sub:       'Published on PyPI. The SQLite backend ships with the core package. Other backends install on demand.',
    docs:      'Read the docs →',
    practices: 'Practice scenarios →'
  },
  _p1: '',
  _p2: ''
});