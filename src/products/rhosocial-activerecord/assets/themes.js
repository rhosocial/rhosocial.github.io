/**
 * Theme/Font/Lang Configuration
 * ═══════════════════════════════════════════════════════════════════════
 * Pure data - no DOM operations
 */
(function() {
  window.THEMES = [
    ['terminal',     'Terminal',     true ],
    ['editorial',   'Editorial',   false],
    ['brutalist',  'Brutalist',   false],
    ['aurora',     'Aurora',      false],
    ['synthwave',  'Synthwave',   true ],
    ['sumi',      'Sumi 墨',     true ],
    ['blueprint',  'Blueprint',  false],
    ['noir',      'Noir',       true ],
    ['riso',      'Riso',       false],
    ['nordic',    'Nordic',     false],
    ['solarpunk',  'Solarpunk',  false],
    ['mocha',     'Mocha',      false],
    ['wireframe', 'Wireframe',  false],
    ['anderson',  'Anderson',   false],
    ['tokyo',     'Tokyo Night', true ],
    ['memphis',   'Memphis',    false],
    ['chalkboard','Chalkboard',  true ],
    ['matrix',    'Matrix',     true ],
    ['steel',     'Steel',      false],
    ['frutiger',  'Frutiger',   false],
    ['newsprint', 'Newsprint',  false],
    ['candy',     'Candy',      false],
    ['botanical', 'Botanical',  false],
    ['cyberpunk', 'Cyberpunk', true ],
    ['parchment','Parchment',  false],
    ['glassmorphism','Glassmorphism',false]
  ];
  window.DEFAULT_THEME = 'terminal';

  window.FONTS = [
    ['auto',              '跟随主题'],
    ['tight',            'Tight Sans'],
    ['serif',            'Editorial Serif'],
    ['geometric',        'Geometric'],
    ['heavy',            'Heavy Display'],
    ['allmono',          'All Mono'],
    ['reader',           'Reader'],
    ['display-serif',     'Display Serif'],
    ['neo-future',       'Neo Future'],
    ['plex',            'IBM Plex'],
    ['playful',          'Playful (Caveat)'],
    ['classic-serif',    'Classic Serif (Garamond)'],
    ['pixel',           'Pixel (VT323)'],
    ['monumental',       'Monumental (Unbounded)'],
    ['slab',            'Slab (Roboto Slab)'],
    ['condensed',        'Condensed (Oswald)'],
    ['expressive',       'Expressive (Syne)'],
    ['deco',            'Deco (Abril Fatface)'],
    ['stencil',          'Stencil (Major Mono)'],
    ['rubik',           'Rubik'],
    ['bricolage',        'Bricolage'],
    ['gloock',          'Gloock'],
    ['crimson',          'Crimson'],
    ['dm',              'DM Sans / Mono'],
    ['outfit',           'Outfit'],
    ['literata',         'Literata']
  ];
  window.DEFAULT_FONT = 'tight';

  window.LANGS = [
    ['zh-cn',  '简体中文'],
    ['en-us',  'English'],
    ['ja-jp',  '日本語'],
    ['de-de',  'Deutsch'],
    ['fr-fr',  'Français'],
    ['ko-kr',  '한국어'],
    ['pt-pt',  'Português'],
    ['nl-nl',  'Nederlands'],
    ['it-it',  'Italiano'],
    ['ru-ru',  'Русский'],
    ['es-es',  'Español'],
    ['tr-tr',  'Türkçe'],
    ['el-gr',  'Ελληνικά'],
    ['ar',     'العربية'],
    ['hi-in',  'हिन्दी'],
    ['id-id',  'Bahasa Indonesia'],
    ['vi-vn',  'Tiếng Việt'],
    ['pl-pl',  'Polski'],
    ['th-th',  'ไทย'],
    ['uk-ua',  'Українська'],
    ['fa-ir',  'فارسی'],
    ['bn-bd',  'বাংলা'],
    ['ro-ro',  'Română'],
    ['cs-cz',  'Čeština']
  ];
  window.DEFAULT_LANG = 'zh-cn';

  window.LIGHT_THEMES = [
    'editorial', 'wireframe', 'newsprint', 'parchment',
    'botanical', 'nordic', 'riso', 'candy', 'solarpunk'
  ];

  window.FONT_THEME_MAP = {
    'terminal':     'tight',
    'editorial':  'serif',
    'brutalist':  'geometric',
    'aurora':     'heavy',
    'synthwave':  'allmono',
    'sumi':       'reader',
    'blueprint':  'display-serif',
    'noir':       'neo-future',
    'riso':       'plex',
    'nordic':     'playful',
    'solarpunk':   'classic-serif',
    'mocha':      'pixel',
    'wireframe':  'monumental',
    'anderson':   'slab',
    'tokyo':     'condensed',
    'memphis':   'expressive',
    'chalkboard': 'deco',
    'matrix':    'stencil',
    'steel':     'rubik',
    'frutiger':  'bricolage',
    'newsprint': 'gloock',
    'candy':     'crimson',
    'botanical': 'dm',
    'cyberpunk': 'outfit',
    'parchment': 'literata',
    'glassmorphism': 'auto'
  };

  window.RTL_LANGS = ['ar', 'fa-ir', 'he-il', 'yi'];
})();