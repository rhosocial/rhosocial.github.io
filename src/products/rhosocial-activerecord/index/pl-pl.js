/**
 * index/pl-pl.js — Homepage polski słownik
 *
 * Zależność: assets/i18n/pl-pl.js musi być załadowany jako pierwszy.
 * Ten plik rozszerza window.I18N['pl-pl'] przez Object.assign dodając specyficzne dla strony głównej klucze.
 */
window.I18N = window.I18N || {};
window.I18N['pl-pl'] = Object.assign(window.I18N['pl-pl'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord,<br><em>przeprojektowany</em> dla Pythona.',
    sub: '<strong>rhosocial-activerecord</strong> definiuje modele z natywnymi adnotacjami typów Pythona i wykonuje zapytania łańcuchem <code>query().where(...).all()</code>. Sync i async w zestawie. Bez zewnętrznych zależności ORM — SQLite wbudowany, inne bazy danych jako osobne pakiety, własny backend w kilkadziesiąt linii.',
    cta_secondary: 'Zobacz funkcje →'
  },

  features: {
    label: 'Dlaczego · 6 kluczowych obietnic',
    title: 'Dlaczego <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Typ = pole', title: '<em>Typ-bezpieczny</em> od konstrukcji', desc: '<code>name: str</code> — przechowywanie, walidacja i autouzupełnianie IDE w jednym.' },
    f2: { num: '02 / Async pierwszej klasy', title: 'Sync &amp; async, <em>jeden API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — identyczny kształt.' },
    f3: { num: '03 / Wtyczne backends', title: '<em>Wymienne backends</em>', desc: 'SQLite wbudowany; Postgres/MySQL/MSSQL/Oracle jako pakiety; lub własny.' },
    f4: { num: '04 / Jawne relacje', title: '<em>Relacje</em> jawne', desc: 'has_many / belongs_to zadeklarowane w modelu; relacje to <code>QuerySet</code>.' },
    f5: { num: '05 / Atomowe transakcje', title: 'Transakcje, <em>poprawnie zagnieżdżone</em>', desc: 'Menadżer kontekstu + savepoints; wyjątki wywołują rollback.' },
    f6: { num: '06 / Pythonic', title: 'Czytane jak <em>angielski</em>', desc: '<code>User.query().where(...).all()</code> — brak DSL, tylko Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Typ = pole</em>, od 3.8 do 3.12.',
    intro: 'Adnotacje typów Pythona to definicja modelu — brak dodatkowego DSL. Pydantic do walidacji runtime, pełna inferencja typów w IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, ta sama semantyka.',
    intro: 'Sync i async dzielą tę samą definicję modelu. <code>for</code> → <code>async for</code>, reszta bez zmian.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Wymienne backends</em>, wybierz czego potrzebujesz.',
    intro: 'Pakiet core zależy tylko od Pydantic. SQLite wbudowany, inne bazy danych jako pakiety, <code>configure()</code> jedna linia.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Jawne relacje</em>, ClassVar + deskryptor.',
    intro: 'Użyj <code>ClassVar</code> dla pól relacji, unikaj skanowania Pydantic. Automatycznie zamienione na <code>relation()</code> w runtime.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Atomowe transakcje</em>, zagnieżdżone savepoints.',
    intro: 'Zagnieżdżone transakcje automatycznie tworzą SAVEPOINT. Menadżer kontekstu commit/rollback; wyjątki automatycznie do ostatniego savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Czytane jak angielski</em>, brak DSL.',
    intro: 'Łańcuchowe wywołania, płynne czytanie jak angielski. <code>.to_sql()</code> pokazuje wygenerowany SQL.'
  },

  practice: {
    label: 'W praktyce · prawdziwy kod',
    title: 'Od 3.8 do 3.12, <em>krok po kroku</em>.',
    intro: 'Zgadza się z fixtures <code>models_py38.py</code> … <code>models_py312.py</code> w repo testsuite.',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> zamiast <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> zamiast <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: typ <code>Self</code> (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> i PEP 695 generics <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Architektura · Trzy Warstwy',
    title: '<em>Expression → Dialect → Backend</em>, jasne odpowiedzialności.',
    intro: 'Separacja logiki zapytań, generacji SQL i wykonania bazy danych. Protokoły (<code>@runtime_checkable</code>) deklarują możliwości na granicach — nieobsługiwane funkcje rzucają <code>UnsupportedFeatureError</code>, nie cisza.',
    col1: {
      num: 'Warstwa Expression',
      title: '<em>Kolekcja semantyczna</em>, bez detali SQL',
      desc: '<code>BaseExpression.to_sql(dialect)</code> deleguje generację SQL do docelowego dialektu. Jeden obiekt expression używany wielokrotnie we wszystkich dialektach, zero hardcoded SQL.'
    },
    col2: {
      num: 'Warstwa Dialect (33 Protokoły)',
      title: '<em>33 protokoły</em> deklarują granice możliwości',
      desc: 'Metody <code>format_*()</code> generują SQL dla docelowej bazy. Wzór detekcji możliwości: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num: 'Warstwa Backend (12 Mixins)',
      title: '<em>12 Mixins</em> kombinacja MRO',
      desc: 'Wzorzec Template Method: logika non-I/O w shared Mixin, logika I/O osobno. \\(n = 12\\) warstw MRO, zero duplikacji kodu.'
    }
  },

  arch_comp: {
    label: 'Architektura Komponentów',
    title: 'ActiveRecord + Backend, <em>dwie niezależne warstwy</em>.',
    intro: 'ActiveRecord jest użytkownikiem Backend; Backend może działać niezależnie. Sync i async są sparowane, nie wymienne.',

    ar_badge: 'Warstwa Aplikacji',
    ar_title: 'ActiveRecord',
    ar_desc: 'Definicja modelu, budowanie zapytań, zarządzanie relacjami, obsługa transakcji. Zawiera ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Warstwa Niezależna',
    be_title: 'Backend',
    be_desc: 'Warstwa I/O bazy danych; używalna bez ActiveRecord. SQLite wbudowany, inne bazy jako pakiety rozszerzeń.',

    uses_label: 'używa',
    sync_async_note: 'sync ↔ sync · async ↔ async',
    pair_sync_note: 'Para sync — nie mieszaj z async',
    pair_async_note: 'Para async — nie mieszaj z sync',

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
    node_ext: 'MySQL · PostgreSQL · SQL Server',
    node_ext_a: 'AsyncMySQL · AsyncPostgreSQL · …',

    tip_ar_s: 'Sync ActiveRecord. Dziedzicz tę klasę aby definiować modele, wywołuj metody sync jak <code>.save()</code>, <code>.query()</code>.',
    tip_ar_a: 'Async ActiveRecord. API jest lustrzanym odbiciem wersji sync, wszystkie metody to <code>async/await</code>, dla FastAPI/asyncio.',
    tip_aq_s: 'ActiveQuery (sync). Łączenie WHERE, ORDER BY, JOIN, paginacji, na końcu <code>.all()</code> / <code>.one()</code> do wykonania.',
    tip_aq_a: 'AsyncActiveQuery (async). Ta sama semantyka co sync, wszystkie metody terminalowe to koryniny.',
    tip_so_s: 'SetOperation (sync). Łącz wiele zapytań przez UNION / INTERSECT / EXCEPT, zwróć ujednolicony wynik.',
    tip_so_a: 'AsyncSetOperation (async). To samo, wykonanie asynchroniczne.',
    tip_cte_s: 'CTEQuery (sync). Buduj CTE z klauzulami WITH, obsługuje rekursywne CTE.',
    tip_cte_a: 'AsyncCTEQuery (async). To samo, wykonanie asynchroniczne.',
    tip_sb_s: 'StorageBackend (sync). Definiuje minimalny interfejs I/O: execute / fetch / transaction. Używalny bez ActiveRecord.',
    tip_sb_a: 'AsyncStorageBackend (async). Lustrzane odbicie wersji sync, wszystkie metody I/O to koryniny.',
    tip_sqlite: 'SQLite backend — w pakiecie core. Brak konfiguracji; idealne dla rozwoju, testów i embedded.',
    tip_ext: 'Pakiety rozszerzeń backend (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver. Instaluj czego potrzebujesz; przełącz jedną linią <code>configure()</code>.',
    tip_ext_a: 'Pakiety rozszerzeń backend (async): odpowiedniki pakietów sync, z pełnym wsparciem async/await.'
  },

  qt: {
    label: 'Quick Taste · 30 sekund',
    title: 'Od instalacji do <em>pierwszego zapytania</em>, mniej niż 30 linii.',
    btn_backends: 'Pełna dokumentacja backend →',
    btn_ar: 'Szczegóły ActiveRecord →',
    btn_practices:'Scenariusze praktyczne →'
  },

  compare: {
    label: 'Porównaj',
    title: 'vs. inne <em>Python ORM</em>.',
    col_feature: 'Funkcja',
    row1: 'Wzorzec projektowy', row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2: 'Backend używalny niezależnie',
    row3: 'Brak koncepcji sesji',
    row4: 'Spójne Sync / Async API',
    row5: 'Natywna integracja Pydantic',
    row6: 'Walidacja danych runtime',
    row7: 'Pełna ekspresyjność SQL',
    row8: 'Mechanizm deklaracji możliwości',
    row9: 'Przejrzystość SQL <code>.to_sql()</code>',
    row10: 'Brak narzuconego narzędzia migracji',
    row11: 'Minimalne zależności',
    row12: 'Jawna definicja relacji'
  },

  gallery: {
    label: 'Galeria Komponentów · Primitives',
    title: 'Jak każdy motyw obsługuje <em>UI Primitives</em>.',
    c_buttons: 'Buttons', c_btngroup: 'Button group', c_form: 'Form controls',
    c_radio: 'Radio group', c_multi: 'Multi-select list', c_dropdown: 'Dropdown',
    c_alerts: 'Alerts', c_badges: 'Badges', c_progress: 'Progress',
    c_grid: 'Grid demo (12 kolumn)', c_rtl: 'RTL preview', c_table: 'Striped table',
    form_email: 'Adres email', form_note: 'Uwagi',
    form_preload: 'Preload', form_async: 'Async',
    radio_sync: 'Sync (tryb sync)', radio_async: 'Async (tryb async)', radio_both: 'Oba (shared models)',
    alert_info: '<b>Wskazówka.</b> SQLite backend w pakiecie core.',
    alert_success: '<b>Gotowe.</b> <code>User.configure(...)</code> wywołane.',
    alert_warn: '<b>Ostrzeżenie.</b> SQLite ≥ 3.25 wymagane dla funkcji okienkowych.',
    prog_coverage: 'Pokrycie testów', prog_backend: 'Ukończenie Backend', prog_locale: 'Lokalizacja dokumentacji',
    backend_note: 'Ten sam komponent co górny pasek kontrolny.',
    multi1_t: 'PostgreSQL', multi1_d: 'Produkcja główna',
    multi2_t: 'MySQL',      multi2_d: 'Usługi legacy',
    multi3_t: 'SQLite',     multi3_d: 'Testy &amp; Prototypy'
  },

  album: {
    label: 'Galeria · Biblioteka',
    title: 'Ucz się z <em>przykładów</em>.',
    a1: 'Twój pierwszy model', a2: 'Async w FastAPI', a3: 'has_many szczegółowo',
    a4: 'Napisz backend', a5: 'Auto wykrywanie N+1', a6: 'Zagnieżdżone transakcje & savepoints'
  },

  voices: {
    label: 'Głosy · Co mówią użytkownicy',
    title: 'Co <em>mówią</em>.',
    q1: 'Z rhosocial-activerecord wreszcie nie walczę z ORM. Adnotacje typów to model — dokładnie tak jak powinno być.',
    q1_role: 'Backend Engineer · Kyoto',
    q2: 'Sync i async dzielą jeden API, refaktoryzacja prawie za darmo. Cała moja migracja FastAPI to dwie linie.',
    q2_role: 'Staff Engineer · Berlin',
    q3: 'Napisałem DuckDB backend. Przeczytałem Backend ABC w porze lunchu, po południu już działał. To jest prawdziwa rozszerzalność.',
    q3_role: 'Data Platform · Singapore',
    q4: 'Każdy krok łańcucha ma poprawną inferencję typów w moim IDE. Moc Pydantic dokładnie tam gdzie trzeba.',
    q4_role: 'Senior Python · São Paulo',
    q5: 'Zero zależności runtime to klucz. W embeddowanych deploymentach nie martwimy się już o rozmiar SQLAlchemy.',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  auth: {
    label: 'Auth · demo logowania',
    title: 'Zaloguj się do <em>rhosocial</em>.',
    welcome: 'Witaj z powrotem', sub: 'Kontynuuj swoim kontem rhosocial.',
    email: 'Email', password: 'Hasło', remember: 'Zaloguj mnie', forgot: 'Zapomniałeś hasła?',
    login: 'Zaloguj', or: 'LUB', github: 'Kontynuuj przez GitHub', twitter: 'Kontynuuj przez Twitter',
    no_account: 'Nie masz konta?', register: 'Zarejestruj'
  },

  stats: {
    label: 'W liczbach',
    title: 'Parę <em>liczb</em>.',
    s1: 'Dostępne dialekty DB',
    s2: 'Pokrycie adnotacji typów',
    s3: 'Minimalna wersja Pythona',
    s4: 'Zewnętrzne zależności ORM'
  },

  install: {
    label: 'Zacznij',
    title: 'Jedna linia install, <em>dziesięć minut</em> do pierwszego zapytania.',
    sub: 'Opublikowane na PyPI. SQLite backend w pakiecie core; inne instaluj na żądanie.',
    docs: 'Czytaj dokumentację →'
  },

  split_sync: {
    label: 'Side by side',
    title: 'Sync = async, <em>ta sama semantyka</em>.',
    intro: 'Zamień <code>for</code> na <code>async for</code> — gotowe. Inferencja typów utrzymuje się przez cały łańcuch.',
    cta: 'Czytaj przewodnik async →'
  },

  split_backend: {
    label: 'Wolność backend',
    title: 'Napisz własny <em>backend</em> w jeden dzień.',
    intro: 'Dziedzicz z <code>Backend</code>, zaimplementuj kilka dialect hooks. DuckDB i libSQL już sprawdzone.',
    cta: 'Przewodnik dev backend →'
  },

  pricing: {
    label: 'Plany · poglądowe',
    title: 'Wybierz swój <em>poziom</em>.',
    intro: '(Karty przykładowe — OSS projekt sam za darmo na zawsze. Pokazane do podglądu cen w każdym motywie.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: 'Dla indywidualnych devów i kontrybutorów OSS. Pełna funkcjonalność, brak limitów.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'Pełne Sync & Async API', f3: 'Wsparcie forum społeczności',
      f4: 'Dashboard współpracy zespołu', f5: 'Gwarancja odpowiedzi SLA', cta: 'Zacznij'
    },
    c2: {
      tier: 'Team',       desc: 'Rozwijające się zespoły. Enterprise backends plus audyt.',
      f1: 'Wszystko z Community', f2: 'MSSQL / Oracle Backends', f3: 'Log audytu & read/write split',
      f4: 'Prywatny Discord priorytet', f5: 'SSO / SAML', cta: '14 dni trial'
    },
    c3: {
      tier: 'Enterprise', desc: 'Duże organizacje. On-prem, compliance, szkolenia.', price_label: 'Kontakt',
      f1: 'Wszystko z Team', f2: 'Custom backends (DuckDB / libSQL / wewnętrzne)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA 4 godziny', f5: 'Szkolenie on-site i dedykowane rozwiązania', cta: 'Kontakt sprzedaż'
    }
  }

});