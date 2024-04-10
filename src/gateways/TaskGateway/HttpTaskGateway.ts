import Task from "../../entities/Task";
import ITaskGateway from "./ITaskGateway";

export default class HttpTaskGateway implements ITaskGateway {
  constructor(readonly apiUrl: string) {}

  async add(title: string): Promise<Task> {
    const response = await fetch(`${this.apiUrl}/tasks`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        status: "pending",
      }),
    });

    const newTask: Task = await response.json();

    return newTask;
  }
  async getTask(id: number): Promise<Task | null> {
    const response = await fetch(`${this.apiUrl}/tasks/${id}`);

    const newTask: Task = await response.json();

    return newTask;
  }
  async listTasks(): Promise<Task[]> {
    const response = await fetch(`${this.apiUrl}/tasks`);

    const tasks: Task[] = await response.json();

    return tasks;
  }
  async updateTask(task: Task): Promise<Task> {
    const response = await fetch(`${this.apiUrl}/tasks/${task.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: task.title,
        status: task.status,
      }),
    });

    const newTask: Task = await response.json();

    return newTask;
  }
  async deleteTask(id: number): Promise<void> {
    await fetch(`${this.apiUrl}/tasks/${id}`, {
      method: "DELETE",
    });
  }
}
