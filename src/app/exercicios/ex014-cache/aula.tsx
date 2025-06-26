// - cache
// As informações desta aula são sobre o fetch no servidor. Por padrão o next usa o force-cache, que irá criar um cache persistente do fetch. (função padrão caso não seja definida)

// cache: 'force-cache' ou 'no-store'
fetch("https://api.origamid.online/acoes/lua", {
  cache: "no-store",
});

// cache: "force-cache"
// 	•	Usa o cache sempre que possível, inclusive entre builds.
// 	•	Ideal para dados que não mudam com frequência.
// 	•	É o comportamento padrão para GET requests fora de use client.
//   • Armazena e reutiliza a resposta até que expire (ou seja revalidada manualmente, se usar revalidate).

// cache: "no-store"
// 	•	Nunca usa cache, sempre busca dados frescos.
// 	•	Ideal para requisições sensíveis, como login, dados dinâmicos ou privados.

//--------------------------------------------------------------------------------------

// Existe a forma de revalidar baseado em tempo e em acção

// •	Em tempo:

// - revalidate
// O revalidate é o tempo em segundos que o next irá revalidar o cache do fetch.

// A revalidação ocorre após a requisição, logo os novos dados só estarão disponíveis na próxima requisição. Usando o 0 irá prevenir o cache.

// para usar o revalidate basta usar nas opções do fetch o next: revalidate

// revalidate: false | 0 | number
fetch("https://api.origamid.online/acoes/lua", {
  next: {
    revalidate: 5, // revalida a cada 5 segundos
  },
});

//o que acontece ne verdade é que o revalidate revalida aquele fetch a cada x segundos que vc definir, é dizer que ao atualizar a pagina ou entrar nela, o next vai mostrar a info que está em cache e por baixo dos panos vai fazer um outro fetch com uma nova info atualizada pra que quando a pagina atualizar novamente, já tenha info disponivel e mostre instanteamente sem ter chance de demorar pra mostrar a info pro user por conta do tempo do fetch. O lado 'negativo' é que vc fica sempre 'uma atualização atrás' porque sempre tem um fetch novo no cache. A menos que vc atualize a pagina duas vezes dentro de 5 segundos. Esse lado negativo só é realmente negativo pra aplicações que lidam com informações que estão sempre se atualizando como bolsa de valores, mas funciona mto bem pra um app normal como de postagens de foto e etc.

//para constatar, basta ir em inspecionar > network > clicar no ex014-cache > timing, aí terá o tempo de espera do server e o tempo de download das novas infos do fetch, ex: se o revalidate for de 5 segundos ele demora mais ou menots uns 50 milisegundos pra mostrar a info na tela porque ele ja tinha no cache e se for de 0s que é basicamente dizer, 'faça o fetch toda vez que atualizar' ele demora mais pq tem que fazer o fetch e mostrar a info e demora em torno de 230 milisegundos.

//obs: se vc usar:
export const revalidate = 5;
// o next entende que vc quer passar o revalidate como 5s então ele ler a constante e aplicar no codigo inteiro em todos os fetchs.

//ex: ex014-cache > page
//-------------------------------------

// •	Em Ação:

// - revalidatePath
// revalidatePath é uma função/método do next que recebe path de uma rota e revalida o cache da mesma. Pode ser executada no servidor, em Route Handlers e Server Actions.

// a vantagem de usar o revalidatePath é que ele atualiza o cache no servidor e instantaneamente já atualiza no client com o valor novo

//obs: como criamos o revalidate dentro de um server action podermos usar ele no client dentro de um useEffect que tenha um setTimeInterval e fazer com que a pagina atualize sozinha a cada x segundos. (não é o ideal porque se não vai ficar mandando requisição toda hora, mas pra ver as possibilidades)

//ex: actions > ravalidate-path + componente 'Atualizar'
//-------------------------------------

// - revalidateTags
// Podemos definir tags durante o fetch e revalidar o cache de todas as rotas que possuem a mesma tag.

// Pode ser usada para revalidar uma lista de produtos, quando um novo produto for postado.

// a diferença aqui é qeu no revalidatePath vc revalida apenas um rota especifica.
const response = await fetch("https://api.origamid.online/acoes/lua", {
  next: {
    tags: ["acoes"],
  },
});
//revalidateTag("acoes")
// em resumo, da pra colocar uma tag nos fetchs que eu quiser que servem como um 'id' e depois posso usar revalidateTags() e passar a tag/id que defini que vai revalidar todos os fetchs que usam a mesma tag de uma vez.
