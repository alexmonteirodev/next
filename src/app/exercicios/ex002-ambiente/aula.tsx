// Next

// Next documentacao: https://nextjs.org/docs/app/getting-started/installation

// Assim como o React possui o Vite para auxiliar na criação do ambiente de instalação o Next possui o comando: npx create-next-app@latest

// comando para instalar next: npx create-next-app@latest .
//obs: lembrar do . para instalar na pasta local

// Esse comando vai gerar opções no terminal como:
// What is your project named? my-app
// Would you like to use TypeScript? No / Yes
// Would you like to use ESLint? No / Yes
// Would you like to use Tailwind CSS? No / Yes
// Would you like your code inside a `src/` directory? No / Yes
// Would you like to use App Router? (recommended) No / Yes
// Would you like to use Turbopack for `next dev`?  No / Yes
// Would you like to customize the import alias (`@/*` by default)? No / Yes
// What import alias would you like configured? @/*

//obs: se atendar a versão do node porque como o codigo executa no server e o deploy tem que ser feito onde possua node, isso é importante. No site do next eles dizem qual a versao minima pra usar o next:
// Before you begin, make sure your system meets the following requirements:
// Node.js 18.18 or later.

// ao instalar o Next, temos as pastas:
// public - serve para colocar imagens
// src - onde vamos criar o app
// layout - é como se fosse o html, tem o title, description, language e lá renderiza o children dentro do body
// page - é um arquivo react normal, rafce como se fosse um componente
// globals.css - style global
// eslint.config - que já extende uma config padrão do next
//next-env.d.ts - define tipos do ambiente de desenvolvimento
//next.config - arquivo de config do next, geralmente se deixa padrão
//tsconfig - config do TS
