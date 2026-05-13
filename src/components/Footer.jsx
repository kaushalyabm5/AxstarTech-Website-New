import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/c1.png";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black z-10 text-gray-300 px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
          
          {/* Brand Column */}
          <div className="flex-1">
            <div className="mb-4">
              <Link to="/">
                <img src={logo} className="w-[14rem]" alt="Axstar agency logo representing custom MVP and app development in Colombo Sri Lanka" loading="lazy" />
              </Link>
              
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs italic">
              "Let’s create something extraordinary together!"
            </p>

  




          </div>

          {/* Links Group */}
          <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-10">
            
            {/* Main Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] border-gray-800 pb-2">
                Main
              </h3>
              <ul className="space-y-3 text-sm">
                
                <li className="">
                  <Link to="#" className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Home</Link>
                </li>

                <li className="">
                  <Link to="/about" className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">About Us</Link>
                </li>

                <li className="">
                  <Link to="/careers" className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Careers</Link>
                </li>

                <li className="">
                  <Link to="/portfolio" className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Portfolio</Link>
                </li>

                <li className="">
                  <Link to="/contact" className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Contact Us</Link>
                </li>
              
               
                
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]  border-gray-800 pb-2">
                Services
              </h3>
              <ul className="space-y-3 text-sm">
                 <li className="">
                  <Link to="/engineering&technology" className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Engineering & Technology</Link>
                </li>

                 <li className="">
                  <Link to="/digital-growth&marketing#digital-growth-hero" className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Digital Growth & Marketing</Link>
                </li>

                 <li className="">
                  <Link to="/business-strategy&consulting" className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">Business Strategy & Consulting</Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]  border-gray-800 pb-2">
                Follow Us On
              </h3>
              <div className="flex flex-wrap gap-5">
                <a href="https://web.facebook.com/profile.php?id=61587551161680" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
                </a>
                <a href="https://www.instagram.com/axstartech/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
                </a>
                <a href="https://wa.me/94711191251" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
                </a>
                <a href="https://www.linkedin.com/company/axstartech" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
                </a>
                <a href="https://x.com/Axstartech?s=20" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter size={20} className="text-[var(--primary-color)] hover:text-white cursor-pointer transition-transform hover:-translate-y-1" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 tracking-wide">
            © 2026 AXSTAR. ALL RIGHTS RESERVED.
          </p>
          
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;