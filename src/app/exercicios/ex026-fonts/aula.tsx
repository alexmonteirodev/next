// - Fonts
// O Next.js importa fontes do Google Fonts de forma otimizada.
// basta escolher a font direto no import.
// da pra criar um arquivo em qualquer lugar da aplicação mas é interessante criar um na raiz com nome fonts porque caso precise mudar algo, é fácil de localizar

// // app/fonts.ts
// import { Roboto } from 'next/font/google';

// export const font_body = Roboto({
//   weight: ['400', '700'], // peso da fonte
//   style: ['normal'], // estilo da fonte, italic/normal
//   subsets: ['latin'], // escolhe o subset, diminui o tamanho do arquivo
//   variable: '--font-body', // define uma css variable
//   display: 'swap', // mostra a fonte de backup enquanto a principal carrega
// });

// depois de definir a font, precisamos importar onde queremos usar. Se for usar em toda a app é interessante já importar direto no layout.

//pra ter acesso a font nos arquivos .css tem que passar como classe no body a variable, ou seja, font.varible

//-------------------------------------------------------

// - localFont
//caso não tenha a font que vc quer no next, da pra baixar e usar localmente.
// É possível utilizar arquivos de fontes através da função localFont.

// import localFont from 'next/font/local';

// export const font_mono = localFont({
//   src: '../fonts/IBMPlexMono-Regular.ttf',
//   weight: '400',
//   style: 'normal',
//   variable: '--font-mono',
//   display: 'swap',
// });
