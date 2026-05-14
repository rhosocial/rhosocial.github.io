(function() {
  var DATA = {
    'zh-cn': {
      copy:'复制',copied:'已复制',sync:'同步',async:'异步',params:'参数',
      diff_hint:'差异仅 await 与 Async 前缀',
      steps_label:'查询步骤',sql_label:'生成的 SQL',no_sql:'（在此执行）',
      toggle_off:'点击开启',toggle_on:'点击关闭',set_choose:'集合运算',
      exec:'EXEC',setop_desc:'选择集合运算符，左右子查询自动合成'
    },
    'en-us': {
      copy:'Copy',copied:'Copied!',sync:'SYNC',async:'ASYNC',params:'PARAMS',
      diff_hint:'Diff: await & Async prefix only',
      steps_label:'Query Steps',sql_label:'Generated SQL',no_sql:'(executed here)',
      toggle_off:'click to enable',toggle_on:'click to disable',
      set_choose:'Set Operation',exec:'EXEC',setop_desc:'Choose operator'
    },
    'ja-jp': {
      copy:'コピー',copied:'コピーしました',sync:'同期',async:'非同期',params:'パラメータ',
      diff_hint:'差分は await と Async のみ',
      steps_label:'クエリ手順',sql_label:'生成されたSQL',no_sql:'（ここで実行）',
      toggle_off:'クリックで有効化',toggle_on:'クリックで無効化',
      set_choose:'集合演算',exec:'実行',
      setop_desc:'演算子を選択、左右のクエリが自動合成'
    },
    'de-de': {
      copy:'Kopieren',copied:'Kopiert',sync:'Synchron',async:'Asynchron',params:'Parameter',
      diff_hint:'Unterschied nur bei await & Async',
      steps_label:'Abfrageschritte',sql_label:'Generiertes SQL',no_sql:'(hier ausgeführt)',
      toggle_off:'klicken zum Aktivieren',toggle_on:'klicken zum Deaktivieren',
      set_choose:'Mengenoperation',exec:'AUSF',
      setop_desc:'Operator wählen, linke & rechte Abfrage kombinieren'
    },
    'fr-fr': {
      copy:'Copier',copied:'Copié',sync:'Synchrone',async:'Asynchrone',params:'Paramètres',
      diff_hint:'Différence seulement await & Async',
      steps_label:'Étapes de requête',sql_label:'SQL généré',no_sql:'(exécuté ici)',
      toggle_off:'cliquer pour activer',toggle_on:'cliquer pour désactiver',
      set_choose:'Opération ensembliste',exec:'EXEC',
      setop_desc:'Choisir opérateur, requêtes combinées'
    },
    'ko-kr': {
      copy:'복사',copied:'복사됨',sync:'동기',async:'비동기',params:'매개변수',
      diff_hint:'await 및 Async 접두사 차이만',
      steps_label:'쿼리 단계',sql_label:'생성된 SQL',no_sql:'(여기서 실행)',
      toggle_off:'클릭하여 활성화',toggle_on:'클릭하여 비활성화',
      set_choose:'집합 연산',exec:'실행',
      setop_desc:'연산자 선택, 좌우 쿼리 자동 합성'
    },
    'pt-pt': {
      copy:'Copiar',copied:'Copiado',sync:'Síncrono',async:'Assíncrono',params:'Parâmetros',
      diff_hint:'Diferença apenas await & Async',
      steps_label:'Passos da consulta',sql_label:'SQL gerado',no_sql:'(executado aqui)',
      toggle_off:'clique para ativar',toggle_on:'clique para desativar',
      set_choose:'Operação de conjuntos',exec:'EXEC',
      setop_desc:'Escolher operador, consultas combinadas'
    },
    'nl-nl': {
      copy:'Kopiëren',copied:'Gekopieerd',sync:'Synchroon',async:'Asynchroon',params:'Parameters',
      diff_hint:'Verschil alleen await & Async',
      steps_label:'Query stappen',sql_label:'Gegenereerd SQL',no_sql:'(hier uitgevoerd)',
      toggle_off:'klik om in te schakelen',toggle_on:'klik om uit te schakelen',
      set_choose:'Verzamelingoperatie',exec:'UITV',
      setop_desc:'Kies operator, links & rechts combineren'
    },
    'it-it': {
      copy:'Copia',copied:'Copiato',sync:'Sincrono',async:'Asincrono',params:'Parametri',
      diff_hint:'Differenza solo await & Async',
      steps_label:'Passaggi della query',sql_label:'SQL generato',no_sql:'(eseguito qui)',
      toggle_off:'clicca per attivare',toggle_on:'clicca per disattivare',
      set_choose:'Operazione su insiemi',exec:'ESEG',
      setop_desc:'Scegli operatore, query combinate'
    },
    'ru-ru': {
      copy:'Копировать',copied:'Скопировано',sync:'Синхронный',async:'Асинхронный',
      params:'Параметры',diff_hint:'Разница только await и Async',
      steps_label:'Шаги запроса',sql_label:'Сгенерированный SQL',no_sql:'(выполняется здесь)',
      toggle_off:'нажмите для включения',toggle_on:'нажмите для отключения',
      set_choose:'Операция над множествами',exec:'ВЫП',
      setop_desc:'Выберите оператор, запросы объединяются'
    },
    'es-es': {
      copy:'Copiar',copied:'Copiado',sync:'Síncrono',async:'Asíncrono',params:'Parámetros',
      diff_hint:'Diferencia solo await & Async',
      steps_label:'Pasos de consulta',sql_label:'SQL generado',no_sql:'(ejecutado aquí)',
      toggle_off:'clic para activar',toggle_on:'clic para desactivar',
      set_choose:'Operación de conjuntos',exec:'EJEC',
      setop_desc:'Elegir operador, consultas combinadas'
    },
    'tr-tr': {
      copy:'Kopyala',copied:'Kopyalandı',sync:'Senkron',async:'Asenkron',params:'Parametreler',
      diff_hint:'Fark yalnızca await ve Async',
      steps_label:'Sorgu adımları',sql_label:'Oluşturulan SQL',no_sql:'(burada çalıştırılır)',
      toggle_off:'etkinleştirmek için tıkla',toggle_on:'devre dışı bırakmak için tıkla',
      set_choose:'Küme işlemi',exec:'ÇALIŞ',
      setop_desc:'Operatör seç, sorgular birleştirilir'
    },
    'el-gr': {
      copy:'Αντιγραφή',copied:'Αντιγράφηκε',sync:'Σύγχρονο',async:'Ασύγχρονο',
      params:'Παράμετροι',diff_hint:'Διαφορά μόνο await & Async',
      steps_label:'Βήματα ερωτήματος',sql_label:'SQL που δημιουργήθηκε',
      no_sql:'(εκτελείται εδώ)',toggle_off:'κλικ για ενεργοποίηση',
      toggle_on:'κλικ για απενεργοποίηση',set_choose:'Πράξη συνόλων',
      exec:'ΕΚΤΕΛ',setop_desc:'Επιλογή τελεστή, συνδυασμός ερωτημάτων'
    },
    'ar': {
      copy:'نسخ',copied:'تم النسخ',sync:'متزامن',async:'غير متزامن',params:'المعلمات',
      diff_hint:'الفرق فقط await و Async',
      steps_label:'خطوات الاستعلام',sql_label:'SQL المُنشأ',no_sql:'(يُنفذ هنا)',
      toggle_off:'انقر للتفعيل',toggle_on:'انقر للإلغاء',set_choose:'عملية المجموعات',
      exec:'تنفيذ',setop_desc:'اختيار المعامل، دمج الاستعلامات'
    },
    'hi-in': {
      copy:'कॉपी करें',copied:'कॉपी किया गया',sync:'तुल्यकालिक',async:'अतुल्यकालिक',
      params:'पैरामीटर',diff_hint:'केवल await और Async में अंतर',
      steps_label:'क्वेरी चरण',sql_label:'उत्पन्न SQL',no_sql:'(यहां निष्पादित)',
      toggle_off:'सक्षम करने के लिए क्लिक करें',toggle_on:'अक्षम करने के लिए क्लिक करें',
      set_choose:'सेट संक्रिया',exec:'निष्पादित',
      setop_desc:'ऑपरेटर चुनें, क्वेरी संयुक्त होंगी'
    },
    'id-id': {
      copy:'Salin',copied:'Disalin',sync:'Sinkron',async:'Asinkron',params:'Parameter',
      diff_hint:'Perbedaan hanya await & Async',
      steps_label:'Langkah kueri',sql_label:'SQL yang dihasilkan',no_sql:'(dieksekusi di sini)',
      toggle_off:'klik untuk mengaktifkan',toggle_on:'klik untuk menonaktifkan',
      set_choose:'Operasi himpunan',exec:'EKSEK',
      setop_desc:'Pilih operator, kueri digabungkan'
    },
    'vi-vn': {
      copy:'Sao chép',copied:'Đã sao chép',sync:'Đồng bộ',async:'Bất đồng bộ',
      params:'Tham số',diff_hint:'Chỉ khác await và Async',
      steps_label:'Các bước truy vấn',sql_label:'SQL được tạo',no_sql:'(thực thi ở đây)',
      toggle_off:'nhấp để bật',toggle_on:'nhấp để tắt',set_choose:'Phép toán tập hợp',
      exec:'THỰC THI',setop_desc:'Chọn toán tử, kết hợp truy vấn'
    },
    'pl-pl': {
      copy:'Kopiuj',copied:'Skopiowano',sync:'Synchroniczny',async:'Asynchroniczny',
      params:'Parametry',diff_hint:'Różnica tylko await i Async',
      steps_label:'Kroki zapytania',sql_label:'Wygenerowane SQL',no_sql:'(wykonane tutaj)',
      toggle_off:'kliknij aby włączyć',toggle_on:'kliknij aby wyłączyć',
      set_choose:'Operacja na zbiorach',exec:'WYK',
      setop_desc:'Wybierz operator, zapytania łączą się'
    },
    'th-th': {
      copy:'คัดลอก',copied:'คัดลอกแล้ว',sync:'ประสาน',async:'ไม่ประสาน',
      params:'พารามิเตอร์',diff_hint:'ต่างแค่ await และ Async',
      steps_label:'ขั้นตอนคำสั่ง',sql_label:'SQL ที่สร้าง',no_sql:'(ประมวลผลที่นี่)',
      toggle_off:'คลิกเพื่อเปิด',toggle_on:'คลิกเพื่อปิด',set_choose:'การดำเนินการเซต',
      exec:'ประมวลผล',setop_desc:'เลือกตัวดำเนินการ รวมคำสั่ง'
    },
    'uk-ua': {
      copy:'Копіювати',copied:'Скопійовано',sync:'Синхронний',async:'Асинхронний',
      params:'Параметри',diff_hint:'Різниця лише await та Async',
      steps_label:'Кроки запиту',sql_label:'Згенерований SQL',no_sql:'(виконується тут)',
      toggle_off:'натисніть для ввімкнення',toggle_on:'натисніть для вимкнення',
      set_choose:'Операція над множинами',exec:'ВИК',
      setop_desc:'Виберіть оператор, запити об\'єднуються'
    },
    'fa-ir': {
      copy:'کپی',copied:'کپی شد',sync:'همزمان',async:'ناهمزمان',params:'پارامترها',
      diff_hint:'تفاوت فقط await و Async',
      steps_label:'مراحل پرس‌وجو',sql_label:'SQL تولید شده',no_sql:'(اجرا در اینجا)',
      toggle_off:'کلیک برای فعال‌سازی',toggle_on:'کلیک برای غیرفعال‌سازی',
      set_choose:'عملیات مجموعه',exec:'اجرا',
      setop_desc:'انتخاب عملگر، ترکیب پرس‌وجوها'
    },
    'bn-bd': {
      copy:'কপি করুন',copied:'কপি করা হয়েছে',sync:'সিঙ্ক্রোনাস',async:'অ্যাসিঙ্ক্রোনাস',
      params:'প্যারামিটার',diff_hint:'শুধু await ও Async-এ পার্থক্য',
      steps_label:'কোয়েরি ধাপ',sql_label:'উৎপন্ন SQL',no_sql:'(এখানে কার্যকর)',
      toggle_off:'সক্রিয় করতে ক্লিক করুন',toggle_on:'নিষ্ক্রিয় করতে ক্লিক করুন',
      set_choose:'সেট অপারেশন',exec:'কার্যকর',
      setop_desc:'অপারেটর চয়ন করুন, কোয়েরি একত্রিত হবে'
    },
    'ro-ro': {
      copy:'Copiază',copied:'Copiat',sync:'Sincron',async:'Asincron',params:'Parametri',
      diff_hint:'Diferență doar await & Async',
      steps_label:'Pașii interogării',sql_label:'SQL generat',no_sql:'(executat aici)',
      toggle_off:'clic pentru activare',toggle_on:'clic pentru dezactivare',
      set_choose:'Operație pe mulțimi',exec:'EXEC',
      setop_desc:'Alege operator, interogări combinate'
    },
    'cs-cz': {
      copy:'Kopírovat',copied:'Zkopírováno',sync:'Synchronní',async:'Asynchronní',
      params:'Parametry',diff_hint:'Rozdíl jen await a Async',
      steps_label:'Kroky dotazu',sql_label:'Vygenerované SQL',no_sql:'(provedeno zde)',
      toggle_off:'kliknutím zapnout',toggle_on:'kliknutím vypnout',
      set_choose:'Množinová operace',exec:'PROV',
      setop_desc:'Vyberte operátor, dotazy se spojí'
    }
  };

  var INST = {
    data: DATA,
    t: function(key) {
      var lang = (window.__STATE__ && window.__STATE__.get('lang')) || 'zh-cn';
      var langData = DATA[lang] || DATA['en-us'];
      return langData && langData[key] !== undefined ? langData[key] : (DATA['en-us'][key] || key);
    }
  };

  window.SECTIONS_I18N = INST;
})();
