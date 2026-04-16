import React from "react";
import { render, screen } from "@testing-library/react";
import { getTarefas } from "@/lib/tarefas";
import Home from "@/app/page";

jest.mock("@/lib/tarefas");

const mockedGetTarefas = getTarefas as jest.MockedFunction<typeof getTarefas>;

describe("Home (app/page.tsx)", () => {
  it("renderiza a página principal com as tarefas carregadas", async () => {
    mockedGetTarefas.mockResolvedValue([
      { id: 1, titulo: "Estudar Next.js 15", concluida: false },
      { id: 2, titulo: "Escrever testes unitários", concluida: false },
      { id: 3, titulo: "Revisar conceitos de hooks", concluida: true },
    ]);

    const ResolvedHome = await Home();
    render(ResolvedHome);

    expect(screen.getByText("Lista de Tarefas")).toBeInTheDocument();
    expect(screen.getByText("Estudar Next.js 15")).toBeInTheDocument();
    expect(screen.getByText("Escrever testes unitários")).toBeInTheDocument();
    expect(screen.getByText("Revisar conceitos de hooks")).toBeInTheDocument();
  });
});
