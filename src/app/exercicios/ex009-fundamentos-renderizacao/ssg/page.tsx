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

// Depois de definido o revalidate, e montado a build, se nota que apenas o valor com o revalidate atualiza ao darmos refresh na pagina, mas temos um porém. No canto superior esquerdo tem uma pasta chamada next, dentro dela vá em: server > app > exercicios > ex009 > ssg.html, esse é o arquivo html gerado pelo next dessa page. Acontece que se reparar, ao dar refresh no browser o valor atualiza para o valor que já está renderizado nessa pagina ssg.html, e por baixo dos panos o next atualiza novamente o valor, ou seja, ao dar o refresh no browser vc sempre está um valor atrás, o que vai funcionar em 95% das aplicações web, porque em sua maioria é pra atualizar uma informação, um produto, comentários ou postagens de foto, porém tem esse 5% que é o nosso caso de agora, porque se eu estou sempre uma atualização atrás, imagine o que aconteceria se fosse um app de cotação de ações na bolsa de valores. As pessoas perderiam dinheiro por falta de uma revalidação adequada.

//então o que acontece é que o valor atualizado vai pro html, mas o que é mostrado é o que já estava lá.

// não é que vc fica sempre uma atualização atrasada é que ao acessar a pagina no browser, o next conta os 5s e vê se tem algo diferente na API, como a resposta é positiva ele já trás a info e atualiza a estrutura html e ao darmos refresh isso se atualiza porém, isso volta a acontecer porque nesse prazo ja se passaram 5s, mas se vc der 2 refreshs em um periodo de 5s ai vc estaria atualizado

//para fazer esse teste abra a api: https://api.origamid.online/acoes/lua de o refresh e veja a mudança no html ao dar o refresh na page do browser (da app).
