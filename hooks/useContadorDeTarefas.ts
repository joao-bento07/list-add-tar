import { useMemo } from "react";
import { Tarefa } from "@/lib/tarefas";

export function useContadorDeTarefas(tarefas: Tarefa[]): number {
  return useMemo(() => tarefas.length, [tarefas]);
}
