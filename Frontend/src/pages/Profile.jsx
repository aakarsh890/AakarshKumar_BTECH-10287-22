import { useState } from "react";
import { updateUser, deleteUser } from "../api/user.js";
import "../css/auth.css";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");

    try {
      await updateUser(form);
      setMsg("Profile updated successfully");
    } catch (err) {
      setError("Profile update failed");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure? This will permanently delete your account."
    );

    if (!confirmDelete) return;

    try {
      await deleteUser();
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (err) {
      setError("Failed to delete account");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h3>Edit Profile</h3>

        {msg && <p style={{ color: "green" }}>{msg}</p>}
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <button type="submit">Update</button>
        </form>

        <button
          onClick={handleDelete}
          style={{
            marginTop: "12px",
            backgroundColor: "red",
            color: "white"
          }}
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
