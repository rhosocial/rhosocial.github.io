/**
 * assets/i18n/fa-ir.js — Global Persian dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/fa-ir.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['fa-ir'] = {
  /** Language meta */
  meta: { name: 'فارسی' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        'خانه',
    backends:     'Backends',
    activerecord: 'ActiveRecord',
    practices:    'تمرین‌ها'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'تم',
    font_label:  'فونت',
    lang_label:  'زبان',
    font_auto:  'خودکار (پیش‌فرض تم)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 تم · Ctrl+حرف · Shift+حرف · Alt+حرف'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'مشاهده جزئیات →',
    back:     '← بازگشت',
    copy:     'کپی',
    copied:   'کپی شد!',
    failed:   'کپی ناموفق',
    loading:  'بارگذاری…',
    error:    'خطای بارگذاری',
    expand:   'گسترش',
    collapse: 'فشرده‌سازی',
    prev:     'قبلی',
    next:     'بعدی',
    close:    'بستن'
  },


  /** Article tool bar */
  tools: {
    reportIssue: 'Report Issue',
    copyLink:    'Copy Link'
  },

  /** Homepage content */
  home: {
    hero: {
      eyebrow: 'rhosocial-activerecord <span>· v1.0 · Apache 2.0</span>',
      title: 'Python ORM<br /><span class="hl">Redesigned</span><br /><span class="dim">Starting from types.</span>',
      sub: 'Define models with <strong>native Python type annotations</strong>. Fluent queries generate SQL transparently. Sync and async, <strong>the same API</strong>.',
      install_btn: 'pip install',
      github_btn: 'GitHub',
      stat_backends: 'Database backends',
      stat_annotated: 'Type annotated',
      stat_python: 'Python support',
      stat_deps: 'ORM deps'
    },
    demo: {
      term_title: 'demo.py — rhosocial-activerecord',
      pane_python: 'Python model',
      pane_sql: 'Generated SQL',
      to_sql: '.to_sql()',
      params: 'PARAMS',
      rows: 'rows in'
    },
    chain: {
      section_label: 'Interactive',
      title: 'Build queries by clicking,<br /><span class="hl">see SQL in real time</span>',
      sub: 'Every chained method maps to a line of SQL. Transparent, controllable, no magic.',
      panel_title: 'Query Builder',
      click_hint: 'Toggle',
      compiled: 'compiled',
      no_clauses: 'No clauses selected'
    },
    feat: {
      section_label: 'Six promises',
      title: 'Six core<span class="hl"> design decisions</span>.'
    },
    feat_cards: [
      {
        num: '01 / type-safe', icon: '⬡',
        title: '<span class="hl">Types</span> are fields',
        desc: 'Python type annotations define your model directly. Full IDE inference, Pydantic runtime validation, no extra DSL.',
        code: '<span class="kw">class</span> <span class="cls">User</span>(<span class="cls">ActiveRecord</span>):\n    name: <span class="cls">str</span>\n    age:  <span class="cls">int</span> = <span class="num">0</span>',
        tags: ['typing','pydantic','3.8+'],
        link: 'activerecord/model.html'
      },
      {
        num: '02 / async-first', icon: '⟳',
        title: 'Sync & async<span class="hl">, one API</span>',
        desc: 'ActiveRecord (sync) and AsyncActiveRecord share identical semantics. for → async for, everything else stays the same.',
        code: '<span class="cm"># sync</span>\n<span class="cls">User</span>.<span class="fn">query</span>().<span class="fn">all</span>()\n<span class="cm"># async — same API</span>\n<span class="kw">await</span> <span class="cls">User</span>.<span class="fn">query</span>().<span class="fn">all</span>()',
        tags: ['asyncio','parity','awaitable'],
        link: ''
      },
      {
        num: '03 / backends', icon: '◈',
        title: '<span class="hl">Pluggable</span> backends',
        desc: 'Core depends on Pydantic only. SQLite built-in; MySQL/Postgres as separate packages; write your own Backend ABC.',
        code: '<span class="cm"># configure backend</span>\n<span class="fn">configure</span>(backend=<span class="str">"postgresql"</span>)',
        tags: ['SQLite','MySQL','Postgres','custom'],
        link: 'backends/index.html'
      },
      {
        num: '04 / relations', icon: '⟶',
        title: '<span class="hl">Explicit</span> relations',
        desc: 'Declare relation fields with ClassVar to avoid Pydantic scanning. Automatically replaced with relation descriptors at runtime.',
        code: 'posts: <span class="cls">ClassVar</span>[<span class="cls">HasMany</span>[<span class="str">"Post"</span>]]\n    = <span class="cls">HasMany</span>(foreign_key=<span class="str">"author_id"</span>)',
        tags: ['HasMany','BelongsTo','HasOne','eager-load'],
        link: 'activerecord/relations.html'
      },
      {
        num: '05 / transactions', icon: '⊞',
        title: '<span class="hl">Atomic</span> nesting',
        desc: 'Context manager + savepoints, rollback on exception. Nested transactions create savepoints automatically with clear semantics.',
        code: '<span class="kw">with</span> <span class="cls">User</span>.<span class="fn">transaction</span>():\n    user.<span class="fn">save</span>()\n    <span class="kw">with</span> <span class="cls">User</span>.<span class="fn">transaction</span>():\n        post.<span class="fn">save</span>()  <span class="cm"># savepoint</span>',
        tags: ['SAVEPOINT','rollback','ACID'],
        link: 'activerecord/transactions.html'
      },
      {
        num: '06 / pythonic', icon: '∿',
        title: 'Reads like<span class="hl"> plain English</span>',
        desc: 'Intuitive chain syntax. Call .to_sql() anytime to see the actual generated SQL — no black box.',
        code: '<span class="cls">User</span>.<span class="fn">query</span>()\n    .<span class="fn">where</span>(<span class="cls">User</span>.c.age &gt;= <span class="num">18</span>)\n    .<span class="fn">order_by</span>(<span class="cls">User</span>.c.name)\n    .<span class="fn">all</span>()',
        tags: ['chaining','.to_sql()','no DSL'],
        link: 'activerecord/query.html'
      }
    ],
    arch: {
      section_label: 'Architecture',
      title: 'Two independent layers,<span class="hl"> combine as needed</span>.',
      sub: 'ActiveRecord is the user of Backend; Backend runs independently. Sync/async pairs must not be mixed.',
      layer_ar: 'ActiveRecord Layer',
      layer_be: 'Backend Layer',
      ar_name: 'ActiveRecord',
      ar_sub: 'ActiveQuery · SetOperation · CTEQuery',
      async_ar_name: 'AsyncActiveRecord',
      async_ar_sub: 'AsyncActiveQuery · AsyncCTEQuery',
      be_name: 'StorageBackend',
      be_sub: 'SQLite · PostgreSQL · MySQL · MariaDB · SQL Server · Oracle',
      async_be_name: 'AsyncStorageBackend',
      async_be_sub: 'AsyncSQLite · AsyncPG · AsyncMySQL · …',
      sync: 'sync',
      async: 'async',
      all_backends: 'all backends',
      uses: 'uses',
      abc: 'ABC'
    },
    cmp: {
      section_label: 'Compare',
      title: 'Compared to<span class="hl"> other ORMs</span>.',
      header_feat: 'Feature',
      row_backend: 'Standalone backend usage',
      row_sync_async: 'Unified Sync/Async API',
      row_pydantic: 'Native Pydantic v2',
      row_no_session: 'No Session concept',
      row_sql_transparent: 'SQL transparency .to_sql()',
      row_zero_migration: 'Zero mandatory migrations'
    },
    install: {
      section_label: 'Get started',
      title: 'Install in one line,<span class="hl"> up in ten minutes</span>.',
      sub: 'SQLite ships with the core package. Pydantic is the only dependency. Other backends install on demand.',
      copy_hint: 'Click to copy',
      doc_btn: 'Read the docs →',
      github_btn: 'GitHub →'
    }
  }
};