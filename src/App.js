import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Stake from "./components/Stake/stake";
import Mint from "./components/Mint/mint";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
