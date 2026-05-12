/**
 * init-head.js — Blocking script for <head>
 *
 * ⚠ MUST be loaded BEFORE any CSS <link> to eliminate FOUC/flash.
 *
 * Responsibilities:
 *   1. Detect and apply theme/font/lang from: URL query > localStorage > defaults
 *   2. Write data-theme / data-font / lang on <html> BEFORE stylesheets load
 *   3. Initialize global store with detected values
 *
 * Usage in <head>:
 *   <script src="assets/init-head.js"></script>
 */
(function () {
  // ── Data ────────────────────────────────────────────────────────
  // Minimal inline data to avoid dependency on themes.js at this stage
  var ALL_THEMES = 'terminal,editorial,brutalist,aurora,synthwave,sumi,blueprint,noir,riso,nordic,solarpunk,mocha,wireframe,anderson,tokyo,memphis,chalkboard,matrix,steel,frutiger,newsprint,candy,botanical,cyberpunk,parchment,glassmorphism'.split(',');
  var ALL_FONTS = 'auto,tight,serif,geometric,heavy,allmono,reader,display-serif,neo-future,plex,playful,classic-serif,pixel,monumental,slab,condensed,expressive,deco,stencil,rubik,bricolage,gloock,crimson,dm,outfit,literata'.split(',');
  var ALL_LANGS = 'zh-cn,en-us,ja-jp,de-de,fr-fr,ko-kr,pt-pt,nl-nl,it-it,ru-ru,es-es,tr-tr,el-gr,ar,hi-in,id-id,vi-vn,pl-pl,th-th,uk-ua,fa-ir,bn-bd,ro-ro,cs-cz'.split(',');
  var LANG_COLLAPSE = {zh:'zh-cn',en:'en-us',fr:'fr-fr',ru:'ru-ru',es:'es-es',ar:'ar',ja:'ja-jp',de:'de-de',ko:'ko-kr',pt:'pt-pt',nl:'nl-nl',it:'it-it',tr:'tr-tr',el:'el-gr',hi:'hi-in',id:'id-id',vi:'vi-vn',pl:'pl-pl',th:'th-th',uk:'uk-ua',fa:'fa-ir',bn:'bn-bd',ro:'ro-ro',cs:'cs-cz'};
  var FONT_THEME_MAP = {
    terminal:'tight',editorial:'serif',brutalist:'geometric',aurora:'heavy',
    synthwave:'allmono',sumi:'reader',blueprint:'display-serif',noir:'neo-future',
    riso:'plex',nordic:'playful',solarpunk:'classic-serif',mocha:'pixel',
    wireframe:'monumental',anderson:'slab',tokyo:'condensed',memphis:'expressive',
    chalkboard:'deco',matrix:'stencil',steel:'rubik',frutiger:'bricolage',
    newsprint:'gloock',candy:'crimson',botanical:'dm',cyberpunk:'outfit',
    parchment:'literata',glassmorphism:'auto'
  };
  var RTL_LANGS = ['ar','fa-ir','he-il','yi'];
  var DEFAULT_THEME = 'terminal';
  var DEFAULT_FONT = 'tight';
  var DEFAULT_LANG = 'zh-cn';

  // ── Helpers ─────────────────────────────────────────────────────
  function contains(arr, val) { return arr.indexOf(val) !== -1; }

  function fromURL(param) {
    try {
      var v = new URLSearchParams(location.search).get(param);
      if (v && contains(param === 'lang' ? ALL_LANGS : (param === 'theme' ? ALL_THEMES : ALL_FONTS), v)) return v;
    } catch(e) {}
    return null;
  }

  function fromStorage(key) {
    try {
      var v = localStorage.getItem(key);
      if (v) {
        var list = key === 'rhosocial-lang' ? ALL_LANGS : (key === 'theme' ? ALL_THEMES : ALL_FONTS);
        if (contains(list, v)) return v;
      }
    } catch(e) {}
    return null;
  }

  function matchLang(tag) {
    if (!tag) return null;
    var lower = String(tag).toLowerCase();
    if (contains(ALL_LANGS, lower)) return lower;
    var p = lower.split('-')[0];
    return LANG_COLLAPSE[p] || null;
  }

  function fromBrowser() {
    var nav = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || navigator.userLanguage || ''];
    for (var i = 0; i < nav.length; i++) {
      var m = matchLang(nav[i]);
      if (m) return m;
    }
    return null;
  }

  // ── Detection chain ─────────────────────────────────────────────
  var theme = fromURL('theme') || fromStorage('theme') || DEFAULT_THEME;

  var font = fromURL('font') || fromStorage('font');
  if (!font) {
    var mapped = FONT_THEME_MAP[theme];
    font = (mapped && mapped !== 'auto') ? mapped : DEFAULT_FONT;
  }

  var lang = fromURL('lang') || fromStorage('rhosocial-lang') || fromBrowser() || DEFAULT_LANG;

  // ── Apply to DOM before CSS loads ───────────────────────────────
  var html = document.documentElement;
  html.setAttribute('data-theme', theme);
  html.setAttribute('data-font', font);
  html.setAttribute('lang', lang);
  html.setAttribute('dir', contains(RTL_LANGS, lang) ? 'rtl' : 'ltr');

  // ── Expose initial state for subsequent scripts ────────────────
  window.__INITIAL_STATE__ = { theme: theme, font: font, lang: lang };
})();