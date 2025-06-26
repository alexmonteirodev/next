"use server";

import { cookies } from "next/headers";

const getCookie = async () => {
  const cookie = (await cookies()).get("token");
  console.log(cookie);
  return cookie?.value || null;
};

export default getCookie;
