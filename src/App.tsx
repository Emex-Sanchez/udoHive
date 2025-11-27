import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
// import AIAgentsLibrary from './components/product';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <TechStack />
        <Testimonials />
        <Pricing />
        {/* <AIAgentsLibrary /> */}
        <FAQ />
        <Contact />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
