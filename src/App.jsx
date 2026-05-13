import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";

/* ===== IT & Technology Services ===== */
import WebDevelopment from "./components/Services/EngineeringAndTech/WebDevelopment/WebDevelopment";
import MobileAppDevelopment from "./components/Services/EngineeringAndTech/MobileAppDevelopment/MobileAppDevelopment";
import ProductMVP from "./components/Services/EngineeringAndTech/ProductMVP";



/* ===== Digital Services ===== */

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact/ContactPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ProjectDetails from "./components/Projects/ProjectDetails";
import WhatsAppPopup from "./components/WhatsAppPopup";
import CareersPage from "./components/Careers/CareersPage";



import AiDrivenSolutions from "./components/Services/EngineeringAndTech/AIandAutomation/AiDrivenSolutions";
import EngineeringandTechPage from "./components/Services/EngineeringAndTech/EngineeringandTechPage";
import DigitalGrowthPage from "./components/Services/digitalGrowth/DigitalGrowthPage";
import BusinessStrategyPage from "./components/Services/BusinessStrategy/BusinessStrategyPage";
import EcommercePage from "./components/Services/EngineeringAndTech/Ecommerce/EcommercePage";



const AppWrapper = () => {
  const scrollRef = useRef();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Initial page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loader
    return () => clearTimeout(timer);
  }, []);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // shorter loader for navigation
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // 🔥 Only render loader while loading
  if (loading) return <Loading />;

  return (
    <>
      <ScrollToTop scrollRef={scrollRef} />
      <SmoothScroll ref={scrollRef}>
        <div
          className="
            min-h-screen
            w-full
            bg-cover
            bg-center
            bg-fixed
            bg-blend-darken
            bg-[url('/src/assets/mobile-bg-4.jpeg')]
            md:bg-[url('/src/assets/hero-bg-23.png')]
          "
        >
          <div className="max-w-full mx-auto">
            <Navbar />

            <Routes>
              {/* ===== Main Pages ===== */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project-details" element={<ProjectDetails />} />
              <Route path="/careers" element={<CareersPage />} />

              {/* ===== Engineering & Technology Services ===== */}
              <Route path="/engineering&technology" element={<EngineeringandTechPage />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/mvp-development" element={<ProductMVP />} />
              <Route path="/ai-driven-solutions" element={<AiDrivenSolutions />} />
              <Route path="/e-commerce-platforms&solutions" element={<EcommercePage />} />
             
            

              {/* ===== Digital Growth & Marketing ===== */}
              <Route path="/digital-growth&marketing" element={<DigitalGrowthPage />} />
             

              {/* ===== BusinessStrategy & Consulting ===== */}
              <Route path="business-strategy&consulting" element={<BusinessStrategyPage />} />
            
            </Routes>

            <WhatsAppPopup />
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;