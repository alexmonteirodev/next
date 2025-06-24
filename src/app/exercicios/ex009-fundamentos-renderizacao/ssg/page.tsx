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

const pageRender = async () => {
  //sem revalidate
  const r = await fetch("https://api.origamid.online/acoes/lua", {
    cache: "force-cache", // força a cache estática, porque se nao para o exemplo nao funcionaria pq o next unifica as url's
  });
  const data: DataAcao = await r.json();

  //com revalidate
  const rRevalidate = await fetch("https://api.origamid.online/acoes/lua", {
    next: {
      revalidate: 5,
    },
  });
  const dataRevalidate: DataAcao = await rRevalidate.json();

  return (
    <div>
      <p>
        Certifique-se de ter feito a build e o npm run start para ver a
        diferença
      </p>
      <div>
        <h1>Sem Revalidate</h1>
        <h2>{data.simbolo}</h2>
        <h3>R$ {data.preco_anterior}</h3>
        <p>{data.atualizada}</p>
      </div>
      <div>
        <h1>Com Revalidate</h1>
        <h2>{dataRevalidate.simbolo}</h2>
        <h3>R$ {dataRevalidate.preco_anterior}</h3>
        <p>{dataRevalidate.atualizada}</p>
      </div>
    </div>
  );
};

export default pageRender;

//repare que o código acima atualiza o fetch toda vez que atualizamos a página, até ai, ok. O problema é que estamos em ambiente de desenvolvimento. Quando fazemos a build da pagina e damos npm run start, ao atualizar esta página o next não atualiza/renderiza a page com os novos dados (data e preço), porque a ultima build guardou os dados de quando a build foi feita e são esses dados que vão ser mostrados.

// para renderizar os dados mesmo tendo buildado e com o npm run start, podemos usar o revalidate, com ele é possível dizer para o next renderizar/atualizar a informação x, no caso o fetch, a cada x tempo.
