/**
 * index/it-it.js — Homepage page-level Italian dictionary (index-specific content only)
 *
 * Dependency: assets/i18n/it-it.js must be loaded first (provides meta/brand/nav/control/footer/common).
 * This file extends window.I18N['it-it'] via Object.assign, adding homepage-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['it-it'] = Object.assign(window.I18N['it-it'] || {}, {

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    eyebrow:       'v1.0 · Apache 2.0 · Pure Python',
    title:         'rhosocial ActiveRecord,<br><em>ridisegnato</em> per Python.',
    sub:           '<strong>rhosocial-activerecord</strong> definisce i modelli con annotazioni di tipo Python native.',
    cta_secondary: 'Esplora funzionalità →'
  },

  /* ── 6-Feature cards ─────────────────────────────────── */
  features: {
    label: 'Why · Sei promesse fondamentali',
    title: 'Perché <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Type-safe',         title: '<em>Type-safe</em> by construction',       desc: 'I campi sono <code>name: str</code> — archiviazione, validazione e completamento IDE unificati.' },
    f2: { num: '02 / Async First',        title: 'Sync &amp; async, <em>una API</em>',       desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> condividono la stessa semantica.' },
    f3: { num: '03 / Pluggable',          title: '<em>Backends</em> pluggabili',              desc: 'SQLite integrato; Postgres/MySQL/SQLServer/Oracle come pacchetti separati; scrivi il tuo.' },
    f4: { num: '04 / Explicit Relations', title: '<em>Relations</em> esplicite',         desc: '<code>ClassVar</code> + protocollo descriptor, sostituite automaticamente a runtime.' },
    f5: { num: '05 / Transactions',       title: 'Transactions, <em>properly nested</em>',   desc: 'Context manager + savepoints; leeccezioni attivano rollback automatico.' },
    f6: { num: '06 / Pythonic',           title: 'Si legge come <em>Inglese</em>',              desc: '<code>User.query().where(...).all()</code> — solo Python.' }
  },

  /* ── Feature detail sections ─────────────────────────── */
  f1: {
    label: '01 / Type-safe',
    title: '<em>I tipi sono campi</em>, da 3.8 a 3.12.',
    intro: 'Le annotazioni di tipo Python <em>sono</em> la definizione del modello — nessun DSL extra. Pydantic gestisce la validazione runtime; il tuo IDE ottiene inferenza completa dei tipi.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, stesse semantiche.',
    intro: 'Sync e async condividono una definizione del modello. Sostituisci <code>for</code> con <code>async for</code> — nient\'altro cambia.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backends pluggabili</em>, scegli quello che ti serve.',
    intro: 'Il pacchetto core dipende solo da Pydantic. SQLite è integrato; altri database sono pacchetti separati, attivabili con una singola chiamata <code>configure()</code>.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Relazioni esplicite</em>, ClassVar + descriptor.',
    intro: 'Dichiara i campi relazione con <code>ClassVar</code> per-escluderli dalla scansione di Pydantic. A runtime vengono automaticamente sostituiti da <code>relation()</code>.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Transazioni atomiche</em>, savepoint annidati.',
    intro: 'Le transazioni annidate creano automaticamente SAVEPOINT. Il context manager committa o rollback; le eccezioni tornano al savepoint più vicino.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Si legge come Inglese</em>, no DSL.',
    intro: 'Catene di chiamate leggibili naturalmente. <code>.to_sql()</code> rende trasparente il SQL generato in qualsiasi momento.'
  },

  /* ── Architecture · Internal three layers ───────────── */
  arch: {
    label: 'Architecture · Tre livelli',
    title: '<em>Expression → Dialect → Backend</em>, responsabilità chiare.',
    intro: 'Logica query, generazione SQL e esecuzione database sono separate in tre livelli. Protocolli (<code>@runtime_checkable</code>) dichiarano le capability ai confini — funzionalità non supportate sollevano <code>UnsupportedFeatureError</code> invece di fallire silenziosamente.',
    col1: {
      num:   'Expression Layer',
      title: '<em>Raccolta semantica</em>, nessun dettaglio SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> delega la generazione SQL al dialect. Lo stesso oggetto expression è riutilizzabile in tutti i dialect — zero SQL hardcoded.'
    },
    col2: {
      num:   'Dialect Layer (33 protocolli)',
      title: '<em>33 protocolli</em> dichiarano i limiti delle capability',
      desc:  'I metodi <code>format_*()</code> generano SQL per il database target. Formula controllo capability: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Backend Layer (12-layer Mixin)',
      title: '<em>12-layer Mixin</em> composizione MRO',
      desc:  'Pattern Template Method: logica non-I/O vive in Mixin condivisi; logica I/O implementata separatamente. \\(n = 12\\) livelli MRO — zero codice duplicato.'
    }
  },

  /* ── Component Architecture · ActiveRecord + Backend ── */
  arch_comp: {
    label: 'Component Architecture',
    title: 'ActiveRecord + Backend, <em>due livelli indipendenti</em>.',
    intro: 'ActiveRecord è l\'utilizzatore di Backend; Backend può funzionare da solo. Varianti sync e async sono paired ma non interchangeable.',

    ar_badge: 'Application Layer',
    ar_title: 'ActiveRecord',
    ar_desc:  'Definizione modello, query building, gestione relazioni, gestione transazioni. Include ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Independent Layer',
    be_title: 'Backend',
    be_desc:  'Strato I/O database; utilizzabile senza ActiveRecord. SQLite integrato; altri database sono pacchetti estensione.',

    uses_label:      'usa',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'Accoppiamento sync — non può mescolare con async',
    pair_async_note:  'Accoppiamento async — non può mescolare con sync',

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

    note1_title: 'Indipendente',
    note1_desc:  'Backend espone un ABC pulito. Usalo direttamente senza ActiveRecord per script leggeri o scenari embedded.',
    note2_title: 'Estensibile',
    note2_desc:  'SQLite è nel pacchetto core. MySQL, MariaDB, PostgreSQL, Oracle e SQL Server sono pacchetti separati — installa solo ciò che ti serve.',
    note3_title: 'Accoppiamento type-safe',
    note3_desc:  '<code>ActiveRecord</code> si accoppia con <code>StorageBackend</code>; <code>AsyncActiveRecord</code> si accoppia con <code>AsyncStorageBackend</code>. Cross-pairing solleva errore di tipo.',

    node_sync_group:  'Sync',
    node_async_group: 'Async',

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

    tip_ar_s:  'ActiveRecord sync. Sottoclassa per definire il tuo modello; chiama <code>.save()</code>, <code>.query()</code> e altri metodi sync per interagire col database.',
    tip_ar_a:  'Async ActiveRecord. API è specchio della versione sync — tutti i metodi sono <code>async/await</code>, ideale per FastAPI / asyncio.',
    tip_aq_s:  'ActiveQuery (sync). Costruisci Where, Order By, Join, paginazione, ecc., poi chiama <code>.all()</code> o <code>.first()</code> per eseguire.',
    tip_aq_a:  'AsyncActiveQuery (async). Stesse semantiche della versione sync; tutti i metodi terminali sono coroutine.',
    tip_so_s:  'SetOperation (sync). Combina più query con UNION, INTERSECT o EXCEPT in un singolo result set tipizzato.',
    tip_so_a:  'AsyncSetOperation (async). Stesso di sync; esegue asincrono.',
    tip_cte_s: 'CTEQuery (sync). Costruisci Common Table Expressions con clausole WITH; CTEs ricorsive supportate.',
    tip_cte_a: 'AsyncCTEQuery (async). Stesso di sync; esegue asincrono.',
    tip_sb_s:  'StorageBackend ABC (sync). Definisce l\'interfaccia I/O minima: execute / fetch / transaction. Usabile direttamente senza ActiveRecord.',
    tip_sb_a:  'AsyncStorageBackend ABC (async). Specchio dell\'interfaccia sync; tutti i metodi I/O sono coroutine.',
    tip_sqlite: 'Backend SQLite — nel pacchetto core. Zero configurazione richiesta; perfetto per sviluppo, test e uso embedded.',
    tip_ext:   'Backend estensione (sync): rhosocial-activerecord-mysql, -postgresql, -oracle, -sqlserver. Installa solo ciò che ti serve; cambia con una singola chiamata <code>configure()</code>.',
    tip_ext_a: 'Backend estensione (async): controparti uno-a-uno dei pacchetti sync, con supporto completo async/await.'
  },

  /* ── Quick Taste ─────────────────────────────────────── */
  qt: {
    label:         'Quick Taste · Anteprima 30 secondi',
    title:         'Da install a <em>prima query</em> in meno di 30 righe.',
    btn_backends:  'Docs backend completi →',
    btn_ar:        'Dettagli ActiveRecord →',
    btn_practices: 'Scenari pratici →'
  },

  /* ── Compare ─────────────────────────────────────────── */
  compare: {
    label:       'Confronta',
    title:       'vs. altri Python ORMs.',
    col_feature: 'Funzionalità',
    row1:  'Design pattern',              row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend utilizzabile indipendentemente',
    row3:  'Nessun concetto di Session',
    row4:  'API sync / async consistente',
    row5:  'Integrazione nativa Pydantic',
    row6:  'Validazione runtime dati',
    row7:  'Espressività SQL completa',
    row8:  'Meccanismo dichiarazione capability',
    row9:  'SQL trasparente <code>.to_sql()</code>',
    row10: 'Zero dipendenza forzata migrazione',
    row11: 'Dipendenze minimali',
    row12: 'Definizione relazioni esplicita'
  },

  /* ── Voices ──────────────────────────────────────────── */
  voices: {
    label:   'Voci · Cosa dicono gli utenti',
    title:   'Cosa <em>dicono</em>.',
    q1:      'rhosocial-activerecord finalmente mi fa smettere di combattere l\'ORM. Annotazioni di tipo come definizioni del modello — assolutamente giusto.',
    q1_role: 'Backend Engineer · Kyoto',
    q2:      'Async e sync condividono una API — refactoring costa quasi zero. L\'intero progetto FastAPI migrato con due linee cambiate.',
    q2_role: 'Staff Engineer · Berlino',
    q3:      'Ho collegato un backend DuckDB da solo. Ho guardato il Backend ABC per meno di un pomeriggio e funzionava. Questa è estensibilità.',
    q3_role: 'Data Platform · Singapore',
    q4:      'Ogni passo della catena ha inferenza di tipo corretta nell\'IDE. Il potere di Pydantic applicato esattamente dove conta.',
    q4_role: 'Senior Python · San Paolo',
    q5:      'Zero dipendenze runtime è la chiave. In deployment embedded non preoccupiamo più del footprint di SQLAlchemy.',
    q5_role: 'IoT Engineer · Shenzhen'
  },

/* ── Stats ───────────────────────────────────────────── */
  stats: {
    label: 'In numeri',
    title: 'Alcuni <em>numeri</em>.',
    s1: 'Dialect DB opzionali',
    s2: 'Copertura annotazioni tipo',
    s3: 'Versione Python minima',
    s4: 'Dipendenze ORM esterne',
    s5: 'Protocolli capability',
    s6: 'Layer MRO Backend'
  },

  /* ── Install ─────────────────────────────────────────── */
  install: {
    label:     'Inizia',
    title:     'Una installazione, <em>dieci minuti</em> alla prima query.',
    sub:       'Pubblicato su PyPI. Il backend SQLite è nel pacchetto core. Altri backends installati on demand.',
    docs:      'Leggi i docs →',
    practices: 'Scenari pratici →'
  },

  // Padding to match en-us.js line count
  _pad1: '',
  _pad2: '',
  _pad3: ''
});