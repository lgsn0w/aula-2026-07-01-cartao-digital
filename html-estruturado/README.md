# Aula: HTML Estruturado

Como organizar uma página HTML com semântica, seções, classes e IDs — e como o CSS se conecta a tudo isso.

---

## Estrutura geral de uma página

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <!-- metadados, título, link para CSS -->
  </head>
  <body>
    <header>...</header>
    <main>
      <section>...</section>
      <section>...</section>
    </main>
    <footer>...</footer>
  </body>
</html>
```

---

## Tags estruturais e quando usar cada uma

| Tag | Para quê serve |
|---|---|
| `<header>` | Cabeçalho da página ou de uma seção. Costuma ter o título e a navegação. |
| `<nav>` | Bloco de links de navegação (menu, sumário). |
| `<main>` | Conteúdo principal. Só deve existir **um** por página. |
| `<section>` | Agrupa conteúdo relacionado com um tema. Sempre tem um título (`<h2>`, `<h3>` etc.). |
| `<article>` | Conteúdo autocontido — faz sentido sozinho (post, card, notícia). |
| `<aside>` | Conteúdo secundário, complementar (barra lateral, nota). |
| `<footer>` | Rodapé com créditos, links legais, redes sociais. |

> **Regra de ouro:** use a tag que descreve o *significado* do conteúdo, não só o visual. Isso se chama **HTML semântico**.

---

## `<main>` e `<section>` na prática

- `<main>` é o container do conteúdo relevante da página.
- Dentro dele, cada assunto diferente vai em uma `<section>`.

```html
<main>
  <section id="sobre">
    <h2>Sobre mim</h2>
    <p>Texto...</p>
  </section>

  <section id="projetos">
    <h2>Projetos</h2>
    <!-- cards de projeto aqui -->
  </section>
</main>
```

---

## Classes e IDs

### ID — identificador único

- Declarado com `id="nome"` no HTML.
- **Deve ser único** na página inteira (só um elemento pode ter aquele ID).
- Usos principais:
  1. **Âncora de navegação:** `<a href="#sobre">` rola a página até `<section id="sobre">`.
  2. **Estilização específica** no CSS: `#sobre { border-top: 3px solid blue; }`
  3. **Acesso via JavaScript:** `document.getElementById("sobre")`

```html
<section id="sobre">...</section>
```

### Classe — reutilizável

- Declarada com `class="nome"` no HTML.
- Pode ser usada em **múltiplos elementos**.
- Um elemento pode ter **várias classes** separadas por espaço.
- Uso principal: aplicar o mesmo estilo em vários lugares.

```html
<p class="destaque">Texto em destaque.</p>
<article class="card destaque">Também usa as duas classes.</article>
```

> **Dica:** prefira classes para estilos. Reserve IDs para navegação e JavaScript.

---

## Como conectar o CSS

Coloque dentro do `<head>`:

```html
<link rel="stylesheet" href="style.css" />
```

- `rel="stylesheet"` — indica que é um arquivo de estilos.
- `href="style.css"` — caminho para o arquivo. Se estiver na mesma pasta, só o nome basta.

---

## Seletores CSS essenciais

```css
/* Elemento — afeta TODOS os h2 da página */
h2 {
  color: navy;
}

/* Classe — o ponto (.) indica classe */
.destaque {
  background: #e8f4ff;
  font-weight: bold;
}

/* ID — o sustenido (#) indica ID */
#sobre {
  border-top: 3px solid blue;
}

/* Descendente — p DENTRO de section */
section p {
  line-height: 1.7;
}

/* Combinando elemento + classe */
article.card {
  border: 1px solid #ccc;
}

/* Pseudo-classe — estado hover (mouse em cima) */
a:hover {
  color: darkblue;
}
```

---

## Hierarquia de especificidade

Quando duas regras CSS conflitam, vence a **mais específica**:

```
ID > Classe > Elemento
```

| Seletor | Especificidade |
|---|---|
| `p` | baixa |
| `.destaque` | média |
| `p.destaque` | média-alta |
| `#sobre` | alta |
| `#sobre p.destaque` | muito alta |

---

## Dicas de layout

1. **Uma seção por assunto** — não misture temas dentro de um mesmo `<section>`.
2. **Hierarquia de títulos** — `<h1>` uma vez (título da página), depois `<h2>` por seção, `<h3>` para subseções.
3. **Não use `<div>` quando existe uma tag semântica** — prefira `<section>`, `<article>`, `<nav>`.
4. **IDs para âncoras, classes para estilos** — separa responsabilidades e evita conflitos.
5. **Nomes descritivos** — `class="card-projeto"` é melhor que `class="box1"`.
6. **CSS externo sempre** — nunca coloque estilos inline (`style="..."`) em produção; fica impossível de manter.

---

## Arquivos desta aula

| Arquivo | O quê é |
|---|---|
| `aula_html_estrutura.pptx` | Slides da aula |
| `index.html` | Exemplo completo com todos os conceitos comentados |
| `style.css` | CSS de exemplo com seletores e especificidade explicados |
