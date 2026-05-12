# RhoAR 设计语言规范

> 版本: v1.0
> 依据: `rhoar-concept.html` + `index.html`（新首页，标杆实现）

---

## 1. CSS 变量映射

所有组件必须使用 CSS 变量，**禁止硬编码颜色**。

### 1.1 主题系统变量（由 `assets/core.css` 默认值 + `assets/themes/*.css` 覆盖）

主题文件（24 个，位于 `assets/themes/`）仅定义以下变量。组件必须只消费这些变量：

```
背景系:     --bg, --bg-2, --bg-elevated
文字系:     --fg, --fg-muted, --fg-faint
强调系:     --accent, --accent-2, --accent-3
边框系:     --border, --border-strong
圆角系:     --radius, --radius-sm
字体系:     --font-display, --font-body, --font-mono
文字权重:    --display-weight, --display-tracking, --display-leading
代码块:     --code-bg, --code-fg, --code-fg-muted, --code-border
语法高亮:   --tok-keyword, --tok-string, --tok-func, --tok-comment, --tok-num, --tok-op, --tok-class, --tok-self, --tok-dec, --tok-dim, --tok-attr
语义色:     --info, --success, --warn, --danger
```

### 1.2 rhoar-concept 设计语言的变量映射

rhoar-concept 组件使用 `--r-*` 前缀变量，映射到主题系统。必须在每个页面的 `<style>` 块中定义此映射：

```css
/* 在包含 rhoar-concept 组件的页面中必须包含此映射 */
:root, body {
  /* 背景 */
  --r-bg:        var(--bg);
  --r-bg2:       var(--bg-2);
  --r-surface:   var(--bg-elevated);
  --r-surface2:  var(--bg-2);
  --r-border:    var(--border);
  --r-border2:   var(--border-strong);

  /* 文字 */
  --r-text:      var(--fg);
  --r-text2:     var(--fg-muted);
  --r-text3:     var(--fg-faint);

  /* 强调色 */
  --r-accent:    var(--accent);
  --r-accent-dim: color-mix(in srgb, var(--accent) 15%, transparent);
  --r-accent-glow: color-mix(in srgb, var(--accent) 8%, transparent);

  /* 辅助色 */
  --r-cyan:      var(--accent-2);
  --r-cyan-dim:  color-mix(in srgb, var(--accent-2) 12%, transparent);
  --r-green:     var(--success);
  --r-green-dim: color-mix(in srgb, var(--success) 12%, transparent);
  --r-red:       var(--danger);
  --r-purple:    var(--tok-keyword);

  /* 字体 */
  --r-font-display: var(--font-display);
  --r-font-mono:    var(--font-mono);
  --r-font-body:    var(--font-body);
}
```

> **注意**: `color-mix()` 在现代浏览器中支持良好。如需兼容旧浏览器，使用 `rgba()` 回退。

### 1.3 子页面（model/query/backends）的额外变量映射

子页面中的 `surface-*` / `text-*` 等变量（来自 UX prototype）也必须映射：

```css
/* 页面内 <style> 块必须包含 */
:root, body {
  --surface-0:      var(--bg-2);
  --surface-1:      var(--bg-elevated);
  --surface-2:      var(--bg-2);
  --surface-3:      color-mix(in srgb, var(--fg) 8%, var(--bg));

  --text-primary:   var(--fg);
  --text-secondary: var(--fg-muted);
  --text-muted:     var(--fg-faint);

  --accent-soft:           color-mix(in srgb, var(--accent) 15%, transparent);
  --accent-secondary:      var(--accent-2);
  --accent-secondary-soft: color-mix(in srgb, var(--accent-2) 12%, transparent);
  --accent-fg:             var(--bg);

  --ok:       var(--success);
  --ok-soft:  color-mix(in srgb, var(--success) 12%, transparent);
  --warn:     var(--warn);
  --err:      var(--danger);
  --err-soft: color-mix(in srgb, var(--danger) 12%, transparent);
  --info:     var(--info);

  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;

  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px;
  --radius-pill: 9999px;
}
```

---

## 2. 滚动淡入效果（Scroll Reveal）

### 2.1 CSS

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-d1 { transition-delay: 0.1s; }
.reveal-d2 { transition-delay: 0.2s; }
```

### 2.2 JavaScript（每页底部，紧接在前一个 `<script>` 之后）

```javascript
(function(){
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
})();
```

### 2.3 用法

```html
<section class="rho-section">
  <div class="reveal">
    <div class="label">标题</div>
    <h2>内容</h2>
  </div>
  <div class="reveal reveal-d1">
    <!-- 延迟进入的内容 -->
  </div>
</section>
```

---

## 3. 特性卡片（Feature Cards）

### 3.1 水平滚动容器

```css
.features-scroll-container {
  overflow-x: auto;
  padding: 1rem 0 2rem;
  scrollbar-width: none;
}
.features-scroll-container::-webkit-scrollbar { display: none; }
.features-track {
  display: flex;
  gap: 20px;
  width: max-content;
}
```

### 3.2 卡片（JS 动态渲染）

卡片必须通过 JS 渲染（便于未来 i18n），每张卡片结构：

```css
.feat-card {
  width: 300px;
  flex-shrink: 0;
  background: var(--r-bg2);
  border: 1px solid var(--r-border);
  border-radius: 10px;
  padding: 28px;
  transition: border-color 0.3s, transform 0.3s;
  position: relative;
  overflow: hidden;
}
.feat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--r-accent), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.feat-card:hover {
  border-color: var(--r-border2);
  transform: translateY(-4px);
}
.feat-card:hover::before { opacity: 1; }
```

### 3.3 JS 渲染模板

```javascript
(function(){
  var features = [
    {
      num: '01 / name',
      icon: '⬡',
      title: '<span class="hl">标题</span>描述',
      desc: '描述文字',
      code: '<span class="kw">class</span> ...',
      tags: ['tag1', 'tag2'],
      link: 'target-page.html'
    },
    // ... 更多卡片
  ];
  var track = document.getElementById('features-track');
  if (track) {
    for (var i = 0; i < features.length; i++) {
      var f = features[i];
      var card = document.createElement('div');
      card.className = 'feat-card';
      card.style.transitionDelay = (i * 0.05) + 's';
      var codeHtml = '<div class="feat-code-snip"><div class="code-block">' + f.code + '</div></div>';
      var tagsHtml = '<div class="feat-tags">' + f.tags.map(function(t) { return '<span class="feat-tag">' + t + '</span>'; }).join('') + '</div>';
      var linkHtml = f.link ? '<a href="' + f.link + '" class="feat-link">查看详情 →</a>' : '';
      card.innerHTML = '<div class="feat-num">' + f.num + '</div><div class="feat-icon">' + f.icon + '</div><div class="feat-title">' + f.title + '</div><div class="feat-desc">' + f.desc + '</div>' + codeHtml + tagsHtml + linkHtml;
      track.appendChild(card);
    }
  }
})();
```

---

## 4. 主题切换适配

### 4.1 CSS 变量回退

所有颜色引用必须使用 `var(--name)` **不带硬编码回退值**（避免覆盖主题）。只有 `--r-*` 映射变量可使用硬编码回退：

```css
/* 错误 ❌ — 硬编码颜色跳过主题 */
background: #111822;

/* 正确 ✅ — 使用主题变量 */
background: var(--r-surface);
```

### 4.2 组件适配模式

每个主题（如 terminal, cyberpunk, anderson 等）可以对公共组件添加特化样式。特化样式必须使用主题选择器：

```css
/* 所有主题的组件特化都在单个页面 <style> 中定义 */
[data-theme="terminal"] .feat-card {
  border-style: dashed;
  border-radius: 0;
}
[data-theme="cyberpunk"] .feat-card {
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(0,255,159,0.15);
}
[data-theme="anderson"] .feat-card {
  border-color: #c9a96e;
  background: #f5ead0;
}
```

### 4.3 ThemeController 集成（仅 `index.html`）

`index.html`（首页）使用 `assets/i18n-core.js` 的 `ThemeController`。子页面使用自包含的 dropdown 系统。

**ThemeController 工作原理**: 当 `setValue('theme', 'terminal')` 被调用时：
1. 设置 `<html data-theme="terminal">`
2. 触发 `RENDER_ADAPTERS` 中的 `onTheme()` 回调
3. CSS 选择器 `[data-theme="terminal"] { ... }` 在所有 CSS 文件中自动生效

**子页面自包含系统工作原理**: 使用 `setValue('theme', 'terminal')` 设置 `<html data-theme="terminal">`，不依赖 ThemeController。

两种方式都确保 CSS 变量切换生效。关键是要确保所有颜色都通过 CSS 变量引用。

---

## 5. 组件层次结构

### 5.1 页面骨架

```
┌─ <head> ──────────────────────────────────────┐
│  assets/core.css                              │
│  assets/themes/*.css (26 个)                   │
│  assets/fonts/*.css (25 个)                    │
│  page-specific locale JS                       │
│  assets/themes.js                              │
│  assets/i18n-core.js                           │
├─ <body> ──────────────────────────────────────┤
│  <header class="control-bar">                 │
│    theme/font/lang dropdowns                  │
│  </header>                                    │
│  <style>  ← 页面特有 rhoar 组件 CSS + 变量映射  │
│  <main> ← 内容区域                              │
│  <footer class="footer">                      │
│  <script> ← theme/font/lang 切换 + scroll reval│
│  </body>                                      │
└───────────────────────────────────────────────┘
```

### 5.2 区块结构

每个页面章节遵循以下结构：

```html
<section class="sect" id="section-id">
  <span class="sect-tag">01 · NAME · ARCHEYTYPE</span>
  <h2>标题<em>强调</em>。</h2>
  <p class="intro">介绍文字<b>加粗</b><code>代码</code></p>

  <!-- 内容区域 -->
  <div class="code-panel">...</div>

  <!-- 或 tabs -->
  <div class="tabs-row" data-tabset="id">
    <button class="tab-btn on" data-tab="tab1">Tab 1</button>
    <button class="tab-btn" data-tab="tab2">Tab 2</button>
  </div>
</section>
```

---

## 6. 内联页内 `<style>` 块的 CSS 变量映射

所有页面在其 `<style>` 块开头必须包含完整的变量映射，以确保所有组件样式正确应用主题：

```css
/* 必须放在每个页面的 <style> 块开头 */
:root, body {
  /* 映射 theme 变量到 surface/text 命名空间 */
  --surface-0:      var(--bg-2);
  --surface-1:      var(--bg-elevated);
  --surface-2:      var(--bg-2);
  --surface-3:      color-mix(in srgb, var(--fg) 8%, var(--bg));
  --text-primary:   var(--fg);
  --text-secondary: var(--fg-muted);
  --text-muted:     var(--fg-faint);
  --accent-soft:    color-mix(in srgb, var(--accent) 15%, transparent);
  --accent-secondary:      var(--accent-2);
  --accent-secondary-soft: color-mix(in srgb, var(--accent-2) 12%, transparent);
  --accent-fg:      var(--bg);
  --ok:             var(--success);
  --ok-soft:        color-mix(in srgb, var(--success) 12%, transparent);
  --err:            var(--danger);
  --err-soft:       color-mix(in srgb, var(--danger) 12%, transparent);
  --info:           var(--info);
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;
  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-pill: 9999px;
}
```

---

## 7. 引用实现

| 特性 | 标杆文件 | 行号 |
|------|---------|------|
| CSS 变量映射 | `index.html` | `:root` block (lines 75-98) |
| Scroll Reveal CSS | `index.html` | Lines 514-518 |
| Scroll Reveal JS | `index.html` | Lines 1049-1062 |
| Feature Cards CSS | `index.html` | Lines 354-403 |
| Feature Cards JS | `index.html` | Lines 1021-1047 |
| 水平滚动容器 | `index.html` | Lines 355-357 |
| 主题变量完整映射 | `assets/themes/terminal.css` | Full file |