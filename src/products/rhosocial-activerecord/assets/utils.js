/**
 * utils.js - TabSwitcher + helpers
 * ═══════════════════════════════════════════════════════════════════════
 * - TabSwitcher: N-dimension tab switcher
 * - escapeHtml, attachCopyBtn: helper functions
 */
(function() {
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  window.escapeHtml = escapeHtml;

  function t(key) {
    var lang = document.documentElement.getAttribute('lang') || 'zh-cn';
    var dict = (window.I18N || {})[lang] || (window.I18N || {})['zh-cn'] || {};
    var parts = ('common.' + key).split('.');
    var v = dict;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return key;
      v = v[parts[i]];
    }
    return (typeof v === 'string') ? v : key;
  }

  window.attachCopyBtn = function(btnEl, sourceEl) {
    function getTexts() {
      return { copy: t('copy'), copied: t('copied'), failed: t('failed') || 'Failed' };
    }
    var texts = getTexts();
    btnEl.textContent = texts.copy;
    btnEl.addEventListener('click', function() {
      var currentTexts = getTexts();
      var text = sourceEl.innerText || sourceEl.textContent;
      var origText = currentTexts.copy;
      (navigator.clipboard
        ? navigator.clipboard.writeText(text)
        : Promise.resolve(document.execCommand('copy', false, text))
      ).then(function() {
        btnEl.textContent = currentTexts.copied;
        setTimeout(function() { btnEl.textContent = origText; }, 2000);
      }).catch(function() {
        btnEl.textContent = currentTexts.failed;
        setTimeout(function() { btnEl.textContent = origText; }, 2000);
      });
    });
  };

  function TabSwitcher(container, options) {
    this.container = container;
    this.dataKey = container.dataset.dataKey;
    this.renderer = TabSwitcher.RENDERERS[container.dataset.renderer || 'code'];
    this.onSwitch = options && options.onSwitch;

    this.dims = [];
    var dimRows = container.querySelectorAll('[data-dim]');
    for (var i = 0; i < dimRows.length; i++) {
      var row = dimRows[i];
      var tabs = row.querySelectorAll('[data-tab]');
      var dimObj = { id: row.dataset.dim, el: row, tabs: [] };
      for (var j = 0; j < tabs.length; j++) {
        dimObj.tabs.push(tabs[j]);
      }
      this.dims.push(dimObj);
    }

    this.state = {};
    for (var i = 0; i < this.dims.length; i++) {
      var dim = this.dims[i];
      var activeTab = null;
      for (var j = 0; j < dim.tabs.length; j++) {
        if (dim.tabs[j].classList.contains('is-active')) {
          activeTab = dim.tabs[j];
          break;
        }
      }
      this.state[dim.id] = activeTab ? activeTab.dataset.tab : (dim.tabs[0] ? dim.tabs[0].dataset.tab : null);
    }

    this._bindEvents();
    this._render();
  }

  TabSwitcher.prototype._bindEvents = function() {
    var self = this;
    for (var i = 0; i < this.dims.length; i++) {
      var dim = this.dims[i];
      for (var j = 0; j < dim.tabs.length; j++) {
        (function(btn, dimId) {
          btn.addEventListener('click', function() {
            self._switchDim(dimId, btn.dataset.tab);
          });
        })(dim.tabs[j], dim.id);
      }
    }
  };

  TabSwitcher.prototype._switchDim = function(dimId, value) {
    this.state[dimId] = value;
    this._syncActiveClass(dimId, value);
    this._render();
    if (this.onSwitch) {
      var stateCopy = {};
      for (var k in this.state) { stateCopy[k] = this.state[k]; }
      this.onSwitch({ key: this.dataKey, state: stateCopy });
    }
  };

  TabSwitcher.prototype._syncActiveClass = function(dimId, value) {
    var dim = null;
    for (var i = 0; i < this.dims.length; i++) {
      if (this.dims[i].id === dimId) { dim = this.dims[i]; break; }
    }
    if (!dim) return;
    for (var j = 0; j < dim.tabs.length; j++) {
      var isSelected = dim.tabs[j].dataset.tab === value;
      dim.tabs[j].classList.toggle('is-active', isSelected);
      dim.tabs[j].setAttribute('aria-selected', isSelected ? 'true' : 'false');
    }
  };

  TabSwitcher.prototype._resolve = function() {
    var node = (window.CONTENT_DATA || {})[this.dataKey];
    if (!node || typeof node !== 'object') return null;

    for (var i = 0; i < this.dims.length; i++) {
      if (!node || typeof node !== 'object') return null;
      var dim = this.dims[i];
      var val = this.state[dim.id];
      if (!(val in node)) {
        var keys = Object.keys(node);
        if (keys.length === 0) return null;
        val = keys[0];
        this.state[dim.id] = val;
        this._syncActiveClass(dim.id, val);
      }
      node = node[val];
    }
    return node;
  };

  TabSwitcher.prototype._render = function() {
    var display = this.container.querySelector('.tabs-display');
    if (!display) return;

    var content = this._resolve();
    if (content === null) {
      display.innerHTML = '<p class="tabs-empty">暂无数据</p>';
      return;
    }

    var self = this;
    display.innerHTML = this.renderer(content, this.state);

    display.querySelectorAll('.copy-btn').forEach(function(btn) {
      var source = display.querySelector('pre');
      if (source) window.attachCopyBtn(btn, source);
    });

    // Apply Highlight.js
    display.querySelectorAll('code.hljs').forEach(function(el) {
      if (typeof hljs !== 'undefined') hljs.highlightElement(el);
    });
  };

  function stripHtmlTags(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  window.stripHtmlTags = stripHtmlTags;

  TabSwitcher.RENDERERS = {
    code: function(raw, state) {
      var lang = (state && state.lang) || 'python';
      var plainCode = stripHtmlTags(raw);
      var copyText = t('copy');
      return '<div class="code-block">'
        + '<div class="code-header"><span class="code-lang">' + lang + '</span>'
        + '<button class="copy-btn" aria-label="copy code">⎘ ' + copyText + '</button></div>'
        + '<div class="code-body"><pre><code class="language-' + lang + ' hljs">'
        + window.escapeHtml(plainCode) + '</code></pre></div></div>';
    },
    html: function(raw) { return raw; }
  };

  window.TabSwitcher = TabSwitcher;

  window.initAllTabSwitchers = function(options) {
    var containers = document.querySelectorAll('[data-component="tabs-switcher"]');
    for (var i = 0; i < containers.length; i++) {
      new TabSwitcher(containers[i], options);
    }
  };
})();