"use server";

import { cookies } from "next/headers";

const userLogin = async (name: string, password: string) => {
  const r = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: name,
      password: password,
    }),
  });
  console.log(r);

  const rJson = await r.json();
  (await cookies()).set("token", rJson.token, {
    httpOnly: true,
    secure: true,
  });
  return { funcionou: true };
};

export default userLogin;
