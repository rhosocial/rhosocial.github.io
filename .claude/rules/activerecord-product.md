# rhosocial-activerecord 产品展示页 — SSG 应用规则

> 路径前缀：`src/products/rhosocial-activerecord/`

---

## 项目性质

这是一个**独立的 Astro SSG 应用**，构建输出部署到 `https://rhosocial.github.io/products/rhosocial-activerecord/`。不引用 `src/products/` 下的其他产品。

## 目录结构

```
rhosocial-activerecord/
├── astro.config.mjs        # Astro 配置（base: /products/rhosocial-activerecord）
├── package.json            # 独立依赖（仅 astro 6.x）
├── tsconfig.json
├── scripts/
│   └── postbuild.mjs       # 构建后处理：section/*.html → section/index.html
│
├── public/                 # Astro publicDir — 静态资源直接复制到 dist/
│   ├── assets/             # 主题/字体/CSS/JS/i18n 共享资源
│   │   ├── core.css / core-extensions.css / shared.css
│   │   ├── themes/ (26 个主题 CSS)
│   │   ├── fonts/ (25 种字体 CSS)
│   │   ├── sections/ (首页段落样式+JS)
│   │   ├── i18n/ (24 种语言 JS)
│   │   ├── control-bar.js / state-manager.js / theme-applier.js
│   │   ├── i18n.js / shared-header.js / shared-footer.js
│   │   └── init-head.js
│   └── favicon.svg
│
├── src/                    # Astro srcDir — 页面源码
│   ├── pages/              # Astro 页面路由
│   │   ├── index.astro                 → /products/rhosocial-activerecord/index.html
│   │   ├── about-us.astro              → /products/rhosocial-activerecord/about-us.html
│   │   ├── contact-us.astro            → /products/rhosocial-activerecord/contact-us.html
│   │   ├── privacy-policy.astro        → /products/rhosocial-activerecord/privacy-policy.html
│   │   ├── activerecord.astro          → /products/rhosocial-activerecord/activerecord.html
│   │   ├── activerecord/               → 功能文档页面
│   │   ├── backends.astro              → /products/rhosocial-activerecord/backends.html
│   │   ├── backends/                   → 后端文档页面
│   │   ├── blog.astro                  → /products/rhosocial-activerecord/blog.html
│   │   └── blog/                       → 博客文章页面
│   ├── layouts/
│   │   └── BaseLayout.astro            # 全局布局（主题/字体/i18n/控制栏/页脚）
│   ├── components/
│   │   └── ...                         # Astro 组件（页面复用）
│   └── styles/
│       └── ...                         # 页面级样式
│
├── dist/                   # 构建输出 (gitignored)
│   ├── index.html
│   ├── about-us.html
│   ├── contact-us.html
│   ├── privacy-policy.html
│   ├── activerecord.html / activerecord/  (postbuild 处理后)
│   ├── backends.html / backends/
│   ├── blog.html / blog/
│   └── assets/             # 从 public/ 复制
│
├── index/                  # [遗留] 旧首页 i18n JS 文件（24 种语言）
├── activerecord/           # [遗留] 旧功能文档 HTML
├── backends/               # [遗留] 旧后端文档 HTML
├── blog/                   # [遗留] 旧博客文章 HTML
├── _components/            # [遗留] 空目录
├── index.html              # [遗留] 旧静态首页
├── about-us.html           # [遗留] 旧关于我们
├── contact-us.html         # [遗留] 旧联系我们
└── privacy-policy.html     # [遗留] 旧隐私政策
```

## 构建与调试

```bash
# 本地调试（默认端口 4321）
npm run dev            # predev → astro dev → postdev
# 访问: http://localhost:4321/products/rhosocial-activerecord/

# 生产构建
npm run build          # prebuild → astro build + postbuild.mjs → postbuild
# 输出到 dist/

# 预览构建产物
npm run preview        # astro preview
```

### 资产文件管理

所有运行时资产（主题 CSS、字体、i18n JS）存放在 `src/assets/` 目录下，**不在 `public/` 中持久保留**。

通过 npm 的 `pre`/`post` 生命周期钩子自动管理资产复制：

| 命令 | pre 脚本（自动执行） | 主脚本 | post 脚本（自动执行） |
|------|---------------------|--------|---------------------|
| `npm run dev` | 复制 `assets/` → `public/assets/` | `astro dev` | 删除 `public/assets/` |
| `npm run build` | 复制 `assets/` → `public/assets/` | `astro build` + `postbuild.mjs` | 删除 `public/assets/` |

**重要**：`public/assets/` 已从 git 跟踪中移除并加入 `.gitignore`。开发/构建时由 npm 脚本自动复制，结束后自动清理。

**只使用 `npm run dev` 启动调试**，不要直接执行 `npx astro dev`（否则不会触发 predev 复制资产，页面无法加载 CSS/JS）。

### build 流程

1. `astro build` — 生成 SSG HTML 到 `dist/`
   - `build.format: 'file'` → 每个页面输出为 `{name}.html`
   - `base: '/products/rhosocial-activerecord'` → 所有资源路径使用此前缀
2. `node scripts/postbuild.mjs` — 将 `dist/activerecord.html` → `dist/activerecord/index.html`，同理 backends/blog

## 路由映射

| Astro 页面 | 输出 HTML | 线上路径 |
|---|---|---|
| `src/pages/index.astro` | `dist/index.html` | `/products/rhosocial-activerecord/` |
| `src/pages/about-us.astro` | `dist/about-us.html` | `/products/rhosocial-activerecord/about-us.html` |
| `src/pages/contact-us.astro` | `dist/contact-us.html` | `/products/rhosocial-activerecord/contact-us.html` |
| `src/pages/privacy-policy.astro` | `dist/privacy-policy.html` | `/products/rhosocial-activerecord/privacy-policy.html` |
| `src/pages/activerecord.astro` | `dist/activerecord.html` → `dist/activerecord/index.html` | `/products/rhosocial-activerecord/activerecord/` |
| `src/pages/activerecord/query.astro` | `dist/activerecord/query.html` | `/products/rhosocial-activerecord/activerecord/query.html` |
| `src/pages/backends.astro` | `dist/backends.html` → `dist/backends/index.html` | `/products/rhosocial-activerecord/backends/` |
| `src/pages/blog.astro` | `dist/blog.html` → `dist/blog/index.html` | `/products/rhosocial-activerecord/blog/` |

## 页面内容类型

### 信息类页面（index, about-us, contact-us, privacy-policy）
- 使用 `BaseLayout` 布局，`variant="ar"`
- 继承主题/字体/i18n 系统
- 首页（index）是完整的产品展示页（hero, ticker, 功能卡片, 架构图, 对比表, 安装引导）
- about-us/contact-us/privacy-policy 是图文内容页

### 文档类页面（activerecord/, backends/）
- 各后端文档（sqlite, mysql, postgres 等），功能文档（query, cte, relations 等）
- 使用 `BaseLayout` 布局

### 博客页面（blog/）
- 博客系统，使用 `src/pages/blog.astro` 作为首页，`src/pages/blog/*.astro` 为文章页

## 资产系统

资产全部托管在 `public/assets/` 目录，构建后位于 `dist/assets/`。

### 主题系统（26 个主题）
- `public/assets/themes/<name>.css`
- 通过 `data-theme` 属性控制
- 深色主题（10 个）：terminal, noir, synthwave, tokyo, matrix, cyberpunk, chalkboard, aurora, blueprint, steel
- 浅色主题（16 个）：editorial, brutalist, riso, nordic, solarpunk, mocha, wireframe, anderson, memphis, frutiger, newsprint, candy, botanical, cyberpunk, parchment, glassmorphism

### 字体系统（25 种字体）
- `public/assets/fonts/<name>.css`

### i18n（24 种语言）
- `public/assets/i18n/<locale>.js`
- 通过 `init-head.js` → `state-manager.js` → `i18n.js` 实现零闪烁语言切换

## 遗留文件说明

**遗留文件未经迁移**，保留在根目录中作为备份。在 Astro 构建部署后这些文件会被 CI 产物覆盖。

| 遗留目录/文件 | 说明 | 对应 Astro 页面 |
|---|---|---|
| `index.html` | 旧静态首页 | `src/pages/index.astro` |
| `about-us.html` | 旧关于我们 | `src/pages/about-us.astro` |
| `contact-us.html` | 旧联系我们 | `src/pages/contact-us.astro` |
| `privacy-policy.html` | 旧隐私政策 | `src/pages/privacy-policy.astro` |
| `activerecord/` | 旧功能文档 HTML | `src/pages/activerecord/*.astro` |
| `backends/` | 旧后端文档 HTML | `src/pages/backends/*.astro` |
| `blog/` | 旧博客文章 | `src/pages/blog/*.astro` |
| `index/` | 旧首页 i18n JS | —（被 public/assets/i18n/ 替代） |

## Astro 组件规范

### BaseLayout
所有页面必须使用 `BaseLayout`：
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="页面标题" variant="ar">
  <!-- 页面内容 -->
  <style>
    /* 页面级 CSS */
  </style>
</BaseLayout>
```

### variant 值
| 值 | 面包屑路径 |
|---|---|
| `ar` | Theme Lab / Backends / ActiveRecord |
| `back` | Index / Backends / ActiveRecord |
| `blog` | Theme Lab / Backends / ActiveRecord / Blog |

## CI/CD

- **构建验证**：`.github/workflows/deploy-activerecord.yml` — 产品文件变更时触发，仅验证 `npm run build` 通过
- **部署**：`.github/workflows/pages.yaml` — 部署前构建此 SSG 应用，`cp -r dist/* src/products/rhosocial-activerecord/` 覆盖旧文件