(function () {
  'use strict';

  var btnTopo = document.getElementById('btn-voltar-topo');
  var alvoTopo = document.getElementById('topo');
  var anoSpan = document.getElementById('rodape-ano');
  var msgVisita = document.getElementById('msg-visita');

  if (anoSpan) {
    anoSpan.textContent = String(new Date().getFullYear());
  }

  if (msgVisita) {
    try {
      if (!sessionStorage.getItem('perfilVisitou')) {
        sessionStorage.setItem('perfilVisitou', '1');
        msgVisita.textContent = 'Obrigado por visitar este exemplo com JavaScript!';
      } else {
        msgVisita.textContent = 'Bom ver você de novo nesta aba!';
      }
    } catch (err) {
      msgVisita.style.display = 'none';
    }
  }

  if (btnTopo && alvoTopo) {
    function atualizaBotaoTopo() {
      var scrollou = window.scrollY > 100;
      if (scrollou) {
        btnTopo.removeAttribute('hidden');
      } else {
        btnTopo.setAttribute('hidden', '');
      }
      btnTopo.setAttribute('aria-hidden', !scrollou);
    }

    window.addEventListener('scroll', atualizaBotaoTopo, { passive: true });

    btnTopo.addEventListener('click', function () {
      alvoTopo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    atualizaBotaoTopo();
  }
})();