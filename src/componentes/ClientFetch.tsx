"use client";
import React from "react";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};

const ClientFetch = () => {
  const [data, setData] = React.useState<Produto[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      const r = await fetch("https://api.origamid.online/produtos");
      const json: Produto[] = await r.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}> {produto.nome}</li>
      ))}
    </ul>
  );
};

export default ClientFetch;
