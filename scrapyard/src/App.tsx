import "./App.css";
import Bodys from "./components/Bodys";
import Header from "./components/Header";

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
