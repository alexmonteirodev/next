// redirecionamento de rotas

//Como redirecionar uma pagina no next?

// - No server (Server Components ou Server Actions)

// Use o helper do Next.js:
// import { redirect } from "next/navigation";

// export default async function MyServerAction() {
//   // lógica

//   redirect("/outra-pagina");
// }
// Isso funciona somente no server, incluindo Server Components, Server Actions ou route handlers

// - No client (Client Components)

// Use o hook useRouter() do next/navigation:

// "use client";
// import { useRouter } from "next/navigation";

// export default function MeuComponente() {
//   const router = useRouter();

//   function handleClick() {
//     // lógica
//     router.push("/outra-pagina");
//   }

//   return <button onClick={handleClick}>Ir</button>;
// }
// router.push("/rota") navega normalmente.
// Se quiser substituir no histórico (sem poder voltar), use router.replace("/rota").
