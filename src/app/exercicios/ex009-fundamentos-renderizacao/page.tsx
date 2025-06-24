"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PageRender = () => {
  const pathname = usePathname();
  return (
    <div>
      <p>
        Temos a API - https://api.origamid.online/acoes/lua que mostra dados que
        são atualizados a cada 5s
      </p>
      <ul>
        <li>
          <Link href={`${pathname}/ssg`}>SSG - ISR</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageRender;
