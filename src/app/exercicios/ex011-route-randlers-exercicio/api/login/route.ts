import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { user, password } = (await request.json()) as {
    user: string;
    password: string;
  };
  console.log("log,", user, password);

  const r = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user, password: password }),
  });
  if (!r.ok) {
    return Response.json({ erro: "Dados Incorretos" }, { status: 401 });
  }
  const data = await r.json();
  console.log("Token", data.token);

  if (data.token) {
    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
    });
    return NextResponse.json({ autorizado: true });
  }
  return NextResponse.json(
    { success: false, error: "Token Inválido" },
    { status: 401 }
  );
}
