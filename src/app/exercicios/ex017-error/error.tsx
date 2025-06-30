"use client";

export default function Ex017Error({ error }: { error: Error }) {
  console.log(error);
  return (
    <main>
      <h1>Um Erro Ocorreu</h1>
      <p>Erro: {error.message}</p>
      {/* faltou um 'a' na url da api. */}
    </main>
  );
}
