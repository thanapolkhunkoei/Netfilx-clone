import React, { useContext } from "react";
import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Register />}></Route>
      <Route path="/register" element={!user ? <Register /> : <Home />}></Route>
      <Route path="/login" element={!user ? <Login /> : <Home />}></Route>
      {user && (
        <>
          <Route path="/movies" element={<Home type="movies" />}></Route>
          <Route path="/series" element={<Home type="series" />}></Route>
          <Route path="/watch" element={<Watch />}></Route>
        </>
      )}
    </Routes>
  );
};

export default App;
