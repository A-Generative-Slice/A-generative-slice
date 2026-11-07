import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ROUTE_META } from './data/routeMeta';

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then((m) => ({ default: m.ProductsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then((m) => ({ default: m.CareersPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const DataDeletionPage = lazy(() => import('./pages/DataDeletionPage').then((m) => ({ default: m.DataDeletionPage })));
const CallbackPage = lazy(() => import('./pages/CallbackPage').then((m) => ({ default: m.CallbackPage })));
const ChennaiHubPage = lazy(() => import('./pages/ChennaiHubPage').then((m) => ({ default: m.ChennaiHubPage })));
const CityPage = lazy(() => import('./pages/CityPage').then((m) => ({ default: m.CityPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then((m) => ({ default: m.InsightsPage })));
const InsightPage = lazy(() => import('./pages/InsightPage').then((m) => ({ default: m.InsightPage })));
const AiForHumansPage = lazy(() => import('./pages/AiForHumansPage').then((m) => ({ default: m.AiForHumansPage })));

const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'AI Automation & Bespoke Web Systems Studio in Chennai | A Generative Slice',
    description: 'A Generative Slice is an AI automation and bespoke web systems studio in Chennai, India. We engineer agentic AI, enterprise ERPs, 3D web apps, and automated client workflows.'
  },
  '/products': {
    title: 'ProdX & Slice Suite — A Generative Slice',
    description: 'Explore the Slice Suite: open-core autonomous AI products and enterprise tools including Slice3D, SliceLeads, SliceMail, SliceInbox, SlicePPT, SliceDAM, and SliceClass.'
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
  },
  '/privacy': {
    title: 'Privacy Policy — A Generative Slice',
    description: 'How A Generative Slice collects, uses, and protects your data across contact forms, the Slice Suite, and authorized OAuth integrations with Meta, LinkedIn, X, Reddit, and Google.'
  },
  '/terms': {
    title: 'Terms of Service — A Generative Slice',
    description: 'The terms governing A Generative Slice studio services, the Slice Suite products, and API-driven automations. Governed by the laws of Chennai, Tamil Nadu, India.'
  },
  '/data-deletion': {
    title: 'Data Deletion Instructions — A Generative Slice',
    description: 'Request immediate deletion of your data or revoke OAuth app permissions from A Generative Slice. Step-by-step instructions with a 48-hour processing SLA.'
  },
  '/callback': {
    title: 'OAuth 2.0 Redirect Endpoint — A Generative Slice',
    description: 'Universal OAuth 2.0 redirect and webhook receiver endpoint for A Generative Slice integrations with Meta, X, LinkedIn, Reddit, and Google Cloud.'
  },
  ...ROUTE_META
};

const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
      <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-orange-300" />
    </motion.div>
  </div>
);

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

  // Dynamic SEO title, meta, canonical & scroll-to-top on route change.
  // Canonical form uses a trailing slash to match GitHub Pages' 301 target.
  useEffect(() => {
    window.scrollTo(0, 0);
    const key = location.pathname.replace(/\/+$/, '') || '/';
    const seo = ROUTE_SEO[key] || ROUTE_SEO['/'];
    const canonical = `https://agenerativeslice.com${key === '/' ? '/' : key + '/'}`;
    document.title = seo.title;

    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', value);
    };
    setMeta('meta[name="description"]', seo.description);
    setMeta('meta[property="og:title"]', seo.title);
    setMeta('meta[property="og:description"]', seo.description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[name="twitter:title"]', seo.title);
    setMeta('meta[name="twitter:description"]', seo.description);
    setMeta('meta[name="twitter:url"]', canonical);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#111] dark:text-white transition-colors duration-300 flex flex-col">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <main className="flex-grow">
        <Suspense fallback={<RouteFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/data-deletion" element={<DataDeletionPage />} />
              <Route path="/callback" element={<CallbackPage />} />
              <Route path="/chennai" element={<ChennaiHubPage />} />
              <Route path="/chennai/:slug" element={<CityPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<InsightPage />} />
              <Route path="/ai-for-humans" element={<AiForHumansPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
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
