/**
 * blog-article-date.js
 * Client-side date formatter for <time class="article-date"> elements.
 * Uses Intl.DateTimeFormat to display locale-aware dates.
 * Subscribes to language changes from state-manager.
 */
(function() {
  'use strict';

  function formatArticleDates() {
    // Determine current locale from __STATE__ or document lang
    var lang = 'en-us';
    try {
      if (window.__STATE__ && typeof window.__STATE__.get === 'function') {
        lang = window.__STATE__.get('lang') || 'en-us';
      }
    } catch(e) {}

    // Normalize locale: 'zh-cn' → 'zh-CN', 'en-us' → 'en-US'
    var locale = lang.replace(/-/g, '-');
    // Handle special cases: 'zh-cn' needs 'zh-CN' for Intl
    var parts = locale.split('-');
    if (parts.length >= 2) {
      locale = parts[0] + '-' + parts[1].toUpperCase();
    }

    // Define format options per locale for finer control
    var options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };

    // Special handling for Chinese: prefer "年月日" format
    // Intl.DateTimeFormat with zh-CN naturally gives "2026年5月13日"
    // For English: "May 13, 2026"
    // These are the defaults, but we can customize if needed

    try {
      var fmt = new Intl.DateTimeFormat(locale, options);

      document.querySelectorAll('time.article-date[data-utc-pubtime]').forEach(function(el) {
        var dateStr = el.getAttribute('data-utc-pubtime');
        if (!dateStr) return;
        var d = new Date(dateStr);
        if (isNaN(d.getTime())) return;
        el.textContent = fmt.format(d);
      });
    } catch(e) {
      // Fallback: keep the server-rendered YYYY-MM-DD format
    }
  }

  function onReady() {
    formatArticleDates();

    // Subscribe to language changes (deferred: __STATE__ may not exist yet)
    if (window.__STATE__ && typeof window.__STATE__.subscribe === 'function') {
      window.__STATE__.subscribe(['lang'], formatArticleDates);
    }
  }

  // Defer all work to DOMContentLoaded so state-manager.js has loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();