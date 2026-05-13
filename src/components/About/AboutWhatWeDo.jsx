import React from "react";


const AboutWhatWeDo = () => {
  return (
    <section id="who-we-are-about"
      className="w-full bg-[black] py-15 flex items-center justify-center bg-cover bg-center relative"
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-full px-6 py-12 text-center flex flex-col items-center">
        
       

         

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
            Who we are inside
          </span>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-[#e9e7e2]">Who We Are</h2>

        
        
        {/* Description */}
        <p className="mt-6 text-xs sm:text-sm md:text-[1.6rem] bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] max-w-5xl leading-relaxed">
          Axstar is a modern software and technology company dedicated to building smart, scalable digital solutions. We combine expert engineering, innovative technology, and strategic insight to transform complex business challenges into high-performance software that drives measurable growth.
        </p>

        {/* Description */}
        <p className="mt-6 text-xs sm:text-sm md:text-[1.6rem] bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] max-w-5xl leading-relaxed">
          From custom applications and AI-driven automation to seamless digital experiences, we empower businesses to innovate, optimize, and scale with confidence. At Axstar, we don’t just develop software, we create the digital foundation for your future success.
        </p>

      </div>
    </section>
  );
};

export default AboutWhatWeDo;