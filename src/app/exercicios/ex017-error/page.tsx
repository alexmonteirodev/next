import React from "react";

const pageError = async () => {
  const r = await fetch("https://pi.origamid.online/produtos");
  const data = await r.json();
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default pageError;
