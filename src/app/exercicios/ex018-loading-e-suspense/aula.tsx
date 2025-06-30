// - Loading
// Envolve o conteúdo de page.tsx em um <Suspense> e utiliza o corpo do loading.tsx como fallback.

// app/produtos/loading.tsx
// export default function Loading() {
//   return <div>Carregando...</div>;
// }

//porém ao usar a loading.tsx, ela é relacionada a pagina inteira então, eu é interessante usar o suspense, para poder englobar uma parte da paginda/componente e informar que apenas aquele componente vai ficar carregando, e não a pagina inteira.
//--------------------------------------------------------------------
// - Suspense
// Podemos usar o <Suspense> para envolver o componente que está sendo carregado de forma assíncrona. Assim temos maior controle sobre a página.

// O filho do <Suspense> é carregado via Streaming Server Rendering. Enquanto o carregamento ocorre, o fallback será exibido.

import ProdutosLista from "@/components/produtos-lista";
import { Suspense } from "react";

export default async function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>
      <Suspense fallback={"Carregando..."}>
        <ProdutosLista />
      </Suspense>
    </main>
  );
}

//o suspense aqui no next é interessante pelo fato de puxar pelo server, então ele renderiza o conteudo no código fonte o que é super bom para o SEO, coisa que não acontece no react
