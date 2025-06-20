import React from "react";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};

const ServerFetch = async () => {
  const r = await fetch("https://api.origamid.online/produtos");
  const json: Produto[] = await r.json();
  console.log(json); //mostra no terminal

  return (
    <div>
      {json.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default ServerFetch;
