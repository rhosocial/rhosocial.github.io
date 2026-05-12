# 组件国际化（i18n）规则

> 本文定义 rhosocial-activerecord 展示页中通用组件的国际化设计原则。

---

## 原则：组件自包含国际化

**通用组件的语言文字由组件自身管理，不依赖页面级的全局 i18n 文件。**

### 为什么

- 全局 i18n 文件（`assets/i18n/*.js`）有 24 种语言，每个页面全量加载开销大
- 通用组件（导航、控制栏、页脚）的翻译量很小（每条 1-5 个词）
- 组件自包含翻译让页面无需为组件加载额外依赖

### 怎么做

1. 组件内部定义 `NAV_LABELS`、`CONTROL_LABELS` 等字典型结构，key 为语言代码
2. 组件订阅 `window.__STATE__` 的 `lang` 变更
3. 收到变更后，用 `__STATE__.get('lang')` 查找当前语言对应的字典，更新 DOM

```js
// 示例：组件内嵌 i18n 数据
var LABELS = {
  'zh-cn': { save: '保存', cancel: '取消' },
  'en-us': { save: 'Save', cancel: 'Cancel' },
};

function label(key) {
  var lang = window.__STATE__.get('lang');
  var dict = LABELS[lang] || LABELS['en-us'];
  return dict[key] || key;
}

// 初始化时渲染
el.textContent = label('save');

// 语言切换时更新
window.__STATE__.subscribe(['lang'], function() {
  el.textContent = label('save');
});
```

### 适用的组件

| 组件 | 文件 | 翻译条目数 |
|------|------|-----------|
| 导航链接 | `control-bar.js` | 5 条/语言 × 24 语言 |
| 下拉菜单标签 | `control-bar.js` | 3 条/语言 × 24 语言（Theme / Font / Language） |
| 语言名称列表 | `control-bar.js` | 24 条（每种语言的自称） |
| 页脚链接文字 | `shared-footer.js` | 5 条/语言 × 24 语言 |

### 不适用的组件（使用全局 i18n 文件）

页面内容（首页、文档页等）的 i18n 仍使用传统的 `window.I18N` + `data-i18n` 属性机制，因为：
- 翻译量大（可能数百条）
- 每个页面只需要加载自己支持的语言
- 回落机制（不支持的语种降级到 `zh-cn` 或 `en-us`）

---

## CSS 变量污染警示

**页面级内联 `<style>` 块中禁止重新定义 `--border` / `--border-strong`**，包括 `var(--border, ...)` fallback：

```css
/* ❌ 错误 — 会覆盖 theme CSS 定义的 --border，导致所有分隔线/下拉框边框消失 */
--border: var(--border, rgba(255,255,255,0.08));
```

这些变量必须由 theme CSS 统一管理。页面内联样式只应定义页面特有的变量（如 `--surface-*`、`--text-*`、`--accent-soft` 等）。误覆盖会导致顶栏 border-bottom、底栏 border-top、下拉框边框在所有 theme 下颜色固定甚至透明。

---

## 全局 i18n 系统（供页面内容使用）

```html
<!-- 页面加载对应语言的翻译数据 -->
<script src="assets/i18n/zh-cn.js"></script>
<script src="assets/i18n/en-us.js"></script>

<!-- 然后加载 i18n.js -->
<script src="assets/i18n.js"></script>
```

`i18n.js` 自动订阅 `lang` 状态变更，替换 `[data-i18n]` / `[data-i18n-value]` / `[data-i18n-attr]` 元素。

---

## 状态管理的角色

`window.__STATE__` 是整个系统的单一事实来源：

```
组件自包含翻译 ←── lang ──→ 全局 i18n 系统
     (订阅)                  (订阅 + data-i18n)
```

- 通用组件：订阅 `lang`，自包含字典
- 页面内容：订阅 `lang`，通过 `data-i18n` 属性查找 `window.I18N`

两者互不干扰，共用同一个状态源。