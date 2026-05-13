import React from 'react';
import {
  FiSmartphone, FiLayout, FiLayers, FiShield,
  FiGlobe, FiDatabase, FiLink, FiBox, FiZap, FiCode
} from "react-icons/fi";

const WhatWeDoMobileDev = () => {
  const services = [
    { title: "Custom App Development", desc: "We build tailored mobile apps for iOS and Android that match your business goals.", icon: <FiSmartphone /> },
    { title: "UI/UX Design", desc: "Simple, clean, and user-friendly designs for a smooth app experience.", icon: <FiLayout /> },
    { title: "Cross-Platform Apps", desc: "One app that works seamlessly across all devices, saving time and cost.", icon: <FiLayers /> },
    { title: "Testing & Support", desc: "We test, launch, and continuously improve your app for performance and security.", icon: <FiShield /> },
    { title: "Full-Cycle App Services", desc: "End-to-end mobile app solutions that boost growth, performance, and reach.", icon: <FiBox /> },
    { title: "Mobile Web Apps", desc: "Fast, responsive web apps optimized for all mobile devices.", icon: <FiGlobe /> },
    { title: "Backend Development", desc: "Secure and scalable backend systems with APIs and real-time data handling.", icon: <FiDatabase /> },
    { title: "App Integration", desc: "Connect your app with third-party tools to improve workflow and efficiency.", icon: <FiLink /> },
    { title: "Product Development", desc: "We build complete mobile products that drive engagement and business growth.", icon: <FiBox /> },
    { title: "Progressive Web Apps (PWA)", desc: "High-performance web apps with native-like experience and better SEO.", icon: <FiZap /> },
    { title: "iOS & Android Apps", desc: "High-quality apps built using modern technologies for maximum performance.", icon: <FiCode /> },
  ];

  return (
    <section className="w-full bg-[#000000] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Left Aligned for a more editorial feel */}
        <div className="mb-20 border-b border-white/10 pb-10">
          



           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
              The Lifecycle
            </span>
            <h2 className="text-3xl md:text-5xl text-center font-light leading-tight text-[#e9e7e2] mb-6">
              What We Do
            </h2>
        </div>

        {/* List UI */}
        <div className="flex flex-col">
          {services.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/5 transition-all duration-500 hover:bg-white/[0.02] px-4"
            >
              <div className="flex items-center gap-6 md:w-1/3">
                {/* Numbering */}
                <span className="text-neutral-700 font-mono text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {/* Icon - Minimalist style */}
                <div className="text-neutral-500 text-2xl group-hover:text-[var(--primary-color)] transition-colors duration-300">
                  {item.icon}
                </div>
                {/* Title */}
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-xl md:text-2xl font-medium transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description - Fades in/becomes clearer on hover */}
              <div className="mt-4 md:mt-0 md:w-1/2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Action Indicator - Only visible on desktop hover */}
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <FiZap className="text-[var(--primary-color)] text-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoMobileDev;