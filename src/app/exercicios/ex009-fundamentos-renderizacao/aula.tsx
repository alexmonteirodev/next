// - Renderização

// - Build
// O Next.js possui dois ambientes, o de desenvolvimento e o de produção.

// Desenvolvimento: npm run dev.

// Produção: npm run build e npm run start.

// Durante a build, ele verifica erros, gera as rotas e faz o pré-render de páginas estáticas (SSG).

// Ele decide automaticamente qual tipo de renderização será utilizada, isso vai depender do tipo de página, api's utilizadas e configurações.

// ○  (Static)   prerendered as static content
// λ  (Dynamic)  server-rendered on demand using Node.js
//ps: o simbolo de rotas dinamicas mudou, agora é: ƒ

//obs:
// static carrega mais rapido cerca de 5 -10 milisegundos
// Dynamic carrega mais lento cerca de 30-40 milisegundos

// Basicamente paginas estaticas são pré-renderizadas na build e o next já cria um html para cada pagina estatica e as dinamicas não, por isso elas demoram um pouco mais pra carregar. É como se o next deixasse pra carregar elas depois por serem dinamicas.

//resumo:

// Static ○
// - Pré-render de páginas estáticas

// - Gera um arquivo .html para cada página

// - Carregando mais rápido

// X

// Dynamic ƒ
// - Rotas dinâmicas

// - Execução de apis dinâmicas (como useSearchParams)

// - Quando o fetch não possui cache

// - export const dynamic = 'force-dynamic';

// - export const revalidate = 0;

//----------------------------------------------------------------------

// - SSG (Static Site Generation)

// O Next.js gera uma página estática (.html) da página no momento da build.

// Incremental Static Regeneration (ISR)

// Se a página possuir dados dinâmicos o Next irá renderizar uma nova versão da página no servidor, quando os dados forem revalidados.

// a pergunta que fica é, caso tenha gerado a build de uma página, por exemplo a de cursos do ex008. Caso entre um curso novo na Api, o next vai renderizar outra vez para atualizar a informação ou como ele já fez a build o curso simplesmente não vai aparecer?

// do jeito padrão, ele não vai atualizar, vai manter o mesmo html gerado na build. Porém podemos indicar pro next que um elemento tem que ser revalidado a cada 10 segundos por exemplo. E então o next a cada 10 segundos vai verificar se existe algo novo, se existir, ele gera um novo html. Para isso, utilizamos o revalidate.

//ver exemplo SSG
