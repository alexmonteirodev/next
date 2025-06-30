import React from "react";

const pageLoadingESuspense = () => {
  return (
    <div>
      <React.Suspense fallback={"Carregando..."}>
        <div>Lista de produtos</div>
      </React.Suspense>
    </div>
  );
};

export default pageLoadingESuspense;
