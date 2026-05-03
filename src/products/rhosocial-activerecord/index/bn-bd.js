/**
 * index/bn-bd.js — 首页孟加拉语词典
 *
 * 依赖：assets/i18n/bn-bd.js 必须先加载。
 * 本文件通过 Object.assign 向已有的 window.I18N['bn-bd'] 追加首页特有 key。
 */
window.I18N = window.I18N || {};
window.I18N['bn-bd'] = Object.assign(window.I18N['bn-bd'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord,<br>Python-এর জন্য <em>নতুন করে ডিজাইন</em>।',
    sub: '<strong>rhosocial-activerecord</strong> Python-এর নেটিভ টাইপ অ্যানোটেশন দিয়ে মডেল সংজ্ঞায়িত করে এবং <code>query().where(...).all()</code> চেইন দিয়ে কোয়েরি করে। প্রথম দিন থেকে sync ও async। কোনো বাহ্যিক ORM নির্ভরতা শূন্য — SQLite বিল্ট-ইন, অন্য ডাটাবেস আলাদা প্যাকেজ, নিজস্ব backend কয়েক ডজন লাইনে লেখা যায়।',
    cta_secondary: 'ফিচার দেখুন →'
  },

  features: {
    label: 'কেন · ৬টি প্রতিশ্রুতি',
    title: 'কেন <em>rhosocial ActiveRecord</em>।',
    f1: { num: '০১ / টাইপ = ফিল্ড', title: 'গঠন থেকেই <em>টাইপ-সেফ</em>', desc: '<code>name: str</code> — সংরক্ষণ, ভ্যালিডেশন ও IDE পরামর্শ একসাথে।' },
    f2: { num: '০২ / Async প্রথম শ্রেণি', title: 'Sync &amp; async, <em>একটি API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — আকৃতি অভিন্ন।' },
    f3: { num: '০৩ / বিনিময়যোগ্য backend', title: 'বিনিময়যোগ্য <em>backend</em>', desc: 'SQLite বিল্ট-ইন; Postgres/MySQL/MSSQL/Oracle আলাদা প্যাকেজ; বা নিজস্ব।' },
    f4: { num: '০৪ / স্পষ্ট সম্পর্ক', title: '<em>সম্পর্ক</em> স্পষ্টভাবে ঘোষিত', desc: 'has_many / belongs_to মডেলে ঘোষণা; সম্পর্ক নিজেই <code>QuerySet</code>।' },
    f5: { num: '০৫ / পারমাণবিক ট্রানজাকশন', title: 'ট্রানজাকশন, <em>সঠিকভাবে নেস্টেড</em>', desc: 'context manager + savepoint; ব্যতিক্রম স্বয়ংক্রিয় rollback ঘটায়।' },
    f6: { num: '০৬ / Pythonic', title: '<em>ইংরেজি</em> পড়ার মতো পড়ুন', desc: '<code>User.query().where(...).all()</code> — কোনো DSL নেই, শুধু Python।' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>টাইপ = ফিল্ড</em>, ৩.৮ থেকে ৩.১২।',
    intro: 'Python টাইপ অ্যানোটেশন মডেল সংজ্ঞা, অতিরিক্ত DSL নেই। Pydantic রানটাইম ভ্যালিডেশন, IDE সম্পূর্ণ টাইপ ইনফারেন্স।'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = Async</em>, একই শব্দার্থবিদ্যা।',
    intro: 'Sync/async একই মডেল সংজ্ঞা শেয়ার করে। <code>for</code> → <code>async for</code>, বাকি সব একই।'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>backend বিনিময়যোগ্য</em>, চাহিদামতো।',
    intro: 'কোর প্যাকেজ শুধু Pydantic নির্ভর করে। SQLite বিল্ট-ইন, অন্য ডাটাবেস আলাদা প্যাকেজ হিসেবে, <code>configure()</code> এক লাইনে সুইচ।'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>সম্পর্ক স্পষ্ট</em>, ClassVar + ডেসক্রিপ্টর।',
    intro: '<code>ClassVar</code> দিয়ে রিলেশন ফিল্ড ঘোষণা করুন Pydantic স্ক্যান এড়াতে। রানটাইমে অটো <code>relation()</code> তে প্রতিস্থাপন।'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>পারমাণবিক ট্রানজাকশন</em>, নেস্টেড savepoint।',
    intro: 'নেস্টেড ট্রানজাকশন অটো SAVEPOINT তৈরি করে। Context manager অটো commit/rollback, ব্যতিক্রম অটো সর্বশেষ savepoint এ ফেরত।'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>ইংরেজির মতো পড়া</em>, DSL নেই।',
    intro: 'চেইন কল, ইংরেজির মতো পড়া যায়। <code>.to_sql()</code> দিয়ে আসল SQL দেখুন।'
  },

  practice: {
    label: 'ব্যবহারে · বাস্তব কোড',
    title: '৩.৮ থেকে ৩.১২, <em>ধাপে ধাপে</em>।',
    intro: 'testsuite রিপোজিটরির <code>models_py38.py</code> … <code>models_py312.py</code> ফাইলের সাথে সামঞ্জস্যপূর্ণ।',
    p1: '<b>৩.৮ → ৩.৯</b>: <code>list[str]</code> <code>List[str]</code>-এর বদলে (PEP 585)।',
    p2: '<b>৩.৯ → ৩.১০</b>: <code>int | None</code> <code>Optional[int]</code>-এর বদলে (PEP 604)।',
    p3: '<b>৩.১০ → ৩.১১</b>: <code>Self</code> টাইপ (PEP 673)।',
    p4: '<b>৩.১১ → ৩.১২</b>: <code>@override</code> এবং PEP 695 জেনেরিক <code>class Result[T]:</code>।'
  },

  arch: {
    label: 'Architecture · তিন স্তর',
    title: '<em>এক্সপ্রেশন → ডায়লেক্ট → Backend</em>, দায়িত্ব আলাদা।',
    intro: 'কোয়েরি লজিক, SQL জেনারেশন, ডাটাবেস এক্সিকিউশন তিন স্তরে আলাদা। প্রোটোকল (<code>@runtime_checkable</code>) সীমানায় ক্ষমতা ঘোষণা করে — অসমর্থিত ফিচার <code>UnsupportedFeatureError</code> থ্রো করে, নীরব ব্যর্থ নয়।',
    col1: {
      num:   'এক্সপ্রেশন স্তর',
      title: '<em>সিমান্টিক্স সংগ্রহ</em>, SQL বিস্তারিত নেই',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> ডায়লেক্টে SQL জেনারেশন অর্পণ করে। এক এক্সপ্রেশন অবজেক্ট সব ডায়লেক্টে রিইউজেবল, শূন্য হার্ড-কোডেড SQL।'
    },
    col2: {
      num:   'ডায়লেক্ট স্তর (৩৩ প্রোটোকল)',
      title: '<em>৩৩ প্রোটোকল</em> ক্ষমতার সীমা ঘোষণা করে',
      desc:  '<code>format_*()</code> মেথড টার্গেট ডাটাবেসে SQL জেনারেট করে। ক্ষমতা ডিটেকশন ফর্মুলা: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Backend স্তর (১২ Mixin)',
      title: '<em>১২ Mixin</em> MRO কম্বিনেশন',
      desc:  'টেমপ্লেট মেথড প্যাটার্ন: non-I/O লজিক Mixin-এ শেয়ার, I/O লজিক আলাদা। \\(n = 12\\) MRO লেয়ার কম্বিনেশন, শূন্য কোড রিপিশন।'
    }
  },

  arch_comp: {
    label: 'কম্পোনেন্ট আর্কিটেকচার',
    title: 'ActiveRecord + Backend, <em>দুটি স্বাধীন স্তর</em>।',
    intro: 'ActiveRecord Backend এর ব্যবহারকারী; Backend স্বাধীনভাবে কাজ করতে পারে। sync আর async আলাদা, মিশানো যায় না।',

    ar_badge: 'অ্যাপ্লিকেশন স্তর',
    ar_title: 'ActiveRecord',
    ar_desc:  'মডেল সংজ্ঞা, কোয়েরি বিল্ডিং, সম্পর্ক ম্যানেজমেন্ট, ট্রানজাকশন হ্যান্ডলিং। ActiveQuery, SetOperation, CTEQuery অন্তর্ভুক্ত।',

    be_badge: 'স্বাধীন স্তর',
    be_title: 'Backend',
    be_desc:  'ডাটাবেস I/O স্তর, ActiveRecord ছাড়া ব্যবহারযোগ্য। SQLite বিল্ট-ইন, অন্য ডাটাবেস এক্সটেনশন প্যাকেজ হিসেবে।',

    uses_label:      'ব্যবহার করে',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'sync জোড়া — async সাথে মেশানো যায় না',
    pair_async_note:  'async জোড়া — sync সাথে মেশানো যায় না',

    node_sync_group:  'sync',
    node_async_group: 'async',

    node_ar_s:   'ActiveRecord',
    node_aq_s:   'ActiveQuery',
    node_so_s:   'SetOperation',
    node_cte_s:  'CTEQuery',
    node_ar_a:   'AsyncActiveRecord',
    node_aq_a:   'AsyncActiveQuery',
    node_so_a:   'AsyncSetOperation',
    node_cte_a:  'AsyncCTEQuery',
    node_sb_s:   'StorageBackend',
    node_sqlite_s:'SQLiteBackend',
    node_sqlite_a:'AsyncSQLiteBackend',
    node_sb_a:   'AsyncStorageBackend',
    node_ext:    'MySQL · PostgreSQL · SQL Server',
    node_ext_a:  'AsyncMySQL · AsyncPostgreSQL · …',

    tip_ar_s:   'sync ActiveRecord। মডেল সংজ্ঞার জন্য এই ক্লাস ইনহেরিট করুন, <code>.save()</code>, <code>.query()</code> ইত্যাদি sync মেথড কল করুন।',
    tip_ar_a:   'async ActiveRecord। sync ভার্সনের সম্পূর্ণ মিরর, সব মেথড <code>async/await</code>, FastAPI / asyncio এর জন্য উপযুক্ত।',
    tip_aq_s:   'ActiveQuery (sync)। WHERE, ORDER BY, JOIN, পেজিনেশন কন্ডিশন চেইন বিল্ড করে, শেষে <code>.all()</code> / <code>.one()</code> দিয়ে এক্সিকিউট।',
    tip_aq_a:   'AsyncActiveQuery (async)। sync ভার্সনের সম্পূর্ণ সিমান্টিক্স, সব টার্মিনেটিং মেথড coroutine।',
    tip_so_s:   'SetOperation (sync)। একাধিক কোয়েরিকে UNION / INTERSECT / EXCEPT দিয়ে জোড়া দেয়, ইউনিফাইড টাইপ রেজাল্ট সেট রিটার্ন করে।',
    tip_so_a:   'AsyncSetOperation (async)। একই, async এক্সিকিউশন।',
    tip_cte_s:  'CTEQuery (sync)। WITH ক্লজ দিয়ে CTE (Common Table Expression) বিল্ড করে, রিকার্সিভ CTE সাপোর্ট ক��ে��',
    tip_cte_a:  'AsyncCTEQuery (async)। একই, async এক্সিকিউশন।',
    tip_sb_s:   'StorageBackend (sync)। I/O এর সর্বনিম্ন ইন্টারফেস সংজ্ঞায়িত করে: execute / fetch / transaction। ActiveRecord ছাড়া ব্যবহারযোগ্য।',
    tip_sb_a:   'AsyncStorageBackend (async)। sync ভার্সনের মিরর, সব I/O মেথড coroutine।',
    tip_sqlite:  'SQLite backend, কোর প্যাকেজে বিল্ট-ইন। জিরো কনফিগারেশন, ডেভেলপমেন্ট, টেস্ট, এম্বেডেড সিনারিওর জন্য উপযুক্ত।',
    tip_ext:    'এক্সটেনশন ব্যাকএন্ড প্যাকেজ (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver। চাহিদামতো pip install, <code>configure()</code> এক লাইনে সুইচ।',
    tip_ext_a:  'এক্সটেনশন ব্যাকএন্ড প্যাকেজ (async): sync প্যাকেজের সাথে এক-এক মিল, সম্পূর্ণ async/await সাপোর্ট।'
  },

  qt: {
    label: 'Quick Taste · ৩০ সেকেন্ড',
    title: 'ই��স্টল থেকে <em>প্রথম কোয়েরি</em>, ৩০ লাইনের বেশি নয়।',
    btn_backends: 'সম্পূর্ণ Backend ডকুমেন্টেশন →',
    btn_ar:       'ActiveRecord বিস্তারিত →',
    btn_practices:'ব্যবহারিক সিনারিও →'
  },

  compare: {
    label: 'তুলনা',
    title: 'অন্যান্য Python ORM-এর সাথে <em>তুলনা</em>।',
    col_feature: 'বৈশিষ্ট্য',
    row1:  'ডিজাইন প্যাটার্ন',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'ব্যাকএন্ড স্বাধীনভাবে ব্যবহারযোগ্য',
    row3:  'Session ধারণা নেই',
    row4:  'সামঞ্জস্যপূর্ণ sync / async API',
    row5:  'নেটিভ Pydantic ইন্টিগ্রেশন',
    row6:  'রানটাইম ডেটা যাচাইকরণ',
    row7:  'সম্পূর্ণ SQL এক্সপ্রেসিভনেস',
    row8:  'ক্ষমতা ঘোষণা প্রক্রিয়া',
    row9:  'SQL স্বচ্ছতা <code>.to_sql()</code>',
    row10: 'বাধ্যতামূলক মাইগ্রেশন টুল নেই',
    row11: 'ন্যূনতম নির্ভরতা',
    row12: 'স্পষ্ট সম্পর্ক সংজ্ঞা'
  },

  gallery: {
    label: 'কম্পোনেন্ট গ্যালারি · UI উপাদান',
    title: 'প্রতিটি থিমে <em>UI উপাদান</em> কেমন দেখায়।',
    c_buttons: 'বাটন', c_btngroup: 'বাটন গ্রুপ', c_form: 'ফর্ম কন্ট্রোল', c_radio: 'রেডিও গ্রুপ',
    c_multi: 'মাল্টি-সিলেক্ট তালিকা', c_dropdown: 'ড্রপডাউন', c_alerts: 'সতর্কতা',
    c_badges: 'ব্যাজ', c_progress: 'অগ্রগতি', c_grid: 'Grid ডেমো (১২ কলাম)',
    c_rtl: 'RTL প্রিভিউ', c_table: 'স্ট্রাইপড টেবিল',
    form_email: 'ইমেইল', form_note: 'নোট', form_preload: 'প্রিলোড', form_async: 'Async',
    radio_sync: 'Sync (সিঙ্ক মোড)', radio_async: 'Async (অ্যাসিঙ্ক মোড)', radio_both: 'উভয় (শেয়ার্ড মডেল)',
    alert_info: '<b>টিপ।</b> SQLite backend মূল প্যাকেজের সাথে আসে।',
    alert_success: '<b>প্রস্তুত।</b> <code>User.configure(...)</code> কল হয়েছে।',
    alert_warn: '<b>সতর্কতা।</b> উইন্ডো ফাংশনের জন্য SQLite ≥ 3.25 প্রয়োজন।',
    prog_coverage: 'টেস্ট কভারেজ', prog_backend: 'Backend সম্পূর্ণতা', prog_locale: 'ডকুমেন্ট লোকালাইজেশন',
    backend_note: 'উপরের কন্ট্রোল বারের একই কম্পোনেন্ট।',
    multi1_t: 'PostgreSQL', multi1_d: 'মূল প্রোডাকশন', multi2_t: 'MySQL', multi2_d: 'লেগেসি', multi3_t: 'SQLite', multi3_d: 'টেস্ট ও প্রোটোটাইপ'
  },

  album: {
    label: 'গ্যালারি · লাইব্রেরি',
    title: '<em>উদাহরণ</em> থেকে শিখুন।',
    a1: 'আপনার প্রথম মডেল', a2: 'FastAPI-তে async', a3: 'has_many গভীরে',
    a4: 'Backend লেখা', a5: 'স্বয়ংক্রিয় N+1 সনাক্তকরণ', a6: 'নেস্টেড ট্রানজাকশন &amp; savepoint'
  },

  voices: {
    label: 'মতামত · ব্যবহারকারীদের কথা',
    title: 'তারা <em>কী বলে</em>।',
    q1:      'rhosocial-activerecord-এর সাহায্যে অবশেষে ORM-এর সাথে লড়াই থেকে মুক্তি পেলাম। টাইপ অ্যানোটেশনই মডেল, ঠিক এটাই।',
    q1_role: 'Backend Engineer · কিয়োটো',
    q2:      'Sync ও async এক API শেয়ার করে, refactor প্রায় বিনামূল্যে। FastAPI মাইগ্রেশন দুই লাইনের।',
    q2_role: 'Staff Engineer · বার্লিন',
    q3:      'DuckDB backend নিজে লিখলাম। দুপুরে Backend ABC পড়লাম, বিকেলে প্রোডাকশন-এ। এটাই আসল extensibility।',
    q3_role: 'Data Platform · সিঙ্গাপুর',
    q4:      'চেইনের প্রতিটি ধাপে IDE-তে টাইপ ইনফারেন্স সঠিক। Pydantic সঠিক জায়গায় ব্যবহৃত।',
    q4_role: 'Senior Python · সাও পাওলো',
    q5:      'শূন্য runtime নির্ভরতাই মূল। embedded-এ SQLAlchemy-এর আকার নিয়ে আর ভাবতে হবে না।',
    q5_role: 'IoT ইঞ্জিনিয়ার · শেনজেন'
  },

  auth: {
    label: 'Auth · লগইন ডেমো',
    title: '<em>rhosocial</em>-এ লগইন।',
    welcome: 'ফিরে স্বাগতম', sub: 'আপনার rhosocial অ্যাকাউন্ট দিয়ে চালিয়ে যান।',
    email: 'ইমেইল', password: 'পাসওয়ার্ড', remember: 'আমাকে মনে রাখুন', forgot: 'পাসওয়ার্ড ভুলে গেছেন?',
    login: 'লগইন', or: 'অথবা', github: 'GitHub দিয়ে চালিয়ে যান', twitter: 'Twitter দিয়ে চালিয়ে যান',
    no_account: 'অ্যাকাউন্ট নেই?', register: 'নিবন্ধন'
  },

  stats: {
    label: 'সংখ্যায়',
    title: 'কিছু <em>সংখ্যা</em>।',
    s1: 'উপলব্ধ DB dialect',
    s2: 'টাইপ অ্যানোটেশন কভারেজ',
    s3: 'সর্বনিম্ন Python',
    s4: 'বাহ্যিক ORM নির্ভরতা',
    s5: 'ক্ষমতা ঘোষণা প্রক্রিয়া',
    s6: 'Backend MRO লেয়ার'
  },

  install: {
    label: 'শুরু করুন',
    title: 'এক লাইনে ইনস্টল, <em>দশ মিনিটে</em> শুরু।',
    sub: 'PyPI-তে প্রকাশিত। SQLite backend বিল্ট-ইন; বাকিগুলো চাহিদামতো ইনস্টল করুন।',
    docs: 'ডকুমেন্টেশন পড়ুন →'
  },

  split_sync: {
    label: 'পাশাপাশি',
    title: 'Sync = async, <em>একই শব্দার্থবিদ্যা</em>।',
    intro: '<code>for</code> কে <code>async for</code> দিয়ে প্রতিস্থাপন করুন — ব্যস। টাইপ ইনফারেন্স পুরো চেইনে অব্যাহত থাকে।',
    cta: 'async গাইড পড়ুন →'
  },

  split_backend: {
    label: 'Backend স্বাধীনতা',
    title: 'নিজস্ব <em>backend</em> এক বিকেলে।',
    intro: '<code>Backend</code> থেকে উত্তরাধিকার নিন, কয়েকটি dialect hook বাস্তবায়ন করুন। DuckDB ও libSQL ইতিমধ্যে প্রমাণিত।',
    cta: 'Backend ডেভেলপ���র গাইড →'
  },

  pricing: {
    label: 'প্ল্যান · উদাহরণ',
    title: 'আপনার <em>প্ল্যান</em> বেছে নিন।',
    intro: '(নমুনা কার্ড — OSS প্রজেক্ট নিজে চিরকাল বিনামূল্যে। pricing কম্পোনেন্ট প্রতিটি থিমে পরীক্ষা করতে দেখানো হয়েছে।)',
    badge: 'সবচেয়ে জনপ্রিয়',
    c1: {
      tier: 'Community', desc: 'ব্যক্তিগত ডেভেলপার এবং OSS কন্ট্রিবিউটরদের জন্য। সম্পূর্ণ ফাংশনালিটি, কোনো সীমাবদ্ধতা নেই।',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'সম্পূর্ণ sync &amp; async API', f3: 'কমিউনিটি ফোরাম সাপোর্ট',
      f4: 'টিম ড্যাশবোর্ড', f5: 'SLA প্রতিক্রিয়া গ্যারান্টি', cta: 'শুরু করুন'
    },
    c2: {
      tier: 'Team', desc: 'বর্ধমান টিম। Enterprise backend এবং audit।',
      f1: 'Community-এর সবকিছু', f2: 'MSSQL / Oracle backend', f3: 'Audit log &amp; পড়া/লেখা বিভাজন',
      f4: 'ব্যক্তিগত Discord প্রায়রিটি সাপোর্ট', f5: 'SSO / SAML', cta: '১৪ দিনের ট্রায়াল'
    },
    c3: {
      tier: 'Enterprise', desc: 'বড় প্রতিষ্ঠান। On-prem, compliance, প্রশিক্ষণ।',
      price_label: 'যোগাযোগ করুন',
      f1: 'Team-এর সবকিছু', f2: 'কাস্টম backend (DuckDB / libSQL / ইন-হাউস)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA ৪ ঘণ্টা', f5: 'অনসাইট প্রশিক্ষণ ও বিশেষ সমাধান', cta: 'সেলস-এ যোগাযোগ'
    }
  }

});