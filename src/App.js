import "./App.css";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Experience from "./Experience/Exp";
import Project from "./Project/Proj";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
