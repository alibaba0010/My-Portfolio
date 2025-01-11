import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-[#0a192f]" />
      <Navbar />
      <main className="container mx-auto px-4 py-16 relative">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
