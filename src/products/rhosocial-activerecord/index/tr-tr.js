/**
 * index/tr-tr.js — Türkçe ana sayfa düzeyinde sözlük (sadece ana sayfaya özel içerik)
 *
 * Bağımlılık: assets/i18n/tr-tr.js önce yüklenmeli (meta/brand/nav/control/footer/common sağlar)
 * Bu dosya, window.I18N['tr-tr']'e sayfa anahtar eklemek için Object.assign kullanır
 */
window.I18N = window.I18N || {};
window.I18N['tr-tr'] = Object.assign(window.I18N['tr-tr'] || {}, {

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    eyebrow:       'v1.0 · Apache 2.0 · Pure Python',
    title:         'rhosocial ActiveRecord,<br>Python için <em>yeniden tasarlandı</em>.',
    sub:           '<strong>rhosocial-activerecord</strong> modelleri Python\'un yerel tip açıklamalarıyla tanımlar ve bunları <code>query().where(...).all()</code> zinciriyle sorgular. Senkron ve asenkron ilk günden itibaren. Harici ORM bağımlılığı yok — SQLite yerleşik gelir, diğer veritabanları ayrı paketlerdir ve kendi arka ucunuzu birkaç düzine satırla yazabilirsiniz.',
    cta_secondary: 'Özellikleri gör →'
  },

  /* ── 6-Feature kartı ─────────────────────────────────────── */
  features: {
    label: 'Neden · altı temel söz',
    title: 'Neden <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Tip = alan',            title: 'Doğası gereği <em>tip güvenli</em>',             desc: 'Bir alan sadece <code>name: str</code> — depolama, doğrulama ve IDE tamamlama bir arada.' },
    f2: { num: '02 / Asenkron birinci sınıf', title: 'Sync &amp; async, <em>tek API</em>',             desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code>, aynı biçim.' },
    f3: { num: '03 / Değiştirilebilir arka uç', title: 'Takılabilir <em>arka uçlar</em>',              desc: 'SQLite yerleşik; Postgres/MySQL/MSSQL/Oracle ayrı paket; kendi arka ucunuzu da yazın.' },
    f4: { num: '04 / Açık ilişkiler',        title: '<em>İlişkiler</em> açıkça belirtilir',            desc: 'has_many / belongs_to modelde bildirilir; ilişkilerin kendisi <code>QuerySet</code>.' },
    f5: { num: '05 / Atomik işlemler',       title: 'İşlemler, <em>düzgün iç içe</em>',                desc: 'Bağlam yöneticisi + savepoint; istisna geri alımla temizlenir.' },
    f6: { num: '06 / Pythonic',             title: '<em>İngilizce</em> gibi okunur',                   desc: '<code>User.query().where(...).all()</code> — DSL yok, sadece Python.' }
  },

  /* ── Feature detay section ──────────────────────────────── */
  f1: {
    label: '01 / Type-safe',
    title: '<em>Tip = Alan</em>, 3.8\'den 3.12\'ye.',
    intro: 'Python tip açıklaması model tanımıdır. Ek DSL gerekmez. Pydantic çalışma zamanı doğrulama, IDE tip çıkarımı tam.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = Async</em>, anlam aynı.',
    intro: 'Sync/Async aynı model tanımını paylaşır. <code>for</code> → <code>async for</code>, diğer kod değişmez.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Arka uç değiştirilebilir</em>, ihtiyaca göre.',
    intro: 'Çekirdek paket sadece Pydantic\'e bağlıdır. SQLite yerleşik gelir; diğer veritabanları ayrı paketlerdir, <code>configure()</code> ile geçiş yapılır.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>İlişkiler açık</em>, ClassVar + descriptor.',
    intro: 'İlişki alanlarını bildirmek için <code>ClassVar</code> kullanın, Pydantic taramasından kaçının. Çalışma zamanında otomatik <code>relation()</code> ile değiştirilir.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Atomik işlemler</em>, iç içe savepoint.',
    intro: 'İç içe işlemler otomatik SAVEPOINT oluşturur. Bağlam yöneticisi otomatik commit/rollback yapar, istisnalar otomatik en son kaydedilen noktaya döner.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>İngilizce gibi okunur</em>, DSL gerekmez.',
    intro: 'Zincirleme çağrılar akıcı İngilizce gibi okunur. Oluşturulan gerçek SQL\'i görmek için <code>.to_sql()</code> kullanın.'
  },

  /* ── Architecture · Üç katman (Expression → Dialect → Backend) ── */
  arch: {
    label: 'Architecture · Üç katman',
    title: '<em>Expression → Dialect → Backend</em>, sorumluluklar ayrı.',
    intro: 'Sorgu mantığı, SQL üretimi, veritabanı yürütme üç katmana ayrılmıştır. Protokol (<code>@runtime_checkable</code>) sınırlarda yetenekleri bildirir — arka uç desteklemezse <code>UnsupportedFeatureError</code> fırlatır, sessiz başarısızlık değil.',
    col1: {
      num:   'Expression katmanı',
      title: '<em>Anlam toplama</em>, SQL detaysız',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> SQL oluşturması için dialect\'e devreder. Aynı ifade nesnesi tüm dialect\'lerde yeniden kullanılabilir, sıfır SQL hardcode.'
    },
    col2: {
      num:   'Dialect katmanı (33 protokol)',
      title: '<em>33 protokol</em> yetenek sınırları bildirir',
      desc:  '<code>format_*()</code> yöntemleri hedef veritabanı SQL oluşturur. Yetenek formülü: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Backend katmanı (12 Mixin)',
      title: '<em>12 Mixin</em> MRO kombinasyonu',
      desc:  'Template Method pattern: I/O olmayan mantık paylaşılır, I/O ayrı implement edilir. \\(n = 12\\) MRO katmanları sıfır tekrarlanan kod.'
    }
  },

  /* ── Component Architecture · ActiveRecord + Backend iki katman ── */
  arch_comp: {
    label: 'Bileşen Mimarisi',
    title: 'ActiveRecord + Backend, <em>iki katman bağımsız</em>.',
    intro: 'ActiveRecord, Backend\'in kullanıcısıdır; Backend bağımsız çalışabilir. Senkron ile asenkron eşleşir, karışmaz.',

    ar_badge: 'Uygulama katmanı',
    ar_title: 'ActiveRecord',
    ar_desc:  'Model tanımı, sorgu oluşturma, ilişki yönetimi, işlem işleme. ActiveQuery, SetOperation, CTEQuery\'yi içerir.',

    be_badge: 'Bağımsız katman',
    be_title: 'Backend',
    be_desc:  'Veritabanı I/O katmanı, ActiveRecord olmadan kullanılabilir. SQLite yerleşik, diğer veritabanları ayrı paketlerdir.',

    uses_label:      'Kullanır',
    sync_async_note:  'Sync ↔ Sync · Async ↔ Async',
    pair_sync_note:   'Eşleşme sync, async ile karıştırılamaz',
    pair_async_note:  'Eşleşme async, sync ile karıştırılamaz',

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

    note1_title: 'Bağımsız',
    note1_desc:  'Backend net ABC (Abstract Base Class) açığa çıkarır, ActiveRecord olmadan kullanılabilir, hafif script veya embedded senaryolar için uygun.',
    note2_title: 'İhtiyaca göre genişletilebilir',
    note2_desc:  'SQLite çekirdek paketle birlikte gelir; MySQL MariaDB PostgreSQL Oracle SQL Server ayrı paketler olarak sunulur.',
    note3_title: 'Type-safe eşleşme',
    note3_desc:  '<code>ActiveRecord</code>, <code>StorageBackend</code> ile eşleşir; <code>AsyncActiveRecord</code>, <code>AsyncStorageBackend</code> ile eşleşir. Çapraz kullanım tip hatası tetikler.',

    /* ── D3 diagram: group labels ── */
    node_sync_group:  'Senkron',
    node_async_group: 'Asenkron',

    /* ── D3 diagram: node display labels ── */
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

    /* ── D3 diagram: tooltip descriptions ── */
    tip_ar_s:   'Senkron ActiveRecord. Model tanımlamak için bu sınıftan türetin, veritabanı işlemleri için <code>.save()</code>, <code>.query()</code> vb. senkron yöntemleri çağırın.',
    tip_ar_a:   'Asenkron ActiveRecord. API senkron versiyonun tam yansıması, tüm yöntemler <code>async/await</code>, FastAPI/asyncio senaryolarına uygun.',
    tip_aq_s:   'ActiveQuery (senkron). WHERE, ORDER BY, JOIN, sayfalandırma vb. koşulları zincirle oluşturur, sonunda <code>.all()</code> / <code>.first()</code> yürütür.',
    tip_aq_a:   'AsyncActiveQuery (asenkron). Anlam senkron versiyonla aynı, tüm sonlandırıcı yöntemler coroutine.',
    tip_so_s:   'SetOperation (senkron). Birden fazla sorguyu UNION / INTERSECT / EXCEPT ile birleştirir, tek tip sonuç kümesi döndürür.',
    tip_so_a:   'AsyncSetOperation (asenkron). Aynı, asenkron yürütür.',
    tip_cte_s:  'CTEQuery (senkron). WITH yan tümcesiyle Ortak Tablo İfadesi (CTE) oluşturur, rekürsif CTE destekler.',
    tip_cte_a:  'AsyncCTEQuery (asenkron). Aynı, asenkron yürütür.',
    tip_sb_s:   'StorageBackend soyut temel sınıfı (senkron). Veritabanı I/O minimum arayüzünü tanımlar: execute / fetch / transaction. ActiveRecord olmadan kullanılabilir.',
    tip_sb_a:   'AsyncStorageBackend soyut temel sınıfı (asenkron). Arayüz senkron versiyonun yansıması, tüm I/O yöntemleri coroutine.',
    tip_sqlite:  'SQLite arka ucu, çekirdek paketle birlikte gelir. Sıfır yapılandırma ile kullanıma hazır, geliştirme/test/embedded senaryolarına uygun.',
    tip_ext:    'Arka uç paketleri (senkron): rhosocial-activerecord-mysql, -postgresql, -oracle, -sqlserver. İhtiyaca göre pip kurulum, tek satır <code>configure()</code> ile geçiş.',
    tip_ext_a:  'Arka uç paketleri (asenkron): Senkron paketlerin birebir karşılığı, tam async/await desteği sağlar.'
  },

  /* ── Quick Taste ─────────────────────────────────────────── */
  qt: {
    label:        'Quick Taste · 30 saniye',
    title:        'Kurulumdan <em>ilk sorguya</em> 30 satırı geçmez',
    btn_backends: 'Tam arka uç belgeleri →',
    btn_ar:       'ActiveRecord ayrıntıları →',
    btn_practices:'Pratik senaryolar →'
  },

  /* ── Compare ─────────────────────────────────────────────── */
  compare: {
    label:       'Karşılaştır',
    title:       'Diğer Python ORM\'leriyle <em>karşılaştırma</em>.',
    col_feature: 'Özellik',
    row1:  'Tasarım deseni',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend bağımsız kullanılabilir',
    row3:  'Session kavramı yok',
    row4:  'Tutarlı sync / async API',
    row5:  'Yerel Pydantic entegrasyonu',
    row6:  'Çalışma zamanı veri doğrulama',
    row7:  'Tam SQL ifade gücü',
    row8:  'Kapasite bildirimi',
    row9:  'SQL şeffaflığı <code>.to_sql()</code>',
    row10: 'Zorunlu geçiş aracı yok',
    row11: 'Minimum bağımlılık',
    row12: 'Açık ilişki tanımı'
  },

  /* ── Voices ──────────────────────────────────────────────── */
  voices: {
    label: 'Sesler · referanslar', title: 'Onların <em>dediği</em>.',
    q1:      'rhosocial-activerecord sayesinde sonunda ORM ile kavga etmiyorum. Tip açıklamaları modelin kendisi — tam yerinde.',
    q1_role: 'Backend Engineer · Kyoto',
    q2:      'Sync ve async tek API paylaşıyor, yeniden düzenleme neredeyse bedava. FastAPI projemi taşımak iki satır oldu.',
    q2_role: 'Staff Engineer · Berlin',
    q3:      'Kendi DuckDB arka ucumu yazdım. Backend ABC\'yi öğle yemeğinde okudum, öğleden sonra yayındaydı. Gerçek genişletilebilirlik.',
    q3_role: 'Data Platform · Singapur',
    q4:      'Zincirin her adımı IDE\'de doğru tip çıkarımına sahip. Pydantic, doğru yerde kullanılmış.',
    q4_role: 'Senior Python · São Paulo',
    q5:      'Sıfır çalışma zamanı bağımlılığı anahtar. Gömülü dağıtımlarda SQLAlchemy boyutundan artık endişelenmiyoruz.',
    q5_role: 'IoT Mühendisi · Shenzhen'
  },

  /* ── Stats ───────────────────────────────────────────────── */
  stats: {
    label: 'By the numbers',
    title: 'Birkaç <em>sayı</em>.',
    s1: 'Kullanılabilir DB dialectleri',
    s2: 'Tip açıklaması kapsamı',
    s3: 'Minimum Python sürümü',
    s4: 'Harici ORM bağımlılığı',
    s5: 'Capability protokolleri',
    s6: 'Backend MRO katmanları'

  },

  /* ── Install ─────────────────────────────────────────── */
  install: {
    label:     'Başlayın',
    title:     'Tek satırda kurulum, <em>on dakika</em>da ilk sorguya.',
    sub:       'PyPI\'de yayımlandı. SQLite arka ucu çekirdek pakette gelir; diğerleri talep üzerine kurulur.',

    docs:      'Belgeleri oku →',
    practices: 'Pratik senaryolar →'
  }

});