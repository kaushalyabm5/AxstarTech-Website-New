import React from 'react';
import appimg1 from "../../../../assets/mobile-app-img.png";

const Section3 = () => {
  return (
    <section className="bg-[black] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header Section - Centered */}
        <div className="text-center mb-16 md:mb-24">
      
           <h2 className="text-[1rem] uppercase tracking-[0.4em] text-gray-500"></h2>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">Building High-Performance Apps for Global Businesses</h2>
          
        </div>

        {/* 2. Content Grid - Image Left, Description Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Container (Left) */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
             
              
              <img
                src={appimg1}
                alt="Modern mobile interface design created by Axstar mobile app development in Colombo Sri Lanka" loading="lazy"
                className="relative opacity-65 w-full max-w-lg h-auto object-contain rounded-[2rem] border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Description Container (Right) */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <p className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] leading-relaxed font-light italic border-l-2 border-emerald-500 pl-6">
                Axstar provides affordable, reliable mobile app development for businesses worldwide. 
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                We build high-performing iOS and Android apps with clean UI/UX and ongoing support. 
                As a trusted offshore team, we turn your ideas into scalable digital products 
                quickly and efficiently.
              </p>
            </div>
            
            {/* Optional Premium Element: Stats or Link */}
            <a href='/projects'>
                <div className="pt-4">
               <button className="text-white bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] cursor-pointer border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-white transition-all duration-300">
                 Explore Our Portfolio
               </button>
            </div>
            </a>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section3;