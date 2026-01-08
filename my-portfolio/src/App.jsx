import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </>
    );
}

export default App;
