import type { Metadata } from "next";
import "./globals.css";
import { font_body } from "./fonts";
// import Nav from "@/componentes/Nav";

export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Curso de Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font_body.className} ${font_body.variable}`}>
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
