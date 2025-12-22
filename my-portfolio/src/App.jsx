import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
