import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutPageImg3 from "../../assets/about-img-5.jpg";

const OurStory = () => {
  const containerRef = useRef(null);
  
  // Image scroll parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="bg-[#000000] text-white py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-24 selection:bg-[var(--primary-color)]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mb-12 md:mb-20 text-center"
        >
          

           

           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
           How it all began
          </span>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-white mb-16">Our Story</h2>
        </motion.div>

        {/* Main Grid - Adjusted for Tablet (md) and Desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-10 lg:gap-24 items-center">
          
          {/* Left Side: Animated Image */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <div className="overflow-hidden bg-black aspect-[4/5] rounded-sm">
              <motion.img
                style={{ y: imageY, scale: imageScale }}
                src={aboutPageImg3}
                alt="The modern studio workspace of Axstar app development agency in Colombo Sri Lanka" loading="lazy"
                className="w-full h-full object-cover opacity-80 grayscale-0 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Minimal floating accent - Hidden on small mobile to avoid layout shifts */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 h-24 w-24 md:h-32 md:w-32 border-r border-b border-zinc-800" />
          </div>

          {/* Right Side: Narrative Content */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-8 md:space-y-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-snug text-[#e9e7e2]">
                At <span className="font-semibold text-[#e9e7e2]">Axstar</span>, innovation is more than a goal—it’s in our DNA. 
                We build technology that empowers businesses to grow and thrive.
              </p>

              <div className="space-y-8 border-t border-zinc-800/50 pt-8">
                {/* Nested grid for Journey/Craft - Always 2 columns on tablet and up */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="text-[var(--primary-color)] font-bold uppercase text-[10px] tracking-[0.3em]">The Journey</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      From a small team to a dynamic hub of digital innovation, we create intelligent, future ready solutions.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[var(--primary-color)] font-bold uppercase text-[10px] tracking-[0.3em]">The Craft</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Every line of code is guided by our commitment to excellence and measurable impact.
                    </p>
                  </div>
                </div>

                <p className="text-base md:text-lg text-zinc-300 italic border-l border-zinc-700 pl-6 py-1">
                  "Turning ambitious ideas into reality and shaping the future of digital innovation."
                </p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <a href="/contact">
              <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="pt-4 flex items-center gap-4 md:gap-8"
            >
              <button className="whitespace-nowrap px-6 md:px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] cursor-pointer text-black font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#e9e7e2] transition-all duration-300">
                Partner With Us
              </button>
              <div className="h-[1px] flex-grow bg-zinc-900"></div>
            </motion.div>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;