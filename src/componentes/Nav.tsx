import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre">Sobre</Link>
      </li>
      <li>
        <Link href="/contato#faleconosco">Contato</Link>
      </li>
      <li>
        <Link href="/acesso">Acessos</Link>
      </li>
    </ul>
  );
};

export default Nav;
