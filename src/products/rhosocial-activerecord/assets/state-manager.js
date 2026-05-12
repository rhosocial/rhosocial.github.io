/**
 * state-manager.js — Global state store (publish-subscribe)
 *
 * Usage:
 *   // Subscribe to specific keys
 *   store.subscribe(['theme', 'font'], function(state, changed) {
 *     // state: { theme, font, lang } — full current state
 *     // changed: { theme: 'noir' } — only changed keys
 *   });
 *
 *   // Update state
 *   store.set('theme', 'noir');   // triggers subscribers
 *   store.set('font', 'tight');   // triggers subscribers
 *   store.set('lang', 'en-us');   // triggers subscribers
 *
 *   // Read state
 *   store.get('theme');           // 'noir'
 *   store.getState();             // { theme, font, lang }
 */
(function () {
  'use strict';

  var _state = window.__INITIAL_STATE__ || {};
  var _listeners = [];
  var _idCounter = 0;

  function Store(initialState) {
    if (initialState) {
      for (var k in initialState) {
        if (initialState.hasOwnProperty(k)) _state[k] = initialState[k];
      }
    }
  }

  Store.prototype.get = function (key) {
    return _state[key];
  };

  Store.prototype.getState = function () {
    var copy = {};
    for (var k in _state) {
      if (_state.hasOwnProperty(k)) copy[k] = _state[k];
    }
    return copy;
  };

  /**
   * Subscribe to state changes.
   * @param {string[]} keys  - Keys to listen for (empty array = all keys)
   * @param {function} fn    - Callback: fn(newState, changedKeys)
   * @returns {number} subscription id (for unsubscribe)
   */
  Store.prototype.subscribe = function (keys, fn) {
    if (typeof keys === 'function') {
      fn = keys;
      keys = [];
    }
    var id = ++_idCounter;
    _listeners.push({ id: id, keys: keys, fn: fn });
    return id;
  };

  Store.prototype.unsubscribe = function (id) {
    for (var i = 0; i < _listeners.length; i++) {
      if (_listeners[i].id === id) {
        _listeners.splice(i, 1);
        return;
      }
    }
  };

  /**
   * Update a single state key and notify subscribers.
   */
  Store.prototype.set = function (key, value) {
    if (_state[key] === value) return;
    _state[key] = value;
    this._notify(key);
  };

  /**
   * Update multiple keys at once and notify subscribers once.
   */
  Store.prototype.setMultiple = function (pairs) {
    var changed = {};
    var hasChange = false;
    for (var key in pairs) {
      if (pairs.hasOwnProperty(key) && _state[key] !== pairs[key]) {
        _state[key] = pairs[key];
        changed[key] = pairs[key];
        hasChange = true;
      }
    }
    if (hasChange) this._notifyAll(changed);
  };

  Store.prototype._notify = function (changedKey) {
    var changed = {};
    changed[changedKey] = _state[changedKey];
    this._notifyAll(changed);
  };

  Store.prototype._notifyAll = function (changed) {
    var state = this.getState();
    for (var i = 0; i < _listeners.length; i++) {
      var l = _listeners[i];
      if (l.keys.length === 0) {
        l.fn(state, changed);
      } else {
        for (var j = 0; j < l.keys.length; j++) {
          if (changed.hasOwnProperty(l.keys[j])) {
            l.fn(state, changed);
            break;
          }
        }
      }
    }
  };

  window.__STATE__ = new Store();
})();