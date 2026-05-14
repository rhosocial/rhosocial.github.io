/**
 * blog-post.js — Renders article body from i18n data
 * Looks for <div id="post-body" data-slug="xxx"> and renders structured content
 * from window.I18N[lang].body array. Supports both data-driven rendering
 * and static HTML children (for custom components, media, etc.).
 * Subscribes to lang changes for live re-render.
 * Delegates code rendering to CodeBlock component when available.
 * Load after i18n.js, before shared-footer.js.
 */
(function() {
  'use strict';

  var CONTAINER_ID = 'post-body';

  function lang() {
    return (window.__STATE__ && window.__STATE__.get('lang')) || 'zh-cn';
  }

  function escape(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function tokenizePython(code) {
    var escaped = escape(code);
    var out = '';
    var i = 0;
    var n = escaped.length;
    var KW = {
      'import':1,'from':1,'class':1,'def':1,'return':1,'if':1,'elif':1,
      'else':1,'for':1,'while':1,'break':1,'continue':1,'in':1,'not':1,
      'and':1,'or':1,'is':1,'None':1,'True':1,'False':1,'with':1,'as':1,
      'pass':1,'raise':1,'try':1,'except':1,'finally':1,'async':1,'await':1,
      'yield':1,'lambda':1,'del':1,'global':1,'nonlocal':1,'assert':1,
      'self':1,'print':1,'super':1
    };
    function isWord(ch) {
      return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') ||
             (ch >= '0' && ch <= '9') || ch === '_';
    }
    while (i < n) {
      var ch = escaped[i];
      if (ch === '#' && (i === 0 || !isWord(escaped[i - 1]))) {
        var end = escaped.indexOf('\n', i);
        if (end === -1) end = n;
        out += '<span class="tok-c">' + escaped.slice(i, end) + '</span>';
        i = end; continue;
      }
      if (ch === '"' || ch === "'") {
        var quote = ch;
        var j = i + 1;
        while (j < n) { if (escaped[j] === '\\') { j += 2; continue; } if (escaped[j] === quote) { j++; break; } j++; }
        out += '<span class="tok-s">' + escaped.slice(i, j) + '</span>';
        i = j; continue;
      }
      if (ch >= '0' && ch <= '9') {
        var j = i;
        while (j < n && ((escaped[j] >= '0' && escaped[j] <= '9') ||
               escaped[j] === '.' || escaped[j] === 'e' || escaped[j] === 'E' ||
               escaped[j] === 'x' || escaped[j] === 'X')) j++;
        out += '<span class="tok-num">' + escaped.slice(i, j) + '</span>';
        i = j; continue;
      }
      if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch === '_') {
        var j = i;
        while (j < n && isWord(escaped[j])) j++;
        var word = escaped.slice(i, j);
        if (KW[word]) {
          out += '<span class="tok-kw">' + word + '</span>';
        } else if (j < n && escaped[j] === '(') {
          out += '<span class="tok-fn">' + word + '</span>';
        } else { out += word; }
        i = j; continue;
      }
      out += ch; i++;
    }
    return out;
  }

  /* ── CodeBlock integration (with fallback) ── */
  function codeBlockHtml(block) {
    var codeText = block.text || block.html || '';
    var filename = block.filename || '';
    var lang = block.lang || 'python';
    if (typeof CodeBlock !== 'undefined') {
      return CodeBlock.renderStandard(codeText, lang, filename);
    }
    var highlighted = tokenizePython(codeText);
    return '<div class="code-block">' +
      '<div class="code-header">' +
        '<div class="code-dots"><span></span><span></span><span></span></div>' +
        '<span class="code-filename">' + escape(filename) + '</span>' +
        '<button class="code-copy-btn" type="button">Copy</button>' +
      '</div>' +
      '<div class="code-body"><pre>' + highlighted + '</pre></div>' +
    '</div>';
  }

  function renderBlock(block) {
    if (!block) return '';
    var tag = block.tag || block.type || 'p';
    var html = '';

    switch (tag) {
      case 'p':
      case 'lead':
        html = '<p' + (tag === 'lead' ? ' class="lead"' : '') + '>' + (block.html || '') + '</p>';
        break;
      case 'strong':
        html = '<p><strong>' + (block.html || '') + '</strong></p>';
        break;
      case 'h2':
        html = '<h2>' + (block.html || '') + '</h2>';
        break;
      case 'h3':
        html = '<h3>' + (block.html || '') + '</h3>';
        break;
      case 'code':
        html = codeBlockHtml(block);
        break;
      case 'code-diff':
        if (typeof CodeBlock !== 'undefined') {
          html = CodeBlock.renderDiff(block.syncText, block.asyncText, block.filename);
        }
        break;
      case 'code-result':
        if (typeof CodeBlock !== 'undefined') {
          html = CodeBlock.renderResult(block.code, block.sql, block.result || block.results, block.filename);
        }
        break;
      case 'code-tabs':
        if (block.tabs && block.tabs.length) {
          html = '<div class="tabs" data-tabs="auto">' +
            '<div class="tabs-list">';
          for (var ti = 0; ti < block.tabs.length; ti++) {
            html += '<button class="tab' + (ti === 0 ? ' is-active' : '') +
              '" data-tab="' + ti + '" aria-selected="' + (ti === 0 ? 'true' : 'false') + '">' +
              escape(block.tabs[ti].label) + '</button>';
          }
          html += '</div>';
          for (var ti = 0; ti < block.tabs.length; ti++) {
            html += '<div class="tab-panel' + (ti === 0 ? ' is-active' : '') +
              '" data-panel="' + ti + '">';
            if (typeof CodeBlock !== 'undefined') {
              html += CodeBlock.renderStandard(block.tabs[ti].code, block.lang || 'python', block.filename);
            }
            html += '</div>';
          }
          html += '</div>';
        }
        break;
      case 'ul':
        if (block.items) {
          html = '<ul>' + block.items.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
        }
        break;
      case 'ol':
        if (block.items) {
          html = '<ol>' + block.items.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ol>';
        }
        break;
      case 'callout':
        var ct = block.type || 'note';
        html = '<div class="callout callout-' + ct + '">' +
          '<span class="callout-icon">' + ({tip:'💡',warning:'⚠️',danger:'🚨',info:'ℹ️',note:'📝'}[ct]||'📝') + '</span>' +
          '<span class="callout-body">' + (block.html || '') + '</span></div>';
        break;
      case 'blockquote':
        html = '<blockquote>' + (block.html || '') + '</blockquote>';
        break;
      case 'hr':
        html = '<hr>';
        break;
      case 'next':
        html = '<p><em>' + (block.html || '') + '</em></p>';
        break;
      case 'raw':
        html = block.html || '';
        break;
      default:
        html = '<p>' + (block.html || JSON.stringify(block)) + '</p>';
    }
    return html;
  }

  function renderBody(slug, targetLang) {
    var dict = window.I18N && (window.I18N[targetLang] || window.I18N['zh-cn']);
    if (!dict) return;
    var blocks = dict.body;
    if (!blocks || !blocks.length) return;

    var container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    var html = blocks.map(renderBlock).join('\n');
    container.innerHTML = html;

    if (window.Tab) {
      container.querySelectorAll('[data-tabs="auto"]').forEach(function(el) {
        window.Tab.init(el);
      });
    }
  }

  function init() {
    var container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    var slug = container.getAttribute('data-slug');
    if (!slug) return;

    renderBody(slug, lang());

    if (window.__STATE__) {
      window.__STATE__.subscribe(['lang'], function() {
        renderBody(slug, lang());
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();