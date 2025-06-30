// - Error
// Erros podem ocorrer em diferentes momentos da nossa aplicação, mas principalmente quando lidamos com código que depende de uma parte externa, como API's, banco de dados, etc.
//ex: fazemos uma requisição pra uma api e ela está offline

// Podemos utilizar criar um arquivo error.tsx na mesma pasta da nossa rota para tratar os erros que ocorrem durante a execução da página.

//da pra criar uma pasta para cada rota lidando com erros de forma específica mas também da pra lidar com erro de forma global, criando um arquivo 'global-error.tsx' em app.

//o ideal é lidar com o erro direto no componente com o try e catch, porém é bom ter o error.tsx, pois vai servir como um 'backup' caso ocorra um erro que vc não sabia que poderia acontecer, porque assim a pagina não vai quebrar caso algo fuja do controle do seu try e catch
