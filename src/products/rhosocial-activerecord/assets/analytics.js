/**
 * rhosocial-activerecord — Shared Analytics Event Tracker
 * File: assets/analytics.js
 * Version: 2.0
 *
 * 功能：
 *   1. [自动] 主题/字体/语言切换事件（hook setValue，带防抖）
 *   2. [自动] Tab 切换事件（.tab[data-tab] 元素，带防抖）
 *   3. [自动] 复制按钮事件（data-copy-target 或调用 navigator.clipboard 的元素）
 *   4. [自动] 外链点击事件（href 以 http:// 或 https:// 开头且非当前域名）
 *   5. [自动] 页面内导航事件（<a> 内链跳转）
 *   6. [声明式] 自定义元素埋点（为元素添加 data-track-event 属性即可）
 *   7. [自动] 页面初始状态上报（每次加载一次，记录主题/字体/语言）
 *
 * 上报目标：
 *   - Google Analytics 4：window.gtag（未加载时静默跳过）
 *   - 百度统计：window._hmt（未加载时静默跳过）
 *
 * 用法（各 HTML 页面只需加一行）：
 *   <script src="../assets/analytics.js"></script>   <!-- 子页面 -->
 *   <script src="assets/analytics.js"></script>      <!-- 根页面 -->
 *   放在 GA/百度统计脚本之后、</body> 之前即可，无需其他改动。
 *
 * 声明式埋点语法：
 *   <button data-track-event="download_click"
 *           data-track-label="release-v1.0"
 *           data-track-value="42">Download</button>
 *   支持的属性：
 *     data-track-event   必填，GA 事件名 / 百度统计 action
 *     data-track-label   选填，附加描述（默认取元素文本）
 *     data-track-value   选填，数值型指标（百度统计 opt_value）
 *     data-track-once    选填，存在即只上报一次（值任意，如 "true"）
 */

(function () {
  'use strict';

  /* ─── 配置 ─────────────────────────────────────────────────────── */
  var CONFIG = {
    // 防抖延迟：主题/字体/语言切换（毫秒）
    settingDebounce: 800,

    // 防抖延迟：Tab 切换（毫秒，比设置项短，因为 tab 切换更轻量）
    tabDebounce: 400,

    // 是否追踪外链点击
    trackOutboundLinks: true,

    // 是否追踪页面内导航（<a> 内链）
    trackInternalNav: true,

    // 是否追踪 Tab 切换
    trackTabs: true,

    // 是否追踪复制按钮
    trackCopy: true,

    // 是否在控制台打印调试信息（生产环境设为 false）
    debug: false,

    // 产品路径标记，用于从 URL 提取简短页面名
    pathMarker: 'rhosocial-activerecord/',
  };

  /* ─── 工具函数 ──────────────────────────────────────────────────── */

  /**
   * 从 URL 路径推断当前页面标识
   * 例："/products/rhosocial-activerecord/backends/sqlite.html" → "backends/sqlite"
   *      "/products/rhosocial-activerecord/index.html"          → "index"
   */
  function getPageName() {
    var path = window.location.pathname.replace(/\.html$/, '');
    var idx = path.indexOf(CONFIG.pathMarker);
    if (idx !== -1) {
      path = path.slice(idx + CONFIG.pathMarker.length);
    }
    return path.replace(/\/?index$/, '') || 'index';
  }

  /** 防抖：每个 key 独立计时 */
  var _timers = {};
  function debounce(key, fn, delay) {
    clearTimeout(_timers[key]);
    _timers[key] = setTimeout(function () {
      delete _timers[key];
      fn();
    }, delay);
  }

  /** 取元素的可读文本标签（截断过长文本） */
  function getElLabel(el) {
    var text = (el.dataset.trackLabel
      || el.getAttribute('aria-label')
      || el.title
      || el.textContent
      || '').trim().replace(/\s+/g, ' ');
    return text.length > 60 ? text.slice(0, 57) + '...' : text;
  }

  /* ─── 上报核心 ──────────────────────────────────────────────────── */

  /**
   * 统一上报入口
   * @param {string} gaEvent   GA4 事件名
   * @param {Object} gaParams  GA4 事件参数（page_name 会自动注入）
   * @param {string} hmtCat    百度统计 category
   * @param {string} hmtAct    百度统计 action
   * @param {string} hmtLabel  百度统计 label
   * @param {number} [hmtVal]  百度统计 opt_value（可选）
   */
  function report(gaEvent, gaParams, hmtCat, hmtAct, hmtLabel, hmtVal) {
    var page = getPageName();
    gaParams = gaParams || {};
    gaParams.page_name = page;

    if (typeof window.gtag === 'function') {
      window.gtag('event', gaEvent, gaParams);
    }
    if (window._hmt && typeof window._hmt.push === 'function') {
      var hmtArgs = ['_trackEvent', hmtCat, hmtAct, hmtLabel || ''];
      if (hmtVal !== undefined) hmtArgs.push(hmtVal);
      window._hmt.push(hmtArgs);
    }

    if (CONFIG.debug) {
      console.log('[rhosocial-activerecord analytics]', gaEvent, gaParams,
        '|', hmtCat, hmtAct, hmtLabel, hmtVal !== undefined ? hmtVal : '');
    }
  }

  /* ─── 1. ThemeController / Theme/Font/Language 切换 ────────────────── */

  function hookThemeController() {
    var ctrl = window.themeCtrl;
    if (!ctrl || typeof ctrl.onChange !== 'function') {
      if (CONFIG.debug) console.warn('[rhosocial-activerecord analytics] themeCtrl not found, will retry on load.');
      return false;
    }

    var originalHandler = ctrl.onChange;
    ctrl.onChange = function(e) {
      originalHandler.apply(this, arguments);

      // e.type, e.value, e.prev
      var type = e.type;
      if (type === 'theme' || type === 'font' || type === 'lang') {
        var page = getPageName();
        debounce('setting_' + type, function() {
          var gaParams = {};
          gaParams[type] = e.value;
          report(
            'page_setting_change', gaParams,
            'page_setting', type + '_change', page + ':' + e.value
          );
        }, CONFIG.settingDebounce);
      }
    };

    if (CONFIG.debug) console.log('[rhosocial-activerecord analytics] themeCtrl hooked.');
    return true;
  }

  /* ─── 2. 页面初始状态 ────────────────────────────────────────────── */

  function reportInitialState() {
    var page  = getPageName();
    var theme = document.documentElement.getAttribute('data-theme') || 'unknown';
    var font  = document.documentElement.getAttribute('data-font')  || 'unknown';
    var lang  = document.documentElement.getAttribute('lang')       || 'unknown';

    report(
      'page_setting_init',
      { theme: theme, font: font, lang: lang },
      'page_setting', 'init',
      page + '|theme:' + theme + '|font:' + font + '|lang:' + lang
    );
  }

  /* ─── 3. Tab 切换（事件委托） ────────────────────────────────────── */

  function setupTabTracking() {
    if (!CONFIG.trackTabs) return;

    document.addEventListener('click', function (e) {
      // 找到最近的 .tab 祖先（允许点击 tab 内的子元素）
      var tab = e.target.closest ? e.target.closest('.tab[data-tab]') : null;
      if (!tab) return;

      var tabValue = tab.dataset.tab || tab.dataset.f1Py || tab.dataset.f1Mode
        || tab.dataset.f2Py || tab.dataset.f2Mode || 'unknown';

      // 找所在 tabs 容器的 group 名
      var container = tab.closest('[data-tabs]');
      var group = container ? (container.dataset.tabs || 'unknown') : 'unknown';

      // 用 group+value 做 debounce key，同一 group 内快速切换只记最后一次
      debounce('tab_' + group, function () {
        report(
          'tab_switch',
          { tab_group: group, tab_value: tabValue },
          'interaction', 'tab_switch', group + ':' + tabValue
        );
      }, CONFIG.tabDebounce);
    }, true /* capture，确保在页面逻辑之前获取到事件 */);
  }

  /* ─── 4. 复制按钮（事件委托） ────────────────────────────────────── */

  function setupCopyTracking() {
    if (!CONFIG.trackCopy) return;

    // 方式一：监听 copy DOM 事件（Ctrl+C 或 execCommand('copy')）
    document.addEventListener('copy', function () {
      report(
        'copy', { method: 'keyboard_or_api' },
        'interaction', 'copy', getPageName() + ':selection'
      );
    });

    // 方式二：监听带有复制语义的按钮点击
    // 匹配含有 "copy" 文本/class/aria 的按钮，及 data-copy-target 属性
    document.addEventListener('click', function (e) {
      var el = e.target.closest
        ? e.target.closest('[data-copy-target], .copy-btn, .btn-copy, [aria-label*="copy" i], [aria-label*="复制" i]')
        : null;
      if (!el) return;

      var target = el.dataset.copyTarget || getElLabel(el) || 'unknown';
      report(
        'copy',
        { copy_target: target },
        'interaction', 'copy', getPageName() + ':' + target
      );
    });
  }

  /* ─── 5. 链接点击（外链 + 内链，事件委托） ──────────────────────── */

  function setupLinkTracking() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;

      var href = a.getAttribute('href') || '';
      var page = getPageName();

      // 外链：http/https 且非当前域名
      if (CONFIG.trackOutboundLinks
          && /^https?:\/\//i.test(href)
          && href.indexOf(window.location.hostname) === -1) {
        report(
          'outbound_link',
          { link_url: href, link_text: getElLabel(a) },
          'interaction', 'outbound_link', page + ' → ' + href
        );
        return;
      }

      // 内链：相对路径或同域绝对路径（排除锚点跳转 #xxx）
      if (CONFIG.trackInternalNav
          && !href.startsWith('#')
          && !/^https?:\/\//i.test(href)
          && !/^mailto:/i.test(href)) {
        report(
          'internal_nav',
          { link_url: href, link_text: getElLabel(a) },
          'interaction', 'internal_nav', page + ' → ' + href
        );
      }
    });
  }

  /* ─── 6. 声明式自定义埋点（data-track-event） ───────────────────── */

  /**
   * 任何元素只要添加 data-track-event 属性即可被自动追踪。
   *
   * 示例：
   *   <button data-track-event="pip_copy"
   *           data-track-label="install command"
   *           data-track-once="true">Copy</button>
   */
  function setupDeclarativeTracking() {
    // 已上报过一次的元素（用于 data-track-once）
    var _reported = new WeakSet();

    document.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('[data-track-event]') : null;
      if (!el) return;

      // data-track-once：只上报一次
      if (el.hasAttribute('data-track-once')) {
        if (_reported.has(el)) return;
        _reported.add(el);
      }

      var eventName = el.dataset.trackEvent;
      var label     = el.dataset.trackLabel || getElLabel(el);
      var val       = el.dataset.trackValue !== undefined
        ? Number(el.dataset.trackValue) : undefined;
      var page      = getPageName();

      report(
        eventName,
        { label: label, page_name: page },  // page_name 在 report() 内会被覆盖，这里提前写是为了清晰
        'custom', eventName, page + ':' + label, val
      );
    });
  }

  /* ─── 启动 ──────────────────────────────────────────────────────── */

  function init() {
    // hook ThemeController（如果还没定义，等 load 后重试）
    var hooked = hookThemeController();

    window.addEventListener('load', function() {
      if (!hooked) hookThemeController();
      reportInitialState();
    });

    // 其余追踪不依赖 ThemeController，DOMContentLoaded 后即可绑定
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        setupTabTracking();
        setupCopyTracking();
        setupLinkTracking();
        setupDeclarativeTracking();
      });
    } else {
      setupTabTracking();
      setupCopyTracking();
      setupLinkTracking();
      setupDeclarativeTracking();
    }
  }

  init();

})();