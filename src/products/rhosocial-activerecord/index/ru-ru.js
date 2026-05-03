/**
 * index/ru-ru.js — Словарь главной страницы на русском языке
 *
 * Зависимость: assets/i18n/ru-ru.js должен быть загружен первым.
 * Этот файл расширяет window.I18N['ru-ru'] через Object.assign, добавляя ключи, специфичные для главной страницы.
 */
window.I18N = window.I18N || {};
window.I18N['ru-ru'] = Object.assign(window.I18N['ru-ru'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord,<br><em>переработано</em> для Python.',
    sub: '<strong>rhosocial-activerecord</strong> определяет модели с нативными аннотациями типов Python и запрашивает их через цепочку <code>query().where(...).all()</code>. Sync и async включены. Без внешних зависимостей ORM — SQLite встроен, другие базы данных как отдельные пакеты, собственный бэкенд за несколько десятков строк.',
    cta_secondary: 'Посмотреть функции →'
  },

  features: {
    label: 'Почему · 6 ключевых обещаний',
    title: 'Почему <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / Тип = поле', title: '<em>Типобезопасный</em> по конструкции', desc: '<code>name: str</code> — хранение, валидация и автодополнение IDE в одном.' },
    f2: { num: '02 / Async первого класса', title: 'Sync &amp; async, <em>один API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — идентичная форма.' },
    f3: { num: '03 / Подключаемые бэкенды', title: '<em>Заменяемые бэкенды</em>', desc: 'SQLite встроен; Postgres/MySQL/MSSQL/Oracle как пакеты; или свой.' },
    f4: { num: '04 / Явные связи', title: '<em>Связи</em> сделаны явными', desc: 'has_many / belongs_to объявлены в модели; связи — это <code>QuerySet</code>.' },
    f5: { num: '05 / Атомарные транзакции', title: 'Транзакции, <em>правильно вложенные</em>', desc: 'Контекстный менеджер + точки сохранения; исключения вызывают откат.' },
    f6: { num: '06 / Pythonic', title: 'Читается как <em>английский</em>', desc: '<code>User.query().where(...).all()</code> — без DSL, только Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>Тип = поле</em>, от 3.8 до 3.12.',
    intro: 'Аннотации типов Python — это определение модели — без дополнительного DSL. Pydantic для валидации во время выполнения, полный вывод типов в IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>, та же семантика.',
    intro: 'Sync и async используют одно определение модели. <code>for</code> → <code>async for</code>, остальное без изменений.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>Подключаемые бэкенды</em>, выберите что нужно.',
    intro: 'Основной пакет зависит только от Pydantic. SQLite встроен, другие базы данных как пакеты, <code>configure()</code> одна строка.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>Явные свя��и</em>, ClassVar + дескриптор.',
    intro: 'Используйте <code>ClassVar</code> для полей связей, чтобы избежать сканирования Pydantic. Автоматически заменяется на <code>relation()</code> во время выполнения.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>Атомарные транзакции</em>, вложенные точки сохранения.',
    intro: 'Вложенные транзакции автоматически создают SAVEPOINT. Контекстный менеджер фиксирует или откатывает; исключения автоматически к последней точке сохранения.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>Читается как английский</em>, без DSL.',
    intro: 'Цепочка вызовов, плавное чтение как на английском. <code>.to_sql()</code> показывает сгенерированный SQL.'
  },

  practice: {
    label: 'На практике · реальный код',
    title: 'От 3.8 до 3.12, <em>шаг за шагом</em>.',
    intro: 'Соответствует фикстурам <code>models_py38.py</code> … <code>models_py312.py</code> в репозитории testsuite.',
    p1: '<b>3.8 → 3.9</b>: <code>list[str]</code> вместо <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 → 3.10</b>: <code>int | None</code> вместо <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 → 3.11</b>: тип <code>Self</code> (PEP 673).',
    p4: '<b>3.11 → 3.12</b>: <code>@override</code> и PEP 695 дженерики <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Архитектура · Три слоя',
    title: '<em>Expression → Dialect → Backend</em>, чёткие responsibilities.',
    intro: 'Разделение логики запросов, генерации SQL и выполнения в базе данных. Протоколы (<code>@runtime_checkable</code>) объявляют возможности на границах — неподдерживаемые функции выбрасывают <code>UnsupportedFeatureError</code>, а не молча silently.',
    col1: {
      num: 'Слой Expression',
      title: '<em>Семантическая коллекция</em>, без деталей SQL',
      desc: '<code>BaseExpression.to_sql(dialect)</code> делегирует генерацию SQL целевому диалекту. Один объект expression повторно используется во всех диалектах, ноль хардкодированного SQL.'
    },
    col2: {
      num: 'Слой Dialect (33 протокола)',
      title: '<em>33 протокола</em> объявляют границы возможностей',
      desc: 'Методы <code>format_*()</code> генерируют SQL для целевой базы данных. Формула определения возможностей: \\(\\text{can\\_cte} = \\text{isinstance}(\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num: 'Слой Backend (12 миксинов)',
      title: '<em>12 миксинов</em> комбинация MRO',
      desc: 'Паттерн Template Method: не-I/O логика в общем миксине, I/O логика отдельно. \\(n = 12\\) слоёв MRO, ноль дублирования кода.'
    }
  },

  arch_comp: {
    label: 'Архитектура компонентов',
    title: 'ActiveRecord + Backend, <em>два независимых слоя</em>.',
    intro: 'ActiveRecord — пользователь Backend; Backend может работать независимо. Sync и async спарены, но не взаимозаменя��мы.',

    ar_badge: 'Слой приложения',
    ar_title: 'ActiveRecord',
    ar_desc: 'Определение модели, построение запросов, управление связями, обработка транзакций. Включает ActiveQuery, SetOperation, CTEQuery.',

    be_badge: 'Независимый слой',
    be_title: 'Backend',
    be_desc: 'Слой ввода/вывода базы данных; можно использовать без ActiveRecord. SQLite встроен, другие базы данных как расширения.',

    uses_label: 'использует',
    sync_async_note: 'sync ↔ sync · async ↔ async',
    pair_sync_note: 'Пара sync — не смешивать с async',
    pair_async_note: 'Пара async — не смешивать с sync',

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

    tip_ar_s: 'Sync ActiveRecord. Наследуйте этот класс для определения моделей, вызывайте sync методы как <code>.save()</code>, <code>.query()</code>.',
    tip_ar_a: 'Async ActiveRecord. API — зеркало sync версии, все методы <code>async/await</code>, для FastAPI / asyncio.',
    tip_aq_s: 'ActiveQuery (sync). Построение цепочки WHERE, ORDER BY JOIN, пагинация, в конце <code>.all()</code> / <code>.one()</code> для выполнения.',
    tip_aq_a: 'AsyncActiveQuery (async). Та же семантика что и sync, все терминальные методы — корутины.',
    tip_so_s: 'SetOperation (sync). Объедините несколько запросов через UNION / INTERSECT / EXCEPT, верните унифицированный набор результатов.',
    tip_so_a: 'AsyncSetOperation (async). То же, асинхронное выполнение.',
    tip_cte_s: 'CTEQuery (sync). Постройте CTE с предложениями WITH, поддерживаются рекурсивные CTE.',
    tip_cte_a: 'AsyncCTEQuery (async). То же, асинхронное выполнение.',
    tip_sb_s: 'StorageBackend (sync). Определяет минимальный интерфейс ввода/вывода: execute / fetch / transaction. Можно использовать без ActiveRecord.',
    tip_sb_a: 'AsyncStorageBackend (async). Зеркало sync версии, все методы ввода/вывода — корутины.',
    tip_sqlite: 'SQLite backend — встроен в основной пакет. Без настройки; идеально для разработки, тестирования и встраивания.',
    tip_ext: 'Пакеты расширений backend (sync): rhosocial-activerecord-mysql, -postgres, -oracle, -sqlserver. Установите что нужно; переключите одной строкой <code>configure()</code>.',
    tip_ext_a: 'Пакеты расширений backend (async): аналоги sync пакетов, с полной поддержкой async/await.'
  },

  qt: {
    label: 'Quick Taste · 30 секунд',
    title: 'От установки до <em>первого запроса</em>, менее 30 строк.',
    btn_backends: 'Полная документация backend →',
    btn_ar: 'Детали ActiveRecord →',
    btn_practices:'Практически�� сценарии →'
  },

  compare: {
    label: 'Сравнить',
    title: 'vs. другие <em>Python ORM</em>.',
    col_feature: 'Функция',
    row1: 'Паттерн проектирования', row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2: 'Backend можно использовать независимо',
    row3: 'Нет концепции сессии',
    row4: 'Согласованный Sync / Async API',
    row5: 'Нативная интеграция Pydantic',
    row6: 'Валидация данных во время выполнения',
    row7: 'Полная выразительность SQL',
    row8: 'Механизм объявления возможностей',
    row9: 'Прозрачность SQL <code>.to_sql()</code>',
    row10: 'Без обязательного инструмента миграции',
    row11: 'Минимальные зависимости',
    row12: 'Явное определение связей'
  },

  gallery: {
    label: 'Галерея компонентов · Primitives',
    title: 'Как каждая тема обрабатывает <em>UI Primitives</em>.',
    c_buttons: 'Buttons', c_btngroup: 'Button group', c_form: 'Form controls',
    c_radio: 'Radio group', c_multi: 'Multi-select list', c_dropdown: 'Dropdown',
    c_alerts: 'Alerts', c_badges: 'Badges', c_progress: 'Progress',
    c_grid: 'Demo grid (12 колонок)', c_rtl: 'RTL preview', c_table: 'Striped table',
    form_email: 'Адрес электронной почты', form_note: 'Заметки',
    form_preload: 'Preload', form_async: 'Async',
    radio_sync: 'Sync (sync mode)', radio_async: 'Async (async mode)', radio_both: 'Оба (shared models)',
    alert_info: '<b>Совет.</b> SQLite backend встроен в основной пакет.',
    alert_success: '<b>Готово.</b> <code>User.configure(...)</code> вызван.',
    alert_warn: '<b>Внимание.</b> SQLite ≥ 3.25 требуется для оконных функций.',
    prog_coverage: 'Покрытие тестами', prog_backend: 'Завершение Backend', prog_locale: 'Локализация документации',
    backend_note: 'Тот же компонент что и верхняя панель управления.',
    multi1_t: 'PostgreSQL', multi1_d: 'Основное производство',
    multi2_t: 'MySQL',      multi2_d: 'Устаревшие сервисы',
    multi3_t: 'SQLite',     multi3_d: 'Тесты и прототипы'
  },

  album: {
    label: 'Галерея · Библиотека',
    title: 'Учитесь на <em>примерах</em>.',
    a1: 'Ваша первая модель', a2: 'Async в FastAPI', a3: 'has_many подробно',
    a4: 'Написать backend', a5: 'Автоматическое определение N+1', a6: 'Вложенные транзакции и точки сохранения'
  },

  voices: {
    label: 'Голоса · Что говорят пользователи',
    title: 'Что они <em>говорят</em>.',
    q1: 'С rhosocial-activerecord наконец-то я не борюсь с ORM. Аннотации типов — это модель — абсолютно правильно.',
    q1_role: 'Backend Engineer · Kyoto',
    q2: 'Sync и async используют один API, рефакторинг почти бесплатен. Вся моя миграция FastAPI была две строки.',
    q2_role: 'Staff Engineer · Berlin',
    q3: 'Я написал DuckDB backend. Прочитал Backend ABC за обедом, к вечеру он работал в продакшене. Вот это настоящая расширяемость.',
    q3_role: 'Data Platform · Singapore',
    q4: 'Каждый шаг цепочки имеет правильный вывод типов в моём IDE. Сила Pydantic применена в правильном месте.',
    q4_role: 'Senior Python · São Paulo',
    q5: 'Ноль зависимостей во время выполнения — это ключ. Встраиваемые развёртывания больше не беспокоят размер SQLAlchemy.',
    q5_role: 'IoT Engineer · Shenzhen'
  },

  auth: {
    label: 'Auth · демо входа',
    title: 'Войти в <em>rhosocial</em>.',
    welcome: 'С возвращением', sub: 'Продолжите со своей учётной записью rhosocial.',
    email: 'Email', password: 'Пароль', remember: 'Оставаться в системе', forgot: 'Забыли пароль?',
    login: 'Войти', or: 'ИЛИ', github: 'Продолжить через GitHub', twitter: 'Продолжить через Twitter',
    no_account: 'Нет учётной записи?', register: 'Регистрация'
  },

  stats: {
    label: 'В цифрах',
    title: 'Несколько <em>цифр</em>.',
    s1: 'Доступные диалекты БД',
    s2: 'Покрытие аннотаций типов',
    s3: 'Минимальная версия Python',
    s4: 'Внешние зависимости ORM'
  },

  install: {
    label: 'Начать',
    title: 'Одна строка установки, <em>десять минут</em> до первого запроса.',
    sub: 'Опубликовано на PyPI. SQLite backend встроен в основной пакет; остальные устанавливаются по запросу.',
    docs: 'Читать документацию →'
  },

  split_sync: {
    label: 'Side by side',
    title: 'Sync = async, <em>та же семантика</em>.',
    intro: 'Замените <code>for</code> на <code>async for</code> — готово. Вывод типов сохраняется по всей цепочке.',
    cta: 'Читать руководство async →'
  },

  split_backend: {
    label: 'Свобода backend',
    title: 'Напишите свой <em>backend</em> за один день.',
    intro: 'Наследуйте от <code>Backend</code>, реализуйте несколько dialect hooks. DuckDB и libSQL уже проверены.',
    cta: 'Руководство разработчика backend →'
  },

  pricing: {
    label: 'Plans · иллюстративно',
    title: 'Выберите свой <em>уровень</em>.',
    intro: '(Демонстрационные карточки — сам OSS проект бесплатен навсегда. Показано для предпросмотра цен в каждой теме.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',  desc: 'Для индивидуальных разработчиков и участников OSS. Полная функциональность, без ограничений.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'Полный Sync & Async API', f3: 'Поддержка форума сообщества',
      f4: 'Панель совместной работы команды', f5: 'Гарантия ответа SLA', cta: 'Начать'
    },
    c2: {
      tier: 'Team',       desc: 'Растущие команды. Enterprise бэкенды плюс аудит.',
      f1: 'Всё из Community', f2: 'MSSQL / Oracle Backends', f3: 'Журнал аудита и разделение чтения/записи',
      f4: 'Приоритетный частный Discord', f5: 'SSO / SAML', cta: 'Пробный период 14 дней'
    },
    c3: {
      tier: 'Enterprise', desc: 'Крупные организации. On-prem, соответствие требованиям, обучение.', price_label: 'Связаться',
      f1: 'Всё из Team', f2: 'Пользовательские бэкенды (DuckDB / libSQL / внутренние)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA 4 часа', f5: 'Обучение на месте и выделенные решения', cta: 'Связаться с отделом продаж'
    }
  }

});