# Language Guidelines

## Overview

This project supports multilingual content. Language files follow the pattern `{locale}.js` (e.g., `zh-CN.js`, `en-US.js`).

## Language File Organization

### Per-Page i18n Structure

Each HTML page loads translations from its own i18n subdirectory. The structure uses `{page-name}-i18n/` directory:

```
backends/
├── index.html              # Main page
├── index-i18n/            # i18n directory (REQUIRED for this page)
│   ├── zh-CN.js           # Chinese (REQUIRED)
│   ├── en-US.js           # English (REQUIRED)
│   └── ...
├── sqlite.html
├── sqlite-i18n/
│   ├── zh-CN.js           # Chinese (REQUIRED)
│   ├── en-US.js           # English (REQUIRED)
│   └── ...
└── ...
```

**Loading Rule**:
1. When page `index.html` loads, it automatically tries to fetch `{page-name}-i18n/{locale}.js` (e.g., `index-i18n/zh-CN.js`)
2. If file exists and has complete translations, load it
3. If file does not exist or translations are incomplete, skip (do not add to language list)

### Required Languages (Per Page)

Each HTML page **must** include these two languages. Without them, the page cannot function properly:

| Language | Code | Native Name | Reason |
|----------|------|-------------|--------|
| Chinese | `zh-CN` | 中文 | Primary user base |
| English | `en-US` | English | International standard |

**Implementation Check**: When loading a page, verify that both `zh-CN.js` and `en-US.js` exist in the page's i18n directory.

## Language Code Convention

- Format: `{language}-{REGION}` (e.g., `zh-CN`, `en-US`)
- Language code: lowercase (e.g., `zh`, `en`)
- Region code: uppercase (e.g., `CN`, `US`)
- Use existing closest match rather than creating new codes

## Adding New Language to a Page

When adding a new language to a page, you must also update the fallback mechanism:

### Step 1: Add Language File

Create `{page-name}-i18n/{new-lang}.js` with complete translations.

### Step 2: Update Fallback Map

Add fallback entry in JavaScript:

```javascript
const LANGUAGE_FALLBACK = {
  // Existing mappings...
  'new-lang-variant': 'new-lang-standard',
};
```

### Step 3: Update Language Dropdown

Add to dropdown menu in HTML:

```html
<button class="dropdown-item" data-value="new-lang">
  <span class="dropdown-item-label">Language Name</span>
</button>
```

### Step 4: Update Fallback Documentation

Document the fallback rule in this file.

## Current Supported Languages (26)

### Existing i18n Files

```
assets/i18n/
├── ar.js          # Arabic (UN working language)
├── bn-bd.js       # Bengali (Bangladesh)
├── cs-cz.js       # Czech
├── de-de.js       # German
├── el-gr.js       # Greek
├── en-us.js       # English (UN working language)
├── es-es.js       # Spanish (UN working language)
├── fa-ir.js       # Persian (Farsi)
├── fr-fr.js       # French (UN working language)
├── hi-in.js       # Hindi
├── id-id.js       # Indonesian
├── it-it.js       # Italian
├── ja-jp.js       # Japanese
├── ko-kr.js       # Korean
├── nl-nl.js       # Dutch
├── pl-pl.js       # Polish
├── pt-pt.js       # Portuguese
├── ro-ro.js       # Romanian
├── ru-ru.js       # Russian (UN working language)
├── th-th.js       # Thai
├── tr-tr.js       # Turkish
├── uk-ua.js       # Ukrainian
├── vi-vn.js       # Vietnamese
└── zh-cn.js       # Chinese (UN working language)
```

## Language Categories

### 1. UN Working Languages (6)

| Language | Code | Native Name |
|----------|------|-------------|
| Chinese | `zh-CN` | 中文 |
| English | `en-US` | English |
| French | `fr-FR` | Français |
| Spanish | `es-ES` | Español |
| Russian | `ru-RU` | Русский |
| Arabic | `ar` | العربية |

### 2. Major Population Languages (Beyond UN)

| Language | Code | Native Name | Notes |
|----------|------|-------------|-------|
| Hindi | `hi-IN` | हिन्दी | 2nd most native speakers |
| Bengali | `bn-BD` | বাংলা | 7th most native speakers |
| Japanese | `ja-JP` | 日本語 | Major tech community |
| Korean | `ko-KR` | 한국어 | Major tech community |
| German | `de-DE` | Deutsch | EU largest economy |
| Portuguese | `pt-PT` | Português | Lusophone |
| Italian | `it-IT` | Italiano | G7 |
| Dutch | `nl-NL` | Nederlands | |
| Polish | `pl-PL` | Polski | |
| Turkish | `tr-TR` | Türkçe | |
| Vietnamese | `vi-VN` | Tiếng Việt | |
| Thai | `th-TH` | ไทย | |
| Indonesian | `id-ID` | Bahasa Indonesia | |
| Persian | `fa-IR` | فارسی | |
| Ukrainian | `uk-UA` |Українська | |
| Greek | `el-GR` | Ελληνικά | |
| Czech | `cs-CZ` | Čeština | |
| Romanian | `ro-RO` | Română | |

## Language Detection Priority

1. **URL parameter** (`?lang=zh-CN`) - Exact match only
2. **localStorage** (`rhosocial-lang`) - Exact match only
3. **Browser languages** (`navigator.languages`) - With nearest-match fallback
4. **Default**: `en-US`

### Complete Nearest-Match Fallback Rules

Based on currently supported 26 languages:

```javascript
const LANGUAGE_FALLBACK = {
  // === Chinese (zh-CN) ===
  'zh-hk': 'zh-cn', // Hong Kong → Simplified Chinese
  'zh-tw': 'zh-cn', // Taiwan → Simplified Chinese
  'zh-sg': 'zh-cn', // Singapore → Simplified Chinese
  'zh-mo': 'zh-cn', // Macau → Simplified Chinese
  'zh-my': 'zh-cn', // Malaysia → Simplified Chinese
  'zh': 'zh-cn',

  // === English (en-US) ===
  'en-gb': 'en-us', // British English → American English
  'en-au': 'en-us', // Australian English → American English
  'en-ca': 'en-us', // Canadian English → American English
  'en-nz': 'en-us', // New Zealand English → American English
  'en-ie': 'en-us', // Irish English → American English
  'en-in': 'en-us', // Indian English → American English
  'en': 'en-us',

  // === French (fr-FR) ===
  'fr-ca': 'fr-fr', // Canadian French → France French
  'fr-be': 'fr-fr', // Belgian French → France French
  'fr-ch': 'fr-fr', // Swiss French → France French
  'fr-lu': 'fr-fr', // Luxembourg French → France French
  'fr': 'fr-fr',

  // === Spanish (es-ES) ===
  'es-mx': 'es-es', // Mexican Spanish → Spain Spanish
  'es-ar': 'es-es', // Argentine Spanish → Spain Spanish
  'es-co': 'es-es', // Colombian Spanish → Spain Spanish
  'es-cl': 'es-es', // Chilean Spanish → Spain Spanish
  'es-pe': 'es-es', // Peruvian Spanish → Spain Spanish
  'es-ve': 'es-es', // Venezuelan Spanish → Spain Spanish
  'es-cr': 'es-es', // Costa Rican Spanish → Spain Spanish
  'es-do': 'es-es', // Dominican Spanish → Spain Spanish
  'es': 'es-es',

  // === Russian (ru-RU) ===
  'ru-by': 'ru-ru', // Belarusian Russian → Russian
  'ru-kz': 'ru-ru', // Kazakh Russian → Russian
  'ru': 'ru-ru',

  // === Portuguese (pt-PT) ===
  'pt-br': 'pt-pt', // Brazilian Portuguese → European Portuguese
  'pt-ao': 'pt-pt', // Angolan Portuguese → European Portuguese
  'pt-mo': 'pt-pt', // Macau Portuguese → European Portuguese
  'pt': 'pt-pt',

  // === German (de-DE) ===
  'de-at': 'de-de', // Austrian German → German
  'de-ch': 'de-de', // Swiss German → German
  'de-li': 'de-de', // Liechtenstein German → German
  'de': 'de-de',

  // === Italian (it-IT) ===
  'it-ch': 'it-it', // Swiss Italian → Italian
  'it-va': 'it-it', // Vatican Italian → Italian
  'it': 'it-it',

  // === Dutch (nl-NL) ===
  'nl-be': 'nl-nl', // Belgian Dutch → Dutch
  'nl': 'nl-nl',

  // === Polish (pl-PL) ===
  'pl': 'pl-pl',

  // === Turkish (tr-TR) ===
  'tr-cy': 'tr-tr', // Turkish (Cyprus) → Turkish

  // === Ukrainian (uk-UA) ===
  'uk': 'uk-ua',

  // === Greek (el-GR) ===
  'el': 'el-gr',

  // === Czech (cs-CZ) ===
  'cs': 'cs-cz',

  // === Romanian (ro-RO) ===
  'ro-md': 'ro-ro', // Moldovan Romanian → Romanian

  // === Arabic (ar) ===
  'ar-eg': 'ar', // Egyptian Arabic → Arabic
  'ar-sa': 'ar', // Saudi Arabic → Arabic
  'ar-ae': 'ar', // UAE Arabic → Arabic
  'ar-jo': 'ar', // Jordanian Arabic → Arabic
  'ar-lb': 'ar', // Lebanese Arabic → Arabic
  'ar-dz': 'ar', // Algerian Arabic → Arabic
  'ar-ma': 'ar', // Moroccan Arabic → Arabic

  // === Persian (fa-IR) ===
  'fa-af': 'fa-ir', // Afghan Persian → Iranian Persian
  'fa': 'fa-ir',

  // === Hindi (hi-IN) ===
  'hi': 'hi-in',

  // === Bengali (bn-BD) ===
  'bn-in': 'bn-bd', // Indian Bengali → Bangladeshi Bengali
  'bn': 'bn-bd',

  // === Japanese (ja-JP) ===
  'ja': 'ja-jp',

  // === Korean (ko-KR) ===
  'ko': 'ko-kr',

  // === Thai (th-TH) ===
  'th': 'th-th',

  // === Vietnamese (vi-VN) ===
  'vi': 'vi-vn',

  // === Indonesian (id-ID) ===
  'ms': 'id-id', // Malay → Indonesian (similar)
  'ms-bn': 'id-id', // Brunei Malay → Indonesian
  'id': 'id-id',
};

function findNearestMatch(lang) {
  const lower = lang.toLowerCase();
  // 1. Direct match
  if (SUPPORTED_LANGUAGES.includes(lower)) return lower;

  // 2. Check fallback map
  if (LANGUAGE_FALLBACK[lower]) return LANGUAGE_FALLBACK[lower];

  // 3. Try prefix match (e.g., "zh-HK" → "zh")
  const primary = lower.split('-')[0];
  const match = SUPPORTED_LANGUAGES.find(l => l.startsWith(primary + '-'));
  if (match) return match;

  return null;
}
```

### Fallback Summary Table

| Language Family | Detected Variants | Fallback To |
|----------------|-------------------|-------------|
| Chinese | zh-HK, zh-TW, zh-SG, zh-MO, zh-MY, zh | zh-CN |
| English | en-GB, en-AU, en-CA, en-NZ, en-IE, en-IN, en | en-US |
| French | fr-CA, fr-BE, fr-CH, fr-LU, fr | fr-FR |
| Spanish | es-MX, es-AR, es-CO, es-CL, es-PE, es-VE, es-CR, es-DO, es | es-ES |
| Russian | ru-BY, ru-KZ, ru | ru-RU |
| Portuguese | pt-BR, pt-AO, pt-MO, pt | pt-PT |
| German | de-AT, de-CH, de-LI, de | de-DE |
| Italian | it-CH, it-VA, it | it-IT |
| Dutch | nl-BE, nl | nl-NL |
| Romanian | ro-MD | ro-RO |
| Arabic | ar-EG, ar-SA, ar-AE, ar-JO, ar-LB, ar-DZ, ar-MA | ar |
| Persian | fa-AF | fa-IR |
| Malay | ms, ms-BN | id-ID |

**Rule**: If no match after all fallback attempts, skip to next browser language. If all fail, use `en-US`.

## Adding New Translations

### File Structure

Create `{page}/{locale}.js` file:

```javascript
(function(global) {
  var i18n = global.rhosocial?.i18n || {};
  i18n['zh-CN'] = i18n['zh-CN'] || {};
  Object.assign(i18n['zh-CN'], {
    'key': 'value',
  });
  if (global.rhosocial) global.rhosocial.i18n = i18n;
})(this);
```

### Usage in HTML

```html
<span data-i18n="key">Default text</span>
```

## RTL Languages

Arabic and Persian require RTL (Right-to-Left) support:

```javascript
if (lang === 'ar' || lang === 'fa-IR') {
  html.setAttribute('dir', 'rtl');
}
```