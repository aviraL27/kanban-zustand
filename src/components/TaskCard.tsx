import type { Task } from "../types/task";
import { useTaskStore } from "../store/taskStore";

interface TaskCardProps {
  task: Task;
}

function TaskCard({ task }: TaskCardProps) {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const moveTask = useTaskStore((state) => state.moveTask);

  const moveLeft = () => {
    if (task.status === "in-progress") moveTask(task.id, "todo");
    if (task.status === "done") moveTask(task.id, "in-progress");
  };

  const moveRight = () => {
    if (task.status === "todo") moveTask(task.id, "in-progress");
    if (task.status === "in-progress") moveTask(task.id, "done");
  };

  return (
    <div className="task">
      <p>{task.title}</p>

    <button onClick={moveLeft}>⬅</button>
    <button onClick={moveRight}>➡</button>
    <button onClick={() => deleteTask(task.id)}>🗑</button>
    </div>
  );
}

export default TaskCard;