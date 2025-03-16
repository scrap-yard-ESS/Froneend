import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import "../styles/body.css";
import Login from "./Login";
import Unlock from "./Unlock";

const Bodys = () => {
  return (
    <div className="bodys">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/unlock">Unlock</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unlock" element={<Unlock />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Bodys;
