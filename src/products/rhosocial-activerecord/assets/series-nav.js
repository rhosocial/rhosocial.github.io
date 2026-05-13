/**
 * series-nav.js — Article series structure data + article page series nav
 *
 * Exposes:
 *   window.__SERIES_STRUCTURE  — series & post structure (no i18n text)
 *   window.__SERIES_NAV        — article nav renderer
 *
 * Index page rendering is handled by blog-index.js (reads I18N for post metadata).
 * Article page nav reads post titles from each article's own i18n (already loaded).
 *
 * Load after i18n.js, before blog-index.js.
 */
(function() {
  'use strict';

  // ─── Series Structure ──────────────────────────────────────────────
  // Only structure (slug lists, status). No i18n text for titles/descs.
  // Index page reads titles/descs from index i18n JS.
  // Article nav reads titles from article page i18n JS.

  window.__SERIES_STRUCTURE = {
    coreDesign: {
      name: { 'zh-cn': '核心设计决策', 'en-us': 'Core Design Decisions' },
      posts: [
        { slug: 'why-activerecord', key: 'whyActiverecord', date: '2026-05-13', cats: ['Design','Architecture'], status: 'published', titleStub: {'zh-cn':'为什么选择 ActiveRecord 设计模式','en-us':'Why the ActiveRecord Pattern'} },
        { slug: 'why-pydantic-v2', key: 'whyPydanticV2', date: '2026-05-13', cats: ['Design','Architecture'], status: 'published', titleStub: {'zh-cn':'为什么我们选择 Pydantic v2 作为 ActiveRecord 的基类','en-us':'Why We Chose Pydantic v2 as ActiveRecord\'s Base Class'} },
        { slug: 'fluent-api', key: 'fluentApi', date: '2026-05-14', cats: ['Design','API'], status: 'published', titleStub: {'zh-cn':'流式 API：ActiveRecord.save 与 ActiveQuery','en-us':'Fluent API: ActiveRecord.save and ActiveQuery'} },
        { slug: 'relation-mapping', key: 'relationMapping', date: '2026-05-15', cats: ['Relation','Design'], status: 'published', titleStub: {'zh-cn':'关系映射：声明方式与加载策略','en-us':'Relation Mapping: Declaration & Loading Strategies'} },
        { slug: 'field-proxy', key: 'fieldProxy', date: '2026-05-16', cats: ['Architecture','Field'], status: 'published', titleStub: {'zh-cn':'为什么需要字段代理','en-us':'Why We Need Field Proxy'} },
        { slug: 'core-backend-separation', key: 'coreBackendSeparation', date: '2026-05-17', cats: ['Architecture','Backend'], status: 'published', titleStub: {'zh-cn':'ActiveRecord-后端分离架构：设计理念与实践','en-us':'ActiveRecord-Backend Separation: Design Philosophy & Practice'} },
        { slug: 'sync-async-symmetry', key: 'syncAsyncSymmetry', date: '2026-05-18', cats: ['Design','API'], status: 'published', titleStub: {'zh-cn':'Sync/Async API 对称设计：命名的艺术','en-us':'Sync/Async API Symmetry: The Art of Naming'} }
      ]
    },
    exprDialect: {
      name: { 'zh-cn': '表达式与方言系统', 'en-us': 'Expression & Dialect System' },
      posts: [
        { slug: 'expression-system-design', key: 'expressionSystemDesign', date: '2026-05-19', cats: ['Query','Architecture'], status: 'published', titleStub: {'zh-cn':'Expression 系统的设计哲学','en-us':'The Design Philosophy of the Expression System'} },
        { slug: 'dialect-abstraction', key: 'dialectAbstraction', date: '2026-05-20', cats: ['Dialect','Extension'], status: 'published', titleStub: {'zh-cn':'Dialect 系统：通用表达式与方言扩展','en-us':'Dialect System: Common Expressions & Dialect Extensions'} }
      ]
    },
    backendDeepDive: {
      name: { 'zh-cn': '后端深度解析', 'en-us': 'Backend Deep Dive' },
      posts: [
        { slug: '', key: 'namedConnections', date: 'TBD', cats: ['Connection','Management'], status: 'planned', titleStub: {'zh-cn':'命名连接：多数据库连接管理','en-us':'Named Connections: Multi-Database Connection Management'} },
        { slug: '', key: 'namedQueries', date: 'TBD', cats: ['Query','Optimization'], status: 'planned', titleStub: {'zh-cn':'命名查询：预定义查询的注册与复用','en-us':'Named Queries: Registration and Reuse of Predefined Queries'} },
        { slug: '', key: 'namedProcedures', date: 'TBD', cats: ['Procedure','Runtime'], status: 'planned', titleStub: {'zh-cn':'命名过程：存储过程与运行时的优雅封装','en-us':'Named Procedures: Elegant Encapsulation of Stored Procedures at Runtime'} }
      ]
    },
    multiBackend: {
      name: { 'zh-cn': '多后端特殊功能', 'en-us': 'Multi-Backend Special Features' },
      posts: [
        { slug: '', key: 'postgresFeatures', date: 'TBD', cats: ['PostgreSQL','PostGIS'], status: 'planned', titleStub: {'zh-cn':'PostgreSQL 后端的高级功能支持','en-us':'PostgreSQL Backend Advanced Features'} },
        { slug: '', key: 'mysqlMariadbFeatures', date: 'TBD', cats: ['MySQL','MariaDB'], status: 'planned', titleStub: {'zh-cn':'MySQL 与 MariaDB 后端：特性差异与兼容处理','en-us':'MySQL & MariaDB Backends: Feature Differences & Compatibility'} },
        { slug: '', key: 'sqlserverOracleAdaptation', date: 'TBD', cats: ['SQL Server','Oracle'], status: 'planned', titleStub: {'zh-cn':'SQL Server 与 Oracle 后端：适配的挑战','en-us':'SQL Server & Oracle Backends: Adaptation Challenges'} },
        { slug: '', key: 'backendSpecialFeatures', date: 'TBD', cats: ['Backend','Guide'], status: 'planned', titleStub: {'zh-cn':'各数据库后端特殊功能支持指南','en-us':'Multi-Backend Special Features Guide'} }
      ]
    },
    bestPractices: {
      name: { 'zh-cn': '实战与最佳实践', 'en-us': 'Best Practices' },
      posts: [
        { slug: '', key: 'migrationSystem', date: 'TBD', cats: ['Migration','Schema'], status: 'planned', titleStub: {'zh-cn':'迁移（Migration）系统运作指南','en-us':'Migration System Operation Guide'} },
        { slug: '', key: 'dualValidation', date: 'TBD', cats: ['Validation','Security'], status: 'planned', titleStub: {'zh-cn':'数据验证的双重保障','en-us':'Dual Validation Guarantee'} },
        { slug: '', key: 'batchOperations', date: 'TBD', cats: ['Performance','Batch'], status: 'planned', titleStub: {'zh-cn':'批量操作与性能优化','en-us':'Batch Operations & Performance Optimization'} },
        { slug: '', key: 'testContract', date: 'TBD', cats: ['Testing','QA'], status: 'planned', titleStub: {'zh-cn':'测试策略：testsuite 的契约测试体系','en-us':'Test Strategy: The Contract Testing System of testsuite'} }
      ]
    }
  };

  // ─── Article Nav Renderer ──────────────────────────────────────────

  function lang() {
    return (window.__STATE__ && window.__STATE__.get('lang')) || 'zh-cn';
  }

  function t(dict) { return (dict && (dict[lang()] || dict['zh-cn'])) || dict || ''; }

  function getArticleTitle(slug) {
    // First try: article's own i18n hero.title
    var dict = window.I18N && window.I18N[lang()];
    if (dict && dict.hero && dict.hero.title) return dict.hero.title;
    var zhDict = window.I18N && window.I18N['zh-cn'];
    if (zhDict && zhDict.hero && zhDict.hero.title) return zhDict.hero.title;
    return slug;
  }

  // Build slug -> series key lookup
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
      // Read current article title for the active marker
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
        var title = isActive ? currentTitle : t(post.titleStub);

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

  // Auto-render article nav if container found
  var navContainer = document.getElementById('series-article-nav');
  if (navContainer) {
    var currentSlug = navContainer.getAttribute('data-slug');
    if (currentSlug) window.__SERIES_NAV.renderArticleNav(navContainer, currentSlug);
  }
})();