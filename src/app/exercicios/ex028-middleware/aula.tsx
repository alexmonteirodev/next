// - Middleware
// É uma função que roda antes do carregamento da página, ela intercepta a requisição e possui acesso ao objeto da requisição: NextRequest e resposta NextResponse.

// Pode ser usada para autenticação, log, redirecionamento, etc.

//para utilizar o Middleware basta criar uma pasta dentro de src - middleware.ts

//em   console.log(request.nextUrl.pathname); o next mostra as pages que foram carregadas para funcionar a pagina, mas podemos definir que algo aconteça apenas quando acessar a pagina x, como? configurando o matcher:

// src/middleware.ts
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(`Entrou na página cursos`);
}

// define as rotas que o middleware será aplicado
export const config = {
  matcher: ["/", "/exercicios/ex028-middleware"],
};

//repare que no proprio request.nextUrl.pathname ja imprime no console a pagina em que o user entrou.

//-----------------------------------------------

// - Redirecionamento
// Pode ser usado para redirecionar o usuário para outra página. Basta retornar o NextResponse.redirect().

//exemplo: antes o path da page era /entrar, o user salva em favoritos. Caso voce mude a page entrar para /login, quando o user for acessar nos favoritos, não vai ter acesso. Mas se vc usar um redirect, de /entrar para /login, a page entrar nem será carregada é ja vai mostrar a page /login

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   console.log(`Redirecionado para /login: ${request.url}`);
//   return NextResponse.redirect(new URL("/login", request.url), 301);
// }

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/entrar",
// };

//--------------------------------------------------------
// - Redirecionamento
// Pode ser usado para redirecionar o usuário para outra página. Basta retornar o NextResponse.redirect().

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   console.log(`Redirecionado para /login: ${request.url}`);
//   return NextResponse.redirect(new URL('/login', request.url), 301);
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/entrar',
// };

//------------------------------------------------
// Proteger Rotas
// outro caso comum é que o middleware pode ser usado para proteger rotas, verificando se o usuário está autenticado.
//no caso abaixo verificamos se existe um token e caso não exista redirecionariamos para page login e se existir, transfere para a page conta
//obs: NextResponse.next(); é dizer, segue o fluxo que iria seguir

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   // o ideal é também verificar se o token é válido
//   const token = request.cookies.get('token')?.value;

//   if (token) {
//     return NextResponse.next();
//   } else {
//     return NextResponse.redirect(new URL('/login', request.nextUrl));
//   }
// }

// export const config = {
//   matcher: ['/conta', '/cursos'],
// };
//-------------------------------------------------

// - Cookies
// Dá para acessar os cookies do request via request.cookies e definir novos cookies na resposta via response.cookies. É possível também acessar os headers da requisição e resposta.

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   const token = request.cookies.get('token')?.value;

//   const response = NextResponse.next();

//   response.cookies.set('acessouConta', 'true');
//   response.cookies.delete('token');

//   return response;
// }

// export const config = {
//   matcher: ['/'],
// };
//-------------------------------------------------

// - Matcher
// O matcher é uma propriedade do middleware que define em quais rotas o middleware será aplicado.

// ['/cursos'] // rota /cursos
// ['/cursos', '/login'] // rota /cursos e /login
// ['/cursos/:path*'] // todas as rotas que começam com /cursos
// ['/(.*)'] ou ['/:path*'] // todas as rotas que começam com /
// ['/((?!api|_next|static|public|favicon.ico).*)'] // todas as rotas que não começam com /api, /_next, /static, /public, /favicon.ico

// {
//   source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   // ignora se for prefetch
//   missing: [
//     { type: 'header', key: 'next-router-prefetch' },
//     { type: 'header', key: 'purpose', value: 'prefetch' },
//   ],
// },
//--------------------------------------------------------

// - Múltiplos Middlewares
// No momento, não é possível definir múltiplos middlewares, temos então que lidar dentro do middleware e verificar o caminho da requisição.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // nova rota
  if (request.nextUrl.pathname.startsWith("/entrar")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // verifica se tem o token e se está tentando entrar em /conta
  const token = request.cookies.get("token")?.value;
  if (!token && request.nextUrl.pathname.startsWith("/conta")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
