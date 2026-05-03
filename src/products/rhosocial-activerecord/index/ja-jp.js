/**
 * index/ja-jp.js — ホームページ日本語辞書
 *
 * 依存：assets/i18n/ja-jp.js が先に読み込まれる必要があります。
 * このファイルは Object.assign を使用して window.I18N['ja-jp'] にホームぺージ固有のキーを追加します。
 */
window.I18N = window.I18N || {};
window.I18N['ja-jp'] = Object.assign(window.I18N['ja-jp'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord、<br><em>Python 用に再設計</em>。',
    sub: '<strong>rhosocial-activerecord</strong> はネイティブ Python タイプアノテーションでモデルを定義し、 <code>query().where(...).all()</code> チェーンでクエリします。Sync と Async が標準装備。外部 ORM 依存なし — SQLite 組み込み、他のデータベースは別パッケージ、カスタムバックエンドは数十行で書けます。',
    cta_secondary: '機能を見る →'
  },

  features: {
    label: 'なぜ · 6つのコア約束',
    title: 'なぜ <em>rhosocial ActiveRecord</em> か。',
    f1: { num: '01 / タイプ = フィールド', title: '構築から<em>タイプセーフ</em>', desc: '<code>name: str</code> — ストレージ、バリデーション、IDE 補完が一つのものに。' },
    f2: { num: '02 / Async ファーストクラス', title: 'Sync &amp; Async、<em>1つの API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — 同一の形状。' },
    f3: { num: '03 / プラガブルバックエンド', title: '<em>交換可能なバックエンド</em>', desc: 'SQLite 組み込み; Postgres/MySQL/MSSQL/Oracle は別パッケージ; カスタムも書ける。' },
    f4: { num: '04 / 明示的なリレーション', title: '<em>リレーション</em>を明示的に', desc: 'has_many / belongs_to はモデルで宣言; リレーションは<code>QuerySet</code>。' },
    f5: { num: '05 / アトミックトランザクション', title: 'トランザクション、<em>適切にネスト</em>', desc: 'コンテキストマネージャー + セーブポイント; 例外はロールバック。' },
    f6: { num: '06 / Pythonic', title: '<em>英語</em>のように読める', desc: '<code>User.query().where(...).all()</code> — DSL なし、Python のみ。' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>タイプ = フィールド</em>、 3.8 から 3.12。',
    intro: 'Python タイプアノテーションはモデル定義そのものです、追加の DSL なし。Pydantic がランタイムバリデーション、IDE で完全なタイプ推論。'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>、 同じセマンティクス。',
    intro: 'Sync と Async は同じモデル定義を共有。<code>for</code> → <code>async for</code>、 他は同じ。'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>交換可能なバックエンド</em>、 必要なものだけ。',
    intro: 'コアドペッケージは Pydantic のみに依存。SQLite 組み込み、他のデータベースは別パッケージ、 <code>configure()</code> 一行。'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>明示的なリレーション</em>、 ClassVar + ディスクリプタ。',
    intro: 'リレーションフィールドの宣言には <code>ClassVar</code> を使用、 Pydantic スキャンから避ける。ランタイムで自動 <code>relation()</code> に置換。'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>アトミックトランザクション</em>、 ネストしたセーブポイント。',
    intro: 'ネストしたトランザクションは自動的に SAVEPOINT を作成。コンテキストマネージャーは���動コミット/ロールバック、 例外は自動的に最後のセーブポイントにロールバック。'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>英語のように読める</em>、 DSL なし。',
    intro: 'チェーン呼び出し、英語のようにスムーズに読める。<code>.to_sql()</code> で生成 SQL を確認。'
  },

  practice: {
    label: '実践編 · 実際のコード',
    title: '3.8 から 3.12 へ、<em>ステップバイステップ</em>。',
    intro: 'testsuit リポジトリの <code>models_py38.py</code> … <code>models_py312.py</code> ファイルと一致。',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> の代わりに <code>List[str]</code> (PEP 585)。',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> の代わりに <code>Optional[int]</code> (PEP 604)。',
    p3: '<b>3.10 → 3.11</b>: <code>Self</code> タイプ (PEP 673)。',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> と PEP 695 ジェネリクス <code>class Result[T]:</code>。'
  },

  arch: {
    label: 'アーキテクチャ · 3層',
    title: '<em>Expression → Dialect → Backend</em>、 明確な責任分離。',
    intro: 'クエリロジック、SQL 生成、データベース実行の分離。プロトコル (<code>@runtime_checkable</code>) が境界でキャパビリティを宣言 — サポートされていない機能は<code>UnsupportedFeatureError</code>をスロー、サイレント失敗なし。',
    col1: {
      num: 'Expression 層',
      title: '<em>セマンティックコレクション</em>、 SQL 詳細なし',
      desc: '<code>BaseExpression.to_sql(dialect)</code> がターゲット Dialect に SQL 生成を委譲。1つの Expression オブジェクトはすべての Dialect で再利用、Hardcoded SQL ゼロ。'
    },
    col2: {
      num: 'Dialect 層 (33 プロトコル)',
      title: '<em>33 プロトコル</em> がキャパビリティ境界を宣言',
      desc: '<code>format_*()</code> メソッドがターゲットデータベースの SQL を生成。キャパビリティ検出式: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num: 'Backend 層 (12 Mixins)',
      title: '<em>12 Mixins</em> MRO 组合せ',
      desc: 'Template Method パターン: 非 I/O ロジックは共有 Mixin、 I/O ロジックは別々。 \\(n = 12\\) MRO 層组合せ、コード重複ゼロ。'
    }
  },

  arch_comp: {
    label: 'コンポーネントアーキテクチャ',
    title: 'ActiveRecord + Backend、<em>2つの独立した層</em>。',
    intro: 'ActiveRecord は Backend のユーザー; Backend は独立して動作可能。Sync と Async はペアになっているが交換不可。',

    ar_badge: 'アプリケーション層',
    ar_title: 'ActiveRecord',
    ar_desc: 'モデル定義、クエリビルディング、リレーションマネジメント、トランザクションハンドリング。ActiveQuery、SetOperation、CTEQuery を含む。',

    be_badge: '独立層',
    be_title: 'Backend',
    be_desc: 'データベース I/O 層、ActiveRecord なしで使用可能。SQLite 組み込み、他のデータベースは拡張パッケージ。',

    uses_label: '使用',
    sync_async_note: 'sync ↔ sync · async ↔ async',
    pair_sync_note: 'Sync ペア — async と混合禁止',
    pair_async_note: 'Async ペア — sync と混合禁止',

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
    node_ext_a:  'AsyncMySQL · AsyncPostgreSQL · …',

    tip_ar_s: 'Sync ActiveRecord。このクラスを継承してモデルを定義、 <code>.save()</code>, <code>.query()</code> などの Sync メソッドを呼出。',
    tip_ar_a: 'Async ActiveRecord。API は Sync版のミラー、全メソッド <code>async/await</code>、 FastAPI / asyncio 用。',
    tip_aq_s: 'ActiveQuery (sync)。WHERE、ORDER BY、JOIN、ペジネーションをチェーン、最後で <code>.all()</code> / <code>.one()</code> で実行。',
    tip_aq_a: 'AsyncActiveQuery (async)。Sync と同じセマンティクス、全ターミナルメソッドはコルーチン。',
    tip_so_s: 'SetOperation (sync)。複数のクエリを UNION / INTERSECT / EXCEPT で結合、統合結果セットを返す。',
    tip_so_a: 'AsyncSetOperation (async)。同上、非同期実行。',
    tip_cte_s: 'CTEQuery (sync)。WITH 句で CTE を構築、再帰的 CTE サポート。',
    tip_cte_a: 'AsyncCTEQuery (async)。同上、非同期実行。',
    tip_sb_s: 'StorageBackend (sync)。最小限の I/O インターフェースを定義: execute / fetch / transaction。ActiveRecord なしで使用可能。',
    tip_sb_a: 'AsyncStorageBackend (async)。Sync 版のミラー、全 I/O メソッドはコルーチン。',
    tip_sqlite: 'SQLite Backend — コパッケージに含まれます。設定不要、開発、テスト、組込み用途に最適。',
    tip_ext: '拡張 Backend パッケージ (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver。必要に応じて pip install、<code>configure()</code> 一行。',
    tip_ext_a: '拡張 Backend パッケージ (async): Sync パッケージの対応版、完全な async/await サポート。'
  },

  qt: {
    label: 'Quick Taste · 30秒',
    title: 'インストールから<em>最初のクエリ</em>まで、 30行以内。',
    btn_backends: '完全な Backend ドキュメント →',
    btn_ar: 'ActiveRecord 詳細 →',
    btn_practices:'実践シナリオ →'
  },

  compare: {
    label: '比較',
    title: '他の<em>Python ORM</em>と比較。',
    col_feature: '機能',
    row1: 'デザインパターン', row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2: 'Backend が独立して使用可能',
    row3: 'セッション概念なし',
    row4: '一貫した Sync / Async API',
    row5: 'Pydantic ネイティブ統合',
    row6: 'ランタイムデータバリデーション',
    row7: '完全な SQL 表現力',
    row8: 'キャパシティ宣言メカニズム',
    row9: 'SQL 透明度 <code>.to_sql()</code>',
    row10: '強制的なマイグレーション Tool なし',
    row11: '最小の依存関係',
    row12: '明示的なリレーション定義'
  },

  gallery: {
    label: 'コンポーネントギャラリー · Primitives',
    title: '各テーマはどのように<em>UI Primitives</em>を処理するか。',
    c_buttons: 'Buttons', c_btngroup: 'Button group', c_form: 'Form controls',
    c_radio: 'Radio group', c_multi: 'Multi-select list', c_dropdown: 'Dropdown',
    c_alerts: 'Alerts', c_badges: 'Badges', c_progress: 'Progress',
    c_grid: 'Grid demo (12 col)', c_rtl: 'RTL preview', c_table: 'Striped table',
    form_email: 'Email address', form_note: 'Notes',
    form_preload: 'Preload', form_async: 'Async',
    radio_sync: 'Sync (sync mode)', radio_async: 'Async (async mode)', radio_both: 'Both (shared models)',
    alert_info: '<b>ヒント。</b> SQLite Backend はコアパッケージに含まれます。',
    alert_success: '<b>準備完了。</b> <code>User.configure(...)</code> を呼びました。',
    alert_warn: '<b>警告。</b> ウィンドウ関数には SQLite ≥ 3.25 が必要です。',
    prog_coverage: 'Test coverage', prog_backend: 'Backend completion', prog_locale: 'Docs localization',
    backend_note: 'トップコントロールバーと同じコンポーネント。',
    multi1_t: 'PostgreSQL', multi1_d: 'Main production',
    multi2_t: 'MySQL',      multi2_d: 'Legacy services',
    multi3_t: 'SQLite',     multi3_d: 'Tests &amp; Prototypes'
  },

  album: {
    label: 'ギャラリー · ライブラリ',
    title: '<em>例</em>から学ぶ。',
    a1: 'あなたの最初のモデル', a2: 'FastAPI での Async', a3: 'has_many の詳細',
    a4: 'Backend を書く', a5: 'Auto N+1 検出', a6: 'ネストしたトランザクション &amp; セーブポイント'
  },

  voices: {
    label: '声 · ユーザーの声',
    title: '皆様<em>のお言葉</em>。',
    q1: 'rhosocial-activerecord でようやく ORM と戦わずに済みます。タイプアノテーションがモデルそのもの — 正にその通り。',
    q1_role: 'Backend Engineer · Kyoto',
    q2: 'Sync と Async は1つの API を共有、リファクタリングは無料同然。FastAPI マイグレーションは2行でした。',
    q2_role: 'Staff Engineer · Berlin',
    q3: 'DuckDB Backend を書きました。Backend ABC を読んで、午後には本番稼働。这是真正的拡張性。',
    q3_role: 'Data Platform · Singapore',
    q4: 'チェーンの各ステップで IDE のタイプ推論が正しく機能。Pydantic が正しい場所で使われている。',
    q4_role: 'Senior Python · São Paulo',
    q5: 'ランタイム依存ゼロが鍵。組込みデプロイで SQLAlchemy のサイズはもう気にしなくて良い。',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  auth: {
    label: 'Auth · ログインデモ',
    title: '<em>rhosocial</em> にログイン。',
    welcome: 'おかえりなさい', sub: 'rhosocial アカウントで続行。',
    email: 'Email', password: 'Password', remember: 'ログイン状態を保持', forgot: 'パスワードをお忘れですか?',
    login: 'ログイン', or: 'または', github: 'GitHub で続行', twitter: 'Twitter で続行',
    no_account: 'アカウントをお持ちでない?', register: '登録'
  },

  stats: {
    label: '数字で見て',
    title: 'いくつかの<em>数字</em>。',
    s1: '利用可能な DB Dialect',
    s2: 'タイプアノテーションカバレッジ',
    s3: '最小 Python バージョン',
    s4: '外部 ORM 依存'
  },

  install: {
    label: '始める',
    title: '1行インストール、<em>10分</em>で最初のクエリ。',
    sub: 'PyPI で公開。SQLite Backend はコアパッケージに含まれます; 他は需要的に応じてインストール。',
    docs: 'ドキュメントを読む →'
  },

  split_sync: {
    label: 'Side by side',
    title: 'Sync = async、<em>同じセマンティクス</em>。',
    intro: '<code>for</code> を <code>async for</code> に置き換え — 完了。タイプ推論がチェーン全程を維持。',
    cta: 'Async ガイドを読む →'
  },

  split_backend: {
    label: 'Backend 自由',
    title: '午後だけで<em>Backend</em>を書く。',
    intro: '<code>Backend</code> を継承、いくつかの Dialect Hooks を実装。DuckDB と libSQL は既に実証済み。',
    cta: 'Backend 開発ガイド →'
  },

  pricing: {
    label: 'プラン · 例示',
    title: 'あなたの<em>レベル</em>を選択。',
    intro: '(サンプルカード — OSS プロジェクト本身は永远に免费。各テーマで pricing カードをプレビューするために表示。)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: '個人開発者と OSS コントリビューター向け。フル機能、制限なし。',
      f1: 'SQLite / PostgreSQL / MySQL', f2: '完全な Sync &amp; Async API', f3: 'コミュニティフォーラムサポート',
      f4: 'チー���コ���ボレーションダッシュボード', f5: 'SLA レスポンス保証', cta: '始める'
    },
    c2: {
      tier: 'Team',       desc: '成長中のチーム。Enterprise Backend + 監査。',
      f1: 'Community のすべて', f2: 'MSSQL / Oracle Backends', f3: '監査ログ &amp; Read-Write {split}',
      f4: '優先プライベート Discord', f5: 'SSO / SAML', cta: '14日間 Trial'
    },
    c3: {
      tier: 'Enterprise', desc: '大組織。オンプレミス、コmpliance、トレーニング。', price_label: 'お問い合わせ',
      f1: 'Team のすべて', f2: 'カスタム Backend (DuckDB / libSQL / 社内)', f3: 'SSO / SAML / LDAP',
      f4: '4時間 SLA', f5: 'オンサイトトレーニングと専用ソリューション', cta: '営業に連絡'
    }
  }

});