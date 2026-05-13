import React from "react";
import aboutImg from "../../assets/about-img7.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative z-10 w-full bg-[#000000] text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* TOP SECTION: TITLE & SUBHEAD */}
        <div className="border-b text-center border-white/10 pb-12 mb-16 md:mb-2">
         


           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[.8rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            What We Do
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">Turning intent into impact <br /></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          
          {/* LEFT: MINIMAL TEXT CONTENT */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-400 leading-snug">
                Axstar is a strategic technology partner. We specialize in custom software and digital transformation that scale.
              </p>
              
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
                Our approach is simple: remove complexity, optimize performance, and deliver solutions that are smarter and faster. No fluff, just results.
              </p>
            </div>

            <div className="mt-12 md:mt-0">
              <Link to="/about">
                                <button className="group cursor-pointer relative hover:text-transparent inline-flex items-center gap-4 px-10 py-4 overflow-hidden rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] transition-all duration-300 hover:border-[var(--primary-color)]">
                              <span className="relative z-10 text-xs font-bold uppercase tracking-widest">Explore More</span>
                              <ArrowRight 
                                size={16} 
                                className="relative z-10 transition-transform duration-500 group-hover:translate-x-2" 
                              />
                              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] transition-transform duration-500 ease-in-out"></div>
                              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black text-xs font-bold uppercase tracking-widest">
                                Explore More
                                
                              </span>
                              
                            </button>
                            </Link>
            </div>
          </div>

          {/* RIGHT: CLEAN IMAGE FRAME */}
          <div className="md:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-[#000000] grayscale-0 hover:grayscale-0 transition-all duration-1000 ease-in-out">
              <img
                src={aboutImg}
                alt="Interior view of the Axstar MVP and app development agency workspace in Sri Lanka" loading="lazy"
                className="w-full h-full object-cover aspect-video md:aspect-[4/3]"
              />
              
             
            </div>
          </div>

        </div>

        

      </div>
    </section>
  );
};

export default About;