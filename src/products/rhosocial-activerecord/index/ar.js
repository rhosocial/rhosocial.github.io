/**
 * index/ar.js — 首页阿拉伯语词典
 *
 * 依赖：assets/i18n/ar.js 必须先加载。
 * 本文件通过 Object.assign 向已有的 window.I18N['ar'] 追加首页特有 key。
 */
window.I18N = window.I18N || {};
window.I18N['ar'] = Object.assign(window.I18N['ar'] || {}, {

  hero: {
    eyebrow: 'v1.0 · Apache 2.0 · Pure Python',
    title:   'rhosocial ActiveRecord،<br>أُعيد تصميمها من أجل <em>Python</em>.',
    sub:     'يعرّف <strong>rhosocial-activerecord</strong> النماذج عبر تعليقات الأنواع الأصلية في Python ويستعلم عنها بسلسلة <code>query().where(...).all()</code>. متزامن وغير متزامن منذ اليوم الأول. بلا أي اعتمادات ORM خارجية — SQLite مدمج، وقواعد البيانات الأخرى حزم مستقلة، ويمكنك كتابة الواجهة الخلفية الخاصة بك في بضع عشرات من الأسطر.',
    cta_secondary: 'عرض الميزات ←'
  },

  features: {
    label: 'لماذا · ستة وعود أساسية',
    title: 'لماذا <em>rhosocial ActiveRecord</em>.',
    f1: { num: '01 / النوع = الحقل',      title: '<em>آمن الأنواع</em> بالبناء',                       desc: 'الحقل ببساطة <code>name: str</code> — التخزين والتحقق وإكمال IDE في سطر واحد.' },
    f2: { num: '02 / غير متزامن من الدرجة الأولى', title: 'sync و async، <em>واجهة واحدة</em>',         desc: '<code>ActiveRecord</code> / <code>AsyncActiveRecord</code>، بنفس الشكل.' },
    f3: { num: '03 / خلفيات قابلة للإضافة', title: 'خلفيات <em>قابلة للإضافة</em>',                     desc: 'SQLite مدمج، وPostgres/MySQL/MSSQL/Oracle حزم منفصلة، أو اكتب خلفيتك.' },
    f4: { num: '04 / علاقات صريحة',       title: '<em>العلاقات</em> صريحة',                            desc: 'يُصرَّح عن has_many / belongs_to في النموذج، والعلاقات نفسها <code>QuerySet</code>.' },
    f5: { num: '05 / معاملات ذرية',       title: 'معاملات <em>متداخلة بشكل صحيح</em>',                 desc: 'مدير سياق + savepoints، والاستثناءات تُرجِع كلَّ شيء نظيفاً.' },
    f6: { num: '06 / بايثوني',             title: 'يُقرأ كأنه <em>إنجليزية</em>',                      desc: '<code>User.query().where(...).all()</code> — لا DSL، مجرد Python.' }
  },

  f1: {
    label: '01 / Type-safe',
    title: '<em>النوع = الحقل</em>، من 3.8 إلى 3.12.',
    intro: 'تعليقات نوع Python هي تعريف النموذج دون DSL إضافي. تحقق Pydantic في وقت التشغيل واستكمال IDE الكامل.'
  },
  f2: {
    label: '02 / Async First',
    title: '<em>المتزامن = غير المتزامن</em>، نفس الدلالة.',
    intro: 'التعريف المشترك بين المتزامن وغير المتزامن. <code>for</code> → <code>async for</code>، والباقي دون تغيير.'
  },
  f3: {
    label: '03 / Pluggable Backends',
    title: '<em>خلفيات قابلة للإضافة</em>، حسب الحاجة.',
    intro: 'حزمة النواة تعتمد فقط على Pydantic. SQLite مدمج، وقواعد البيانات الأخرى تُنشر كحزم مستقلة، <code>configure()</code> switch في سطر واحد.'
  },
  f4: {
    label: '04 / Relations',
    title: '<em>العلاقات صريحة</em>، ClassVar + واصف.',
    intro: 'استخدم <code>ClassVar</code> لتعريف حقول العلاقات لتجنب فحص Pydantic. الاستبد��ل التلقائي في وقت التشغيل إلى <code>relation()</code>.'
  },
  f5: {
    label: '05 / Transactions',
    title: '<em>معاملات ذرية</em>، savepoint متداخلة.',
    intro: 'المعاملات المتداخلة تنشئ SAVEPOINT تلقائياً. مدير السياق ي确认committed/rolledback، والاستثناءات تعود تلقائياً إلى أحدث savepoint.'
  },
  f6: {
    label: '06 / Pythonic',
    title: '<em>يُقرأ كإنجليزية</em>، بلا DSL.',
    intro: 'سلاسل الاستدعاء، قراءة سلسة كإنجليزية. <code>.to_sql()</code> لرؤية SQL الفعلي المُنشأ.'
  },

  practice: {
    label: 'في الممارسة · كود حقيقي',
    title: 'من 3.8 إلى 3.12، <em>خطوة بخطوة</em>.',
    intro: 'يقابل fixtures <code>models_py38.py</code> … <code>models_py312.py</code> في مستودع testsuite.',
    p1: '<b>3.8 ← 3.9</b>: <code>list[str]</code> بدل <code>List[str]</code> (PEP 585).',
    p2: '<b>3.9 ← 3.10</b>: <code>int | None</code> بدل <code>Optional[int]</code> (PEP 604).',
    p3: '<b>3.10 ← 3.11</b>: النوع <code>Self</code> (PEP 673).',
    p4: '<b>3.11 ← 3.12</b>: <code>@override</code> وأنواع PEP 695 العامة <code>class Result[T]:</code>.'
  },

  arch: {
    label: 'Architecture · ثلاث طبقات',
    title: '<em>تعبير ← لهجة ← خلفية</em>، مسؤوليات واضحة.',
    intro: 'فصل بين منطق الاستعلام وتوليد SQL وتنفيذ قاعدة البيانات. البروتوكولات (<code>@runtime_checkable</code>) تعلن القدرات عند الحدود — الميزات غير المدعومة ت launch <code>UnsupportedFeatureError</code>، وليس الفشل الصامت.',
    col1: {
      num:   'طبقة التعبير',
      title: '<em>جمع الدلالة</em>، تفاصيل SQL',
      desc:  '<code>BaseExpression.to_sql(dialect)</code> يفوض توليد SQL للهجة المستهدفة. كائن التعبير الواحد قابل لإعادة الاستخدام عبر جميع اللهجات، صفر SQL مُرمَّز.'
    },
    col2: {
      num:   'طبقة اللهجة (33 بروتوكول)',
      title: '<em>33 بروتوكول</em> يعلن حدود القدرات',
      desc:  '<code>format_*()</code> توليد SQL للهدف. صيغة الكشف: \\(\\text{can\\_cte} = \\text{isinstance}(\\text{dialect},\\ \\text{SupportsCTE})\\)'
    },
    col3: {
      num:   'طبقة الخلفية (12 Mixin)',
      title: '<em>12 Mixin</em> MROتركيب',
      desc:  'نمط Template Method: المنطق غير I/O في Mixin مشترك، ومنطق I/O منفصل. \\(n = 12\\) تركيب MRO، صفر تكرار.'
    }
  },

  arch_comp: {
    label: 'معمار المكونات',
    title: 'ActiveRecord + Backend، <em>طبقتين مستقلتين</em>.',
    intro: 'ActiveRecord هي مستخدم Backend؛ Backend يمكن أن تعمل بشكل مستقل. المتزامن وغير المتزامن مزدوجان لا يمكن تبديلهما.',

    ar_badge: 'طبقة التطبيق',
    ar_title: 'ActiveRecord',
    ar_desc:  'تعريف النموذج وبناء الاستعلام وإدارة العلاقات والمعاملات. يشمل ActiveQuery و SetOperation و CTEQuery.',

    be_badge: 'طبقة مستقلة',
    be_title: 'Backend',
    be_desc:  'طبقة I/O لقاعدة البيانات، قابلة للاستخدام بدون ActiveRecord. SQLite مدمج، وقواعد البيانات الأخرى كحزم امتداد.',

    uses_label:      'يستدعي',
    sync_async_note:  'sync ↔ sync · async ↔ async',
    pair_sync_note:   'إقران متزامن — لا يخلط مع غير المتزامن',
    pair_async_note:  'إقران غير متز��من — لا يخلط مع المتزامن',

    node_sync_group:  'متزامن',
    node_async_group: 'غير متزامن',

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

    tip_ar_s:   'ActiveRecord متزامن. أورث هذا لتعريف النموذج، واستدعِ طرق متزامنة مثل <code>.save()</code> و <code>.query()</code> для управления базой данных.',
    tip_ar_a:   'ActiveRecord غير متزامن. الواجهة مرآة للتزامن، جميع الطرق <code>async/await</code>، ملائمة لـ FastAPI / asyncio.',
    tip_aq_s:   'ActiveQuery (متزامن). بناء تسلسلي لـ WHERE و ORDER BY و JOIN و الترحيل، ثم <code>.all()</code> / <code>.first()</code> للتنفيذ.',
    tip_aq_a:   'AsyncActiveQuery (غير متزامن). نفس دلالة التزامن، جميع طرق الإنهاء هي coroutines.',
    tip_so_s:   'SetOperation (متزامن). يجمع استعلامات متعددة بـ UNION / INTERSECT / EXCEPT، يُرجع مجموعة نتائج موحدة.',
    tip_so_a:   'AsyncSetOperation (غير متزامن). نفس الشيء، تنفيذ غير متزامن.',
    tip_cte_s:  'CTEQuery (متزامن). يبني CTE بـ WITH clause، يدعم CTE متكرر.',
    tip_cte_a:  'AsyncCTEQuery (غير متزامن). نفس الشيء، تنفيذ غير متزامن.',
    tip_sb_s:   'StorageBackend (متزامن). يحدد الحد الأدنى من I/O: execute / fetch / transaction. قابل للاستخدام بدون ActiveRecord.',
    tip_sb_a:   'AsyncStorageBackend (غير متزامن). مرآة للتزامن، جميع طرق I/O هي coroutines.',
    tip_sqlite:  'خلفية SQLite، مدمجة مع حزمة النواة. صفر إعدادات، ملائمة للتطوير والاختبار والسيناريوهات المدمجة.',
    tip_ext:    'حزم الخلفية الامتداد (متزامن): rhosocial-activerecord-mysql و -postgresql و -oracle و -sqlserver. ثبت حسب الحاجة، <code>configure()</code> switch في سطر.',
    tip_ext_a:  'حزم الخلفية الامتداد (غير متزامن): مطابقة لحزم التزامن، توفر دعم <code>async/await</code> كامل.'
  },

  qt: {
    label: 'Quick Taste · 30 ثانية',
    title: 'من التثبيت إلى <em>الاستعلام الأول</em>، حتى 30 سطر.',
    btn_backends: 'وثائق الخلفية الكاملة ←',
    btn_ar:       'تفاصيل ActiveRecord ←',
    btn_practices:'سيناريوهات الممارسة ←'
  },

  compare: {
    label: 'قارن',
    title: 'مقارنة مع <em>Python ORM</em> الأخرى.',
    col_feature: 'الميزة',
    row1:  'نمط التصميم',           row1r: 'ActiveRecord', row1sa: 'Data Mapper', row1dj: 'ActiveRecord', row1sm: 'Hybrid', row1pw: 'ActiveRecord', row1to: 'ActiveRecord',
    row2:  'الخلفية قابلة للاستخدام المستقل',
    row3:  'بدون مفهوم الجلسة',
    row4:  'تناسق واجهة sync / async',
    row5:  'تكامل أصلي مع Pydantic',
    row6:  'تحقق البيانات في وقت التشغيل',
    row7:  'قدرة تعبيرية SQL كاملة',
    row8:  'آلية إعلان القدرات',
    row9:  'شفافية SQL <code>.to_sql()</code>',
    row10: 'بدون أداة ترحيل إلزامية',
    row11: 'الحد الأدنى من التبعيات',
    row12: 'تعريف العلاقات صريح'
  },

  gallery: {
    label: 'معرض المكونات · الأوليات',
    title: 'كيف تتعامل كل سمة مع <em>أوليات الواجهة</em>.',
    c_buttons: 'الأزرار', c_btngroup: 'مجموعة أزرار', c_form: 'عناصر النموذج',
    c_radio: 'مجموعة radio', c_multi: 'قائمة اختيار متعدد', c_dropdown: 'قائمة منسدلة',
    c_alerts: 'تنبيهات', c_badges: 'شارات', c_progress: 'تقدّم',
    c_grid: 'عرض شبكة (12 عمود)', c_rtl: 'معاينة RTL', c_table: 'جدول مخطط',
    form_email: 'البريد الإلكتروني', form_note: 'ملاحظات',
    form_preload: 'تحميل مسبق', form_async: 'Async',
    radio_sync: 'Sync (وضع متزامن)', radio_async: 'Async (وضع غير متزامن)', radio_both: 'كلاهما (مكدسان، نماذج مشتركة)',
    alert_info:    '<b>تنبيه.</b> خلفية SQLite مضمّنة في الحزمة الأساسية.',
    alert_success: '<b>جاهز.</b> تم استدعاء <code>User.configure(...)</code>.',
    alert_warn:    '<b>انتبه.</b> تتطلب دوال النوافذ SQLite ≥ 3.25.',
    prog_coverage: 'تغطية الاختبارات', prog_backend: 'اكتمال الخلفية', prog_locale: 'تعريب التوثيق',
    backend_note:  'نفس المكون الموجود في شريط التحكم العلوي.',
    multi1_t: 'PostgreSQL', multi1_d: 'الإنتاج الرئيسي',
    multi2_t: 'MySQL',      multi2_d: 'الخدمات القديمة',
    multi3_t: 'SQLite',     multi3_d: 'الاختبارات والنماذج الأولية'
  },

  album: {
    label: 'معرض · مكتبة',
    title: 'تعلَّم من <em>الأمثلة</em>.',
    a1: 'أول نموذج لك', a2: 'Async في FastAPI', a3: 'has_many بعمق',
    a4: 'اكتب خلفية', a5: 'اكتشاف N+1 التلقائي', a6: 'معاملات متداخلة وsavepoints'
  },

  voices: {
    label: 'أصوات · شهادات',
    title: 'ما <em>يقولونه</em>.',
    q1:      'مع rhosocial-activerecord توقفت أخيراً عن مصارعة ORM. تعليقات الأنواع هي النموذج — هذا هو الصواب.',
    q1_role: 'مهندس خلفية · كيوتو',
    q2:      'يتشارك sync و async واجهة واحدة، وإعادة الهيكلة شبه مجانية. ترحيل مشروع FastAPI خاصتي استغرق سطرين.',
    q2_role: 'Staff Engineer · برلين',
    q3:      'كتبت خلفية لـ DuckDB. قرأت Backend ABC خلال الغداء، وكانت في الإنتاج بعد الظهر. هذه قابلية التوسعة الحقيقية.',
    q3_role: 'Data Platform · سنغافورة',
    q4:      'كل خطوة في السلسلة يُستنتج نوعها بشكل صحيح في الـ IDE. Pydantic، موظَّف في مكانه الصحيح.',
    q4_role: 'Senior Python · ساو باولو',
    q5:      'صفر اعتمادات وقت التشغيل هو المفتاح. في النشر المدمج لم نعد قلقين بشأن حجم SQLAlchemy.',
    q5_role: 'مهندس إنترنت الأشياء · شنتشن'
  },

  auth: {
    label: 'Auth · عرض تسجيل الدخول',
    title: 'تسجيل الدخول إلى <em>rhosocial</em>.',
    welcome: 'مرحباً بعودتك', sub: 'تابع باستخدام حساب rhosocial الخاص بك.',
    email: 'البريد الإلكتروني', password: 'كلمة المرور', remember: 'تذكّرني', forgot: 'هل نسيت كلمة المرور؟',
    login: 'تسجيل الدخول', or: 'أو', github: 'المتابعة عبر GitHub', twitter: 'المتابعة عبر Twitter',
    no_account: 'ليس لديك حساب؟', register: 'إنشاء حساب'
  },

  stats: {
    label: 'بالأرقام',
    title: 'بعض <em>الأرقام</em>.',
    s1: 'لهجات قواعد البيانات المتاحة',
    s2: 'تغطية تعليقات الأنواع',
    s3: 'أدنى إصدار Python',
    s4: 'اعتمادات ORM الخارجية'
  },

  install: {
    label: 'ابدأ',
    title: 'تثبيت بسطر واحد، <em>عشر دقائق</em> للاستعلام الأول.',
    sub: 'منشور على PyPI. خلفية SQLite مضمّنة مع الحزمة الأساسية؛ تُثبَّت الخلفيات الأخرى عند الطلب.',
    docs: 'اقرأ التوثيق ←'
  },

  split_sync: {
    label: 'جنباً إلى جنب',
    title: 'sync = async، <em>نفس الدلالة</em>.',
    intro: 'استبدل <code>for</code> بـ <code>async for</code> وانتهى الأمر. استنتاج الأنواع يسير عبر السلسلة كاملة.',
    cta: 'اقرأ دليل async ←'
  },

  split_backend: {
    label: 'حرية الخلفية',
    title: 'اكتب <em>خلفيتك</em> خلال أمسية.',
    intro: 'ورّث <code>Backend</code>، ونفّذ بضعة خطافات للهجة. DuckDB و libSQL مُثبتتان فعلاً.',
    cta: 'دليل مطور الخلفية ←'
  },

  pricing: {
    label: 'الخطط · توضيحية',
    title: 'اختر <em>مستواك</em>.',
    intro: '(ب��اقات توضيحية — مشروع OSS نفسه مجاني للأبد. تُعرض هنا لمعاينة بطاقات التسعير في كل سمة.)',
    badge: 'Most Popular',
    c1: {
      tier: 'Community',
      desc: 'المطورون الفرديون ومساهمو OSS. ميزات كاملة بلا حدود.',
      f1: 'SQLite / PostgreSQL / MySQL', f2: 'واجهة sync و async كاملة', f3: 'دعم عبر منتدى المجتمع',
      f4: 'لوحة تعاون فريق', f5: 'ضمان استجابة SLA', cta: 'ابدأ'
    },
    c2: {
      tier: 'Team',
      desc: 'الفرق المتنامية. خلفيات مؤسسية مع التدقيق.',
      f1: 'كل ما في Community', f2: 'خلفيات MSSQL / Oracle', f3: 'سجل تدقيق وفصل قراءة/كتابة',
      f4: 'Discord خاص بأولوية', f5: 'SSO / SAML', cta: 'تجربة 14 يوم'
    },
    c3: {
      tier: 'Enterprise',
      desc: 'المنظمات الكبرى. داخل المباني، الامتثال، التدريب.',
      price_label: 'اتصل بنا',
      f1: 'كل ما في Team', f2: 'خلفيات مخصصة (DuckDB / libSQL / داخلية)', f3: 'SSO / SAML / LDAP',
      f4: 'SLA 4 ساعات', f5: 'تدريب في الموقع وحلول مخصصة', cta: 'تواصل مع المبيعات'
    }
  }

});