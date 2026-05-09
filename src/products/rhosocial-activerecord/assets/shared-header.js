/**
 * shared-header.js — Unified control bar for all subpages
 *
 * Two variants via data-header-variant:
 *   "ar"   — breadcrumb: Theme Lab / Backends / ActiveRecord  (activerecord/ subpages)
 *   "back" — breadcrumb: Index / Backends / ActiveRecord     (backends/ subpages)
 *
 * Usage: <script src="../assets/shared-header.js" data-header-variant="ar"></script>
 */
(function() {
  var html = document.documentElement;
  var THEMES = 'terminal,editorial,brutalist,aurora,synthwave,sumi,blueprint,noir,riso,nordic,solarpunk,mocha,wireframe,anderson,tokyo,memphis,chalkboard,matrix,steel,frutiger,newsprint,candy,botanical,cyberpunk,parchment,glassmorphism'.split(',');
  var FONTS = 'auto,tight,serif,geometric,heavy,allmono,reader,display-serif,neo-future,plex,playful,classic-serif,pixel,monumental,slab,condensed,expressive,deco,stencil,rubik,bricolage,gloock,crimson,dm,outfit,literata'.split(',');
  var LANGS = 'zh-cn,en-us'.split(',');
  var QWERTY = 'qwertyuiopasdfghjklzxcvbnm';
  var LANG_COLLAPSE = {zh:'zh-cn',en:'en-us',fr:'fr-fr',ru:'ru-ru',es:'es-es',ar:'ar',ja:'ja-jp',de:'de-de',ko:'ko-kr',pt:'pt-pt',nl:'nl-nl',it:'it-it',tr:'tr-tr',el:'el-gr',hi:'hi-in',id:'id-id',vi:'vi-vn',pl:'pl-pl',th:'th-th',uk:'uk-ua',fa:'fa-ir',bn:'bn-bd',ro:'ro-ro',cs:'cs-cz'};

  /* ---------- helpers ---------- */
  function matchLang(tag) {
    if (!tag) return null;
    var lower = String(tag).toLowerCase();
    if (LANGS.indexOf(lower) !== -1) return lower;
    var p = lower.split('-')[0];
    return LANG_COLLAPSE[p] || null;
  }
  function detectLang() {
    try { var u = new URLSearchParams(location.search).get('lang'); var m = matchLang(u); if (m) return m; } catch(e) {}
    try { var s = localStorage.getItem('rhosocial-lang'); var m = matchLang(s); if (m) return m; } catch(e) {}
    var nav = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || navigator.userLanguage || ''];
    for (var i=0;i<nav.length;i++) { var m=matchLang(nav[i]); if (m) return m; }
    return 'en-us';
  }
  function get(path, dict) { return path.split('.').reduce(function(o,k){return (o==null?undefined:o[k])}, dict); }
  var currentLang = detectLang();

  function applyI18n() {
    var dict = window.I18N && window.I18N[currentLang];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var val = get(el.getAttribute('data-i18n'), dict);
      if (val !== undefined) el.innerHTML = val;
    });
    refreshValueLabel('theme', html.getAttribute('data-theme'));
    refreshValueLabel('font', html.getAttribute('data-font'));
    refreshValueLabel('lang', currentLang);
  }

  function refreshValueLabel(kind, value) {
    var dd = document.querySelector('[data-dropdown="'+kind+'"]');
    if (!dd) return;
    var item = dd.querySelector('.dropdown-item[data-value="'+value+'"]');
    if (!item) return;
    var ve = dd.querySelector('.dropdown-value');
    if (ve) ve.textContent = (item.querySelector('.dropdown-item-label')||{}).textContent || value;
  }

  function setValue(kind, value) {
    if (kind === 'lang') {
      currentLang = value;
      html.setAttribute('lang', value);
      html.setAttribute('dir', (value==='ar'||value==='fa-ir') ? 'rtl' : 'ltr');
      try { localStorage.setItem('rhosocial-lang', value); } catch(e) {}
      (function(){var o=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add("visible");o.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll(".reveal").forEach(function(e){o.observe(e)})})();void 0
      applyI18n();
    } else {
      html.setAttribute('data-'+kind, value);
    }
    var dd = document.querySelector('[data-dropdown="'+kind+'"]');
    if (!dd) return;
    var label = null;
    dd.querySelectorAll('.dropdown-item').forEach(function(it) {
      var match = it.getAttribute('data-value') === value;
      it.classList.toggle('is-active', match);
      if (match) label = (it.querySelector('.dropdown-item-label')||{}).textContent || value;
    });
    var ve = dd.querySelector('.dropdown-value');
    if (ve && label) ve.textContent = label;
  }

  function closeAll(except) {
    document.querySelectorAll('.dropdown.is-open').forEach(function(d) {
      if (d !== except) { d.classList.remove('is-open'); (d.querySelector('.dropdown-trigger')||{}).setAttribute('aria-expanded','false'); }
    });
  }

  /* ---------- breadcrumb ---------- */
  var variant = document.currentScript && document.currentScript.getAttribute('data-header-variant') || 'ar';
  var breadcrumb = variant === 'back'
    ? '<a href="../index.html" data-i18n="nav.index">Index</a> / <a href="./index.html" data-i18n="nav.backends">Backends</a> / <a href="../activerecord/index.html" data-i18n="nav.activerecord">ActiveRecord</a>'
    : '<a href="../index.html" data-i18n="nav.themes">Theme Lab</a> / <a href="../backends/index.html" data-i18n="nav.backends">Backends</a> / <a href="./index.html" data-i18n="nav.activerecord">ActiveRecord</a>';

  /* ---------- build header ---------- */
  var header = document.createElement('header');
  header.className = 'control-bar';
  header.innerHTML =
    '<div class="control-brand">' +
      '<span class="brand-mark size-md">&rho;<sub>AR</sub></span>' +
      '<span>rhosocial ActiveRecord</span>' +
      '<span class="dim">' + breadcrumb + '</span>' +
    '</div>' +
    '<div class="dropdown" data-dropdown="theme">' +
      '<button class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false"><span class="dropdown-label" data-i18n="control.theme_label">Theme</span><span class="dropdown-value">Terminal</span><svg class="dropdown-caret" viewBox="0 0 12 12" fill="none"><path d="m3 5 3 3 3-3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<div class="dropdown-menu" role="listbox">' +
        THEMES.map(function(t,i){return '<button class="dropdown-item'+(i===0?' is-active':'')+'" data-value="'+t+'"><span class="dropdown-item-label">'+t.charAt(0).toUpperCase()+t.slice(1)+'</span><span class="dropdown-item-kbd">&#8963;'+QWERTY[i].toUpperCase()+'</span></button>'}).join('') +
      '</div>' +
    '</div>' +
    '<div class="dropdown" data-dropdown="font">' +
      '<button class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false"><span class="dropdown-label" data-i18n="control.font_label">Font</span><span class="dropdown-value" data-i18n-value="auto">Auto</span><svg class="dropdown-caret" viewBox="0 0 12 12" fill="none"><path d="m3 5 3 3 3-3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<div class="dropdown-menu" role="listbox">' +
        FONTS.map(function(f,i){return '<button class="dropdown-item'+(i===0?' is-active':'')+'" data-value="'+f+'"><span class="dropdown-item-label">'+(f==='auto'?'Auto (theme default)':f.charAt(0).toUpperCase()+f.slice(1))+'</span><span class="dropdown-item-kbd">&#8679;'+QWERTY[i].toUpperCase()+'</span></button>'}).join('') +
      '</div>' +
    '</div>' +
    '<div class="dropdown" data-dropdown="lang">' +
      '<button class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false"><span class="dropdown-label" data-i18n="control.lang_label">Language</span><span class="dropdown-value"></span><svg class="dropdown-caret" viewBox="0 0 12 12" fill="none"><path d="m3 5 3 3 3-3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<div class="dropdown-menu" role="listbox">' +
        '<button class="dropdown-item is-active" data-value="zh-cn"><span class="dropdown-item-label">简体中文</span><span class="dropdown-item-kbd">&#8997;Q</span></button>' +
        '<button class="dropdown-item" data-value="en-us"><span class="dropdown-item-label">English</span><span class="dropdown-item-kbd">&#8997;W</span></button>' +
      '</div>' +
    '</div>';

  document.body.prepend(header);

  /* ---------- install dropdown event handlers ---------- */
  document.querySelectorAll('[data-dropdown]').forEach(function(dd) {
    var trigger = dd.querySelector('.dropdown-trigger');
    var kind = dd.getAttribute('data-dropdown');
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      var willOpen = !dd.classList.contains('is-open');
      closeAll(dd);
      dd.classList.toggle('is-open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });
    dd.querySelectorAll('.dropdown-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        var value = item.getAttribute('data-value');
        if (kind === 'theme' || kind === 'font' || kind === 'lang') {
          setValue(kind, value);
        } else {
          dd.querySelectorAll('.dropdown-item').forEach(function(it) { it.classList.toggle('is-active', it===item); });
          var ve = dd.querySelector('.dropdown-value');
          if (ve) ve.textContent = (item.querySelector('.dropdown-item-label')||{}).textContent || value;
        }
        dd.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
  });

  document.addEventListener('click', function(e) { if (!e.target.closest('.dropdown')) closeAll(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeAll(); });

  document.addEventListener('keydown', function(e) {
    var mod = e.ctrlKey || e.metaKey;
    var key = e.key.toLowerCase();
    var idx = QWERTY.indexOf(key);
    if (idx === -1) return;
    if (mod && !e.shiftKey) { e.preventDefault(); setValue('theme', THEMES[idx % THEMES.length]); }
    else if (mod && e.shiftKey) { e.preventDefault(); setValue('font', FONTS[idx % FONTS.length]); }
    else if (e.altKey && !mod && !e.shiftKey) { e.preventDefault(); setValue('lang', LANGS[idx % LANGS.length]); }
  });

  applyI18n();
})();