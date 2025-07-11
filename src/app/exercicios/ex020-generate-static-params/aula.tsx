// - generateStaticParams
// essa função serve para gerar paginas pré renderizadas de rotas dinamicas
//Gera parâmetros de rotas dinâmicas, permitindo a pré-renderização dessas páginas no momento da build.

// cursos/[curso]/page.tsx
export function generateStaticParams() {
  return [
    { curso: "html" },
    { curso: "css" },
    { curso: "javascript" },
    { curso: "ui-design" },
    { curso: "ux-design" },
    { curso: "tipografia" },
  ];
}
// no nosso exemplo de cursos ao fazer a build, o generateStaticParams já gera uma pagina prerenderizada das paginas que selecionamos os params (tanto que na build, aparece com a bolinha colorida). funcionaria no caso de cursos caso as informações não fossem ficar mudando sempre.

//tem como automatizar isso e fazer com que o JS já puxe na API as litas de cursos que tem lá. (porque se fizermos da forma anterior e a /css deixar de existir por exemplo, teriamos que mudar manualmente depois e transformando em async já fica tudo sincronizado dinamicamente)

// - Async
// Podemos puxar a lista de uma API externa para gerar os parâmetros.

// cursos/[curso]/page.tsx
export async function generateStaticParams() {
  const cursos = await getCursos();
  return cursos.map((curso) => ({
    curso: curso.slug,
  }));
}

// gera automaticamente
[
  { curso: "html" },
  { curso: "css" },
  { curso: "javascript" },
  { curso: "ui-design" },
  { curso: "ux-design" },
  { curso: "tipografia" },
];

//e quando for rota dinamica dentro de rota dinamica?

//ex: [curso]/[aula]/page.tsx

//fazemos da mesma forma porem seguindo a estrutura de  { curso: 'html', aula: 'introducao-ao-html' } ao inés de como antes que era só curso

// cursos/[curso]/[aula]/page.tsx
export async function generateStaticParams() {
  const cursos = await getCursos();
  const aulas = await Promise.all(cursos.map((curso) => getCurso(curso.slug)));
  return aulas
    .reduce((acc: Aula[], aula) => acc.concat(aula.aulas), [])
    .map((aula) => ({
      curso: cursos.find((curso) => curso.id === aula.curso_id)?.slug,
      aula: aula.slug,
    }));
}

[
  { curso: 'html', aula: 'introducao-ao-html' },
  { curso: 'html', aula: 'estrutura-basica' },
  { curso: 'html', aula: 'formularios-em-html' },
  { curso: 'html', aula: 'tabelas-e-listas' },
  { curso: 'html', aula: 'incorporando-midia' },
  { curso: 'html', aula: 'semantica-em-html' },
  { curso: 'javascript', aula: 'fundamentos-do-javascript' },
  { curso: 'javascript', aula: 'controle-de-fluxo-e-loops' },
  ...
]

//obs: o que importa é o objeto que está sendo retornado da api e o nome das propriedades