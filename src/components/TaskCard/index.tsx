import Task from "../../entities/Task";
import styles from "./styles.module.scss";

interface ITaskCardProps {
  task: Task;
  handleToggleStatus: (id: number) => void;
}

function TaskCard({ task, handleToggleStatus }: ITaskCardProps) {
  return (
    <div>
      <h2 className={styles[task.status]}>{task.title}</h2>
      <button onClick={() => handleToggleStatus(task.id)}>
        Marcar {task.status === "done" ? "Pendente" : "Finalizada"}
      </button>
    </div>
  );
}

export default TaskCard;
