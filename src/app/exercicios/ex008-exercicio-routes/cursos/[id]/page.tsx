import React from "react";
import { Cursos } from "@/componentes/CursosFetchEx008";

type PageParams = {
  params: {
    id: string;
  };
};

const pageCadaCurso = async ({ params }: PageParams) => {
  const { id } = await params;
  console.log(id);

  const r = await fetch(`https://api.origamid.online/cursos/${id}`);
  const data: Cursos = await r.json();
  console.log(data);

  return (
    <div>
      <div>
        <h1>pageCadaCurso</h1>
        <p>
          aqui vem um fecth la do componente exportado para mostrar detalhes do
          urso, puxado via params de id{" "}
        </p>
      </div>
      <h1>Curso</h1>
    </div>
  );
};

export default pageCadaCurso;
