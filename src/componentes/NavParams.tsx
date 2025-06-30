"use client";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";

function Busca() {
  const searchParams = useSearchParams();
  const busca = searchParams.get("busca");
  return <div>Busca: {busca}</div>;
}

const NavParams = () => {
  const pageParam = useParams(); //acesso aos params da page [acao]

  const path = usePathname();

  const router = useRouter();

  React.useEffect(() => {
    console.log("rota mudou");
    setTimeout(() => {
      router.push("/exercicios/ex019-router-hooks");
    }, 5000);
  }, [path, router]);

  return (
    <div>
      <React.Suspense>
        <Busca />
      </React.Suspense>
      <ul>
        <li>
          <Link href="/exercicios/ex019-router-hooks">exercicio</Link>
        </li>
        <li>
          <Link href="/exercicios/ex019-router-hooks/acao">acao</Link>
        </li>
        <li>
          {" "}
          <Link href="/exercicios/ex019-router-hooks/?busca=xpt">buscar</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavParams;
