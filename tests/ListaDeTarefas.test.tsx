import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListaDeTarefas from "@/components/ListaDeTarefas";
import { Tarefa } from "@/lib/tarefas";

const tarefasMock: Tarefa[] = [
  { id: 1, titulo: "Estudar Next.js 15", concluida: false },
  { id: 2, titulo: "Escrever testes unitários", concluida: false },
  { id: 3, titulo: "Revisar conceitos de hooks", concluida: true },
];

describe("ListaDeTarefas", () => {
  it("renderiza o título e as tarefas iniciais", () => {
    render(<ListaDeTarefas tarefasIniciais={tarefasMock} />);
    expect(screen.getByText("Lista de Tarefas")).toBeInTheDocument();
    expect(screen.getByText("Estudar Next.js 15")).toBeInTheDocument();
    expect(screen.getByText("Escrever testes unitários")).toBeInTheDocument();
    expect(screen.getByText("Revisar conceitos de hooks")).toBeInTheDocument();
  });

  it("exibe o total de tarefas corretamente", () => {
    render(<ListaDeTarefas tarefasIniciais={tarefasMock} />);
    expect(screen.getByText("Total de tarefas: 3")).toBeInTheDocument();
  });

  it("adiciona uma nova tarefa à lista", () => {
    render(<ListaDeTarefas tarefasIniciais={tarefasMock} />);
    const input = screen.getByPlaceholderText("Nova tarefa...");
    fireEvent.change(input, { target: { value: "Nova tarefa de teste" } });
    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));
    expect(screen.getByText("Nova tarefa de teste")).toBeInTheDocument();
    expect(screen.getByText("Total de tarefas: 4")).toBeInTheDocument();
  });
});
