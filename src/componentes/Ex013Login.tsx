"use client";
import getCookie from "@/actions/get-cookie";
import userLogin from "@/actions/user-login";
import React from "react";

const Page013 = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cookie, setCookie] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    userLogin(name, password);
    const cookie = await getCookie();
    if (cookie) {
      setCookie(cookie);
    } else {
      console.log("Token não encontrado");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="nome"
            onChange={({ target }) => setName(target.value)}
          />
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="text"
            name="senha"
            placeholder="senha"
            onChange={({ target }) => setPassword(target.value)}
          />
          <button>Submit</button>
        </form>
        {cookie ? <p>Token: {cookie}</p> : ""}
      </div>
    </div>
  );
};

export default Page013;
