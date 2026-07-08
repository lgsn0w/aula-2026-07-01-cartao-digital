// ============================================================
// NAVBAR — destacar o link ativo ao clicar
// querySelectorAll pega todos os links de uma vez
// ============================================================

let links = document.querySelectorAll('.link-nav')

function limparAtivo() {
  links.forEach(function(link) {
    link.classList.remove('ativo')
  })
}

links.forEach(function(link) {
  link.addEventListener('click', function() {
    limparAtivo()
    link.classList.add('ativo')
  })
})
