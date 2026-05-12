/**
 * theme-applier.js — Reacts to theme/font lang state changes
 *
 * Depends on: state-manager.js (window.__STATE__)
 *
 * When theme/font/lang changes:
 *   - Updates data-theme / data-font / lang / dir on <html>
 *   - Persists to localStorage
 *   - Font "auto" resolves to theme-recommended font
 */
(function () {
  'use strict';

  var state = window.__STATE__;
  if (!state) return;

  // ── Font-theme mapping (from init-head.js) ────────────────────────
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

  state.subscribe(['theme', 'font', 'lang'], function (newState, changed) {
    var html = document.documentElement;

    if ('theme' in changed) {
      html.setAttribute('data-theme', newState.theme);
      try { localStorage.setItem('theme', newState.theme); } catch(e) {}

      // If font is "auto", resolve to theme-recommended font
      var storedFont = null;
      try { storedFont = localStorage.getItem('font'); } catch(e) {}
      if (storedFont !== 'auto' && !storedFont) {
        var mapped = FONT_THEME_MAP[newState.theme];
        if (mapped && mapped !== 'auto') {
          state.set('font', mapped);
          return; // recursion will handle the rest
        }
      }
    }

    if ('font' in changed) {
      var actualFont = newState.font;
      if (actualFont === 'auto') {
        try { localStorage.removeItem('font'); } catch(e) {}
        var mapped = FONT_THEME_MAP[newState.theme || html.getAttribute('data-theme')];
        actualFont = mapped && mapped !== 'auto' ? mapped : 'tight';
      } else {
        try { localStorage.setItem('font', actualFont); } catch(e) {}
      }
      html.setAttribute('data-font', actualFont);
    }

    if ('lang' in changed) {
      html.setAttribute('lang', newState.lang);
      html.setAttribute('dir', RTL_LANGS.indexOf(newState.lang) !== -1 ? 'rtl' : 'ltr');
      try { localStorage.setItem('rhosocial-lang', newState.lang); } catch(e) {}
    }
  });
})();