import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import ITaskGateway from "./gateways/TaskGateway/ITaskGateway";
import InMemoryTaskGateway from "./gateways/TaskGateway/InMemoryTaskGateway";

describe("Testa o component App", () => {
  let inMemoryTasksGateway: ITaskGateway;

  beforeEach(() => {
    inMemoryTasksGateway = new InMemoryTaskGateway([
      {
        id: 1,
        status: "pending",
        title: "Estudar NodeJS",
      },
      {
        id: 2,
        status: "pending",
        title: "Estudar ReactJS",
      },
    ]);
  });

  test("Deve haver uma lista de Tarefas", async () => {
    render(<App taskGateway={inMemoryTasksGateway} />);

    const taskList = await screen.findByRole("list");

    expect(taskList).toBeInTheDocument();
  });

  test("Deve haver uma lista de Tarefas com duas tarefas", async () => {
    render(<App taskGateway={inMemoryTasksGateway} />);

    const tasks = await screen.findAllByRole("listitem");

    expect(tasks).toHaveLength(2);
  });

  test("Deve ser possível adicionar uma tarefa", async () => {
    render(<App taskGateway={inMemoryTasksGateway} />);

    const input = await screen.findByRole("textbox");
    fireEvent.change(input, { target: { value: "Nova Tarefa" } });

    const btnAdd = await screen.findByRole("button", {
      name: "Add Tarefa",
    });
    fireEvent.click(btnAdd);

    const newTask = await screen.findByRole("heading", {
      name: "Nova Tarefa",
    });

    expect(newTask).toBeInTheDocument();
  });

  test("Deve ser possível mudar o status de uma tarefa", async () => {
    render(<App taskGateway={inMemoryTasksGateway} />);

    const btnsToggleTask = await screen.findAllByRole("button", {
      name: "Marcar Finalizada",
    });

    fireEvent.click(btnsToggleTask[0]);

    const tasktitle = await screen.findByRole("heading", {
      name: "Estudar NodeJS",
    });

    expect(tasktitle.className).toContain("done");
  });
});
