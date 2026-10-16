# NEWS. — O jornal do seu dia

Jornal digital responsivo com **50 notícias do Brasil e do mundo**, publicado no GitHub. Seu conteúdo é atualizado **somente quando solicitado pelo usuário no ChatGPT**, e não automaticamente.

## Edição publicada

**16 de outubro de 2026** — 50 notícias reunidas em dez editorias: Brasil, Mundo, Política, Economia, Tecnologia, Saúde, Ciência, Esportes, Cultura e Televisão.

As notícias foram selecionadas de fontes identificadas, incluindo Agência Brasil, Reuters, Associated Press, Folha, UOL e The Guardian. Incluem fatos publicados entre 10 e 16 de outubro, com predominância de notícias de 15 e 16 de outubro, por relevância e contexto.

**Os textos do NEWS são sínteses autorais editoriais, e não reproduções integrais dos veículos de origem.** Cada notícia oferece link direto para a fonte consultada, a data dessa publicação e um resumo contextualizado. Imagens de banco de imagens são **meramente ilustrativas**, sem representar os eventos noticiados.

## Estrutura da aplicação

- `index.html`: capa editorial, CSS responsivo, filtros por editoria, busca, leitor e modo noturno.
- `data.js`: edição vigente com 50 títulos, resumos, textos editoriais originais, data de origem, fonte e URL.
- `README.md`: documentação e procedimento editorial.

A aplicação suporta textos de leitura em tela inteira, aumento e redução da fonte, barra de progresso e matérias favoritas guardadas localmente no dispositivo.

## Publicação (GitHub Pages)

O código está na branch `main`. Para publicar:
1. Acesse **Settings → Pages** neste repositório.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione **main** e **/(root)** e salve.
4. Acesse **https://pscfredteixeira.github.io/News/** quando o GitHub Pages indicar que foi publicado.

## Atualização sob demanda

Peça em uma conversa com o ChatGPT: **“Atualize o NEWS com as 50 principais notícias de hoje e publique no meu repositório.”**

Procedimento editorial:
1. Consultar fontes recentes e confiáveis, confirmar datas e notícias.
2. Priorizar relevância e diversidade de assuntos, separar acontecimentos de opinião, evitar duplicidades.
3. Redigir textos originais de contextualização, com atribuição e links às reportagens originais.
4. Preferir fotografias com licença compatível ou imagens de ambientação claramente identificadas como ilustrativas.
5. Atualizar apenas o arquivo de dados; preservar o layout e as funcionalidades.
6. Conferir as 50 notícias, metadados e sintaxe antes do commit.

Não reproduzir na íntegra textos jornalísticos ou fotografias protegidos por direitos autorais sem licença ou autorização. Informações publicadas são um retrato da data de atualização, não um acompanhamento em tempo real. O jornal não coleta dados de notícias automaticamente.

## Formato de artigo

```js
{
  id: 1,
  category: "Brasil",
  title: "Título original do NEWS",
  summary: "Abertura original sobre fato verificado.",
  image: "https://...",
  imageAlt: "Imagem ilustrativa da editoria Brasil",
  readMinutes: 3,
  date: "2026-10-16",
  sourceName: "Veículo consultado",
  sourceUrl: "https://fonte-original...",
  body: [
    "Parágrafo original de contextualização.",
    "Parágrafo original com fatos atribuídos.",
    "Parágrafo sobre consequências e próximos desdobramentos."
  ]
}
```

**Observação editorial:** a leitura de notícias históricas no arquivo é uma funcionalidade futura, não implementada ainda. A edição atual substitui a anterior, mantendo sempre o jornal mais recente disponível.

## Ícone no iPhone (16/10/2026)

Para contornar ícones antigos armazenados pelo Safari, a página usa um `apple-touch-icon` de 180×180 pixels com endereço versionado `news-touch-20261016.png`. A configuração PWA foi revisada. Remova o atalho antigo e adicione novamente pelo Safari (Compartilhar → Adicionar à Tela de Início). Se o ícone não carregar, teste o link direto do PNG no Safari e verifique se o GitHub Pages está publicando a branch `main` em `/ (root)`.
