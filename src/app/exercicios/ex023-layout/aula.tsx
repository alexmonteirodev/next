// - Layout
// Quando criamos um arquivo de layout dentro de uma rota, o seu conteúdo passa a fazer parte de todas as páginas que estão dentro daquela rota.
// ou seja, ele passa a ser uma page em comum entre as rotas como layout é para o app. Logo, supondo que queremos criar uma navBar a partir da subRota 'sobre', vamos ter 'sobre/historia' e 'sobre/onde-atuamos' ao invés de criar um componente e ter que usar em cada page, podemos criar um layout em sobre e colocar uma nav nele para ser compartilhada com essas subrotas.
//obs: o nome da pasta pai tem que ser layout
//obs: cuidado ao criar um novo layout, da pra copiar a estrutura do layout do app mas no novo layout ele nao deve conter html ou body, porque essas tags já estão sendo usadas no layout principal e caso queira ter uma pagina da rota deve-se criar uma page.tsx na pasta onde se criou o layout. ver exemplo.
