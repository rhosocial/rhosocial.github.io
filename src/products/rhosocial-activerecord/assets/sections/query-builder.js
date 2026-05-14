(function() {
  'use strict';

  var QB_DATA = {
    active: {
      label: 'ActiveQuery',
      params: [18, '%alice%', 10],
      steps: [
        { id: 'base',   python: 'User.query()',                            sql: 'SELECT * FROM "users"',                                    hint: 'FROM' },
        { id: 'where1', python: '.where(User.c.age >= 18)',                sql: 'WHERE "users"."age" >= ?',                                 hint: 'WHERE' },
        { id: 'where2', python: '.where(User.c.name.like("%alice%"))',     sql: 'AND "users"."name" LIKE ?',                                hint: 'AND' },
        { id: 'order',  python: '.order_by(User.c.name.asc())',            sql: 'ORDER BY "users"."name" ASC',                              hint: 'ORDER' },
        { id: 'limit',  python: '.limit(10)',                              sql: 'LIMIT ?',                                                   hint: 'LIMIT' },
        { id: 'all',    python: '.all()',                                  sql: null,                                                        hint: 'EXEC' }
      ],
      defaultOn: ['base', 'where1', 'order', 'limit', 'all']
    },
    cte: {
      label: 'CTEQuery',
      params: [true],
      steps: [
        { id: 'cte', python: 'active = User.query().where(User.c.is_active == True)\n\nquery = User.query().with_cte(\n  "active_users", active\n)', sql: 'WITH active_users AS (\n  SELECT * FROM "users"\n  WHERE "is_active" = ?\n)\nSELECT * FROM "active_users"', hint: 'WITH' },
        { id: 'order', python: '.order_by(User.c.name.asc())', sql: 'ORDER BY "users"."name" ASC', hint: 'ORDER' },
        { id: 'all', python: '.all()', sql: null, hint: 'EXEC' }
      ],
      defaultOn: ['cte', 'all']
    },
    setop: {
      label: 'SetOperationQuery',
      params: [true, true],
      setTypes: [
        { id: 'union',      label: 'UNION',       sql: 'UNION' },
        { id: 'union_all',  label: 'UNION ALL',   sql: 'UNION ALL' },
        { id: 'intersect',  label: 'INTERSECT',   sql: 'INTERSECT' },
        { id: 'except',     label: 'EXCEPT',      sql: 'EXCEPT' }
      ],
      defaultSetType: 'union',
      leftSteps: [
        { id: 'q1', python: 'q1 = User.query().where(\n  User.c.is_active == True\n)', sql: 'SELECT * FROM "users"\nWHERE "is_active" = ?', hint: '' }
      ],
      rightSteps: [
        { id: 'q2', python: 'q2 = User.query().where(\n  User.c.is_premium == True\n)', sql: 'SELECT * FROM "users"\nWHERE "is_premium" = ?', hint: '' }
      ],
      resultSteps: [
        { id: 'result', python: 'result = q1.union(q2).all()', sql: null, hint: 'EXEC' }
      ],
      defaultOn: ['q1', 'q2', 'result']
    }
  };

  function t(key) {
    return window.SECTIONS_I18N ? window.SECTIONS_I18N.t(key) : key;
  }
  function escapeHtml(s) {
    if (typeof s !== 'string') return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function getStepState(inst, type, stepId) {
    return inst.state[type] && inst.state[type][stepId] !== false;
  }

  function toggleStep(inst, type, stepId) {
    if (!inst.state[type]) inst.state[type] = {};
    inst.state[type][stepId] = !getStepState(inst, type, stepId);
    renderSteps(inst, type);
    updateSql(inst, type);
  }

  function renderSteps(inst, type) {
    var data = QB_DATA[type];
    if (!data) return;
    var container = inst.el.querySelector('.qb-steps[data-query="' + type + '"]');
    if (!container) return;
    if (type === 'setop') {
      renderSetOpSteps(inst, container);
      return;
    }
    var h = '';
    for (var i = 0; i < data.steps.length; i++) {
      var s = data.steps[i];
      var on = getStepState(inst, type, s.id);
      if (i > 0) {
        h += '<div class="qb-step-connector' + (on ? ' lit' : '') + '">|</div>';
      }
      h += '<div class="qb-step ' + (on ? 'is-on' : 'is-off') + '" data-query="' + type + '" data-step="' + s.id + '">'
        + '<div class="qb-step-toggle"></div>'
        + '<div class="qb-step-code">' + escapeHtml(s.python) + '</div>'
        + (s.hint ? '<span class="qb-step-hint">' + s.hint + '</span>' : '')
        + '</div>';
    }
    container.innerHTML = h;
  }

  function renderSetOpSteps(inst, container) {
    var data = QB_DATA.setop;
    var setType = inst.state.setop ? inst.state.setop._setType || 'union' : 'union';
    var setData = null;
    for (var si = 0; si < data.setTypes.length; si++) {
      if (data.setTypes[si].id === setType) { setData = data.setTypes[si]; break; }
    }

    var h = '<div class="qb-set-layout">';

    // Left column
    h += '<div class="qb-set-col">';
    for (var i = 0; i < data.leftSteps.length; i++) {
      var s = data.leftSteps[i];
      var on = getStepState(inst, 'setop', s.id);
      h += '<div class="qb-step ' + (on ? 'is-on' : 'is-off') + '" data-query="setop" data-step="' + s.id + '">'
        + '<div class="qb-step-toggle"></div>'
        + '<div class="qb-step-code">' + escapeHtml(s.python) + '</div>'
        + '</div>';
    }
    h += '</div>';

    // Center: set operator chips
    h += '<div class="qb-set-center">';
    for (var si = 0; si < data.setTypes.length; si++) {
      var st = data.setTypes[si];
      h += '<button class="qb-set-chip ' + (st.id === setType ? 'is-active' : '') + '" data-set="' + st.id + '">' + st.label + '</button>';
    }
    h += '</div>';

    // Right column
    h += '<div class="qb-set-col">';
    for (var i = 0; i < data.rightSteps.length; i++) {
      var s = data.rightSteps[i];
      var on = getStepState(inst, 'setop', s.id);
      h += '<div class="qb-step ' + (on ? 'is-on' : 'is-off') + '" data-query="setop" data-step="' + s.id + '">'
        + '<div class="qb-step-toggle"></div>'
        + '<div class="qb-step-code">' + escapeHtml(s.python) + '</div>'
        + '</div>';
    }
    h += '</div>';

    h += '</div>'; // end set-layout

    // Result step
    var resultOn = getStepState(inst, 'setop', 'result');
    h += '<div class="qb-step-connector' + (resultOn ? ' lit' : '') + '">|</div>';
    h += '<div class="qb-step ' + (resultOn ? 'is-on' : 'is-off') + '" data-query="setop" data-step="result">'
      + '<div class="qb-step-toggle"></div>'
      + '<div class="qb-step-code">' + escapeHtml(data.resultSteps[0].python) + '</div>'
      + '<span class="qb-step-hint">' + t('exec') + '</span>'
      + '</div>';

    container.innerHTML = h;
  }

  function updateSql(inst, type) {
    var data = QB_DATA[type];
    if (!data) return;
    var sqlEl = inst.el.querySelector('.qb-sql[data-query="' + type + '"]');
    if (!sqlEl) return;
    var pre = sqlEl.querySelector('.qb-sql-pre');
    var paramsEl = sqlEl.querySelector('.qb-sql-params');
    if (!pre) return;

    var lines = [];
    var paramsUsed = [];

    if (type === 'setop') {
      var setType = inst.state.setop ? inst.state.setop._setType || 'union' : 'union';
      var setData = null;
      for (var si = 0; si < data.setTypes.length; si++) {
        if (data.setTypes[si].id === setType) { setData = data.setTypes[si]; break; }
      }
      // Left steps
      var leftOn = getStepState(inst, 'setop', 'q1');
      if (leftOn) {
        lines.push(data.leftSteps[0].sql);
        paramsUsed.push(data.params[0]);
      }
      // Set operator
      if (leftOn && getStepState(inst, 'setop', 'q2') && setData) {
        lines.push('\n' + setData.sql + '\n');
      }
      // Right steps
      var rightOn = getStepState(inst, 'setop', 'q2');
      if (rightOn) {
        lines.push(data.rightSteps[0].sql);
        paramsUsed.push(data.params[1]);
      }
    } else {
      for (var i = 0; i < data.steps.length; i++) {
        var s = data.steps[i];
        var on = getStepState(inst, type, s.id);
        if (on && s.sql) {
          lines.push(s.sql);
          if (i > 0 && data.params && data.params[i - 1] !== undefined) {
            paramsUsed.push(data.params[i - 1]);
          }
        }
      }
    }

    var sqlText = lines.join('\n').trim();
    if (sqlText) {
      if (typeof hljs !== 'undefined') {
        try {
          pre.innerHTML = hljs.highlight(sqlText, { language: 'sql' }).value;
        } catch(_) {
          pre.textContent = sqlText;
        }
      } else {
        pre.textContent = sqlText;
      }
    } else {
      pre.innerHTML = '<span class="qb-sql-empty">' + t('no_sql') + '</span>';
    }

    if (paramsEl) {
      if (paramsUsed.length > 0) {
        paramsEl.innerHTML = '<span class="qb-label">' + t('params') + ': </span>'
          + escapeHtml(JSON.stringify(paramsUsed));
        paramsEl.style.display = '';
      } else {
        paramsEl.style.display = 'none';
      }
    }
  }

  function bindEvents(inst) {
    inst.el.addEventListener('click', function(e) {
      // Step toggle
      var stepEl = e.target.closest('.qb-step');
      if (stepEl) {
        var type = stepEl.dataset.query || inst.currentType;
        var stepId = stepEl.dataset.step;
        if (type && stepId) toggleStep(inst, type, stepId);
        return;
      }
      // Set chip toggle
      var chip = e.target.closest('.qb-set-chip');
      if (chip) {
        var setType = chip.dataset.set;
        if (!inst.state.setop) inst.state.setop = {};
        inst.state.setop._setType = setType;
        renderSetOpSteps(inst, inst.el.querySelector('.qb-steps[data-query="setop"]'));
        updateSql(inst, 'setop');
        return;
      }
      // Tab switch
      var tab = e.target.closest('.qb-tab');
      if (tab) {
        var type = tab.dataset.query;
        if (!type) return;
        inst.currentType = type;
        inst.el.querySelectorAll('.qb-tab').forEach(function(t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');
        inst.el.querySelectorAll('.qb-body').forEach(function(b) { b.classList.remove('is-active'); });
        var body = inst.el.querySelector('.qb-body[data-query="' + type + '"]');
        if (body) body.classList.add('is-active');
        return;
      }
    });
  }

  function initQueryBuilder(el) {
    var inst = { el: el, currentType: 'active', state: {} };
    // Init state defaults
    Object.keys(QB_DATA).forEach(function(type) {
      var data = QB_DATA[type];
      if (!inst.state[type]) inst.state[type] = {};
      if (type === 'setop') {
        inst.state[type]._setType = data.defaultSetType || 'union';
      }
      if (data.defaultOn) {
        for (var di = 0; di < data.defaultOn.length; di++) {
          inst.state[type][data.defaultOn[di]] = true;
        }
      }
    });

    // Render all panels
    Object.keys(QB_DATA).forEach(function(type) {
      renderSteps(inst, type);
      updateSql(inst, type);
    });

    bindEvents(inst);
    return inst;
  }

  function initAll() {
    document.querySelectorAll('[data-component="query-builder"]').forEach(initQueryBuilder);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  window.QueryBuilder = { init: initQueryBuilder };
})();
