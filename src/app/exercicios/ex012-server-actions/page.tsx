"use client";

import setCookie from "@/actions/set-cookie";
import React from "react";

const PageEx012 = () => {
  const [valor, setValor] = React.useState("");
  async function handleClick() {
    console.log("teste");
    const r = await setCookie("segredo", "123456"); //f do use server sendo usada no client
    console.log(r);
    setValor(r.value);
  }
  return (
    <div>
      <h1>Home: {valor}</h1>
      <button onClick={handleClick}>Definir Cookie</button>
    </div>
  );
};

export default PageEx012;
