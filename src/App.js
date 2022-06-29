import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="container rounded-md max-w-md min-h-[300px] my-3 mx-auto border border-steelBlue overflow-auto p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
