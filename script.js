
// Menu toggle for mobile
document.getElementById('menuToggle').addEventListener('click', function(){
  var m = document.getElementById('menu');
  if(m.style.display === 'flex') m.style.display = 'none'; else m.style.display = 'flex';
});

// Tab navigation
document.querySelectorAll('.menu-link, .btn[data-tab]').forEach(function(el){
  el.addEventListener('click', function(e){
    e.preventDefault();
    var tab = this.getAttribute('data-tab');
    if(!tab) return;
    // hide all tabs
    document.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
    // show target
    var target = document.getElementById(tab);
    if(target) target.classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

// Open/close regulamento modal
document.getElementById('openReg').addEventListener('click', function(){
  var modal = document.getElementById('regModal');
  modal.setAttribute('aria-hidden','false');
});
document.getElementById('closeReg').addEventListener('click', function(){
  var modal = document.getElementById('regModal');
  modal.setAttribute('aria-hidden','true');
});

// Form handlers (simulate sending)
// Detalhe -> redirect to external quiz (placeholder link)
document.getElementById('form-detalhe').addEventListener('submit', function(e){
  e.preventDefault();
  var nome = this.nome.value;
  var email = this.email.value;
  var tel = this.telefone.value;
  alert('Cadastro recebido. Você será direcionado ao quiz.');
  window.location.href = 'https://example.com/quiz';
});

// Experience form
document.getElementById('form-experience').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Cadastro para Mariah Experience enviado. Obrigado! (simulado)');
  this.reset();
});

// Ensaio form
document.getElementById('form-ensaio').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Cadastro para o Ensaio enviado. Obrigado! (simulado)');
  this.reset();
});
