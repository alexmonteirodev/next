"use client";

import { ActionsPost, ProdutosData } from "@/actions/ex015-post";
import React from "react";

export default function AdicionarPage() {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [inventory, setInventory] = React.useState("");
  const [imported, setImported] = React.useState(false);

  const importedNumber = imported ? 1 : 0;

  const produto: ProdutosData = {
    nome: name,
    descricao: description,
    preco: Number(price),
    estoque: Number(inventory),
    importado: importedNumber,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    ActionsPost(produto);
  }
  return (
    <main>
      <h1>Adicionar</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          onChange={({ target }) => setName(target.value)}
        />

        <label htmlFor="preco">Preço</label>
        <input
          type="number"
          name="preco"
          id="preco"
          onChange={({ target }) => setPrice(target.value)}
        />

        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          name="descricao"
          id="descricao"
          onChange={({ target }) => setDescription(target.value)}
        />

        <label htmlFor="estoque">Estoque</label>
        <input
          type="number"
          name="estoque"
          id="estoque"
          onChange={({ target }) => setInventory(target.value)}
        />

        <label htmlFor="">
          <input
            type="checkbox"
            checked={imported}
            onChange={() => setImported(!imported)}
          />
          Importado
        </label>

        <button>Adicionar</button>
      </form>
    </main>
  );
}
