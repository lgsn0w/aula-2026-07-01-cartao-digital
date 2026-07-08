let botao = document.getElementById("btn-oi")

function dizerOi(){
    botao.innerText = "Oi! Tudo bem?"
}

botao.addEventListener("click", dizerOi)

let botao = document.getElementById("btn-assistir")

function assistirNetflix(){
    botao.innerText = "Assistindo Netflix"
}

botao.addEventListener("click", assistirNetflix)