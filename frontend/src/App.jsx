import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./global_components/Header/Header";
import Home from "./pages/home/Home";
import Footer from "./global_components/Footer/Footer";

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
