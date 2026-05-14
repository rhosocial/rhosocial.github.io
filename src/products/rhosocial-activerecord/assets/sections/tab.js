(function() {
  'use strict';

  function initTab(container) {
    if (container.getAttribute('data-tabs-ready')) return;
    container.setAttribute('data-tabs-ready', 'true');
    var tabs = container.querySelectorAll('.tab');
    var panels = {};

    container.querySelectorAll('.tab-panel').forEach(function(p) {
      var key = p.getAttribute('data-panel');
      if (key) panels[key] = p;
    });

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function(e) {
        var key = tab.getAttribute('data-tab');
        if (!key) return;

        tabs.forEach(function(t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');

        Object.keys(panels).forEach(function(k) {
          panels[k].classList.toggle('is-active', k === key);
        });

        var event = new CustomEvent('tab-switch', {
          detail: { tab: key, container: container }
        });
        container.dispatchEvent(event);
      });
    });
  }

  function initAll() {
    document.querySelectorAll('[data-tabs="auto"]').forEach(initTab);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  window.Tab = { init: initTab };
})();
