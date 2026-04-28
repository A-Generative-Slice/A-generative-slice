import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { About } from './components/About';
import { TeamsSection } from './components/TeamsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  // Default to dark theme
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#111] dark:text-white transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <Hero />
      <ProjectsSection />
      <About />
      <TeamsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
