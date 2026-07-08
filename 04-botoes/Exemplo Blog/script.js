// ============================================================
// NAVBAR — destacar o link clicado
// mesma receita de sempre: achar, escutar, fazer
// ============================================================

let linkInicio = document.getElementById('link-inicio')
let linkPosts = document.getElementById('link-posts')
let linkSobre = document.getElementById('link-sobre')
let linkContato = document.getElementById('link-contato')

function limparDestaque() {
  linkInicio.classList.remove('ativo')
  linkPosts.classList.remove('ativo')
  linkSobre.classList.remove('ativo')
  linkContato.classList.remove('ativo')
}

function destacarInicio() {
  limparDestaque()
  linkInicio.classList.add('ativo')
}

function destacarPosts() {
  limparDestaque()
  linkPosts.classList.add('ativo')
}

function destacarSobre() {
  limparDestaque()
  linkSobre.classList.add('ativo')
}

function destacarContato() {
  limparDestaque()
  linkContato.classList.add('ativo')
}

linkInicio.addEventListener('click', destacarInicio)
linkPosts.addEventListener('click', destacarPosts)
linkSobre.addEventListener('click', destacarSobre)
linkContato.addEventListener('click', destacarContato)


// ============================================================
// BOTÃO CURTIR — cada post tem seu próprio botão e contador
// ============================================================

let curtidas1 = 3
let botaoCurtir1 = document.getElementById('curtir-1')
let contagemCurtir1 = document.getElementById('contagem-1')

function alternarCurtida1() {
  if (botaoCurtir1.classList.contains('curtido')) {
    curtidas1 = curtidas1 - 1
    botaoCurtir1.classList.remove('curtido')
  } else {
    curtidas1 = curtidas1 + 1
    botaoCurtir1.classList.add('curtido')
  }
  contagemCurtir1.innerText = curtidas1
}

let curtidas2 = 7
let botaoCurtir2 = document.getElementById('curtir-2')
let contagemCurtir2 = document.getElementById('contagem-2')

function alternarCurtida2() {
  if (botaoCurtir2.classList.contains('curtido')) {
    curtidas2 = curtidas2 - 1
    botaoCurtir2.classList.remove('curtido')
  } else {
    curtidas2 = curtidas2 + 1
    botaoCurtir2.classList.add('curtido')
  }
  contagemCurtir2.innerText = curtidas2
}

let curtidas3 = 12
let botaoCurtir3 = document.getElementById('curtir-3')
let contagemCurtir3 = document.getElementById('contagem-3')

function alternarCurtida3() {
  if (botaoCurtir3.classList.contains('curtido')) {
    curtidas3 = curtidas3 - 1
    botaoCurtir3.classList.remove('curtido')
  } else {
    curtidas3 = curtidas3 + 1
    botaoCurtir3.classList.add('curtido')
  }
  contagemCurtir3.innerText = curtidas3
}

let curtidas4 = 9
let botaoCurtir4 = document.getElementById('curtir-4')
let contagemCurtir4 = document.getElementById('contagem-4')

function alternarCurtida4() {
  if (botaoCurtir4.classList.contains('curtido')) {
    curtidas4 = curtidas4 - 1
    botaoCurtir4.classList.remove('curtido')
  } else {
    curtidas4 = curtidas4 + 1
    botaoCurtir4.classList.add('curtido')
  }
  contagemCurtir4.innerText = curtidas4
}

botaoCurtir1.addEventListener('click', alternarCurtida1)
botaoCurtir2.addEventListener('click', alternarCurtida2)
botaoCurtir3.addEventListener('click', alternarCurtida3)
botaoCurtir4.addEventListener('click', alternarCurtida4)


// ============================================================
// SOBRE — mostrar/esconder o texto extra
// ============================================================

let botaoLeiaMais = document.getElementById('botao-leia-mais')
let textoExtra = document.getElementById('texto-extra')

function alternarTextoExtra() {
  if (textoExtra.classList.contains('mostrar')) {
    textoExtra.classList.remove('mostrar')
    botaoLeiaMais.innerText = 'leia mais sobre mim →'
  } else {
    textoExtra.classList.add('mostrar')
    botaoLeiaMais.innerText = 'mostrar menos ←'
  }
}

botaoLeiaMais.addEventListener('click', alternarTextoExtra)


// ============================================================
// FORMULÁRIO DE CONTATO — validar e mostrar mensagem de sucesso
// ============================================================

let campoNome = document.getElementById('campo-nome')
let campoEmail = document.getElementById('campo-email')
let campoMensagem = document.getElementById('campo-mensagem')

let erroNome = document.getElementById('erro-nome')
let erroEmail = document.getElementById('erro-email')
let erroMensagem = document.getElementById('erro-mensagem')

let botaoEnviar = document.getElementById('botao-enviar')
let mensagemSucesso = document.getElementById('mensagem-sucesso')

function enviarFormulario() {
  let tudoPreenchido = true

  // nome
  if (campoNome.value === '') {
    erroNome.classList.add('mostrar')
    tudoPreenchido = false
  } else {
    erroNome.classList.remove('mostrar')
  }

  // email
  if (campoEmail.value === '') {
    erroEmail.classList.add('mostrar')
    tudoPreenchido = false
  } else {
    erroEmail.classList.remove('mostrar')
  }

  // mensagem
  if (campoMensagem.value === '') {
    erroMensagem.classList.add('mostrar')
    tudoPreenchido = false
  } else {
    erroMensagem.classList.remove('mostrar')
  }

  // só envia se os 3 campos estiverem ok
  if (tudoPreenchido === true) {
    campoNome.value = ''
    campoEmail.value = ''
    campoMensagem.value = ''
    mensagemSucesso.classList.add('mostrar')
  }
}

botaoEnviar.addEventListener('click', enviarFormulario)
