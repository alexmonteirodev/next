// - script
// O componente <Script > é utilizado para carregar scripts dentro do Next.js.
// basicamente é abrir um espaço em que da pra codar JS puro e rodar ou rodar um pacote externo ou local que vc queira que rode naquela page em especifico ou se for em toda a app, colocar em layout.

// exemplo:

// import Script from 'next/script';

// export default function HomePage() {
//   return (
//     <main>
//       <h1>Home</h1>
//       <Script
//         id="idade-legal"
//         strategy="beforeInteractive"
//         src="https://api.origamid.online/scripts/idade-legal.min.js"
//       />
//     </main>
//   );
// }
// Copiar
// <Script
//   id="google-tag-script"
//   strategy="afterInteractive"
//   src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX"
// ></Script>
// <Script id="google-tag">
//   {`
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());
//     gtag('config', 'G-XXXXXXXXX');
//   `}
// </Script>

//- Analytics
//tem como instalar um pacote de third party do next que ele já puxa direto e vc só importa ao invés de abrir um script
// https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-tag-manager
