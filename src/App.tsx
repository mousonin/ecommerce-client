import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import User from "./components/Home/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="user" element={<User />} />
      </Route>
      <Route path="user/login" element={<Login />} />
      <Route path="user/register" element={<Register />} />
    </Routes>
  );
}

export default App;
