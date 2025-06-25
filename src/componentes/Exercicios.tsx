import Link from "next/link";
import React from "react";

const Exercicios = () => {
  return (
    <ul>
      <li>
        <Link href="/exercicios/ex001-react-vs-next">ex001-react-vs-next</Link>
      </li>
      <li>
        <Link href="/exercicios/ex002-ambiente">ex002-ambiente</Link>
      </li>
      <li>
        <Link href="/exercicios/ex003-fundamentos-router">
          ex003-fundamentos-router
        </Link>
      </li>
      <li>
        <Link href="/exercicios/ex004-fundamentos-link">
          ex004-fundamentos-link
        </Link>
      </li>
      <li>
        <Link href="/exercicios/ex005-fundamentos-server-e-client-components">
          ex005-fundamentos-server-e-client-components
        </Link>
      </li>
      <li>
        <Link href="/exercicios/ex006-fundamentos-fetch">
          ex006-fundamentos-fetch
        </Link>
      </li>
      <li>
        <Link href="/exercicios/ex007-fundamentos-dynamic-routes">
          ex007-fundamentos-dynamic-routes
        </Link>
      </li>
      <li>
        <Link href="/exercicios/ex008-exercicio-routes">
          ex008-exercicio-routes
        </Link>
      </li>
      <li>
        <Link href="/exercicios/ex009-fundamentos-renderizacao">
          ex009-fundamentos-renderizacao
        </Link>
      </li>
      <li>
        <Link href="/exercicios/ex010-route-randlers">
          ex010-route-randlers
        </Link>
      </li>
    </ul>
  );
};

export default Exercicios;
