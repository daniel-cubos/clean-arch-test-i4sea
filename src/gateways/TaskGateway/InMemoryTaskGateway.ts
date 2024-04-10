import Task from "../../entities/Task";
import { generateId } from "../../utils/helpers";
import ITaskGateway from "./ITaskGateway";

export default class InMemoryTaskGateway implements ITaskGateway {
  private tasks: Task[];

  constructor(tasks: Task[]) {
    this.tasks = tasks;
  }

  async add(title: string): Promise<Task> {
    const task = new Task(generateId(this.tasks), title, "pending");
    this.tasks.push(task);

    return task;
  }
  async getTask(id: number): Promise<Task | null> {
    const currentTask = this.tasks.find((t) => t.id === id);

    if (!currentTask) throw new Error("Task not found");

    return currentTask;
  }
  async listTasks(): Promise<Task[]> {
    return this.tasks;
  }

  async updateTask(task: Task): Promise<Task> {
    const index = this.tasks.findIndex((t) => t.id === task.id);

    if (index === -1) throw new Error("Task not found");

    this.tasks[index] = task;

    return this.tasks[index];
  }
  async deleteTask(id: number) {
    const index = this.tasks.findIndex((t) => t.id === id);

    if (index === -1) throw new Error("Task not found");

    const newTasks = this.tasks.splice(index, 1);
    this.tasks = newTasks;
  }
}
