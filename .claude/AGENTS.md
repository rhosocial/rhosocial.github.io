# rhosocial.github.io - AI Agent Instructions

This document provides instructions for AI agents working on the **rhosocial.github.io** project.

## Project Overview

**rhosocial.github.io** is the official documentation website for rhosocial projects, built as a static site using GitHub Pages. It features:

- Multi-theme support (25 themes)
- Multi-language support (i18n)
- Static HTML/CSS/JS pages
- No build tools required (pure static files)

## Directory Structure

```
rhosocial.github.io/
├── .claude/                    # Agent working directory
│   ├── AGENTS.md               # This file
│   ├── .gitignore
│   ├── rules/                  # Project-specific rules
│   │   └── theme-icon.md       # Theme and icon guidelines
│   ├── plan/                   # Project plans (not tracked in git)
│   └── tmp/                    # Temporary files (not tracked in git)
├── .github/workflows/          # GitHub Actions
├── src/                       # Deployed content (maps to site root)
│   └── products/
│       └── rhosocial-activerecord/
│           ├── index.html      # Homepage
│           ├── backends/       # Backend documentation
│           ├── activerecord/   # ActiveRecord API docs
│           └── assets/         # CSS, fonts, i18n
├── tests/                     # Test files (not deployed)
├── PROPOSAL.md                # Project expansion plan
└── .gitignore
```

## Deployment Mapping

**src/ content → site root**

- `src/index.html` → `https://rhosocial.github.io/index.html`
- `src/products/rhosocial-activerecord/backends/index.html` → `https://rhosocial.github.io/products/rhosocial-activerecord/backends/index.html`

All internal links within `src/` should use relative paths to ensure portability.

## Project Plans

All project plans should be written in `.claude/plan/` directory. Use descriptive filenames:

```
.claude/plan/new-feature-name.md
```

Example plan structure:
```markdown
# Feature: [Feature Name]

## Overview
Brief description of the feature.

## Goals
- Goal 1
- Goal 2

## Implementation Steps
1. Step 1
2. Step 2

## Notes
Additional considerations.
```

## Rules

See `.claude/rules/` for project-specific guidelines:

- **`theme-icon.md`** - Theme dark/light classification and icon usage guidelines

## Theme System

### Theme List (26 themes)

**Dark Themes** (10): terminal, noir, synthwave, tokyo, matrix, cyberpunk, chalkboard, aurora, blueprint, steel

**Light Themes** (16): editorial, brutalist, riso, nordic, solarpunk, mocha, wireframe, anderson, memphis, frutiger, newsprint, candy, botanical, parchment, glassmorphism, sumi

### Theme Switching

- Theme is controlled by `data-theme` attribute on `<html>` element
- Theme is switched via dropdown in the control bar
- Keyboard shortcut: `Ctrl + Q/W/E/R...` (based on QWERTY layout)

## Icon Guidelines

Use **jsDelivr + simple-icons v3**:

```
https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/{icon-name}.svg
```

For icon color adaptation, see `.claude/rules/theme-icon.md`.

## Internationalization (i18n)

Language files stored in `{page}/{locale}.js` format (e.g., `zh-CN.js`, `en-US.js`).

Language detection priority:
1. URL query parameter (`?lang=zh-CN`)
2. localStorage (`rhosocial-lang`)
3. Browser language (`navigator.languages`)
4. Default: `en-US`

## Deployment

Push to `master` branch triggers GitHub Actions workflow. Site available at `https://rhosocial.github.io/`

## Working Rules

1. **All user-facing replies should be written in Chinese** (unless user explicitly requests English)
2. Keep changes confined to this project
3. Do not create virtual environment (static site, no Python dependencies)
4. Follow existing code patterns when editing HTML/JS/CSS
5. Use semantic HTML and accessible patterns

## Quick Reference

| Attribute | Usage |
|-----------|-------|
| Theme | `data-theme="theme-name"` |
| Font | `data-font="font-name"` |
| Language | `lang="zh-CN"` |
| Theme toggle | `setValue('theme', 'theme-name')` |
| Font toggle | `setValue('font', 'font-name')` |
| Language toggle | `setValue('lang', 'locale')` |

## Knowledge Base

- `PROPOSAL.md` - Project expansion plan
- `.claude/rules/theme-icon.md` - Theme and icon rules
- `assets/themes/*.css` - Theme definitions
- `assets/core.css` - Core styles