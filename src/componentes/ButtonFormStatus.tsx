"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const ButtonFormStatus = () => {
  const status = useFormStatus();

  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
};

export default ButtonFormStatus;
