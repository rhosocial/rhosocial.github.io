(function () {
  'use strict';

  /* ── i18n node data (merged with I18N at render time) ── */
  var NODE_DEFS = {
    /* ActiveRecord 侧 */
    AR_S:   { i18n_label: 'arch_comp.node_ar_s',    i18n_tip: 'arch_comp.tip_ar_s' },
    AQ_S:   { i18n_label: 'arch_comp.node_aq_s',    i18n_tip: 'arch_comp.tip_aq_s' },
    SO_S:   { i18n_label: 'arch_comp.node_so_s',    i18n_tip: 'arch_comp.tip_so_s' },
    CTE_S:  { i18n_label: 'arch_comp.node_cte_s',   i18n_tip: 'arch_comp.tip_cte_s' },
    AR_A:   { i18n_label: 'arch_comp.node_ar_a',    i18n_tip: 'arch_comp.tip_ar_a' },
    AQ_A:   { i18n_label: 'arch_comp.node_aq_a',    i18n_tip: 'arch_comp.tip_aq_a' },
    SO_A:   { i18n_label: 'arch_comp.node_so_a',    i18n_tip: 'arch_comp.tip_so_a' },
    CTE_A:  { i18n_label: 'arch_comp.node_cte_a',   i18n_tip: 'arch_comp.tip_cte_a' },
    /* Backend 侧 */
    SB_S:   { i18n_label: 'arch_comp.node_sb_s',    i18n_tip: 'arch_comp.tip_sb_s' },
    SQLS:   { i18n_label: 'arch_comp.node_sqlite_s', i18n_tip: 'arch_comp.tip_sqlite' },
    SQLS_A: { i18n_label: 'arch_comp.node_sqlite_a', i18n_tip: 'arch_comp.tip_sqlite' },
    SB_A:   { i18n_label: 'arch_comp.node_sb_a',    i18n_tip: 'arch_comp.tip_sb_a' },
    EXT:    { i18n_label: 'arch_comp.node_ext',     i18n_tip: 'arch_comp.tip_ext' },
    EXT_A:  { i18n_label: 'arch_comp.node_ext_a',   i18n_tip: 'arch_comp.tip_ext_a' }
  };

  /* ── Layout constants ─────────────────────────────── */
  var NW = 148, NH = 36;
  var PAD = 16;
  var COL_GAP = 80;
  var ROW_GAP = 14;

  function layout() {
    var arSyncNodes = [
      { id:'AR_S',  x:0, y:0,   role:'root-sync' },
      { id:'AQ_S',  x:0, y:NH+ROW_GAP, role:'child-sync' },
      { id:'SO_S',  x:0, y:(NH+ROW_GAP)*2, role:'child-sync' },
      { id:'CTE_S', x:0, y:(NH+ROW_GAP)*3, role:'child-sync' }
    ];
    var arAsyncNodes = [
      { id:'AR_A',  x:0, y:0,   role:'root-async' },
      { id:'AQ_A',  x:0, y:NH+ROW_GAP, role:'child-async' },
      { id:'SO_A',  x:0, y:(NH+ROW_GAP)*2, role:'child-async' },
      { id:'CTE_A', x:0, y:(NH+ROW_GAP)*3, role:'child-async' }
    ];
    var beSyncNodes = [
      { id:'SB_S',  x:0, y:0,   role:'root-sync' },
      { id:'SQLS',  x:0, y:NH+ROW_GAP, role:'builtin' },
      { id:'EXT',   x:0, y:(NH+ROW_GAP)*2, role:'ext' }
    ];
    var beAsyncNodes = [
      { id:'SB_A',  x:0, y:0,   role:'root-async' },
      { id:'SQLS_A',x:0, y:NH+ROW_GAP, role:'builtin' },
      { id:'EXT_A', x:0, y:(NH+ROW_GAP)*2, role:'ext' }
    ];
    return { arSyncNodes, arAsyncNodes, beSyncNodes, beAsyncNodes };
  }

  function css(v) {
    return getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  }
  function colors() {
    return {
      bg:        css('--color-bg')         || '#fff',
      surface:   css('--color-surface')    || '#f5f5f5',
      surface2:  css('--color-surface-2')  || '#ebebeb',
      border:    css('--color-border')     || '#ccc',
      text:      css('--color-text')       || '#111',
      textMuted: css('--color-text-muted') || '#666',
      accent:    css('--color-accent')     || '#2563eb',
      fontBody:  css('--font-body')        || 'sans-serif',
      fontCode:  css('--font-code')        || 'monospace'
    };
  }

  function t(key) {
    var lang = (window.CURRENT_LANG || 'zh-cn');
    var dict = (window.I18N || {})[lang] || (window.I18N || {})['zh-cn'] || {};
    var parts = key.split('.');
    var v = dict;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return key;
      v = v[parts[i]];
    }
    return (v != null && typeof v === 'string') ? v : key;
  }

  var tipEl = document.getElementById('arch-comp-tooltip');
  var tipTimeout = null;

  function showTip(event, nodeId) {
    clearTimeout(tipTimeout);
    var def = NODE_DEFS[nodeId];
    if (!def) return;
    var label = t(def.i18n_label);
    var tip   = t(def.i18n_tip);
    tipEl.innerHTML = '<div class="tip-title">' + label + '</div>' + tip;
    positionTip(event);
    tipEl.classList.add('is-visible');
  }
  function positionTip(event) {
    var x = event.clientX || (event.touches && event.touches[0].clientX) || 0;
    var y = event.clientY || (event.touches && event.touches[0].clientY) || 0;
    var tw = tipEl.offsetWidth || 260;
    var th = tipEl.offsetHeight || 80;
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var left = x + 14;
    var top  = y + 14;
    if (left + tw > vw - 8) left = x - tw - 14;
    if (top  + th > vh - 8) top  = y - th - 14;
    tipEl.style.left = left + 'px';
    tipEl.style.top  = top  + 'px';
  }
  function moveTip(event) {
    if (tipEl.classList.contains('is-visible')) positionTip(event);
  }
  function hideTip() {
    tipTimeout = setTimeout(function() {
      tipEl.classList.remove('is-visible');
    }, 120);
  }

  function render() {
    var container = document.getElementById('arch-comp-d3');
    if (!container) return;
    container.innerHTML = '';

    var C = colors();
    var L = layout();

    var totalW = container.offsetWidth || 800;
    var isMobile = totalW < 600;

    var gInnerW = NW + PAD * 2;
    var arSyncH  = PAD + (NH + ROW_GAP) * 4 - ROW_GAP + PAD;
    var arAsyncH = arSyncH;
    var beSyncH  = PAD + (NH + ROW_GAP) * 3 - ROW_GAP + PAD;
    var beAsyncH = beSyncH;

    var LABEL_H = 28;
    var arSyncTH  = LABEL_H + arSyncH;
    var arAsyncTH = LABEL_H + arAsyncH;
    var beSyncTH  = LABEL_H + beSyncH;
    var beAsyncTH = LABEL_H + beAsyncH;

    var SUBGROUP_GAP = 12;
    var FRAME_PAD = 14;
    var arFrameW = gInnerW * 2 + SUBGROUP_GAP + FRAME_PAD * 2;
    var beFrameW = arFrameW;
    var arFrameH = Math.max(arSyncTH, arAsyncTH) + FRAME_PAD * 2 + 28;
    var beFrameH = Math.max(beSyncTH, beAsyncTH) + FRAME_PAD * 2 + 28;

    var ARROW_W = isMobile ? 60 : COL_GAP;
    var svgW = arFrameW + ARROW_W + beFrameW;
    var svgH = Math.max(arFrameH, beFrameH) + 20;

    var scale = 1;
    if (svgW > totalW) scale = totalW / svgW;

    var svg = d3.select(container).append('svg')
      .attr('viewBox', '0 0 ' + svgW + ' ' + svgH)
      .attr('width',  svgW * scale)
      .attr('height', svgH * scale)
      .attr('aria-label', t('arch_comp.label'));

    var defs = svg.append('defs');
    defs.append('marker')
      .attr('id', 'arrow-ac')
      .attr('markerWidth', 8).attr('markerHeight', 8)
      .attr('refX', 6).attr('refY', 3)
      .attr('orient', 'auto')
      .append('path').attr('d', 'M0,0 L0,6 L8,3 z')
      .attr('fill', C.accent);
    defs.append('marker')
      .attr('id', 'arrow-bd')
      .attr('markerWidth', 8).attr('markerHeight', 8)
      .attr('refX', 6).attr('refY', 3)
      .attr('orient', 'auto')
      .append('path').attr('d', 'M0,0 L0,6 L8,3 z')
      .attr('fill', C.border);

    var arX = 0;
    var beX = arFrameW + ARROW_W;

    function drawFrame(gX, gY, fW, fH, titleKey, accentCol) {
      var g = svg.append('g').attr('transform', 'translate(' + gX + ',' + gY + ')');
      g.append('rect')
        .attr('width', fW).attr('height', fH)
        .attr('rx', 14).attr('ry', 14)
        .attr('fill', C.surface)
        .attr('stroke', accentCol)
        .attr('stroke-width', 1.5);
      g.append('rect')
        .attr('x', 14).attr('y', -12)
        .attr('width', 90).attr('height', 22)
        .attr('rx', 11).attr('ry', 11)
        .attr('fill', accentCol);
      g.append('text')
        .attr('x', 59).attr('y', -12 + 11)
        .attr('dominant-baseline', 'central').attr('text-anchor', 'middle')
        .attr('font-family', C.fontBody)
        .attr('font-size', 11).attr('font-weight', 700)
        .attr('fill', C.bg)
        .attr('letter-spacing', 0.5)
        .text(t(titleKey));
      return g;
    }

    function drawSubgroup(parent, ox, oy, bW, bH, labelKey, isSync) {
      var strokeCol = isSync ? C.accent : C.textMuted;
      var g = parent.append('g').attr('transform', 'translate(' + ox + ',' + oy + ')');
      g.append('rect')
        .attr('width', bW).attr('height', bH)
        .attr('rx', 10).attr('ry', 10)
        .attr('fill', C.surface2)
        .attr('stroke', strokeCol)
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', isSync ? 'none' : '5 3');
      g.append('text')
        .attr('x', bW / 2).attr('y', LABEL_H / 2)
        .attr('dominant-baseline', 'central').attr('text-anchor', 'middle')
        .attr('font-family', C.fontBody)
        .attr('font-size', 11).attr('font-weight', 700)
        .attr('fill', strokeCol)
        .attr('letter-spacing', 0.3)
        .text(t(labelKey));
      return g;
    }

    function drawNode(parent, nodeId, nx, ny, roleClass) {
      var def = NODE_DEFS[nodeId];
      var fillMap = {
        'root-sync':  C.accent,
        'root-async': C.textMuted,
        'builtin':    C.surface,
        'ext':        C.surface,
        'child-sync': C.surface,
        'child-async':C.surface
      };
      var textMap = {
        'root-sync':  C.bg,
        'root-async': C.bg,
        'builtin':    C.text,
        'ext':        C.text,
        'child-sync': C.text,
        'child-async':C.text
      };
      var strokeMap = {
        'root-sync':  C.accent,
        'root-async': C.textMuted,
        'builtin':    C.border,
        'ext':        C.border,
        'child-sync': C.accent,
        'child-async':C.textMuted
      };
      var fill   = fillMap[roleClass]   || C.surface;
      var textC  = textMap[roleClass]   || C.text;
      var stroke = strokeMap[roleClass] || C.border;

      var g = parent.append('g')
        .attr('class', 'arc-node')
        .attr('transform', 'translate(' + nx + ',' + ny + ')')
        .attr('tabindex', 0)
        .attr('role', 'button')
        .attr('aria-label', t(def.i18n_label));

      g.append('rect')
        .attr('width', NW).attr('height', NH)
        .attr('rx', 8).attr('ry', 8)
        .attr('fill', fill)
        .attr('stroke', stroke)
        .attr('stroke-width', 1.5);

      g.append('text')
        .attr('x', NW / 2).attr('y', NH / 2)
        .attr('dominant-baseline', 'central').attr('text-anchor', 'middle')
        .attr('font-family', roleClass.includes('root') ? C.fontBody : C.fontCode)
        .attr('font-size', roleClass.includes('root') ? 13 : 11)
        .attr('font-weight', roleClass.includes('root') ? 700 : 400)
        .attr('fill', textC)
        .text(function() {
          var raw = t(def.i18n_label);
          return raw.length > 22 ? raw.slice(0, 20) + '…' : raw;
        });

      function onEnter(event) { showTip(event, nodeId); }
      function onMove(event)  { moveTip(event); }
      function onLeave()      { hideTip(); }

      g.on('mouseenter', onEnter)
       .on('mousemove',  onMove)
       .on('mouseleave', onLeave)
       .on('focus',      function(event) { showTip(event, nodeId); })
       .on('blur',       onLeave)
       .on('touchstart', function(event) {
           event.preventDefault();
           showTip(event.touches[0], nodeId);
         });

      return g;
    }

    function drawIntraEdge(parent, x1, y1, x2, y2, dashed) {
      var midY = (y1 + y2) / 2;
      var pathD = 'M' + (x1 + NW/2) + ',' + (y1 + NH) +
                  ' C' + (x1 + NW/2) + ',' + (midY + 8) +
                  ' ' + (x2 + NW/2) + ',' + (midY - 8) +
                  ' ' + (x2 + NW/2) + ',' + y2;
      parent.append('path')
        .attr('class', 'arc-edge' + (dashed ? ' dashed' : ''))
        .attr('d', pathD)
        .attr('stroke', dashed ? C.textMuted : C.accent)
        .attr('marker-end', 'url(#arrow-' + (dashed ? 'bd' : 'ac') + ')');
    }

    var arFG = drawFrame(arX, 10, arFrameW, arFrameH - 10, 'arch_comp.ar_title', C.accent);

    var arSyncOX = FRAME_PAD;
    var arSyncOY = FRAME_PAD + 16;
    var arSyncG = drawSubgroup(arFG, arSyncOX, arSyncOY, gInnerW, arSyncTH, 'arch_comp.node_sync_group', true);
    L.arSyncNodes.forEach(function(n) {
      drawNode(arSyncG, n.id, PAD, LABEL_H + n.y, n.role);
    });
    for (var i = 0; i < L.arSyncNodes.length - 1; i++) {
      drawIntraEdge(arSyncG, PAD, LABEL_H + L.arSyncNodes[i].y, PAD, LABEL_H + L.arSyncNodes[i+1].y, false);
    }

    var arAsyncOX = FRAME_PAD + gInnerW + SUBGROUP_GAP;
    var arAsyncOY = arSyncOY;
    var arAsyncG = drawSubgroup(arFG, arAsyncOX, arAsyncOY, gInnerW, arAsyncTH, 'arch_comp.node_async_group', false);
    L.arAsyncNodes.forEach(function(n) {
      drawNode(arAsyncG, n.id, PAD, LABEL_H + n.y, n.role);
    });
    for (var j = 0; j < L.arAsyncNodes.length - 1; j++) {
      drawIntraEdge(arAsyncG, PAD, LABEL_H + L.arAsyncNodes[j].y, PAD, LABEL_H + L.arAsyncNodes[j+1].y, true);
    }

    var beFG = drawFrame(beX, 10, beFrameW, beFrameH - 10, 'arch_comp.be_title', C.textMuted);

    var beSyncOX = FRAME_PAD;
    var beSyncOY = FRAME_PAD + 16;
    var beSyncG = drawSubgroup(beFG, beSyncOX, beSyncOY, gInnerW, beSyncTH, 'arch_comp.node_sync_group', true);
    L.beSyncNodes.forEach(function(n) {
      drawNode(beSyncG, n.id, PAD, LABEL_H + n.y, n.role);
    });
    for (var k = 0; k < L.beSyncNodes.length - 1; k++) {
      drawIntraEdge(beSyncG, PAD, LABEL_H + L.beSyncNodes[k].y, PAD, LABEL_H + L.beSyncNodes[k+1].y, false);
    }

    var beAsyncOX = FRAME_PAD + gInnerW + SUBGROUP_GAP;
    var beAsyncOY = beSyncOY;
    var beAsyncG = drawSubgroup(beFG, beAsyncOX, beAsyncOY, gInnerW, beAsyncTH, 'arch_comp.node_async_group', false);
    L.beAsyncNodes.forEach(function(n) {
      drawNode(beAsyncG, n.id, PAD, LABEL_H + n.y, n.role);
    });
    for (var m = 0; m < L.beAsyncNodes.length - 1; m++) {
      drawIntraEdge(beAsyncG, PAD, LABEL_H + L.beAsyncNodes[m].y, PAD, LABEL_H + L.beAsyncNodes[m+1].y, true);
    }

    var arSyncRootCY  = 10 + arSyncOY  + LABEL_H + NH / 2;
    var beSyncRootCY  = 10 + beSyncOY  + LABEL_H + NH / 2;
    var arAsyncRootCY = 10 + arAsyncOY + LABEL_H + NH / 2;
    var beAsyncRootCY = 10 + beAsyncOY + LABEL_H + NH / 2;

    var arSyncRightX  = arX  + FRAME_PAD + gInnerW + PAD;
    var beSyncLeftX   = beX  + FRAME_PAD + PAD;
    var arAsyncRightX = arX  + FRAME_PAD + gInnerW + SUBGROUP_GAP + gInnerW + PAD;
    var beAsyncLeftX  = beX  + FRAME_PAD + gInnerW + SUBGROUP_GAP + PAD;

    var arrowMid = arFrameW + ARROW_W / 2;

    svg.append('path')
      .attr('class', 'arc-edge')
      .attr('d', 'M' + arSyncRightX + ',' + arSyncRootCY +
                 ' C' + (arrowMid - 10) + ',' + arSyncRootCY +
                 ' ' + (arrowMid + 10) + ',' + beSyncRootCY +
                 ' ' + beSyncLeftX + ',' + arSyncRootCY)
      .attr('stroke', C.accent)
      .attr('marker-end', 'url(#arrow-ac)');

    svg.append('path')
      .attr('class', 'arc-edge dashed')
      .attr('d', 'M' + arAsyncRightX + ',' + arAsyncRootCY +
                 ' C' + (arrowMid - 10) + ',' + arAsyncRootCY +
                 ' ' + (arrowMid + 10) + ',' + beAsyncRootCY +
                 ' ' + beAsyncLeftX + ',' + arAsyncRootCY)
      .attr('stroke', C.textMuted)
      .attr('marker-end', 'url(#arrow-bd)');

    var midSyncY  = (arSyncRootCY + beSyncRootCY) / 2;
    var midAsyncY = (arAsyncRootCY + beAsyncRootCY) / 2;

    function arrowLabel(y, key, col) {
      var bg = svg.append('rect').attr('rx', 8).attr('ry', 8)
        .attr('fill', C.bg).attr('stroke', col).attr('stroke-width', 1);
      var txt = svg.append('text')
        .attr('x', arrowMid).attr('y', y)
        .attr('dominant-baseline', 'central').attr('text-anchor', 'middle')
        .attr('font-family', C.fontBody).attr('font-size', 10)
        .attr('font-weight', 600).attr('fill', col)
        .text(t(key));
      var bbox = { width: 0, height: 0 };
      try { bbox = txt.node().getBBox(); } catch(e) { bbox = { width: 50, height: 14 }; }
      bg.attr('x', arrowMid - bbox.width/2 - 5)
        .attr('y', y - bbox.height/2 - 3)
        .attr('width', bbox.width + 10)
        .attr('height', bbox.height + 6);
      txt.raise();
    }

    arrowLabel(midSyncY,  'arch_comp.uses_label', C.accent);
    arrowLabel(midAsyncY, 'arch_comp.uses_label', C.textMuted);

    svg.append('text')
      .attr('x', arrowMid).attr('y', svgH - 6)
      .attr('dominant-baseline', 'auto').attr('text-anchor', 'middle')
      .attr('font-family', C.fontBody).attr('font-size', 10)
      .attr('fill', C.textMuted)
      .text(t('arch_comp.sync_async_note'));

    svg.selectAll('.arc-node')
      .style('opacity', 0)
      .transition().duration(400)
      .delay(function(d, i) { return i * 30; })
      .style('opacity', 1);
  }

  window.RENDER_ADAPTERS = window.RENDER_ADAPTERS || [];
  window.RENDER_ADAPTERS.push({
    name: 'arch-comp-d3',
    onTheme: render,
    onFont:  render,
    onLang:  render
  });

  function tryRender() {
    if (typeof d3 === 'undefined' || !window.I18N) {
      setTimeout(tryRender, 50); return;
    }
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryRender);
  } else {
    tryRender();
  }

  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(render, 150);
  });

})();