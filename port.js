
let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnmenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})


menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var url = " https://wa.me/5584999209787?text=" // Seu numero
      + "*Olá Diogo, Gostaria de Mais Informações*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Telefone*: " + telefone + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }