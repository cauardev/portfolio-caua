# Portfólio — Cauã Robson

Portfólio estático de **Cauã Robson**, Backend Developer focado no ecossistema Java e Spring com margem a FullStack.

## Páginas

- `index.html`: apresentação profissional e foco atual;
- `tecnologias/`: stack organizada por área;
- `projetos/`: projetos selecionados com links para os repositórios;
- `carreira/`: início prático, trajetória, formação e certificações verificáveis.

## Recursos

- tema claro e escuro com preferência salva no navegador;
- conteúdo completo em português brasileiro e inglês (futuramente em espanhol);
- navegação fixa e indicador de progresso da página;
- animações discretas durante o scroll, respeitando `prefers-reduced-motion`;
- cards com microinterações de hover para mouse e feedback visual de foco;
- layout responsivo para celular, tablet e desktop;
- ícones, bandeiras e fonte de assinatura armazenados localmente.
- navegação compatível com GitHub Pages, Live Server e abertura direta pelo Windows.

## Abrir localmente

Não é necessário instalar dependências para publicar ou visualizar o site. Extraia o ZIP por completo, abra a pasta que contém este `README.md` e clique no arquivo `index.html` da raiz. No VS Code, a opção recomendada é clicar com o botão direito nesse `index.html` e escolher **Open with Live Server**.

Os links usam caminhos explícitos para os arquivos `index.html`, então Home, Tecnologias, Projetos e Carreira também funcionam ao abrir o site diretamente pelo Explorador de Arquivos do Windows. Não abra apenas as pastas `tecnologias`, `projetos` ou `carreira`, pois elas são partes internas do site.

Se preferir usar o servidor de desenvolvimento opcional, abra o terminal na pasta que contém este `README.md` e o `package.json`:

```bash
npm install
npm run dev
```

## Alterar o CSS

O arquivo final `assets/css/styles.css` já está compilado. Use npm apenas depois de alterar `src/input.css` ou adicionar classes do Tailwind aos arquivos HTML:

```bash
npm install
npm run build:css
```

## Certificações

Os certificados publicados ficam em `assets/certificates/` e são abertos diretamente pelos cards da página de carreira.

## Publicar no GitHub Pages

Envie o conteúdo desta pasta para a raiz do repositório `cauardev/portfolio`. Em **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)`.

```text
https://cauardev.github.io/portfolio/
```

## Stack

- HTML5 semântico;
- Tailwind CSS;
- JavaScript vanilla;
- GitHub Pages.

Ícones de marca: [Simple Icons](https://simpleicons.org/) e [Iconify Logos](https://icon-sets.iconify.design/logos/). Bandeiras: [flag-icons](https://github.com/lipis/flag-icons). Fonte de assinatura: [Allura](https://fonts.google.com/specimen/Allura), distribuída sob a SIL Open Font License.
