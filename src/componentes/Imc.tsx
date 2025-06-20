"use client";
import React from "react";

const ImcCalc = () => {
  const [altura, setAltura] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [imc, setImc] = React.useState<number | null>(null);
  const [error, setError] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!altura || !peso) {
      setError(true);
      setImc(null);
      return;
    }

    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

    const imc = pesoNum / (alturaNum / 100) ** 2;
    setImc(imc);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="altura">Altura (cm):</label>
        <input
          name="altura"
          id="altura"
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <label htmlFor="peso">Peso (kg):</label>
        <input
          name="peso"
          id="peso"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <button>Calcular</button>
      </form>
      {!error && imc ? (
        <p>Seu Indice de Massa Corporal = {imc}</p>
      ) : (
        "Você deve inserir um valor válido."
      )}
    </div>
  );
};

export default ImcCalc;

// No Next.js com App Router, o fluxo é assim:
// 	1.	O servidor renderiza o HTML da página com React.
// 	2.	O cliente “hidrata” (reativa) esse HTML com os hooks (useState, useEffect, etc).
// 	3.	Se os dois DOMs (servidor vs. cliente) não forem idênticos, o React dá erro — porque ele não consegue “colar” o JavaScript na estrutura HTML que já está na tela.
