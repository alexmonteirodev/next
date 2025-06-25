export async function GET() {
  const r = await fetch("https://api.origamid.online/vendas", {
    headers: {
      apiKey: "ORIGAMID123456",
    },
  });
  const vendas = await r.json();

  return Response.json(vendas);
}
