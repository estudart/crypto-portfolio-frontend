import "./App.css";
import Home from "./pages/Home";
import NewOrder from "./pages/NewOrder";
import Overview from "./pages/Overview";
import Executed from "./pages/Executed";

import NavBar from "./components/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new_order" element={<NewOrder />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/exec_orders" element={<Executed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
