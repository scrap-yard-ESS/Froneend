import "./App.css";
import Bodys from "./components/Bodys";
import Header from "./components/Header";

import Main from "./routes/Main";
import Tos from "./routes/Tos";
import Privacy from "./routes/Privacy";
import NotFound from "./routes/NotFound";
import Recruit from "./routes/Recruit";
function App() {
  return (
    <>
      <Header />
      <div className="grow">
        <Bodys />
      </div>
    </>
  );
}

export default App;
