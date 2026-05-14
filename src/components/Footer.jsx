import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/c1.png";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  // CENTRALIZED DATA OBJECT
  // Add or change your real URLs here
  const footerData = {
    navigation: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      
      { name: "Portfolio", path: "/projects" },
      
      { name: "Contact", path: "/contact" },
    ],
    services: [
      {
        title: "Engineering & Tech",
        links: [
          { name: "Web Development", path: "/web-development" },
          { name: "Mobile App Development", path: "/mobile-app-development" },
          { name: "Product MVP Development", path: "/engineering&technology#product-mvp" },
          { name: "UI/UX Design", path: "/engineering&technology#ui-ux" },
          { name: "Custom Software Development", path: "/engineering&technology#custom-software" },
          { name: "AI & Automation Solutions", path: "/ai-driven-solutions" },
          { name: "API Development & Integration", path: "/engineering&technology#api-dev" },
          { name: "E-Commerce Platforms", path: "/e-commerce-platforms&solutions" },
        ],
      },
      {
        title: "Digital Growth & Marketing",
        links: [
          { name: "Social Media Management", path: "/digital-growth&marketing#social-media-management" },
          { name: "Search Engine Optimization", path: "/digital-growth&marketing#seo" },
          { name: "Product Strategy & Digital Transformation", path: "/digital-growth&marketing#product-stratagy&digital-transformation" },
          { name: "Data Analytics & Performance Optimization", path: "/digital-growth&marketing#data-analytics&performance-optimization" },
          { name: "Digital Presence Setup", path: "/services/presence-setup" },
        ],
      },
      {
        title: "Business Strategy & Consulting",
        links: [
          { name: "Business Model & Growth Strategy", path: "/business-strategy&consulting#section1" },
          { name: "Digital Transformation Consulting", path: "/business-strategy&consulting#section2" },
          { name: "Go-To-Market (GTM) Strategy", path: "/business-strategy&consulting#section3" },
          { name: "Data & Technology Consulting", path: "/business-strategy&consulting#section4" },
          { name: "Startup Advisory", path: "/business-strategy&consulting#section5" },
          { name: "Business Process & Documentation", path: "/business-strategy&consulting#section6" },
        ],
      },
    ],
    socials: [
      { Icon: FaFacebook, href: "https://web.facebook.com/profile.php?id=61587551161680" },
      { Icon: FaInstagram, href: "https://www.instagram.com/axstartech/" },
      { Icon: FaLinkedin, href: "https://www.linkedin.com/company/axstartech" },
      { Icon: FaXTwitter, href: "https://x.com/Axstartech" },
      { Icon: FaWhatsapp, href: "https://wa.me/94711191251" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Cookies", path: "/cookie-policy" },
    ]
  };

  return (
    <footer className="relative bg-[#050505] z-10 text-gray-400 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-20">
          <div className="space-y-4">
            <Link to="/">
              <img src={logo} className="w-48 brightness-110" alt="Axstar Logo" />
            </Link>
            <p className="text-sm max-w-sm text-neutral-500">
              Building the next generation of digital experiences with precision engineering and creative strategy.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
             <Link to="/contact" className="group flex items-center justify-center gap-2 bg-[var(--primary-color)] text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black">
                Start a Project <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
             </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Nav Column */}
          <div className="col-span-1">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.25em] mb-8 opacity-50">
              Navigation
            </h3>
            <ul className="space-y-4 text-[15px]">
              {footerData.navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-neutral-500 hover:text-[var(--primary-color)] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Columns */}
          {footerData.services.map((category) => (
            <div key={category.title} className="col-span-1">
              <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.25em] mb-8 opacity-50">
                {category.title}
              </h3>
              <ul className="space-y-4 text-[14px]">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-neutral-500 hover:text-[var(--primary-color)] transition-colors block leading-snug">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials Column */}
          <div className="col-span-1">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.25em] mb-8 opacity-50">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {footerData.socials.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:scale-110 transition-all">
                  <social.Icon size={21} />
                </a>
              ))}
            </div>
            <div className="space-y-3 text-sm">
               <a href="tel:+94711191251" className="flex items-center gap-2 text-neutral-500 hover:text-[var(--primary-color)] transition-colors">
                 <Phone size={14} className="text-[var(--primary-color)]" /> +94 711 191 251
               </a>
               <a href="mailto:hello@axstar.com" className="flex items-center gap-2 text-neutral-500 hover:text-[var(--primary-color)] transition-colors">
                 <Mail size={14} className="text-[var(--primary-color)]" /> hello@axstar.com
               </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] tracking-widest text-neutral-600 uppercase">
            © {new Date().getFullYear()} AxstarTech. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[11px] tracking-widest text-neutral-600 uppercase">
            {footerData.legal.map((item) => (
              <Link key={item.name} to={item.path} className="hover:text-[var(--primary-color)] transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;