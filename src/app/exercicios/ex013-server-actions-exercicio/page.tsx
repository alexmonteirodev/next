import Link from "next/link";
import React from "react";

const page013 = () => {
  return (
    <div>
      <h1>Exercício</h1>
      <ul>
        <li>
          <Link href="/exercicios/ex013-server-actions-exercicio">
            exercicio
          </Link>
        </li>
        <li>
          <Link href="/exercicios/ex013-server-actions-exercicio/login">
            login
          </Link>
        </li>
      </ul>
      <div style={{ lineHeight: "2rem" }}>
        <br />- Crie uma ação que faça o login na API
        https://api.origamid.online/conta/login
        <br />- A ação deve receber nome e senha como parâmetro
        <br />- Crie um formulário com os campos nome e senha (use o componente
        Login da aula anterior)
        <br />- Use a ação para fazer o login ao enviar o formulário
        <br />- Coloque o token nos cookies com httpOnly: true
        <br />- Crie uma ação que consiga pegar cookies (mesmo HTTPOnly), deve
        ser possível passar a chave/valor
        <br />- Use um botão para ativar essa ação, ela deve retornar o valor do
        cookie e ele deve ser mostrado na tela
        <p>
          Resumo do exercício: <br />A idéia do exercício é entender que se
          salvar o cookie sem http only, da pra acessar via api do browser com o
          document, mas se tiver com http only, tem que fazer uma requisição ao
          servidor pra pegar o cookie/token, e o exercício é basicamente fazer
          essa requisição dentro de um client component usando uma server
          action, no caso a get-cookie.
        </p>
      </div>
    </div>
  );
};

export default page013;
