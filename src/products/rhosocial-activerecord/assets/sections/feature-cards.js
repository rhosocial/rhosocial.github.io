/**
 * feature-cards.js — Six promise feature cards renderer
 * Depends on: feature-cards.css
 *
 * Reads card data from window.I18N when available (i18n data in assets/i18n/*.js),
 * falls back to hardcoded Chinese data.
 *
 * Usage:
 *   <div class="features-track" id="features-track"></div>
 *   Then include this script.
 */
(function() {
  var FALLBACK = [
    { num:'01 / type-safe', icon:'⬡', title:'<span class="hl">类型</span>即字段', desc:'Python 类型注解直接成为模型定义。IDE 完整推导，Pydantic 运行时验证，无额外 DSL。', code:'<span class="kw">class</span> <span class="cls">User</span>(<span class="cls">ActiveRecord</span>):\n    name: <span class="cls">str</span>\n    age:  <span class="cls">int</span> = <span class="num">0</span>', tags:['typing','pydantic','3.8+'], link:'activerecord/model.html' },
    { num:'02 / async-first', icon:'⟳', title:'Sync & async<span class="hl">，一套 API</span>', desc:'同步 ActiveRecord 与异步 AsyncActiveRecord 语义完全一致。for → async for，其他不变。', code:'<span class="cm"># sync</span>\n<span class="cls">User</span>.<span class="fn">query</span>().<span class="fn">all</span>()\n<span class="cm"># async — same API</span>\n<span class="kw">await</span> <span class="cls">User</span>.<span class="fn">query</span>().<span class="fn">all</span>()', tags:['asyncio','parity','awaitable'], link:'' },
    { num:'03 / backends', icon:'◈', title:'后端<span class="hl">可插拔</span>', desc:'核心包仅依赖 Pydantic。SQLite 内置；MySQL/Postgres 独立包；可自写 Backend ABC。', code:'<span class="cm"># configure backend</span>\n<span class="fn">configure</span>(backend=<span class="str">"postgresql"</span>)', tags:['SQLite','MySQL','Postgres','custom'], link:'backends/index.html' },
    { num:'04 / relations', icon:'⟶', title:'关系<span class="hl">显式</span>声明', desc:'用 ClassVar 声明关系字段，避免 Pydantic 扫描。运行时自动替换为 relation 描述符。', code:'posts: <span class="cls">ClassVar</span>[<span class="cls">HasMany</span>[<span class="str">"Post"</span>]]\n    = <span class="cls">HasMany</span>(foreign_key=<span class="str">"author_id"</span>)', tags:['HasMany','BelongsTo','HasOne','eager-load'], link:'activerecord/relations.html' },
    { num:'05 / transactions', icon:'⊞', title:'事务<span class="hl">原子嵌套</span>', desc:'上下文管理器 + savepoint，异常即回滚。嵌套事务自动创建 savepoint，语义清晰。', code:'<span class="kw">with</span> <span class="cls">User</span>.<span class="fn">transaction</span>():\n    user.<span class="fn">save</span>()\n    <span class="kw">with</span> <span class="cls">User</span>.<span class="fn">transaction</span>():\n        post.<span class="fn">save</span>()  <span class="cm"># savepoint</span>', tags:['SAVEPOINT','rollback','ACID'], link:'activerecord/transactions.html' },
    { num:'06 / pythonic', icon:'∿', title:'读如<span class="hl">英语</span>', desc:'链式调用语义直观。.to_sql() 随时透明查看实际生成的 SQL，无黑盒。', code:'<span class="cls">User</span>.<span class="fn">query</span>()\n    .<span class="fn">where</span>(<span class="cls">User</span>.c.age &gt;= <span class="num">18</span>)\n    .<span class="fn">order_by</span>(<span class="cls">User</span>.c.name)\n    .<span class="fn">all</span>()', tags:['chaining','.to_sql()','no DSL'], link:'activerecord/query.html' },
  ];

  var features = FALLBACK.slice();

  function loadI18nCards(lang) {
    if (!lang) return false;
    var cards = window.I18N && window.I18N[lang] && window.I18N[lang].home && window.I18N[lang].home.feat_cards;
    if (!cards || cards.length !== FALLBACK.length) return false;
    // Fill in missing fields from fallback
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].num === undefined) cards[i].num = FALLBACK[i].num;
      if (cards[i].icon === undefined) cards[i].icon = FALLBACK[i].icon;
      if (cards[i].code === undefined) cards[i].code = FALLBACK[i].code;
      if (cards[i].tags === undefined) cards[i].tags = FALLBACK[i].tags;
      if (cards[i].link === undefined) cards[i].link = FALLBACK[i].link;
    }
    features = cards;
    return true;
  }

  // Initial load: try i18n
  var state = window.__STATE__;
  if (state) {
    loadI18nCards(state.get('lang'));
  }

  function detailText(lang) {
    return (window.I18N && window.I18N[lang] && window.I18N[lang].common && window.I18N[lang].common.detail) || '查看详情 →';
  }

  function render() {
    var track = document.getElementById('features-track');
    if (!track) return;
    track.innerHTML = '';
    var dt = detailText(state ? state.get('lang') : 'zh-cn');
    for (var i = 0; i < features.length; i++) {
      var f = features[i];
      var card = document.createElement('div');
      card.className = 'feat-card';
      card.style.transitionDelay = (i * 0.05) + 's';
      var codeHtml = '<div class="feat-code-snip"><div class="code-block" style="background:transparent;border:none;padding:0;">' + f.code + '</div></div>';
      var tagsHtml = '<div class="feat-tags">' + f.tags.map(function(t) { return '<span class="feat-tag">' + t + '</span>'; }).join('') + '</div>';
      var linkHtml = f.link ? '<a href="' + f.link + '" class="feat-link">' + dt + '</a>' : '';
      card.innerHTML = '<div class="feat-num">' + f.num + '</div><div class="feat-icon">' + f.icon + '</div><div class="feat-title">' + f.title + '</div><div class="feat-desc">' + f.desc + '</div>' + codeHtml + tagsHtml + linkHtml;
      track.appendChild(card);
    }
  }

  render();

  // Re-render on language change
  if (state) {
    state.subscribe(['lang'], function(newState) {
      loadI18nCards(newState.lang);
      render();
    });
  }
})();