(function () {
  var KEY = 'ale-lang';
  function apply(lang) {
    document.body.classList.toggle('es', lang === 'es');
    document.documentElement.lang = lang;
    var en = document.getElementById('btn-en'), es = document.getElementById('btn-es');
    if (en && es) { en.classList.toggle('on', lang !== 'es'); es.classList.toggle('on', lang === 'es'); }
  }
  function set(lang) { try { localStorage.setItem(KEY, lang); } catch (e) {} apply(lang); }
  var saved = 'en';
  try { saved = localStorage.getItem(KEY) || 'en'; } catch (e) {}
  document.addEventListener('DOMContentLoaded', function () {
    apply(saved);
    var en = document.getElementById('btn-en'), es = document.getElementById('btn-es');
    if (en) en.addEventListener('click', function () { set('en'); });
    if (es) es.addEventListener('click', function () { set('es'); });
  });
})();
