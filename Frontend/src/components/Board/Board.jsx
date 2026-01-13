import Column from "./Column";
import "../../css/board.css";

const Board = ({ tasks, refresh }) => {
  return (
    <div className="board">
      <Column title="Pending" status="pending" tasks={tasks} refresh={refresh} />
      <Column title="In Progress" status="in-progress" tasks={tasks} refresh={refresh} />
      <Column title="Completed" status="completed" tasks={tasks} refresh={refresh} />
    </div>
  );
};

export default Board;
