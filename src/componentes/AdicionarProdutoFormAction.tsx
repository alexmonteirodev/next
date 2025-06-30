"use client";
import adicionarProduto from "@/actions/action-form-data";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
// import ButtonFormStatus from "./ButtonFormStatus";

function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
}
//useFormStatus tem que ser passado fora do corpo da pagina ou em um componente para funcionar

const AdicionarProdutoFormAction = () => {
  const [state, formAction] = React.useActionState(adicionarProduto, {
    errors: [],
  });
  console.log(state);

  return (
    <div>
      <form action={formAction}>
        {/* <form action={adicionarProduto}>  - para usar com server action*/}
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" required />
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
        {state.errors.map((erro, i) => (
          <p style={{ color: "red" }} key={i}>
            {erro}
          </p>
        ))}
        <Button />
        {/* <ButtonFormStatus /> */}
        {/* pode ser via componente ou direto no corpo aqui do componente mas fora da funcãoAdicionarProdutoFormAction */}
      </form>
    </div>
  );
};

export default AdicionarProdutoFormAction;
