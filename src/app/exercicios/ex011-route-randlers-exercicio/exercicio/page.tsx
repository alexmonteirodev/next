"use client";
import React from "react";

const PageExercicio = () => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const r = await fetch(
        "http://localhost:3000/exercicios/ex011-route-randlers-exercicio/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user,
            password,
          }),
        }
      );
      const data = await r.json();
      console.log(data);
    } catch {}
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        placeholder="nome"
        onChange={({ target }) => setUser(target.value)}
      />
      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        type="text"
        placeholder="senha"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default PageExercicio;
