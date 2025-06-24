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

// temos que entender que existem conceitos de renderização na programação, vamos abordar 3 deles (4 porque isr é um subconceito do ssg):

// - SSG (Static Site Generation)

// O Next.js gera uma página estática (.html) da página no momento da build.

// Incremental Static Regeneration (ISR)

// Se a página possuir dados dinâmicos o Next irá renderizar uma nova versão da página no servidor, quando os dados forem revalidados.

// a pergunta que fica é, caso tenha gerado a build de uma página, por exemplo a de cursos do ex008. Caso entre um curso novo na Api, o next vai renderizar outra vez para atualizar a informação ou como ele já fez a build o novo curso simplesmente não vai aparecer?

// do jeito padrão, o curso novo não vai aparecer, o next vai manter o mesmo html gerado na build. Porém podemos indicar pro next que um elemento tem que ser revalidado a cada 10 segundos por exemplo. E então o next a cada 10 segundos vai verificar se existe algo novo, se existir, ele gera um novo html. Para isso, utilizamos o revalidate.

//ver exemplo pasta SSG

// basicamente é a pagina que é gerada no build, não muda a menos que utilize o ISR (revalidate)

//para recordar:
// •	A página é gerada 1 vez, durante o build (npm run build)
// •	O conteúdo não muda a cada acesso, (a menos que use o ISR)
// •	É como se você tirasse uma “foto” da página e colocasse no servidor.

//----------------------------------------------------------------------

// - SSR (Server Side Rendering)
// O processo de renderização no servidor ocorre tanto para páginas estáticas quanto para páginas dinâmicas.

// Porém as dinâmicas são renderizadas em todos os acessos.

// se reparar, na pasta next > server > app > exercicios , vai ver que as pastas dinamicas como na pastas [id] e [aula] do ex008, não possuem html renderizado, porém se formos na web e acessar elas e no botão direito exibir o código fonte, vai estar lá o html, por conta do ssr, porque elas renderizam no server que é uma das principais características do next.

//basicamente é a mudança que o next trás, renderizar no server

//para recordar:
// •	A página é gerada no servidor a cada requisição
// •	O conteúdo pode mudar o tempo todo
// •	É como se você montasse a página na hora, para cada visitante.
//----------------------------------------------------------------------

// - CSR (Client Side Rendering)
// O CSR ocorre quando parte da página é renderizada no cliente. Essa é a forma como os SPA's (Single Page App) funcionam. Isso pode garantir dados atualizados e um rápido carregamento inicial.

// Porém pode afetar o SEO, acessibilidade e a experiência do usuário (UX):
// isso, porque quando o carregamento é feito do lado do client, em um app react por exemplo, o user tem que esperar carregar a pagina e depois que entra esperar novamente o carregamento para as informações serem puxadas. Basicamente tem que esperar um duplo carregamento isso pode fazer que o site fique mais lento, nao tenha renderizado as infos porque o arquivo é basicamente JS e só depois que o user entrar é que vai carregar, ou seja, é ruim pra SEO e prejudica a UX.

// se olhar na pasta do next depois da build vai notar que as infos não estão no hmtl, porque essa renderização é feita do lado do cliente

//basicamente é o que o react faz, renderizar no client

//um lado bom do client side é que a informação sempre é a mais atualizada porque ele faz a requisição na hora que o cliente entra na pagina, porém tbm é a mais lenta, por isso vai depender o tipo de informação que vc vai usar.
//----------------------------------------------------------------------

// RESUMO
// SSG X SSR X CSR - o que muda é quem monta a página e quando

// Tipo -- Onde o HTML é montado? -- Quando é montado? -- Exemplo clássico

// SSG --- No build (servidor) --- Antes do deploy --- Blog, landing page
// SSR ---- No servidor ---------- A cada acesso ----- Dashboard, perfil
// CSR - No navegador do usuário - Depois do carregamento - SPA, interações dinâmicas
