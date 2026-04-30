# Theme and Icon Guidelines

## Theme Classification

### Dark Themes (10)

| Theme | Identifier | CSS Variable --bg |
|-------|------------|-------------------|
| Terminal | `terminal` | #0A0E0A |
| Noir | `noir` | Dark |
| Synthwave | `synthwave` | Dark |
| Tokyo Night | `tokyo` | #1a1b2e |
| Matrix | `matrix` | Dark |
| Cyberpunk | `cyberpunk` | Dark |
| Chalkboard | `chalkboard` | #1e1e1e |
| Aurora | `aurora` | Dark |
| Blueprint | `blueprint` | #0E2340 |
| Steel | `steel` | Dark |

### Light Themes (16)

| Theme | Identifier | CSS Variable --bg |
|-------|------------|-------------------|
| Editorial | `editorial` | #F5F0E6 |
| Brutalist | `brutalist` | Light |
| Riso | `riso` | Light |
| Nordic | `nordic` | Light |
| Solarpunk | `solarpunk` | Light |
| Mocha | `mocha` | Light |
| Wireframe | `wireframe` | #ffffff |
| Anderson | `anderson` | Light |
| Memphis | `memphis` | Light |
| Frutiger | `frutiger` | Light |
| Newsprint | `newsprint` | #fafafa |
| Candy | `candy` | Light |
| Botanical | `botanical` | Light |
| Parchment | `parchment` | #f5f0e6 |
| Glassmorphism | `glassmorphism` | Light translucent |
| Sumi 墨 | `sumi` | #faf9f6 |

## Judgment Logic

```javascript
const DARK_THEMES = ['terminal','noir','synthwave','tokyo','matrix','cyberpunk','chalkboard','aurora','blueprint','steel'];

function isDarkTheme(themeName) {
  return DARK_THEMES.includes(themeName);
}
```

---

# Icon Usage Guidelines

## Recommended CDN

**jsDelivr + simple-icons v3** (stable, contains all brand icons)

```
https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/{icon-name}.svg
```

## Icon Names by Database

| Database | simple-icons Name | Brand Color |
|----------|------------------|-------------|
| SQLite | `sqlite` | #003B57 |
| PostgreSQL | `postgresql` | #336791 |
| MySQL | `mysql` | #4479A1 |
| MariaDB | `mariadb` | #003545 |
| SQL Server | `microsoftsqlserver` | #CC2927 |
| Oracle | `oracle` | #F80000 |

## Color Adaptation Solution

### Problem
Dark icons invisible on dark themes, light icons invisible on light themes.

### Solution: CSS filter

```html
<!-- HTML structure -->
<div class="db-icon" data-light="brand-color" data-dark="EEE">
  <img src="..." alt="SQLite">
</div>
```

```javascript
// JavaScript
const DARK_THEMES = ['terminal','noir','synthwave','tokyo','matrix','cyberpunk','chalkboard','aurora','blueprint','steel'];

function updateIconColors() {
  const theme = html.getAttribute('data-theme');
  const isDark = DARK_THEMES.includes(theme);
  document.querySelectorAll('.db-icon img').forEach(img => {
    img.style.filter = isDark ? 'brightness(0) invert(1)' : 'none';
  });
}

// Call on theme switch
function setValue(kind, value) {
  // ...
  if (kind === 'theme') updateIconColors();
}
```

### Alternative: cdn.simpleicons.org color parameters

```
https://cdn.simpleicons.org/{icon}/{light-color}/{dark-color}
```

**Limitations**:
- Not all icons supported (e.g., Microsoftsqlserver, Oracle may be unavailable in some versions)
- Based on OS `prefers-color-scheme`, not page `data-theme`

## Version Selection Note

- **v3**: Contains all icons (Oracle, Microsoft SQL Server, etc.)
- **v14+**: Removed some icons (e.g., Oracle)
- **Recommendation**: Always use v3 for compatibility