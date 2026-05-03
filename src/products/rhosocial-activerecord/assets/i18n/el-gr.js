/**
 * assets/i18n/el-gr.js — Global Greek dictionary
 *
 * Contains UI text shared across all pages (meta, control, brand, footer).
 * Load order: must be loaded BEFORE page-level dictionaries (e.g., index/el-gr.js).
 * Page-level dictionaries extend this via Object.assign, adding page-specific keys.
 */
window.I18N = window.I18N || {};
window.I18N['el-gr'] = {
  /** Language meta */
  meta: { name: 'Ελληνικά' },

  /** Brand / Logo */
  brand: {
    name:     'rhosocial ActiveRecord',
    subtitle: 'Theme Lab'
  },

  /** Control bar (theme / font / language dropdowns) */
  control: {
    theme_label: 'Θέμα',
    font_label:  'Γραμματοσειρά',
    lang_label:  'Γλώσσα',
    font_auto:  'Αυτόματη (προεπιλογή θέματος)'
  },

  /** Footer */
  footer: {
    license: 'Apache 2.0',
    github:  'GitHub',
    hotkeys: '26 θέματα · Ctrl+γράμμα · Shift+γράμμα · Alt+γράμμα'
  },

  /** Cross-page common buttons / labels */
  common: {
    detail:   'Δείτε τα χαρακτηριστικά →',
    back:     '← Επιστροφή',
    copy:     'Αντιγραφή',
    copied:   'Αντιγράφηκε!',
    loading:  'Φόρτωση…',
    error:    'Σφάλμα φόρτωσης',
    expand:   'Επέκταση',
    collapse: 'Σύμπτυξη',
    prev:     'Προηγούμενο',
    next:     'Επόμενο',
    close:    'Κλείσιμο'
  }
};