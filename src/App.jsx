import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Home/Navbar";
import Home from "./pages/Home/Homescreen";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Page not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
