import { useState } from "react";
import { useTaskStore } from "../store/taskStore";

function AddTask() {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
  if (!title.trim()) return;

  addTask(title);
  setTitle("");
};

  return (
  <div className="add-task">
    <input
      type="text"
      placeholder="Add a new task..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <button onClick={handleAdd}>Add Task</button>
  </div>
);
}
export default AddTask;