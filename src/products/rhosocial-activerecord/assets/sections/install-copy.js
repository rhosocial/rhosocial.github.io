/**
 * install-copy.js — Copy install command to clipboard
 *
 * Usage: <div class="install-cmd" id="install-cmd">...<span class="copy-hint" id="copy-hint">...</span></div>
 */
(function() {
  var LABELS = {
    'zh-cn': { hint: '点击复制', done: '已复制 ✓' },
    'en-us': { hint: 'Click to copy', done: 'Copied!' },
    'de-de': { hint: 'Zum Kopieren klicken', done: 'Kopiert!' },
    'fr-fr': { hint: 'Cliquer pour copier', done: 'Copié !' },
    'es-es': { hint: 'Haz clic para copiar', done: '¡Copiado!' },
    'it-it': { hint: 'Clicca per copiare', done: 'Copiato!' },
    'pt-pt': { hint: 'Clique para copiar', done: 'Copiado!' },
    'nl-nl': { hint: 'Klik om te kopiëren', done: 'Gekopieerd!' },
    'pl-pl': { hint: 'Kliknij, aby skopiować', done: 'Skopiowano!' },
    'ru-ru': { hint: 'Нажмите, чтобы скопировать', done: 'Скопировано!' },
    'ja-jp': { hint: 'クリックしてコピー', done: 'コピー完了!' },
    'ko-kr': { hint: '클릭하여 복사', done: '복사됨!' },
    'ar':    { hint: 'انقر للنسخ', done: 'تم النسخ!' },
    'fa-ir': { hint: 'برای کپی کلیک کنید', done: 'کپی شد!' },
    'hi-in': { hint: 'कॉपी करने के लिए क्लिक करें', done: 'कॉपी हुआ!' },
    'bn-bd': { hint: 'কপি করতে ক্লিক করুন', done: 'কপি করা হয়েছে!' },
    'id-id': { hint: 'Klik untuk menyalin', done: 'Tersalin!' },
    'vi-vn': { hint: 'Nhấp để sao chép', done: 'Đã sao chép!' },
    'th-th': { hint: 'คลิกเพื่อคัดลอก', done: 'คัดลอกแล้ว!' },
    'uk-ua': { hint: 'Натисніть, щоб скопіювати', done: 'Скопійовано!' },
    'tr-tr': { hint: 'Kopyalamak için tıkla', done: 'Kopyalandı!' },
    'el-gr': { hint: 'Κάντε κλικ για αντιγραφή', done: 'Αντιγράφηκε!' },
    'ro-ro': { hint: 'Faceți clic pentru a copia', done: 'Copiat!' },
    'cs-cz': { hint: 'Kliknutím zkopírujete', done: 'Zkopírováno!' },
  };

  function label(key) {
    var lang = (window.__STATE__ && window.__STATE__.get('lang')) || 'zh-cn';
    var dict = LABELS[lang] || LABELS['en-us'];
    return dict[key] || key;
  }

  var cmd = document.getElementById('install-cmd');
  var hint = document.getElementById('copy-hint');
  if (cmd && hint) {
    // Set initial hint text from self-contained i18n
    hint.textContent = label('hint');

    cmd.addEventListener('click', function() {
      navigator.clipboard.writeText('pip install rhosocial-activerecord').then(function() {
        hint.textContent = label('done');
        hint.style.color = 'var(--r-green)';
        setTimeout(function() {
          hint.textContent = label('hint');
          hint.style.color = '';
        }, 2000);
      });
    });

    // Update hint on language change
    if (window.__STATE__) {
      window.__STATE__.subscribe(['lang'], function() {
        hint.textContent = label('hint');
      });
    }
  }
})();