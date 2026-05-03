/**
 * index/vi-vn.js — Từ điển cấp trang chủ tiếng Việt (chỉ nội dung dành riêng cho trang chủ)
 *
 * Phụ thuộc: assets/i18n/vi-vn.js phải được tải trước (cung cấp meta/brand/nav/control/footer/common)
 * File này sử dụng Object.assign để thêm key cho trang chủ vào window.I18N['vi-vn']
 */
window.I18N = window.I18N || {};
window.I18N['vi-vn'] = Object.assign(window.I18N['vi-vn'] || {}, {

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    eyebrow:       'v1.0 · Apache 2.0 · Pure Python',
    title:         'rhosocial ActiveRecord,<br>được <em>thiết kế lại</em> cho Python.',
    sub:           '<strong>rhosocial-activerecord</strong> định nghĩa mô hình bằng chú thích kiểu gốc của Python và truy vấn chúng bằng chuỗi <code>query().where(...).all()</code>. Đồng bộ và bất đồng bộ từ ngày đầu. Không phụ thuộc ORM bên ngoài — SQLite được tích hợp sẵn, các cơ sở dữ liệu khác là các gói riêng, và bạn có thể tự viết backend trong vài chục dòng.',
    cta_secondary: 'Xem tính năng →'
  },

  /* ── 6-Feature thẻ ─────────────────────────────────────── */
  features: {
    label: 'Vì sao · sáu cam kết cốt lõi',
    title: 'Vì sao <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Kiểu = trường',         title: '<em>An toàn kiểu</em> từ gốc',                     desc: 'Một trường chỉ là <code>name: str</code> — lưu trữ, xác thực và gợi ý IDE gộp làm một.' },
    f2: { num: '02 / Async là công dân bậc nhất', title: 'Sync &amp; async, <em>một API</em>',            desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code>, hình dạng giống hệt.' },
    f3: { num: '03 / Backend có thể thay',   title: 'Backend <em>có thể cắm vào</em>',                 desc: 'SQLite tích hợp; Postgres/MySQL/MSSQL/Oracle là các gói riêng; hoặc viết của riêng bạn.' },
    f4: { num: '04 / Quan hệ tường minh',    title: '<em>Quan hệ</em> được khai báo rõ ràng',           desc: 'has_many / belongs_to khai báo trên model; các quan hệ tự thân là <code>QuerySet</code>.' },
    f5: { num: '05 / Giao dịch nguyên tử',   title: 'Giao dịch, <em>lồng nhau đúng cách</em>',          desc: 'Context manager và savepoints; ngoại lệ tự rollback sạch sẽ.' },
    f6: { num: '06 / Pythonic',              title: 'Đọc như <em>tiếng Anh</em>',                      desc: '<code>User.query().where(...).all()</code> — không DSL, chỉ là Python.' }
  },

  /* ── Feature chi tiết section ─────────────────────────────── */
  f1: {
    label: '01 / Type-safe',
    title: '<em>Kiểu = Trường</em>, từ 3.8 đến 3.12.',
    intro: 'Chú thích kiểu Python là định nghĩa model. Không cần DSL riêng. Pydantic runtime validation, type inference đầy đủ trong IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = Async</em>, ngữ nghĩa giống nhau.',
    intro: 'Sync/Async dùng chung định nghĩa model. <code>for</code> → <code>async for</code>, code khác không đổi.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backend có thể thay</em>, chọn theo nhu cầu.',
    intro: 'Gói lõi chỉ phụ thuộc Pydantic. SQLite tích hợp; các DB khác là gói riêng, <code>configure()</code> chuyển đổi được.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Quan hệ rõ ràng</em>, ClassVar + descriptor.',
    intro: 'Dùng <code>ClassVar</code> khai báo trường quan hệ, tránh Pydantic scan. Runtime tự thay bằng <code>relation()</code>.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Giao dịch nguyên tử</em>, lồng savepoint.',
    intro: 'Giao dịch lồng tự tạo SAVEPOINT. Context manager tự commit/rollback, ngoại lệ tự về điểm lưu gần nhất.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Đọc như tiếng Anh</em>, không cần DSL.',
    intro: 'Chain mượt như tiếng Anh. Xem SQL thực qua <code>.to_sql()</code>.'
  },

  /* ── Architecture · ba lớp (Expression → Dialect → Backend) ── */
  arch: {
    label: 'Architecture · ba lớp',
    title: '<em>Expression → Dialect → Backend</em>, chia rõ trách nhiệm.',
    intro: 'Logic truy vấn, sinh SQL, thực thi DB tách thành ba lớp. Protocol (<code>@runtime_checkable</code>) khai báo khả năng tại ranh giới — backend không hỗ trợ thì ném <code>UnsupportedFeatureError</code>, không fail âm thầm.',
    col1: {
      num:   'Lớp Expression',
      title: '<em>Thu thập ngữ nghĩa</em>, không chi tiết SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> ủy thác cho dialect sinh SQL. Cùng object expression dùng lại được cho mọi dialect, zero SQL hardcode.'
    },
    col2: {
      num:   'Lớp Dialect (33 protocol)',
      title: '<em>33 protocol</em> khai báo giới hạn khả năng',
      desc:  '<code>format_*()</code> methods sinh SQL cho DB đích. Công thức kiểm tra: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Lớp Backend (12 Mixin)',
      title: '<em>12 Mixin</em> kết hợp MRO',
      desc:  'Template Method pattern: logic không-I/O trong Mixin dùng chung, I/O implement riêng. \\(n = 12\\) lớp MRO, zero code trùng lặp.'
    }
  },

  /* ── Component Architecture · ActiveRecord + Backend hai lớp ── */
  arch_comp: {
    label: 'Kiến trúc thành phần',
    title: 'ActiveRecord + Backend, <em>hai lớp độc lập</em>.',
    intro: 'ActiveRecord là người dùng Backend; Backend có thể hoạt động độc lập. Sync và Async ghép cặp với nhau, không pha trộn.',

    ar_badge: 'Lớp ứng dụng',
    ar_title: 'ActiveRecord',
    ar_desc:  'Định nghĩa model, xây dựng truy vấn, quản lý quan hệ, xử lý giao dịch. Bao gồm ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Lớp độc lập',
    be_title: 'Backend',
    be_desc:  'Lớp I/O database, có thể dùng mà không cần ActiveRecord. SQLite tích hợp, các DB khác là gói riêng.',

    uses_label:      'Gọi',
    sync_async_note:  'Sync ↔ Sync · Async ↔ Async',
    pair_sync_note:   'Cặp sync, không dùng với async',
    pair_async_note:  'Cặp async, không dùng với sync',

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

    note1_title: 'Độc lập',
    note1_desc:  'Backend exposing ABC rõ ràng, có thể dùng không cần ActiveRecord, phù hợp script nhẹ hoặc embedded.',
    note2_title: 'Mở rộng theo nhu cầu',
    note2_desc:  'SQLite đi với gói lõi; MySQL MariaDB PostgreSQL Oracle SQL Server là gói riêng, cài theo nhu cầu.',
    note3_title: 'Ghép cặp type-safe',
    note3_desc:  '<code>ActiveRecord</code> ghép với <code>StorageBackend</code>; <code>AsyncActiveRecord</code> ghép với <code>AsyncStorageBackend</code>. Dùng chéo sẽ gây lỗi kiểu.',

    /* ── D3 diagram: group labels ── */
    node_sync_group:  'Đồng bộ',
    node_async_group: 'Bất đồng bộ',

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
    node_ext:    'MySQL · PostgreSQL · SQL Server',
    node_ext_a:  'AsyncMySQL · AsyncPostgreSQL · …',

    /* ── D3 diagram: tooltip descriptions ── */
    tip_ar_s:   'ActiveRecord đồng bộ. Kế thừa class này để định nghĩa model, gọi sync methods <code>.save()</code>, <code>.query()</code> để làm việc với DB.',
    tip_ar_a:   'AsyncActiveRecord. API phản chiếu hoàn toàn phiên bản sync, tất cả methods là <code>async/await</code>, phù hợp FastAPI/asyncio.',
    tip_aq_s:   'ActiveQuery (đồng bộ). Chain build WHERE ORDER BY JOIN pagination... cuối gọi <code>.all()</code> / <code>.one()</code> để execute.',
    tip_aq_a:   'AsyncActiveQuery (bất đồng bộ). Ngữ nghĩa giống phiên bản sync, tất cả terminating methods là coroutine.',
    tip_so_s:   'SetOperation (đồng bộ). Kết hợp nhiều query với UNION / INTERSECT / EXCEPT, trả về result set cùng kiểu.',
    tip_so_a:   'AsyncSetOperation (bất đồng bộ). Tương tự, async execute.',
    tip_cte_s:  'CTEQuery (đồng bộ). Tạo CTE bằng WITH clause, hỗ trợ recursive CTE.',
    tip_cte_a:  'AsyncCTEQuery (bất đồng bộ). Tương tự, async execute.',
    tip_sb_s:   'StorageBackend abstract base class (đồng bộ). Định nghĩa interface I/O DB tối thiểu: execute / fetch / transaction. Có thể dùng không cần ActiveRecord.',
    tip_sb_a:   'AsyncStorageBackend abstract base class (bất đồng bộ). Interface phản chiếu phiên bản sync, tất cả I/O methods là coroutine.',
    tip_sqlite:  'SQLite backend, đi với gói lõi. Sẵn sàng sử dụng với config zero, phù hợp dev/test/embedded.',
    tip_ext:    'Backend packages (đồng bộ): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver. Cài theo nhu cầu qua pip, <code>configure()</code> chuyển đổi.',
    tip_ext_a:  'Backend packages (bất đồng bộ): tương ứng 1-1 với packages sync, hỗ trợ đầy đủ async/await.'
  },

  /* ── Quick Taste ─────────────────────────────────────────── */
  qt: {
    label:        'Quick Taste · 30 giây',
    title:        'Từ cài đặt đến <em>query đầu tiên</em> không quá 30 dòng',
    btn_backends: 'Docs backend đầy đủ →',
    btn_ar:       'Chi tiết ActiveRecord →',
    btn_practices:'Scenario thực hành →'
  },

  /* ── Compare ─────────────────────────────────────────────── */
  compare: {
    label:       'So sánh',
    title:       'So sánh với các Python <em>ORM</em> khác.',
    col_feature: 'Tính năng',
    row1:  'Mẫu thiết kế',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend dùng độc lập',
    row3:  'Không khái niệm session',
    row4:  'API sync / async nhất quán',
    row5:  'Tích hợp Pydantic native',
    row6:  'Xác thực dữ liệu runtime',
    row7:  'Khả năng biểu đạt SQL đầy đủ',
    row8:  'Khai báo khả năng',
    row9:  'Minh bạch SQL <code>.to_sql()</code>',
    row10: 'Không công cụ di chuyển bắt buộc',
    row11: 'Phụ thuộc tối thiểu',
    row12: 'Định nghĩa quan hệ rõ ràng'
  },

  /* ── Voices ──────────────────────────────────────────────── */
  voices: {
    label: 'Tiếng nói · nhận xét', title: 'Họ <em>nói vậy</em>.',
    q1:      'Nhờ rhosocial-activerecord, cuối cùng tôi không còn vật lộn với ORM. Chú thích kiểu chính là mô hình — đúng y như vậy.',
    q1_role: 'Backend Engineer · Kyoto',
    q2:      'Sync và async dùng chung một API, refactor gần như miễn phí. Di chuyển dự án FastAPI của tôi chỉ tốn hai dòng.',
    q2_role: 'Staff Engineer · Berlin',
    q3:      'Tôi tự viết backend DuckDB. Đọc Backend ABC lúc ăn trưa, chiều đã chạy production. Đây mới là khả năng mở rộng thực sự.',
    q3_role: 'Data Platform · Singapore',
    q4:      'Mỗi bước của chuỗi đều được suy luận đúng kiểu trong IDE. Pydantic, được dùng đúng chỗ.',
    q4_role: 'Senior Python · São Paulo',
    q5:      'Không phụ thuộc runtime là then chốt. Với triển khai nhúng, chúng tôi không còn lo về kích thước SQLAlchemy nữa.',
    q5_role: 'Kỹ sư IoT · Thâm Quyến'
  },

/* ── Stats ───────────────────────────────────────────────── */
  stats: {
    label: 'By the numbers',
    title: 'Vài <em>con số</em>.',
    s1: 'Phương ngữ DB khả dụng',
    s2: 'Độ phủ chú thích kiểu',
    s3: 'Python tối thiểu',
    s4: 'Phụ thuộc ORM bên ngoài',
    s5: 'Protocol khả năng',
    s6: 'Lớp MRO Backend'
  },

  /* ── Install ─────────────────────────────────────────────── */
  install: {
    label:     'Bắt đầu',
    title:     'Cài đặt một dòng, <em>mười phút</em> đến truy vấn đầu tiên.',
    sub:       'Đã phát hành trên PyPI. Backend SQLite đi cùng gói lõi; các backend khác cài theo nhu cầu.',
    docs:      'Đọc tài liệu →',
    practices: 'Scenario thực hành →'
  },

  // Padding to match en-us.js line count
  _pad1: ''
});