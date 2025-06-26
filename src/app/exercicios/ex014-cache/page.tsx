type Acao = {
  id: number;
  preco_anterior: number;
  preco: number;
  simbolo: string;
  nome: string;
  descricao: string;
  vendas: number;
  atualizada: string;
};

export default async function cachePage() {
  const r = await fetch("https://api.origamid.online/acoes/lua", {
    next: {
      revalidate: 0,
    },
  });
  const data: Acao = await r.json();
  console.log(data);
  return (
    <main>
      <h1>Ex014-cache</h1>
      <h2>{data.nome}</h2>
      <p>Preço: {data.preco}</p>
      <p>Atualizada: {data.atualizada}</p>
    </main>
  );
}
