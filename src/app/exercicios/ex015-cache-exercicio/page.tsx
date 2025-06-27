import Link from "next/link";

export default async function cacheExercicioPage() {
  return (
    <main>
      <h1>Ex015-cache-exercicio</h1>
      <nav>
        <ul style={{ display: "flex", gap: "2rem" }}>
          <li>
            <Link href="/exercicios/ex015-cache-exercicio">Home</Link>
          </li>
          <li>
            <Link href="/exercicios/ex015-cache-exercicio/produtos">
              Produtos
            </Link>
          </li>
          <li>
            <Link href="/exercicios/ex015-cache-exercicio/produtos/adicionar">
              Adicionar Produto
            </Link>
          </li>
        </ul>
      </nav>
      <p style={{ lineHeight: "2rem" }}>
        <br />- Criar as rotas /produtos e /produtos/adicionar <br />- Na rota
        /produtos, faça um fetch para https://api.origamid.online/produtos e
        mostre a lista de produtos <br />- Na rota /produtos/adicionar, crie um
        formulário para adicionar um produto. <br />- Crie uma server action que
        faz um fetch POST para https://api.origamid.online/produtos <br />- O
        POST deve possuir o tipo Produto abaixo, sem id <br />- Quando o produto
        for adicionado, revalide a rota /produtos <br />- Após revalidar,
        redirecione para a rota /produtos
      </p>
    </main>
  );
}
