/**
 * index/fr-fr.js — 首页法语词典
 *
 * 依赖：assets/i18n/fr-fr.js 必须先加载。
 * 本文件通过 Object.assign 向已有的 window.I18N['fr-fr'] 追加首页特有 key。
 */
window.I18N = window.I18N || {};
window.I18N['fr-fr'] = Object.assign(window.I18N['fr-fr'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title:   'rhosocial ActiveRecord,<br>repensé pour <em>Python</em>.',
    sub:     '<strong>rhosocial-activerecord</strong> définit les modèles avec les annotations de type natives de Python et les interroge via un enchaînement <code>query().where(...).all()</code>. Synchrone et asynchrone dès le départ. Aucune dépendance ORM externe — SQLite est intégré, les autres bases de données sont des paquets séparés, et vous pouvez écrire votre propre backend en quelques dizaines de lignes.',
    cta_secondary: 'Voir les fonctionnalités →'
  },

  features: {
    label: 'Pourquoi · six promesses',
    title: 'Pourquoi <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Type = champ',           title: '<em>Typé</em> par construction',                 desc: 'Un champ, c\'est <code>name: str</code> — stockage, validation et auto-complétion IDE réunis.' },
    f2: { num: '02 / Async en premier',       title: 'Sync &amp; async, <em>une seule API</em>',       desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code>, forme identique.' },
    f3: { num: '03 / Backends enfichables',   title: 'Backends <em>modulaires</em>',                   desc: 'SQLite inclus ; Postgres/MySQL/MSSQL/Oracle en paquets séparés ; ou le vôtre.' },
    f4: { num: '04 / Relations explicites',   title: 'Des <em>relations</em> explicites',              desc: 'has_many / belongs_to déclarés sur le modèle ; les relations sont elles-mêmes des <code>QuerySet</code>.' },
    f5: { num: '05 / Transactions atomiques', title: 'Transactions <em>correctement imbriquées</em>',  desc: 'Gestionnaire de contexte + savepoints ; rollback propre sur exception.' },
    f6: { num: '06 / Pythonique',             title: 'Se lit comme de l\'<em>anglais</em>',            desc: '<code>User.query().where(...).all()</code> — pas de DSL, juste Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Type = champ</em>, de 3.8 à 3.12.',
    intro: 'Les annotations de type Python sont la définition du modèle, pas de DSL supplémentaire. Validation Pydantic à l\'exécution, inférence complète des types dans l\'IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, même sémantique.',
    intro: 'Sync et async partagent la même définition de modèle. <code>for</code> → <code>async for</code>, le reste inchangé.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backends modulaires</em>, selon les besoins.',
    intro: 'Le paquet principal ne dépend que de Pydantic. SQLite intégré, autres bases de données en paquets séparés, <code>configure()</code> une ligne.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Relations explicites</em>, ClassVar + descripteur.',
    intro: 'Utilisez <code>ClassVar</code> pour déclarer les champs de relation, évitant le scan de Pydantic. Remplacement automatique en <code>relation()</code> à l\'exécution.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Transactions atomiques</em>, savepoints imbriqués.',
    intro: 'Les transactions imbriquées créent automatiquement des SAVEPOINT. Le gestionnaire de contexte fait automatiquement commit/rollback, les exceptions reviennent automatiquement au dernier savepoint.'
  },
  f6: {
    label: '06 / Pythonique',
    title: '<em>Se lit comme anglais</em>, sans DSL.',
    intro: 'Appels enchaînés, lecture fluide comme anglais. <code>.to_sql()</code> pour voir le SQL généré.'
  },

  practice: {
    label: 'En pratique · code réel',
    title: 'De 3.8 à 3.12, <em>une étape à la fois</em>.',
    intro: 'Correspond aux fixtures <code>models_py38.py</code> … <code>models_py312.py</code> du dépôt testsuite.',
    p1: '<b>3.8 → 3.9</b> : <code>list[str]</code> remplace <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b> : <code>int | None</code> remplace <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b> : le type <code>Self</code> (PEP 673).',
    p4: '<b>3.11 → 3.12</b> : <code>@override</code> et les génériques PEP 695 <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Architecture · trois couches',
    title: '<em>Expression → Dialect → Backend</em>, responsabilités claires.',
    intro: 'Séparation entre logique de requête, génération SQL et exécution de base de données. Les protocoles (<code>@runtime_checkable</code>) déclarent les capacités aux frontières — les fonctionnalités non supportées lancent <code>UnsupportedFeatureError</code>, pas d\'échec silencieux.',
    col1: {
      num:   'Couche Expression',
      title: '<em>Collecte sémantique</em>, sans détails SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> délègue la génération SQL au dialecte cible. Un objet expression réutilisable à travers tous les dialectes, zéro SQL codé en dur.'
    },
    col2: {
      num:   'Couche Dialect (33 protocoles)',
      title: '<em>33 protocoles</em> déclarent les limites de capacités',
      desc:  'Les méthodes <code>format_*()</code> génèrent SQL pour la base de données cible. Formule de détection de capacités: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Couche Backend (12 Mixins)',
      title: '<em>12 Mixins</em> combinaison MRO',
      desc:  'Pattern Template Method: logique non-I/O dans Mixin partagé, logique I/O séparément. \\(n = 12\\) couche MRO combinaison, zéro répétition de code.'
    }
  },

  arch_comp: {
    label: 'Architecture de composants',
    title: 'ActiveRecord + Backend, <em>deux couches indépendantes</em>.',
    intro: 'ActiveRecord est l\'utilisateur de Backend ; Backend peut fonctionner de manière indépendante. Sync et async sont appariés, non interchangeables.',

    ar_badge: 'Couche aplicación',
    ar_title: 'ActiveRecord',
    ar_desc:  'Définition de modèle, construction de requêtes, gestion des relations, gestion des transactions. Contient ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Couche indépendante',
    be_title: 'Backend',
    be_desc:  'Couche I/O de base de données, exploitable sans ActiveRecord. SQLite intégré, autres bases de données en paquets d\'extension.',

    uses_label:      'utilise',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'Pair sync — pas mélanger avec async',
    pair_async_note:  'Pair async — pas mélanger avec sync',

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

    tip_ar_s:   'ActiveRecord sync. Héitez de cette classe pour définir un modèle, appelez les méthodes sync comme <code>.save()</code>, <code>.query()</code>.',
    tip_ar_a:   'Async ActiveRecord. API est le miroir de la version sync, toutes les méthodes sont <code>async/await</code>, pour FastAPI / asyncio.',
    tip_aq_s:   'ActiveQuery (sync). Construction en chaîne de WHERE, ORDER BY, JOIN, pagination, à la fin <code>.all()</code> / <code>.one()</code> pour exécuter.',
    tip_aq_a:   'AsyncActiveQuery (async). Même sémantique que sync, toutes les méthodes terminals sont des coroutines.',
    tip_so_s:   'SetOperation (sync). Combine plusieurs requêtes avec UNION / INTERSECT / EXCEPT, retourne un ensemble de résultats unifié.',
    tip_so_a:   'AsyncSetOperation (async). Même chose, exécution asynchrone.',
    tip_cte_s:  'CTEQuery (sync). Construit CTE avec clause WITH, supporte CTE récursif.',
    tip_cte_a:  'AsyncCTEQuery (async). Même chose, exécution asynchrone.',
    tip_sb_s:   'StorageBackend (sync). Définit l\'interface I/O minimale: execute / fetch / transaction. Utilisable sans ActiveRecord.',
    tip_sb_a:   'AsyncStorageBackend (async). Miroir de la version sync, toutes les méthodes I/O sont des coroutines.',
    tip_sqlite:  'Backend SQLite, inclus dans le paquet principal. Configuration zéro, adapté pour développement, tests et embarqué.',
    tip_ext:    'Paquets backend d\'extension (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver. Installer selon besoin, <code>configure()</code> une ligne.',
    tip_ext_a:  'Paquets backend d\'extension (async): correspondent aux paquets sync, fournissent support async/await complet.'
  },

  qt: {
    label: 'Quick Taste · 30 secondes',
    title: 'De l\'installation à <em>première requête</em>, jusqu\'à 30 lignes.',
    btn_backends: 'Documentation complète des backends →',
    btn_ar:       'Détails ActiveRecord →',
    btn_practices:'Scénarios pratiques →'
  },

  compare: {
    label: 'Comparer',
    title: 'Comparé aux autres <em>Python ORM</em>.',
    col_feature: 'Fonctionnalité',
    row1:  'Motif de conception',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend utilisable indépendamment',
    row3:  'Pas de concept de session',
    row4:  'API sync / async cohérente',
    row5:  'Intégration Pydantic native',
    row6:  'Validation des données à l\'exécution',
    row7:  'Expressivité SQL complète',
    row8:  'Déclaration de capacités',
    row9:  'Transparence SQL <code>.to_sql()</code>',
    row10: 'Pas d\'outil de migration obligatoire',
    row11: 'Dépendances minimales',
    row12: 'Définition de relations explicite'
  },

  gallery: {
    label: 'Galerie de composants · primitives',
    title: 'Comment chaque thème traite les <em>primitives UI</em>.',
    c_buttons: 'Boutons', c_btngroup: 'Groupe de boutons', c_form: 'Contrôles de formulaire',
    c_radio: 'Groupe radio', c_multi: 'Liste à sélection multiple', c_dropdown: 'Liste déroulante',
    c_alerts: 'Alertes', c_badges: 'Badges', c_progress: 'Progression',
    c_grid: 'Démo grille (12 col)', c_rtl: 'Aperçu RTL', c_table: 'Tableau rayé',
    form_email: 'Adresse email', form_note: 'Notes',
    form_preload: 'Précharger', form_async: 'Async',
    radio_sync: 'Sync (mode synchrone)', radio_async: 'Async (mode asynchrone)', radio_both: 'Les deux (double pile, modèles partagés)',
    alert_info:    '<b>Conseil.</b> Le backend SQLite est inclus dans le paquet principal.',
    alert_success: '<b>Prêt.</b> <code>User.configure(...)</code> a été appelé.',
    alert_warn:    '<b>Attention.</b> SQLite ≥ 3.25 requis pour les fonctions de fenêtre.',
    prog_coverage: 'Couverture de tests', prog_backend: 'Avancement backend', prog_locale: 'Localisation documentation',
    backend_note:  'Même composant que la barre de contrôle supérieure.',
    multi1_t: 'PostgreSQL', multi1_d: 'Production principale',
    multi2_t: 'MySQL',      multi2_d: 'Services hérités',
    multi3_t: 'SQLite',     multi3_d: 'Tests et prototypes'
  },

  album: {
    label: 'Galerie · bibliothèque',
    title: 'Apprendre des <em>exemples</em>.',
    a1: 'Votre premier modèle', a2: 'Async dans FastAPI', a3: 'has_many en profondeur',
    a4: 'Écrire un backend', a5: 'Détection automatique N+1', a6: 'Transactions imbriquées et savepoints'
  },

  voices: {
    label: 'Voix · témoignages',
    title: 'Ce qu\'ils <em>disent</em>.',
    q1:      'Avec rhosocial-activerecord j\'ai enfin arrêté de me battre avec un ORM. Les annotations de type sont le modèle — exactement正确的.',
    q1_role: 'Backend Engineer · Kyoto',
    q2:      'Sync et async partagent une API, le refactor coûte presque rien. Ma migration FastAPI était de deux lignes.',
    q2_role: 'Staff Engineer · Berlin',
    q3:      'J\'ai écrit un backend DuckDB. J\'ai lu le Backend ABC pendant le déjeuner, l\'après-midi il était en prod. Ça c\'est l\'extensibilité.',
    q3_role: 'Data Platform · Singapour',
    q4:      'Chaque étape de la chaîne a le bon type inféré dans mon IDE. Pydantic, utilisé où il faut.',
    q4_role: 'Senior Python · São Paulo',
    q5:      'Zéro dépendance runtime est la clé. Dans les déploiements embarqués on ne s\'inquiète plus de la taille de SQLAlchemy.',
    q5_role: 'Ingénieur IoT · Shenzhen'
  },

  auth: {
    label: 'Auth · demo de connexion',
    title: 'Se connecter à <em>rhosocial</em>.',
    welcome: 'Bon retour', sub: 'Continuez avec votre compte rhosocial.',
    email: 'Email', password: 'Mot de passe', remember: 'Se souvenir', forgot: 'Mot de passe oublié ?',
    login: 'Se connecter', or: 'OU', github: 'Continuer avec GitHub', twitter: 'Continuer avec Twitter',
    no_account: 'Pas de compte ?', register: 'S\'inscrire'
  },

  stats: {
    label: 'En chiffres',
    title: 'Algunos <em>números</em>.',
    s1: 'Dialectes BD disponibles',
    s2: 'Couverture des annotations de type',
    s3: 'Python minimum',
    s4: 'Dépendances ORM externes'
  },

  install: {
    label: 'Commencer',
    title: 'Installer en une ligne, <em>dix minutes</em> pour la première requête.',
    sub: 'Publié sur PyPI. Le backend SQLite est dans le paquet principal ; les autres s\'installent à la demande.',
    docs: 'Lire la documentation →'
  },

  split_sync: {
    label: 'Côte à côte',
    title: 'Sync = async, <em>même sémantique</em>.',
    intro: 'Remplacez <code>for</code> par <code>async for</code> et c\'est tout. L\'inférence de types parcourt toute la chaîne.',
    cta: 'Lire le guide async →'
  },

  split_backend: {
    label: 'Liberté de backend',
    title: 'Votre propre <em>backend</em>, en quelques dizaines de lignes.',
    intro: 'Héritez de <code>Backend</code>, implémentez quelques crochets de dialecte. DuckDB et libSQL ont déjà fait leurs preuves.',
    cta: 'Guide de dev backend →'
  },

  pricing: {
    label: 'Plans · illustratif',
    title: 'Choisissez votre <em>niveau</em>.',
    intro: '(Cartes exemples — le projet OSS reste gratuit à vie. Ici pour prévisualiser les cartes de pricing sur chaque thème.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: 'Développeurs solo et contributeurs OSS. Fonctionnalités complètes, sans limite.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'API sync & async complète', f3: 'Support via forum communautaire',
      f4: 'Tableau de bord d\'équipe', f5: 'Garantie SLA de réponse', cta: 'Commencer'
    },
    c2: {
      tier: 'Team',       desc: 'Équipes en croissance. Backends entreprise plus audit.',
      f1: 'Tout Community', f2: 'Backends MSSQL / Oracle', f3: 'Journal d\'audit & lecture/écriture séparées',
      f4: 'Support Discord privée prioritaire', f5: 'SSO / SAML', cta: 'Essai 14 jours'
    },
    c3: {
      tier: 'Enterprise', desc: 'Grandes organisations. On-prem, conformité, formation.', price_label: 'Nous contacter',
      f1: 'Tout Team', f2: 'Backends sur mesure (DuckDB / libSQL / interne)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA 4 heures', f5: 'Formations sur site et solutions dédiées', cta: 'Contacter les ventes'
    }
  }

});