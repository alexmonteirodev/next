import type { Metadata } from "next";
import Link from "next/link";

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
    <div lang="pt-BR">
      <div>
        <ul className="flex">
          <li>
            <Link href="/exercicios/ex028-middleware">Home</Link>
          </li>
          <li>
            <Link href="/exercicios/ex028-middleware/conta">conta</Link>
          </li>
          <li>
            <Link href="/exercicios/ex028-middleware/login">login</Link>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
}
