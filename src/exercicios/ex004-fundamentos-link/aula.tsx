// - Link
// O Next.js possui o componente Link que permite a navegação entre páginas sem que a página seja recarregada (client side).
// ao invés do to que usamos no react-router-dom, aqui se utiliza o href e o nome que coloca no link é o nome da pasta que você definiu.

import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre">Sobre</Link>
      </li>
    </ul>
  );
}
//ex: no Sobre, o /sobre faz referencia à pasta 'sobre' criada e vai exibir o page.tsx que está lá dentro

// além disso o Link tbm faz mais uma coisa importante, o Prefetch
//-------------------------------------------------------------------------------------

// - Prefetch
// O Link automaticamente faz o prefetch de páginas estáticas, ou seja, o Next.js já carrega a página em segundo plano para que ela esteja disponível quando o usuário clicar no link. (true é o padrão)

// O comportamento do prefetch só é possível ser analisado em produção.

//ex:
import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/sobre" prefetch={true}>
          Sobre
        </Link>
      </li>
    </ul>
  );
}

// npm run build
// npm run start
//-------------------------------------------------------------------------------------

// - Link Interno e Scroll
// O comportamento de scroll interno funciona da mesma forma que o <a>. É possível desabilitar o scroll automático com scroll={false}.

import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre#empresa" scroll={false}>
          Sobre
        </Link>
      </li>
    </ul>
  );
}
