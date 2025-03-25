import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LaptopManagement from "./components/LaptopMangement";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Laptops" element={<LaptopManagement />} />
        <Route path="/Latops/:id" element={<LaptopManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
