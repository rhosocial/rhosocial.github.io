/**
 * index/nl-nl.js — Homepage Netherlands Dutch dictionary
 *
 * Afhankelijkheid: assets/i18n/nl-nl.js moet eerst geladen worden.
 * Dit bestand breidt window.I18N['nl-nl'] uit via Object.assign met homepage-specifieke keys.
 */
window.I18N = window.I18N || {};
window.I18N['nl-nl'] = Object.assign(window.I18N['nl-nl'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord,<br><em>opnieuw ontworpen</em> voor Python.',
    sub: '<strong>rhosocial-activerecord</strong> definieert modellen met native Python type annotaties en bevraagt ze met <code>query().where(...).all()</code> chains. Sync en async inbegrepen. Geen externe ORM-afhankelijkheden — SQLite ingebouwd, andere databases als aparte pakketten, eigen backend in een paar dozijn regels.',
    cta_secondary: 'Functies bekijken →'
  },

  features: {
    label: 'Waarom · 6 Kernbeloftes',
    title: 'Waarom <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Type = veld', title: '<em>Type-veilig</em> vanaf constructie', desc: '<code>name: str</code> — opslag, validatie en IDE-autocomplete in één.' },
    f2: { num: '02 / Async first-class', title: 'Sync &amp; async, <em>één API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — identieke vorm.' },
    f3: { num: '03 / Inplugbare backends', title: '<em>Inplugbare backends</em>', desc: 'SQLite ingebouwd; Postgres/MySQL/MSSQL/Oracle als pakketten; of eigen.' },
    f4: { num: '04 / Expliciete relaties', title: '<em>Relaties</em> expliciet gemaakt', desc: 'has_many / belongs_to op model gedeclareerd; relaties zijn <code>QuerySet</code>s.' },
    f5: { num: '05 / Atomaire transacties', title: 'Transacties, <em>correct genest</em>', desc: 'Context manager + savepoints; exceptions triggeren rollback.' },
    f6: { num: '06 / Pythonic', title: 'Leest als <em>Engels</em>', desc: '<code>User.query().where(...).all()</code> — geen DSL, gewoon Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Type = veld</em>, van 3.8 naar 3.12.',
    intro: 'Python type annotaties zijn de modeldefinitie, geen extra DSL. Pydantic for runtimevalidatie, volledige type-inferentie in de IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, dezelfde semantiek.',
    intro: 'Sync en async delen dezelfde modeldefinitie. <code>for</code> → <code>async for</code>, de rest blijft hetzelfde.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Inplugbare backends</em>, kies wat je nodig hebt.',
    intro: 'Kernpakket hangt alleen van Pydantic af. SQLite ingebouwd, andere databases als pakketten, <code>configure()</code> één regel.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Expliciete relaties</em>, ClassVar + descriptor.',
    intro: 'Gebruik <code>ClassVar</code> voor relatievelden, vermijd Pydantic-scan. Automatisch vervangen door <code>relation()</code> op runtime.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Atomaire transacties</em>, geneste savepoints.',
    intro: 'Geneste transacties creëren automatisch SAVEPOINTs. Context manager commit of rollbackt; exceptions automatisch naar laatste savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Leest als Engels</em>, geen DSL.',
    intro: 'Chain calls, vloeiend lezen als Engels. <code>.to_sql()</code> toont gegenereerde SQL.'
  },

  practice: {
    label: 'In de praktijk · echte code',
    title: 'Van 3.8 naar 3.12, <em>stap voor stap</em>.',
    intro: 'Komt overeen met fixtures <code>models_py38.py</code> … <code>models_py312.py</code> in testsuite repo.',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> i.p.v. <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> i.p.v. <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: <code>Self</code> type (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> en PEP 695 generics <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Architectuur · Drie Lagen',
    title: '<em>Expression → Dialect → Backend</em>, duidelijke verantwoordelijkheden.',
    intro: 'Scheiding van query-logic, SQL-generatie en database-uitvoering. Protocollen (<code>@runtime_checkable</code>) declareren mogelijkheden op grenzen — niet-ondersteunde features gooien <code>UnsupportedFeatureError</code>, geen stille fout.',
    col1: {
      num: 'Expression Laag',
      title: '<em>Semantische collectie</em>, geen SQL-details',
      desc: '<code>BaseExpression.to_sql(dialect)</code> delegeert SQL-generatie naar doeldialect. Één expression-object herbruikbaar over alle dialecten, nul hardcoded SQL.'
    },
    col2: {
      num: 'Dialect Laag (33 Protocollen)',
      title: '<em>33 protocollen</em> declareren capability-grenzen',
      desc: '<code>format_*()</code> methoden genereren SQL voor target-database. Capability-detectieformule: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num: 'Backend Laag (12 Mixins)',
      title: '<em>12 Mixins</em> MRO-combinatie',
      desc: 'Template Method patroon: non-I/O logic in gedeelde Mixin, I/O logic apart. \\(n = 12\\) MRO-laagcombinatie, nul gedupliceerde code.'
    }
  },

  arch_comp: {
    label: 'Component Architectuur',
    title: 'ActiveRecord + Backend, <em>twee onafhankelijke lagen</em>.',
    intro: 'ActiveRecord is gebruiker van Backend; Backend kan onafhankelijk werken. Sync en async zijn gepaird, niet uitwisselbaar.',

    ar_badge: 'Application Laag',
    ar_title: 'ActiveRecord',
    ar_desc: 'Modeldefinitie, query-bouwen, relatiemanagement, transactie-afhandeling. Inclusief ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Onafhankelijke Laag',
    be_title: 'Backend',
    be_desc: 'Database I/O-laag; bruikbaar zonder ActiveRecord. SQLite ingebouwd, andere databases als uitbreidingspakketten.',

    uses_label: 'gebruikt',
    sync_async_note: 'sync ↔ sync · async ↔ async',
    pair_sync_note: 'Sync-paar — niet mixen met async',
    pair_async_note: 'Async-paar — niet mixen met sync',

    node_sync_group: 'sync',
    node_async_group: 'async',

    node_ar_s: 'ActiveRecord',
    node_aq_s: 'ActiveQuery',
    node_so_s: 'SetOperation',
    node_cte_s: 'CTEQuery',
    node_ar_a: 'AsyncActiveRecord',
    node_aq_a: 'AsyncActiveQuery',
    node_so_a: 'AsyncSetOperation',
    node_cte_a: 'AsyncCTEQuery',
    node_sb_s: 'StorageBackend',
    node_sqlite_s:'SQLiteBackend',
    node_sqlite_a:'AsyncSQLiteBackend',
    node_sb_a: 'AsyncStorageBackend',
    node_ext: 'MySQL · PG · Oracle · SS',
    node_ext_a: 'AsyncMySQL · AsyncPG · …',

    tip_ar_s: 'Sync ActiveRecord. Erf deze klasse om modellen te definiëren, roep sync-methoden zoals <code>.save()</code>, <code>.query()</code> aan.',
    tip_ar_a: 'Async ActiveRecord. API is spiegel van sync-versie, alle methoden zijn <code>async/await</code>, voor FastAPI / asyncio.',
    tip_aq_s: 'ActiveQuery (sync). Chain-bouw van WHERE, ORDER BY, JOIN, paginatie, eind met <code>.all()</code> / <code>.first()</code> om uit te voeren.',
    tip_aq_a: 'AsyncActiveQuery (async). Dezelfde semantiek als sync, alle terminal-methoden zijn coroutines.',
    tip_so_s: 'SetOperation (sync). Combineer multiple queries met UNION / INTERSECT / EXCEPT, return unified result set.',
    tip_so_a: 'AsyncSetOperation (async). Zelfde, async uitvoering.',
    tip_cte_s: 'CTEQuery (sync). Bouw CTE met WITH clauses, ondersteunt recursieve CTE.',
    tip_cte_a: 'AsyncCTEQuery (async). Zelfde, async uitvoering.',
    tip_sb_s: 'StorageBackend (sync). Definieert minimale I/O-interface: execute / fetch / transaction. Bruikbaar zonder ActiveRecord.',
    tip_sb_a: 'AsyncStorageBackend (async). Spiegel van sync-versie, alle I/O-methoden zijn coroutines.',
    tip_sqlite: 'SQLite backend — inbegrepen in kernpakket. Geen configuratie nodig; perfect voor ontwikkeling, testen en embedded.',
    tip_ext: 'Uitbreidings-backend-pakketten (sync): rhosocial-activerecord-mysql, -postgresql, -oracle, -sqlserver. Installeer wat je nodig hebt; schakel met <code>configure()</code>.',
    tip_ext_a: 'Uitbreidings-backend-pakketten (async): tegenhangers van sync-pakketten, met volledige async/await-ondersteuning.'
  },

  qt: {
    label: 'Quick Taste · 30 seconden',
    title: 'Van installatie naar <em>eerste query</em>, minder dan 30 regels.',
    btn_backends: 'Volledige backend docs →',
    btn_ar: 'ActiveRecord details →',
    btn_practices:'Practice-scenario\'s →'
  },

  compare: {
    label: 'Vergelijken',
    title: 'vs. andere <em>Python ORM</em>s.',
    col_feature: 'Feature',
    row1: 'Design pattern', row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2: 'Backend onafhankelijk bruikbaar',
    row3: 'Geen sessie-concept',
    row4: 'Consistente Sync / Async API',
    row5: 'Native Pydantic-integratie',
    row6: 'Runtime data-validatie',
    row7: 'Volledige SQL-expressiviteit',
    row8: 'Capability-declaratiemechanisme',
    row9: 'SQL-transparantie <code>.to_sql()</code>',
    row10: 'Geen verplichte migratietool',
    row11: 'Minimale afhankelijkheden',
    row12: 'Expliciete relatiedefinitie'
  },

  gallery: {
    label: 'Component Gallery · Primitives',
    title: 'Hoe elk thema <em>UI Primitives</em> afhandelt.',
    c_buttons: 'Buttons', c_btngroup: 'Button group', c_form: 'Form controls',
    c_radio: 'Radio group', c_multi: 'Multi-select list', c_dropdown: 'Dropdown',
    c_alerts: 'Alerts', c_badges: 'Badges', c_progress: 'Progress',
    c_grid: 'Grid demo (12 col)', c_rtl: 'RTL preview', c_table: 'Striped table',
    form_email: 'Email address', form_note: 'Notes',
    form_preload: 'Preload', form_async: 'Async',
    radio_sync: 'Sync (sync mode)', radio_async: 'Async (async mode)', radio_both: 'Both (shared models)',
    alert_info: '<b>Tip.</b> SQLite backend inbegrepen in kernpakket.',
    alert_success: '<b>Gereed.</b> <code>User.configure(...)</code> aangeroepen.',
    alert_warn: '<b>Waarschuwing.</b> SQLite ≥ 3.25 nodig voor window functions.',
    prog_coverage: 'Test coverage', prog_backend: 'Backend completion', prog_locale: 'Documentatie-localisatie',
    backend_note: 'Zelfde component als bovenste control bar.',
    multi1_t: 'PostgreSQL', multi1_d: 'Main production',
    multi2_t: 'MySQL',      multi2_d: 'Legacy services',
    multi3_t: 'SQLite',     multi3_d: 'Tests & Prototypes'
  },

  album: {
    label: 'Gallery · Bibliotheek',
    title: 'Leren van <em>voorbeelden</em>.',
    a1: 'Je eerste model', a2: 'Async in FastAPI', a3: 'has_many in depth',
    a4: 'Een backend schrijven', a5: 'Auto N+1 detectie', a6: 'Geneste transacties & savepoints'
  },

  voices: {
    label: 'Voices · Wat gebruikers zeggen',
    title: 'Wat ze <em>zeggen</em>.',
    q1: 'Met rhosocial-activerecord vecht ik eindelijk niet meer tegen de ORM. Type annotaties zijn het model — precies goed.',
    q1_role: 'Backend Engineer · Kyoto',
    q2: 'Sync en async delen één API, refactoren is bijna gratis. Mijn hele FastAPI-migratie was twee regels.',
    q2_role: 'Staff Engineer · Berlin',
    q3: 'Ik heb een DuckDB-backend geschreven. Backend ABC gelezen, \'s middags draaide het. Dat is echte extensibiliteit.',
    q3_role: 'Data Platform · Singapore',
    q4: 'Elke stap van de chain heeft correcte type-inferentie in mijn IDE. Pydantic\'s kracht precies op de juiste plek.',
    q4_role: 'Senior Python · São Paulo',
    q5: 'Zero runtime dependencies is de sleutel. In embedded deployments maken we ons geen zorgen meer over SQLAlchemy\'s omvang.',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  auth: {
    label: 'Auth · logindemo',
    title: 'Inloggen bij <em>rhosocial</em>.',
    welcome: 'Welkom terug', sub: 'Ga door met je rhosocial-account.',
    email: 'Email', password: 'Wachtwoord', remember: 'Ingelogd blijven', forgot: 'Wachtwoord vergeten?',
    login: 'Inloggen', or: 'OF', github: 'Doorgaan met GitHub', twitter: 'Doorgaan met Twitter',
    no_account: 'Nog geen account?', register: 'Registreren'
  },

  stats: {
    label: 'In cijfers',
    title: 'Een paar <em>cijfers</em>.',
    s1: 'Beschikbare DB-dialecten',
    s2: 'Type-annotatie dekking',
    s3: 'Minimale Python-versie',
    s4: 'Externe ORM-afhankelijkheden'
  },

  install: {
    label: 'Aan de slag',
    title: 'Één regel installeren, <em>tien minuten</em> naar eerste query.',
    sub: 'Gepubliceerd op PyPI. SQLite backend inbegrepen in kernpakket; andere backends op aanvraag installeren.',
    docs: 'Docs lezen →'
  },

  split_sync: {
    label: 'Side by side',
    title: 'Sync = async, <em>dezelfde semantiek</em>.',
    intro: 'Vervang <code>for</code> door <code>async for</code> — klaar. Type-inferentie blijft behouden door de hele chain.',
    cta: 'Async guide lezen →'
  },

  split_backend: {
    label: 'Backend vrijheid',
    title: 'Schrijf je eigen <em>backend</em> in een middag.',
    intro: 'Erf van <code>Backend</code>, implementeer een paar dialect hooks. DuckDB en libSQL zijn al bewezen.',
    cta: 'Backend dev guide →'
  },

  pricing: {
    label: 'Plans · illustratief',
    title: 'Kies je <em>niveau</em>.',
    intro: '(Voorbeeldkaarten — OSS-project zelf gratis voor altijd. Getoond om pricing cards te previewen in elk thema.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: 'Voor individuele devs en OSS-bijdragers. Volledige functionaliteit, geen limieten.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'Volledige Sync & Async API', f3: 'Community-forumondersteuning',
      f4: 'Team-collaboratie dashboard', f5: 'SLA-responsgarantie', cta: 'Aan de slag'
    },
    c2: {
      tier: 'Team',       desc: 'Groeiende teams. Enterprise backends plus audit.',
      f1: 'Alles van Community', f2: 'MSSQL / Oracle Backends', f3: 'Audit log & read/write split',
      f4: 'Prioriteit Discord', f5: 'SSO / SAML', cta: '14 dagen trial'
    },
    c3: {
      tier: 'Enterprise', desc: 'Grote organisaties. On-prem, compliance, training.', price_label: 'Contact',
      f1: 'Alles van Team', f2: 'Custom backends (DuckDB / libSQL / intern)', f3: 'SSO / SAML / LDAP',
      f4: '4-uur SLA', f5: 'Onsite training en dedicated oplossingen', cta: 'Contact sales'
    }
  }

});