import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./global_components/Header/Header";
import Home from "./pages/home/Home";
import Footer from "./global_components/Footer/Footer";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
