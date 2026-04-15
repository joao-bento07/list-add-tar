import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";
import { Tarefa } from "@/lib/tarefas";

describe("NovaTarefa", () => {
  it("renderiza o input e o botão corretamente", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);
    expect(screen.getByPlaceholderText("Nova tarefa...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /adicionar/i })).toBeInTheDocument();
  });

  it("não chama onAdicionar quando o input está vazio", () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);
    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));
    expect(onAdicionar).not.toHaveBeenCalled();
  });

  it("chama onAdicionar com a tarefa correta ao submeter", () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);
    const input = screen.getByPlaceholderText("Nova tarefa...");
    fireEvent.change(input, { target: { value: "Minha nova tarefa" } });
    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));
    expect(onAdicionar).toHaveBeenCalledTimes(1);
    const tarefaPassada: Tarefa = onAdicionar.mock.calls[0][0];
    expect(tarefaPassada.titulo).toBe("Minha nova tarefa");
    expect(tarefaPassada.concluida).toBe(false);
  });

  it("limpa o input após a submissão", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);
    const input = screen.getByPlaceholderText("Nova tarefa...");
    fireEvent.change(input, { target: { value: "Tarefa qualquer" } });
    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));
    expect(input).toHaveValue("");
  });
});
