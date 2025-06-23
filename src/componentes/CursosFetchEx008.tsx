import React from "react";
import Link from "next/link";

export type Cursos = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export const CursosFetchEx008 = async () => {
  const r = await fetch("https://api.origamid.online/cursos");
  const json: Cursos[] = await r.json();
  console.log(json);
  return (
    <ul>
      {json.map((curso) => (
        <li key={curso.id}>
          <Link href={curso.nome}>{curso.nome}</Link>
        </li>
      ))}
    </ul>
  );
};
