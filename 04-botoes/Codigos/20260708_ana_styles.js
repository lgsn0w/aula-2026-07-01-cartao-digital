function alternarTema() {
  const btn = document.getElementById("btn-tema");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Modo Claro";
  } else {
    btn.textContent = "🌙 Modo Escuro";
  }
}

function avaliar() {
  window.open('https://www.imdb.com/pt/title/tt0013442/?ref_=nv_sr_srsg_6_tt_6_nm_2_in_0_q_nosfe')
}
