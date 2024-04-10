import { StateCreator } from "zustand";
import Task from "../../entities/Task";

export interface TasksSlices {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export const createTasksSlices: StateCreator<
  TasksSlices,
  [],
  [["zustand/persist", TasksSlices]]
> = (set) => ({
  tasks: [],
  setTasks: (tasks: Task[]) => {
    set({ tasks: tasks });
  },
});
