// basicamente, podemos criar rotas no lado do client com pasta > page.tsx e tbm podemos criar rotas internas de api no server, são as route randlers, pra isso fazemos pasta > route.ts (em geral damos o nome da pasta como api e dentro dela criamos subpastas/subrotas por boas práticas).
//agora com isso podemos comunicar o client com o server via fetch para a pasta da rota que criamos, olhar exercicio ex011. Como? no client, criamos um form reativo para pegar os valores dos inputs já que o server é estatico, precisamos do react pra isso, depois de armazenar isso em um estado fazemos um fetch do metodo post pra nossa api interna pra mandar os dados, porque não tem como passar esses dados via props porque a rota da api não é um componente react e sim um endpoint de api, por isso precisamos 'comunicar/passar dados' via fetch.
//no fetch temos que especificar no segundo paramentro um objeto que contenha o methodo desse fetch, os headers que servem como metadata que contem algumas informações (basicamente informa que o arquivo será em json) e a nossa mensagem que estamos postando, então, um body e nele transofrmamos para string pro json poder ler, ex:

// fetch("/api/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ username, password }),
// });

// Linha 1: method: "POST"
// 	•	Isso define o método HTTP da requisição.
// 	•	"POST" significa que você quer enviar dados para o servidor.
// 	•	Neste caso, você está enviando os dados de login para o endpoint /api/login.

// Linha 2: headers: { "Content-Type": "application/json" }
// 	•	Os headers são como metadados da requisição — instruções extras.
// 	•	Aqui, você está dizendo:
// "O corpo da minha requisição está no formato JSON".
// 	•	Isso é importante porque o servidor precisa saber como interpretar os dados recebidos.

// Linha 3: body: JSON.stringify({ username: user, password })
// 	•	O body (corpo da requisição) é onde vão os dados que você quer enviar.
// 	•	Esses dados precisam estar em formato JSON.
// 	•	JSON.stringify(...) transforma um objeto JavaScript em uma string JSON válida.(json nao lê JS, mas string sim, number sim, boolean sim)

// e agora que fizemos o post, podemos receber essa info na rota da api como se fossem props, pra isso usamos o 'request' nos parametros da function e abaixo desestruturamos a informaçao que passamos, no caso user e password

// export async function POST(request: Request) {
//   const { user, password } = await request.json();
//   console.log(user);
// }
