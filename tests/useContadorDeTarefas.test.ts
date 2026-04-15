import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import { Tarefa } from "@/lib/tarefas";

const tarefasMock: Tarefa[] = [
  { id: 1, titulo: "Tarefa 1", concluida: false },
  { id: 2, titulo: "Tarefa 2", concluida: true },
  { id: 3, titulo: "Tarefa 3", concluida: false },
];

describe("useContadorDeTarefas", () => {
  it("retorna 0 quando a lista está vazia", () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));
    expect(result.current).toBe(0);
  });

  it("retorna o número correto de tarefas", () => {
    const { result } = renderHook(() => useContadorDeTarefas(tarefasMock));
    expect(result.current).toBe(3);
  });

  it("atualiza o contador quando a lista muda", () => {
    let tarefas: Tarefa[] = [tarefasMock[0]];
    const { result, rerender } = renderHook(() => useContadorDeTarefas(tarefas));
    expect(result.current).toBe(1);
    tarefas = [...tarefasMock];
    rerender();
    expect(result.current).toBe(3);
  });
});
