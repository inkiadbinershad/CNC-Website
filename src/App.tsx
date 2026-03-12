import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ClickSpark } from './components/ClickSpark';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './sections/Footer';
import PageLoader from './components/PageLoader';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { RFQPage } from './pages/RFQPage';
import { CapabilitiesPage } from './pages/Capabilities';
import { MachinesPage } from './pages/Machines';
import { IndustriesPage } from './pages/Industries';
import { GalleryPage } from './pages/Gallery';
import { CertificationsPage } from './pages/Certifications';
import { ContactPage } from './pages/Contact';

function App() {
  const location = useLocation();
  const showMap = location.pathname === '/' || location.pathname === '/contact';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loading screen on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Show loader for 600ms on each route change

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-body">
      <ScrollToTop />
      <AnimatedBackground />
      <ClickSpark />
      <Navbar />
      
      {isLoading && <PageLoader />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rfq" element={<RFQPage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/machines" element={<MachinesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
      <Footer showMap={showMap} />
      <FloatingContact />
    </div>
  );
}

export default App;

