import Link from "next/link";
import React from "react";

const pageExercicio = () => {
  return (
    <div>
      <h1> Page Exercício</h1>
      <Link href="/exercicios/ex008-exercicio-routes/cursos">cursos</Link>
      <p style={{ lineHeight: "2rem" }}>
        <br /> - Utilize a API: https://api.origamid.online/cursos
        <br /> - Crie uma rota chamada cursos
        <br /> - Crie rotas dinâmicas para os cursos, exemplo: /cursos/html
        <br /> - Crie rotas dinâmicas para as aulas, exemplo:
        /cursos/html/introducao-ao-html
        <br /> - Na página "Cursos", exiba uma lista com todos os cursos
        <br /> - Ao clicar em um curso, mostre uma página com as informações
        deste curso
        <br /> - Na página do curso, exiba uma lista com as aulas do curso
        <br /> - Ao clicar em uma aula, mostre uma página com as informações da
        aula
        <br /> - Esta API funciona via slug, exemplo:
        <br /> - https://api.origamid.online/cursos/html
        <br /> - https://api.origamid.online/cursos/css
        <br /> - https://api.origamid.online/cursos/html/introducao-ao-html
        <br /> - https://api.origamid.online/cursos/html/incorporando-midia
        <br /> - Organize todos os fetchs possíveis em funções dentro de
        api/cursos.ts.
      </p>
    </div>
  );
};

export default pageExercicio;
