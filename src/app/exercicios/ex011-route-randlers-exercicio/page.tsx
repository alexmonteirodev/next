import React from "react";

const pageRouteHandlerExercicio = () => {
  return (
    <div>
      <div style={{ lineHeight: "2rem" }}>
        <h1>Exercicio:</h1>
        <br />- Crie uma rota chamada api/login <br />- A rota deve receber um
        username e password via POST <br />- Utilize a api
        https://api.origamid.online/conta/login <br />- Envie o username e
        password para a api e salve o token de acesso nos cookies (httpOnly){" "}
        <br />- A rota deve retornar se o login foi bem sucedido ou não <br />-
        Crie um formulário usando client components para fazer o login <br />-
        Diretamente no server component, faça um fetch para a api de perfil{" "}
        <br />- Utilize a api https://api.origamid.online/conta/perfil <br />-
        Use o token de acesso salvo nos cookies para fazer a requisição (header{" "}
        <br />- Authorization: Bearer token) <br />- Modifique o menu para
        mostrar o nome do usuário logado <br />- Se o usuário não estiver
        autorizado, mostre um link para a página de login no menu
      </div>
    </div>
  );
};

export default pageRouteHandlerExercicio;
