import { ProdutosData } from "@/actions/ex015-post";

export default async function ProdutosPage() {
  const r = await fetch("https://api.origamid.online/produtos", {
    next: {
      // revalidate: 5, // atualiza tbm caso alguem adicione algo na api por outra via
      tags: ["produtos"],
    },
  });
  const data: ProdutosData[] = await r.json();
  return (
    <main>
      <h1>Produtos</h1>
      {data.map((produto) => (
        <li key={produto.id}>
          {produto.nome}:{" "}
          {produto.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "brl",
          })}
        </li>
      ))}
    </main>
  );
}
