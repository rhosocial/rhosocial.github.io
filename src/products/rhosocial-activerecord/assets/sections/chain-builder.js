/**
 * chain-builder.js — Interactive SQL chain builder
 * Depends on: chain-builder.css
 *
 * Usage:
 *   <div class="chain-builder" id="chain-builder">...</div>
 *   <div class="sql-output" id="sql-output"></div>
 *   Then include this script.
 */
(function() {
  var sqlParts = {
    base:   { line: '<span class="sql-kw">SELECT</span> * <span class="sql-kw">FROM</span> <span class="sql-tbl">"users"</span>', h: false },
    where1: { line: '<span class="sql-kw">WHERE</span> <span class="sql-tbl">"users"</span>.<span class="sql-tbl">"age"</span> >= <span class="sql-val">?</span>', h: true },
    where2: { line: '<span class="sql-kw">  AND</span> <span class="sql-tbl">"users"</span>.<span class="sql-tbl">"name"</span> <span class="sql-kw">LIKE</span> <span class="sql-val">?</span>', h: true },
    join:   { line: '<span class="sql-kw">JOIN</span> <span class="sql-tbl">"posts"</span> <span class="sql-kw">ON</span> <span class="sql-tbl">"posts"</span>.<span class="sql-tbl">"author_id"</span> = <span class="sql-tbl">"users"</span>.<span class="sql-tbl">"id"</span>', h: true },
    order:  { line: '<span class="sql-kw">ORDER BY</span> <span class="sql-tbl">"users"</span>.<span class="sql-tbl">"name"</span> <span class="sql-kw">ASC</span>', h: false },
    limit:  { line: '<span class="sql-kw">LIMIT</span> <span class="sql-val">10</span>', h: false },
    all:    { line: '<span class="sql-cm">-- execute & return List[User]</span>', h: false },
  };

  function renderSQL() {
    var active = [];
    document.querySelectorAll('.chain-step.active').forEach(function(el) { active.push(el.dataset.id); });
    var out = document.getElementById('sql-output');
    if (!out) return;
    var html = '';
    var lineNum = 1;
    for (var i = 0; i < active.length; i++) {
      var id = active[i];
      if (!sqlParts[id] || id === 'all') continue;
      var p = sqlParts[id];
      html += '<div class="sql-line' + (p.h ? ' highlight' : '') + '"><span class="sql-line-num">' + lineNum + '</span><span class="sql-line-content">' + p.line + '</span></div>';
      lineNum++;
    }
    if (active.indexOf('all') !== -1) {
      html += '<div class="sql-line" style="margin-top:4px;"><span class="sql-line-num">' + lineNum + '</span><span class="sql-line-content"><span class="sql-cm">-- execute & return List[User]</span></span></div>';
    }
    out.innerHTML = html || '<div style="color:var(--r-text3);font-size:12px">No clauses selected</div>';
  }

  document.querySelectorAll('.chain-step').forEach(function(step) {
    if (step.dataset.id === 'base') return;
    step.addEventListener('click', function() {
      step.classList.toggle('active');
      document.querySelectorAll('.chain-connector[data-conn]').forEach(function(conn) {
        var sid = conn.dataset.conn;
        var s = document.querySelector('.chain-step[data-id="' + sid + '"]');
        if (s && s.classList.contains('active')) conn.classList.add('lit');
        else conn.classList.remove('lit');
      });
      renderSQL();
    });
  });

  document.querySelectorAll('.chain-connector[data-conn]').forEach(function(conn) {
    var sid = conn.dataset.conn;
    var s = document.querySelector('.chain-step[data-id="' + sid + '"]');
    if (s && s.classList.contains('active')) conn.classList.add('lit');
  });
  renderSQL();
})();