/**
 * blog-index.js — Renders the blog index page with series-grouped post cards
 * Depends on series-nav.js for SERIES_STRUCTURE data and index page i18n
 * for post metadata. Subscribes to lang changes.
 * Load after series-nav.js, before shared-footer.js.
 */
(function() {
  'use strict';

  function lang() {
    return (window.__STATE__ && window.__STATE__.get('lang')) || 'zh-cn';
  }

  function t(dict) { return (dict && (dict[lang()] || dict['zh-cn'])) || dict || ''; }

  var LABELS = {
    'zh-cn': { read: '阅读全文 →', planned: '即将发布 →' },
    'en-us': { read: 'Read more →', planned: 'Coming Soon →' }
  };
  function l(key) { return (LABELS[lang()] || LABELS['zh-cn'])[key] || key; }

  function render() {
    var container = document.getElementById('series-index-container');
    if (!container) return;

    var structure = window.__SERIES_STRUCTURE;
    if (!structure) return;

    // Read post metadata from index page i18n
    var dict = window.I18N && (window.I18N[lang()] || window.I18N['zh-cn']);
    var postsMeta = dict && dict.posts;

    // Build slug -> metadata lookup + key -> metadata lookup
    var meta = {};
    if (postsMeta) {
      Object.keys(postsMeta).forEach(function(key) {
        var p = postsMeta[key];
        meta[p.slug || key] = p;
      });
    }

    var keys = Object.keys(structure);
    var html = '';

    keys.forEach(function(key) {
      var series = structure[key];
      var published = series.posts.filter(function(p) { return p.status === 'published'; }).length;

      html += '<div class="series-section" style="grid-column:1/-1">';
      html += '<div class="series-header">';
      html += '<span class="series-name">' + t(series.name) + '</span>';
      html += '<span class="series-count">' + published + '/' + series.posts.length + '</span>';
      html += '</div>';
      html += '<div class="series-grid">';

      series.posts.forEach(function(post) {
        var m = meta[post.slug || post.key] || {};
        var isPublished = post.status === 'published';
        var cls = isPublished ? 'blog-card' : 'blog-card placeholder';
        var href = isPublished ? 'href="./' + post.slug + '.html"' : '';
        var date = m.date || post.date || 'TBD';
        var cats = m.cats || post.cats || [];
        var title = m.title || t(post.titleStub) || post.slug;
        var desc = m.desc || '';

        html += '<a ' + href + ' class="' + cls + '" style="--accent:' + (isPublished ? 'var(--code-class)' : 'var(--tok-fn)') + '">';
        html += '<div class="blog-card-date">' + date + '</div>';
        html += '<div class="blog-card-cats">' + cats.map(function(c) { return '<span class="blog-card-cat">' + c + '</span>'; }).join('') + '</div>';
        html += '<div class="blog-card-title">' + title + '</div>';
        html += '<div class="blog-card-desc">' + desc + '</div>';
        html += '<span class="blog-card-read">' + (isPublished ? l('read') : l('planned')) + '</span>';
        html += '</a>';
      });

      html += '</div></div>';
    });

    container.innerHTML = html;
  }

  function init() {
    render();
    if (window.__STATE__) {
      window.__STATE__.subscribe(['lang'], render);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();