import React from "react";
type DataAcao = {
  atualizada: string;
  descricao: string;
  id: number;
  nome: string;
  preco: number;
  preco_anterior: number;
  simbolo: string;
  vendas: number;
};
const SemRevalidate = async () => {
  //sem revalidate
  const r = await fetch("https://api.origamid.online/acoes/lua");
  const data: DataAcao = await r.json();
  return (
    <div>
      <h1>Sem Revalidate</h1>
      <h2>{data.simbolo}</h2>
      <h3>R$ {data.preco_anterior}</h3>
      <p>{data.atualizada}</p>
    </div>
  );
};

export default SemRevalidate;
