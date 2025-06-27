"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export type ProdutosData = {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};

export async function ActionsPost(produto: ProdutosData) {
  const r = await fetch("https://api.origamid.online/produtos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });
  if (r.ok) revalidateTag("produtos");
  redirect("/exercicios/ex015-cache-exercicio/produtos");
}
