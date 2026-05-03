/**
 * index/id-id.js — Halaman utama kamus bahasa Indonesia
 *
 * Dependensi: assets/i18n/id-id.js harus dimuat dulu (menyediakan meta/brand/nav/control/footer/common).
 * File ini memperluas window.I18N['id-id'] via Object.assign, menambahkan key khusus halaman utama.
 */
window.I18N = window.I18N || {};
window.I18N['id-id'] = Object.assign(window.I18N['id-id'] || {}, {

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    eyebrow:       'v1.0 · Apache 2.0 · Pure Python',
    title:         'rhosocial ActiveRecord,<br><em>ditancang ulang</em> untuk Python.',
    sub:           '<strong>rhosocial-activerecord</strong> mendefinisikan model dengan Python native type annotations.',
    cta_secondary: 'Jelajahi fitur →'
  },

  /* ── 6-Feature cards ─────────────────────────────────── */
  features: {
    label: 'Mengapa · Enam Janji Utama',
    title: 'Mengapa <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Type-safe',         title: '<em>Type-safe</em> by construction',       desc: 'Fields hanya <code>name: str</code> — storage, validation, dan IDE completion disatukan.' },
    f2: { num: '02 / Async First',        title: 'Sync &amp; async, <em>satu API</em>',       desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> berbagi semantic yang sama.' },
    f3: { num: '03 / Pluggable',          title: 'Pluggable <em>backends</em>',              desc: 'SQLite built-in; Postgres/MySQL/SQLServer/Oracle sebagai paket terpisah; buat sendiri.' },
    f4: { num: '04 / Explicit Relations', title: '<em>Relations</em> dibuat eksplisit',         desc: '<code>ClassVar</code> + descriptor protocol, auto-replaced pada runtime.' },
    f5: { num: '05 / Transactions',       title: 'Transactions, <em>properly nested</em>',   desc: 'Context manager + savepoints; exception memicu auto rollback.' },
    f6: { num: '06 / Pythonic',           title: 'Dibaca seperti <em>Inggris</em>',              desc: '<code>User.query().where(...).all()</code> — hanya Python.' }
  },

  /* ── Feature detail sections ─────────────────────────── */
  f1: {
    label: '01 / Type-safe',
    title: '<em>Types adalah fields</em>, dari 3.8 ke 3.12.',
    intro: 'Python type annotations <em>adalah</em> model definition — tanpa DSL tambahan. Pydantic menangani runtime validation; IDE Anda mendapatkan full type inference.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, same semantics.',
    intro: 'Sync dan async berbagi satu model definition. Ganti <code>for</code> dengan <code>async for</code> — tidak ada yang lain berubah.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Pluggable backends</em>, pilih sesuai kebutuhan.',
    intro: 'Package core hanya bergantung pada Pydantic. SQLite built-in; database lain dikirim sebagai paket terpisah, switchable dengan satu panggilan <code>configure()</code>.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Explicit relations</em>, ClassVar + descriptor.',
    intro: 'Declare relation fields dengan <code>ClassVar</code> agar tetap di luar Pydantic\'s scan. Pada runtime mereka secara otomatis diganti dengan <code>relation()</code>.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Atomic transactions</em>, nested savepoints.',
    intro: 'Nested transactions otomatis membuat SAVEPOINTs. Context manager commit atau rollback; exception snap ke savepoint terdekat.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Dibaca seperti Inggris</em>, tanpa DSL.',
    intro: 'Fluent chained calls dibaca natural. <code>.to_sql()</code> membuat generated SQL transparan di titik mana pun.'
  },

  /* ── Architecture · Internal three layers ───────────── */
  arch: {
    label: 'Architecture · Tiga Layers',
    title: '<em>Expression → Dialect → Backend</em>, tanggung jawab jelas.',
    intro: 'Query logic, SQL generation, dan database execution decoupling ke tiga layers. Protocols (<code>@runtime_checkable</code>) menyatakan capabilities di boundaries — unsupported features raise <code>UnsupportedFeatureError</code> bukan gagal diam-diam.',
    col1: {
      num:   'Expression Layer',
      title: '<em>Semantic collection</em>, tanpa detail SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> mendelegasikan SQL generation ke dialect. Object expression yang sama reusable di semua dialects — zero hardcoded SQL.'
    },
    col2: {
      num:   'Dialect Layer (33 protocols)',
      title: '<em>33 protocols</em> declares capability boundaries',
      desc:  'Method <code>format_*()</code> menghasilkan SQL untuk target database. Formula capability check: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Backend Layer (12-layer Mixin)',
      title: '<em>12-layer Mixin</em> MRO composition',
      desc:  'Template Method pattern: non-I/O logic ada di shared Mixins; I/O logic diimplementasikan terpisah. \\(n = 12\\) MRO layers — zero duplicated code.'
    }
  },

  /* ── Component Architecture · ActiveRecord + Backend ── */
  arch_comp: {
    label: 'Component Architecture',
    title: 'ActiveRecord + Backend, <em>dua layer independen</em>.',
    intro: 'ActiveRecord adalah pengguna Backend; Backend bisa berdiri sendiri. Variant sync dan async berpasangan tapi tidak interchangeable.',

    ar_badge: 'Application Layer',
    ar_title: 'ActiveRecord',
    ar_desc:  'Model definition, query building, relation management, transaction handling. Includes ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Independent Layer',
    be_title: 'Backend',
    be_desc:  'Database I/O layer; usable tanpa ActiveRecord. SQLite shipped built-in; database lain adalah extension packages.',

    uses_label:      'uses',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'Pasangan sync — tidak bisa campur dengan async',
    pair_async_note:  'Pasangan async — tidak bisa campur dengan sync',

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
    note1_desc:  'Backend mengekspos ABC yang bersih. Gunakan langsung tanpa ActiveRecord untuk script ringan atau embedded scenarios.',
    note2_title: 'Extensible',
    note2_desc:  'SQLite dikirim dengan package core. MySQL, MariaDB, PostgreSQL, Oracle, dan SQL Server adalah paket terpisah — install hanya yang dibutuhkan.',
    note3_title: 'Type-safe pairing',
    note3_desc:  '<code>ActiveRecord</code> dipasangkan dengan <code>StorageBackend</code>; <code>AsyncActiveRecord</code> dipasangkan dengan <code>AsyncStorageBackend</code>. Cross-pairing raise type error.',

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
    node_ext:     'MySQL · PG · Oracle · SS',
    node_ext_a:   'AsyncMySQL · AsyncPG · …',

    /* ── D3 diagram: tooltip descriptions ── */
    tip_ar_s:  'ActiveRecord sync. Subclass ini untuk define model Anda; call <code>.save()</code>, <code>.query()</code> dan method sync lain untuk interaksi dengan database.',
    tip_ar_a:  'Async ActiveRecord. API mencerminkan versi sync dengan tepat — semua method adalah <code>async/await</code>, ideal untuk FastAPI / asyncio stacks.',
    tip_aq_s:  'ActiveQuery (sync). Chain WHERE, ORDER BY, JOIN, pagination, dll dengan fluent, lalu call <code>.all()</code> atau <code>.first()</code> untuk execute.',
    tip_aq_a:  'AsyncActiveQuery (async). Same semantics dengan versi sync; semua method terminal adalah coroutines.',
    tip_so_s:  'SetOperation (sync). Gabungkan multiple queries dengan UNION, INTERSECT, atau EXCEPT menjadi single typed result set.',
    tip_so_a:  'AsyncSetOperation (async). Sama seperti sync; executes asynchronously.',
    tip_cte_s: 'CTEQuery (sync). Build Common Table Expressions menggunakan WITH clause; recursive CTEs supported.',
    tip_cte_a: 'AsyncCTEQuery (async). Sama seperti sync; executes asynchronously.',
    tip_sb_s:  'StorageBackend ABC (sync). Mendefinisikan minimal database I/O interface: execute / fetch / transaction. Langsung usable tanpa ActiveRecord.',
    tip_sb_a:  'AsyncStorageBackend ABC (async). Mencerminkan interface sync; semua method I/O adalah coroutines.',
    tip_sqlite: 'SQLite backend — dikirim dengan package core. Zero configuration needed; sempurna untuk development, testing, dan embedded use.',
    tip_ext:   'Extension backends (sync): rhosocial-activerecord-mysql, -postgresql, -oracle, -sqlserver. Install hanya yang dibutuhkan; switch dengan satu panggilan <code>configure()</code>.',
    tip_ext_a: 'Extension backends (async): one-to-one counterparts dari sync packages, dengan full async/await support.'
  },

  /* ── Quick Taste ─────────────────────────────────────── */
  qt: {
    label:         'Quick Taste · Preview 30 detik',
    title:         'Dari install ke <em>query pertama</em> dalam kurang dari 30 baris.',
    btn_backends:  'Dokumentasi backend lengkap →',
    btn_ar:        'Detail ActiveRecord →',
    btn_practices: 'Skenario praktik →'
  },

  /* ── Compare ─────────────────────────────────────────── */
  compare: {
    label:       'Bandingkan',
    title:       'vs. Python ORMs lain.',
    col_feature: 'Fitur',
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
    label:   'Suara · Apa yang pengguna katakan',
    title:   'Apa yang mereka <em>katakan</em>.',
    q1:      'rhosocial-activerecord akhirnya membiarkan saya berhenti bertengkar dengan ORM. Type annotations sebagai model definition — benar-benar tepat.',
    q1_role: 'Backend Engineer · Kyoto',
    q2:      'Async dan sync berbagi satu API — refactoring hampir tanpa biaya. Seluruh project FastAPI saya bermigrasi dengan dua baris berubah.',
    q2_role: 'Staff Engineer · Berlin',
    q3:      'Saya membuat backend DuckDB sendiri. Melihat Backend ABC kurang dari setengah hari dan sudah berjalan. Itu yang disebut extensibility.',
    q3_role: 'Data Platform · Singapore',
    q4:      'Setiap step dari fluent chain memiliki type inference yang benar di IDE. Kekuatan Pydantic diterapkan persis di tempat yang tepat.',
    q4_role: 'Senior Python · São Paulo',
    q5:      'Zero runtime dependencies adalah kuncinya. Di embedded deployments kami tidak lagi khawatir dengan footprint SQLAlchemy.',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  /* ── Stats ───────────────────────────────────────────── */
  stats: {
    label: 'Dalam angka',
    title: 'Beberapa <em>angka</em>.',
    s1: 'Optional DB dialects',
    s2: 'Type annotation coverage',
    s3: 'Minimum Python version',
    s4: 'External ORM dependencies',
    s5: 'Capability protocols',
    s6: 'Backend MRO layers'
  },

  /* ── Install ─────────────────────────────────────────── */
  install: {
    label:     'Mulai',
    title:     'Satu install, <em>sepuluh menit</em> ke query pertama.',
    sub:       'Dipublikasikan di PyPI. Backend SQLite dikirim dengan package core. Backend lain install sesuai kebutuhan.',
    docs:      'Baca dokumentasi →',
    practices: 'Skenario praktik →'
  }

});
