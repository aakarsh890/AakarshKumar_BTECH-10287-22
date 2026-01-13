import { useEffect } from "react";

const Logout = () => {

  useEffect(() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }, []);

  return null;
};

export default Logout;
