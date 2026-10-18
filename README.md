# NEWS. — O jornal do seu dia

Jornal digital responsivo com **50 notícias do Brasil e do mundo**, publicado no GitHub. Seu conteúdo é atualizado **somente quando solicitado pelo usuário no ChatGPT**, e não automaticamente.

## Edição publicada

**Domingo, 18 de outubro de 2026 — 50 matérias originais de síntese editorial.** Foram selecionadas 34 fontes publicadas em 18/10 e 16 fontes publicadas em 17/10. Todas as matérias têm título, resumo, fonte individual, data original, URL para a reportagem e imagem temática marcada como ilustrativa.

A nova editoria **Música** substitui **Esportes** definitivamente. Nesta edição, são seis matérias de música, incluindo choro brasileiro, Afrobeats, Rebecca Ferguson, ópera, Beatles e Fontaines D.C.

A capa e os dados são publicados sob solicitação, não com atualização automática. O arquivo noticias.json é a fonte principal e data.js a cópia offline; ambas foram sincronizadas. Fotos ilustrativas provêm de URLs do Unsplash, não devem ser tratadas como fotos reais dos acontecimentos. Quando as imagens não carregam, o leitor exibe alternativa e crédito de foto temática. A data da edição é de 18/10 e as publicações de 17/10 conservam sua própria data.

A curadoria da edição buscou materiais da Agência Brasil, The Guardian e Associated Press. Não reproduzir o texto integral de reportagens de terceiros.

## Estrutura da aplicação

- `index.html`: capa editorial, CSS responsivo, filtros por editoria, busca, leitor e modo noturno.
- `data.js`: edição vigente com 50 títulos, resumos, textos editoriais originais, fonte e URL, data da reportagem e metadados de imagens e seus créditos.
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
4. Preferir fotografias diretamente relacionadas à matéria com licença de reutilização compatível, indicação de crédito e legenda honesta; quando a permissão não estiver estabelecida, mostrar arte editorial original, nunca incorporar indiscriminadamente a foto da reportagem.
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

## Correção de fotos no iPhone

A partir da versão `photos3`, o aplicativo tem uma foto associada a cada notícia. As imagens são externas (origem e direitos preservados). O JavaScript tenta uma foto alternativa quando o servidor da fonte não carrega; os créditos acompanham a imagem exibida. O service worker da PWA passou para `news-app-v3-photos`, com buscas de arquivos locais que priorizam a rede e um cache offline apenas como reserva. Caso um ícone do iPhone exiba a versão antiga, feche e reabra o app; se necessário, remova o atalho e adicione-o novamente no Safari.

## Diretriz editorial válida a partir de 17/10/2026

**Substituir a editoria Esportes por Música.** A editoria Música será permanente nas próximas edições e deve cobrir lançamentos de discos e singles, artistas brasileiros e internacionais, shows, turnês, festivais, bastidores e indústria musical. Não reservar vagas para Esportes nas 50 pautas, salvo pedido explícito do usuário. Manter o total de 50 matérias, os links das fontes, fotos com direitos compatíveis e o design responsivo. **Atualizações completas de notícias continuam somente sob pedido**, sem coleta automática diária. A edição de 16/10/2026 pode permanecer intacta até a mudança programada para 17/10/2026.

## Arquitetura JSON (17/10/2026)

O arquivo `noticias.json` é a fonte principal da edição: contém metadados e exatamente 50 objetos `articles`, no mesmo esquema anterior de `window.NEWS_DATA`. O `index.html` carrega o JSON com `fetch` sem cache, verifica a quantidade e campos essenciais e somente então renderiza o jornal. Se o JSON falhar, `data.js` permanece como cópia de segurança para uso offline. O service worker inclui `noticias.json` no cache offline, priorizando a rede.

**Atualização editorial:** pesquisar e verificar as 50 pautas; editar somente `noticias.json`, conservando os IDs, fontes, datas, links, créditos e categorias; validar JSON e 50 artigos antes do commit. O site não busca notícias automaticamente: a publicação continua exclusivamente sob pedido. Para restaurar a edição de reserva, atualizar também `data.js` após uma edição completa validada. Evitar datas de edição enganosas quando houver notícias antigas.

## Publicação de 18/10/2026

Mudanças: 50 notícias substituídas, 50 URLs específicas, 34 publicações datadas de 18/10 e 16 de 17/10, seis pautas de Música e nenhuma de Esportes. Atualizados noticias.json, data.js, capa HTML, metadados e service worker news-app-v7-20261018. Se o aplicativo no iPhone exibir edição antiga, reinicie o atalho e confira o JSON diretamente pelo navegador. O cache prioriza acesso à rede com cópia offline.
