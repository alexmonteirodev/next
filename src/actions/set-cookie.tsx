"use server";

import { cookies } from "next/headers";

const setCookie = async (key: string, value: string) => {
  (await cookies()).set(key, value, {
    httpOnly: true,
    secure: true,
  });
  return { funcionou: true, value };
};

export default setCookie;
