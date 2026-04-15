"use client";

import { useState } from "react";
import { Tarefa } from "@/lib/tarefas";
import NovaTarefa from "@/components/NovaTarefa";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

type Props = {
  tarefasIniciais: Tarefa[];
};

export default function ListaDeTarefas({ tarefasIniciais }: Props) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const total = useContadorDeTarefas(tarefas);

  function adicionarTarefa(nova: Tarefa) {
    setTarefas((prev) => [...prev, nova]);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <p>Total de tarefas: {total}</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
      <NovaTarefa onAdicionar={adicionarTarefa} />
    </div>
  );
}
