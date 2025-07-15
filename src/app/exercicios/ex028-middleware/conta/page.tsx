import React from "react";

const page = () => {
  return (
    <div>
      <h1>Conta</h1>
      <p>
        note que o middleware é ativado quando digitamos /entrar no pathname ele
        redireciona para a page login caso nao tenha nenhum token registrado nos
        cookies e caso haja, ele entra na conta
      </p>
    </div>
  );
};

export default page;
