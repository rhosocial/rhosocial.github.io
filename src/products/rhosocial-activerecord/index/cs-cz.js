/**
 * index/cs-cz.js — 首页捷克语词典
 *
 * 依赖：assets/i18n/cs-cz.js 必须先加载。
 * 本文件通过 Object.assign 向已有的 window.I18N['cs-cz'] 追加首页特有 key。
 */
window.I18N = window.I18N || {};
window.I18N['cs-cz'] = Object.assign(window.I18N['cs-cz'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord,<br><em>přepracovaný</em> pro Python.',
    sub: '<strong>rhosocial-activerecord</strong> definuje modely pomocí nativních anotací typů Pythonu a dotazuje se řetězcem <code>query().where(...).all()</code>. Sync i async od prvního dne. Bez externích ORM závislostí — SQLite je zabudované, ostatní databáze jako samostatné balíčky, vlastní backend napíšete v pár desítkách řádků.',
    cta_secondary: 'Zobrazit funkce →'
  },

  features: {
    label: 'Proč · 6 slibů',
    title: 'Proč <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Typ = pole', title: '<em>Typově bezpečný</em> od základu', desc: '<code>name: str</code> znamená uložení, validaci a návrhy IDE v jednom.' },
    f2: { num: '02 / Async první třídy', title: 'Sync &amp; async, <em>jedno API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — stejný tvar.' },
    f3: { num: '03 / Záměnné backendy', title: 'Záměnné <em>backendy</em>', desc: 'SQLite zabudované; Postgres/MySQL/MSSQL/Oracle jako samostatné balíčky; nebo vlastní.' },
    f4: { num: '04 / Explicitní relace', title: '<em>Relace</em> deklarované explicitně', desc: 'has_many / belongs_to deklarované na modelu; relace sama je <code>QuerySet</code>.' },
    f5: { num: '05 / Atomické transakce', title: 'Transakce, <em>správně vnořené</em>', desc: 'Context manager + savepoint; výjimky způsobují čistý rollback.' },
    f6: { num: '06 / Pythonic', title: 'Čte se jako <em>angličtina</em>', desc: '<code>User.query().where(...).all()</code> — žádné DSL, prostě Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Typ = pole</em>, od 3.8 do 3.12.',
    intro: 'Python typové anotace jsou definicí modelu, žádné další DSL. Pydantic validace za běhu, kompletní typová inference v IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, stejná sémantika.',
    intro: 'Sync a async sdílí stejnou definici modelu. <code>for</code> → <code>async for</code>, zbytek nezměněn.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backendy zaměnitelné</em>, podle potřeby.',
    intro: 'Základní balíček závisí pouze na Pydantic. SQLite zabudované, ostatní databáze jako samostatné balíčky, <code>configure()</code> jeden řádek.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Relace explicitní</em>, ClassVar + deskriptor.',
    intro: 'Použijte <code>ClassVar</code> pro deklaraci relačních polí, abyste se vyhnuli skenování Pydantic. Za běhu automatická náhrada za <code>relation()</code>.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Atomické transakce</em>, vnořené savepointy.',
    intro: 'Vnořené transakce automaticky vytvářejí SAVEPOINT. Context manager automaticky komituje/vrací, výjimky se automaticky vracejí k poslednímu savepointu.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Čte se jako angličtina</em>, bez DSL.',
    intro: 'Řetězcová volání, plynulé čtení jako angličtina. <code>.to_sql()</code> pro zobrazení vygenerovaného SQL.'
  },

  practice: {
    label: 'V praxi · skutečný kód',
    title: 'Od 3.8 do 3.12, <em>krok za krokem</em>.',
    intro: 'Odpovídá souborům <code>models_py38.py</code> … <code>models_py312.py</code> z testsuite repozitáře.',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> místo <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> místo <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: typ <code>Self</code> (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> a generika PEP 695 <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Architecture · tři vrstvy',
    title: '<em>Výraz → Dialekt → Backend</em>, jasné odpovědnosti.',
    intro: 'Oddělení dotazovací logiky, generování SQL a provádění databáze. Protokoly (<code>@runtime_checkable</code>) deklarují schopnosti na hranicích — nepodporované funkce vyvolají <code>UnsupportedFeatureError</code>, ne tichý fail.',
    col1: {
      num:   'Vrstva výrazů',
      title: '<em> Sběr sémantiky</em>, bez SQL detailů',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> deleguje generování SQL na cílovou databázi. Jeden výrazový objekt je znovupoužitelný napříč všemi dialekty, nulový hardkódovaný SQL.'
    },
    col2: {
      num:   'Vrstva dialektu (33 protokolů)',
      title: '<em>33 protokolů</em> deklaruje hranice schopností',
      desc:  '<code>format_*()</code> metody generují SQL pro cílovou databázi. Vzorec detekce schopností: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Vrstva backendu (12 Mixinů)',
      title: '<em>12 Mixinů</em> MRO kombinace',
      desc:  'Vzor Template Method: nelogika I/O v Mixinu sdílena, I/O logika odděleně. \\(n = 12\\) MRO vrstva kombinace, nulové opakování kódu.'
    }
  },

  arch_comp: {
    label: 'Architektura komponent',
    title: 'ActiveRecord + Backend, <em>dvě nezávislé vrstvy</em>.',
    intro: 'ActiveRecord je uživatel Backend; Backend může pracovat samostatně. Sync a async jsou párované, nelze je zaměňovat.',

    ar_badge: 'Aplikační vrstva',
    ar_title: 'ActiveRecord',
    ar_desc:  'Definice modelu, dotazování, správa relací, zpracování transakcí. Zahrnuje ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Nezávislá vrstva',
    be_title: 'Backend',
    be_desc:  'Vrstva databázového I/O, lze používat bez ActiveRecord. SQLite zabudovaný, ostatní databáze jako rozšíření.',

    uses_label:      'používá',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'Sync pár — nelze míchat s async',
    pair_async_note:  'Async pár — nelze míchat se sync',

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

    tip_ar_s:   'Sync ActiveRecord. Děděním této třídy definujte model, volejte sync metody jako <code>.save()</code>, <code>.query()</code>.',
    tip_ar_a:   'Async ActiveRecord. API je zrcadlem sync verze, všechny metody jsou <code>async/await</code>, pro FastAPI / asyncio.',
    tip_aq_s:   'ActiveQuery (sync). Řetězcové_build WHERE, ORDER BY, JOIN, stránkování, nakonec <code>.all()</code> / <code>.one()</code>.',
    tip_aq_a:   'AsyncActiveQuery (async). Stejná sémantika jako sync, všechny terminální metody jsou coroutines.',
    tip_so_s:   'SetOperation (sync). Kombinace více dotazů přes UNION / INTERSECT / EXCEPT, vrací sjednocený výsledek.',
    tip_so_a:   'AsyncSetOperation (async). Totéž, asynchronn�� provádění.',
    tip_cte_s:  'CTEQuery (sync). Buduje CTE pomocí WITH clause, podporuje rekurzivní CTE.',
    tip_cte_a:  'AsyncCTEQuery (async). Totéž, asynchronní provádění.',
    tip_sb_s:   'StorageBackend (sync). Definuje minimální I/O rozhraní: execute / fetch / transaction. Lze používat bez ActiveRecord.',
    tip_sb_a:   'AsyncStorageBackend (async). Zrcadlo sync verze, všechny I/O metody jsou coroutines.',
    tip_sqlite:  'SQLite backend, zabudovaný v základním balíčku. Nulová konfigurace, vhodné pro vývoj, testy a embedded.',
    tip_ext:    'Rozšíření backend balíčky (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver. Nainstalujte podle potřeby, <code>configure()</code> jeden řádek.',
    tip_ext_a:  'Rozšíření backend balíčky (async): odpovídají sync balíčkům, poskytují kompletní async/await podporu.'
  },

  qt: {
    label: 'Quick Taste · 30 sekund',
    title: 'Od instalace k <em>prvnímu dotazu</em>, do 30 řádků.',
    btn_backends: 'Kompletní dokumentace backendů →',
    btn_ar:       'Detail ActiveRecord →',
    btn_practices:'Praxe →'
  },

  compare: {
    label: 'Porovnat',
    title: 'Srovnání s dalšími <em>Python ORM</em>.',
    col_feature: 'Charakteristika',
    row1:  'Návrhový vzor',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend lze používat samostatně',
    row3:  'Bez konceptu session',
    row4:  'Konzistentní sync / async API',
    row5:  'Nativní integrace Pydantic',
    row6:  'Validace dat za běhu',
    row7:  'Plná expresivita SQL',
    row8:  'Mechanismus deklarace schopností',
    row9:  'Transparentnost SQL <code>.to_sql()</code>',
    row10: 'Bez povinného nástroje pro migraci',
    row11: 'Minimální závislosti',
    row12: 'Explicitní definice vztahů'
  },

  gallery: {
    label: 'Galerie komponent · primitivy',
    title: 'Jak každé téma zachází s <em>UI primitivami</em>.',
    c_buttons: 'Tlačítka', c_btngroup: 'Skupina tlačítek', c_form: 'Ovládací prvky formuláře', c_radio: 'Radio skupina',
    c_multi: 'Seznam vícenásobného výběru', c_dropdown: 'Rozbalovací seznam', c_alerts: 'Upozornění',
    c_badges: 'Odznaky', c_progress: 'Postup', c_grid: 'Demo mřížky (12 sloupců)',
    c_rtl: 'Náhled RTL', c_table: 'Pruhovaná tabulka',
    form_email: 'E-mailová adresa', form_note: 'Poznámky', form_preload: 'Přednačtení', form_async: 'Async',
    radio_sync: 'Sync (synchronní režim)', radio_async: 'Async (asynchronní režim)', radio_both: 'Obojí (sdílené modely)',
    alert_info: '<b>Tip.</b> Backend SQLite je dodáván se základním balíčkem.',
    alert_success: '<b>Připraveno.</b> <code>User.configure(...)</code> zavoláno.',
    alert_warn: '<b>Pozor.</b> Okenní funkce vyžadují SQLite ≥ 3.25.',
    prog_coverage: 'Pokrytí testy', prog_backend: 'Dokončení backendu', prog_locale: 'Lokalizace dokumentace',
    backend_note: 'Stejný komponent jako horní ovládací panel.',
    multi1_t: 'PostgreSQL', multi1_d: 'Hlavní produkce', multi2_t: 'MySQL', multi2_d: 'Starší služby', multi3_t: 'SQLite', multi3_d: 'Testy &amp; prototypy'
  },

  album: {
    label: 'Galerie · knihovna',
    title: 'Učte se z <em>příkladů</em>.',
    a1: 'Váš první model', a2: 'Async s FastAPI', a3: 'has_many do hloubky',
    a4: 'Psaní backendu', a5: 'Automatická detekce N+1', a6: 'Vnořené transakce &amp; savepoint'
  },

  voices: {
    label: 'Hlasy · názory',
    title: 'Co <em>říkají</em>.',
    q1:      'S rhosocial-activerecord jsem se konečně přestal prát s ORM. Typové anotace jsou model — přesně tak.',
    q1_role: 'Backend Engineer · Kjóto',
    q2:      'Sync a async sdílí jedno API, refactor je skoro zadarmo. Migrace na FastAPI byly dva řádky.',
    q2_role: 'Staff Engineer · Berlín',
    q3:      'Napsal jsem DuckDB backend. Přečetl Backend ABC u oběda, odpoledne běžel v produkci. To je skutečná rozšiřitelnost.',
    q3_role: 'Data Platform · Singapur',
    q4:      'Každý krok řetězu má správnou inferenci typů v IDE. Pydantic použit tam, kde je potřeba.',
    q4_role: 'Senior Python · São Paulo',
    q5:      'Nula runtime závislostí je klíč. V embedded se už netrápíme velikostí SQLAlchemy.',
    q5_role: 'IoT inženýr · Šen-čen'
  },

  auth: {
    label: 'Auth · demo přihlášení',
    title: 'Přihlaste se do <em>rhosocial</em>.',
    welcome: 'Vítejte zpět', sub: 'Pokračujte se svým rhosocial účtem.',
    email: 'E-mail', password: 'Heslo', remember: 'Zapamatovat', forgot: 'Zapomněli jste heslo?',
    login: 'Přihlásit se', or: 'NEBO', github: 'Pokračovat s GitHub', twitter: 'Pokračovat s Twitter',
    no_account: 'Nemáte účet?', register: 'Registrace'
  },

  stats: {
    label: 'V číslech',
    title: 'Několik <em>čísel</em>.',
    s1: 'Dostupné DB dialekty',
    s2: 'Pokrytí typovými anotacemi',
    s3: 'Minimální Python',
    s4: 'Externí ORM závislosti',
    s5: 'Protokolů schopností',
    s6: 'MRO vrstev Backend'
  },

  install: {
    label: 'Začněte',
    title: 'Instalace na jeden řádek, <em>deset minut</em> do prvního dotazu.',
    sub: 'Publikováno na PyPI. Backend SQLite je zabudovaný; ostatní nainstalujete podle potřeby.',
    docs: 'Přečíst dokumentaci →'
  },

  split_sync: {
    label: 'Vedle sebe',
    title: 'Sync = async, <em>stejná sémantika</em>.',
    intro: 'Zaměňte <code>for</code> za <code>async for</code> — a je to. Inference typů prochází celým řetězcem.',
    cta: 'Přečíst průvodce async →'
  },

  split_backend: {
    label: 'Svoboda backendu',
    title: 'Napište vlastní <em>backend</em> za jedno odpoledne.',
    intro: 'Děděte z <code>Backend</code>, implementujte několik dialect hooků. DuckDB a libSQL jsou už ověřené.',
    cta: 'Průvodce vývojáře backendu →'
  },

  pricing: {
    label: 'Plány · ukázka',
    title: 'Vyberte si svůj <em>plán</em>.',
    intro: '(Ukázkové karty — samotný OSS projekt je navždy zdarma. Pricing karty jsou zobrazeny pro testování na každém tématu.)',
    badge: 'Nejpopulárnější',
    c1: {
      tier: 'Community', desc: 'Pro jednotlivé vývojáře a OSS přispěvatele. Plná funkcionalita, bez omezení.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'Plné API sync &amp; async', f3: 'Podpora na fóru komunity',
      f4: 'Dashboard pro týmovou spolupráci', f5: 'Záruka odpovědi SLA', cta: 'Začít'
    },
    c2: {
      tier: 'Team', desc: 'Rostoucí týmy. Enterprise backend a audit.',
      f1: 'Vše z Community', f2: 'Backendy MSSQL / Oracle', f3: 'Auditní log &amp; oddělení čtení/zápisu',
      f4: 'Soukromý Discord s prioritní podporou', f5: 'SSO / SAML', cta: 'Vyzkoušet 14 dní'
    },
    c3: {
      tier: 'Enterprise', desc: 'Velké organizace. On-prem, compliance, školení.',
      price_label: 'Kontaktujte nás',
      f1: 'Vše z Team', f2: 'Vlastní backendy (DuckDB / libSQL / interní)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA 4 hodiny', f5: 'Onsite školení a dedikovaná řešení', cta: 'Kontaktovat obchod'
    }
  }

});