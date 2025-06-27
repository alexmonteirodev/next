import { ProdutosData } from "@/actions/ex015-post";

export default async function ProdutosPage() {
  const r = await fetch("https://api.origamid.online/produtos", {
    next: {
      tags: ["produtos"],
    },
  });
  const data: ProdutosData[] = await r.json();
  return (
    <main>
      <h1>Produtos</h1>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </main>
  );
}
