"use server";
export default async function adicionarProduto(formData: FormData) {
  //   console.log(formData);

  const produto: Produto = {
    nome: formData.get("nome") as string,
    preco: Number(formData.get("preco")),
    descricao: formData.get("descricao") as string,
    estoque: Number(formData.get("estoque")),
    importado: formData.get("importado") ? 1 : 0,
  };

  const r = await fetch("https://api.origamid.online/produtos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });
  console.log(r.ok, r.status);
}
