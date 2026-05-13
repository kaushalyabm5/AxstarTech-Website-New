import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import digitalImg2 from "../../../assets/seo.png";

const DigitalSetup3 = () => {
  const deliverables = [
    "Comprehensive Keyword & Competitor Research",
    "On-Page Optimization & Content Mapping",
    "High-Quality Backlink Building & PR",
    "Local SEO & Google Business Profile Management",
    
  ];

  return (
    <section id='seo' className="bg-[#000000] text-white px-5 pt-30 pb-20 overflow-hidden selection:bg-emerald-500/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Zap size={14} className="text-emerald-500 fill-emerald-500" />
          </div>

          
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
            Rank Higher Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white mb-6">
            Search Engine Optimization (SEO)
          </h2>
          <p className="max-w-3xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed font-light px-2 md:px-0">
            Being on page one isn't a luxury; it’s a necessity. We optimize your digital footprint to ensure that when your customers are looking for a solution, they find you first. By focusing on both the technical health of your site and high-quality content, we build long-term organic authority that reduces your dependence on paid ads.
          </p>
        </motion.header>

        {/* Bento Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Deliverables List - Responsive Spanning */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-zinc-900/20 border border-zinc-800/50 p-8 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-xl flex flex-col justify-center"
          >
            <h3 className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 mb-8 md:mb-10 font-bold">
              <Sparkles size={14} className="text-emerald-500" />
              Key Deliverables
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              {deliverables.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 pb-4 md:pb-5 border-b border-zinc-800/50 last:border-0 group cursor-default"
                >
                  <CheckCircle2 size={20} className="text-emerald-500/40 group-hover:text-emerald-500 transition-colors shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-zinc-400 group-hover:text-zinc-100 transition-colors font-light tracking-wide">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image & CTA Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Image Card - Fixed height for tablet stack, flex-1 for desktop */}
            <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-zinc-800/50 h-[300px] md:h-[400px] lg:h-auto lg:flex-1">
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={digitalImg2} 
                alt="Digital strategy workflow diagram for Axstar MVP development in Colombo Sri Lanka" loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent pointer-events-none" />
            </div>

            {/* CTA Button */}
          
                        <a href='/contact'>
                            <button className="w-full md:w-[50%] md:mx-auto lg:w-full bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-black py-4 md:py-4 rounded-[1.5rem] md:rounded-[2rem] font-bold uppercase text-base md:text-[1.1rem] tracking-[.1em] flex items-center justify-center gap-3 hover:bg-white transition-all duration-500 group cursor-pointer shadow-lg shadow-emerald-500/10">
                          Talk to Expert 
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                        </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DigitalSetup3;