import React from "react";
import Ex011ExercicioLogin from "@/componentes/Ex011ExercicioLogin";
import Ex011Menu from "@/componentes/Ex011Menu";

const pageExercicio = () => {
  return (
    <div>
      <Ex011Menu />
      <h1>Login</h1>
      <Ex011ExercicioLogin />
    </div>
  );
};

export default pageExercicio;
