import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Exxplore = () => {
  const industries = [
    { id: "01", title: "Healthcare & Fitness Apps", desc: "Bespoke wellness platforms designed for high user engagement and secure medical data management." },
    { id: "02", title: "E-commerce & Retail Apps", desc: "Scalable shopping experiences that convert visitors into loyal customers through seamless UI." },
    { id: "03", title: "Finance & Banking Apps", desc: "Enterprise-grade security meets modern fintech aesthetics for the next generation of banking." },
    { id: "04", title: "Education & E-learning Apps", desc: "Interactive learning ecosystems built to facilitate knowledge sharing across global networks." }
  ];

  return (
    <div className="w-full bg-[#000000] py-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-24">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            The Lifecycle
          </span>

          <h2 className="text-3xl md:text-5xl text-center font-light leading-tight text-[#e9e7e2] mb-6">
            Explore Axstar App Development <br />Expertise Across Industries
          </h2>

          <p className="text-zinc-500 text-center text-base md:text-lg leading-relaxed">
            Axstar builds high-performing mobile apps and websites for multiple industries worldwide.
            Our expert team helps you grow your online presence through data-driven design and advanced technology.
          </p>
        </div>

        {/* Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent"></div>

          {industries.map((item, index) => (
            <div
              key={item.id}
              className={`relative group ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >

              {/* Horizontal Line */}
              <div className={`hidden md:block absolute top-1/2 w-12 h-px bg-zinc-800 group-hover:bg-[var(--primary-color)] transition-colors duration-500 ${index % 2 === 0 ? '-right-12' : '-left-12'}`}>
                <div className={`absolute top-[-2px] w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-[var(--primary-color)] transition-colors ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>
              </div>

              {/* Card */}
              <div className="relative z-10 bg-[#0d0d0d] border border-white/5 p-8 md:p-5 md:py-8 rounded-2xl transition-all duration-700 hover:border-[var(--primary-color)]/30 md:group-hover:-translate-y-2">

                {/* Glossy */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

                <div className="relative z-20">
                  <h3 className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-light tracking-tight mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  {/* ✅ BUTTON FIXED HERE */}
                  <a href='/projects'>
                      <div className="
                    flex cursor-pointer bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]
                    w-max px-4 py-2 rounded-full items-center gap-2 text-white text-xs uppercase tracking-widest
                    transition-all duration-500
                  ">
                    <span>View Projects</span>

                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition">
                      <FaArrowRight className="text-black text-sm" />
                    </div>
                  </div>
                  </a>
                  

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exxplore;