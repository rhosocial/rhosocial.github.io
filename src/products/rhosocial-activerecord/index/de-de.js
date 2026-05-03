/**
 * index/de-de.js — 首页德语词典
 *
 * 依赖：assets/i18n/de-de.js 必须先加载。
 * 本文件通过 Object.assign 向已有的 window.I18N['de-de'] 追加首页特有 key。
 */
window.I18N = window.I18N || {};
window.I18N['de-de'] = Object.assign(window.I18N['de-de'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title:   'rhosocial ActiveRecord,<br>für Python <em>neu gedacht</em>.',
    sub:     '<strong>rhosocial-activerecord</strong> definiert Modelle über native Python-Typannotationen und fragt sie per Kette <code>query().where(...).all()</code> ab. Sync und Async gehören ab Werk dazu. Keine externen ORM-Abhängigkeiten — SQLite ist integriert, andere Datenbanken als separate Pakete, und ein eigenes Backend schreibt man in wenigen Dutzend Zeilen.',
    cta_secondary: 'Funktionen ansehen →'
  },

  features: {
    label: 'Warum · sechs Kernversprechen',
    title: 'Warum <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Typ = Feld',          title: 'Von Natur aus <em>typsicher</em>',                desc: 'Ein Feld ist schlicht <code>name: str</code> — Speicherung, Validierung und IDE-Ergänzung in einem.' },
    f2: { num: '02 / Async erstklassig',   title: 'Sync &amp; Async, <em>eine API</em>',             desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code>, identische Form.' },
    f3: { num: '03 / Austauschbare Backends', title: 'Einsteckbare <em>Backends</em>',               desc: 'SQLite integriert; Postgres/MySQL/MSSQL/Oracle als eigenständige Pakete; oder eigenes schreiben.' },
    f4: { num: '04 / Explizite Relationen', title: '<em>Relationen</em> explizit gemacht',           desc: 'has_many / belongs_to am Modell deklariert; Relationen sind selbst <code>QuerySet</code>s.' },
    f5: { num: '05 / Atomare Transaktionen', title: 'Transaktionen, <em>sauber verschachtelt</em>',  desc: 'Context-Manager plus Savepoints; Ausnahmen führen zum Rollback.' },
    f6: { num: '06 / Pythonisch',          title: 'Liest sich wie <em>Englisch</em>',                desc: '<code>User.query().where(...).all()</code> — keine DSL, nur Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Typ = Feld</em>, von 3.8 bis 3.12.',
    intro: 'Python-Typannotationen sind die Modelldefinition, kein zusätzliches DSL. Pydantic-Laufzeitvalidierung, komplette Typinferenz in der IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, gleiche Semantik.',
    intro: 'Sync und async teilen sich dieselbe Modelldefinition. <code>for</code> → <code>async for</code>, der Rest bleibt gleich.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Austauschbare Backends</em>, nach Bedarf.',
    intro: 'Kernpaket nur von Pydantic abhängig. SQLite integriert, andere Datenbanken als separate Pakete, <code>configure()</code> eine Zeile.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Explizite Relationen</em>, ClassVar + Deskriptor.',
    intro: 'Verwende <code>ClassVar</code> für Relationsfelder, um Pydantic-Scanning zu vermeiden. Laufzeit-Automatik ersetzt zu <code>relation()</code>.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Atomare Transaktionen</em>, verschachtelte Savepoints.',
    intro: 'Verschachtelte Transaktionen erstellen automatisch SAVEPOINT. Context-Manager automatisch Commit/Rollback, Ausnahmen automatisch zum letzten Savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Liest sich wie Englisch</em>, ohne DSL.',
    intro: 'Kettenaufrufe, flüssiges Lesen wie Englisch. <code>.to_sql()</code> zeigt das generierte SQL.'
  },

  practice: {
    label: 'In der Praxis · echter Code',
    title: 'Von 3.8 bis 3.12, <em>Schritt für Schritt</em>.',
    intro: 'Entspricht den Fixtures <code>models_py38.py</code> … <code>models_py312.py</code> im testsuite-Repo.',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> statt <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> statt <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: der <code>Self</code>-Typ (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> und PEP-695-Generics <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Architecture · drei Schichten',
    title: '<em>Expression → Dialect → Backend</em>, klare Verantwortlichkeiten.',
    intro: 'Trennung von Query-Logik, SQL-Generierung und Datenbank-Ausführung. Protokolle (<code>@runtime_checkable</code>) deklarieren Fähigkeiten an Grenzen — nicht unterstützte Features werfen <code>UnsupportedFeatureError</code>, kein stiller Fehler.',
    col1: {
      num:   'Expression-Schicht',
      title: '<em>Semantik-Sammlung</em>, ohne SQL-Details',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> delegiert SQL-Generierung an Zieldialekt. Ein Expression-Objekt wiederverwendbar über alle Dialekte, Null Hardcoded-SQL.'
    },
    col2: {
      num:   'Dialect-Schicht (33 Protokolle)',
      title: '<em>33 Protokolle</em> deklarieren Fähigkeitsgrenzen',
      desc:  '<code>format_*()</code> Methoden generieren SQL für Zieldatenbank. Fähigkeitserkennungsformel: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Backend-Schicht (12 Mixins)',
      title: '<em>12 Mixins</em> MRO-Kombination',
      desc:  'Template-Method-Muster: Non-I/O-Logik in shared Mixin, I/O-Logik separat. \\(n = 12\\) MRO-Schichtkombination, Null Code-Wiederholung.'
    }
  },

  arch_comp: {
    label: 'Komponenten-Architektur',
    title: 'ActiveRecord + Backend, <em>zwei unabhängige Schichten</em>.',
    intro: 'ActiveRecord ist Nutzer von Backend; Backend kann eigenständig arbeiten. Sync und async sind gepaart, nicht austauschbar.',

    ar_badge: 'Anwendungsschicht',
    ar_title: 'ActiveRecord',
    ar_desc:  'Modelldefinition, Query-Bau, Relationsmanagement, Transaktionshandling. Enthält ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Unabhängige Schicht',
    be_title: 'Backend',
    be_desc:  'Datenbank-I/O-Schicht, nutzbar ohne ActiveRecord. SQLite integriert, andere Datenbanken als Erweiterungspakete.',

    uses_label:      'verwendet',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'Sync-Paar — nicht mit async mischen',
    pair_async_note:  'Async-Paar — nicht mit sync mischen',

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
    node_ext:    'MySQL · PG · Oracle · SS',
    node_ext_a:  'AsyncMySQL · AsyncPG · …',

    tip_ar_s:   'Sync ActiveRecord. Erbe diese Klasse, um Modelle zu definieren, rufe Sync-Methoden wie <code>.save()</code>, <code>.query()</code> auf.',
    tip_ar_a:   'Async ActiveRecord. API ist Spiegelbild der Sync-Version, alle Methoden sind <code>async/await</code>, für FastAPI/asyncio.',
    tip_aq_s:   'ActiveQuery (sync). Kettenbau von WHERE, ORDER BY, JOIN, Paginiierung, Ende <code>.all()</code> / <code>.first()</code> zum Ausführen.',
    tip_aq_a:   'AsyncActiveQuery (async). Gleiche Semantik wie Sync, alle Terminierungsmethoden sind Coroutines.',
    tip_so_s:   'SetOperation (sync). Kombiniert mehrere Queries mit UNION / INTERSECT / EXCEPT, gibt vereinheitlichte Ergebnismenge zurück.',
    tip_so_a:   'AsyncSetOperation (async). Dasselbe, asynchrone Ausführung.',
    tip_cte_s:  'CTEQuery (sync). Baut CTE mit WITH-Klausel, unterstützt rekursive CTE.',
    tip_cte_a:  'AsyncCTEQuery (async). Dasselbe, asynchrone Ausführung.',
    tip_sb_s:   'StorageBackend (sync). Definiert minimales I/O-Interface: execute / fetch / transaction. Nutzbar ohne ActiveRecord.',
    tip_sb_a:   'AsyncStorageBackend (async). Spiegelbild der Sync-Version, alle I/O-Methoden sind Coroutines.',
    tip_sqlite:  'SQLite-Backend, im Kernpaket enthalten. Null Konfiguration, geeignet für Entwicklung, Tests und Embedded.',
    tip_ext:    'Erweiterungs-Backend-Pakete (sync): rhosocial-activerecord-mysql, -postgresql, -oracle, -sqlserver. Nach Bedarf pip installieren, <code>configure()</code> eine Zeile.',
    tip_ext_a:  'Erweiterungs-Backend-Pakete (async): entsprechen Sync-Paketen, bieten volle async/await-Unterstützung.'
  },

  qt: {
    label: 'Quick Taste · 30 Sekunden',
    title: 'Von Installation zum <em>ersten Query</em>, bis 30 Zeilen.',
    btn_backends: 'Vollständige Backend-Dokumentation →',
    btn_ar:       'ActiveRecord-Details →',
    btn_practices:'Praxis-Szenarien →'
  },

  compare: {
    label: 'Vergleich',
    title: 'Vergleich mit anderen <em>Python ORM</em>.',
    col_feature: 'Merkmal',
    row1:  'Entwurfsmuster',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend unabhängig nutzbar',
    row3:  'Kein Session-Konzept',
    row4:  'Konsistente Sync-/Async-API',
    row5:  'Native Pydantic-Integration',
    row6:  'Laufzeitdatenvalidierung',
    row7:  'Volle SQL-Ausdrucksfähigkeit',
    row8:  'Capability-Deklaration',
    row9:  'SQL-Transparenz <code>.to_sql()</code>',
    row10: 'Kein erzwungenes Migrations-Tool',
    row11: 'Minimale Abhängigkeiten',
    row12: 'Explizite Relationsdefinition'
  },

  gallery: {
    label: 'Component Gallery · Primitive',
    title: 'Wie jedes Design mit <em>UI-Primitiven</em> umgeht.',
    c_buttons: 'Buttons', c_btngroup: 'Button-Gruppe', c_form: 'Formularelemente',
    c_radio: 'Radio-Gruppe', c_multi: 'Mehrfachauswahl', c_dropdown: 'Dropdown',
    c_alerts: 'Hinweise', c_badges: 'Badges', c_progress: 'Fortschritt',
    c_grid: 'Raster-Demo (12-Spalten)', c_rtl: 'RTL-Vorschau', c_table: 'Gestreifte Tabelle',
    form_email: 'E-Mail-Adresse', form_note: 'Anmerkungen',
    form_preload: 'Vorladen', form_async: 'Async',
    radio_sync: 'Sync (synchroner Modus)', radio_async: 'Async (asynchroner Modus)', radio_both: 'Beide (geteilte Modelle)',
    alert_info:    '<b>Hinweis.</b> Das SQLite-Backend ist im Kernpaket enthalten.',
    alert_success: '<b>Bereit.</b> <code>User.configure(...)</code> wurde aufgerufen.',
    alert_warn:    '<b>Achtung.</b> Für Fensterfunktionen ist SQLite ≥ 3.25 erforderlich.',
    prog_coverage: 'Testabdeckung', prog_backend: 'Backend-Fortschritt', prog_locale: 'Dokumentations-Lokalisierung',
    backend_note:  'Dieselbe Komponente wie in der oberen Steuerleiste.',
    multi1_t: 'PostgreSQL', multi1_d: 'Hauptproduktion',
    multi2_t: 'MySQL',      multi2_d: 'Altsysteme',
    multi3_t: 'SQLite',     multi3_d: 'Tests &amp; Prototypen'
  },

  album: {
    label: 'Galerie · Bibliothek',
    title: 'Von <em>Beispielen</em> lernen.',
    a1: 'Dein erstes Modell', a2: 'Async in FastAPI', a3: 'has_many im Detail',
    a4: 'Eigenes Backend schreiben', a5: 'N+1-Autoerkennung', a6: 'Verschachtelte Transaktionen &amp; Savepoints'
  },

  voices: {
    label: 'Stimmen · Referenzen',
    title: 'Was sie <em>sagen</em>.',
    q1:      'Mit rhosocial-activerecord kämpfe ich endlich nicht mehr gegen ein ORM. Typannotationen sind das Modell — genau richtig.',
    q1_role: 'Backend Engineer · Kyoto',
    q2:      'Sync und Async teilen sich eine API, Refactoring kostet nichts. Die FastAPI-Migration waren zwei Zeilen.',
    q2_role: 'Staff Engineer · Berlin',
    q3:      'Ich habe ein DuckDB-Backend geschrieben. Backend-ABC gelesen, am Nachmittag lief es. Echte Erweiterbarkeit.',
    q3_role: 'Data Platform · Singapur',
    q4:      'Jeder Schritt der Kette wird in der IDE korrekt inferiert. Pydantic, am richtigen Ort eingesetzt.',
    q4_role: 'Senior Python · São Paulo',
    q5:      'Null Runtime-Dependencies sind der Schlüssel. Für Embedded-Deployments müssen wir uns um SQLAlchemys Größe nicht mehr sorgen.',
    q5_role: 'IoT-Ingenieur · Shenzhen'
  },

  auth: {
    label: 'Auth · Anmelde-Demo',
    title: 'Bei <em>rhosocial</em> anmelden.',
    welcome: 'Willkommen zurück', sub: 'Fahre mit deinem rhosocial-Konto fort.',
    email: 'E-Mail', password: 'Passwort', remember: 'Angemeldet bleiben', forgot: 'Passwort vergessen?',
    login: 'Anmelden', or: 'ODER', github: 'Mit GitHub fortfahren', twitter: 'Mit Twitter fortfahren',
    no_account: 'Noch kein Konto?', register: 'Registrieren'
  },

  stats: {
    label: 'In Zahlen',
    title: 'Ein paar <em>Zahlen</em>.',
    s1: 'Verfügbare DB-Dialekte',
    s2: 'Typannotations-Abdeckung',
    s3: 'Minimales Python',
    s4: 'Externe ORM-Deps'
  },

  install: {
    label: 'Loslegen',
    title: 'Eine Zeile installieren, <em>zehn Minuten</em> zur ersten Query.',
    sub: 'Auf PyPI veröffentlicht. Das SQLite-Backend kommt mit dem Kernpaket; weitere Backends nach Bedarf.',
    docs: 'Dokumentation lesen →'
  },

  split_sync: {
    label: 'Side by side',
    title: 'Sync = async, <em>gleiche Form</em>.',
    intro: '<code>for</code> gegen <code>async for</code> tauschen, fertig. Typinferenz läuft die Kette bis zum Ende durch.',
    cta: 'Async-Leitfaden lesen →'
  },

  split_backend: {
    label: 'Backend-Freiheit',
    title: 'Schreib dein eigenes <em>Backend</em> in wenigen Zeilen.',
    intro: '<code>Backend</code> erben, ein paar Dialekt-Hooks implementieren, fertig. DuckDB und libSQL sind bereits erprobt.',
    cta: 'Backend-Entwicklerleitfaden →'
  },

  pricing: {
    label: 'Pläne · beispielhaft',
    title: 'Wähle deine <em>Stufe</em>.',
    intro: '(Beispielkarten — das OSS-Projekt selbst bleibt für immer kostenlos. Gezeigt, damit Pricing-Karten in jedem Design geprüft werden können.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: 'Einzelentwickler und OSS-Beitragende. Voller Funktionsumfang, keine Limits.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'Vollständige Sync- &amp; Async-API', f3: 'Community-Forum-Support',
      f4: 'Team-Kollaborations-Dashboard', f5: 'SLA-Antwortgarantie', cta: 'Loslegen'
    },
    c2: {
      tier: 'Team',       desc: 'Wachsende Teams. Enterprise-Backends mit Audit.',
      f1: 'Alles aus Community', f2: 'MSSQL / Oracle Backends', f3: 'Audit-Log &amp; Read-Write-Splitting',
      f4: 'Privater Discord mit Vorrang', f5: 'SSO / SAML', cta: '14 Tage testen'
    },
    c3: {
      tier: 'Enterprise', desc: 'Großorganisationen. On-Prem, Compliance, Schulungen.', price_label: 'Kontakt',
      f1: 'Alles aus Team', f2: 'Eigene Backends (DuckDB / libSQL / intern)', f3: 'SSO / SAML / LDAP',
      f4: '4-Stunden-SLA', f5: 'Vor-Ort-Schulungen und dedizierte Lösungen', cta: 'Vertrieb kontaktieren'
    }
  }

});