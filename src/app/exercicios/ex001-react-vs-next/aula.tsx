// React vs Next

// React (biblioteca)
// - Executa no navegador (client)

// - Serve páginas que são populadas pelo JavaScript

// - Pode impactar negativamente o SEO

// - Depende de plugins (react-router)

// - Deploy pode ser feito em qualquer hospedagem

//---------------------------------------------------------

// Next (framework)
// - Executa no navegador (client) e no servidor (server)

// - Serve páginas já renderizadas no servidor (SSR)

// - Pode melhorar o SEO e o carregamento inicial

// - Tenta ser uma solução completa (rotas, API, etc)

// - É um framework, logo te dá mais regras

// - Deploy deve ser feito em um servidor Node.js
// Bugs, mudanças e atualizações

// Basicamente quando se executa o código no navegador (client) o que geralmente acontece é que o user entra em uma pagina web em que nela, vai ter um arquivo JS que vai gerar toda a pagina pro user.

// O que é SEO ? SEO (Search Engine Optimization ou Otimização para Motores de Busca), é o conjunto de técnicas utilizadas para melhorar o posicionamento de um site nas páginas de resultados dos motores de busca, como o Google.
// É a engine que verifica um site para decidir se faz com que ele apareça nos primeiros resultados de uma busca (no google por exemplo), atraindo mais visitantes orgânicos (isto é, sem pagar por anúncios).

// porque o React pode impactar negativamente o SEO? Porque ao quando o user entrar na pagina o JS vai gerar a pagina com as informações, o que significa que não haviam informações alí antes do user entrar, e se não haviam informações antes do user entrar o SEO leu a pagina e não viu nada/pouca coisa e rankeou mal a pagina.

// O React também depende de plugins como o react-router para criar rotas, porque o React foi criado para ser apenas uma biblioteca para faciliar a sincronização de um estado/state em interfaces. E isso pode ser negativo porque vai que o React lança uma nova versão, ex: React 19 e o react-router não esteja atualizado para essa versão, você fica dependendo de um plugin que ainda não atualizou.

// Já no Next,ele executa código tanto no navegador (no client, ussi é, quando o user abre a pagina web lá no pc dele), quanto no servidor (server), que é o diferencial porque pode executar no servidor o código e já servir no cliente o html renderizado. E não esperar o user entrar na pagina para executar o JS.

// Isso pode melhorar o SEO, poque como o código é executado no server e já serve a página em html, renderizada, o SEO lê todo o conteúdo que tem alí e como tem mais conteúdo já fica melhor rankeado.

//obs: o google diz que o SEO tem capacidade de ler depois que o JS executa mas nunca apresentaram provas e na comunidade é entendido que o Next é melhor para SEO.

// Mas independente do SEo, temos o segundo ponto que é até mais importante que é o carregamento. Porque em Next o código executa no server e já serve no client renderizado, ou seja, ele já abre com o conteúdo, ao invés do React que manda primeiro o HTML e depende da execução do JS e aí então mostrar o conteúdo pro cliente, o que acaba fazendo com que o Next seja mais rápido.

//obs: por isso que antigamente o pessoal batia na tecla de ter o conteúdo todo colocado no HTML e não depender tanto do JS para mostrar mas apenas para animar e faziam testes desativando o JS da página, tudo isso por conta do SEO, porque o conteudo estando ompleto em HTMl o SEO conseguiria ler tudo pois primeiro é servido o HTML e depois que o jS executa.

// React x Next - Resumo
// Ou seja, o Next acaba tendo mais visibilidade SEO, sendo mais rápido e por ser um framework, o Next tenta ser uma solução completa e por isso já possui nativamente integrado uma maneira de lidar com rotas, api's, middlewares etc.

// Por ser mais completo e complexo, acaba te dando mais regras o que facilita o caminho com uma 'metodologia' a seguir. ex: como devo lidar com rotas? uso esse pluguin ou esse outro. Não, o Next já fornece tudo nativo e já tem uma maneira clara de como usar a rota, porque possui a regra de criar dentro de app uma pasta chamada page e pronto. O lado negativo é que se seu app fugir das regras do Next, pode se tornar mais dificil o desenvolvimento dele.

//o Deploy (subir um site no ar), no next precisa ser feito em um servidor que tenha Node, já que vai executar no server/backend. (isso já é facilitado pela empresa que criou o next, a vercel). O react tem mais liberdade para faer deploy

// bugs: como o next é mais complexo acaba tendo mais bugs que o react que possui basicamente 0 bugs.

// Exemplos:

// React:
// import React from "react";

// export default function ClientPage() {
//   const [produtos, setProdutos] = React.useState(null);

//   React.useEffect(() => {
//     async function getProdutos() {
//       const response = await fetch("https://api.origamid.online/produtos");
//       const body = await response.json();
//       setProdutos(body);
//     }
//     getProdutos();
//   }, []);

//   return (
//     <main>
//       <h1>Client</h1>
//       {produtos &&
//         produtos.map((produto) => <li key={produto.id}>{produto.nome}</li>)}
//     </main>
//   );
// }

// Next:
// export default async function ServerPage() {
//   const response = await fetch("https://api.origamid.online/produtos");
//   const produtos = await response.json();

//   return (
//     <main>
//       <h1>Server</h1>
//       {produtos.map((produto) => (
//         <li key={produto.id}>{produto.nome}</li>
//       ))}
//     </main>
//   );
// }
