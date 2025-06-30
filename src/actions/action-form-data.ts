"use server";

//validação form backend
function validarNome(nome: unknown) {
  return typeof nome === "string" && nome.length > 1;
}

function validarPreco(preco: unknown) {
  return typeof preco === "number" && preco > 1;
}

export default async function adicionarProduto(
  state: { errors: string[] },
  formData: FormData
) {
  //   console.log(formData);

  const produto: Produto = {
    nome: formData.get("nome") as string,
    preco: Number(formData.get("preco")),
    descricao: formData.get("descricao") as string,
    estoque: Number(formData.get("estoque")),
    importado: formData.get("importado") ? 1 : 0,
  };

  const errors = [];
  if (!validarNome(produto.nome)) errors.push("Nome inválido");
  if (!validarPreco(produto.preco)) errors.push("Preço inválido");
  if (errors.length > 0) return { errors };

  try {
    const r = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto),
    });
    if (!r.ok) throw new Error("Erro ao adicionar o produto");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }
  return { errors: [] };
}
