/**
 * ticker.js — Ticker / marquee bar renderer
 * Depends on: ticker.css
 *
 * Usage: add <div class="ticker"><div class="ticker-inner" id="ticker-inner"></div></div>
 *        then include this script.
 */
(function() {
  var items = [
    { tag:'Python', text:'Type annotations = model fields' },
    { tag:'SQL', text:'.to_sql() on every query', cyan:true },
    { tag:'Async', text:'Same API, just add await', cyan:true },
    { tag:'Pydantic', text:'Runtime validation built-in' },
    { tag:'SQLite', text:'Built-in backend, zero setup', cyan:true },
    { tag:'v1.0', text:'Apache 2.0 · Pure Python' },
    { tag:'ORM', text:'No Session concept' },
    { tag:'CTE', text:'WITH clauses, recursive queries', cyan:true },
  ];
  var ti = document.getElementById('ticker-inner');
  if (ti) {
    var html = '';
    for (var r = 0; r < 2; r++) {
      for (var i = 0; i < items.length; i++) {
        var cls = items[i].cyan ? ' tag-cyan' : '';
        html += '<div class="ticker-item"><span class="tag' + cls + '">' + items[i].tag + '</span>' + items[i].text + '</div>';
      }
    }
    ti.innerHTML = html;
  }
})();