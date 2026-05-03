/**
 * index/th-th.js — หน้าแรกระดับภาษาไทย (เฉพาะเนื้อหาที่หน้าแรก)
 *
 * ขึ้นอยู่กับ: assets/i18n/th-th.js ต้องโหลดก่อน (ให้ meta/brand/nav/control/footer/common)
 * ไฟล์นี้ใช้ Object.assign เพิ่ม key เฉพาะหน้าแรกใน window.I18N['th-th']
 */
window.I18N = window.I18N || {};
window.I18N['th-th'] = Object.assign(window.I18N['th-th'] || {}, {

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    eyebrow:       'v1.0 · Apache 2.0 · Pure Python',
    title:         'rhosocial ActiveRecord,<br><em>ออกแบบใหม่</em>สำหรับ Python',
    sub:           '<strong>rhosocial-activerecord</strong> กำหนดโมเดลด้วย type annotation ของ Python และสอบถามด้วยลูกโซ่ <code>query().where(...).all()</code> ทั้ง sync และ async ตั้งแต่วันแรก ไม่พึ่ง ORM ภายนอก — SQLite มาในตัว ฐานข้อมูลอื่นเป็นแพ็กเกจแยก เขียน backend เองได้ในไม่กี่สิบบรรทัด',
    cta_secondary: 'ดูฟีเจอร์ →'
  },

  /* ── 6-Feature การ์ด ───────────────────────────────────── */
  features: {
    label: 'ทำไม · สัญญา 6 ข้อ',
    title: 'ทำไมต้อง <em>rhosocial ActiveRecord</em>',
    f1: { num: '01 / ประเภท = ฟิลด์', title: '<em>Type-safe</em> ตั้งแต่ก่อสร้าง', desc: '<code>name: str</code> คือการเก็บ ตรวจสอบ และ IDE แนะนำในคำเดียว' },
    f2: { num: '02 / Async ชั้นหนึ่ง', title: 'Sync &amp; async, <em>API เดียวกัน</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> รูปแบบเหมือนกัน' },
    f3: { num: '03 / สลับได้', title: 'Backend <em>สลับได้</em>', desc: 'SQLite มาในตัว Postgres/MySQL/MSSQL/Oracle เป็นแพ็กเกจแยก หรือเขียนเอง' },
    f4: { num: '04 / ความสัมพันธ์ชัดเจน', title: '<em>Relations</em> ประกาศชัดเจน', desc: 'has_many / belongs_to ประกาศบนโมเดล ความสัมพันธ์เองก็เป็น <code>QuerySet</code>' },
    f5: { num: '05 / ธุรกรรมเป็นอะตอม', title: 'ธุรกรรม, <em>ซ้อนกันได้อย่างถูกต้อง</em>', desc: 'context manager + savepoint ข้อยกเว้นทำให้ rollback อัตโนมัติ' },
    f6: { num: '06 / Pythonic', title: 'อ่านเหมือน<em>ภาษาอังกฤษ</em>', desc: '<code>User.query().where(...).all()</code> — ไม่มี DSL เป็น Python เท่านั้น' }
  },

  /* ── Feature รายละเอียด section ─────────────────────────── */
  f1: {
    label: '01 / Type-safe',
    title: '<em>ประเภท = ฟิลด์</em> ตั้งแต่ 3.8 ถึง 3.12',
    intro: 'Python type annotation คือ model definition ไม่ต้องมี DSL额外的 Pydantic runtime validation, IDE type inference สมบูรณ์'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = Async</em> ความหมายเหมือนกัน',
    intro: 'Sync/Async ใช้ model definition ร่วมกัน <code>for</code> → <code>async for</code> โค้ดอื่นไม่ต้องเปลี่ยน'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backend สลับได้</em> เลือกตามใจ',
    intro: 'แพ็กเกจหลักขึ้นกับ Pydantic เท่านั้น SQLite มาในตัว ฐานข้อมูลอื่นเป็นแพ็กเกจแยก <code>configure()</code> สลับได้ทันที'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>ความสัมพันธ์ชัดเจน</em> ClassVar + descriptor',
    intro: 'ใช้ <code>ClassVar</code> ประกาศ relationship field หลีกเลี่ยง Pydantic scan ตอน runtime แทนที่ด้วย <code>relation()</code> อัตโนมัติ'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>ธุรกรรมอะตอม</em> ซ้อน savepoint ได้',
    intro: 'ธุรกรรมซ้อนสร้าง SAVEPOINT อัตโนมัติ context manager commit/rollback เอง ข้อยกเว้น rollback ไปจุดบันทึกล่าสุดอัตโนมัติ'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>อ่านเหมือนภาษาอังกฤษ</em> ไม่ต้องมี DSL',
    intro: 'chain ลื่นไหลเหมือนภาษาอังกฤษ <code>.to_sql()</code> ดู SQL ที่สร้างจริง'
  },

  /* ── Architecture · สามชั้น (Expression → Dialect → Backend) ── */
  arch: {
    label: 'Architecture · สามชั้น',
    title: '<em>Expression → Dialect → Backend</em> แยกหน้าที่ชัดเจน',
    intro: 'Query logic, SQL generation, database execution แยกชั้น Protocol (<code>@runtime_checkable</code>) ประกาศความสามารถที่ขอบเขต — backend ไม่รองรับ throw <code>UnsupportedFeatureError</code> ไม่ใช่ fail เงียบๆ',
    col1: {
      num:   'ชั้น Expression',
      title: '<em>รวบรวมความหมาย</em> ไม่มีรายละเอียด SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> delegate ให้ dialect generate SQL ielect object ใช้กับทุก dialect ได้ zero SQL hardcode'
    },
    col2: {
      num:   'ชั้น Dialect (33 protocol)',
      title: '<em>33 protocol</em> ประกาศขอบเขตความสามารถ',
      desc:  '<code>format_*()</code> method generate target database SQL สูตรตรวจ: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'ชั้น Backend (12 Mixin)',
      title: '<em>12 Mixin</em> MRO combination',
      desc:  'Template Method pattern: logic ไม่ใช่ I/O ใส่ Mixin ใช้ร่วม I/O แยก implement \\(n = 12\\) MRO layers zero โค้ดซ้ำ'
    }
  },

  /* ── Component Architecture · ActiveRecord + Backend สองชั้น ── */
  arch_comp: {
    label: 'Component Architecture',
    title: 'ActiveRecord + Backend, <em>สองชั้นแยกกัน</em>',
    intro: 'ActiveRecord คือ user ของ Backend; Backend ทำงานได้อิสระ Sync กับ Async คู่กัน ไม่ปนกัน',

    ar_badge: 'ชั้นแอป',
    ar_title: 'ActiveRecord',
    ar_desc:  'Model definition, query building, relation management, transaction handling ประกอบด้วย ActiveQuery, SetOperation, CTEQuery',

    be_badge: 'ชั้นอิสระ',
    be_title: 'Backend',
    be_desc:  'Database I/O layer ใช้โดยไม่ต้องมี ActiveRecord ก็ได้ SQLite มาในตัว ฐานข้อมูลอื่นเป็นแพ็กเกจแยก',

    uses_label:      'เรียกใช้',
    sync_async_note:  'Sync ↔ Sync · Async ↔ Async',
    pair_sync_note:   'คู่ sync ใช้กับ async ไม่ได้',
    pair_async_note:  'คู่ async ใช้กับ sync ไม่ได้',

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

    note1_title: 'อิสรงานกัน',
    note1_desc:  'Backend เปิด abstract base class (ABC) ชัดเจน ใช้ได้โดยไม่ต้องมี ActiveRecord เหมาะกับ script เบาหรือ embedded',
    note2_title: 'ขยายได้ตามต้องการ',
    note2_desc:  'SQLite มากับแพ็กเกจหลัก MySQL MariaDB PostgreSQL Oracle SQL Server เป็นแพ็กเกจแยก ติดตั้งตามต้องการ',
    note3_title: 'คู่ type-safe',
    note3_desc:  '<code>ActiveRecord</code> คู่กับ <code>StorageBackend</code>; <code>AsyncActiveRecord</code> คู่กับ <code>AsyncStorageBackend</code> ใช้ข้ามกันจะ error',

    /* ── D3 diagram: group labels ── */
    node_sync_group:  'Sync',
    node_async_group: 'Async',

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
    tip_ar_s:   'ActiveRecord sync สืบทอด class นี้ define model เรียก <code>.save()</code> <code>.query()</code> ทำงานกับ database',
    tip_ar_a:   'AsyncActiveRecord API สะท้อน sync ทุก method เป็น <code>async/await</code> เหมาะกับ FastAPI/asyncio',
    tip_aq_s:   'ActiveQuery (sync) chain build WHERE ORDER BY JOIN pagination สุดท้ายเรียก <code>.all()</code> <code>.one()</code> execute',
    tip_aq_a:   'AsyncActiveQuery (async) semantic เหมือน sync ทุก terminating method เป็น coroutine',
    tip_so_s:   'SetOperation (sync) รวมหลาย query ด้วย UNION INTERSECT EXCEPT return result set type เดียวกัน',
    tip_so_a:   'AsyncSetOperation (async) เหมือนกัน async execute',
    tip_cte_s:  'CTEQuery (sync) สร้าง CTE ด้วย WITH clause รองรับ recursive CTE',
    tip_cte_a:  'AsyncCTEQuery (async) เหมือนกัน async execute',
    tip_sb_s:   'StorageBackend abstract base class (sync) define database I/O interface ขั้นต่ำ: execute fetch transaction ใช้โดยไม่ต้องมี ActiveRecord',
    tip_sb_a:   'AsyncStorageBackend abstract base class (async) interface สะท้อน sync ทุก I/O method เป็น coroutine',
    tip_sqlite:  'SQLite backend มากับแพ็กเกจหลัก ใช้ได้ทันที เหมาะกับ dev test และ embedded',
    tip_ext:    'Backend แพ็กเกจ (sync): rhosocial-activerecord-mysql -postgres -oracle -sqlserver ติดตั้งตามต้องการ <code>configure()</code> สลับได้',
    tip_ext_a:  'Backend แพ็กเกจ (async): คู่กับ sync package ทุกตัว ให้ async/await สมบูรณ์'
  },

  /* ── Quick Taste ─────────────────────────────────────────── */
  qt: {
    label:        'Quick Taste · 30 วินาที',
    title:        'จากติดตั้งถึง<em>query แรก</em>ไม่เกิน 30 บรรทัด',
    btn_backends: 'เอกสาร backend เต็ม →',
    btn_ar:       'รายละเอียด ActiveRecord →',
    btn_practices:'实践 →'
  },

  /* ── Compare ─────────────────────────────────────────────── */
  compare: {
    label:       'Compare',
    title:       'เปรียบเทียบกับ Python ORM <em>อื่นๆ</em>',
    col_feature: 'คุณลักษณะ',
    row1:  'รูปแบบการออกแบบ',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend ใช้แยกอิสระ',
    row3:  'ไม่มีแนวคิด Session',
    row4:  'API sync / async สอดคล้องกัน',
    row5:  'การรวม Pydantic แบบ native',
    row6:  'การตรวจสอบข้อมูลขณะทำงาน',
    row7:  'พลัง SQL ครบถ้วน',
    row8:  'กลไกประกาศความสามารถ',
    row9:  'ความโปร่งใส SQL <code>.to_sql()</code>',
    row10: 'ไม่บังคับเครื่องมือย้ายข้อมูล',
    row11: 'การพึ่งพาขั้นต่ำ',
    row12: 'การกำหนดความสัมพันธ์ชัดเจน'
  },

  /* ── Voices ──────────────────────────────────────────────── */
  voices: {
    label: 'เสียง · ความคิดเห็น', title: 'สิ่งที่<em>พวกเขาพูด</em>',
    q1:      'ด้วย rhosocial-activerecord ผมเลิกต่อสู้กับ ORM ได้ทีสุด type annotation คือโมเดล นี่คือคำตอบ',
    q1_role: 'วิศวกร Backend · เกียวโต',
    q2:      'sync และ async ใช้ API เดียวกัน refactor แทบไม่เสียค่าใช้จ่าย ย้าย FastAPI แค่สองบรรทัด',
    q2_role: 'Staff Engineer · เบอร์ลิน',
    q3:      'ผมเขียน backend DuckDB เอง อ่าน Backend ABC ตอนกลางวัน บ่ายวันนั้นก็ขึ้น production นี่คือ extensibility ตัวจริง',
    q3_role: 'Data Platform · สิงคโปร์',
    q4:      'ทุกขั้นตอนของลูกโซ่มี type inference ถูกต้องใน IDE Pydantic ใช้ในที่ที่เหมาะสม',
    q4_role: 'Senior Python · เซาเปาโล',
    q5:      'Zero runtime dependency คือหัวใจ งาน embedded ไม่ต้องทนขนาด SQLAlchemy อีกต่อไป',
    q5_role: 'วิศวกร IoT · เซิ้นเจิ้น'
  },

  /* ── Stats ───────────────────────────────────────────────── */
  stats: {
    label: 'By the numbers',
    title: 'บาง<em>ตัวเลข</em>',
    s1: 'dialect ฐานข้อมูลที่ใช้ได้',
    s2: 'อัตราครอบคลุม type annotation',
    s3: 'เวอร์ชัน Python ขั้นต่ำ',
    s4: 'dependency ORM ภายนอก',
    s5: 'protocol ความสามารถ',
    s6: 'MRO layers ของ backend'

  },

  /* ── Install ─────────────────────────────────────────── */
  install: {
    label:     'Get started',
    title:     'ติดตั้งหนึ่งบรรทัด, <em>สิบนาที</em>เริ่มได้',
    sub:       'เผยแพร่บน PyPI backend SQLite มาในตัว อื่นติดตั้งตามต้องการ',

    docs:      'อ่านเอกสาร →',
    practices: '实践 →'
  }

});