"use client";
import { revalidatePathAction } from "@/actions/revalidate-path";
import React from "react";

const Atualizar = () => {
  function handleClick() {
    revalidatePathAction("/exercicios/ex014-cache");
  }
  return <button onClick={handleClick}>Atualizar</button>;
};

export default Atualizar;
