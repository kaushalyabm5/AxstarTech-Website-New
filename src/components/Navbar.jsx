import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiPhone,
  FiGrid,
  FiChevronDown,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import logo from "../assets/c1.png";

/* ---------------- NAV ITEMS ---------------- */
const navItems = [
  { id: "home", label: "Home", icon: <FiHome size={20} />, path: "/" },
  { id: "services", label: "Services", icon: <FiGrid size={20} />, path: "/services" },
  { id: "about", label: "About Us", icon: <FiUser size={20} />, path: "/about" },
  { id: "careers", label: "Careers", icon: <FiUser size={20} />, path: "/careers" },
  { id: "projects", label: "Portfolio", icon: <FiFolder size={20} />, path: "/projects" },
  { id: "contact", label: "Contact Us", icon: <FiPhone size={20} />, path: "/contact" },
];

/* ---------------- SERVICES ---------------- */
const engineeringTech = [
  { label: "Web Development", path: "/web-development" },
 
  { label: "Mobile App Development", path: "/mobile-app-development" },
  { label: "Product MVP Development", path: "/engineering&technology#product-mvp" },
  { label: "UI/UX Design", path: "/engineering&technology#ui-ux" },
  { label: "Custom Software Development ", path: "/engineering&technology#custom-software" },
  { label: "AI & Automation Solutions", path: "/ai-driven-solutions" },
  { label: "API Development & Integration ", path: "/engineering&technology#api-dev" },
  { label: "E-commerce Platforms & Solutions ", path: "/e-commerce-platforms&solutions" },
 
];

const businessStrategy = [
  { label: "Business Model & Growth Strategy", path: "/business-strategy&consulting#section1" },
  { label: "Digital Transformation Consulting", path: "/business-strategy&consulting#section2" },
  { label: "Go-To-Market (GTM) Strategy", path: "/business-strategy&consulting#section3" },
  { label: "Data & Technology Consulting", path: "/business-strategy&consulting#section4" },
  { label: "Startup Advisory", path: "/business-strategy&consulting#section5" },
  { label: "Business Process & Documentation", path: "/business-strategy&consulting#section6" },
];

const digitalGrowth = [
  { label: "Social Media Management", path: "/digital-growth&marketing#social-media-management" },
  { label: "Search Engine Optimization (SEO)", path: "/digital-growth&marketing#seo" },
  { label: "Product Strategy & Digital Transformation", path: "/digital-growth&marketing#product-stratagy&digital-transformation" },
  { label: "Data Analytics & Performance Optimization", path: "/digital-growth&marketing#data-analytics&performance-optimization" },
  { label: "Digital Presence Setup", path: "/digital-growth&marketing#digital-presence-setup" },
];

export default function Navbar() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const desktopDropdownRef = useRef(null);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    itTech: false,
    digital: false,
    business: false,
  });

  /* ---------------- HERO MAP ---------------- */
  const heroMap = {
    "/": "home-hero",
    "/about": "about-hero",
    "/contact": "contact-hero",
    "/careers": "career-hero",
    "/projects": "projects-hero",
    "/services": "services-hero",
  };

  /* ---------------- HANDLE NAV CLICK ---------------- */
  const handleNavClick = (path, heroId) => (e) => {
    if (location.pathname === path && heroId) {
      e.preventDefault();
      const section = document.getElementById(heroId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      if (heroId) sessionStorage.setItem("scrollTarget", heroId);
    }
  };

  /* ---------------- AUTO SCROLL AFTER NAVIGATION ---------------- */
  useEffect(() => {
    const targetId = sessionStorage.getItem("scrollTarget");
    if (targetId) {
      setTimeout(() => {
        const section = document.getElementById(targetId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollTarget");
      }, 200);
    }
  }, [location]);

  useEffect(() => {
    setOpenServices(false);
    setMobileMenu(false);
    setMobileDropdowns({
      services: false,
      itTech: false,
      digital: false,
      business: false,
    });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setOpenServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* ================= MOBILE NAVBAR ================= */}
      <nav className="lg:hidden fixed top-2 left-1/2 -translate-x-1/2 w-[95%] rounded-[2rem] z-50 bg-white/10 backdrop-blur-xl shadow-lg px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={handleNavClick("/", heroMap["/"])}>
          <img src={logo} className="w-[3.5rem] sm:w-[4rem]" alt="Axstar tech agency logo for mobile and web app development in Colombo" />
        </Link>

        <button onClick={() => setMobileMenu(!mobileMenu)} className="text-[#e9e7e2] text-2xl">
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {/* ================= MOBILE MENU ================= */}
<div
  className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black text-[#e9e7e2] z-40 transition-all duration-300 ${
    mobileMenu ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="pt-24 px-5 sm:px-6 space-y-4 overflow-y-auto h-full">
    {navItems.map((item) => {
      if (item.id !== "services") {
        return (
          <Link
            key={item.id}
            to={item.path}
            onClick={handleNavClick(item.path, heroMap[item.path])}
            className={`block py-3 border-b border-white/10 text-base sm:text-lg transition-colors duration-300 ${
              location.pathname === item.path
                ? "text-[var(--primary-color)] font-medium"
                : "text-[#e9e7e2]"
            }`}
          >
            {item.label}
          </Link>
        );
      }

      // Services dropdown
      return (
        <div key={item.id}>
          <button
            onClick={() => toggleMobileDropdown("services")}
            className="flex justify-between w-full py-3 border-b border-white/10 text-base sm:text-lg font-bold"
          >
            {item.label}
            <FiChevronDown className={`transition-transform duration-300 ${mobileDropdowns.services ? "rotate-180" : ""}`} />
          </button>

          {mobileDropdowns.services && (
            <div className="pl-0 mt-4 space-y-6">
              {/* Engineering & Technology */}
              <div>
                <Link
                  to="/engineering&technology"
                  onClick={handleNavClick("/it&technology", heroMap["/it&technology"])}
                  className="flex justify-between items-center text-[var(--primary-color)] font-bold text-lg mb-2"
                >
                  Engineering & Technology <FiChevronRight />
                </Link>
                <div className="pl-4 space-y-1">
                  {engineeringTech.map((s, i) => (
                    <Link
                      key={i}
                      to={s.path}
                      onClick={handleNavClick(s.path, heroMap[s.path])}
                      className="block text-[#e9e7e2] text-base hover:text-[var(--primary-color)] transition-colors duration-300"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Digital Services */}
              <div>
                <Link
                  to="/digital-growth&marketing#digital-growth-hero"
                  onClick={handleNavClick("/digital-services", heroMap["/digital-services"])}
                  className="flex justify-between items-center text-[var(--primary-color)] font-bold text-lg mb-2"
                >
                  Digital Growth & Marketing <FiChevronRight />
                </Link>
                <div className="pl-4 space-y-1">
                  {digitalGrowth.map((s, i) => (
                    <Link
                      key={i}
                      to={s.path}
                      onClick={handleNavClick(s.path, heroMap[s.path])}
                      className="block text-[#e9e7e2] text-base hover:text-[var(--primary-color)] transition-colors duration-300"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Business Consulting */}
              <div>
                <Link
                  to="/business-strategy&consulting#business-strategy-hero"
                  onClick={handleNavClick("/it&business", heroMap["/it&business"])}
                  className="flex justify-between items-center text-[var(--primary-color)] font-bold text-lg mb-2"
                >
                  Business Strategy & Consulting  <FiChevronRight />
                </Link>
                <div className="pl-4 space-y-1">
                  {businessStrategy.map((s, i) => (
                    <Link
                      key={i}
                      to={s.path}
                      onClick={handleNavClick(s.path, heroMap[s.path])}
                      className="block text-[#e9e7e2] text-base hover:text-[var(--primary-color)] transition-colors duration-300"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className={`hidden lg:flex fixed top-5 rounded-[1rem] border border-[1px] border-neutral-700 left-1/2 -translate-x-1/2 w-[90%] px-6 xl:px-10 py-3 justify-between items-center z-50 transition-all duration-300 ${
          scrolled || openServices
            ? "bg-white/10 backdrop-blur-xl shadow-lg"
            : "bg-white/10 backdrop-blur-xl shadow-lg"
        }`}
      >
        <Link to="/" onClick={handleNavClick("/", heroMap["/"])}>
          <img src={logo} className="w-[4rem] xl:w-[5rem]" alt="Axstar tech agency logo for mobile and web app development in Colombo" />
        </Link>

        <ul className="flex gap-6 xl:gap-12 items-center">
          {navItems.filter((item) => item.id !== "contact").map((item) => (
            <li key={item.id} className="relative">
              {item.id === "services" ? (
                <div ref={desktopDropdownRef}>
                  <button
                    onClick={() => setOpenServices(!openServices)}
                    className={`flex cursor-pointer items-center gap-2 text-sm xl:text-[.9rem] transition-colors duration-300 ${
                      location.pathname.startsWith("/services") ||
                      engineeringTech.some((s) => s.path === location.pathname) ||
                      businessStrategy.some((s) => s.path === location.pathname) ||
                      digitalGrowth.some((s) => s.path === location.pathname)
                        ? "text-[var(--primary-color)]"
                        : "text-[#e9e7e2]"
                    }`}
                  >
                    {item.label}
                    <FiChevronDown className={`transition-transform duration-300 ${openServices ? "rotate-180" : ""}`} />
                  </button>

                      {/**dropdown -desktop */}
                  <div
                    className={`fixed left-0 rounded-[2rem] top-[75px] w-full bg-gradient-to-br from-[#010505] to-[#00251f] backdrop-blur-xl transition-all duration-300 ${
                      openServices ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="max-w-7xl mx-auto px-6 xl:px-12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20">
                      <div>
                        <h3 className="text-[1rem] text-[var(--primary-color)] font-semibold mb-5">
                          <Link to="/engineering&technology" className="flex items-center gap-1">
                            Engineering & Technology <FiChevronRight className="text-[1rem]" strokeWidth={3} />
                          </Link>
                        </h3>
                        {engineeringTech.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            onClick={handleNavClick(s.path, heroMap[s.path])}
                            className={`block mb-4 text-[.9rem] transition-colors duration-300 ${
                              location.pathname === s.path
                                ? "text-[var(--primary-color)] font-medium"
                                : "text-[#e9e7e2] hover:text-[var(--primary-color)]"
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>



                      <div>
                        <h3 className="text-[1rem] text-[var(--primary-color)] font-semibold mb-5">
                          <Link to="/digital-growth&marketing#digital-growth-hero" className="flex items-center gap-1">
                          Digital Growth & Marketing <FiChevronRight className="text-[1rem]" strokeWidth={3} />
                          </Link>
                        </h3>
                        {digitalGrowth.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            onClick={handleNavClick(s.path, heroMap[s.path])}
                            className={`block text-[.9rem] mb-4 transition-colors duration-300 ${
                              location.pathname === s.path
                                ? "text-[var(--primary-color)] font-medium"
                                : "text-[#e9e7e2] hover:text-[var(--primary-color)]"
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>

                      <div>
                        <h3 className="text-[1rem] text-[var(--primary-color)] font-semibold mb-5">
                          <Link to="/business-strategy&consulting" className="flex items-center gap-1">
                            Business Strategy & Consulting <FiChevronRight className="text-[1rem]" strokeWidth={3} />
                          </Link>
                        </h3>
                        {businessStrategy.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            onClick={handleNavClick(s.path, heroMap[s.path])}
                            className={`block mb-4 text-[.9rem] transition-colors duration-300 ${
                              location.pathname === s.path
                                ? "text-[var(--primary-color)] font-medium"
                                : "text-[#e9e7e2] hover:text-[var(--primary-color)]"
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>

                      
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={handleNavClick(item.path, heroMap[item.path])}
                  className={`text-sm xl:text-[.9rem] transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-[var(--primary-color)] font-medium"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {navItems.filter((item) => item.id === "contact").map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={handleNavClick(item.path, heroMap[item.path])}
            className="px-6 py-2 border border-neutral-500 bg-neutral-900/50 text-[var(--primary-color)] text-[.7rem] font-bold tracking-widest uppercase font-medium rounded-[.5rem] transition-all duration-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}