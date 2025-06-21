import ClientFetch from "@/componentes/ClientFetch";
import ServerFetch from "@/componentes/ServerFetch";
import React from "react";

const pageFetch = () => {
  return (
    <div>
      <h1>Server Fetch:</h1>
      <ServerFetch />
      <h1>Client Fetch:</h1>
      <ClientFetch />
    </div>
  );
};

export default pageFetch;
