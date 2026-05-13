/**
 * assets/i18n/zh-cn.js — Global Chinese dictionary
 *
 * Contains UI text shared across all pages (nav, controls, brand, common, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/zh-cn.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['zh-cn'] = {
  /** Language meta */
  meta: { name: '简体中文' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: '· Theme Lab'
  },

  /** Top navigation */
  nav: {
    index:        '首页',
    backends:     '后端',
    activerecord: 'ActiveRecord',
    practices:    '实践',
    blog:         '文章'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: '主题',
    font_label:  '字体',
    lang_label:  '语言',
    font_auto:  '跟随主题'
  },

  /** Footer */
  footer: {
    license:   'Apache 2.0 许可',
    github:    'GitHub',
    pypi:      'PyPI',
    privacy:   '隐私政策',
    about:     '关于我们',
    contact:   '联系我们',
    hotkeys:   '26 主题 · Ctrl+键主题 · Shift+键字体 · Alt+键语言'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   '查看详情 →',
    back:     '← 返回',
    copy:     '复制',
    copied:   '已复制!',
    failed:   '复制失败',
    loading:  '加载中…',
    error:    '加载失败',
    expand:   '展开',
    collapse: '收起',
    prev:     '上一个',
    next:     '下一个',
    close:    '关闭'
  },

  /** Homepage content */
  home: {
    hero: {
      eyebrow: 'rhosocial-activerecord <span>· v1.0 · Apache 2.0</span>',
      title: 'Python ORM<br /><span class="hl">重新设计</span><br /><span class="dim">从类型开始。</span>',
      sub: '用 <strong>Python 原生类型注解</strong>定义模型。链式查询透明生成 SQL。同步与异步，<strong>同一套 API</strong>。',
      install_btn: 'pip install',
      github_btn: 'GitHub',
      stat_backends: 'Database backends',
      stat_annotated: 'Type annotated',
      stat_python: 'Python support',
      stat_deps: 'ORM deps'
    },
    demo: {
      term_title: 'demo.py — rhosocial-activerecord',
      pane_python: 'Python model',
      pane_sql: 'Generated SQL',
      to_sql: '.to_sql()',
      params: 'PARAMS',
      rows: 'rows in'
    },
    chain: {
      section_label: 'Interactive',
      title: '点击构建查询，<span class="hl">实时看 SQL</span>',
      sub: '每一个链式方法对应一行 SQL。透明，可控，无魔法。',
      panel_title: 'Query Builder',
      click_hint: '点击开关',
      compiled: 'compiled',
      no_clauses: 'No clauses selected'
    },
    feat: {
      section_label: 'Six promises',
      title: '六个核心<span class="hl">设计决策</span>。'
    },
    feat_cards: [
      {
        num: '01 / type-safe', icon: '⬡',
        title: '<span class="hl">类型</span>即字段',
        desc: 'Python 类型注解直接成为模型定义。IDE 完整推导，Pydantic 运行时验证，无额外 DSL。',
        code: '<span class="kw">class</span> <span class="cls">User</span>(<span class="cls">ActiveRecord</span>):\n    name: <span class="cls">str</span>\n    age:  <span class="cls">int</span> = <span class="num">0</span>',
        tags: ['typing','pydantic','3.8+'],
        link: 'activerecord/model.html'
      },
      {
        num: '02 / async-first', icon: '⟳',
        title: 'Sync & async<span class="hl">，一套 API</span>',
        desc: '同步 ActiveRecord 与异步 AsyncActiveRecord 语义完全一致。for → async for，其他不变。',
        code: '<span class="cm"># sync</span>\n<span class="cls">User</span>.<span class="fn">query</span>().<span class="fn">all</span>()\n<span class="cm"># async — same API</span>\n<span class="kw">await</span> <span class="cls">User</span>.<span class="fn">query</span>().<span class="fn">all</span>()',
        tags: ['asyncio','parity','awaitable'],
        link: ''
      },
      {
        num: '03 / backends', icon: '◈',
        title: '后端<span class="hl">可插拔</span>',
        desc: '核心包仅依赖 Pydantic。SQLite 内置；MySQL/Postgres 独立包；可自写 Backend ABC。',
        code: '<span class="cm"># configure backend</span>\n<span class="fn">configure</span>(backend=<span class="str">"postgresql"</span>)',
        tags: ['SQLite','MySQL','Postgres','custom'],
        link: 'backends/index.html'
      },
      {
        num: '04 / relations', icon: '⟶',
        title: '关系<span class="hl">显式</span>声明',
        desc: '用 ClassVar 声明关系字段，避免 Pydantic 扫描。运行时自动替换为 relation 描述符。',
        code: 'posts: <span class="cls">ClassVar</span>[<span class="cls">HasMany</span>[<span class="str">"Post"</span>]]\n    = <span class="cls">HasMany</span>(foreign_key=<span class="str">"author_id"</span>)',
        tags: ['HasMany','BelongsTo','HasOne','eager-load'],
        link: 'activerecord/relations.html'
      },
      {
        num: '05 / transactions', icon: '⊞',
        title: '事务<span class="hl">原子嵌套</span>',
        desc: '上下文管理器 + savepoint，异常即回滚。嵌套事务自动创建 savepoint，语义清晰。',
        code: '<span class="kw">with</span> <span class="cls">User</span>.<span class="fn">transaction</span>():\n    user.<span class="fn">save</span>()\n    <span class="kw">with</span> <span class="cls">User</span>.<span class="fn">transaction</span>():\n        post.<span class="fn">save</span>()  <span class="cm"># savepoint</span>',
        tags: ['SAVEPOINT','rollback','ACID'],
        link: 'activerecord/transactions.html'
      },
      {
        num: '06 / pythonic', icon: '∿',
        title: '读如<span class="hl">英语</span>',
        desc: '链式调用语义直观。.to_sql() 随时透明查看实际生成的 SQL，无黑盒。',
        code: '<span class="cls">User</span>.<span class="fn">query</span>()\n    .<span class="fn">where</span>(<span class="cls">User</span>.c.age &gt;= <span class="num">18</span>)\n    .<span class="fn">order_by</span>(<span class="cls">User</span>.c.name)\n    .<span class="fn">all</span>()',
        tags: ['chaining','.to_sql()','no DSL'],
        link: 'activerecord/query.html'
      }
    ],
    arch: {
      section_label: 'Architecture',
      title: '两层独立，<span class="hl">按需组合</span>。',
      sub: 'ActiveRecord 是 Backend 的用户；Backend 可独立运行。同步/异步配对，不可混用。',
      layer_ar: 'ActiveRecord Layer',
      layer_be: 'Backend Layer',
      ar_name: 'ActiveRecord',
      ar_sub: 'ActiveQuery · SetOperation · CTEQuery',
      async_ar_name: 'AsyncActiveRecord',
      async_ar_sub: 'AsyncActiveQuery · AsyncCTEQuery',
      be_name: 'StorageBackend',
      be_sub: 'SQLite · PostgreSQL · MySQL · MariaDB · SQL Server · Oracle',
      async_be_name: 'AsyncStorageBackend',
      async_be_sub: 'AsyncSQLite · AsyncPG · AsyncMySQL · …',
      sync: 'sync',
      async: 'async',
      all_backends: 'all backends',
      uses: 'uses',
      abc: 'ABC'
    },
    cmp: {
      section_label: 'Compare',
      title: '与其它 ORM <span class="hl">对比</span>。',
      header_feat: '特性',
      row_backend: '后端可独立使用',
      row_sync_async: 'Sync/Async API 一致',
      row_pydantic: '原生 Pydantic v2',
      row_no_session: '无 Session 概念',
      row_sql_transparent: 'SQL 透明 .to_sql()',
      row_zero_migration: '零强制迁移依赖'
    },
    install: {
      section_label: 'Get started',
      title: '一行安装，<span class="hl">十分钟</span>上手。',
      sub: 'SQLite 随核心包一起。Pydantic 是唯一依赖。其他后端按需安装。',
      copy_hint: '点击复制',
      doc_btn: '阅读文档 →',
      github_btn: 'GitHub →'
    }
  }
};