import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "../styles/body.css";
import Login from "./Login";
import Unlock from "./Unlock";

const Bodys = () => {
  return (
    <div className="bodys">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="unlock" element={<Unlock />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Bodys;
