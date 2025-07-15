import { Roboto } from "next/font/google";

export const font_body = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap", //já carrega uma fonte padrão para mostrar na tela ao abrir o site para caso não tenha carregado a sua fonte, se tiver carregaado já mostra direto
  variable: "--font-body", //permite usar como ariavel de css dentro dos arquivos .css
});
