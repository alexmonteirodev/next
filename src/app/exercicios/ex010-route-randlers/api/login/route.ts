import { cookies } from "next/headers";

export async function GET() {
  const r = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "dog",
      password: "dog",
    }),
  });
  const data = await r.json();

  cookies().set("token", data.token, {
    httpOnly: true,
    secure: true,
  });

  return Response.json(data);
}
