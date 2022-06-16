import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import "./components/Style.css"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:title" element={<List />} />
      </Routes>
  );
}

export default App;
