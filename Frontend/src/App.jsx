import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Header from "./components/header/Header";
import Register from "./components/Auth/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(!!localStorage.getItem("token"));
  }, []);

  return (
    <>
      {isAuth && <Header />}

      <Routes>
        <Route
          path="/login"
          element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Navigate to="/" />}
        />

        <Route
          path="/register"
          element={!isAuth ? <Register /> : <Navigate to="/" />}
        />

        <Route
          path="/logout"
          element={<Logout setIsAuth={setIsAuth} />}
        />

        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={isAuth ? <Profile setIsAuth={setIsAuth} /> : <Navigate to="/login" />}
        />


        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
