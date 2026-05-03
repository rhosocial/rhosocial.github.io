/**
 * index/el-gr.js — 首页希腊语词典
 *
 * 依赖：assets/i18n/el-gr.js 必须先加载。
 * 本文件通过 Object.assign 向已有的 window.I18N['el-gr'] 追加首页特有 key。
 */
window.I18N = window.I18N || {};
window.I18N['el-gr'] = Object.assign(window.I18N['el-gr'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title:   'rhosocial ActiveRecord,<br>επανασχεδιασμένο για <em>Python</em>.',
    sub:     'Το <strong>rhosocial-activerecord</strong> ορίζει μοντέλα με τις εγγενείς σημειώσεις τύπων της Python και τα ερωτά με αλυσίδα <code>query().where(...).all()</code>. Σύγχρονο και ασύγχρονο από την πρώτη μέρα. Καμία εξωτερική εξάρτηση ORM — το SQLite είναι ενσωματωμένο, άλλες βάσεις δεδομένων είναι ξεχωριστά πακέτα, και μπορείτε να γράψετε το δικό σας backend σε λίγες δεκάδες γραμμές.',
    cta_secondary: 'Δείτε τα χαρακτηριστικά →'
  },

  features: {
    label: 'Γιατί · έξι βασικές υποσχέσεις',
    title: 'Γιατί <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Τύπος = πεδίο',         title: 'Από κατασκευής <em>τυπικά ασφαλές</em>',          desc: 'Ένα πεδίο είναι απλώς <code>name: str</code> — αποθήκευση, επικύρωση και συμπλήρωση IDE σε ένα.' },
    f2: { num: '02 / Ασύγχρονο πρώτης τάξης', title: 'Sync &amp; async, <em>ένα API</em>',              desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code>, ίδιος σχηματισμός.' },
    f3: { num: '03 / Αντικαταστάσιμα backends', title: 'Αντικαταστάσιμα <em>backends</em>',            desc: 'SQLite ενσωματωμένο· Postgres/MySQL/MSSQL/Oracle ως ξεχωριστά πακέτα· ή γράψτε το δικό σας.' },
    f4: { num: '04 / Ρητές σχέσεις',         title: '<em>Σχέσεις</em> δηλωμένες ρητά',                 desc: 'has_many / belongs_to δηλώνονται στο μοντέλο· οι ίδιες οι σχέσεις είναι <code>QuerySet</code>.' },
    f5: { num: '05 / Ατομικές συναλλαγές',   title: 'Συναλλαγές, <em>σωστά ένθετες</em>',              desc: 'Διαχειριστής πλαισίου + savepoints· οι εξαιρέσεις επαναφέρουν καθαρά.' },
    f6: { num: '06 / Pythonic',              title: 'Διαβάζεται σαν <em>αγγλικά</em>',                  desc: '<code>User.query().where(...).all()</code> — χωρίς DSL, απλώς Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Τύπος = πεδίο</em>, από 3.8 σε 3.12.',
    intro: 'Οι σημειώσεις τύπων Python είναι ο ορισμός του μοντέλου, χωρίς επιπλέον DSL. Επικύρωση Pydantic κατά την εκτέλεση, πλήρης εξαγωγή τύπων στο IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, ίδια σημασιολογία.',
    intro: 'Sync και async μοιράζονται τον ίδιο ορισμό μοντέλου. <code>for</code> → <code>async for</code>, τα υπόλοιπα αμετάβλητα.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backends αντικαταστάσιμα</em>, κατά παραγγελία.',
    intro: 'Το βασικό πακέτο εξαρτάται μόνο από Pydantic. SQLite ενσ��ματωμένο, άλλες βάσεις ως ξεχωριστά πακέτα, <code>configure()</code> μία γραμμή.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Σχέσεις ρητές</em>, ClassVar + descriptor.',
    intro: 'Χρησιμοποιήστε <code>ClassVar</code> για δήλωση πεδίων σχέσεων, για να αποφύγετε σάρωση Pydantic. Αυτόματη αντικατάσταση σε <code>relation()</code> κατά την εκτέλεση.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Ατομικές συναλλαγές</em>, ένθετοι savepoints.',
    intro: 'Ένθετες συναλλαγές δημιουργούν αυτόματα SAVEPOINT. Context manager αυτόματα commit/rollback, εξαιρέσεις επιστρέφουν αυτόματα στο τελευταίο savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Διαβάζεται σαν αγγλικά</em>, χωρίς DSL.',
    intro: 'Αλυσίδα κλήσεων, ομαλή ανάγνωση σαν αγγλικά. <code>.to_sql()</code> για να δείτε το SQL.'
  },

  practice: {
    label: 'Στην πράξη · πραγματικός κώδικας',
    title: 'Από το 3.8 στο 3.12, <em>βήμα-βήμα</em>.',
    intro: 'Αντιστοιχεί στα fixtures <code>models_py38.py</code> … <code>models_py312.py</code> του αποθετηρίου testsuite.',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> αντί για <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> αντί για <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: ο τύπος <code>Self</code> (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> και γενικοί τύποι PEP 695 <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Architecture · τρία επίπεδα',
    title: '<em>Expression → Dialect → Backend</em>, σαφείς αρμοδιότητες.',
    intro: 'Διαχωρισμός λογικής ερωτήματος, δημιουργίας SQL και εκτέλεσης βάσης δεδομένων. Πρωτόκολλα (<code>@runtime_checkable</code>) δηλώνουν δυνατότητες στα σύνορα — μη υποστηριζόμενα χαρακτηριστικά ρίχνουν <code>UnsupportedFeatureError</code>, όχι σιωπηλή αποτυχία.',
    col1: {
      num:   'Επίπεδο Expression',
      title: '<em>Συλλογή σημασιολογίας</em>, χωρίς λεπτομέρειες SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> αναθέτει δημιουργία SQL στη διάλεκτο στόχου. Ένα αντικείμενο expression επαναχρησιμοποιήσιμο σε όλες τις διαλέκτους, μηδέν hard-coded SQL.'
    },
    col2: {
      num:   'Επίπεδο Dialect (33 πρωτόκολλα)',
      title: '<em>33 πρωτόκολλα</em> δηλώνουν όρια δυνατοτήτων',
      desc:  'Μέθοδοι <code>format_*()</code> δημιουργούν SQL για τη βάση στόχο. Τύπος ανίχνευσης δυνατοτήτων: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Επίπεδο Backend (12 Mixins)',
      title: '<em>12 Mixins</em> MRO συνδυασμός',
      desc:  'Πρότυπο Template Method: μη-I/O λογική σε κοινό Mixin, I/O λογική ξεχωριστά. \\(n = 12\\) επίπεδο MRO συνδυασμός, μηδέν επανάληψη κώδικα.'
    }
  },

  arch_comp: {
    label: 'Αρχιτεκτονική συστατικών',
    title: 'ActiveRecord + Backend, <em>δύο ανεξάρτητα επίπεδα</em>.',
    intro: 'Το ActiveRecord είναι χρήστης του Backend· το Backend μπορεί να λειτουργήσει αυτόνομα. Sync και async είναι ζευγαρωμένα, δεν αντικαθίστανται.',

    ar_badge: 'Επίπεδο εφαρμογής',
    ar_title: 'ActiveRecord',
    ar_desc:  'Ορισμός μοντέλου, κατασκευή ερωτημάτων, διαχείριση σχέσεων, χειρισμός συναλλαγών. Περιλαμβάνει ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Ανεξάρτητο επίπεδο',
    be_title: 'Backend',
    be_desc:  'Επίπεδο I/O βάσης δεδομένων, μπορεί να χρησιμοποιηθεί χωρίς ActiveRecord. SQLite ενσωματωμένο, άλλες βάσεις ως πακέτα επέκτασης.',

    uses_label:      'χρησιμοποιεί',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'Sync ζεύγος — δεν αναμιγνύεται με async',
    pair_async_note:  'Async ζεύγος — δεν αναμιγνύεται με sync',

    node_sync_group:  'sync',
    node_async_group: 'async',

    node_ar_s:   'ActiveRecord',
    node_aq_s:   'ActiveQuery',
    node_so_s:   'SetOperation',
    node_cte_s:  'CTEQuery',
    node_ar_a:   'AsyncActiveRecord',
    node_aq_a:   'AsyncActiveQuery',
    node_so_a:   'AsyncSetOperation',
    node_cte_a:  'AsyncCTEQuery',
    node_sb_s:   'StorageBackend',
    node_sqlite_s:'SQLiteBackend',
    node_sqlite_a:'AsyncSQLiteBackend',
    node_sb_a:   'AsyncStorageBackend',
    node_ext:    'MySQL · PostgreSQL · SQL Server',
    node_ext_a:  'AsyncMySQL · AsyncPostgreSQL · …',

    tip_ar_s:   'Sync ActiveRecord. Κληρονομήστε αυτήν την κλάση για να ορίσετε μοντέλο, καλέστε sync μεθόδους όπως <code>.save()</code>, <code>.query()</code>.',
    tip_ar_a:   'Async ActiveRecord. Το API είναι καθρέφτης της sync έκδοσης, όλες οι μέθοδοι είναι <code>async/await</code>, για FastAPI / asyncio.',
    tip_aq_s:   'ActiveQuery (sync). Αλυσίδα δημιουργίας WHERE, ORDER BY, JOIN, pagination, τέλος <code>.all()</code> / <code>.one()</code> για εκτέλεση.',
    tip_aq_a:   'AsyncActiveQuery (async). Ίδια σημασιολογία με sync, όλες οι τελικές μέθοδοι είναι coroutines.',
    tip_so_s:   'SetOperation (sync). Συνδυασμός πολλαπλών ερωτημάτων με UNION / INTERSECT / EXCEPT, επιστρέφει ενοποιημένο σύνολο αποτελεσμάτων.',
    tip_so_a:   'AsyncSetOperation (async). Το ίδιο, ασύγχρονη εκτέλεση.',
    tip_cte_s:  'CTEQuery (sync). Δημιουργία CTE με WITH clause, υποστηρίζει αναδρομικά CTE.',
    tip_cte_a:  'AsyncCTEQuery (async). Το ίδιο, ασύγχρονη εκτέλεση.',
    tip_sb_s:   'StorageBackend (sync). Ορίζει ελάχιστο interface I/O: execute / fetch / transaction. Μπορεί να χρησιμοποιηθεί χωρίς ActiveRecord.',
    tip_sb_a:   'AsyncStorageBackend (async). Καθρέφτης της sync έκδοσης, όλες οι μέθοδοι I/O είναι coroutines.',
    tip_sqlite:  'SQLite backend, ενσωματωμένο στο βασικό πακέτο. Μηδενική διαμόρφωση, κατάλληλο για ανάπτυξη, τεστ και embedded.',
    tip_ext:    'Πακέτα επέκτασης backend (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver. Εγκατάσταση κατά παραγγελία, <code>configure()</code> μία γραμμή.',
    tip_ext_a:  'Πακέτα επέκτασης backend (async): αντιστοιχούν στα sync πακέτα, παρέχουν πλήρη async/await υποστ��ρι��η.'
  },

  qt: {
    label: 'Quick Taste · 30 δευτερόλεπτα',
    title: 'Από την εγκατάσταση στο <em>πρώτο ερώτημα</em>, έως 30 γραμμές.',
    btn_backends: 'Πλήρης τεκμηρίωση backends →',
    btn_ar:       'Λεπτομέρειες ActiveRecord →',
    btn_practices:'Πρακτικά σενάρια →'
  },

  compare: {
    label: 'Σύγκριση',
    title: 'Σύγκριση με άλλα <em>Python ORM</em>.',
    col_feature: 'Χαρακτηριστικό',
    row1:  'Μοτίβο σχεδίασης',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend αυτόνομα χρησιμοποιήσιμο',
    row3:  'Χωρίς έννοια session',
    row4:  'Συνεπές sync / async API',
    row5:  'Εγγενής ενσωμάτωση Pydantic',
    row6:  'Επικύρωση δεδομένων κατά την εκτέλεση',
    row7:  'Πλήρης εκφραστικότητα SQL',
    row8:  'Δήλωση δυνατοτήτων',
    row9:  'Διαφάνεια SQL <code>.to_sql()</code>',
    row10: 'Χωρίς υποχρεωτικό εργαλείο μετεγκατάστασης',
    row11: 'Ελάχιστε�� εξαρτήσεις',
    row12: 'Ρητός ορισμός σχέσεων'
  },

  gallery: {
    label: 'Γκαλερί συστατικών · πρωτογενή',
    title: 'Πώς κάθε θέμα χειρίζεται τα <em>πρωτογενή UI</em>.',
    c_buttons: 'Κουμπιά', c_btngroup: 'Ομάδα κουμπιών', c_form: 'Στοιχεία φόρμας',
    c_radio: 'Ομάδα radio', c_multi: 'Λίστα πολλαπλής επιλογής', c_dropdown: 'Αναπτυσσόμενη λίστα',
    c_alerts: 'Ειδοποιήσεις', c_badges: 'Σήματα', c_progress: 'Πρόοδος',
    c_grid: 'Επίδειξη πλέγματος (12 στήλες)', c_rtl: 'Προεπισκόπηση RTL', c_table: 'Ριγωτός πίνακας',
    form_email: 'Διεύθυνση email', form_note: 'Σημειώσεις',
    form_preload: 'Προφόρτωση', form_async: 'Async',
    radio_sync: 'Sync (σύγχρονη λειτουργία)', radio_async: 'Async (ασύγχρονη λειτουργία)', radio_both: 'Και τα δύο (διπλή στοίβα, κοινά μοντέλα)',
    alert_info:    '<b>Συμβουλή.</b> Το backend SQLite συνοδεύει το βασικό πακέτο.',
    alert_success: '<b>Έτοιμο.</b> Η <code>User.configure(...)</code> κλήθηκε.',
    alert_warn:    '<b>Προσοχή.</b> Για window functions απαιτείται SQLite ≥ 3.25.',
    prog_coverage: 'Κάλυψη τεστ', prog_backend: 'Ολοκλήρωση backend', prog_locale: 'Τοπικοποίηση τεκμηρίωσης',
    backend_note:  'Το ίδιο συστατικό με την επάνω μπάρα ελέγχου.',
    multi1_t: 'PostgreSQL', multi1_d: 'Κύρια παραγωγή',
    multi2_t: 'MySQL',      multi2_d: 'Παλαιές υπηρεσίες',
    multi3_t: 'SQLite',     multi3_d: 'Τεστ &amp; πρωτότυπα'
  },

  album: {
    label: 'Γκαλερί · βιβλιοθήκη',
    title: 'Μάθετε από <em>παραδείγματα</em>.',
    a1: 'Το πρώτο σας μοντέλο', a2: 'Async στο FastAPI', a3: 'has_many σε βάθος',
    a4: 'Γράψτε ένα backend', a5: 'Αυτόματη ανίχνευση N+1', a6: 'Ένθετες συναλλαγές &amp; savepoints'
  },

  voices: {
    label: 'Φωνές · μαρτυρίες',
    title: 'Τι <em>λένε</em>.',
    q1:      'Χάρη στο rhosocial-activerecord δεν παλεύω πια με ORM. Οι σημειώσεις τύπων είναι το μοντέλο — ακριβώς σωστό.',
    q1_role: 'Backend Engineer · Κιότο',
    q2:      'Sync και async μοιράζονται ένα API, το refactoring είναι σχεδόν δωρεάν. Η μετάβαση του FastAPI μου έγινε σε δύο γραμμές.',
    q2_role: 'Staff Engineer · Βερολίνο',
    q3:      'Έγραψα ένα backend DuckDB. Διάβασα το Backend ABC στο μεσημέρι, το απόγευμα ήταν στην παραγωγή. Αυτό είναι επεκτασιμότητα.',
    q3_role: 'Data Platform · Σιγκαπούρη',
    q4:      'Κάθε βήμα της αλυσίδας έχει σωστά εξαγόμενο τύπο στο IDE. Το Pydantic, χρησιμοποιημένο σωστά.',
    q4_role: 'Senior Python · Σάο Πάολο',
    q5:      'Μηδέν εξαρτήσεις runtime είναι το κλειδί. Σε embedded δεν ανησυχούμε πια για το μέγεθος του SQLAlchemy.',
    q5_role: 'Μηχανικός IoT · Σενζέν'
  },

  auth: {
    label: 'Auth · επίδειξη σύνδεσης',
    title: 'Συνδεθείτε στο <em>rhosocial</em>.',
    welcome: 'Καλώς ήρθατε ξανά', sub: 'Συνεχίστε με τον λογαριασμό σας rhosocial.',
    email: 'Email', password: 'Κωδικός', remember: 'Να με θυμάσαι', forgot: 'Ξεχάσατε τον κωδικό;',
    login: 'Σύνδεση', or: 'Ή', github: 'Συνέχεια με GitHub', twitter: 'Συνέχεια με Twitter',
    no_account: 'Δεν έχετε λογαριασμό;', register: 'Εγγραφή'
  },

  stats: {
    label: 'Σε αριθμούς',
    title: 'Μερικοί <em>αριθμοί</em>.',
    s1: 'Διαθέσιμοι διάλεκτοι DB',
    s2: 'Κάλυψη σημειώσεων τύπων',
    s3: 'Ελάχιστη Python',
    s4: 'Εξωτερικές εξαρτήσεις ORM'
  },

  install: {
    label: 'Ξεκινήστε',
    title: 'Εγκατάσταση σε μία γραμμή, <em>δέκα λεπτά</em> για το πρώτο ερώτημα.',
    sub: 'Δημοσιεύτηκε στο PyPI. Το backend SQLite συνοδεύει το βασικό πακέτο· τα υπόλοιπα εγκαθίστανται κατά απαίτηση.',
    docs: 'Διαβάστε την τεκμηρίωση →'
  },

  split_sync: {
    label: 'Δίπλα-δίπλα',
    title: 'Sync = async, <em>ίδια σημασιολογία</em>.',
    intro: 'Αντικαταστήστε το <code>for</code> με <code>async for</code> και τελειώσατε. Η εξαγωγή τύπων διατρέχει όλη την αλυσίδα.',
    cta: 'Διαβάστε τον οδηγό async →'
  },

  split_backend: {
    label: 'Ελευθερία backend',
    title: 'Γράψτε το δικό σας <em>backend</em> σε ένα απόγευμα.',
    intro: 'Κληρονομήστε το <code>Backend</code>, υλοποιήστε μερικά hooks διαλέκτου. DuckDB και libSQL έχουν ήδη δοκιμαστεί.',
    cta: 'Οδηγός ανάπτυξης backend →'
  },

  pricing: {
    label: 'Πλάνα · ενδεικτικά',
    title: 'Επιλέξτε το <em>επίπεδό σας</em>.',
    intro: '(Δείγμα καρτών — το ίδιο το έργο OSS είναι δωρεάν για πάντα. Εμφανίζεται για προεπισκόπηση των pricing σε κάθε θέμα.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: 'Μεμονωμένοι προγραμματιστές και συνεισφέροντες OSS. Πλήρη χαρακτηριστικά, χωρίς όρια.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'Πλήρες sync &amp; async API', f3: 'Υποστήριξη στο φόρουμ της κοινότητας',
      f4: 'Πίνακας συνεργασίας ομάδας', f5: 'Εγγύηση απόκρισης SLA', cta: 'Ξεκινήστε'
    },
    c2: {
      tier: 'Team',       desc: 'Αναπτυσσόμενες ομάδες. Εταιρικά backends και έλεγχος.',
      f1: 'Όλα του Community', f2: 'Backends MSSQL / Oracle', f3: 'Αρχείο ελέγχου &amp; διαχωρισμός ανάγνωσης/εγγραφής',
      f4: 'Ιδιωτικό Discord με προτεραιότητα', f5: 'SSO / SAML', cta: 'Δοκιμή 14 ημερών'
    },
    c3: {
      tier: 'Enterprise', desc: 'Μεγάλοι οργανισμοί. On-prem, συμμόρφωση, εκπαίδευση.', price_label: 'Επικοινωνία',
      f1: 'Όλα του Team', f2: 'Προσαρμοσμένα backends (DuckDB / libSQL / εσωτερικά)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA 4 ωρών', f5: 'Επιτόπια εκπαίδευση και αφιερωμένες λύσεις', cta: 'Επικοινωνία πωλήσεων'
    }
  }

});