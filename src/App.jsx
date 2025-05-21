import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Expertise from "./components/Expertise";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Articles from "./components/Articles";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a192f] text-gray-300 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-[#0a192f]" />
        <Navbar />
        <main className="container mx-auto px-4 py-16 relative">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Languages />
                  <Expertise />
                  <Projects />
                  <Resume />
                  <Contact />
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
