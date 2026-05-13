import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiArrowRight, HiOutlineExternalLink } from 'react-icons/hi';
import projectMockup1 from '../../assets/portfolio-images/website1-sixnity/homepage-project-section/mockup1.png';
import projectMockup2 from '../../assets/portfolio-images/website2-ceylonSpace/homepage-project-section/mockUp2.png';
import projectMockup3 from '../../assets/portfolio-images/website-kuoni/homepage-section/mockup.png';

const projects = [
  {
    id: 1,
    title: "Sixnity Product Landing Page",
    description: "Sixnity is a modern fitness platform for workout tracking and progress monitoring, built with a responsive, component-based architecture and a clean dark UI for a smooth, scalable, and engaging experience.",
    image: projectMockup1,
  },
  {
    id: 2,
    title: "Website For ceylonspaceholidays",
    description: "Ceylon Space Holidays is a responsive travel website showcasing curated Sri Lankan tours, designed with smooth navigation, structured booking flow, and easy content management.",
    image: projectMockup2,
  },
  {
    id: 3,
    title: "Website for Kuoni Holydays",
    description: "This travel booking website presents global destinations and holiday packages through a modern, responsive interface with smooth navigation, clear booking flow, and a scalable, component-based structure.",
    image: projectMockup3,
  },
];

const LatestProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="relative z-10 min-h-[70vh] py-12 px-6 bg-[#000000] text-white flex flex-col justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Title Section - Slightly smaller margin */}
         {/* Heading */}
        {/*<h2 className="text-4xl md:text-6xl text-white mb-8 ">
           Our Latest Projects
          </h2>*/}



 

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[.8rem] font-medium tracking-[0.4em] uppercase mb-4 block">
           Showcasing our latest creations
          </span>
    <h2 className="text-3xl text-center font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">
    Our Latest Projects
    </h2>
          
          
        {/* Scaled Down 16:9 Card */}
        <div className="relative w-full aspect-video max-h-[320px] md:max-h-[380px] mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full rounded-xl overflow-hidden group shadow-xl border border-zinc-800/40"
            >
              <img
                src={projects[currentIndex].image}
                alt={`${projects[currentIndex].title} project by Axstar app development in Colombo`} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Text Overlay - More compact padding */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-6 md:p-8">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-zinc-400 max-w-lg text-xs md:text-sm line-clamp-2 leading-relaxed">
                    {projects[currentIndex].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Responsive Footer Navigation */}
        <div className="w-full flex items-center justify-between">
          
          {/* Button: All Projects */}
          <a href='/projects'>
                <button 
            className="flex cursor-pointer items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-800  text-sm text-zinc-400 hover:text-[#e9e7e2] hover:bg-zinc-800 transition-all duration-300 group"
          >
            All Projects
            <HiOutlineExternalLink className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          </a>
          

          {/* Right Side: Counter + Nav */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-baseline gap-1.5">
              <span className="text-xl font-medium text-[#e9e7e2]">0{currentIndex + 1}</span>
              <span className="text-zinc-600 text-[10px] font-mono tracking-tighter uppercase">/ 0{projects.length}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 cursor-pointer rounded-full border border-zinc-800 bg-zinc-900 hover:bg-[#e9e7e2] hover:text-black transition-colors active:scale-95 duration-200"
                aria-label="Previous"
              >
                <HiArrowLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 cursor-pointer rounded-full border border-zinc-800 bg-zinc-900 hover:bg-[#e9e7e2] hover:text-black transition-colors active:scale-95 duration-200"
                aria-label="Next"
              >
                <HiArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;