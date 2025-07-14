// - Image
// O Next.js possui um componente chamado Image que é utilizado para carregar imagens de forma otimizada.
//porque usar image ao invés de img?
//porque o Image vai otimizar as imagens automaticamente via node e também, vai gerar imagens responsivas

//nessa tag Image, temos que importar do next/image e definir atributos nela, que são o tamanho height e width, se não o JS gera um erro dizendo que está faltando o tamanho da imagem:
import Image from "next/image";

<Image
  src="https://api.origamid.online/imagens/lobo_1.jpg"
  width={1200} // use o valor original ou o valor máximo
  height={800} // deve ser proporcional ao width, respeitando a proporção
  alt="Lobo branco dormindo sobre pedras"
  quality={80} // define a qualidade da imagem
  sizes="100vw"
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
