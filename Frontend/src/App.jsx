import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Header from "./components/header/Header";
import Register from "./components/auth/Register";


import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  const isAuth = !!localStorage.getItem("token");

  return (
    <>
      {isAuth && <Header />}
      
      <Routes>
        <Route
          path="/register"
          element={!isAuth ? <Register /> : <Navigate to="/" />}
        />

        <Route
          path="/login"
          element={!isAuth ? <Login /> : <Navigate to="/" />}
        />

        <Route
          path="/logout"
          element={isAuth ? <Logout /> : <Navigate to="/login" />}
        />

        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
