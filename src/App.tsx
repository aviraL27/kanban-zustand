import AddTask from "./components/AddTask";
import Board from "./components/Board";

function App() {
  return (
    <div>
      <h1>Kanban Board</h1>
      <AddTask />
      <Board />
    </div>
  );
}

export default App;
