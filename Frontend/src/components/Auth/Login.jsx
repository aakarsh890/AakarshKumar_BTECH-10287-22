import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/auth";
import "../../css/auth.css";
import oziGif from "../../assets/ozi-gif.gif";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);

      setIsAuth(true);        
      navigate("/", { replace: true });
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
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
          <button type="submit">Login</button>
        </form>

        <p>
          Don’t have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
