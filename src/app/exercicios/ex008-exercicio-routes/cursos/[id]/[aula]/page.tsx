import { AulasType } from "@/componentes/CursosFetchEx008";
import React from "react";
type AulaParams = {
  params: {
    id: string;
    aula: string;
  };
};
const pageAula = async ({ params }: AulaParams) => {
  const { id, aula } = await params;

  const r = await fetch(`https://api.origamid.online/cursos/${id}/${aula}`);
  const json: AulasType = await r.json();
  return (
    <div>
      <h1>pageAula</h1>
      <div>
        <h2>{json.nome}</h2>
        <p>Descrição: {json.descricao}</p>
        <p>Tempo: {json.tempo}</p>
      </div>
    </div>
  );
};

export default pageAula;
