import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolsSection } from './components/ToolsSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <ToolsSection />
      <ServicesSection />
      <HowItWorks />
      <About />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
