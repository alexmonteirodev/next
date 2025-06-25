import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { user, password } = await request.json();
  console.log("log,", user, password);

  const r = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user, password: password }),
  });
  const data = await r.json();
  console.log("Token", data.token);

  if (data.token) {
    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
    });
    return NextResponse.json({ success: true });
  }
  return NextResponse.json(
    { success: false, error: "Token Inválido" },
    { status: 401 }
  );
}
