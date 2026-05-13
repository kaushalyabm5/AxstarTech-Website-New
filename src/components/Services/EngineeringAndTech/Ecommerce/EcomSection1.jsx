import React from 'react';
import { Layers, Target, RefreshCw } from 'lucide-react';

const EcomSection1 = () => {
  const features = [
    {
      title: "Architectural Excellence",
      description: "Custom-coded solutions that scale with your traffic, not just \"out-of-the-box\" templates.",
      icon: <Layers size={32} color="#006769" />,
    },
    {
      title: "Conversion-First Design",
      description: "UX/UI strategies rooted in user psychology to reduce cart abandonment.",
      icon: <Target size={32} color="#006769" />,
    },
    {
      title: "Seamless Integration",
      description: "Syncing your storefront perfectly with your existing ERP, CRM, and Inventory Management.",
      icon: <RefreshCw size={32} color="#006769" />,
    },
  ];

  return (
    <section className="bg-black py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          
          


             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            Explore the Power of AI with Axstar
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">The "Axstar" Difference</h2>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-800 rounded-2xl bg-[#000000] transition-all duration-300 group"
            >
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="p-3 rounded-lg bg-[var(--primary-color)]/10 group-hover:bg-[#006769]/20 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mb-4 text-center md:text-left">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-center md:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcomSection1;