# rhosocial-activerecord 博客系统设计规则

> 路径前缀：`src/products/rhosocial-activerecord/blog/`

## 架构总览

博客系统采用"专题-文章"两级结构，数据驱动渲染，支持多语言：

```
blog/
├── index.html                          ← 首页（专题卡片列表，JS 渲染）
├── index/zh-CN.js, index/en-US.js      ← 首页 i18n（含所有文章元数据）
├── {slug}.html                         ← 每篇文章的 HTML 页面（可含自定义组件）
├── {slug}/zh-CN.js, {slug}/en-US.js    ← 文章 i18n（含正文全文 body）
│
assets/
├── series-nav.js                       ← 专题结构数据 + 文章页专题导航渲染
├── blog-index.js                       ← 首页卡片列表渲染（从 index i18n 读取元数据）
├── blog-post.js                        ← 文章正文渲染（从文章 i18n 读取 body）
└── shared-footer.js
```

## 专题-文章结构

### 专题数据（`assets/series-nav.js` 中的 `__SERIES_STRUCTURE`）

```js
window.__SERIES_STRUCTURE = {
  seriesKey: {
    name: { 'zh-cn': '专题名', 'en-us': 'Series Name' },
    posts: [
      { slug: 'article-slug', key: 'articleKey', date: '2026-05-12',
        cats: ['Category1','Category2'], status: 'published',
        titleStub: {'zh-cn':'标题','en-us':'Title'} },
      { slug: '', key: 'plannedKey', date: 'TBD', cats: [...],
        status: 'planned',
        titleStub: {'zh-cn':'标题','en-us':'Title'} },
    ]
  }
}
```

| 字段 | 说明 |
|------|------|
| `slug` | 已发布文章的 URL slug；planned 文章为空字符串 |
| `key` | 关联 `index/zh-CN.js` 中 `posts` 对象 key 的标识符，用于首页查找元数据 |
| `status` | `'published'`（可点击）或 `'planned'`（灰色占位） |
| `titleStub` | 多语言标题，用于文章页专题导航中 planned 文章的显示 |

### 首页文章元数据（`index/zh-CN.js` / `index/en-US.js` 的 `posts` 字段）

```js
posts: {
  whyPydanticV2: {      // key = __SERIES_STRUCTURE 中的 post.key
    slug: "why-pydantic-v2",   // 已发布文章与 slug 一致，planned 为空
    date: "2026-05-12",
    cats: ["Design", "Architecture"],
    title: "文章标题",
    desc: "文章描述摘要"
  }
}
```

`blog-index.js` 通过 `post.slug || post.key` 查找元数据。

### 文章 i18n 正文（`{slug}/zh-CN.js` / `{slug}/en-US.js` 的 `body` 字段）

```js
body: [
  { tag: "p", html: "段落内容（支持 <code> 等内联 HTML）" },
  { tag: "lead", html: "引言段落" },
  { tag: "h2", html: "二级标题" },
  { tag: "h3", html: "三级标题" },
  { tag: "code", text: "代码块文本（纯文本，会 escape）" },
  { tag: "ul", items: ["<li>支持 HTML</li>", "条目2"] },
  { tag: "ol", items: ["条目1", "条目2"] },
  { tag: "callout", html: "提示框" },
  { tag: "blockquote", html: "引用" },
  { tag: "hr" },
  { tag: "next", html: "下一篇预告" },
  { tag: "raw", html: "原始 HTML（不 escape，直接插入）" },
]
```

`blog-post.js` 的 `renderBlock` 函数处理每种 tag 类型的渲染。

## 组件职责

### `assets/series-nav.js`

- 定义 `window.__SERIES_STRUCTURE`：所有专题的结构数据（只含系列关系和标题存根，不含正文内容）
- 定义 `window.__SERIES_NAV.renderArticleNav(container, slug)`：为文章页渲染底部专题导航列表
- 文章页专题导航的标题来源：当前文章从 `window.I18N[lang].hero.title` 读取，其他已发布文章从 `titleStub` 读取
- 自包含 i18n（labels 对象）用于"专题"、"即将发布"等界面文字

### `assets/blog-index.js`

- 读取 `window.__SERIES_STRUCTURE` + `window.I18N[lang].posts` 元数据
- 渲染按专题分组的文章卡片网格
- 已发布卡片可点击（蓝色 accent），planned 卡片灰色半透明（`placeholder` 类）
- 自包含 i18n（labels 对象）用于"阅读全文"、"即将发布"等界面文字
- 订阅 lang 变化

### `assets/blog-post.js`

- 查找 `#post-body[data-slug]`，读取该页面的 `window.I18N[lang].body` 数组
- 按 `tag` 类型将每个 block 渲染为对应的 HTML
- 自定义 HTML 组件直接在 `{slug}.html` 中写在 `#post-body` 前后或替换为 `raw` 类型的 body 块
- 订阅 lang 变化实现实时重渲染

## 页面模板

### 首页 `index.html`

```html
<head>
  <script src="../assets/init-head.js"></script>
  <!-- 所有 CSS -->
  <script src="index/zh-CN.js"></script>
  <script src="index/en-US.js"></script>
  <script src="../assets/state-manager.js"></script>
  <script src="../assets/theme-applier.js"></script>
  <script src="../assets/i18n.js"></script>
  <script src="../assets/control-bar.js" data-variant="blog"></script>
  <script src="../assets/shared-header.js"></script>
</head>
<body>
  <main>
    <section class="hero">...</section>
    <section>
      <div id="series-index-container"></div>  <!-- blog-index.js 填充 -->
    </section>
    <script src="../assets/shared-footer.js"></script>
    <script src="../assets/series-nav.js"></script>  <!-- 先加载结构数据 -->
    <script src="../assets/blog-index.js"></script>  <!-- 再渲染 -->
  </main>
</body>
```

### 文章页 `{slug}.html`

```html
<head>
  <script src="../assets/init-head.js"></script>
  <!-- 所有 CSS -->
  <script src="{slug}/zh-CN.js"></script>  <!-- 文章 i18n（含 body） -->
  <script src="{slug}/en-US.js"></script>
  <!-- state-manager, theme-applier, i18n, control-bar, shared-header -->
</head>
<body>
  <main>
    <section class="hero">
      <!-- data-i18n 属性引用 hero.title 等 -->
    </section>
    <div id="post-body" class="container article-body"
         data-slug="{slug}"></div>              <!-- blog-post.js 填充正文 -->
    <div id="series-article-nav" class="container series-nav"
         data-slug="{slug}"></div>             <!-- series-nav.js 填充专题导航 -->
    <script src="../assets/blog-post.js"></script>
    <script src="../assets/series-nav.js"></script>
    <script src="../assets/shared-footer.js"></script>
  </main>
</body>
```

## 新增文章流程

1. **`assets/series-nav.js`**：在 `__SERIES_STRUCTURE` 对应专题的 `posts` 数组中添加一条（含 key、slug、titleStub、status）
2. **`index/zh-CN.js` / `index/en-US.js`**：在 `posts` 中添加元数据（title、desc、cats、date），key 与上一步的 key 一致
3. **创建 `{slug}.html`**：复制 `why-pydantic-v2.html` 为模板，修改 `<title>`、hero 中的 `data-i18n` 和正文自定义组件
4. **创建 `{slug}/zh-CN.js` / `{slug}/en-US.js`**：包含 hero i18n + body 数组（英文版内容全文翻译）
5. 如果是 published：在 `__SERIES_STRUCTURE` 中填写 `slug`，并在 `index` i18n 的 `posts` 中填写 `slug`