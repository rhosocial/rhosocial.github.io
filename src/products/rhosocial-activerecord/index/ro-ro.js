/**
 * index/ro-ro.js — Dicționar pagină principală român
 *
 * Dependență: assets/i18n/ro-ro.js trebuie încărcat primul.
 * Acest fișier extinde window.I18N['ro-ro'] prin Object.assign adăugând chei specifice paginii principale.
 */
window.I18N = window.I18N || {};
window.I18N['ro-ro'] = Object.assign(window.I18N['ro-ro'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord,<br><em>refăcut</em> pentru Python.',
    sub: '<strong>rhosocial-activerecord</strong> definește modele cu adnotări de tip native Python și le interoghează cu lanțul <code>query().where(...).all()</code>. Sync și async incluse. Fără dependențe ORM externe — SQLite încorporat, alte baze de date ca pachete separate, backend personalizat în câteva zeci de linii.',
    cta_secondary: 'Vezi funcționalități →'
  },

  features: {
    label: 'De ce · 6 Promisiuni de Bază',
    title: 'De ce <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Tip = câmp', title: '<em>Tip-sigur</em> prin construcție', desc: '<code>name: str</code> — stocare, validare și completare automată IDE într-unul.' },
    f2: { num: '02 / Async primă clasă', title: 'Sync &amp; async, <em>o singură API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — formă identică.' },
    f3: { num: '03 / Backends interconectabile', title: '<em>Backends</em> conectabile', desc: 'SQLite încorporat; Postgres/MySQL/MSSQL/Oracle ca pachete; sau personalizat.' },
    f4: { num: '04 / Relații explicite', title: '<em>Relații</em> făcute explicite', desc: 'has_many / belongs_to declarate în model; relațiile sunt <code>QuerySet</code>.' },
    f5: { num: '05 / Tranzacții atomice', title: 'Tranzacții, <em>imbricate corect</em>', desc: 'Manager de context + savepoints; excepțiile declanșează rollback.' },
    f6: { num: '06 / Pythonic', title: 'Se citește ca <em>engleză</em>', desc: '<code>User.query().where(...).all()</code> — fără DSL, doar Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Tip = câmp</em>, de la 3.8 la 3.12.',
    intro: 'Adnotările de tip Python sunt definiția modelului — fără DSL suplimentar. Pydantic pentru validare runtime, inferență completă de tip în IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, aceeași semantică.',
    intro: 'Sync și async împart aceeași definiție de model. <code>for</code> → <code>async for</code>, restul rămâne la fel.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backends interconectabile</em>, alege ce ai nevoie.',
    intro: 'Pachetul core depinde doar de Pydantic. SQLite încorporat, alte baze de date ca pachete, <code>configure()</code> o linie.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Relații explicite</em>, ClassVar + descriptor.',
    intro: 'Folosește <code>ClassVar</code> pentru câmpurile de relație, evită scanarea Pydantic. Înlocuit automat cu <code>relation()</code> la runtime.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Tranzacții atomice</em>, savepoints imbricate.',
    intro: 'Tranzacțiile imbricate creează automat SAVEPOINTs. Managerul de context face commit/rollback; excepțiile automat la ultimul savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Se citește ca engleză</em>, fără DSL.',
    intro: 'Apeluri în lanț, citire lină ca engleză. <code>.to_sql()</code> arată SQL generat.'
  },

  practice: {
    label: 'În practică · cod real',
    title: 'De la 3.8 la 3.12, <em>pas cu pas</em>.',
    intro: 'Se potrivește cu fixture-ele <code>models_py38.py</code> … <code>models_py312.py</code> din repositoriul testsuite.',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> în loc de <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> în loc de <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: tipul <code>Self</code> (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> și PEP 695 generics <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Arhitectură · Trei Straturi',
    title: '<em>Expression → Dialect → Backend</em>, responsabilități clare.',
    intro: 'Separarea logicii de interogări, generare SQL și execuție în baza de date. Protocoale (<code>@runtime_checkable</code>) declară capabilități la granițe — funcționalități neacceptate aruncă <code>UnsupportedFeatureError</code>, nu eșec silențios.',
    col1: {
      num: 'Stratul Expression',
      title: '<em>Colecție semantică</em>, fără detalii SQL',
      desc: '<code>BaseExpression.to_sql(dialect)</code> delegă generarea SQL către dialectul țintă. Un obiect expression reutilizabil în toate dialectele, zero SQL hardcoded.'
    },
    col2: {
      num: 'Stratul Dialect (33 Protocoale)',
      title: '<em>33 de protocoale</em> declară granițele de capabilitate',
      desc: 'Metodele <code>format_*()</code> generează SQL pentru baza de date țintă. Formula de detectare a capabilității: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num: 'Stratul Backend (12 Mixins)',
      title: '<em>12 Mixins</em> combinație MRO',
      desc: 'Pattern-ul Template Method: logica non-I/O în Mixin partajat, logica I/O separat. \\(n = 12\\) straturi MRO, zero cod duplicat.'
    }
  },

  arch_comp: {
    label: 'Arhitectura Componentelor',
    title: 'ActiveRecord + Backend, <em>două straturi independente</em>.',
    intro: 'ActiveRecord este utilizatorul Backend; Backend poate funcționa independent. Sync și async sunt pereche, nu interschimbabile.',

    ar_badge: 'Stratul Aplicație',
    ar_title: 'ActiveRecord',
    ar_desc: 'Definiție de model, construire de interogări, gestionare relații, manipulare tranzacții. Include ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Strat Independent',
    be_title: 'Backend',
    be_desc: 'Strat I/O bază de date; utilizabil fără ActiveRecord. SQLite încorporat, alte baze de date ca pachete de extensie.',

    uses_label: 'folosește',
    sync_async_note: 'sync ↔ sync · async ↔ async',
    pair_sync_note: 'Pereche sync — nu amesteca cu async',
    pair_async_note: 'Pereche async — nu amesteca cu sync',

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

    tip_ar_s: 'Sync ActiveRecord. Eredită această clasă pentru a defini modele, apelează metode sync ca <code>.save()</code>, <code>.query()</code>.',
    tip_ar_a: 'Async ActiveRecord. API este oglinda versiunii sync, toate metodele sunt <code>async/await</code>, pentru FastAPI / asyncio.',
    tip_aq_s: 'ActiveQuery (sync). Construcție în lanț WHERE, ORDER BY, JOIN, paginare, la final <code>.all()</code> / <code>.first()</code> pentru execuție.',
    tip_aq_a: 'AsyncActiveQuery (async). Aceeași semantică ca sync, toate metodele terminale sunt corutine.',
    tip_so_s: 'SetOperation (sync). Combină multiple interogări cu UNION / INTERSECT / EXCEPT, returnează set de rezultate unificat.',
    tip_so_a: 'AsyncSetOperation (async). La fel, execuție async.',
    tip_cte_s: 'CTEQuery (sync). Construiește CTE cu clauze WITH, suportă CTE recursiv.',
    tip_cte_a: 'AsyncCTEQuery (async). La fel, execuție async.',
    tip_sb_s: 'StorageBackend (sync). Definește interfața I/O minimă: execute / fetch / transaction. Utilizabil fără ActiveRecord.',
    tip_sb_a: 'AsyncStorageBackend (async). Oglinda versiunii sync, toate metodele I/O sunt corutine.',
    tip_sqlite: 'SQLite backend — încorporat în pachetul core. Zero configurare; perfect pentru dezvoltare, teste și embedded.',
    tip_ext: 'Pachete de extensie backend (sync): rhosocial-activerecord-mysql, -postgresql, -oracle, -sqlserver. Instalează ce ai nevoie; schimbă cu o linie <code>configure()</code>.',
    tip_ext_a: 'Pachete de extensie backend (async): omologii pachetelor sync, cu suport complet async/await.'
  },

  qt: {
    label: 'Quick Taste · 30 secunde',
    title: 'De la instalare la <em>prima interogare</em>, sub 30 de linii.',
    btn_backends: 'Docs complete backend →',
    btn_ar: 'Detalii ActiveRecord →',
    btn_practices:'Scenarii practice →'
  },

  compare: {
    label: 'Compară',
    title: 'vs. alte <em>Python ORM</em>.',
    col_feature: 'Funcționalitate',
    row1: 'Pattern de design', row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2: 'Backend utilizabil independent',
    row3: 'Fără concept de sesiune',
    row4: 'API Sync / async consecvent',
    row5: 'Integrare nativă Pydantic',
    row6: 'Validare date runtime',
    row7: 'Expresivitate SQL completă',
    row8: 'Mecanism declarare capabilități',
    row9: 'Transparență SQL <code>.to_sql()</code>',
    row10: 'Fără unealtă de migrație obligatorie',
    row11: 'Dependențe minime',
    row12: 'Definiție explicită a relațiilor'
  },

  gallery: {
    label: 'Galerie Componente · Primitives',
    title: 'Cum gestionează fiecare temă <em>UI Primitives</em>.',
    c_buttons: 'Buttons', c_btngroup: 'Button group', c_form: 'Form controls',
    c_radio: 'Radio group', c_multi: 'Multi-select list', c_dropdown: 'Dropdown',
    c_alerts: 'Alerts', c_badges: 'Badges', c_progress: 'Progress',
    c_grid: 'Demo grid (12 coloane)', c_rtl: 'RTL preview', c_table: 'Striped table',
    form_email: 'Adresă de email', form_note: 'Note',
    form_preload: 'Preload', form_async: 'Async',
    radio_sync: 'Sync (mod sync)', radio_async: 'Async (mod async)', radio_both: 'Ambele (modele partajate)',
    alert_info: '<b>Sfat.</b> SQLite backend încorporat în pachetul core.',
    alert_success: '<b>Gata.</b> <code>User.configure(...)</code> apelat.',
    alert_warn: '<b>Atenție.</b> SQLite ≥ 3.25 necesar pentru funcții de fereastră.',
    prog_coverage: 'Acoperire teste', prog_backend: 'Completare Backend', prog_locale: 'Localizare documentație',
    backend_note: 'Aceeași componentă ca bara de control superioară.',
    multi1_t: 'PostgreSQL', multi1_d: 'Producție principală',
    multi2_t: 'MySQL',      multi2_d: 'Servicii legacy',
    multi3_t: 'SQLite',     multi3_d: 'Teste & Prototipuri'
  },

  album: {
    label: 'Galerie · Bibliotecă',
    title: 'Înveți din <em>exemple</em>.',
    a1: 'Primul tău model', a2: 'Async în FastAPI', a3: 'has_many în detaliu',
    a4: 'Scrie un backend', a5: 'Detectare automată N+1', a6: 'Tranzacții imbricate & savepoints'
  },

  voices: {
    label: 'Voci · Ce spun utilizatorii',
    title: 'Ce <em>spun</em>.',
    q1: 'Cu rhosocial-activerecord în sfârșit nu mai lupt cu ORM. Adnotările de tip sunt modelul — exact corect.',
    q1_role: 'Backend Engineer · Kyoto',
    q2: 'Sync și async împart o API, refactorizarea e aproape gratuită. Întreaga mea migrare FastAPI a fost două linii.',
    q2_role: 'Staff Engineer · Berlin',
    q3: 'Am scris un backend DuckDB. Am citit Backend ABC la prânz, după-amiaza era în producție. Aceasta este extensibilitatea reală.',
    q3_role: 'Data Platform · Singapore',
    q4: 'Fiecare pas al lanțului are inferență de tip corectă în IDE-ul meu. Puterea Pydantic în locul potrivit.',
    q4_role: 'Senior Python · São Paulo',
    q5: 'Zero dependențe runtime este cheia. În deploy-uri embedded nu ne mai preocupăm de dimensiunea SQLAlchemy.',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  auth: {
    label: 'Auth · demo autentificare',
    title: 'Autentifică-te la <em>rhosocial</em>.',
    welcome: 'Bine ai revenit', sub: 'Continuă cu contul tău rhosocial.',
    email: 'Email', password: 'Parolă', remember: 'Ține-mă autentificat', forgot: 'Ai uitat parola?',
    login: 'Autentificare', or: 'SAU', github: 'Continuă cu GitHub', twitter: 'Continuă cu Twitter',
    no_account: 'Nu ai cont?', register: 'Înregistrare'
  },

  stats: {
    label: 'În cifre',
    title: 'Câteva <em>cifre</em>.',
    s1: 'Dialecte DB disponibile',
    s2: 'Acoperire adnotări de tip',
    s3: 'Versiune minimă Python',
    s4: 'Dependențe ORM externe'
  },

  install: {
    label: 'Începe',
    title: 'O linie de instalare, <em>zece minute</em> la prima interogare.',
    sub: 'Publicat pe PyPI. SQLite backend încorporat în pachetul core; altele instalate la cerere.',
    docs: 'Citește documentația →'
  },

  split_sync: {
    label: 'Side by side',
    title: 'Sync = async, <em>aceeași semantică</em>.',
    intro: 'Înlocuiește <code>for</code> cu <code>async for</code> — gata. Inferența de tip se păstrează prin tot lanțul.',
    cta: 'Citește ghidul async →'
  },

  split_backend: {
    label: 'Libertate backend',
    title: 'Scrie propriul tău <em>backend</em> într-o după-amiază.',
    intro: 'Ereditează din <code>Backend</code>, implementează câțiva dialect hooks. DuckDB și libSQL sunt deja dovedite.',
    cta: 'Ghid dezvoltare backend →'
  },

  pricing: {
    label: 'Plans · ilustrativ',
    title: 'Alege <em>nivelul</em> tău.',
    intro: '(Carduri demonstrative — proiectul OSS gratuit pentru totdeauna. Afișat pentru previzualizare prețuri în fiecare temă.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: 'Pentru dezvoltatori individuali și contributori OSS. Funcționalitate completă, fără limite.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'API Sync & async complet', f3: 'Suport forum comunitate',
      f4: 'Dashboard colaborare echipă', f5: 'Garanție răspuns SLA', cta: 'Începe'
    },
    c2: {
      tier: 'Team',       desc: 'Echipe în creștere. Backends enterprise plus audit.',
      f1: 'Tot din Community', f2: 'MSSQL / Oracle Backends', f3: 'Log audit & read/write split',
      f4: 'Discord privat prioritar', f5: 'SSO / SAML', cta: 'Trial 14 zile'
    },
    c3: {
      tier: 'Enterprise', desc: 'Organizații mari. On-prem, compliance, instruire.', price_label: 'Contactează',
      f1: 'Tot din Team', f2: 'Backends personalizate (DuckDB / libSQL / intern)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA 4 ore', f5: 'Instruire on-site și soluții dedicate', cta: 'Contactează vânzările'
    }
  }

});