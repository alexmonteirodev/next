// - Not Found
// É uma pagina que criamos que será renderizada toda vez que o usuário tentar acessar um página que não existe

//deve ser criada na raiz do app
// not-found.tsx
// Essa página é renderizada quando a rota não é encontrada (404).

// import Link from 'next/link';

// export default function NotFound() {
//   return (
//     <div>
//       <h2>Página não encontrada</h2>
//       <Link href="/">Volte para a Home</Link>
//     </div>
//   );
// }

//o jeito acima funciona para paginas estaticas mas para rotas dinamicas, o next quando vai buscar em rotas dinamicas ele não sabe se ela existe ou não porque vc disse que é possivel existir ao criar uma rota dinamica, logo, ao tentar acessar uma pagina em uma rota dinamica que não existe, a aplicação (antigamente quebrava, hoje não quebra mais mas não mostra a info apenas o html estatico, fazer o teste com ex008).

//para lidar com rotas dinamicas pode usar um if para verificar se a pagina existe e retornar o notFound que é nativa do next:

// notFound
// A função notFound renderiza a página 404.

// import { notFound } from 'next/navigation';

// const curso = await getCurso(params.curso);
// if (curso?.error) return notFound();

//obs: o ideal seria umar no fetch um try catch e verificar se volta um erro e caso volte, acionar o notFound() mas no nosso exemplo ao acessar um curso que nao existe a propria api ja retorna um erro e acessamos ele via .erro, por isso usamos assim.
