// EUKERIT — language toggle (EN | NL) and mobile nav
(function () {
  var STORAGE_KEY = 'eukerit-lang';

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'nl' ? 'nl' : 'en';
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-en]').forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (text !== null) {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-en-placeholder]').forEach(function (el) {
      var text = el.getAttribute('data-' + lang + '-placeholder');
      if (text !== null) {
        el.setAttribute('placeholder', text);
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function getLangParam() {
    var params = new URLSearchParams(window.location.search);
    return params.get('lang');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var hasSavedPref = localStorage.getItem(STORAGE_KEY) !== null;

    if (!hasSavedPref && getLangParam() === 'nl') {
      setLang('nl');
    } else {
      applyLang(getLang());
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });

    var navToggle = document.querySelector('.nav-toggle');
    var navRight = document.querySelector('.nav-right');
    if (navToggle && navRight) {
      navToggle.addEventListener('click', function () {
        navRight.classList.toggle('open');
      });
    }
  });
})();
