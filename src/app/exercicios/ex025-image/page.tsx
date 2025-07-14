import Image from "next/image";
import React from "react";

type Animal = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

const page = async () => {
  const r = await fetch("https://api.origamid.online/animais");
  const data: Animal[] = await r.json();

  return (
    <div>
      <h1>Animais</h1>
      <ul>
        {data.map((animal) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              src={animal.imagem}
              alt={animal.descricao}
              height={2400}
              width={1600}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
