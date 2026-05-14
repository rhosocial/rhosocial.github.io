# rhosocial-activerecord 产品展示页 — 通用组件手册

> 路径前缀：`src/products/rhosocial-activerecord/`

---

## 架构概览

```
                      ┌──────────────────────────┐
                      │     init-head.js          │  ← 阻塞式，CSS 加载前决定 data-* 属性
                      │   (无闪烁初始化)           │     零闪烁关键
                      └──────────┬───────────────┘
                                 │ 提供 __INITIAL_STATE__
                                 ▼
┌──────────────────────────────────────────────────┐
│              state-manager.js                    │  ← 全局 Store (发布-订阅)
│   window.__STATE__ = new Store(initialState)     │
│   .get(key) .set(key, value) .subscribe(keys,fn) │
└────────┬──────────┬──────────┬──────────────────┘
         │          │          │
         ▼          ▼          ▼
┌────────────┐ ┌──────────┐ ┌──────────────────┐
│theme-applier│ │ i18n.js  │ │   control-bar.js │  ← 组件
│ data-* 属性 │ │ 文本替换  │ │  dropdown UI 渲染 │
│ localStorage│ │ 语言回落  │ │  + 事件绑定       │
└────────────┘ └──────────┘ └──────────────────┘
                                 │
                                 ▼
                         ┌──────────────┐
                         │shared-header.js│  ← 仅 analytics SDK 注入
                         │ (GA4 + Baidu) │
                         └──────────────┘
```

---

## 核心文件清单

| 文件 | 加载位置 | 职责 |
|------|----------|------|
| `init-head.js` | `<head>` 最前（阻塞） | 检测 URL/localStorage → 设置 data-theme / data-font / lang |
| `state-manager.js` | `<head>` 末尾 | 全局 Store，发布-订阅状态管理 |
| `theme-applier.js` | `<head>` 末尾 | 订阅 theme/font/lang → 更新 DOM 属性 + localStorage |
| `i18n.js` | `<head>` 末尾 | 订阅 lang → 替换 data-i18n / data-i18n-value / data-i18n-attr |
| `control-bar.js` | `<head>` 末尾 | 渲染控制栏 + dropdown 交互（数据透传 data-variant） |
| `shared-header.js` | `<head>` 末尾 | **仅**注入 GA4 / Baidu / analytics.js SDK |
| `shared-footer.js` | `</body>` 前 | 注入页脚 HTML |
| `analytics.js` | 由 shared-header.js 注入 | 事件追踪（自动 hook state-manager） |

---

## 状态管理（state-manager.js）

全局单例 `window.__STATE__`，初始化时读取 `window.__INITIAL_STATE__`（由 init-head.js 写入）。

```js
// 读取
var theme = window.__STATE__.get('theme');

// 写入（触发所有订阅者）
window.__STATE__.set('lang', 'en-us');

// 批量写入（一次通知）
window.__STATE__.setMultiple({ theme: 'noir', font: 'tight' });

// 订阅（key 列表 + 回调）
var id = window.__STATE__.subscribe(['theme', 'font'], function(state, changed) {
  // state: { theme, font, lang }
  // changed: { theme: 'noir' }
});

// 退订
window.__STATE__.unsubscribe(id);
```

---

## 页面模板规则

### 标准 HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 1. init-head: 阻塞执行，决定 theme/font/lang，零闪烁 -->
  <script src="assets/init-head.js"></script>

  <!-- Google Fonts preconnect（可在 init-head 之前或之后） -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  ...

  <!-- 2. 所有 CSS（26 主题 + 25 字体 + 核心 样式） -->
  <link rel="stylesheet" href="assets/core.css">
  <link rel="stylesheet" href="assets/themes/terminal.css">
  <!-- ... 所有主题、字体、core-extensions、shared.css -->

  <!-- 3. 页面级样式 <style> 块 -->
  <!-- 4. 页面 i18n 数据 JS（如 index/zh-cn.js） -->

  <!-- 5. 新架构核心 JS（按此顺序） -->
  <script src="assets/state-manager.js"></script>
  <script src="assets/theme-applier.js"></script>
  <script src="assets/i18n.js"></script>
  <link rel="stylesheet" href="assets/shared.css">
  <script src="assets/control-bar.js" data-variant="ar"></script>
  <script src="assets/shared-header.js"></script>
</head>
<body>
  <!-- control bar 由 control-bar.js 注入 -->
  <main>
    <!-- 页面内容 -->
  </main>
  <script src="assets/shared-footer.js"></script>
</body>
</html>
```

### control-bar.js data-variant

| 值 | 面包屑路径 |
|----|-----------|
| `ar` | Theme Lab / Backends / ActiveRecord |
| `back` | Index / Backends / ActiveRecord |
| `blog` | Theme Lab / Backends / ActiveRecord / Blog |

### 检测优先级（由 init-head.js 处理）

| 属性 | 优先级链 |
|------|----------|
| theme | URL query → localStorage → `terminal` |
| font | URL query → localStorage → FONT_THEME_MAP → `tight` |
| lang | URL query → `rhosocial-lang` localStorage → navigator.languages → `zh-cn` |

### CSS 变量污染警告

**页面级内联 `<style>` 块中禁止重新定义 `--border` / `--border-strong` 变量**，包括 `var(--border, ...)` 形式的 fallback 写法：

```css
/* ❌ 错误 — 会覆盖 theme CSS 的 --border 值 */
:root, body {
  --border: var(--border, rgba(255,255,255,0.08));
}

/* ✅ 正确 — 完全省略，由 theme CSS 统一管理 */
:root, body {
  /* 不出现 --border 或 --border-strong */
}
```

原因：内联样式 `:root` 选择器与 theme CSS 的 `:root` 优先级相同，但出现在 DOM 中更晚，会覆盖 theme 定义的值，导致所有 border/分隔线/下拉框边框颜色在各 theme 下被固定为同一值。

### 控制栏 navLinks href 规则

`control-bar.js` 中的 `navLinks` 必须根据页面层级动态计算 href，**不能硬编码为 `./` 或 `../` 前缀**：

```js
var isRootLevel = pathname.indexOf('/backends/') === -1 &&
                  pathname.indexOf('/activerecord/') === -1 &&
                  pathname.indexOf('/blog/') === -1;
var prefix = isRootLevel ? '' : '../';
navLinks[0].href = prefix + 'index.html';
navLinks[1].href = prefix + 'backends/index.html';
navLinks[2].href = prefix + 'activerecord/index.html';
navLinks[4].href = prefix + 'blog/index.html';
```

`isRootLevel` 变量必须与 `navLinks` 定义在同一作用域，确保在 href 计算前已被赋值。

---

## 组件说明

### 控制栏（Control Bar）

| 属性 | 值 |
|------|-----|
| 文件 | `assets/control-bar.js` |
| 样式 | `core.css §4` + `assets/core-extensions.css` |
| 注入方式 | `<script src="assets/control-bar.js" data-variant="ar">` |
| 功能 | 并列导航链接 + Theme/Font/Lang 三个 dropdown |

导航链接根据路径自动高亮当前页面（`.is-current`），触屏友好（最小触摸区域 36px、圆角背景、无下划线）。

**状态订阅**：订阅 `['theme', 'font', 'lang']`，语言切换时同步更新：

- nav-links 文字（`NAV_LABELS`）
- dropdown 标签文字（`CTRL_LABELS`，如"主题"/"Theme"）
- dropdown 选中值显示
- dropdown 选项高亮状态

### 页脚（Footer）

| 属性 | 值 |
|------|-----|
| 文件 | `assets/shared-footer.js` |
| 样式 | `assets/shared.css`（`.rho-footer`） — 不再通过 JS 内联注入 |
| 注入方式 | `<script src="assets/shared-footer.js"></script>`（放在 `</body>` 前） |
| 状态订阅 | `['theme', 'font', 'lang']` — 语言切换时更新许可协议/链接文字 |
| 布局 | logo（ρ）在左，链接在右，`flex-wrap: wrap` 窄屏换行居中 |

### i18n（i18n.js）

- 订阅 `lang` 状态变更
- 替换 `[data-i18n]`（innerHTML）、`[data-i18n-value]`（textContent）、`[data-i18n-attr]`（attribute）
- 回落机制：当前语言不可用 → `zh-cn` → `en-us` → 不替换

### 分析埋点（analytics.js）

- 自动追踪：Theme/Font/Lang 切换（hook state-manager）、Tab 切换、复制、外链/内链点击
- 声明式埋点：`data-track-event` / `data-track-label` / `data-track-value` / `data-track-once`
- 双上报：`window.gtag()` + `window._hmt.push()`
- 防抖：setting 800ms / tab 400ms

### TabSwitcher（utils.js — 仅 legacy）

```html
<div data-component="tabs-switcher" data-data-key="xxx">
  <div data-dim="lang">
    <button data-tab="python" class="is-active">Python</button>
    <button data-tab="javascript">JavaScript</button>
  </div>
  <div class="tabs-display"></div>
</div>
```

`utils.js` 仅被 `legacy-index.html` 引用，新页面不需要加载。

### CodeBlock 组件（`assets/sections/code-block.css` + `.js`）

运行时 JS 组件，支持三种渲染模式，通过 `window.CodeBlock` API 调用。

| 模式 | 方法 | 用途 |
|------|------|------|
| 标准 | `CodeBlock.renderStandard(code, lang, filename)` | 单段代码高亮，复制按钮常显，macOS 三点 |
| Diff | `CodeBlock.renderDiff(syncCode, asyncCode, filename)` | 同步/异步对比，上下堆叠，差异词闪烁 |
| Result | `CodeBlock.renderResult(code, sql, result, filename)` | 代码 → SQL 高亮 → 结果表格三段式 |

**复制逻辑**：标准模式复制按钮在 header；diff 模式每段各有一个独立复制按钮，只复制对应段落的代码。

**语法高亮**：通过 highlight.js CDN（jsDelivr @11.9.0）自动高亮，类名映射到 `--tok-*` CSS 变量，兼容 26 主题。

**数据格式（博文 body）**：
```javascript
{ tag: 'code', lang: 'python', text: '...', filename: 'demo.py' }
{ tag: 'code-diff', filename: 'demo.py', syncText: '...', asyncText: '...' }
{ tag: 'code-result', filename: 'demo.py', code: '...', sql: '...', result: { columns, rows, params } }
{ tag: 'code-tabs', filename: 'model.py', lang: 'python', tabs: [{ label, code }, ...] }
```

### Tab 组件（`assets/sections/tab.css` + `.js`）

通用 Tab 切换器，通过 `data-tabs="auto"` 自动初始化。

```html
<div class="tabs" data-tabs="auto">
  <div class="tabs-list">
    <button class="tab is-active" data-tab="py38">Python 3.8</button>
    <button class="tab" data-tab="py310">Python 3.10</button>
  </div>
  <div class="tab-panel is-active" data-panel="py38"><!-- ... --></div>
  <div class="tab-panel" data-panel="py310"><!-- ... --></div>
</div>
```

编程式初始化：`window.Tab.init(containerElement)`。

### QueryBuilder 组件（`assets/sections/query-builder.css` + `.js`）

可交互查询构建演示，支持三引擎：
- **ActiveQuery** — 链式步骤开关 × 对应 SQL
- **CTEQuery** — WITH 子句构建
- **SetOperationQuery** — UNION/INTERSECT/EXCEPT 选择 + 子查询

```html
<div data-component="query-builder"></div>
```

### Callout 组件

```html
<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <span class="callout-body">提示内容</span>
</div>
```

| 类型 | class | 图标 | 左边框色 |
|------|-------|------|----------|
| 提示 | `callout-tip` | 💡 | `--accent-2`（青绿） |
| 警告 | `callout-warning` | ⚠️ | `--warn`（黄色） |
| 危险 | `callout-danger` | 🚨 | `--danger`（红色） |
| 信息 | `callout-info` | ℹ️ | `--info`（蓝色） |
| 笔记 | `callout-note` | 📝 | `--fg-muted`（灰色） |

博文数据格式：`{ tag: 'callout', type: 'tip', html: '...' }`

---

## 无闪烁加载原理

1. `init-head.js` 在 `<head>` 最前**阻塞**执行，同步检测 theme/font/lang
2. 写入 `data-theme` / `data-font` / `lang` / `dir` 到 `<html>`
3. 后续 CSS 加载时，选择器 `[data-theme="..."]` 立即匹配，**无需等待 JS 重渲染**
4. 切换时：`control-bar.js` → `state.set('theme', 'noir')` → `theme-applier.js` 更新 `data-theme` → CSS 自动生效

---

## 遗留文件（仅供 legacy-index.html / tests / theme.html 使用）

- `themes.js` — 旧版主题/字体/语言数据定义
- `i18n-core.js` — 旧版 ThemeController / applyI18n
- `utils.js` — 旧版 TabSwitcher / 复制按钮辅助函数
- `feature-code-data.js` — 旧版特征代码展示数据

新页面不应引用以上文件。