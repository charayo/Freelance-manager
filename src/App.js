import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Earnings from "./components/earnings/Earnings";

function App() {
  const handleFormModal = () => {
    window.$("#myModal").modal("show");
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Earnings pasdClick={handleFormModal} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
