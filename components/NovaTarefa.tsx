"use client";

import { useState } from "react";
import { Tarefa } from "@/lib/tarefas";

type Props = {
  onAdicionar: (tarefa: Tarefa) => void;
};

export default function NovaTarefa({ onAdicionar }: Props) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!titulo.trim()) return;
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo: titulo.trim(),
      concluida: false,
    };
    onAdicionar(novaTarefa);
    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        aria-label="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
