(function() {
  'use strict';

  function t(key) {
    return window.SECTIONS_I18N ? window.SECTIONS_I18N.t(key) : key;
  }
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }
  function highlightCode(code, language) {
    if (typeof hljs !== 'undefined') {
      try {
        return hljs.highlight(code, { language: language || 'python' }).value;
      } catch (_) {}
    }
    return escapeHtml(code);
  }
  function buildHeader(filename, showCopy) {
    var copyBtn = showCopy
      ? '<button class="code-copy-btn" type="button">' + t('copy') + '</button>'
      : '';
    return '<div class="code-header">'
      + '<div class="code-dots"><span></span><span></span><span></span></div>'
      + '<span class="code-filename">' + escapeHtml(filename || '') + '</span>'
      + copyBtn
      + '</div>';
  }

  window.CodeBlock = {
    render: function(container, opts) {
      if (!container) return;
      opts = opts || {};
      var html;
      switch (opts.mode) {
        case 'diff':
          html = this.renderDiff(opts.syncCode, opts.asyncCode, opts.filename);
          break;
        case 'result':
          html = this.renderResult(opts.code, opts.sql, opts.result || opts.results, opts.filename);
          break;
        default:
          html = this.renderStandard(opts.code, opts.lang, opts.filename);
      }
      container.innerHTML = html;
    },

    renderStandard: function(code, lang, filename) {
      var highlighted = highlightCode(code, lang || 'python');
      return '<div class="code-block cb-standard">'
        + buildHeader(filename, true)
        + '<div class="code-body"><pre>' + highlighted + '</pre></div>'
        + '</div>';
    },

    renderDiff: function(syncCode, asyncCode, filename) {
      var syncHl = highlightCode(syncCode, 'python');
      var asyncHl = highlightCode(asyncCode, 'python');
      asyncHl = asyncHl.replace(
        /(<span class="hljs-[^"]*">)\b(await|async)\b(<\/span>)/g,
        '$1<span class="cb-diff-token">$2</span>$3'
      );
      asyncHl = asyncHl.replace(/\b(Async[A-Z]\w*)\b/g, '<span class="cb-diff-token">$1</span>');

      return '<div class="code-block cb-diff">'
        + buildHeader(filename, false)
        + '<div class="cb-diff-body">'
        + '<div class="cb-diff-pane cb-diff-sync">'
        + '<div class="cb-diff-pane-header">'
        + '<span class="cb-diff-tag">' + t('sync') + '</span>'
        + '<span class="cb-diff-pane-label"></span>'
        + '<button class="code-copy-btn" type="button" data-cb-pane="sync">' + t('copy') + '</button>'
        + '</div>'
        + '<div class="code-body"><pre>' + syncHl + '</pre></div>'
        + '</div>'
        + '<div class="cb-diff-pane cb-diff-async">'
        + '<div class="cb-diff-pane-header">'
        + '<span class="cb-diff-tag">' + t('async') + '</span>'
        + '<span class="cb-diff-pane-label"></span>'
        + '<button class="code-copy-btn" type="button" data-cb-pane="async">' + t('copy') + '</button>'
        + '</div>'
        + '<div class="code-body"><pre>' + asyncHl + '</pre></div>'
        + '</div>'
        + '</div>'
        + '</div>';
    },

    renderResult: function(code, sql, result, filename) {
      var codeHl = highlightCode(code, 'python');
      var sqlHl = highlightCode(sql, 'sql');
      var resultHtml = resultTableHtml(result);

      return '<div class="code-block cb-result">'
        + buildHeader(filename, true)
        + '<div class="code-body"><pre>' + codeHl + '</pre></div>'
        + '<div class="cb-divider"></div>'
        + '<div class="code-body cb-sql-body"><pre>' + sqlHl + '</pre></div>'
        + (resultHtml ? '<div class="cb-divider"></div><div class="cb-result-body">' + resultHtml + '</div>' : '')
        + '</div>';
    }
  };

  function resultTableHtml(result) {
    if (!result || !result.columns || !result.rows) return '';
    var h = '<div class="cb-result-table">';
    h += '<div class="cb-rt-row cb-rt-header">';
    for (var i = 0; i < result.columns.length; i++) {
      h += '<span class="cb-rt-cell">' + escapeHtml(String(result.columns[i])) + '</span>';
    }
    h += '</div>';
    for (var r = 0; r < result.rows.length; r++) {
      h += '<div class="cb-rt-row">';
      for (var c = 0; c < result.rows[r].length; c++) {
        h += '<span class="cb-rt-cell">' + escapeHtml(String(result.rows[r][c])) + '</span>';
      }
      h += '</div>';
    }
    h += '</div>';
    if (result.params) {
      h += '<div class="cb-params">' + t('params') + ': '
        + escapeHtml(JSON.stringify(result.params)) + '</div>';
    }
    return h;
  }

  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.code-copy-btn');
    if (!btn) return;
    var text;
    var pane = btn.closest('.cb-diff-pane');
    if (pane) {
      var pre = pane.querySelector('.code-body pre');
      if (pre) text = pre.textContent.trim();
    } else {
      var block = btn.closest('.code-block');
      if (!block) return;
      var pres = block.querySelectorAll('.code-body pre');
      var texts = [];
      pres.forEach(function(pre) { texts.push(pre.textContent); });
      text = texts.join('\n').trim();
    }
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        var orig = btn.textContent;
        btn.textContent = t('copied');
        setTimeout(function() { btn.textContent = orig; }, 1200);
      });
    }
  });
})();
