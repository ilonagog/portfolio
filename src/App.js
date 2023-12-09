import { Routes, Route } from "react-router-dom"
import './App.css';
import Footer from "./Footer";
import Home from './Home';
import NavBar from './NavBar';
import Projects from "./Projects";
import Blogs from "./Blogs";
import About from "./About";
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
