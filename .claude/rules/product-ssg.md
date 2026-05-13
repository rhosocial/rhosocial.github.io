# 产品页面 SSG 应用规则

> 所有产品页面放在 `src/products/` 目录下，每个产品对应一个独立的 SSG 应用。

## 核心原则

**每个产品目录是一个独立的 SSG（Static Site Generator）应用，互不引用。**

## 目录结构

```
src/products/
├── rhosocial-activerecord/     # 产品 A — 独立 Astro 应用
│   ├── astro.config.mjs
│   ├── package.json
│   ├── package-lock.json
│   ├── public/                  # 静态资源
│   ├── src/                     # 应用源码
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── components/
│   │   └── styles/
│   └── scripts/
│
└── <product-name>/              # 产品 B（未来新增，同上结构）
    ├── astro.config.mjs
    ├── package.json
    └── src/...
```

## 规则

1. **独立依赖**：每个产品有自己的 `package.json` 和 `package-lock.json`
2. **独立 Astro 配置**：每个产品有自己的 `astro.config.mjs`，单独设置 `site`、`base`、`outDir`
3. **无交叉引用**：一个产品的代码不得引用另一个产品的文件
4. **独立构建**：每个产品可以独立 `astro build` 和 `astro dev`
5. **共享资产**：如果多个产品需要共享 CSS/JS 资源，放在各自产品目录的 `public/assets/` 下（运行时路径相同则可共用，但构建时不互相依赖）

## 配置示例

```js
// rhosocial-activerecord/astro.config.mjs
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://rhosocial.github.io',
  base: '/products/rhosocial-activerecord',
  outDir: 'dist',
  build: { format: 'file' },
});
```

## 本地调试

```bash
# 进入产品目录后执行
cd src/products/<product-name>
npm run dev       # astro dev — 默认端口 4321
npm run build     # astro build
npm run preview   # astro preview
```

## CI/CD

- **构建验证**：每个产品有独立的 CI workflow（仅在对应文件变更时触发）
- **部署**：`pages.yaml` 在部署前构建所有产品 SSG 应用，将构建产物复制回 `src/products/<product>/` 目录