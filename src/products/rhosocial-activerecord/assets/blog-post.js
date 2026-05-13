/**
 * blog-post.js — Renders article body from i18n data
 * Looks for <div id="post-body" data-slug="xxx"> and renders structured content
 * from window.I18N[lang].body array. Supports both data-driven rendering
 * and static HTML children (for custom components, media, etc.).
 * Subscribes to lang changes for live re-render.
 * Load after i18n.js, before shared-footer.js.
 */
(function() {
  'use strict';

  var CONTAINER_ID = 'post-body';
  var CSS_INJECTED = false;

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

  /* ── Python tokenizer (produces tok-kw/fn/num/cls/s/c/op spans) ── */
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

      // Comment
      if (ch === '#' && (i === 0 || !isWord(escaped[i - 1]))) {
        var end = escaped.indexOf('\n', i);
        if (end === -1) end = n;
        out += '<span class="tok-c">' + escaped.slice(i, end) + '</span>';
        i = end;
        continue;
      }

      // String literal
      if (ch === '"' || ch === "'") {
        var quote = ch;
        var j = i + 1;
        while (j < n) {
          if (escaped[j] === '\\') { j += 2; continue; }
          if (escaped[j] === quote) { j++; break; }
          j++;
        }
        out += '<span class="tok-s">' + escaped.slice(i, j) + '</span>';
        i = j;
        continue;
      }

      // Number
      if (ch >= '0' && ch <= '9') {
        var j = i;
        while (j < n && ((escaped[j] >= '0' && escaped[j] <= '9') ||
               escaped[j] === '.' || escaped[j] === 'e' || escaped[j] === 'E' ||
               escaped[j] === 'x' || escaped[j] === 'X')) j++;
        out += '<span class="tok-num">' + escaped.slice(i, j) + '</span>';
        i = j;
        continue;
      }

      // Word
      if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch === '_') {
        var j = i;
        while (j < n && isWord(escaped[j])) j++;
        var word = escaped.slice(i, j);
        if (KW[word]) {
          out += '<span class="tok-kw">' + word + '</span>';
        } else if (j < n && escaped[j] === '(') {
          out += '<span class="tok-fn">' + word + '</span>';
        } else {
          out += word;
        }
        i = j;
        continue;
      }

      // Everything else
      out += ch;
      i++;
    }
    return out;
  }

  /* ── Copy button i18n ── */
  var COPY_BTN_LABELS = {
    'zh-cn': { copy: '复制', copied: '已复制' },
    'en-us': { copy: 'Copy', copied: 'Copied!' }
  };
  function copyLabel(key) {
    var l = lang();
    return (COPY_BTN_LABELS[l] || COPY_BTN_LABELS['en-us'])[key] || key;
  }

  /* ── Inject copy button CSS (one-time) ── */
  function injectCodeBlockCSS() {
    if (CSS_INJECTED) return;
    CSS_INJECTED = true;
    var style = document.createElement('style');
    style.textContent =
      '.code-copy-btn{' +
        'margin-left:auto;background:none;border:1px solid var(--code-border);' +
        'color:var(--code-fg-muted);padding:2px 8px;border-radius:3px;' +
        'font-size:10px;cursor:pointer;font-family:var(--font-mono);' +
        'transition:color 0.2s,border-color 0.2s;opacity:0;' +
      '}' +
      '.code-header:hover .code-copy-btn{opacity:1}' +
      '.code-copy-btn:hover{color:var(--code-fg);border-color:var(--code-fg-muted)}';
    document.head.appendChild(style);
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
        var codeText = block.text || block.html || '';
        var filename = block.filename || '';
        var highlighted = tokenizePython(codeText);
        html = '<div class="code-block">' +
          '<div class="code-header">' +
            '<div class="code-dots"><span></span><span></span><span></span></div>' +
            '<span class="code-filename">' + escape(filename) + '</span>' +
            '<button class="code-copy-btn" type="button">' + copyLabel('copy') + '</button>' +
          '</div>' +
          '<div class="code-body"><pre>' + highlighted + '</pre></div>' +
        '</div>';
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
        html = '<div class="callout">' + (block.html || '') + '</div>';
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

  /* ── Copy handler via event delegation on #post-body ── */
  function onCopyClick(e) {
    var btn = e.target.closest('.code-copy-btn');
    if (!btn) return;
    var block = btn.closest('.code-block');
    if (!block) return;
    var pre = block.querySelector('.code-body pre');
    if (!pre) return;
    var code = pre.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(function() {
        var orig = btn.textContent;
        btn.textContent = copyLabel('copied');
        setTimeout(function() { btn.textContent = orig; }, 1200);
      });
    }
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
  }

  function init() {
    injectCodeBlockCSS();

    var container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    var slug = container.getAttribute('data-slug');
    if (!slug) return;

    renderBody(slug, lang());

    // One-time event delegation for copy buttons
    container.addEventListener('click', onCopyClick);

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