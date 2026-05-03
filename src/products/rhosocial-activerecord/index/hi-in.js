/**
 * index/hi-in.js — होमपेज हिंदी शब्दकोश
 *
 * निर्भरता: assets/i18n/hi-in.js पहले लोड होना चाहिए (meta/brand/nav/control/footer/common प्रदान करता है).
 * यह फ़ाइल window.I18N['hi-in'] को Object.assign के माध्यम से विस्तारित करती है, होमपेज-विशिष्ट keys जोड़ती है।
 */
window.I18N = window.I18N || {};
window.I18N['hi-in'] = Object.assign(window.I18N['hi-in'] || {}, {

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    eyebrow:       'v1.0 · Apache 2.0 · Pure Python',
    title:         'rhosocial ActiveRecord,<br><em>पुनः डिज़ाइन किया</em> for Python.',
    sub:           '<strong>rhosocial-activerecord</strong> मॉडल को Python के native type annotations से परिभाषित करता है।',
    cta_secondary: 'फीचर्स देखें →'
  },

  /* ── 6-Feature cards ─────────────────────────────────── */
  features: {
    label: 'क्यों · छह मुख्य वादे',
    title: 'क्यों <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Type-safe',         title: '<em>Type-safe</em> by construction',       desc: 'Fields सिर्फ <code>name: str</code> — storage, validation, और IDE completion एकीकृत।' },
    f2: { num: '02 / Async First',        title: 'Sync &amp; async, <em>एक API</em>',       desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> समान semantics साझा करते हैं।' },
    f3: { num: '03 / Pluggable',          title: 'Pluggable <em>backends</em>',              desc: 'SQLite built-in; Postgres/MySQL/SQLServer/Oracle अलग packages; या खुद का बनाएं।' },
    f4: { num: '04 / Explicit Relations', title: '<em>Relations</em> को स्पष्ट बनाया',         desc: '<code>ClassVar</code> + descriptor protocol, runtime पर auto-replaced।' },
    f5: { num: '05 / Transactions',       title: 'Transactions, <em>सही ढंग से nested</em>',   desc: 'Context manager + savepoints; exception auto rollback trigger करता है।' },
    f6: { num: '06 / Pythonic',           title: '<em>अंग्रेज़ी</em> की तरह पढ़ता है',              desc: '<code>User.query().where(...).all()</code> — सिर्फ Python।' }
  },

  /* ── Feature detail sections ─────────────────────────── */
  f1: {
    label: '01 / Type-safe',
    title: '<em>Types फील्ड्स हैं</em>, 3.8 से 3.12 तक।',
    intro: 'Python type annotations <em>हैं</em> model definition — कोई अतिरिक्त DSL नहीं। Pydantic runtime validation संभालता है; आपका IDE पूर्ण type inference पाता है।'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, same semantics।',
    intro: 'Sync और async एक model definition साझा करते हैं। <code>for</code> को <code>async for</code> से बदलें — कुछ और नहीं बदलता।'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Pluggable backends</em>, जरूरत के हिसाब से चुनें।',
    intro: 'Core package सिर्फ Pydantic पर निर्भर करता है। SQLite built-in; अन्य databases अलग packages के रूप में आते हैं, एकल <code>configure()</code> कॉल से switchable।'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Explicit relations</em>, ClassVar + descriptor।',
    intro: 'Relation fields को <code>ClassVar</code> के साथ declare करें ताकि वे Pydantic के scan से बाहर रहें। Runtime पर वे स्वचालित रूप से <code>relation()</code> से replace हो जाते हैं।'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Atomic transactions</em>, nested savepoints।',
    intro: 'Nested transactions स्वचालित रूप से SAVEPOINTs बनाते हैं। Context manager commit या rollback करता है; exceptions निकटतम savepoint पर snap करते हैं।'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>अंग्रेज़ी की तरह पढ़ता है</em>, कोई DSL नहीं।',
    intro: 'Fluent chained calls स्वाभाविक रूप से पढ़ते हैं। <code>.to_sql()</code> generated SQL को किसी भी बिंदु पर transparent बनाता है।'
  },

  /* ── Architecture · Internal three layers ───────────── */
  arch: {
    label: 'Architecture · तीन Layers',
    title: '<em>Expression → Dialect → Backend</em>, स्पष्ट जिम्मेदारियां।',
    intro: 'Query logic, SQL generation, और database execution तीन layers में decoupled हैं। Protocols (<code>@runtime_checkable</code>) boundaries पर capabilities declare करते हैं — unsupported features <code>UnsupportedFeatureError</code> raise करते हैं silently fail करने के बजाय।',
    col1: {
      num:   'Expression Layer',
      title: '<em>Semantic collection</em>, कोई SQL details नहीं',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> SQL generation को dialect को delegate करता है। Same expression object सभी dialects में reusable है — zero hardcoded SQL।'
    },
    col2: {
      num:   'Dialect Layer (33 protocols)',
      title: '<em>33 protocols</em> capability boundaries declare करते हैं',
      desc:  '<code>format_*()</code> methods target-database SQL generate करते हैं। Capability check formula: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Backend Layer (12-layer Mixin)',
      title: '<em>12-layer Mixin</em> MRO composition',
      desc:  'Template Method pattern: non-I/O logic shared Mixins में रहता है; I/O logic separately implemented है। \\(n = 12\\) MRO layers — zero duplicated code।'
    }
  },

  /* ── Component Architecture · ActiveRecord + Backend ── */
  arch_comp: {
    label: 'Component Architecture',
    title: 'ActiveRecord + Backend, <em>दो स्वतंत्र layers</em>।',
    intro: 'ActiveRecord Backend का user है; Backend अकेला काम कर सकता है। Sync और async variants जोड़े में हैं पर interchangeable नहीं।',

    ar_badge: 'Application Layer',
    ar_title: 'ActiveRecord',
    ar_desc:  'Model definition, query building, relation management, transaction handling। Includes ActiveQuery, SetOperation, CTEQuery।',

    be_badge: 'Independent Layer',
    be_title: 'Backend',
    be_desc:  'Database I/O layer; ActiveRecord के बिना usable। SQLite core package के साथ आता है; अन्य databases extension packages हैं।',

    uses_label:      'uses',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'Sync pairing — async के साथ मिक्स नहीं कर सकता',
    pair_async_note:  'Async pairing — sync के साथ मिक्स नहीं कर सकता',

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
    note1_desc:  'Backend एक clean ABC expose करता है। Lightweight scripts या embedded scenarios के लिए ActiveRecord के बिना इसे सीधे use करें।',
    note2_title: 'Extensible',
    note2_desc:  'SQLite core package के साथ आता है। MySQL, MariaDB, PostgreSQL, Oracle, और SQL Server अलग packages हैं — जो चाहिए वही install करें।',
    note3_title: 'Type-safe pairing',
    note3_desc:  '<code>ActiveRecord</code> जोड़ता है <code>StorageBackend</code> के साथ; <code>AsyncActiveRecord</code> जोड़ता है <code>AsyncStorageBackend</code> के साथ। Cross-pairing type error raise करता है।',

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
    tip_ar_s:  'Sync ActiveRecord। अपना model define करने के लिए इसको subclass करें; database से interact करने के लिए <code>.save()</code>, <code>.query()</code> और other sync methods call करें।',
    tip_ar_a:  'Async ActiveRecord। API exact sync version को mirror करता है — सभी methods <code>async/await</code> हैं, FastAPI / asyncio stacks के लिए ideal।',
    tip_aq_s:  'ActiveQuery (sync)। WHERE, ORDER BY, JOIN, pagination, etc. को fluent में chain करें, फिर <code>.all()</code> या <code>.one()</code> call करें execute करने के लिए।',
    tip_aq_a:  'AsyncActiveQuery (async)। Sync version के same semantics; सभी terminal methods coroutines हैं।',
    tip_so_s:  'SetOperation (sync)। Multiple queries को UNION, INTERSECT, या EXCEPT से combine करके single typed result set return करें।',
    tip_so_a:  'AsyncSetOperation (async)। Sync के समान; asynchronously execute करता है।',
    tip_cte_s: 'CTEQuery (sync)। WITH clauses का उपयोग करके Common Table Expressions build करें; recursive CTEs supported हैं।',
    tip_cte_a: 'AsyncCTEQuery (async)। Sync के समान; asynchronously execute करता है।',
    tip_sb_s:  'StorageBackend ABC (sync)। Minimal database I/O interface define करता है: execute / fetch / transaction। ActiveRecord के बिना directly usable।',
    tip_sb_a:  'AsyncStorageBackend ABC (async)। Sync interface को mirror करता है; सभी I/O methods coroutines हैं।',
    tip_sqlite: 'SQLite backend — core package के साथ आता है। Zero configuration needed; development, testing, और embedded use के लिए perfect।',
    tip_ext:   'Extension backends (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver। जो चाहिए वही install करें; एक single <code>configure()</code> call से switch करें।',
    tip_ext_a: 'Extension backends (async): sync packages के one-to-one counterparts, full async/await support के साथ।'
  },

  /* ── Quick Taste ─────────────────────────────────────── */
  qt: {
    label:         'Quick Taste · 30-सेकंड preview',
    title:         'Install से <em>पहली query</em> तक 30 lines से कम में।',
    btn_backends:  'पूर्ण backend docs →',
    btn_ar:        'ActiveRecord details →',
    btn_practices: 'Practice scenarios →'
  },

  /* ── Compare ─────────────────────────────────────────── */
  compare: {
    label:       'तुलना करें',
    title:       'vs. अन्य Python ORMs।',
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
    label:   'आवाजें · क्या कहते हैं users',
    title:   'वे <em>क्या कहते हैं</em>।',
    q1:      'rhosocial-activerecord finally let me stop fighting the ORM. Type annotations as model definitions — absolutely right.',
    q1_role: 'Backend Engineer · Kyoto',
    q2:      'Async और sync एक API share करते हैं — refactoring लगभग zero cost है। मेरा entire FastAPI project दो lines बदलकर migrate हुआ।',
    q2_role: 'Staff Engineer · Berlin',
    q3:      'I plugged in a DuckDB backend myself. Looked at the Backend ABC for less than an afternoon and it was running. That is extensibility.',
    q3_role: 'Data Platform · Singapore',
    q4:      'Fluent chain का हर step correct type inference IDE में है। Pydantic की power exact जहां matter करती है वहां applied।',
    q4_role: 'Senior Python · São Paulo',
    q5:      'Zero runtime dependencies key है। Embedded deployments में हम अब SQLAlchemy के footprint की चिंता नहीं करते।',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  /* ── Stats ───────────────────────────────────────────── */
  stats: {
    label: 'नंबरों में',
    title: 'कुछ <em>numbers</em>।',
    s1: 'Optional DB dialects',
    s2: 'Type annotation coverage',
    s3: 'Minimum Python version',
    s4: 'External ORM dependencies',
    s5: 'Capability protocols',
    s6: 'Backend MRO layers'
  },

  /* ── Install ─────────────────────────────────────────── */
  install: {
    label:     'शुरू करें',
    title:     'एक install, <em>ten minutes</em> में पहली query तक।',
    sub:       'PyPI पर published। SQLite backend core package के साथ आता है। अन्य backends demand पर install होते हैं।',
    docs:      'डॉक्स पढ़ें →',
    practices: 'Practice scenarios →'
  }

});
