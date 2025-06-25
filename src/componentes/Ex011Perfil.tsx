import { cookies } from "next/headers";
import React from "react";

const Ex011Perfil = async () => {
  const token = (await cookies()).get("token")?.value;
  console.log(token);

  if (!token) return <p>Token inválido</p>;

  const r = await fetch("https://api.origamid.online/conta/perfil", {
    headers: { Authorization: "Bearer " + token },
  });

  if (!r.ok) return <p>Usuário não autorizado</p>;

  const perfil = await r.json();

  return <p>Bem vindo, {perfil.nome}</p>;
};

export default Ex011Perfil;
