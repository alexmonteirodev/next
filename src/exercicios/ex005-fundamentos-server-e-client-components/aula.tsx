// - Server e Client Components

// - Server Components
// Possuem acesso a API do servidor (Node) como o fs, path, e outras implementadas pelo Next.js como o fetch e cookies. Renderizam no servidor.

// Por padrão, todos os componentes são Server Components. Ex:

// page.tsx -> server component
export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}

//exemplo usando api de node para criar uma pasta e adicionar os acessos à página, coisa que só daria pra fazer em backend, mas como por padrão os componentes são server, temos acesso:

// @/component/acessos -> server component
import fs from "fs/promises";

export default async function Acessos() {
  await fs.appendFile("acesso.txt", `${Date.now()} `, "utf8");
  const data = await fs.readFile("acesso.txt", "utf8");

  return <div>{data}</div>;
}
//---------------------------------------------------------------------------------

// - Client Components
// Possui acesso as APIs web como window e document, bem como as APIs do Next.js e do React, como useState e useEffect. Continuam sendo pré-renderizados no servidor, mas são "hidratados" (Hydration) no cliente.

// Para definir um componente como Client Component, basta adicionar 'use client' na primeira linha do componente.

//  Por padrão, todos os componentes são Server Components, para tornar o componente client, basta usar a string 'use client' no inicio co componente:

("use client");
import React from "react";

export default function Width() {
  const [ativar, setAtivar] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2 style={{ color: ativar ? "#680" : "#b00" }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setAtivar((b) => !b)}>Click</button>
    </div>
  );
}

// agora usando um client component você tem acesso a toda a API web: document, window, api's do react (useState, useEffect...), tudo que vc já está acostumado a usar.

//obs: components do tipo servidor deixam importar components do tipo client. Já o Cliente não deixa importar do tipo server. (pq o client não tem acesso ao server)
