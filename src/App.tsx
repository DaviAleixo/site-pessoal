import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';

// Componente principal que organiza todas as seções do site
function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos/:category" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;