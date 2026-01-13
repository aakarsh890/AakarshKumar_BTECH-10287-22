import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate("/login", { replace: true });
  }, [navigate, setIsAuth]);

  return null;
};

export default Logout;
