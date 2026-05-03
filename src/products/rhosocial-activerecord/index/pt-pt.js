/**
 * index/pt-pt.js — Dicionário de homepage em português europeu
 *
 * Dependência: assets/i18n/pt-pt.js deve ser carregado primeiro.
 * Este ficheiro estende window.I18N['pt-pt'] via Object.assign adicionando chaves específicas da homepage.
 */
window.I18N = window.I18N || {};
window.I18N['pt-pt'] = Object.assign(window.I18N['pt-pt'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord,<br><em>reconstruído</em> para Python.',
    sub: '<strong>rhosocial-activerecord</strong> define modelos com anotações de tipo nativas Python e consulta-os com a cadeia <code>query().where(...).all()</code>. Sync e async incluídos. Sem dependências ORM externas — SQLite incluído, outras bases de dados como pacotes separados, backend personalizado em poucas dezenas de linhas.',
    cta_secondary: 'Ver funcionalidades →'
  },

  features: {
    label: 'Porquê · 6 Promessas Centrais',
    title: 'Porquê <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Tipo = campo', title: '<em>Tipo-seguro</em> por construção', desc: '<code>name: str</code> — armazenamento, validação e autocomplete IDE num só.' },
    f2: { num: '02 / Async primeira classe', title: 'Sync &amp; async, <em>uma API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — forma idêntica.' },
    f3: { num: '03 / Backends plugáveis', title: '<em>Backends</em> intercambiáveis', desc: 'SQLite incluído; Postgres/MySQL/MSSQL/Oracle como pacotes; ou personalizado.' },
    f4: { num: '04 / Relações explícitas', title: '<em>Relações</em> tornadas explícitas', desc: 'has_many / belongs_to declarados no modelo; relações são <code>QuerySet</code>s.' },
    f5: { num: '05 / Transações atómicas', title: 'Transações, <em>aninhadas corretamente</em>', desc: 'Gerenciador de contexto + savepoints; exceções deflagram rollback.' },
    f6: { num: '06 / Pythonic', title: 'Lê-se como <em>Inglês</em>', desc: '<code>User.query().where(...).all()</code> — sem DSL, só Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Tipo = campo</em>, de 3.8 para 3.12.',
    intro: 'Anotações de tipo Python são a definição do modelo — sem DSL extra. Pydantic para validação runtime, inferência de tipo completa no IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, mesma semântica.',
    intro: 'Sync e async partilham a mesma definição de modelo. <code>for</code> → <code>async for</code>, o resto igual.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Backends intercambiáveis</em>, escolha o que precisa.',
    intro: 'Pacote core só depende de Pydantic. SQLite incluído, outras bases de dados como pacotes, <code>configure()</code> uma linha.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Relações explícitas</em>, ClassVar + descriptor.',
    intro: 'Use <code>ClassVar</code> para campos de relação, evite scan Pydantic. Substituído automaticamente por <code>relation()</code> em runtime.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Transações atómicas</em>, savepoints aninhados.',
    intro: 'Transações aninhadas criam AUTOMATICALLY SAVEPOINTs. Gerenciador de contexto faz commit/rollback; exceções automaticamente para último savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Lê-se como Inglês</em>, sem DSL.',
    intro: 'Cadeia de chamadas, leitura fluída como Inglês. <code>.to_sql()</code> mostra SQL gerado.'
  },

  practice: {
    label: 'Na prática · código real',
    title: 'De 3.8 para 3.12, <em>passo a passo</em>.',
    intro: 'Corresponde aos fixtures <code>models_py38.py</code> … <code>models_py312.py</code> no repositório testsuite.',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> em vez de <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> em vez de <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: tipo <code>Self</code> (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> e PEP 695 generics <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Arquitetura · Três Camadas',
    title: '<em>Expression → Dialect → Backend</em>, responsabilidades claras.',
    intro: 'Separação de lógica de queries, geração SQL e execução na base de dados. Protocols (<code>@runtime_checkable</code>) declaram capacidades nos limites — features não suportadas lançam <code>UnsupportedFeatureError</code>, não falham silenciosamente.',
    col1: {
      num: 'Camada Expression',
      title: '<em>Coleção semântica</em>, sem detalhes SQL',
      desc: '<code>BaseExpression.to_sql(dialect)</code> delega geração SQL para dialecto alvo. Um objeto expression reutilizável em todos os dialectos, zero SQL hardcoded.'
    },
    col2: {
      num: 'Camada Dialect (33 Protocols)',
      title: '<em>33 protocolos</em> declaram limites de capacidade',
      desc: 'Métodos <code>format_*()</code> geram SQL para base de dados alvo. Fórmula de deteção de capacidade: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num: 'Camada Backend (12 Mixins)',
      title: '<em>12 Mixins</em> combinação MRO',
      desc: 'Padrão Template Method: lógica non-I/O em Mixin partilhado, lógica I/O separada. \\(n = 12\\) camadas MRO, zero código duplicado.'
    }
  },

  arch_comp: {
    label: 'Arquitetura de Componentes',
    title: 'ActiveRecord + Backend, <em>duas camadas independentes</em>.',
    intro: 'ActiveRecord é utilizador do Backend; Backend pode funcionar independentemente. Sync e async são emparelhados, não intercambiáveis.',

    ar_badge: 'Camada de Aplicação',
    ar_title: 'ActiveRecord',
    ar_desc: 'Definição de modelo, construção de queries, gestão de relações, manipulação de transações. Inclui ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Camada Independente',
    be_title: 'Backend',
    be_desc: 'Camada I/O de base de dados; utilizável sem ActiveRecord. SQLite incluído, outras bases de dados como pacotes de extensão.',

    uses_label: 'usa',
    sync_async_note: 'sync ↔ sync · async ↔ async',
    pair_sync_note: 'Emparelhamento sync — não misturar com async',
    pair_async_note: 'Emparelhamento async — não misturar com sync',

    node_sync_group: 'sync',
    node_async_group: 'async',

    node_ar_s: 'ActiveRecord',
    node_aq_s: 'ActiveQuery',
    node_so_s: 'SetOperation',
    node_cte_s: 'CTEQuery',
    node_ar_a: 'AsyncActiveRecord',
    node_aq_a: 'AsyncActiveQuery',
    node_so_a: 'AsyncSetOperation',
    node_cte_a: 'AsyncCTEQuery',
    node_sb_s: 'StorageBackend',
    node_sqlite_s:'SQLiteBackend',
    node_sqlite_a:'AsyncSQLiteBackend',
    node_sb_a: 'AsyncStorageBackend',
    node_ext: 'MySQL · PostgreSQL · SQL Server',
    node_ext_a: 'AsyncMySQL · AsyncPostgreSQL · …',

    tip_ar_s: 'Sync ActiveRecord. herde esta classe para definir modelos, chame métodos sync como <code>.save()</code>, <code>.query()</code>.',
    tip_ar_a: 'Async ActiveRecord. API é espelho da versão sync, todos os métodos são <code>async/await</code>, para FastAPI / asyncio.',
    tip_aq_s: 'ActiveQuery (sync). Construção de cadeia WHERE, ORDER BY, JOIN, paginação, no final <code>.all()</code> / <code>.one()</code> para executar.',
    tip_aq_a: 'AsyncActiveQuery (async). Mesma semântica que sync, todos os métodos terminais são corrotinas.',
    tip_so_s: 'SetOperation (sync). Combine múltiplas queries com UNION / INTERSECT / EXCEPT, retorne conjunto de resultados unificado.',
    tip_so_a: 'AsyncSetOperation (async). O mesmo, execução async.',
    tip_cte_s: 'CTEQuery (sync). Construa CTE com cláusulas WITH, suporta CTE recursivo.',
    tip_cte_a: 'AsyncCTEQuery (async). O mesmo, execução async.',
    tip_sb_s: 'StorageBackend (sync). Define interface I/O mínima: execute / fetch / transaction. Utilizável sem ActiveRecord.',
    tip_sb_a: 'AsyncStorageBackend (async). Espelho da versão sync, todos os métodos I/O são corrotinas.',
    tip_sqlite: 'SQLite backend — incluído no pacote core. Zero configuração; perfeito para desenvolvimento, testes e embedded.',
    tip_ext: 'Pacotes de extensão backend (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver. Instale o que precisa; mude com uma linha <code>configure()</code>.',
    tip_ext_a: 'Pacotes de extensão backend (async): homólogos dos pacotes sync, com suporte completo async/await.'
  },

  qt: {
    label: 'Quick Taste · 30 segundos',
    title: 'De instalação para <em>primeira query</em>, menos de 30 linhas.',
    btn_backends: 'Docs completas backend →',
    btn_ar: 'Detalhes ActiveRecord →',
    btn_practices:'Cenários práticos →'
  },

  compare: {
    label: 'Comparar',
    title: 'vs. outros <em>Python ORM</em>s.',
    col_feature: 'Funcionalidade',
    row1: 'Padrão de design', row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2: 'Backend utilizável independentemente',
    row3: 'Sem conceito de sessão',
    row4: 'API Sync / async consistente',
    row5: 'Integração nativa Pydantic',
    row6: 'Validação de dados runtime',
    row7: 'Expressividade SQL completa',
    row8: 'Mecanismo de declaração de capacidades',
    row9: 'Transparência SQL <code>.to_sql()</code>',
    row10: 'Sem ferramenta de migração obrigatória',
    row11: 'Dependências mínimas',
    row12: 'Definição explícita de relações'
  },

  gallery: {
    label: 'Galeria de Componentes · Primitives',
    title: 'Como cada tema trata <em>UI Primitives</em>.',
    c_buttons: 'Buttons', c_btngroup: 'Button group', c_form: 'Form controls',
    c_radio: 'Radio group', c_multi: 'Multi-select list', c_dropdown: 'Dropdown',
    c_alerts: 'Alerts', c_badges: 'Badges', c_progress: 'Progress',
    c_grid: 'Demo grid (12 col)', c_rtl: 'RTL preview', c_table: 'Striped table',
    form_email: 'Endereço de email', form_note: 'Notas',
    form_preload: 'Preload', form_async: 'Async',
    radio_sync: 'Sync (modo sync)', radio_async: 'Async (modo async)', radio_both: 'Ambos (modelos partilhados)',
    alert_info: '<b>Dica.</b> SQLite backend incluído no pacote core.',
    alert_success: '<b>Pronto.</b> <code>User.configure(...)</code> chamado.',
    alert_warn: '<b>Aviso.</b> SQLite ≥ 3.25 necessário para funções de janela.',
    prog_coverage: 'Cobertura de testes', prog_backend: 'Backend completion', prog_locale: 'Localização de documentação',
    backend_note: 'Mesmo componente que barra de controlo superior.',
    multi1_t: 'PostgreSQL', multi1_d: 'Produção principal',
    multi2_t: 'MySQL',      multi2_d: 'Serviços legacy',
    multi3_t: 'SQLite',     multi3_d: 'Testes & Protótipos'
  },

  album: {
    label: 'Galeria · Biblioteca',
    title: 'Aprender com <em>exemplos</em>.',
    a1: 'O teu primeiro modelo', a2: 'Async no FastAPI', a3: 'has_many em detalhe',
    a4: 'Escrever um backend', a5: 'Deteção automática N+1', a6: 'Transações aninhadas & savepoints'
  },

  voices: {
    label: 'Vozes · O que utilizadores dizem',
    title: 'O que <em>dizem</em>.',
    q1: 'Com rhosocial-activerecord finalmente não combato mais o ORM. Anotações de tipo são o modelo — exatamente certo.',
    q1_role: 'Backend Engineer · Kyoto',
    q2: 'Sync e async partilham uma API, refactoring é quase gratuito. Minha migração FastAPI foram duas linhas.',
    q2_role: 'Staff Engineer · Berlin',
    q3: 'Escrevi um backend DuckDB. Li o Backend ABC ao almoço, à tarde estava em produção. Isso é extensibilidade real.',
    q3_role: 'Data Platform · Singapore',
    q4: 'Cada passo da cadeia tem inferência de tipo correta no meu IDE. Potência do Pydantic no lugar certo.',
    q4_role: 'Senior Python · São Paulo',
    q5: 'Zero dependências runtime é a chave. Em deployments embedded já não nos preocupamos com o tamanho do SQLAlchemy.',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  auth: {
    label: 'Auth · demo de login',
    title: 'Entrar em <em>rhosocial</em>.',
    welcome: 'Bem-vindo de volta', sub: 'Continua com a tua conta rhosocial.',
    email: 'Email', password: 'Password', remember: 'Manter-me conectado', forgot: 'Esqueceu a password?',
    login: 'Entrar', or: 'OU', github: 'Continuar com GitHub', twitter: 'Continuar com Twitter',
    no_account: 'Sem conta?', register: 'Registar'
  },

  stats: {
    label: 'Em números',
    title: 'Alguns <em>números</em>.',
    s1: 'Dialetos DB disponíveis',
    s2: 'Cobertura de anotações de tipo',
    s3: 'Versão mínima de Python',
    s4: 'Dependências ORM externas'
  },

  install: {
    label: 'Começar',
    title: 'Uma linha de install, <em>dez minutos</em> para primeira query.',
    sub: 'Publicado no PyPI. SQLite backend incluído no pacote core; outros instalados sob demanda.',
    docs: 'Ler documentação →'
  },

  split_sync: {
    label: 'Side by side',
    title: 'Sync = async, <em>mesma semântica</em>.',
    intro: 'Substitui <code>for</code> por <code>async for</code> — feito. Inferência de tipo mantém-se por toda a cadeia.',
    cta: 'Ler guia async →'
  },

  split_backend: {
    label: 'Liberdade de backend',
    title: 'Escreve o teu próprio <em>backend</em> numa tarde.',
    intro: 'Herda de <code>Backend</code>, implementa alguns dialect hooks. DuckDB e libSQL já provados.',
    cta: 'Guia de dev backend →'
  },

  pricing: {
    label: 'Plans · ilustrativo',
    title: 'Escolhe o teu <em>nível</em>.',
    intro: '(Cards de exemplo — projeto OSSGratuito para sempre. Mostrado para preview de preços em cada tema.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: 'Para developers individuais e contribuidores OSS. Funcionalidade completa, sem limites.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'API Sync & async completa', f3: 'Suporte fórum comunidade',
      f4: 'Dashboard colaboração de equipa', f5: 'Garantia de resposta SLA', cta: 'Começar'
    },
    c2: {
      tier: 'Team',       desc: 'Equipas em crescimento. Backends enterprise mais аудит.',
      f1: 'Tudo da Community', f2: 'MSSQL / Oracle Backends', f3: 'Log de аудит & read/write split',
      f4: 'Discord privado prioritário', f5: 'SSO / SAML', cta: 'Trial de 14 dias'
    },
    c3: {
      tier: 'Enterprise', desc: 'Grandes organizações. On-prem, compliance, formação.', price_label: 'Contactar',
      f1: 'Tudo do Team', f2: 'Backends custom (DuckDB / libSQL / interno)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA de 4 horas', f5: 'Formação on-site e soluções dedicadas', cta: 'Contactar vendas'
    }
  }

});