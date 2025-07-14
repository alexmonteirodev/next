// - CSS Modules
// O CSS Modules funciona como já vimos no React, criando um escopo para o CSS e permitindo que importemos cada classe diretamente no arquivo .tsx

//na propriea pasta crie um arquivo - exemplo.module.css

import styles from "./cursos.module.css";

export default async function CursosPage() {
  return (
    <main className={styles.cursos}>
      <h1>Front End e UI Design</h1>
      <p>A Origamid oferece cursos de Front End e UI Design.</p>
    </main>
  );
}
/* styles/cursos.module.css */
// .cursos {
//   background: #ddd;
//   border: 1px solid #333;
//   padding: 1rem;
//   border-radius: 4px;
// }

//- Outras Formas
// Se for utilizar uma forma diferente, use a documentação para configurar.

//pode-se usar de outras formas como tailwind ou css como objeto via JS.

// https://nextjs.org/docs/app/building-your-application/styling
