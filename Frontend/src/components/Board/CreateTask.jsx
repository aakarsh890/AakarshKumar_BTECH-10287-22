import { useState } from "react";
import { createTask } from "../../api/task";

const CreateTask = ({ onClose, refresh }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    due_date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(form);
    refresh();
    onClose();
  };

  return (
    <div className="modal">
      <form className="modal-box" onSubmit={handleSubmit}>
        <h4>Create Task</h4>

        <input
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Short description"
          onChange={handleChange}
        />

        <input
          type="date"
          name="due_date"
          required
          onChange={handleChange}
        />

        <button type="submit">Create</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateTask;
