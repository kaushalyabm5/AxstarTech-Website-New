import React from "react";

const AboutExcellence = () => {
  return (
    <section className="relative w-full py-20 px-4 bg-black text-[#e9e7e2] overflow-hidden">

      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-[#e9e7e2] mb-8 ">
           
          </h2>

        


          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
           Driven by standards
          </span>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-[#e9e7e2] mb-16">Our Pillars of Excellence</h2>


        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[var(--primary-color)]/40 to-transparent">
            <div className="relative h-full rounded-2xl bg-[#0b0b0b] p-8 flex flex-col justify-center items-center text-center overflow-hidden">

              {/* Glow */}
              <div className="absolute inset-0 bg-[var(--primary-color)]/10 blur-2xl opacity-40"></div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-[var(--primary-color)] rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[var(--primary-color)] rounded-tl-full"></div>

              <h3 className="text-4xl md:text-5xl font-semibold">Innovative Technology </h3>
              <p className="mt-3 text-sm italic text-gray-400">
                
              </p>
              <p className="mt-2 text-[.9rem] text-gray-500 max-w-xs">
               Leveraging the latest software, AI, and automation to create scalable, efficient, and intelligent systems.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[var(--primary-color)]/40 to-transparent">
            <div className="relative h-full rounded-2xl bg-[#0b0b0b] p-8 flex flex-col justify-center items-center text-center overflow-hidden">

              {/* Glow */}
              <div className="absolute inset-0 bg-[var(--primary-color)]/10 blur-2xl opacity-40"></div>

              {/* Decorative pixels */}
              <div className="absolute top-4 right-4 grid grid-cols-2 gap-1">
                <div className="w-3 h-3 bg-[var(--primary-color)]"></div>
                <div className="w-3 h-3 bg-[var(--primary-color)]"></div>
                <div className="w-3 h-3 bg-[var(--primary-color)]"></div>
                <div className="w-3 h-3 bg-[var(--primary-color)]"></div>
              </div>

              <div className="absolute bottom-4 left-4 grid grid-cols-2 gap-1">
                <div className="w-3 h-3 bg-[var(--primary-color)]"></div>
                <div className="w-3 h-3 bg-[var(--primary-color)]"></div>
                <div className="w-3 h-3 bg-[var(--primary-color)]"></div>
                <div className="w-3 h-3 bg-[var(--primary-color)]"></div>
              </div>

              <h3 className="text-4xl md:text-5xl font-semibold">High Impact Solutions </h3>
              <p className="mt-3 text-sm italic text-gray-400">
                
              </p>
              <p className="mt-2 text-[.9rem] text-gray-500 max-w-xs">
                Delivering measurable outcomes through smart digital strategies, custom software, and enterprise grade solutions tailored to your business challenges.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutExcellence;