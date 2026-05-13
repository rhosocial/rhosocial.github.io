/**
 * install-copy.js — Copy install command to clipboard
 *
 * Usage: <div class="install-cmd" id="install-cmd">...<span class="copy-hint" id="copy-hint">...</span></div>
 */
(function() {
  var cmd = document.getElementById('install-cmd');
  var hint = document.getElementById('copy-hint');
  if (cmd && hint) {
    cmd.addEventListener('click', function() {
      navigator.clipboard.writeText('pip install rhosocial-activerecord').then(function() {
        hint.textContent = '已复制 ✓';
        hint.style.color = 'var(--r-green)';
        setTimeout(function() {
          hint.textContent = '点击复制';
          hint.style.color = '';
        }, 2000);
      });
    });
  }
})();