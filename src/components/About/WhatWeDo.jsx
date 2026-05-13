import React from 'react';

const WhatWeDo = () => {
  const services = [
    {
      id: "01",
      title: "Engineering & Technology",
      description: "We build high-performance software, web & mobile applications, AI driven solutions, and custom platforms that solve complex business challenges."
    },
    {
      id: "02",
      title: "Digital & Marketing Solutions",
      description: "From digital transformation strategy to data driven marketing, we help businesses engage customers and achieve measurable results."
    },
    {
      id: "03",
      title: "Business Strategy & Consulting",
      description: "We provide business model design, startup advisory, and go to market strategies to help companies scale sustainably."
    }
  ];

  return (
    <div className=" bg-[#000000] text-[#e9e7e2] px-6 py-16 md:py-24 lg:py-2">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12 md:mb-20 text-center">
           {/* Heading */}
      

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
           Solutions we create
          </span>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-[#e9e7e2] mb-16">What We Do</h2>
          
          <p className="max-w-2xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-base md:text-lg leading-relaxed">
            At Axstar, we help businesses innovate, grow, and scale through a 
            combination of technology, digital expertise, and strategic guidance.
          </p>
        </header>

        {/* Services Grid - Fixed for Responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-500 ease-out 
                ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`} 
            >
              {/* Note: The logic above centers the 3rd card on tablets for better visual balance */}

              <h3 className="text-xl md:text-2xl font-medium mb-4 text-center group-hover:text-[var(--primary-color)] transition-colors duration-300">
                {service.title}
              </h3>
              
              <div className="w-12 h-[1px] bg-neutral-700 mx-auto mb-6 group-hover:w-24 transition-all duration-500"></div>

              <p className="text-neutral-400 leading-relaxed text-center font-light text-sm md:text-base">
                {service.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[var(--primary-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;