// - route.ts
// Podemos criar rotas de api's JSON no Next.js. Basta criar um arquivo chamado route.ts dentro de uma rota, exemplo: api/route.ts.

// Possui os métodos GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS.

// Não é possível ter page.tsx e route.ts na mesma rota/pasta.

//também da pra criar subrotas, então pra isso se quiser criar uma rota de usuarios dentro de api, basta adicionar uma pasta como se estivesse criando uma rota normal, com pasta dentro de pasta.

// a rota pode ser usada para esconder chaves de api's por exemplo a rota de vendas, porque geralmente as keys são passadas nas url's mas isso não é bom pq fica exposto pro user e alguém pode se aproveitar disso, logo, da pra usar uma rota e passar uma chave dentro do fetch e assim o user no client não tem acesso a url nem a key e isso nao importa pro user mesmo porque o que ele precisa são dos dados.

//-------------------------------------------------------------------------
// - API's Servidor/Web
// Acesso a api's web do servidor como cookies, headers, etc.

//exemplo pasta login

//nela fazemos o fetch de um token e salvamos nos cookies, porque nos cookies e não no localStorage, porque o client tem acesso ao localStorage e não tem acesso nos cookies.

//para mexer nos cookies, da pra usar a api do next, usando cookies() e assim podemos manipular os cookies. manipulações mais comuns são:
// cookies().get - puxa
//cookies().set - adiciona
//cookies().delete - deletar
//cookies().getAll - pega todos os cookies do site
//cookies().has - pra verificar se tem um cookie com nome de token e retorna true o false

// ex: cookies().set("token", data.token);

// ao ir em inspecionar e em application, podemos ver que o cookie foi adicionado, porém tem duas partes lá qeu são httpOnly e security que não são marcadas. O problema disso é que da pra acessar entao os cookies via script no client e alguem pode usar esse token pra fazer um fetch e roubar as informações por exemplo. Pra evitar isso, temos algumas opções que podemos passar no set:

//   cookies().set("token", data.token, {
//     httpOnly: true,
//     secure: true,
//   });

// agora não da pra acessar via script no client (inspecionar e escrever document.cookie no console), mas o acesso via servidor é mantido, exemplo disso é a pasta perfil que utilizamos o token do servidor para acessar o perfil.

//ps: next versao 15, trata cookies como asincrono
//-------------------------------------------------------------------------

// - Request
// Acesso ao objeto request do servidor.
// Quando configuramos uma rota, temos também acesso ao request que é um objeto que tem diversas informações da requisição que está sendo feita ao servidor

// https://nextjs.org/docs/app/api-reference/functions/next-request

// https://developer.mozilla.org/pt-BR/docs/Web/API/Request

import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // cookies
  request.cookies.get("token");
  // headers
  request.headers.get("Cache-Control");
  // ip
  request.headers.get("X-Forwarded-For");
  // url
  request.url;
  // searchParams
  request.nextUrl.searchParams.get("busca");
  // body
  const body = await request.json();
  const username = body.username;
  const password = body.password;

  return Response.json({ ok: true });
}
