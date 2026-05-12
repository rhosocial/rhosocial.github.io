# Component Architecture Guide

This document describes the component system used across all pages in
the rhosocial-activerecord documentation site.

## Design Philosophy

The site is pure static HTML — no build tool, no bundler, no framework.
Components are plain JS/CSS files loaded via `<link>` and `<script>` tags.
All components share state through global `window.*` namespace and CSS custom
properties. Theme/font/language state is stored on `<html>` attributes and
consumed by CSS via `[data-theme="x"]` attribute selectors.

## Three Page Families

| Family | Header/Footer | Section Components | Examples |
|--------|---------------|-------------------|----------|
| **Landing** (`index.html`) | Static control-bar HTML | Extracted to `assets/sections/` | `index.html`, `rhoar-concept.html`, `theme.html` |
| **Subpage** (`activerecord/*`, `backends/*`) | Shared JS injection (`shared-header.js` + `shared-footer.js`) | Minimal inline CSS | `activerecord/model.html`, `backends/mysql.html` |
| **Root standalone** | Self-contained | — | `legacy-index.html` |

## Landing Page Component Architecture

### Dependency Graph (Loading Order)

```
core.css (reset + design tokens)
  └── themes/*.css (data-theme overrides)
  └── fonts/*.css  (data-font overrides)
  └── core-extensions.css (dropdown, tabs, gallery)
  └── sections/rho-vars.css (--r-* variable bridge)
       ├── sections/section-common.css (layout, label, buttons, scroll-reveal)
       ├── sections/hero.css
       ├── sections/ticker.css
       ├── sections/chain-builder.css
       ├── sections/feature-cards.css
       ├── sections/arch.css
       ├── sections/compare.css
       ├── sections/install.css
       └── sections/footer.css

i18n/*.js (translations) ──── used by ────> sections/*.js (via window.I18N)
  index/*.js (page dicts)
  themes.js (THEMES/FONTS/LANGS arrays) ──> i18n-core.js (ThemeController)
  utils.js (TabSwitcher)

ticker.js ────────────────────── renders ──> .ticker-inner
chain-builder.js ─────────────── binds ─────> .chain-builder, #sql-output
feature-cards.js ─────────────── renders ───> #features-track
scroll-reveal.js ─────────────── observes ──> .reveal
install-copy.js ──────────────── binds ─────> #install-cmd
analytics.js ─────────────────── hooks ─────> window.themeCtrl.onChange
```

### Sections Component Inventory

All files live under `assets/sections/`.

| File | Type | Content | Dependencies |
|------|------|---------|-------------|
| `rho-vars.css` | CSS tokens | Maps `--r-*` namespace to `--bg`, `--fg`, `--accent` etc. | `core.css` theme vars |
| `section-common.css` | CSS layout | Section grid, `.label`, `.btn-primary/ghost`, `.reveal`, RTL fonts | `rho-vars.css` |
| `hero.css` | CSS component | `.rho-hero`, `.demo-terminal`, `.hero-code-block` | `rho-vars.css` |
| `ticker.css` | CSS component | `.ticker` animation | `rho-vars.css` |
| `ticker.js` | JS renderer | Generates `.ticker-item` DOM from data array | — |
| `chain-builder.css` | CSS component | `.interactive-demo`, `.chain-step`, `.sql-output` | `rho-vars.css` |
| `chain-builder.js` | JS interactivity | SQL part rendering, step toggle | — |
| `feature-cards.css` | CSS component | `.feat-card`, horizontal scroll | `rho-vars.css` |
| `feature-cards.js` | JS renderer | Builds 6 cards from data array | — |
| `arch.css` | CSS component | `.arch-diagram` grid | `rho-vars.css` |
| `compare.css` | CSS component | `.compare-grid` table | `rho-vars.css` |
| `install.css` | CSS component | `.install-cmd` style | `rho-vars.css` |
| `install-copy.js` | JS utility | Clipboard copy for pip command | — |
| `footer.css` | CSS component | `.rho-footer` style | `rho-vars.css` |
| `scroll-reveal.js` | JS utility | IntersectionObserver for `.reveal` | `section-common.css` |

## Shared Component System (Subpages)

Used by all pages under `activerecord/` and `backends/`.

### Runtime Flow

```
1. <head> loads ALL theme/font CSS (same 26 + 26 files)
2. <head> loads shared.css (footer only)
3. <head> loads shared-header.js (sync, injects control-bar)
     ├── Creates <header class="control-bar"> DOM
     ├── Detects lang from URL → localStorage → navigator
     ├── Binds dropdown toggle, keyboard shortcuts
     ├── Calls applyI18n() for initial translation
     ├── Exposes window.themeCtrl = { onChange: function(){} }
     └── Injects GA4 SDK → Baidu SDK → analytics.js
4. analytics.js loads async
     ├── Hooks window.themeCtrl.onChange for setting tracking
     ├── Binds tab/copy/link/declarative event delegates
     └── On window.load: reports initial page state
5. After </main>: <script src="shared-footer.js">
     └── Injects .rho-footer with GitHub/PyPI links
```

### Key Files

| File | Role |
|------|------|
| `assets/shared-header.js` | Control bar injection (165 lines): breadcrumbs, dropdowns, keyboard shortcuts, i18n, analytics SDKs |
| `assets/shared-footer.js` | Footer injection (20 lines): GitHub + PyPI |
| `assets/shared.css` | `.rho-footer` styles (29 lines) |
| `assets/analytics.js` | Dual-channel GA4 + Baidu event tracker (341 lines) |

### Header Variants

Controlled by `data-header-variant` attribute on the `<script>` tag:

- `ar` (activerecord/ subpages): `Theme Lab / Backends / ActiveRecord`
- `back` (backends/ subpages): `Index / Backends / ActiveRecord`

```html
<script src="../assets/shared-header.js" data-header-variant="ar"></script>
```

## Theme/Font/Language State Flow

### CSS Variable System

```
core.css :root (default = light/neutral)
  └── Each theme CSS overrides via [data-theme="x"] { --bg: #..., --accent: #... }
       └── Each font CSS overrides via html[data-font="y"] { --font-display: ... }
```

### How `setValue(type, value)` Propagates

```
setValue('theme', 'editorial')
  ├── html.setAttribute('data-theme', 'editorial')
  │     └── CSS [data-theme="editorial"] activates → all --* vars update
  ├── Dropdown UI: toggle .is-active, update .dropdown-value text
  └── window.themeCtrl.onChange({ type:'theme', value:'editorial', prev:'terminal' })
        └── analytics.js debounced report → GA4 + Baidu

setValue('font', 'serif')
  ├── html.setAttribute('data-font', 'serif')
  │     └── CSS html[data-font="serif"] activates → font vars override theme defaults
  └── (same as theme)

setValue('lang', 'ja-jp')
  ├── html.setAttribute('lang', 'ja-jp')
  ├── html.setAttribute('dir', 'ltr')   // 'rtl' for ar, fa-ir
  ├── localStorage.setItem('rhosocial-lang', 'ja-jp')
  ├── Re-init IntersectionObserver (for language-toggled content)
  ├── applyI18n() → all [data-i18n] elements updated
  └── (same onChange + analytics)
```

### Persistence / Detection Priority

| Variable | Priority Chain | Storage Key |
|----------|---------------|-------------|
| theme | URL param → localStorage → default (terminal) | `theme` |
| font | URL param → localStorage → FONT_THEME_MAP[theme] → default (tight) | `font` |
| lang | URL param → localStorage → navigator.languages → default (en-us) | `rhosocial-lang` |

**Note:** Shared-header.js (`subpages`) uses `rhosocial-lang`. ThemeController (`index.html`) uses `lang`. These are **different keys**. Language preference does not carry over between index.html and subpages.

## How to Add a New Section Component

1. Create CSS in `assets/sections/<name>.css`
   - Reference only `--r-*` variables (never hardcode colors)
   - Prefix class names to avoid collisions (e.g. `my-section-*`)
2. Create JS in `assets/sections/<name>.js` (if interactive)
   - Use IIFE to avoid scope pollution
   - Reference `window.I18N` for i18n keys if needed
3. In `index.html`:
   - Add `<link rel="stylesheet" href="assets/sections/<name>.css">` in `<head>`
   - Add `<script src="assets/sections/<name>.js">` before ThemeController init
4. Add the HTML markup in the appropriate location in `<body>`

## Analytics Event Tracking

### Automatic Events (no markup needed)

| Event | Trigger | GA4 Event Name | Debounce |
|-------|---------|---------------|----------|
| Theme/font/lang change | `window.themeCtrl.onChange` | `page_setting_change` | 800ms |
| Page initial state | `window.load` | `page_setting_init` | — |
| Tab switch | Click on `.tab[data-tab]` | `tab_switch` | 400ms |
| Copy | `copy` DOM event or click on `.copy-btn` / `[data-copy-target]` | `copy` | — |
| Outbound link | Click `<a href="https://...">` to external domain | `outbound_link` | — |
| Internal nav | Click `<a href="/...">` same-domain link | `internal_nav` | — |

### Declarative Events

Add `data-track-event` to any element:

```html
<button data-track-event="download_click"
        data-track-label="release-v1.0"
        data-track-once="true">Download</button>
```

### SDKs Loaded

- **Google Analytics 4**: `G-VPM29QVEST` (gtag.js)
- **Baidu Analytics**: `94120eca87dedf57cf0c46979991365b`