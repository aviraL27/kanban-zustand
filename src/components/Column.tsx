import { useTaskStore } from "../store/taskStore";
import type { TaskStatus } from "../types/task";
import TaskCard from "./TaskCard";

interface ColumnProps {
  title: string;
  status: TaskStatus;
}

function Column({ title, status }: ColumnProps) {
  const tasks = useTaskStore((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="column">
      <h2>{title}</h2>

      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;