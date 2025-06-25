export async function POST(request: Request) {
  const { user, password } = await request.json();
  console.log(user);

  //   const r = await fetch("https://api.origamid.online/conta/login");
}
