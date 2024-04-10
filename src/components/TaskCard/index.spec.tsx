import { fireEvent, render, screen } from "@testing-library/react";
import TaskCard from ".";
import Task from "../../entities/Task";

describe("Testa o component Card", () => {
  test("Deve haver um nome para a task", async () => {
    const task = new Task(1, "Estudar NodeJS", "pending");

    render(<TaskCard task={task} handleToggleStatus={() => {}} />);

    const title = await screen.findByText("Estudar NodeJS");

    expect(title).toBeInTheDocument();
  });

  test("Deve ser possível marcar / desmarcar uma task como pendente", async () => {
    const task = new Task(1, "Estudar NodeJS", "pending");

    const handleToggleStatus = vi.fn();
    render(<TaskCard task={task} handleToggleStatus={handleToggleStatus} />);

    const btnToggle = await screen.findByRole("button");
    fireEvent.click(btnToggle);

    expect(handleToggleStatus).toHaveBeenCalledTimes(1);
  });
});
