import React from "react";

type PageParams = {
  params: Promise<{
    id: string;
  }>;
};

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};

const produtoPage = async ({ params }: PageParams) => {
  const { id } = await params;
  console.log(id);

  const r = await fetch(`https://api.origamid.online/produtos/${id}`);
  const data: Produto = await r.json();

  return (
    <div>
      <h1>Produto</h1>

      <h2>{data.nome}</h2>
      <h3>
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "brl",
        })}
      </h3>
      <p>id: {id}</p>
      <p>descricao:{data.descricao}</p>
      <p>estoque:{data.estoque}</p>
      <p>importado:{data.importado}</p>
    </div>
  );
};

export default produtoPage;
