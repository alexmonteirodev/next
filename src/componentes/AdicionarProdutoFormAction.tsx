"use client";
import adicionarProduto from "@/actions/action-form-data";
import React from "react";
import ButtonFormStatus from "./ButtonFormStatus";

const AdicionarProdutoFormAction = () => {
  return (
    <div>
      <form action={adicionarProduto}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />
        <label htmlFor="preco">Preço</label>
        <input type="number" id="preco" name="preco" />
        <label htmlFor="descricao">Descrição</label>
        <input type="text" id="descricao" name="descricao" />
        <label htmlFor="estoque">Estoque</label>
        <input type="number" id="estoque" name="estoque" />
        <label htmlFor="importado">
          <input type="checkbox" id="importado" name="importado" />
          Importado
        </label>
        <ButtonFormStatus />
      </form>
    </div>
  );
};

export default AdicionarProdutoFormAction;
