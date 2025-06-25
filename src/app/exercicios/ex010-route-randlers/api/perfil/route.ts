import { cookies } from "next/headers";

export async function GET() {
  const token = (await cookies()).get("token");

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token?.value,
    },
  });

  const perfil = await response.json();

  return Response.json(perfil);
}
