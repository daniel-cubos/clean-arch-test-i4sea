import Task from "../../entities/Task";
import IHttpClient from "../../infra/IHttpClient";
import ITaskGateway from "./ITaskGateway";

export default class HttpTaskGateway implements ITaskGateway {
  constructor(readonly apiUrl: string, readonly httpClient: IHttpClient) {}

  async add(title: string): Promise<Task> {
    const newTask: Task = await this.httpClient.post(`${this.apiUrl}/tasks`, {
      title: title,
      status: "pending",
    });

    return newTask;
  }
  async getTask(id: number): Promise<Task | null> {
    const newTask: Task = await this.httpClient.get(
      `${this.apiUrl}/tasks/${id}`
    );

    return newTask;
  }
  async listTasks(): Promise<Task[]> {
    const tasks: Task[] = await this.httpClient.get(`${this.apiUrl}/tasks`);

    return tasks;
  }
  async updateTask(task: Task): Promise<Task> {
    const newTask: Task = await this.httpClient.put(
      `${this.apiUrl}/tasks/${task.id}`,
      {
        title: task.title,
        status: task.status,
      }
    );

    return newTask;
  }
  async deleteTask(id: number): Promise<void> {
    await this.httpClient.delete(`${this.apiUrl}/tasks/${id}`);
  }
}
