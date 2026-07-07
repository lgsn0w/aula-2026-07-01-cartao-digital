// Modo escuro
function alternarTema() {
  document.body.classList.toggle("dark");

  const btn = event.target;
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Modo Claro";
  } else {
    btn.textContent = "🌙 Modo Escuro";
  }
}

// Revelar habilidades
function revelarHabilidades() {
  const ocultos = document.querySelectorAll("ul .oculto");
  const btn = event.target;

  if (ocultos.length > 0) {
    ocultos.forEach(function(item) {
      item.classList.remove("oculto");
    });
    btn.textContent = "− Ver menos";
  } else {
    const itens = document.querySelectorAll("ul li");
    itens.forEach(function(item, index) {
      if (index >= 3) item.classList.add("oculto");
    });
    btn.textContent = "+ Ver mais";
  }
}

// Mostrar/ocultar projeto extra
function alternarProjeto() {
  const card = document.getElementById("projeto-extra");
  const btn = event.target;

  card.classList.toggle("oculto");

  if (card.classList.contains("oculto")) {
    btn.textContent = "+ Ver mais projetos";
  } else {
    btn.textContent = "− Ver menos projetos";
  }
}

// Copiar email
function copiarEmail() {
  const email = document.getElementById("email").textContent;
  const btn = event.target;

  navigator.clipboard.writeText(email).then(function() {
    btn.textContent = "✅ Copiado!";
    setTimeout(function() {
      btn.textContent = "📋 Copiar";
    }, 2000);
  });
}

// Contador de visitas
let visitas = 0;

function contarVisita() {
  visitas = visitas + 1;
  document.getElementById("contador").textContent = visitas;
}

function zerarContador() {
  visitas = 0;
  document.getElementById("contador").textContent = 0;
}
