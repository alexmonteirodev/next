// - Image
// O Next.js possui um componente chamado Image que é utilizado para carregar imagens de forma otimizada.
//porque usar image ao invés de img?
//porque o Image vai otimizar as imagens automaticamente via node e também, vai gerar imagens responsivas
//otimizações como: a imagem é armazenada em cache e agora passa a estar no servidor de node (next>cache>imagens); a imagem passa de jpg pra webp; diminui os kb (atributo quality - ideal 75% - caso não atribua nenhum valor, vai ser 75 default);

//nessa tag Image, temos que importar do next/image e definir atributos nela, que são o tamanho height e width, se não o JS gera um erro dizendo que está faltando o tamanho da imagem:
import Image from "next/image";

<Image
  src="https://api.origamid.online/imagens/lobo_1.jpg"
  width={1200} // use o valor original ou o valor máximo
  height={800} // deve ser proporcional ao width, respeitando a proporção
  alt="Lobo branco dormindo sobre pedras"
  quality={80} // define a qualidade da imagem
  sizes="100vw" //defini apenas o tamanho da imagem para otimizar, não por questoes de css. basicamente o next pega o tamanho de 100vw no momento e otimiza a imagem para um tamanho correspondente a tela e isso é definido no next.config.mjs também
/>;

// - remotePatterns
//depois de configurar isso, é gerado um novo erro que diz que a imagem não foi configurada no next.config.js ou .mjs. ou .ts
// Por segurança devemos informar ao Next.js as URLs que podem ser utilizados para imagens. Isso é feito no arquivo next.config.mjs.

// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.origamid.online",
        port: "",
        pathname: "/imagens/**",
      },
    ],
  },
};

// depois isso, a imagem vai aparecer destorcida, porque no primeiro erro nós definimos um height e um width fixo pra img e o next tenta adaptar o tamanho que passamos, pra contornar isso, basta umas um css padrão e deixar o next calcular o tamanho usando auto:

// img {
//   width: auto;
//   height: auto;
//   max-width: 100%;
//   display: block;
// }

// - Image Sizes (sizes="100vw")
// O Next.js gera imagens em tamanhos diferentes de acordo com os possíveis tamanhos de tela definidos em deviceSizes. A imagem que será servida é decidida pelo Next.js de acordo com o tamanho da tela no momento do carregamento.

// Ele apenas carrega tamanhos diferentes se definirmos o atributo sizes no componente Image. Um valor como 100vw significa que o Next.js deve sempre carregar uma imagem que consiga ocupar 100% da viewport sempre que possível.

// sizes="100vw"

// deviceSizes:
// [600, 800, 1200, 2400, 3600]

// BrowserWidth = 900px, Imagem = 1200px.
// BrowserWidth = 1800px, Imagem = 2400px.

// Muda de acordo com a densidade de pixels da tela [4k (2x)]:

// BrowserWidth = 900px (1800px), Imagem = 2400px.
// Copiar
// <Image
//   sizes="100vw" // 100% da viewport
// />
// Copiar
// // next.config.mjs
// images: {
//   // valores padrão: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
//   deviceSizes: [600, 800, 1200, 2400, 3600],
// },

// - Media Queries
// Podemos definir media queries dentro de sizes para alterar o tamanho da imagem de acordo com o tamanho da tela.

{
  /* <Image sizes="(max-width: 600px) 100vw, 50vw" />

deviceSizes:
[600, 800, 1200, 2400, 3600]

(max-width: 600px) 100vw
é dizer: BrowserWidth = 500px, Imagem = 600px.

, 50vw = Caso contrário, carregue uma imagem que ocupe 50% da viewport.
é dizer:  BrowserWidth = 1300px, Imagem = 800px (1300/2 = 650 -> 800). */
}

// - priority
//é possivel definir via atributo priority pra que a imagem tenha prioridade no carregamento, isso é bom para carregar as imagens que vão aparecer logo quando o site abrir para que elas não tenham delay e as outras que não aparecem de primeira vão carregando em quanto isso.

// - Imagens Locais
// Coloque as imagens dentro de public/imagens. Você pode acessar arquivos da pasta public diretamente no Next.js utilizando a url /.

{
  /* <Image src="/imagens/dogs.svg" width={28} height={22} alt="Dogs" />
<Image
  src="/imagens/login.jpg"
  width={1200}
  height={1600}
  alt="Dogs"
  sizes="100vw"
/> */
}
