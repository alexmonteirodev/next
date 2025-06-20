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
//---------------------------------------------------------------------------------

// - Nested Components
//componente dentro de componente, como funciona?
// Server Components podem conter Client e Server Components, mas Client Components não podem conter Server Components.

// Evite definir páginas (page.tsx) como Client Components, mantenha elas sempre como Server Components, assim elas podem receber Server e Client Components.

//se precisar de uma page que seja client, crie um componente
//---------------------------------------------------------------------------------

// - Pré-renderização
// Client Components são pré-renderizados no servidor, durante a pré-renderização, não temos acesso a APIs web como window e document. Por isso erros como document is not defined podem ocorrer.

// é dizer, se tenho um componente que diz: <h2>largura total da tela: {total}</h2>, o h2 está renderizado no servidor, ou seja, ja faz parte do backend, então se desabilitarmos o JS na pagina, vai continuar aparecendo o h2, poruqe o total vai ficar em 0, porque isso sim era calculado via JS.

// Se o código estiver dentro do useEffect, ele só será ativado no cliente, por isso não teremos problemas. Mas códigos fora do useEffect podem causar erros.
//ex: se em um componente vc escrever console.log(document.documentElement.clientWidth), vai dar um erro 'document is not defined', porque vc está rodando código no server e é como se ele buscasse esse comando dentro do node, o que não existe, só existe no browser, porém quando o código está dentro de um useEffect ele renderiza no client, por isso funciona dentro do useEffect.
//obs: fica atendo quando importar algo ou usar um hook, porque caso essa importacao vá utilizar de cara algum elemento da API web como document, vai dar erro por estar fora do effect. Ex:
//const [largura, setLargura] = React.useState(documentElement.clientWidth) //erro

//caso precise usar algo da Api web fora do effect, da pra desabilitar a pré-renderização daquele código em específico da pra usar o 'dynamic', funcionalidade nativa do Next e desabilita a pre-renderização (ssr: false)
// solução de importação:

import dynamic from "next/dynamic";

export const Width = dynamic(() => import("@/components/width"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Width />
    </main>
  );
}
//---------------------------------------------------------------------------------
// EXERCÍCIO:
// - Crie uma página `/imc`
// - Crie um link para a página
// - Crie um componente para fazer o cálculo do IMC
// - O componente deve conter inputs (altura e peso) e um botão calcular
// - Ao clicar em calcular, deve mostrar o IMC na tela
// - Índice de Massa Corporal = peso / altura * altura

// Entendendo o erro de hidratação:

// No Next.js com App Router, os componentes são primeiro renderizados no servidor (SSR) e depois reativados no cliente (hidratação). Se a renderização do servidor e do cliente não bater exatamente, ocorre um erro de hidratação.
