import { useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import ITaskGateway from "./gateways/TaskGateway/ITaskGateway";
import { useAppStore } from "./store";

interface IAppProps {
  taskGateway: ITaskGateway;
}

function App({ taskGateway }: IAppProps) {
  const [input, setInput] = useState("");
  const { tasks, setTasks } = useAppStore();

  async function handleAddTarefa() {
    const newTask = await taskGateway.add(input);

    setTasks([...tasks, newTask]);
    setInput("");
  }

  async function handleToggleStatus(id: number) {
    const currentTask = tasks.find((t) => t.id === id);

    if (currentTask) {
      const newStatus = currentTask.status === "done" ? "pending" : "done";

      const updatedTask = await taskGateway.updateTask({
        ...currentTask,
        status: newStatus,
      });

      const localTasks = [...tasks];
      const index = localTasks.findIndex((t) => t.id === updatedTask.id);
      localTasks[index] = updatedTask;

      setTasks(localTasks);
    }
  }

  useEffect(() => {
    (async () => {
      const allTasks = await taskGateway.listTasks();

      setTasks([...allTasks]);
    })();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={handleAddTarefa}>Add Tarefa</button>
      </div>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <TaskCard task={t} handleToggleStatus={handleToggleStatus} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
