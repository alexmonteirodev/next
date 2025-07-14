import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Layout Pages",
  description: "Curso de Next",
};

export default function RootPages({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>nav compartilhada*</h2>
      <ul>
        <li>
          <Link href="/exercicios/ex023-layout">layout</Link>
        </li>
        <li>
          <Link href="/exercicios/ex023-layout/sobre">sobre</Link>
        </li>
        <li>
          <Link href="/exercicios/ex023-layout/contato">contato</Link>
        </li>
      </ul>
      <main>{children}</main>
    </div>
  );
}
