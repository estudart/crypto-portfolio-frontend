import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NewOrder from "./pages/NewOrder";
import Overview from "./pages/Overview";
import Executed from "./pages/Executed";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/new_order" element={<NewOrder />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/exec_orders" element={<Executed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
