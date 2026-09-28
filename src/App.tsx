import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';

const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'A Generative Slice — Elite AI Products & Bespoke Web Systems',
    description: 'A Generative Slice is an elite AI products laboratory and bespoke web systems studio in Chennai, India. We engineer agentic AI, enterprise ERPs, 3D web apps, and automated client workflows.'
  },
  '/products': {
    title: 'ProdX & Slice Suite — A Generative Slice',
    description: 'Explore the proprietary Slice Suite: Slice3D, SliceLeads, SliceMail, SliceInbox, SlicePPT, SliceDAM, and SliceClass.'
  },
  '/projects': {
    title: 'Client Deliverables & Case Studies — A Generative Slice',
    description: 'Explore real-world client deliverables across hospitality, industrial manufacturing, luxury e-commerce, architecture, and couture.'
  },
  '/services': {
    title: 'Bespoke AI Engineering Services — A Generative Slice',
    description: 'Full-cycle AI architecture, custom enterprise ERPs, RAG pipelines, high-conversion web platforms, and automated workflow integrations.'
  },
  '/about': {
    title: 'Our Story & Chennai Headquarters — A Generative Slice',
    description: 'Learn about A Generative Slice, our founding mission by Mohammed Hussain, student mentorship initiatives, and our Chennai AI laboratory.'
  },
  '/contact': {
    title: 'Schedule a Free Strategic Consultation — A Generative Slice',
    description: 'Get in touch with A Generative Slice for 100% free initial project scoping, NDA-backed consultations, and custom architecture blueprints.'
  },
  '/careers': {
    title: 'Careers & Engineering Openings — A Generative Slice',
    description: 'Join our high-agency team of AI engineers, full-stack builders, and creative problem solvers building the future of software.'
  }
};

const AppContent = () => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Dynamic SEO title & meta update + scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    const seo = ROUTE_SEO[location.pathname] || ROUTE_SEO['/'];
    document.title = seo.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.description);
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#111] dark:text-white transition-colors duration-300 flex flex-col">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
