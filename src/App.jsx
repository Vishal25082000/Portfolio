import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Social from "./components/Social";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Social/>
      <Footer />
    </div>
  );
}

export default App;
