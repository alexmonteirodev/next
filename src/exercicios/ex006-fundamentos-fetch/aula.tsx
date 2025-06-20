// Fetch
// no fetch também tem como fazer de duas formas diferentes, usando o client ou o server

//- Server Fetch (component ServerFetch)
// Server Components podem ser definidos como funções assíncronas, assim podemos fazer o fetch de dados no servidor e retornar o componente com os dados já disponíveis.

// Se você estiver criando uma aplicação Full-Stack, você pode também acessar o banco de dados diretamente no componente.

//obs: se vc usar console.log() em um componente do tipo server o log vai aparecer no seu server, ou seja, vai imprimir no seu terminal, se usar no client, imprime no browser.

// ao usar o fetch no server (component ServerFetch), o fetch já é renderizado no servidor, o que já é bom para SEO e como já está no server quando o user acessar o site não vai dar de cara com uma tela carregando (fazendo o fetch) e sim com um fetch já feito e renderizado que já imprime direto na tela, o que torna um acesso muito mais rapido e melhora o user experience porque o user não tem que esperar nada. ponto negativo é que dependnedo do fetch pode fazer com que demore mais para acessar a página.

// vs

// - Client Fetch (component ClientFetch)
// Podemos ainda fazer o fetch de dados no client, utilizando o useEffect e useState. Porém esses dados não serão pré-renderizados no servidor.

//------------------------------------------------------------------

// Portanto sempre priorizar fazer fetch no server

//obs: o fetch do server tem outras funcionalidades imbutidas como o salvamento de dados em cache, pq o next estipulou para o fetch lidar dessa forma, caso vc não queira tem que desativar, mas graças a isso ele renderiza o fetch do server e guarda no cache o que faz que a mudança seja imperceptivel porque ao entrar na pagina a mudança ja vai ter renderizado antes da pagina abrir.
