/**
 * series-nav.js — Article series structure data + article page series nav
 *
 * Exposes:
 *   window.__SERIES_STRUCTURE  — series & post structure (minimal, no i18n text)
 *   window.__SERIES_NAV        — article nav renderer
 *
 * Post metadata (title, sub/tagline, desc, date, cats) is read at render time
 * from index i18n (window.I18N[lang].posts), which is the single source of truth.
 * Article page nav reads the current article's own title from hero.title (already loaded).
 *
 * Load after i18n.js, before blog-index.js.
 */
(function() {
  'use strict';

  window.__SERIES_STRUCTURE = {
    coreDesign: {
      name: { 'zh-cn': '核心设计决策', 'en-us': 'Core Design Decisions' },
      posts: [
        { slug: 'why-activerecord', key: 'whyActiverecord', status: 'published' },
        { slug: 'why-pydantic-v2', key: 'whyPydanticV2', status: 'published' },
        { slug: 'fluent-api', key: 'fluentApi', status: 'published' },
        { slug: 'relation-mapping', key: 'relationMapping', status: 'published' },
        { slug: 'field-proxy', key: 'fieldProxy', status: 'published' },
        { slug: 'core-backend-separation', key: 'coreBackendSeparation', status: 'published' },
        { slug: 'sync-async-symmetry', key: 'syncAsyncSymmetry', status: 'published' }
      ]
    },
    exprDialect: {
      name: { 'zh-cn': '表达式与方言系统', 'en-us': 'Expression & Dialect System' },
      posts: [
        { slug: 'expression-system-design', key: 'expressionSystemDesign', status: 'published' },
        { slug: 'dialect-abstraction', key: 'dialectAbstraction', status: 'published' }
      ]
    },
    backendDeepDive: {
      name: { 'zh-cn': '后端深度解析', 'en-us': 'Backend Deep Dive' },
      posts: [
        { slug: '', key: 'namedConnections', status: 'planned' },
        { slug: '', key: 'namedQueries', status: 'planned' },
        { slug: '', key: 'namedProcedures', status: 'planned' }
      ]
    },
    multiBackend: {
      name: { 'zh-cn': '多后端特殊功能', 'en-us': 'Multi-Backend Special Features' },
      posts: [
        { slug: '', key: 'postgresFeatures', status: 'planned' },
        { slug: '', key: 'mysqlMariadbFeatures', status: 'planned' },
        { slug: '', key: 'sqlserverOracleAdaptation', status: 'planned' },
        { slug: '', key: 'backendSpecialFeatures', status: 'planned' }
      ]
    },
    bestPractices: {
      name: { 'zh-cn': '实战与最佳实践', 'en-us': 'Best Practices' },
      posts: [
        { slug: '', key: 'migrationSystem', status: 'planned' },
        { slug: '', key: 'dualValidation', status: 'planned' },
        { slug: '', key: 'batchOperations', status: 'planned' },
        { slug: '', key: 'testContract', status: 'planned' }
      ]
    }
  };

  function lang() {
    return (window.__STATE__ && window.__STATE__.get('lang')) || 'zh-cn';
  }

  function t(dict) { return (dict && (dict[lang()] || dict['zh-cn'])) || dict || ''; }

  function getPostMeta(key) {
    var dict = window.I18N && (window.I18N[lang()] || window.I18N['zh-cn']);
    return (dict && dict.posts && dict.posts[key]) || null;
  }

  function getArticleTitle(slug) {
    var dict = window.I18N && window.I18N[lang()];
    if (dict && dict.hero && dict.hero.title) return dict.hero.title;
    var zhDict = window.I18N && window.I18N['zh-cn'];
    if (zhDict && zhDict.hero && zhDict.hero.title) return zhDict.hero.title;
    return slug;
  }

  var SLUG_MAP = {};
  var STRUCTURE = window.__SERIES_STRUCTURE;
  Object.keys(STRUCTURE).forEach(function(key) {
    STRUCTURE[key].posts.forEach(function(post) {
      if (post.slug) SLUG_MAP[post.slug] = key;
    });
  });

  window.__SERIES_NAV = {
    renderArticleNav: function(container, slug) {
      var key = SLUG_MAP[slug];
      if (!key) { container.style.display = 'none'; return; }

      var series = STRUCTURE[key];
      var currentTitle = getArticleTitle(slug);

      var labels = {
        'zh-cn': { series: '专题', comingSoon: '即将发布' },
        'en-us': { series: 'Series', comingSoon: 'Coming Soon' }
      };
      var l = (labels[lang()] || labels['zh-cn']);

      var html = '';
      html += '<div class="series-nav-inner">';
      html += '<div class="series-nav-header">';
      html += '<span class="series-nav-label">' + l.series + '</span>';
      html += '<span class="series-nav-name">' + t(series.name) + '</span>';
      html += '</div>';
      html += '<ul class="series-nav-list">';

      series.posts.forEach(function(post) {
        var isActive = post.slug === slug;
        var isPublished = post.status === 'published';
        var cls = isActive ? 'series-nav-item active' : (isPublished ? 'series-nav-item inactive' : 'series-nav-item coming-soon');

        var meta = getPostMeta(post.key);
        var title = isActive ? currentTitle : (meta ? meta.title : post.key);
        var sub = meta ? meta.sub : '';

        html += '<li class="' + cls + '">';
        html += '<span>' + title + '</span>';
        if (!isActive && isPublished) {
          html += '<span class="series-nav-marker" style="font-size:11px;color:var(--text-muted);margin-left:auto">→</span>';
        } else if (!isActive && !isPublished) {
          html += '<span class="series-nav-marker" style="font-size:11px;color:var(--text-muted);margin-left:auto">' + l.comingSoon + '</span>';
        }
        html += '</li>';
      });

      html += '</ul></div>';
      container.innerHTML = html;
    }
  };

  var navContainer = document.getElementById('series-article-nav');
  if (navContainer) {
    var currentSlug = navContainer.getAttribute('data-slug');
    if (currentSlug) window.__SERIES_NAV.renderArticleNav(navContainer, currentSlug);
  }
})();