# rhosocial-activerecord 产品展示页 — 通用组件手册

> 路径前缀：`src/products/rhosocial-activerecord/`

---

## 概览

产品展示页由三层组成：
- **数据层** — `themes.js`（主题/字体/语言配置）
- **逻辑层** — `i18n-core.js`、`utils.js`、`feature-code-data.js`、`analytics.js`
- **UI 层** — `shared-header.js`、`shared-footer.js`、`shared.css`、`core.css`

---

## 基础设施

### CSS 变量体系（core.css §2）

`:root` 上定义 30+ CSS 变量，所有组件样式基于这些变量。主题文件（`themes/*.css`）通过 `[data-theme="x"]` 覆盖变量值，字体包（`fonts/*.css`）覆盖 `--font-*` 变量。

核心变量（各主题都会覆盖）：

| 变量 | 用途 |
|------|------|
| `--bg` / `--bg-2` / `--bg-elevated` | 表面色 |
| `--fg` / `--fg-muted` / `--fg-faint` | 文字色 |
| `--accent` / `--accent-2` / `--accent-3` | 强调色 |
| `--border` / `--border-strong` | 边界色 |
| `--font-display` / `--font-body` / `--font-mono` | 字体族 |
| `--radius` / `--radius-sm` | 圆角 |
| `--code-bg` / `--code-fg` | 代码块配色 |
| `--tok-*` | 语法高亮令牌色 |

注意：所有样式都**必须**使用这些 CSS 变量，不可硬编码颜色值。

### 动画系统（core.css §3）

- `.rise` — 上浮淡入动画（700ms），支持 `:nth-child` 延迟
- `.pulse` — 脉冲动画

### 响应式断点

- `640px` — 移动端（core.css 和 shared.css 均处理）

---

## 页面模板规则

### 标准 HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="terminal" data-font="tight">
<head>
  <!-- Google Fonts preconnect -->
  <!-- 26 个主题 CSS -->
  <!-- 25 个字体 CSS -->
  <link rel="stylesheet" href="assets/core.css">
  <link rel="stylesheet" href="assets/core-extensions.css">
  <link rel="stylesheet" href="assets/shared.css">
  <!-- 语言覆盖样式（ar/fa-ir/hi-in/bn-bd 等） -->
  <!-- 页面级样式（<style> 块） -->
  <!-- i18n JS（全部语言） -->
  <script src="assets/themes.js"></script>
  <script src="assets/i18n-core.js"></script>
  <script src="assets/utils.js"></script>
</head>
<body>
  <script src="assets/shared-header.js" data-header-variant="ar"></script>
  <main>
    <!-- 页面内容 -->
  </main>
  <script src="assets/shared-footer.js"></script>
  <!-- 页面初始化脚本 -->
  <script src="assets/analytics.js"></script>
</body>
</html>
```

### JS 加载顺序（重要）

1. `themes.js` — 先加载数据（定义 `window.THEMES` 等）
2. `i18n-core.js` — 再加载逻辑（依赖 `window.THEMES` 等）
3. `utils.js` — 工具函数
4. `shared-header.js` — 注入 UI（依赖 `window.I18N`）
5. `shared-footer.js` — 注入 footer
6. `analytics.js` — 最后加载（放在 GA/百度统计脚本之后）

### 站点页面（非文档类）

`privacy-policy.html`、`about-us.html`、`contact-us.html` 等政策/介绍页面：

- 布局使用 `.policy-page` 容器（最大宽度 780px，居中排版），而非 `.page` + `.section`
- 内容区颜色直接使用主题系统变量：`var(--bg)`、`var(--fg)`、`var(--fg-muted)`、`var(--fg-faint)`、`var(--accent)`、`var(--bg-2)`、`var(--border)`
- 需要加载 `shared.css` 以获得正确的 `.rho-footer` 样式
- body 需要 `padding-top`（`5rem` 或 `80px`）为 fixed 控制栏留出空间
- 需要初始化脚本从 localStorage 恢复主题/字体/语言（见下方「初始化脚本」）
- 不能移除 body 上由 core.css 定义的 `background: var(--bg)` 和 `color: var(--fg)`

---

## 组件清单

### 控制栏（Control Bar）

| 属性 | 值 |
|------|-----|
| 文件 | `assets/shared-header.js` |
| 样式 | `core.css §4`（`.control-bar`、`.control-brand`、`.chip`、`.dropdown-*`） |
| 注入方式 | `<script src="assets/shared-header.js" data-header-variant="ar">` |
| 变体 | `ar` → 面包屑：Theme Lab / Backends / ActiveRecord<br>`back` → 面包屑：Index / Backends / ActiveRecord<br>`blog` → 面包屑（blog 子目录） |
| 功能 | 品牌标记、面包屑、Theme/Font/Lang 三个 dropdown、键盘快捷键 |

**键盘快捷键**（定义在 shared-header.js）：

| 修饰键 | 功能 |
|--------|------|
| `Ctrl` + QWERTY 键 | 切换主题 |
| `Shift` + QWERTY 键 | 切换字体 |
| `Alt` + QWERTY 键 | 切换语言 |

**localStorage key**：

| key | 写入方 | 说明 |
|-----|--------|------|
| `theme` | `shared-header.js` (setValue) / `i18n-core.js` (ThemeController) | 主题 |
| `font` | `shared-header.js` (setValue) / `i18n-core.js` (ThemeController) | 字体 |
| `rhosocial-lang` | `shared-header.js` (setValue) | 语言 |

注意：语言 key 是 `rhosocial-lang` 而非 `lang`；`lang` 是 index.html 中 ThemeController 使用的遗留 key。

### 页脚（Footer）

| 属性 | 值 |
|------|-----|
| 文件 | `assets/shared-footer.js` |
| 样式 | `assets/shared.css`（`.rho-footer`） + `core.css §15` |
| 注入方式 | `<script src="assets/shared-footer.js"></script>` |
| 位置 | 在 `<main>` 之后插入 |
| 链接 | Privacy / About / Contact / GitHub / PyPI（硬编码） |

### ThemeController（i18n-core.js）

```js
var ctrl = new ThemeController({ container: containerEl, onChange: callback });
ctrl.init();  // 从 localStorage 恢复值并写入 DOM
```

- `detectTheme()` — 检测链：URL query > localStorage > 默认值
- `detectFont(theme)` — 检测链：URL query > localStorage > FONT_THEME_MAP > 默认值
- `detectLang()` — 检测链：URL query > localStorage > navigator.languages > 默认值
- `setValue(type, value)` — 设值并持久化到 localStorage（theme/font/lang 三个 type）
- `onChange(e)` — 回调，e 包含 `{ type, value, prev }`

### TabSwitcher（utils.js）

```html
<div data-component="tabs-switcher" data-data-key="xxx">
  <div data-dim="lang">
    <button data-tab="python" class="is-active">Python</button>
    <button data-tab="javascript">JavaScript</button>
  </div>
  <div class="tabs-display"></div>
</div>
```

- 支持 N 维 Tab 组合
- 数据源：`window.CONTENT_DATA[dataKey]`
- 渲染器：`code`（带复制按钮/Highlight.js）/ `html`（原始渲染）
- 初始化：`initAllTabSwitchers()`

### 代码块（core.css §9）

```html
<div class="code-block">
  <div class="code-header">
    <div class="code-dots"><span></span><span></span><span></span></div>
    <span class="code-filename">main.py</span>
  </div>
  <div class="code-body"><pre>
    <span class="tok-k">from</span> ...
    <span class="tok-s">'string'</span>
    <span class="tok-c"># comment</span>
  </pre></div>
</div>
```

**语法高亮 Token 类名**：`tok-k`（关键字）、`tok-cls`（类名）、`tok-s`（字符串）、`tok-c`（注释）、`tok-attr`（属性）、`tok-n`（数字）、`tok-f`（函数）、`tok-d`（装饰器）、`tok-o`（操作符）。

### 特征代码双层 Tab（feature-code-data.js）

```html
<div class="feature-codes">
  <div class="feature-code" data-feature="f1">
    <div class="tab-row" data-tabs="py">
      <button data-tab="py38" class="is-active">3.8</button>
      ...
    </div>
    <div class="tab-row" data-tabs="mode">
      <button data-tab="sync" class="is-active">Sync</button>
      <button data-tab="async">Async</button>
    </div>
    <div class="feature-code-display"></div>
  </div>
</div>
```

调用 `initFeatureCodeTabs()` 初始化，切换时调用 `updateFeatureCode(featureId, pyVersion, syncAsync)` 更新显示。

### 分析埋点（analytics.js）

- 自动追踪：Theme/Font/Lang 切换、Tab 切换、复制、外链/内链点击、初始状态
- 声明式埋点：`data-track-event="eventName"` + `data-track-label` + `data-track-value` + `data-track-once`
- 双上报：`window.gtag()` + `window._hmt.push()`
- 防抖：setting 800ms / tab 400ms

---

## 初始化脚本（站点页面专用）

非文档类页面（privacy-policy / about-us / contact-us）的初始化：

```js
<script>
(function(){
  function isValidTheme(val) { return window.THEMES && window.THEMES.some(function(t) { return t[0] === val; }); }
  function isValidFont(val) { return window.FONTS && window.FONTS.some(function(f) { return f[0] === val; }); }
  function isValidLang(val) { return window.LANGS && window.LANGS.some(function(l) { return l[0] === val; }); }

  var theme = localStorage.getItem('theme');
  if (theme && isValidTheme(theme)) document.documentElement.setAttribute('data-theme', theme);
  var font = localStorage.getItem('font');
  if (font && isValidFont(font)) document.documentElement.setAttribute('data-font', font);
  var lang = localStorage.getItem('rhosocial-lang');
  if (lang && isValidLang(lang)) document.documentElement.setAttribute('lang', lang);

  function refreshValueLabel(kind, value) {
    var dd = document.querySelector('[data-dropdown="'+kind+'"]');
    if (!dd) return;
    var item = dd.querySelector('.dropdown-item[data-value="'+value+'"]');
    if (!item) return;
    var ve = dd.querySelector('.dropdown-value');
    if (ve) ve.textContent = (item.querySelector('.dropdown-item-label')||{}).textContent || value;
  }

  var ddTheme = document.querySelector('[data-dropdown="theme"]');
  var ddFont = document.querySelector('[data-dropdown="font"]');
  var ddLang = document.querySelector('[data-dropdown="lang"]');
  if (ddTheme && theme) refreshValueLabel('theme', theme);
  if (ddFont && font) refreshValueLabel('font', font);
  if (ddLang && lang) refreshValueLabel('lang', lang);
})();
</script>
```

关键注意：
- 语言用 `rhosocial-lang`（与 `shared-header.js` 一致），**不要**用 `lang`
- 主题/字体用 `theme` / `font`（与 `i18n-core.js` 的 ThemeController 一致）
- 必须在 `shared-header.js` 和 `shared-footer.js` 之后执行
- 必须在 `analytics.js` 之前执行