# Lista de Tarefas - Next.js 15

Aplicação simples de listagem e adição de tarefas, desenvolvida com Next.js 15 (App Router) e TypeScript, com testes unitários usando Jest e Testing Library.

## Funcionalidades

- Exibir lista de tarefas carregadas via Server Component
- Adicionar novas tarefas via formulário controlado
- Contagem de tarefas com hook personalizado (`useContadorDeTarefas`)
- Testes unitários cobrindo componentes e hook

## Estrutura do Projeto

```
├── app/
│   └── page.tsx                      # Server Component principal
├── components/
│   ├── NovaTarefa.tsx                # Client Component - formulário de adição
│   └── ListaDeTarefas.tsx            # Client Component - lista de tarefas
├── hooks/
│   └── useContadorDeTarefas.ts       # Hook personalizado de contagem
├── lib/
│   └── tarefas.ts                    # Dados simulados e tipo Tarefa
└── tests/
    ├── NovaTarefa.test.tsx
    ├── useContadorDeTarefas.test.ts
    └── ListaDeTarefas.test.tsx
```

## Instalação

```bash
npm install
```

## Executar o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Executar os testes

```bash
npm test
```

## Executar com cobertura

```bash
npm run test:coverage
```

## Tecnologias

- Next.js 15 (App Router)
- TypeScript
- Jest
- Testing Library (@testing-library/react)
