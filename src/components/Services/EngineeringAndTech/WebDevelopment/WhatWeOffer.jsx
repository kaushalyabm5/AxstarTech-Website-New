import React from 'react';
import { 
  FiCloud, FiCode, FiFileText, FiPenTool, 
  FiSearch, FiSmartphone, FiTrendingUp, FiZap 
} from 'react-icons/fi';

const WhatWeOffer = () => {
  const offers = [
    { icon: <FiCode />, title: "Fully Custom Coded", desc: "No templates or pre-made builders used.", color: "text-blue-400" },
    { icon: <FiPenTool />, title: "Unique Premium Designs", desc: "Tailored specifically to match your brand identity.", color: "text-purple-400" },
    { icon: <FiSmartphone />, title: "100% Mobile Responsive", desc: "Optimized for desktops, tablets, and smartphones.", color: "text-green-400" },
    { icon: <FiFileText />, title: "Result-Focused Content", desc: "Content tailored to your business goals.", color: "text-yellow-400" },
    { icon: <FiTrendingUp />, title: "Lead-Driven Strategy", desc: "Built to convert visitors into customers.", color: "text-pink-400" },
    { icon: <FiSearch />, title: "SEO Optimization", desc: "SEO-ready structure for better search visibility.", color: "text-cyan-400" },
    { icon: <FiZap />, title: "Fast Support", desc: "Quick response and dedicated communication.", color: "text-orange-400" },
    { icon: <FiCloud />, title: "Cloud Hosting", desc: "Reliable hosting with security and maintenance.", color: "text-indigo-400" },
  ];

  return (
    <section id='what-we-offer' className="relative w-full bg-[#000000] text-white py-24 px-6 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-3 block">
           Focused on Impact
          </span>
    <h2 className="text-3xl text-center font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">
    What We Offer
    </h2>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((item, index) => (
            <div 
              key={index}
              className="group relative flex flex-col p-8 rounded-2xl bg-[#0e0d0d] border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className={`text-3xl ${item.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>

              {/* Text Content - flex-1 ensures alignment */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-white/90">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity ${item.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;