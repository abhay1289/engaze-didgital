
import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Metrics from './components/Metrics';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import WorkPage from './components/WorkPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  const renderContent = () => {
    switch (currentRoute) {
      case 'about':
        return <About />;
      case 'services':
        return <ServicesPage />;
      case 'work':
        return <WorkPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <>
            <div className="relative z-10 bg-dark-base mb-[85vh] md:mb-[80vh] shadow-2xl shadow-black transition-all">
              <Hero />
              <Services />
              <Metrics />
              <CaseStudies />
              <Process />
              <FAQ />
              <Testimonials />
            </div>

            <div className="fixed bottom-0 left-0 w-full h-[85vh] md:h-[80vh] z-0">
              <Footer />
            </div>
          </>
        );
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-dark-base selection:bg-teal-primary selection:text-dark-base font-sans transition-colors duration-500">

      <Navbar onNavigate={setCurrentRoute} currentRoute={currentRoute} />
      {renderContent()}
    </div>
  );
};

export default App;
