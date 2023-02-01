import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/register" element={<Register />} />
    </Routes>
  );
}

export default App;
