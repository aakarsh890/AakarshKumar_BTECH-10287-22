import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Task Management</h1>

        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
          <Link to="/logout" className="nav-link logout">
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
