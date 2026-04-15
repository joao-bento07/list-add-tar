import { getTarefas } from "@/lib/tarefas";
import ListaDeTarefas from "@/components/ListaDeTarefas";

export default async function Home() {
  const tarefas = await getTarefas();
  return (
    <main>
      <ListaDeTarefas tarefasIniciais={tarefas} />
    </main>
  );
}
