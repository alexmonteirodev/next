import React from "react";
import { Cursos } from "@/componentes/CursosFetchEx008";
import Link from "next/link";

type PageParams = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return [{ curso: "html" }, { curso: "css" }];
}

const pageCadaCurso = async ({ params }: PageParams) => {
  const { id } = await params;
  console.log(id);

  const r = await fetch(`https://api.origamid.online/cursos/${id}`);
  const data: Cursos = await r.json();

  return (
    <div>
      <h1>pageCadaCurso</h1>
      <h2>Curso: {data.nome}</h2>
      <h3>Descrição: {data.descricao}</h3>
      <p>
        Este curso possui {data.total_aulas} aulas e {data.total_horas} horas.
      </p>
      <div>
        <p>Temos as seguintes aulas:</p>
        {data.aulas?.map((aula) => (
          <li key={aula.id}>
            <Link href={`./${data.slug}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default pageCadaCurso;
