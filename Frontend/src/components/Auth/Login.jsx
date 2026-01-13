import { useState } from "react";
import { loginUser } from "../../api/auth.js";
import "../../css/auth.css";
import oziGif from "../../assets/ozi-gif.gif";


const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const data = await loginUser(form);

    console.log("Login response:", data); 

    localStorage.setItem("token", data.token);

    window.location.href = "/"; 
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  }
};


  return (
    <div className="auth-page">
    <div className="auth-box">
      <img src={oziGif} alt="logo" className="login-gif" />
      <h3>Login</h3>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <a href="/register">Sign Up</a>
      </p>

    </div>
    </div>
  );
};

export default Login;
