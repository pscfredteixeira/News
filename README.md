# NEWS. — O jornal do seu dia

Protótipo de um jornal digital responsivo, concebido para receber **edições sob demanda** produzidas com curadoria assistida.

## Versão atual: edição zero
- Capa editorial com manchete, destaques, fotografias e editorias.
- **50 artigos demonstrativos** (10 editorias, cinco pautas por editoria).
- Leitor interno com texto completo de demonstração, ajuste da fonte e barra de progresso.
- Busca por títulos e assuntos, filtros por editoria e botão para carregar mais.
- Favoritos armazenados somente no navegador em uso.
- Modo noturno, layout adaptado para celular.
- HTML, CSS e JavaScript puros, sem backend.

**Atenção:** a edição zero não é um boletim de notícias reais. Os títulos, chamadas e textos são exclusivamente ilustrativos e não devem ser interpretados como fatos apurados.

## Publicar com GitHub Pages
1. Abra o repositório **News** → **Settings** → **Pages**.
2. Na seção **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch **main**, pasta **/(root)**, e clique em **Save**.
4. Após a publicação, o endereço esperado é **https://pscfredteixeira.github.io/News/**.

Como o site usa arquivos estáticos, novas alterações na branch `main` serão publicadas pelo GitHub Pages sem serviço externo.

## Atualização sob demanda
Quando quiser a próxima edição, peça ao ChatGPT: **"Atualize o NEWS com as 50 notícias mais relevantes de hoje e publique no GitHub."**

O fluxo editorial previsto é:
1. Pesquisar notícias atuais em veículos identificados, cobrindo Brasil e mundo, e verificar data, autoria e relevância.
2. Escolher até 50 pautas, reduzir duplicações e conferir diferentes fontes.
3. Redigir textos **originais** de contextualização e síntese jornalística, com referência e link da reportagem original.
4. Atualizar o arquivo `data.js` com data, título, resumo, editoria, imagem licenciada/créditos, corpo do texto e URL da fonte.
5. Fazer commit no GitHub, mantendo `index.html` como modelo de design.

**Direitos autorais:** não republicar integralmente artigos protegidos de outros veículos sem licença/autorização. O site deve usar textos originais baseados em apuração e fontes, com links para a matéria original. Uma eventual licença ou publicação em domínio público permite regras diferentes.

## Organização
- `index.html`: apresentação, estilos e interações.
- `data.js`: conteúdo da edição. Substituir a lista de artigos para cada nova edição.
- `README.md`: documentação.

### Estrutura dos itens em data.js
```js
{
  id: 1,
  category: "Brasil",
  title: "Título verificado",
  summary: "Síntese editorial original.",
  image: "https://imagem-licenciada...",
  imageAlt: "Descrição da fotografia.",
  readMinutes: 5,
  date: "2026-10-16",
  sourceUrl: "https://link-direto-para-a-fonte...",
  body: ["Primeiro parágrafo original.", "Segundo parágrafo original."]
}
```
Ao deixar `demo: false`, a interface trata a edição como conteúdo real; a verificação editorial das notícias continua sendo indispensável.

---
Projeto experimental. Publicação e atualização apenas quando solicitadas; não há coleta automática de notícias.
