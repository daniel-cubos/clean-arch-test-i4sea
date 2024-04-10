import Task from "../../entities/Task";

export default interface ITaskGateway {
  add(title: string): Promise<Task>;
  getTask(id: number): Promise<Task | null>;
  listTasks(): Promise<Task[]>;
  updateTask(task: Task): Promise<Task>;
  deleteTask(id: number): Promise<void>;
}
