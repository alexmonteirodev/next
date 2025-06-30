// - Form Action (funcao de react já implementada no next)
// O form possui um atributo chamado action, que pode ser usado para enviar os dados do formulário através de uma server action. A server action passa a receber um FormData como argumento que possui já um type que é tbm o FormData

// para linkar uma pasta na outra basta importar a f do server action no componente e atribuir o nome da f da server action ao atributo action

// e retornar uma array de objetos:
//  [
//     {
//       name: '$ACTION_ID_40e5ddaf06d9638e1175b58d6ddd1f573101985c6e',
//       value: ''
//     },
//     { name: 'nome', value: '' },
//     { name: 'preco', value: '' },
//     { name: 'descricao', value: '' },
//     { name: 'estoque', value: '' }
//   ]

//então da pra acessar os valores do formulario vida formData

//para acessar um valor basta usar formData.get('name')

// o formData cria o objeto a partir do atributo name do input

// isso é interessante porque funciona sem JS porque daria pra tirar o 'use client' do componente AdicionarProdutoFormAction porque tudo está sendo feito na parte do servidor e por isso mesmo com o JS desabilitado, funciona.

//ex: componente AdicionarProdutoFormAction & action-form-data

// da forma como fizemos, passando a ação diretamente, perdemos um pouco docontrole do formulário pois não tem como saber o state do formulario no momento, então não daria pra fazer um botão carregando por exemplo. Para lidar com isso, o React tem alguns hooks novos:

//--------------------------------------------------------------------

// - Hooks

// - useFormStatus
// Contém o status do envio do formulário como pending, data, method e action. O pending é um booleano que indica se o formulário está sendo enviado.

// para isso, precisamos de um componente externo com o useFormStatus e incluir ele dentro do form (só funciona assim)
//ex:

// componentes/ButtonFormStatus

// function Button() {
//   const status = useFormStatus();
//   console.log(status.pending);
//   return (
//     <button type="submit" disabled={status.pending}>
//       Adicionar
//     </button>
//   );
// }
//------

//componente adicionar
// export default function AdicionarProduto() {
//   return (
//     <form action={adicionarProduto}>
//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome" name="nome" />
//       <label htmlFor="preco">Preço</label>
//       <input type="number" id="preco" name="preco" />
//       <label htmlFor="descricao">Descrição</label>
//       <input type="text" id="descricao" name="descricao" />
//       <label htmlFor="estoque">Estoque</label>
//       <input type="number" id="estoque" name="estoque" />
//       <label htmlFor="importado">
//         <input type="checkbox" id="importado" name="importado" />
//         Importado
//       </label>
//       <Button /> 'inserido aqui'
//     </form>

// dentro de status, teremos o status de pending, status.pending que vai ser verdadeiro assim que o form tiver carregando e sendo enviado, caso contrário vai ser false

// com useFormStatus temos acesso às propriedades:
// · pending - true or false (o que mais vai ser utilizado)
// · data - dados do form
// · method - metodo de envio
// · action - ação do form

//ex:
// <button type="submit" disabled={status.pending}>Adicionar</button>
//assim, desabilitamos o botão para o user não ficar clicando varias vezes e enviando um monte de requisição
//--------------------------------------------------------------------
