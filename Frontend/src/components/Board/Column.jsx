import { updateTaskStatus, deleteTask } from "../../api/task";
import Task from "./Task";

const Column = ({ title, status, tasks, refresh }) => {
  const onDrop = async (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    await updateTaskStatus(taskId, status);
    refresh();
  };

  const onDragOver = (e) => e.preventDefault();

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("taskId", id);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    refresh();
  };

  return (
    <div className="column" onDrop={onDrop} onDragOver={onDragOver}>
      <h4>{title}</h4>

      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <Task
            key={task._id}
            task={task}
            onDragStart={onDragStart}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default Column;
