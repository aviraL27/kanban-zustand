import Column from "./Column";

function Board() {
  return (
    <div className="board">
      <Column title="Todo" status="todo" />
      <Column title="In Progress" status="in-progress" />
      <Column title="Done" status="done" />
    </div>
  );
}

export default Board;