import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TasksSlices, createTasksSlices } from "./slices/tasksSlices";

type StoreState = TasksSlices;

export const useAppStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createTasksSlices(...a),
    }),
    {
      name: "stateStorage",
    }
  )
);
