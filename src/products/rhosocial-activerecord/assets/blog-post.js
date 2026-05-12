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
        html = '<pre>' + (block.text || block.html || '') + '</pre>';
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

  function renderBody(slug, targetLang) {
    var dict = window.I18N && (window.I18N[targetLang] || window.I18N['zh-cn']);
    if (!dict) return;
    var blocks = dict.body;
    if (!blocks || !blocks.length) return;

    var container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    // Render all data-driven blocks
    var html = blocks.map(renderBlock).join('\n');
    container.innerHTML = html;
  }

  function init() {
    var container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    var slug = container.getAttribute('data-slug');
    if (!slug) return;

    renderBody(slug, lang());

    // Subscribe to lang changes
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