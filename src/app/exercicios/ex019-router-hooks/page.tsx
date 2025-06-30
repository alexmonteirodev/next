import NavParams from "@/componentes/NavParams";
import React from "react";

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

type PageParams = {
  params: {
    acao: string;
  };
};

const acoesPage = async ({ params }: PageParams) => {
  console.log(params);
  const r = await fetch(`https://api.origamid.online/acoes/${params.acao}`);
  const acao: Acao = await r.json();
  return (
    <div>
      <NavParams />
      <h1>Ação</h1>
      <h2>{acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      Atualizada: {acao.atualizada}
    </div>
  );
};

export default acoesPage;
