/**
 * index/fa-ir.js — 首页波斯语词典
 *
 * 依赖：assets/i18n/fa-ir.js 必须先加载。
 * 本文件通过 Object.assign 向已有的 window.I18N['fa-ir'] 追加首页特有 key。
 */
window.I18N = window.I18N || {};
window.I18N['fa-ir'] = Object.assign(window.I18N['fa-ir'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title: 'rhosocial ActiveRecord،<br>برای Python <em>از نو طراحی شده</em>.',
    sub: '<strong>rhosocial-activerecord</strong> مدل‌ها را با type annotation بومی Python تعریف می‌کند و با زنجیره <code>query().where(...).all()</code> پرس‌وجو می‌کند. هم sync و هم async از روز اول. بدون وابستگی ORM خارجی — SQLite داخلی است، سایر پایگاه‌داده‌ها بسته‌های جداگانه، بک‌اند اختصاصی در چند ده خط.',
    cta_secondary: 'مشاهده ویژگی‌ها ←'
  },

  features: {
    label: 'چرا · ۶ وعده',
    title: 'چرا <em>rhosocial ActiveRecord</em>.',
    f1: { num: '۰۱ / نوع = فیلد', title: '<em>ایمن‌نوع</em> از پایه', desc: '<code>name: str</code> یعنی ذخیره، اعتبارسنجی و پیشنهاد IDE در یک عبارت.' },
    f2: { num: '۰۲ / Async درجه یک', title: 'Sync &amp; async, <em>یک API</em>', desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code> — شکل یکسان.' },
    f3: { num: '۰۳ / بک‌اند قابل تعویض', title: 'بک‌اند‌های <em>قابل تعویض</em>', desc: 'SQLite داخلی؛ Postgres/MySQL/MSSQL/Oracle بسته جدا؛ یا بک‌اند اختصاصی.' },
    f4: { num: '۰۴ / روابط صریح', title: '<em>روابط</em> به‌صراحت اعلام‌شده', desc: 'has_many / belongs_to روی مدل اعلام می‌شود؛ خود رابطه یک <code>QuerySet</code> است.' },
    f5: { num: '۰۵ / تراکنش اتمیک', title: 'تراکنش‌ها, <em>درست تودرتو</em>', desc: 'context manager + savepoint؛ استثناها rollback خودکار ایجاد می‌کنند.' },
    f6: { num: '۰۶ / Pythonic', title: 'مثل <em>انگلیسی</em> خوانده می‌شود', desc: '<code>User.query().where(...).all()</code> — بدون DSL، فقط Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>نوع = فیلد</em>، از ۳.۸ تا ۳.۱۲.',
    intro: 'type annotation های Python تعریف مدل هستند، بدون DSL اضافی. اعتبارسنجی Pydantic در زمان اجرا، استنتاج نوع کامل در IDE.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>Sync = async</em>، یک معناشناسی.',
    intro: 'sync و async تعریف مدل مشترک دارند. <code>for</code> → <code>async for</code>، بقیه تغییر نمی‌کند.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>بک‌اند قابل تعویض</em>، بنا بر نیاز.',
    intro: 'بسته اصلی فقط به Pydantic وابسته است. SQLite داخلی، سایر پایگاه‌داده‌ها بسته جدا، <code>configure()</code> یک خط.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>روابط صریح</em>، ClassVar + توصیفگر.',
    intro: 'از <code>ClassVar</code> برای فیلدهای رابطه استفاده کنید تا از اسکن Pydantic جلوگیری شود. جایگزینی خودکار به <code>relation()</code> در زمان اجرا.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>تراکنش اتمیک</em>، savepoint تودرتو.',
    intro: 'تراکنش‌های تودرتو خودکار SAVEPOINT ایجاد می‌کنند. Context manager خودکار commit/rollback، استثناها خودکار به آخرین savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>مثل انگلیسی خوانده شدن</em>، بدون DSL.',
    intro: 'زنجیره فراخوانی، خوانش روان مثل انگلیسی. <code>.to_sql()</code> برای دیدن SQL تولیدشده.'
  },

  practice: {
    label: 'در عمل · کد واقعی',
    title: 'از ۳.۸ تا ۳.۱۲، <em>گام‌به‌گام</em>.',
    intro: 'مطابق فایل‌های <code>models_py38.py</code> … <code>models_py312.py</code> در مخزن testsuite.',
    p1: '<b>۳.۸ → ۳.۹</b>: <code>list[str]</code> به‌جای <code>List[str]</code> (PEP 585).',
    p2: '<b>۳.۹ → ۳.۱۰</b>: <code>int | None</code> به‌جای <code>Optional[int]</code> (PEP 604).',
    p3: '<b>۳.۱۰ → ۳.۱۱</b>: نوع <code>Self</code> (PEP 673).',
    p4: '<b>۳.۱۱ → ۳.۱۲</b>: <code>@override</code> و جنریک‌های PEP 695 <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Architecture · سه لایه',
    title: '<em>Expression → Dialect → Backend</em>، مسئولیت‌های مشخص.',
    intro: 'جدایی منطق پرس‌وجو، تولید SQL و اجرای پایگاه‌داده. پروتکول‌ها (<code>@runtime_checkable</code>) قابلیت‌ها را در مرزها اعلام می‌کنند — قابلیت‌های پشتیبانی‌نشده <code>UnsupportedFeatureError</code> پرتاب می‌کنند، نه شکست خاموش.',
    col1: {
      num:   'لایه Expression',
      title: '<em>جمع‌آوری معناشناسی</em>، بدون جزئیات SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> تولید SQL را به dialect هدف واگذار می‌کند. یک شیء expression قابل استفاده مجدد در همه dialectها، صفر SQL hard-coded.'
    },
    col2: {
      num:   'لایه Dialect (۳۳ پروتکول)',
      title: '<em>۳۳ پروتکول</em> مرزهای قابلیت را اعلام می‌کند',
      desc:  'متدهای <code>format_*()</code> SQL برای پایگاه‌داده هدف تولید می‌کنند. فرمول تشخیص قابلیت: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'لایه Backend (۱۲ Mixin)',
      title: '<em>۱۲ Mixin</em> ترکیب MRO',
      desc:  'الگوی Template Method: منطق non-I/O در Mixin مشترک، منطق I/O جدا. \\(n = 12\\) لایه MRO ترکیب، تکرار کد صفر.'
    }
  },

  arch_comp: {
    label: 'معماری مؤلفه',
    title: 'ActiveRecord + Backend، <em>دو لایه مستقل</em>.',
    intro: 'ActiveRecord کاربر Backend است؛ Backend می‌تواند مستقل کار کند. sync و async جفت هستند، قابل تعویض نیستند.',

    ar_badge: 'لایه برنامه',
    ar_title: 'ActiveRecord',
    ar_desc:  'تعریف مدل، ساخت پرس‌وجو، مدیریت روابط، مدیریت تراکنش. شامل ActiveQuery، SetOperation، CTEQuery.',

    be_badge: 'لایه مستقل',
    be_title: 'Backend',
    be_desc:  'لایه I/O پایگاه‌داده، قابل استفاده بدون ActiveRecord. SQLite داخلی، سایر پایگاه‌داده‌ها بسته الحاقی.',

    uses_label:      'استفاده می‌کند',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'جفت sync — با async مخلوط نشود',
    pair_async_note:  'جفت async — با sync مخلوط نشود',

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
    node_ext:    'MySQL · PG · Oracle · SS',
    node_ext_a:  'AsyncMySQL · AsyncPG · …',

    tip_ar_s:   'ActiveRecord sync. از این کلاس ارث ببرید برای تعریف مدل، متدهای sync مثل <code>.save()</code>، <code>.query()</code> را فراخوانی کنید.',
    tip_ar_a:   'Async ActiveRecord. API آینه نسخه sync است، همه متدها <code>async/await</code>، برای FastAPI / asyncio.',
    tip_aq_s:   'ActiveQuery (sync). زنجیره‌سازی WHERE، ORDER BY، JOIN، صفحه‌بندی، آخر <code>.all()</code> / <code>.first()</code> برای اجرا.',
    tip_aq_a:   'AsyncActiveQuery (async). همان معناشناسی sync، همه متدهای پایانی coroutine هستند.',
    tip_so_s:   'SetOperation (sync). ترکیب چند پرس‌وجو با UNION / INTERSECT / EXCEPT، مجموعه نتیجه یکپارچه برمی‌گرداند.',
    tip_so_a:   'AsyncSetOperation (async). همان، اجرای async.',
    tip_cte_s:  'CTEQuery (sync). CTE می‌سازد با clause، از CTE بازگشتی پشتیبانی می‌کند.',
    tip_cte_a:  'AsyncCTEQuery (async). همان، اجرای async.',
    tip_sb_s:   'StorageBackend (sync). interface حداقلی I/O تعریف می‌کند: execute / fetch / transaction. قابل استفاده بدون ActiveRecord.',
    tip_sb_a:   'AsyncStorageBackend (async). آینه نسخه sync، همه متدهای I/O coroutine هستند.',
    tip_sqlite:  'بک‌اند SQLite، در بسته اصلی داخلی. پیکربندی صفر، برای توسعه، تست و embedded.',
    tip_ext:    'بسته‌های بک‌اند الحاقی (sync): rhosocial-activerecord-mysql, -postgresql, -oracle, -sqlserver. نصب به‌نیاز، <code>configure()</code> یک خط.',
    tip_ext_a:  'بسته‌های بک‌اند الحاقی (async): مطابق بسته‌های sync، پشتیبانی کامل async/await.'
  },

  qt: {
    label: 'Quick Taste · ۳۰ ثانیه',
    title: 'از نصب تا <em>اولین پرس‌وجو</em>، حداکثر ۳۰ خط.',
    btn_backends: 'مستندات کامل بک‌اند →',
    btn_ar:       'جزئیات ActiveRecord →',
    btn_practices:'سناریوهای عملی →'
  },

  compare: {
    label: 'مقایسه',
    title: 'مقایسه با سایر <em>Python ORM</em>.',
    col_feature: 'ویژگی',
    row1:  'الگوی طراحی',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'بک‌اند قابل استفاده مستقل',
    row3:  'بدون مفهوم Session',
    row4:  'API sync / async سازگار',
    row5:  'یکپارچه‌سازی بومی Pydantic',
    row6:  'اعتبارسنجی داده در زمان اجرا',
    row7:  'قدرت بیان کامل SQL',
    row8:  'مکانیسم اعلام قابلیت',
    row9:  'شفافیت SQL <code>.to_sql()</code>',
    row10: 'بدون ابزار مهاجرت اجباری',
    row11: 'حداقل وابستگی',
    row12: 'تعریف صریح روابط'
  },

  gallery: {
    label: 'گالری مؤلفه · عناصر UI',
    title: 'نحوه رفتار هر تم با <em>عناصر UI</em>.',
    c_buttons: 'دکمه‌ها', c_btngroup: 'گروه دکمه', c_form: 'عناصر فرم', c_radio: 'گروه radio',
    c_multi: 'لیست انتخاب چندگانه', c_dropdown: 'لیست کشویی', c_alerts: 'هشدارها',
    c_badges: 'نشان‌ها', c_progress: 'پیشرفت', c_grid: 'نمایش Grid (۱۲ ستون)',
    c_rtl: 'پیش‌نمایش RTL', c_table: 'جدول راه‌راه',
    form_email: 'ایمیل', form_note: 'یادداشت', form_preload: 'بارگذاری قبلی', form_async: 'Async',
    radio_sync: 'Sync (حالت همگام)', radio_async: 'Async (حالت ناهمگام)', radio_both: 'هر دو (مدل مشترک)',
    alert_info: '<b>نکته.</b> بک‌اند SQLite با بسته اصلی ارائه می‌شود.',
    alert_success: '<b>آماده.</b> <code>User.configure(...)</code> فراخوانی شد.',
    alert_warn: '<b>هشدار.</b> توابع پنجره‌ای نیازمند SQLite ≥ 3.25 هستند.',
    prog_coverage: 'پوشش تست', prog_backend: 'تکمیل بک‌اند', prog_locale: 'بومی‌سازی مستندات',
    backend_note: 'همان مؤلفه نوار کنترل بالا.',
    multi1_t: 'PostgreSQL', multi1_d: 'تولید اصلی', multi2_t: 'MySQL', multi2_d: 'سرویس‌های قدیمی', multi3_t: 'SQLite', multi3_d: 'تست &amp; نمونه‌اولیه'
  },

  album: {
    label: 'گالری · کتابخانه',
    title: 'از <em>مثال‌ها</em> بیاموزید.',
    a1: 'اولین مدل شما', a2: 'Async با FastAPI', a3: 'has_many عمیق',
    a4: 'نوشتن بک‌اند', a5: 'تشخیص خودکار N+1', a6: 'تراکنش ت��درتو &amp; savepoint'
  },

  voices: {
    label: 'صداها · نظرات',
    title: 'آنچه <em>می‌گویند</em>.',
    q1:      'با rhosocial-activerecord بالاخره از مبارزه با ORM خلاص شدم. type annotation همان مدل است، دقیقاً همین.',
    q1_role: 'Backend Engineer · کیوتو',
    q2:      'sync و async یک API دارند، refactor تقریباً بدون هزینه. مهاجرت FastAPI دو خط بود.',
    q2_role: 'Staff Engineer · برلین',
    q3:      'بک‌اند DuckDB را خودم نوشتم. Backend ABC را در ناهار خواندم، بعدازظهر روی prod بود. این expansibility واقعی است.',
    q3_role: 'Data Platform · سنگاپور',
    q4:      'هر مرحله از زنجیره type inference صحیح در IDE دارد. Pydantic در جای درست استفاده شده.',
    q4_role: 'Senior Python · سائوپائولو',
    q5:      'صفر وابستگی runtime کلید است. در embedded دیگر از حجم SQLAlchemy رنج نمی‌بریم.',
    q5_role: 'مهندس IoT · شنژن'
  },

  auth: {
    label: 'Auth · دمو ورود',
    title: 'ورود به <em>rhosocial</em>.',
    welcome: 'خوش آمدید', sub: 'با حساب rhosocial خود ادامه دهید.',
    email: 'ایمیل', password: 'رمز عبور', remember: 'مرا به‌خاطر بسپار', forgot: 'رمز عبور را فراموش کرده‌اید؟',
    login: 'ورود', or: 'یا', github: 'ادامه با GitHub', twitter: 'ادامه با Twitter',
    no_account: 'حساب ندارید؟', register: 'ثبت‌نام'
  },

  stats: {
    label: 'به اعداد',
    title: 'چند <em>عدد</em>.',
    s1: 'لهجه‌های DB موجود',
    s2: 'نرخ پوشش type annotation',
    s3: 'حداقل Python',
    s4: 'وابستگی ORM خارجی'
  },

  install: {
    label: 'شروع',
    title: 'نصب در یک خط، <em>ده دقیقه</em> تا اولین پرس‌وجو.',
    sub: 'منتشرشده در PyPI. بک‌اند SQLite داخلی؛ بقیه را بنا بر نیاز نصب کنید.',
    docs: 'خواندن مستندات ←'
  },

  split_sync: {
    label: 'کنار هم',
    title: 'Sync = async، <em>یک معناشناسی</em>.',
    intro: '<code>for</code> را به <code>async for</code> تغییر دهید — تمام. استنتاج نوع تا آخرین حلقه قطع نمی‌شود.',
    cta: 'خواندن راهنمای async ←'
  },

  split_backend: {
    label: 'آزادی بک‌اند',
    title: 'بک‌اند <em>اختصاصی</em> در یک بعدازظهر.',
    intro: 'از <code>Backend</code> ارث‌برید و چند dialect hook پیاده کنید. DuckDB و libSQL قبلاً تأیید شده‌اند.',
    cta: 'راهنمای توسعه بک‌اند ←'
  },

  pricing: {
    label: 'طرح‌ها · نمونه',
    title: 'طرح <em>خود</em> را انتخاب کنید.',
    intro: '(کارت‌های نمونه — خود پروژه OSS برای همیشه رایگان است. کارت‌های pricing برای بررسی نمایش در هر تم نشان داده شده‌اند.)',
    badge: 'محبوب‌ترین',
    c1: {
      tier: 'Community', desc: 'برای توسعه‌دهندگان فردی و مشارکت‌کنندگان OSS. قابلیت کامل، بدون محدودیت.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'API کامل sync &amp; async', f3: 'پشتیبانی انجمن',
      f4: 'داشبورد تیمی', f5: 'تضمین پاسخ SLA', cta: 'شروع'
    },
    c2: {
      tier: 'Team', desc: 'تیم‌های در حال رشد. بک‌اند enterprise و حسابرسی.',
      f1: 'همه امکانات Community', f2: 'بک‌اند MSSQL / Oracle', f3: 'حسابرسی &amp; جداسازی خواندن/نوشتن',
      f4: 'Discord اختصاصی با اولویت', f5: 'SSO / SAML', cta: '۱۴ روز آزمایش'
    },
    c3: {
      tier: 'Enterprise', desc: 'سازمان‌های بزرگ. on-prem، انطباق، آموزش.', price_label: 'تماس با ما',
      f1: 'همه امکانات Team', f2: 'بک‌اند اختصاصی (DuckDB / libSQL / داخلی)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA ۴ ساعته', f5: 'آموزش حضوری و راه‌حل اختصاصی', cta: 'تماس با فروش'
    }
  }

});