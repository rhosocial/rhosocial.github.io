/**
 * index/uk-ua.js — Сторінка рівня української мови (тільки контент, специфічний для головної сторінки)
 *
 * Залежність: assets/i18n/uk-ua.js повинен бути завантажений першим (надає meta/brand/nav/control/footer/common)
 * Цей файл використовує Object.assign для додавання ключів сторінки до window.I18N['uk-ua']
 */
window.I18N = window.I18N || {};
window.I18N['uk-ua'] = Object.assign(window.I18N['uk-ua'] || {}, {

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    eyebrow:       'v1.0 · Apache 2.0 · Pure Python',
    title:         'rhosocial ActiveRecord,<br><em>перероблений</em> для Python.',
    sub:           '<strong>rhosocial-activerecord</strong> визначає моделі за допомогою нативних анотацій типів Python та опитує їх ланцюжком <code>query().where(...).all()</code>. Синхронно та асинхронно з першого дня. Без зовнішніх ORM-залежностей — SQLite вбудовано, інші бази даних — окремими пакетами, власний backend — за кілька десятків рядків.',
    cta_secondary: 'Переглянути можливості →'
  },

  /* ── 6-Feature картки ───────────────────────────────────── */
  features: {
    label: 'Чому · 6 обіцянок',
    title: 'Чому <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Тип = поле', title: '<em>Типобезпека</em> від самого початку', desc: '<code>name: str</code> — це збереження, валідація та підказки IDE в одному.' },
    f2: { num: '02 / Async першого класу', title: 'Sync &amp; async, <em>один API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — однакова форма.' },
    f3: { num: '03 / Замінні backend\'и', title: 'Замінні <em>backend\'и</em>', desc: 'SQLite вбудовано; Postgres/MySQL/MSSQL/Oracle — окремими пакетами; або власний.' },
    f4: { num: '04 / Явні зв\'язки', title: '<em>Зв\'язки</em> оголошені явно', desc: 'has_many / belongs_to оголошуються на моделі; самі зв\'язки — це <code>QuerySet</code>.' },
    f5: { num: '05 / Атомарні транзакції', title: 'Транзакції, <em>правильно вкладені</em>', desc: 'Контекстний менеджер + savepoint; винятки викликають чистий rollback.' },
    f6: { num: '06 / Pythonic', title: 'Читається як <em>англійська</em>', desc: '<code>User.query().where(...).all()</code> — жодного DSL, просто Python.' }
  },

  /* ── Feature детальна секція ─────────────────────────────── */
  f1: {
    label: '01 / Type-safe',
    title: '<em>Тип = Поле</em>, від 3.8 до 3.12.',
    intro: 'Python анотації типів — це визначення моделі. Не потрібен додатковий DSL. Pydantic runtime validation, повний type inference в IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = Async</em>, семантика однакова.',
    intro: 'Sync/Async використовують спільне визначення моделі. <code>for</code> → <code>async for</code>, інший код не змінюється.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backend\'и замінні</em>, обирайте за потребою.',
    intro: 'Основний пакет залежить лише від Pydantic. SQLite вбудовано; інші бази даних — окремі пакети, <code>configure()</code> — перемикання.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Зв\'язки явні</em>, ClassVar + дескриптор.',
    intro: 'Використовуйте <code>ClassVar</code> для оголошення полів зв\'язків, уникайте сканування Pydantic. На runtime автоматично замінюється на <code>relation()</code>.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Атомарні транзакції</em>, вкладені savepoint.',
    intro: 'Вкладені транзакції автоматично створюють SAVEPOINT. Контекстний менеджер автоматично комітить/ролбечить, винятки автоматично повертають до останньої точки.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Читається як англійська</em>, DSL не потрібен.',
    intro: 'Ланцюжкові виклики читаються плавно як англійська. Дивіться реальний SQL через <code>.to_sql()</code>.'
  },

  /* ── Architecture · три шари (Expression → Dialect → Backend) ── */
  arch: {
    label: 'Architecture · три шари',
    title: '<em>Expression → Dialect → Backend</em>, чіткий поділ обов\'язків.',
    intro: 'Логіка запиту, генерація SQL, виконання в базі даних розділені на три шари. Протоколи (<code>@runtime_checkable</code>) оголошують можливості на межах — якщо backend не підтримує — викидається <code>UnsupportedFeatureError</code>, а не мовчки fails.',
    col1: {
      num:   'Шар Expression',
      title: '<em>Збір семантики</em>, без деталей SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> делегує генерацію SQL діалекту. Той самий об\'єкт expression можна використовувати в усіх діалектах, нуль SQL hardcode.'
    },
    col2: {
      num:   'Шар Dialect (33 протоколи)',
      title: '<em>33 протоколи</em> оголошують межі можливостей',
      desc:  '<code>format_*()</code> методи генерують SQL для цільової БД. Формула перевірки можливостей: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Шар Backend (12 Mixin)',
      title: '<em>12 Mixin</em> комбінація MRO',
      desc:  'Template Method pattern: логіка не-I/O в Mixin спільна, I/O реалізовано окремо. \\(n = 12\\) шарів MRO, нуль дублювання коду.'
    }
  },

  /* ── Component Architecture · ActiveRecord + Backend два шари ── */
  arch_comp: {
    label: 'Компонентна архітектура',
    title: 'ActiveRecord + Backend, <em>два незалежні шари</em>.',
    intro: 'ActiveRecord — користувач Backend; Backend може працювати незалежно. Синхронний і асинхронний пари відповідають один одному, не змішуються.',

    ar_badge: 'Шар застосування',
    ar_title: 'ActiveRecord',
    ar_desc:  'Визначення моделі, побудова запитів, управління зв\'язками, обробка транзакцій. Включає ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Незалежний шар',
    be_title: 'Backend',
    be_desc:  'Шар I/O бази даних, може використовуватися без ActiveRecord. SQLite вбудовано, інші бази даних — окремі пакети.',

    uses_label:      'Викликає',
    sync_async_note:  'Sync ↔ Sync · Async ↔ Async',
    pair_sync_note:   'Пара sync, не можна змішувати з async',
    pair_async_note:  'Пара async, не можна змішувати з sync',

    note1_title: 'Незалежні',
    note1_desc:  'Backend відкриває чіткі ABC (Abstract Base Class), може використовуватися без ActiveRecord, підходить для легких скриптів або embedded.',
    note2_title: 'Розширювані за потреби',
    note2_desc:  'SQLite йде з основним пакетом; MySQL MariaDB PostgreSQL Oracle SQL Server — окремі пакети, встановлюються за потреби.',
    note3_title: 'Type-safe пари',
    note3_desc:  '<code>ActiveRecord</code> парує з <code>StorageBackend</code>; <code>AsyncActiveRecord</code> парує з <code>AsyncStorageBackend</code>. Перехресне використання викликає помилку типу.',

    node_sync_group:  'Синхронний',
    node_async_group: 'Асинхронний',
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
    node_ext:    'MySQL · PG · Oracle · SS',
    node_ext_a:  'AsyncMySQL · AsyncPG · …',

    tip_ar_s:   'Синхронний ActiveRecord. Успадкуйте цей клас для визначення моделі, викликайте синхронні методи <code>.save()</code>, <code>.query()</code> тощо для роботи з БД.',
    tip_ar_a:   'Асинхронний ActiveRecord. API — повне дзеркало синхронної версії, усі методи <code>async/await</code>, підходить для FastAPI / asyncio.',
    tip_aq_s:   'ActiveQuery (синхронний). Будує ланцюжком WHERE, ORDER BY, JOIN, пагінацію тощо, наприкінці викликає <code>.all()</code> / <code>.first()</code> для виконання.',
    tip_aq_a:   'AsyncActiveQuery (асинхронний). Семантика така ж, як у синхронної версії, усі термінальні методи — корутини.',
    tip_so_s:   'SetOperation (синхронний). Об\'єднує кілька запитів через UNION / INTERSECT / EXCEPT, повертає результат одного типу.',
    tip_so_a:   'AsyncSetOperation (асинхронний). Те саме, асинхронне виконання.',
    tip_cte_s:  'CTEQuery (синхронний). Створює CTE через WITH clause, підтримує рекурсивні CTE.',
    tip_cte_a:  'AsyncCTEQuery (асинхронний). Те саме, асинхронне виконання.',
    tip_sb_s:   'StorageBackend абстрактний базовий клас (синхронний). Визначає мінімальний інтерфейс I/O БД: execute / fetch / transaction. Може використовуватися без ActiveRecord.',
    tip_sb_a:   'AsyncStorageBackend абстрактний базовий клас (асинхронний). Інтерфейс — дзеркало синхронної версії, усі I/O методи — корутини.',
    tip_sqlite:  'SQLite backend, йде з основним пакетом. Готовий до використання з нульовою конфігурацією, підходить для dev/test/embedded.',
    tip_ext:    'Backend пакети (синхронні): rhosocial-activerecord-mysql, -postgresql, -oracle, -sqlserver. Встановлюйте за потреби через pip, <code>configure()</code> — перемикання.',
    tip_ext_a:  'Backend пакети (асинхронні): точна відповідність синхронним пакетам, повна підтримка async/await.'
  },

  /* ── Quick Taste ─────────────────────────────────────────── */
  qt: {
    label:        'Quick Taste · 30 секунд',
    title:        'Від встановлення до <em>першого запиту</em> — не більше 30 рядків',
    btn_backends: 'Повна документація backend →',
    btn_ar:       'Деталі ActiveRecord →',
    btn_practices:'Практичні сценарії →'
  },

  /* ── Compare ─────────────────────────────────────────────── */
  compare: {
    label:       'Порівняти',
    title:       'Порівняння з іншими Python <em>ORM</em>.',
    col_feature: 'Характеристика',
    row1:  'Патерн проєктування',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend використовується окремо',
    row3:  'Без концепції сесії',
    row4:  'Узгоджене sync / async API',
    row5:  'Нативна інтеграція з Pydantic',
    row6:  'Валідація даних під час виконання',
    row7:  'Повна виразність SQL',
    row8:  'Механізм оголошення можливостей',
    row9:  'Прозорість SQL <code>.to_sql()</code>',
    row10: 'Без обов\'язкового інструменту міграції',
    row11: 'Мінімальні залежності',
    row12: 'Явне визначення зв\'язків'
  },

  /* ── Voices ──────────────────────────────────────────────── */
  voices: {
    label: 'Голоси · відгуки', title: 'Що <em>кажуть</em>.',
    q1:      'З rhosocial-activerecord я нарешті перестав боротися з ORM. Анотації типів — це модель, саме так.',
    q1_role: 'Backend Engineer · Кіото',
    q2:      'Sync та async мають один API, рефактор майже безкоштовний. Міграція на FastAPI — два рядки.',
    q2_role: 'Staff Engineer · Берлін',
    q3:      'Я написав DuckDB backend. Прочитав Backend ABC за обідом, після обіду вже на продакшені. Це справжня розширюваність.',
    q3_role: 'Data Platform · Сінгапур',
    q4:      'Кожен крок ланцюжка має коректне виведення типів в IDE. Pydantic використаний там, де потрібно.',
    q4_role: 'Senior Python · Сан-Паулу',
    q5:      'Нуль runtime-залежностей — це ключ. В embedded більше не страждаємо від розміру SQLAlchemy.',
    q5_role: 'IoT-інженер · Шеньчжень'
  },

  /* ── Stats ───────────────────────────────────────────────── */
  stats: {
    label: 'By the numbers',
    title: 'Кілька <em>цифр</em>.',
    s1: 'Доступні діалекти БД',
    s2: 'Покриття анотаціями типів',
    s3: 'Мінімальний Python',
    s4: 'Зовнішні ORM-залежності'
  },

  /* ── Install ─────────────────────────────────────────────── */
  install: {
    label:     'Почніть',
    title:     'Встановлення одним рядком, <em>десять хвилин</em> до першого запиту.',
    sub:       'Опубліковано на PyPI. Backend SQLite вбудовано; інші встановлюєте за потреби.',
    docs:      'Читати документацію →',
    practices: 'Практичні сценарії →'
  }

});