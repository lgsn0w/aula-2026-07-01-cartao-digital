# 05 — Navbar do Zero

Como construir uma barra de navegação completa: HTML semântico, CSS com Flexbox, efeito sticky e destaque do link ativo com JavaScript.

---

## 1. O que é uma navbar?

É a faixa de navegação que fica no topo do site. Ela contém o logo e os links para as seções da página. Em sites de uma única página (*single-page*), os links usam âncoras (`href="#secao"`) para rolar até a seção certa.

---

## 2. Estrutura HTML

A navbar usa elementos semânticos: `<header>` para o bloco todo e `<nav>` para os links.

```html
<header class="navbar">
  <a href="#topo" class="navbar-logo">meu site</a>
  <nav class="navbar-links">
    <a href="#topo"    id="link-inicio"  class="link-nav ativo">início</a>
    <a href="#sobre"   id="link-sobre"   class="link-nav">sobre</a>
    <a href="#projetos" id="link-projetos" class="link-nav">projetos</a>
    <a href="#contato" id="link-contato" class="link-nav">contato</a>
  </nav>
</header>
```

**Por que não usar `<ul><li>`?**
Pode usar — é igualmente correto e mais acessível em projetos reais. Para aprender o conceito, `<a>` direto dentro do `<nav>` é mais simples de visualizar.

---

## 3. Layout com Flexbox

O segredo da navbar é o `display: flex` no container. Ele coloca logo e links lado a lado e distribui o espaço automaticamente.

```css
.navbar {
  display: flex;
  justify-content: space-between; /* logo na esquerda, links na direita */
  align-items: center;            /* tudo centralizado verticalmente */
  padding: 16px 32px;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}

.navbar-links {
  display: flex;
  gap: 28px; /* espaço entre os links */
}
```

---

## 4. Estilo dos links

Links de navegação geralmente não têm sublinhado padrão. O estilo vem do CSS.

```css
.link-nav {
  text-decoration: none;
  color: #555;
  font-size: 14px;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent; /* reserva espaço para o hover */
}
```

---

## 5. Hover com transition

`transition` faz a mudança de cor/borda acontecer suavemente ao invés de aparecer de repente.

```css
.link-nav {
  transition: color 0.2s, border-color 0.2s;
}

.link-nav:hover {
  color: #1a73e8;
  border-bottom-color: #1a73e8;
}
```

---

## 6. Navbar fixa com `position: sticky`

`position: sticky` faz a navbar ficar presa no topo quando o usuário rola a página. Diferente de `position: fixed`, ela não sai do fluxo do documento — o conteúdo não fica escondido embaixo dela.

```css
.navbar {
  position: sticky;
  top: 0;          /* gruda no topo */
  z-index: 10;     /* fica na frente de todo o resto */
}
```

**`z-index`**: controla qual elemento fica "por cima" quando dois se sobrepõem. Quanto maior o número, mais na frente.

---

## 7. Classe `.ativo` — link destacado

O link da seção atual recebe a classe `.ativo` para indicar onde o usuário está.

**CSS:**
```css
.link-nav.ativo {
  color: #1a73e8;
  border-bottom-color: #1a73e8;
}
```

**JavaScript:**
```js
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
```

`querySelectorAll` retorna todos os elementos com aquela classe de uma vez — não precisa pegar um por um com `getElementById`.

---

## 8. Erros comuns

| Erro | Causa | Correção |
|------|-------|----------|
| Navbar some ao rolar | Usou `position: fixed` sem padding no body | Troque por `position: sticky` + `top: 0` |
| Links não ficam lado a lado | Faltou `display: flex` no `.navbar-links` | Adicionar o flex no container dos links |
| Conteúdo fica atrás da navbar | Faltou `z-index` | Adicionar `z-index: 10` na navbar |
| Hover aparece sem animação | Faltou `transition` | Adicionar `transition` no estado normal (não no `:hover`) |
| Classe `.ativo` não some do link anterior | JS só adiciona, não remove | Chamar `limparAtivo()` antes de adicionar |

---

## Arquivos deste exemplo

```
05-navbar/
├── index.html   → estrutura completa com seções para rolar
├── style.css    → navbar sticky, flexbox, hover, classe ativo
├── script.js    → destaque do link ativo ao clicar
└── Codigos/     → códigos dos alunos
```
