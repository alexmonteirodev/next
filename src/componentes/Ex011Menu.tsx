import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const Ex011Menu = async () => {
  let conta = {
    autorizado: false,
    usuario: "",
  };
  const token = (await cookies()).get("token")?.value;

  const r = await fetch("https://api.origamid.online/conta/perfil", {
    headers: { Authorization: "Bearer " + token },
  });

  conta = await r.json();
  return (
    <div>
      <ul style={{ display: "flex", gap: "3rem" }}>
        <li>
          <Link href="/exercicios/ex011-route-randlers-exercicio">
            Exercicio
          </Link>
        </li>
        <li>
          {conta.autorizado ? (
            conta.usuario
          ) : (
            <Link href="/exercicios/ex011-route-randlers-exercicio/login">
              Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Ex011Menu;
