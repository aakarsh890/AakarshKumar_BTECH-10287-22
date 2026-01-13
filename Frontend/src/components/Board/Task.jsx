const Task = ({ task, onDragStart, onDelete }) => {
  return (
    <div
      className="task-card"
      draggable
      onDragStart={(e) => onDragStart(e, task._id)}
    >
      <h5>{task.title}</h5>
      <p>{task.description}</p>
      <small>Due: {task.due_date?.slice(0, 10)}</small>

      <button className="delete-btn" onClick={() => onDelete(task._id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
