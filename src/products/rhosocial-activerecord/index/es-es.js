/**
 * index/es-es.js — 首页西班牙语词典
 *
 * 依赖：assets/i18n/es-es.js 必须先加载。
 * 本文件通过 Object.assign 向已有的 window.I18N['es-es'] 追加首页特有 key。
 */
window.I18N = window.I18N || {};
window.I18N['es-es'] = Object.assign(window.I18N['es-es'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title:   'rhosocial ActiveRecord,<br>rediseñado para <em>Python</em>.',
    sub:     '<strong>rhosocial-activerecord</strong> define modelos con anotaciones de tipo nativas de Python y los consulta con una cadena <code>query().where(...).all()</code>. Síncrono y asíncrono desde el primer día. Sin dependencias externas de ORM — SQLite viene integrado, otras bases de datos se distribuyen como paquetes separados, y puedes escribir tu propio backend en unas pocas decenas de líneas.',
    cta_secondary: 'Ver características →'
  },

  features: {
    label: 'Por qué · seis promesas fundamentales',
    title: 'Por qué <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Tipo = campo',             title: '<em>Tipo-seguro</em> por construcción',        desc: 'Un campo es simplemente <code>name: str</code> — almacenamiento, validación y autocompletado IDE en uno.' },
    f2: { num: '02 / Async de primera clase',   title: 'Sync y async, <em>una sola API</em>',           desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code>, con forma idéntica.' },
    f3: { num: '03 / Backends intercambiables', title: 'Backends <em>intercambiables</em>',             desc: 'SQLite integrado; Postgres/MySQL/MSSQL/Oracle como paquetes separados; o escribe el tuyo.' },
    f4: { num: '04 / Relaciones explícitas',    title: '<em>Relaciones</em> feitas explícitas',         desc: 'has_many / belongs_to declaradas en el modelo; las relaciones son <code>QuerySet</code>.' },
    f5: { num: '05 / Transacciones atómicas',   title: 'Transacciones <em>correctamente anidadas</em>', desc: 'Gestor de contexto + savepoints; las excepciones hacen rollback limpio.' },
    f6: { num: '06 / Pythonic',                 title: 'Se lee como <em>inglés</em>',                   desc: '<code>User.query().where(...).all()</code> — sin DSL, solo Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Tipo = campo</em>, de 3.8 a 3.12.',
    intro: 'Las anotaciones de tipo de Python son la definición del modelo, sin DSL adicional. Validación Pydantic en runtime, inferencia completa de tipos en el IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, misma semántica.',
    intro: 'Sync y async comparten la misma definición de modelo. <code>for</code> → <code>async for</code>, lo demás sin cambios.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backends intercambiables</em>, según necesidad.',
    intro: 'Paquete principal solo depende de Pydantic. SQLite integrado, otras bases de datos como paquetes separados, <code>configure()</code> una línea.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Relaciones explícitas</em>, ClassVar + descriptor.',
    intro: 'Usa <code>ClassVar</code> para declarar campos de relación, evitando escaneo de Pydantic. Reemplazo automático a <code>relation()</code> en runtime.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Transacciones atómicas</em>, savepoints anidados.',
    intro: 'Transacciones anidadas crean automáticamente SAVEPOINT. Context manager hace automáticamente commit/rollback, excepciones vuelven automáticamente al último savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Se lee como inglés</em>, sin DSL.',
    intro: 'Llamadas en cadena, lectura fluida como inglés. <code>.to_sql()</code> para ver el SQL generado.'
  },

  practice: {
    label: 'En la práctica · código real',
    title: 'De 3.8 a 3.12, <em>paso a paso</em>.',
    intro: 'Corresponde a las fixtures <code>models_py38.py</code> … <code>models_py312.py</code> del repositorio testsuite.',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> sustituye a <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> sustituye a <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: el tipo <code>Self</code> (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> y genéricos PEP 695 <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Architecture · tres capas',
    title: '<em>Expression → Dialect → Backend</em>, responsabilidades claras.',
    intro: 'Separación de lógica de consultas, generación SQL y ejecución de base de datos. Protocolos (<code>@runtime_checkable</code>) declaran capacidades en los límites — características no soportadas lanzan <code>UnsupportedFeatureError</code>, no fallo silencioso.',
    col1: {
      num:   'Capa Expression',
      title: '<em>Recopilación de semántica</em>, sin detalles SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> delega generación SQL al dialecto objetivo. Un objeto expression reutilizable en todos los dialectos, cero SQL hard-coded.'
    },
    col2: {
      num:   'Capa Dialect (33 protocolos)',
      title: '<em>33 protocolos</em> declaran límites de capacidades',
      desc:  'Métodos <code>format_*()</code> generan SQL para base de datos objetivo. Fórmula de detección de capacidades: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'Capa Backend (12 Mixins)',
      title: '<em>12 Mixins</em> combinación MRO',
      desc:  'Patrón Template Method: lógica no-I/O en Mixin compartido, lógica I/O por separado. \\(n = 12\\) capa MRO combinación, cero repetición de código.'
    }
  },

  arch_comp: {
    label: 'Arquitectura de componentes',
    title: 'ActiveRecord + Backend, <em>dos capas independientes</em>.',
    intro: 'ActiveRecord es usuario de Backend; Backend puede trabajar independientemente. Sync y async están apareados, no intercambiables.',

    ar_badge: 'Capa de aplicación',
    ar_title: 'ActiveRecord',
    ar_desc:  'Definición de modelo, construcción de consultas, gestión de relaciones, manejo de transacciones. Incluye ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Capa independiente',
    be_title: 'Backend',
    be_desc:  'Capa de I/O de base de datos, usable sin ActiveRecord. SQLite integrado, otras bases de datos como paquetes de extensión.',

    uses_label:      'usa',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'Par sync — no mezclar con async',
    pair_async_note:  'Par async — no mezclar con sync',

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

    tip_ar_s:   'ActiveRecord sync. Hereda esta clase para definir modelo, llama métodos sync como <code>.save()</code>, <code>.query()</code>.',
    tip_ar_a:   'Async ActiveRecord. API es espejo de versión sync, todos los métodos son <code>async/await</code>, para FastAPI / asyncio.',
    tip_aq_s:   'ActiveQuery (sync). Construcción en cadena de WHERE, ORDER BY, JOIN, paginación, al final <code>.all()</code> / <code>.one()</code> para ejecutar.',
    tip_aq_a:   'AsyncActiveQuery (async). Misma semántica que sync, todos los métodos finales son coroutines.',
    tip_so_s:   'SetOperation (sync). Combina múltiples consultas con UNION / INTERSECT / EXCEPT, devuelve conjunto de resultados unificado.',
    tip_so_a:   'AsyncSetOperation (async). Lo mismo, ejecución asíncrona.',
    tip_cte_s:  'CTEQuery (sync). Construye CTE con cláusula WITH, soporta CTE recursivo.',
    tip_cte_a:  'AsyncCTEQuery (async). Lo mismo, ejecución asíncrona.',
    tip_sb_s:   'StorageBackend (sync). Define interfaz mínima de I/O: execute / fetch / transaction. Usable sin ActiveRecord.',
    tip_sb_a:   'AsyncStorageBackend (async). Es镜像 de versión sync, todos los métodos de I/O son coroutines.',
    tip_sqlite:  'Backend SQLite, incluido en el paquete principal. Configuración cero, adecuado para desarrollo, pruebas y embebido.',
    tip_ext:    'Paquetes de backend de extensión (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver. Instalar según necesidad, <code>configure()</code> una línea.',
    tip_ext_a:  'Paquetes de backend de extensión (async): corresponden a paquetes sync, proveen soporte completo async/await.'
  },

  qt: {
    label: 'Quick Taste · 30 segundos',
    title: 'De instalación a <em>primera consulta</em>, hasta 30 líneas.',
    btn_backends: 'Documentación completa de backends →',
    btn_ar:       'Detalles de ActiveRecord →',
    btn_practices:'Escenarios prácticos →'
  },

  compare: {
    label: 'Comparar',
    title: 'Comparado con otros <em>Python ORM</em>.',
    col_feature: 'Característica',
    row1:  'Patrón de diseño',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'Backend utilizable de forma independiente',
    row3:  'Sin concepto de sesión',
    row4:  'API sync / async consistente',
    row5:  'Integración nativa con Pydantic',
    row6:  'Validación de datos en tiempo de ejecución',
    row7:  'Expresividad SQL completa',
    row8:  'Declaración de capacidades',
    row9:  'Transparencia SQL <code>.to_sql()</code>',
    row10: 'Sin herramienta de migración obligatoria',
    row11: 'Dependencias mínimas',
    row12: 'Definición de relaciones explícita'
  },

  gallery: {
    label: 'Galería de componentes · primitivas',
    title: 'Cómo cada tema trata las <em>primitivas UI</em>.',
    c_buttons: 'Botones', c_btngroup: 'Grupo de botones', c_form: 'Controles de formulario',
    c_radio: 'Grupo radio', c_multi: 'Lista de selección múltiple', c_dropdown: 'Lista desplegable',
    c_alerts: 'Alertas', c_badges: 'Etiquetas', c_progress: 'Progreso',
    c_grid: 'Demo de rejilla (12 col)', c_rtl: 'Vista previa RTL', c_table: 'Tabla con rayas',
    form_email: 'Correo electrónico', form_note: 'Notas',
    form_preload: 'Precargar', form_async: 'Async',
    radio_sync: 'Sync (modo síncrono)', radio_async: 'Async (modo asíncrono)', radio_both: 'Ambos (doble pila, modelos compartidos)',
    alert_info:    '<b>Consejo.</b> El backend SQLite viene incluido en el paquete principal.',
    alert_success: '<b>Listo.</b> <code>User.configure(...)</code> ha sido llamado.',
    alert_warn:    '<b>Atención.</b> Se requiere SQLite ≥ 3.25 para funciones de ventana.',
    prog_coverage: 'Cobertura de tests', prog_backend: 'Avance del backend', prog_locale: 'Localización de documentación',
    backend_note:  'Mismo componente que la barra de control superior.',
    multi1_t: 'PostgreSQL', multi1_d: 'Producción principal',
    multi2_t: 'MySQL',      multi2_d: 'Servicios heredados',
    multi3_t: 'SQLite',     multi3_d: 'Tests y prototipos'
  },

  album: {
    label: 'Galería · biblioteca',
    title: 'Aprender de los <em>ejemplos</em>.',
    a1: 'Tu primer modelo', a2: 'Async en FastAPI', a3: 'has_many a fondo',
    a4: 'Escribir un backend', a5: 'Detección automática de N+1', a6: 'Transacciones anidadas y savepoints'
  },

  voices: {
    label: 'Voces · testimonios',
    title: 'Lo que <em>dicen</em>.',
    q1:      'Con rhosocial-activerecord por fin dejé de pelear con un ORM. Las anotaciones de tipo son el modelo — exactamente correcto.',
    q1_role: 'Backend Engineer · Kyoto',
    q2:      'Sync y async comparten una API, el refactor casi no cuesta. Migrar mi FastAPI fueron dos líneas.',
    q2_role: 'Staff Engineer · Berlín',
    q3:      'Escribí un backend de DuckDB. Leí el Backend ABC durante el almuerzo, estaba en producción por la tarde. Esto sí es extensibilidad.',
    q3_role: 'Data Platform · Singapur',
    q4:      'Cada paso de la cadena tiene el tipo inferido correctamente en mi IDE. Pydantic, usado donde debe.',
    q4_role: 'Senior Python · São Paulo',
    q5:      'Cero dependencias en runtime es la clave. En despliegues embebidos ya no nos preocupa el tamaño de SQLAlchemy.',
    q5_role: 'Ingeniero IoT · Shenzhen'
  },

  auth: {
    label: 'Auth · demo de inicio de sesión',
    title: 'Iniciar sesión en <em>rhosocial</em>.',
    welcome: 'Bienvenido de nuevo', sub: 'Continúa con tu cuenta de rhosocial.',
    email: 'Correo', password: 'Contraseña', remember: 'Recuérdame', forgot: '¿Olvidaste la contraseña?',
    login: 'Iniciar sesión', or: 'O', github: 'Continuar con GitHub', twitter: 'Continuar con Twitter',
    no_account: '¿Aún no tienes cuenta?', register: 'Registrarse'
  },

  stats: {
    label: 'En números',
    title: 'Algunos <em>números</em>.',
    s1: 'Dialectos de BD disponibles',
    s2: 'Cobertura de anotaciones',
    s3: 'Python mínimo',
    s4: 'Dependencias externas de ORM'
  },

  install: {
    label: 'Empezar',
    title: 'Instala en una línea, <em>diez minutos</em> hasta la primera consulta.',
    sub: 'Publicado en PyPI. El backend SQLite viene en el paquete principal; los demás se instalan bajo demanda.',
    docs: 'Leer la documentación →'
  },

  split_sync: {
    label: 'Lado a lado',
    title: 'Sync = async, <em>misma semántica</em>.',
    intro: 'Cambia <code>for</code> por <code>async for</code> y listo. La inferencia de tipos recorre toda la cadena.',
    cta: 'Leer la guía async →'
  },

  split_backend: {
    label: 'Libertad de backend',
    title: 'Escribe tu propio <em>backend</em> en una tarde.',
    intro: 'Hereda de <code>Backend</code>, implementa unos cuantos ganchos de dialecto. DuckDB y libSQL ya están probados.',
    cta: 'Guía de desarrollador de backend →'
  },

  pricing: {
    label: 'Planes · ilustrativos',
    title: 'Elige tu <em>nivel</em>.',
    intro: '(Tarjetas de ejemplo — el proyecto OSS es gratuito para siempre. Aquí para previsualizar las tarjetas de pricing en cada tema.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: 'Desarrolladores individuales y contribuidores OSS. Funcionalidad completa, sin límites.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'API sync y async completa', f3: 'Soporte en foro de la comunidad',
      f4: 'Panel de colaboración en equipo', f5: 'Garantía de respuesta SLA', cta: 'Empezar'
    },
    c2: {
      tier: 'Team',       desc: 'Equipos en crecimiento. Backends empresariales más auditoría.',
      f1: 'Todo lo de Community', f2: 'Backends MSSQL / Oracle', f3: 'Registro de auditoría y separación lectura/escritura',
      f4: 'Discord privado con prioridad', f5: 'SSO / SAML', cta: 'Prueba de 14 días'
    },
    c3: {
      tier: 'Enterprise', desc: 'Grandes organizaciones. On-prem, cumplimiento, formación.', price_label: 'Contactar',
      f1: 'Todo lo de Team', f2: 'Backends a medida (DuckDB / libSQL / internos)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA de 4 horas', f5: 'Formación in situ y soluciones dedicadas', cta: 'Contactar ventas'
    }
  }

});