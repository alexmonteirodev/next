// - Router Hooks

//se é um hook tem ser no 'use client'

// - useParams
// params da acesso às páginas dinâmicas
// O hook useParams retorna um objeto com os parâmetros da URL. /cursos/[curso]/[aula] retorna {curso: 'react', aula: 'hooks'}.
//útil para ter acesso ao params das paginas dentro de componentes externos 'use client'

// 'use client';
// import { useParams } from 'next/navigation';

// const params = useParams();
// params.curso; // 'react'
// params.aula; // 'hooks'

//ex: ver page ex019 e componente NavParams
//--------------------------------------------------------------------------

// - usePathname
// usePathname retorna a URL atual, e geralmente é utilizado para identificar mudanças na rota (navegação).

// 'use client';
// import { usePathname } from 'next/navigation';

// const pathname = usePathname();

// React.useEffect(() => {
//   console.log('Rota mudou');
// }, [pathname]);
//--------------------------------------------------------------------------

// - useRouter
// useRouter dá acesso ao objeto router do Next.js, que possui métodos para navegação, pré-carregamento, voltar, avançar e recarregar a página.

// 'use client';
// // cuidado não é de: import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';

// const router = useRouter();

// router.push('/produtos'); // navega para a página de produtos
// router.prefetch('/produtos'); // pré-carrega a página de produtos
// router.back(); // volta (histórico)
// router.forward(); // avança (histórico)
// router.refresh(); // recarrega as rota, busca dados novamente no servidor (revalidate: 5)

//obs: router.push é bem útil por exemplo: depois que a pessoa fizer o login eu dou um push pra pagina do usuario.

// Diferença de usar o redirect é que o redirect é no servidor e essa é no client
//--------------------------------------------------------------------------

// - useSearchParams
// O hook useSearchParams retorna um objeto com os parâmetros de busca da URL. /produtos/?busca=camisa retorna {busca: 'camisa'.

// 'use client';
// import { useSearchParams } from 'next/navigation';

// export function Busca() {
//   const searchParams = useSearchParams();
//   const busca = searchParams.get('busca');
//   return <div>Busca: {busca}</div>;
// }

// // precisa envolver em suspense, pois durante a pré-renderização não termos acesso aos valores de busca
// <Suspense fallback={'Carregando...'}>
//   <Busca />
// </Suspense>;
