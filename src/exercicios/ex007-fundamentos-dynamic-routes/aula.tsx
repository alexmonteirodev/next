// - Dynamic Routes
// Uma pasta com o nome entre colchetes [id], indica que a rota é dinâmica. id será o nome do parâmetro que será passado para a página. O acesso ao parâmetro fica dentro da propriedade params.

// ex: page produtos

// basicamente, basta criar uma pasta que vai ser uma rota, ex: produtos. Dentro dela criamos uma page.tsx (page Produtos) e uma pasta com nome de [id], dentro da pasta id, criamos uma nova page.tsx (page Cada Produto). Na page de cada produto criada dentro do ID temos acesso ao ID passado na page produtos via params.

//logo, temos /produtos e depois ao passar /produtos/15, vamos para a page de cada produto.

//IMPORTANTE: nas aulas do andre pra cá o next atualizou pra versão 15, e nela os params são asyncronos agora. Ou seja, chegam como response então devemos esperar para resolver e depois gerar... logo, temos que desestruturar o id e esperar resolver a promessa:
//https://nextjs.org/docs/messages/sync-dynamic-apis

//o next gera um objeto: {params: Promise, searchParams: Promise}, por isso como agora é async criamos um type pra ele que seria PageParams (olhar na page de id em produtos)

//jeito antigo:
function Page({ params }) {
  return <p>ID: {params.id}</p>;
}

//jeito novo:
async function Page({ params }) {
  const { id } = await params;
  return <p>ID: {id}</p>;
}
//--------------------------------------------------------------------------------------
//outra forma de criar rotas dinamicas é slug

// - [...slug] - pode chamar do que quiser, nao precisa ser slug
// Se o nome da pasta conter ... antes do nome do parâmetro, será possível acessar rotas como: /curso/nome-do-curso/aula/nome-da-aula. Automaticamente uma array com os parâmetros será passado para a página.
//estrutura da pastas seria: app > cursos > [...slug] > page.tsx, isso quer dizer que a pasta cursos não existe mas cursos/alguma-coisa sim, basicamente é criar as rotas dinamicas sem a pagina main.
//a diferenca da slug é que deixa ter caminhos alternativos infinitos entao tudo que escrever depois da url vai ser uma pagina, porém não tem tanto controle como a forma anterior
//ex: page cursos
