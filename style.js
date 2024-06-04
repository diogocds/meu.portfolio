window.sr = ScrollReveal({ reset: true });

sr.reveal('h1', { duration: 1000 });
sr.reveal('h2', { duration: 1000 });
sr.reveal('h3', { duration: 1000 });
sr.reveal('.grid-parceiros', { duration: 1000, rotate: { x: 0, y: 80, z: 0 } });
sr.reveal('.form-pg', { duration: 2000, rotate: { x: 0, y: 100, z: 0 } });
sr.reveal('.bi', { duration: 1000 });

openMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
    menu.style.right = (menu.offsetWidth * -1) + 'px'
    openMenu.style.display = 'none'
    setTimeout(() => {
        menu.style.opacity = '1'
        menu.style.right = '0'
    }, 10)

})

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0'
    menu.style.right = (menu.offsetWidth * -1) + 'px'
    setTimeout(() => {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    }, 200)
})

let menuTransition = document.querySelector('.menu-transition')
let btnFechar = document.querySelector('.btn-fechar')
btnFechar.addEventListener('click', () => {
    menuTransition.removeAttribute('style')
    openMenu.removeAttribute('style')
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 3000);

function nextImage() {
    count++;
    if (count > 6) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

    function abrirWhatsapp() {
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
      var msg = document.getElementById("msg").value;
      var url = " https://wa.me/5584981072374?text=" // Seu numero
        + "*Olá Israel, Gostaria de Mais Informações*" + "%0a" // Mensagem personalizada
        + "%0a" // Quebra de linha
        + "*Nome*: " + nome + "%0a" // Dados do formulário
        + "*Telefone*: " + telefone + "%0a"
        + "*E-mail*: " + email + "%0a"
        + "*Mensagem*: " + msg;
      window.open(url, '_blank').focus();
    }