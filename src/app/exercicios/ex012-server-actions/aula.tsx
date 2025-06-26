// - Server Actions
// Funções que são executadas no servidor, mas podem ser iniciadas pelo cliente. Coloque no início da função 'use server' ou no início do arquivo. As funções devem ser assíncronas.

// São ativadas automaticamente através de um fetch ('POST'). Basicamente são endpoints de api's criados automaticamente.

// A função não é exposta no cliente, são seguras para informações sensíveis.

"use server";

import { cookies } from "next/headers";

export async function setCookie(key: string, value: string) {
  (await cookies()).set(key, value, {
    httpOnly: true,
  });
  return { definido: true, key, value };
}

// OBS:
// No Next.js com o App Router (app/), os componentes do tipo Page, Layout e Server Component (por padrão) já rodam no servidor. Ou seja, não precisam de use server para serem executados no servidor.

// vale lembrar que ao criar uma pasta e dentro uma page, isso é uma rota mas tbm acaba sendo server componente, ou seja, tbm pode ser reutilizado mas não é uma boa prática, o ideal é deixar tudo que for reutilizar criado em uma pasta com os componentes e estruturar nas pages, assim deixamos as pages com seu objetivo primario que é criação de rotas

// Então por que usamos use server?

// O use server não é para dizer “esse código roda no servidor” (o Next já sabe disso em Server Components).
// O use server é especificamente usado para Server Actions, que são funções assíncronas que podem ser chamadas a partir do client (formulários, botões, etc.) e executadas no servidor.
// é basicamente dizer: “Essa função vai ser chamada a partir do client (como via formulário ou botão), mas deve rodar no servidor.”
//então a idéia é que: Um componente Client (com 'use client') pode chamar uma Server Action (uma função marcada com 'use server') para executar código no servidor. Como se a partir de um componente client eu executo uma função e ela chama a ação do use server pra rodar algo no server

// o use server geralmente é chamado em um client component (até porque se vc estiver em um server componente pode escrever o código direto)

//Podemos ativar o use server por eventos, useEffect, formulários e mais.

//é boa prática criar um pasta 'actions' do lado de fora, como se fosse uma pasta de componentes

//ex: set-cookie dentro de actions.

// basicamente funciona como uma rout handler, só que automática porque se vc for ver no inspecionar da pagina e em network, ao clicar no botao (em page) é realizado um fetch.
// entao não precisa usar api fetch nem ter que definir rotas
// qual a diferença então?
//------------------------------------------------------------------

// - Actions vs Handlers

// Server Actions
// ·Configura automaticamente o endpoint
// ·É possível passar como ação de um formulário
// ·Não expôe o endpoint no cliente
// ·Pode retornar JSX
// ·Permite revalidarmos o cache

// X

// Route Handlers
// ·Precisamos configurar o endpoint
// ·Pode ser utilizado por serviços externos (API's externas)
// ·Não pode retornar JS

// A grande diferença é que a server action não pode ser utilizada por serviçoes externos. O comum hoje em dia é usar mais server actions do que route handlers.
