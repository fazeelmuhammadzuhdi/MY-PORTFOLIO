import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      

      {/* Navbar Start*/}
      <Navbar />
      {/* Navbar End */}

      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}

      {/* About Start*/}
      <About />
      {/* About End */}

      {/* Skills */}
      <Skills />
      {/* Skills End */}

      {/* Portofolio */}
      <Project />
      {/* Porfofolio End */}
    </>
  );
}

export default App;
