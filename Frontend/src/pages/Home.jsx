import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
  updateTask
} from "../api/task.js";
import "../css/board.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // EDIT
  const [editingTask, setEditingTask] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    due_date: ""
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch {
      console.log("Failed to load tasks");
    }
  };

  /* ---------- FORM HANDLING ---------- */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ---------- CREATE ---------- */
  const handleCreate = async (e) => {
    e.preventDefault();
    await createTask(form);
    resetForm();
    fetchTasks();
  };

  /* ---------- EDIT ---------- */
  const handleEditClick = (task) => {
    setEditingTask(task);
    setForm({
      title: task.title,
      description: task.description || "",
      due_date: task.due_date?.slice(0, 10)
    });
    setShowForm(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateTask(editingTask._id, form);
    resetForm();
    fetchTasks();
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingTask(null);
    setForm({ title: "", description: "", due_date: "" });
  };

  /* ---------- DRAG & DROP ---------- */
  const onDragStart = (e, id) => {
    e.dataTransfer.setData("taskId", id);
  };

  const onDrop = async (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    await updateTaskStatus(taskId, status);
    fetchTasks();
  };

  const onDragOver = (e) => e.preventDefault();

  /* ---------- DELETE ---------- */
  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const renderTasks = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <div
          key={task._id}
          className="task-card"
          draggable
          onDragStart={(e) => onDragStart(e, task._id)}
        >
          <h5>{task.title}</h5>
          <p>{task.description}</p>
          <small>DUE_DATE: {task.due_date?.slice(0, 10)}</small>

          <div className="task-actions">
            <button onClick={() => handleEditClick(task)}>Edit</button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ));
  };

  return (
    <>
      <div style={{ padding: "10px"  }}>
        <button onClick={() => setShowForm(true)} style={{ padding: "10px" , background:"#4eade8", color:"white", borderColor:"white" }} >Create Task</button>
      </div>

      {/* CREATE / EDIT FORM */}
      {showForm && (
        <div className="modal">
          <form
            className="modal-box"
            onSubmit={editingTask ? handleUpdate : handleCreate}
          >
            <h4>{editingTask ? "Edit Task" : "Create Task"}</h4>

            <input
              name="title"
              placeholder="Title"
              required
              value={form.title}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Short description"
              value={form.description}
              onChange={handleChange}
            />

            <input
              type="date"
              name="due_date"
              required
              value={form.due_date}
              onChange={handleChange}
            />

            <button type="submit">
              {editingTask ? "Update" : "Create"}
            </button>

            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* BOARD */}
      <div className="board">
        <div
          className="column"
          onDrop={(e) => onDrop(e, "pending")}
          onDragOver={onDragOver}
        >
          <h4>Pending</h4>
          {renderTasks("pending")}
        </div>

        <div
          className="column"
          onDrop={(e) => onDrop(e, "in-progress")}
          onDragOver={onDragOver}
        >
          <h4>In Progress</h4>
          {renderTasks("in-progress")}
        </div>

        <div
          className="column"
          onDrop={(e) => onDrop(e, "completed")}
          onDragOver={onDragOver}
        >
          <h4>Completed</h4>
          {renderTasks("completed")}
        </div>
      </div>
    </>
  );
};

export default Home;
