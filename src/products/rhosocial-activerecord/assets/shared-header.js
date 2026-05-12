/**
 * shared-header.js — Legacy: analytics SDK injection only
 *
 * Control bar and i18n have moved to:
 *   - control-bar.js  (renders and handles dropdown interaction)
 *   - i18n.js         (applies language translations)
 *   - theme-applier.js (reacts to theme/font/lang state changes)
 *
 * This file retains only the analytics SDK injection (GA4 + Baidu + analytics.js).
 * It is loaded last among the new system.
 */
(function () {
  'use strict';

  if (window._analyticsInjected) return;
  window._analyticsInjected = true;

  // GA4 SDK
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-VPM29QVEST');

  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-VPM29QVEST';
  document.head.appendChild(gaScript);

  // Baidu SDK
  window._hmt = window._hmt || [];
  var hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?94120eca87dedf57cf0c46979991365b';
  document.head.appendChild(hm);

  // analytics.js — resolve path relative to assets directory
  var scripts = document.getElementsByTagName('script');
  var currentSrc = '';
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf('shared-header.js') !== -1) {
      currentSrc = scripts[i].src;
      break;
    }
  }
  var basePath = currentSrc ? currentSrc.substring(0, currentSrc.lastIndexOf('/') + 1) : '../assets/';
  var analyticsScript = document.createElement('script');
  analyticsScript.src = basePath + 'analytics.js';
  document.head.appendChild(analyticsScript);
})();