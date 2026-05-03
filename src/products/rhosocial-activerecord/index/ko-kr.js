/**
 * index/ko-kr.js — 首页韩语词典
 *
 * 依赖：assets/i18n/ko-kr.js 必须先加载。
 * 本文件通过 Object.assign 向已有的 window.I18N['ko-kr'] 追加首页特有 key。
 */
window.I18N = window.I18N || {};
window.I18N['ko-kr'] = Object.assign(window.I18N['ko-kr'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord、<br><em>Python 용으로 재설계</em>。',
    sub: '<strong>rhosocial-activerecord</strong>는 네이티브 Python 타입 어노테이션으로 모델을 정의하고 <code>query().where(...).all()</code> 체인으로 쿼리합니다. Sync와 Async가 기본 제공. 외부 ORM 의존 없음 — SQLite 기본 내장, 다른 데이터베이스는 별도 패키지, 커스텀 백엔드는 수십 줄로 작성 가능. ',
    cta_secondary: '기능 보기 →'
  },

  features: {
    label: '왜 · 6가지 핵심 약속',
    title: '왜 <em>rhosocial ActiveRecord</em>인가.',
    f1: { num: '01 / 타입 = 필드', title: '구성부터 <em>타입 세이프</em>', desc: '<code>name: str</code> — 스토리지, 유효성 검사, IDE 자동완성 하나의 것으로. ' },
    f2: { num: '02 / Async 일등급', title: 'Sync &amp; Async, <em>하나의 API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — 동일한 형태. ' },
    f3: { num: '03 / 플러그가능 백엔드', title: '<em>교체 가능한 백엔드</em>', desc: 'SQLite 기본 내장; Postgres/MySQL/MSSQL/Oracle은 별도 패키지; 커스텀 też 작성 가능. ' },
    f4: { num: '04 / 명시적 관계', title: '<em>관계</em>를 명시적으로', desc: 'has_many / belongs_to는 모델에 선언; 관계는<code>QuerySet</code>. ' },
    f5: { num: '05 / 원자 트랜잭션', title: '트랜잭션, <em>適切に 중첩</em>', desc: '컨텍스트 매니저 + 세이브포인트; 예외는 롤백. ' },
    f6: { num: '06 / Pythonic', title: '<em>영어</em>처럼 읽힘', desc: '<code>User.query().where(...).all()</code> — DSL 없음, Python만. ' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>타임 = 필드</em>, 3.8에서 3.12로.',
    intro: 'Python 타입 어노테이션은 모델 정의 자체, 추가 DSL 없음. Pydantic 런타임 유효성 검사, IDE에서 완전한 타입 추론. '
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, 같은 시맨틱스.',
    intro: 'Sync와 Async는 같은 모델 정의를 공유. <code>for</code> → <code>async for</code>, 나머지는 같음. '
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>교체 가능한 백엔드</em>, 필요한 것만.',
    intro: '코어 패키지는 Pydantic에만 의존. SQLite 기본 내장, 다른 데이터베이스는 별도 패키지, <code>configure()</code> 한 줄. '
  },
  f4: {
    label: '04 / Relations',
    title: '<em>명시적 관계</em>, ClassVar + 디스크립터.',
    intro: '관계 필드를 선언하려면 <code>ClassVar</code>를 사용, Pydantic 스캔 회피. 런타임에서 자동<code>relation()</code>으로 교체. '
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>원자 트랜잭션</em>, 중첩된 세이브포인트.',
    intro: '중첩된 트랜잭션은 자동으로 SAVEPOINT 생성. 컨텍스트 매니저는 자동 커밋/롤백, 예외는 자동으로 마지막 세이브포인트로 롤백. '
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>영어처럼 읽힘</em>, DSL 없음.',
    intro: '체인 호출, 영어처럼 부드럽게 읽힘. <code>.to_sql()</code>로 생성된 SQL 확인. '
  },

  practice: {
    label: '실전 · 실제 코드',
    title: '3.8에서 3.12로, <em>스텝 바이 스텝</em>.',
    intro: 'testsuit 저장소 <code>models_py38.py</code> … <code>models_py312.py</code> 파일과 일치. ',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> 대신 <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> 대신 <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: <code>Self</code> 타입 (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code>와 PEP 695 제네릭 <code>class Result[T]:</code>.'
  },

  arch: {
    label: '아키텍처 · 3 Layers',
    title: '<em>Expression → Dialect → Backend</em>, 명확한 책임 분리.',
    intro: '쿼리 로직, SQL 생성, 데이터베이스 실행의 분리. 프로토콜(<code>@runtime_checkable</code>)이 경계에서 캡abilities를 선언 — 지원되지 않는 기능은<code>UnsupportedFeatureError</code>를 발생, 조용한 실패 없음.',
    col1: {
      num: 'Expression Layer',
      title: '<em>시맨틱 컬렉션</em>, SQL 상세 없음',
      desc: '<code>BaseExpression.to_sql(dialect)</code>가 대상 Dialect에 SQL 생성을 위임. 하나의 Expression 객체는 모든 Dialect에서 재사용, 하드코딩 SQL 제로. '
    },
    col2: {
      num: 'Dialect Layer (33 Protocols)',
      title: '<em>33 프로토콜</em>이 캡ABILITY 경계를 선언',
      desc: '<code>format_*()</code> 메서드가 대상 데이터베이스의 SQL을 생성. 캡ABILITY 감지 공식: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num: 'Backend Layer (12 Mixins)',
      title: '<em>12 Mixins</em> MRO 조합',
      desc: 'Template Method 패턴: 비 I/O 로직은 공통 Mixin, I/O 로직은 별도. \\(n = 12\\) MRO 레이어 조합, 코드 반복 제로. '
    }
  },

  arch_comp: {
    label: '컴포넌트 아키텍처',
    title: 'ActiveRecord + Backend, <em>두 개의 독립적인 레이어</em>.',
    intro: 'ActiveRecord는 Backend의 사용자; Backend는 독립적으로 동작 가능. Sync와 Async는 페어링되지만 교환 불가.',

    ar_badge: 'Application Layer',
    ar_title: 'ActiveRecord',
    ar_desc: '모델 정의, 쿼리 빌딩, 관계 관리, 트랜잭션 핸들링. ActiveQuery, SetOperation, CTQuery 포함.',

    be_badge: 'Independent Layer',
    be_title: 'Backend',
    be_desc: '데이터베이스 I/O 레이어, ActiveRecord 없이 사용 가능. SQLite 기본 내장, 다른 데이터베이스는 확장 패키지.',

    uses_label: '사용',
    sync_async_note: 'sync ↔ sync · async ↔ async',
    pair_sync_note: 'Sync 페어링 — async와 혼합 금지',
    pair_async_note: 'Async 페어링 — sync와 혼합 금지',

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

    tip_ar_s: 'Sync ActiveRecord. 이 클래스를 상속하여 모델을 정의하고 <code>.save()</code>, <code>.query()</code> 등의 Sync 메서드를 호출.',
    tip_ar_a: 'Async ActiveRecord. API는 Sync 버전의 미러, 모든 메서드는 <code>async/await</code>, FastAPI / asyncio 용.',
    tip_aq_s: 'ActiveQuery (sync). WHERE, ORDER BY, JOIN, 페지네이션 체인 빌딩, 마지막에 <code>.all()</code> / <code>.first()</code>로 실행.',
    tip_aq_a: 'AsyncActiveQuery (async). Sync와 동일한 시맨틱스, 모든 터미널 메서드는 코루틴.',
    tip_so_s: 'SetOperation (sync). 여러 쿼리를 UNION / INTERSECT / EXCEPT로 결합, 통합 결과 세트 반환.',
    tip_so_a: 'AsyncSetOperation (async). 동일, 비동기 실행.',
    tip_cte_s: 'CTEQuery (sync). WITH 절로 CTE 구축, 재귀적 CTE 지원.',
    tip_cte_a: 'AsyncCTEQuery (async). 동일, 비동기 실행.',
    tip_sb_s: 'StorageBackend (sync). 최소 I/O 인터페이스 정의: execute / fetch / transaction. ActiveRecord 없이 사용 가능.',
    tip_sb_a: 'AsyncStorageBackend (async). Sync 버전의 미러, 모든 I/O 메서드는 코루틴.',
    tip_sqlite: 'SQLite Backend — 코어 패키지에 포함됨. 설정 불필요, 개발, 테스트, 임베디드用途에 최적.',
    tip_ext: '확장 Backend 패키지 (sync): rhosocial-activerecord-mysql, -postgresql, -oracle, -sqlserver. 필요에 따라 pip install, <code>configure()</code> 한 줄.',
    tip_ext_a: '확장 Backend 패키지 (async): Sync 패키지의 대응 판, 완전한 async/await 지원.'
  },

  qt: {
    label: 'Quick Taste · 30초',
    title: '설치에서<em>첫 번째 쿼리</em>까지, 30줄 이하.',
    btn_backends: '완전한 Backend 문서 →',
    btn_ar: 'ActiveRecord 상세 →',
    btn_practices:'실전 시나리오 →'
  },

  compare: {
    label: '비교',
    title: '다른<em>Python ORM</em>과 비교.',
    col_feature: '기능',
    row1: '디자인 패턴', row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2: 'Backend 독립 사용 가능',
    row3: '세션 개념 없음',
    row4: '일관된 Sync / Async API',
    row5: 'Pydantic 네이티브 통합',
    row6: '런타임 데이터 유효성 검사',
    row7: '완전한 SQL 표현력',
    row8: '캡ABILITY 선언 메커니즘',
    row9: 'SQL 투명도 <code>.to_sql()</code>',
    row10: '강제 마이그레이션 도구 없음',
    row11: '최소 의존성',
    row12: '명시적 관계 정의'
  },

  gallery: {
    label: '컴포넌트 갤러리 · Primitives',
    title: '각 테마가 어떻게<em>UI Primitives</em>를 처리하는지.',
    c_buttons: 'Buttons', c_btngroup: 'Button group', c_form: 'Form controls',
    c_radio: 'Radio group', c_multi: 'Multi-select list', c_dropdown: 'Dropdown',
    c_alerts: 'Alerts', c_badges: 'Badges', c_progress: 'Progress',
    c_grid: 'Grid demo (12 col)', c_rtl: 'RTL preview', c_table: 'Striped table',
    form_email: 'Email address', form_note: 'Notes',
    form_preload: 'Preload', form_async: 'Async',
    radio_sync: 'Sync (sync mode)', radio_async: 'Async (async mode)', radio_both: 'Both (shared models)',
    alert_info: '<b>팁.</b> SQLite Backend는 코어 패키지에 포함됨.',
    alert_success: '<b>준비 완료.</b> <code>User.configure(...)</code> 호출됨.',
    alert_warn: '<b>경고.</b> 윈도우 함수에는 SQLite ≥ 3.25 필요.',
    prog_coverage: 'Test coverage', prog_backend: 'Backend completion', prog_locale: '문서 현지화',
    backend_note: '상단 컨트롤 바와 동일한 컴포넌트.',
    multi1_t: 'PostgreSQL', multi1_d: 'Main production',
    multi2_t: 'MySQL',      multi2_d: 'Legacy services',
    multi3_t: 'SQLite',     multi3_d: 'Tests &amp; Prototypes'
  },

  album: {
    label: '갤러리 · 라이브러리',
    title: '<em>예제</em>로 배우기.',
    a1: '첫 번째 모델', a2: 'FastAPI에서 Async', a3: 'has_many 상세',
    a4: 'Backend 작성', a5: 'Auto N+1 감지', a6: '중첩된 트랜잭션 &amp; 세이브포인트'
  },

  voices: {
    label: 'voice · 사용자 후기',
    title: '사용자들이<em>말하는 것</em>.',
    q1: 'rhosocial-activerecord로 마침내 ORM과 싸우지 않아도 됩니다. 타입 어노테이션이 모델 자체 — 완전히 맞습니다.',
    q1_role: 'Backend Engineer · Kyoto',
    q2: 'Sync와 Async는 하나의 API를 공유, 리팩터링은 무료나 마찬가지. FastAPI 마이그레이션은 두 줄でした.',
    q2_role: 'Staff Engineer · Berlin',
    q3: 'DuckDB Backend를 작성했습니다. Backend ABC를 보고 오후에 실행되었습니다. 이것이 진정한 확장성입니다.',
    q3_role: 'Data Platform · Singapore',
    q4: '체인 각 단계에서 IDE 타입 추론이 정확합니다. Pydantic이 정확한 곳에서 사용됨.',
    q4_role: 'Senior Python · São Paulo',
    q5: '런타임 의존성 제로가 핵심입니다. 임베디드 배포에서 SQLAlchemy 크기는 더 이상 신경 쓰지 않아도 됩니다.',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  auth: {
    label: 'Auth · 로그인 데모',
    title: '<em>rhosocial</em>에 로그인.',
    welcome: '돌아오신 것을 환영합니다', sub: 'rhosocial 계정으로 계속.',
    email: 'Email', password: 'Password', remember: '로그인 상태 유지', forgot: '비밀번호를 잊으셨나요?',
    login: '로그인', or: '또는', github: 'GitHub으로 계속', twitter: 'Twitter로 계속',
    no_account: '계정이 없으신가?', register: '등록'
  },

  stats: {
    label: '숫자로 보기',
    title: '일부<em>숫자</em>.',
    s1: '사용 가능한 DB Dialect',
    s2: '타입 어노테이션 커버리지',
    s3: '최소 Python 버전',
    s4: '외부 ORM 의존'
  },

  install: {
    label: '시작하기',
    title: '한 줄 설치, <em>10분</em>에 첫 번째 ���리.',
    sub: 'PyPI에 공개. SQLite Backend는 코어 패키지에 포함; 나머지는 필요시 설치.',
    docs: '문서 읽기 →'
  },

  split_sync: {
    label: 'Side by side',
    title: 'Sync = async, <em>같은 시맨틱스</em>.',
    intro: '<code>for</code>를 <code>async for</code>로 교체 — 완료. 타입 추론이 체인全程을 유지.',
    cta: 'Async 가이드 읽기 →'
  },

  split_backend: {
    label: 'Backend 자유',
    title: '오후 한 번에<em>Backend</em>를 작성.',
    intro: '<code>Backend</code>를 상속, 몇 가지 Dialect Hooks를 구현. DuckDB와 libSQL은 이미 입증됨.',
    cta: 'Backend 개발 가이드 →'
  },

  pricing: {
    label: 'Plans · 예시',
    title: '당신의<em>계획</em>을 선택.',
    intro: '(예시 카드 — OSS 프로젝트 자체는 영구 무료. 각 테마에서 pricing 카드를 미리보기 위해 표시됨.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: '개인 개발자와 OSS 기여자용. 전체 기능, 제한 없음.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: '전체 Sync &amp; Async API', f3: '커뮤니티 포럼 지원',
      f4: '팀 협업 대시보드', f5: 'SLA 응답 보장', cta: '시작하기'
    },
    c2: {
      tier: 'Team',       desc: '성장 중인 팀. Enterprise Backend + 감사.',
      f1: 'Community의 모든 것', f2: 'MSSQL / Oracle Backends', f3: '감사 로그 &amp; Read-Write 분리',
      f4: '우선 Discord', f5: 'SSO / SAML', cta: '14일 체험'
    },
    c3: {
      tier: 'Enterprise', desc: '대규모 조직. 온프레미스, 컴플라이언스, 교육.', price_label: '문의',
      f1: 'Team의 모든 것', f2: '커스텀 Backend (DuckDB / libSQL / 사내)', f3: 'SSO / SAML / LDAP',
      f4: '4시간 SLA', f5: '교육 및 전용 솔루션', cta: '영업에 문의'
    }
  }

});