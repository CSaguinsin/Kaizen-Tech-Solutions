import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import ShowCaseStudy from "./components/ShowCaseStudy";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects/:slug" element={<ShowCaseStudy />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
