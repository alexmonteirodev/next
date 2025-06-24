import ClientFetch from "@/componentes/ClientFetch";
import ServerFetch from "@/componentes/ServerFetch";
import React from "react";

const pageCsr = () => {
  return (
    <div>
      <p>
        Clique com botão direito em exibir codigo fonte da página, note que o
        SSR carregou o html com as informações e o CSR não, há apenas o script
        que roda no client side.
      </p>
      <h1>SSR - Server side:</h1>
      <ServerFetch />
      <h1>CSR - Client side</h1>
      <ClientFetch />
    </div>
  );
};

export default pageCsr;
