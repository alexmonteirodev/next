import React from "react";
type PageParams = {
  params: {
    slug: string[];
  };
};
const pageCursos = async ({ params }: PageParams) => {
  console.log(params); //GET /cursos/html/aulas
  const paramsSync = await params;
  return (
    <div>
      <h1>Cursos</h1>
      <p>{paramsSync.slug.join("/")}</p>
    </div>
  );
};
//page cursos nao existe mas está em slug, então add na url /algo, que vai renderizar a pagina e o console vai imprimir o caminho.

export default pageCursos;
