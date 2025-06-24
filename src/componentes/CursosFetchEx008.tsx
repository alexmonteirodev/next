import React from "react";
import Link from "next/link";

export type AulasType = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export type Cursos = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas?: AulasType[];
};

export const CursosFetchEx008 = async () => {
  const r = await fetch("https://api.origamid.online/cursos");
  const json: Cursos[] = await r.json();
  return (
    <ul>
      {json.map((curso) => (
        <li key={curso.id}>
          <Link href={`./cursos/${curso.slug}`}>{curso.nome}</Link>
        </li>
      ))}
    </ul>
  );
};
