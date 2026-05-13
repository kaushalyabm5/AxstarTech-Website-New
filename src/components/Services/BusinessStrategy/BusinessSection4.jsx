import React from 'react';
import { motion } from 'framer-motion';
import businessImg4 from "../../../assets/business-img-4.png";

const BusinessSection4 = () => {
  const deliverables = [
    "Data strategy & governance framework", 
	"Business intelligence (BI) & analytics solutions", 
	"Technology architecture design", 
	"System integration strategy", 
	"KPI dashboards & performance reporting", 
 


  ];

  return (
    <section id='section4' className="w-full min-h-screen bg-[#000000] text-white flex items-center justify-center px-6 py-16 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          
          
          <h2 className="text-[1rem] uppercase tracking-[0.4em] text-gray-500"></h2>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">Data & Technology Consulting</h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
           We help organizations leverage data and technology to drive smarter decisions, optimize performance, and gain a competitive edge.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          
          {/* Visual Side - Abstract Growth Graphics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video lg:aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 overflow-hidden group"
          >
            <img 
              src={businessImg4} 
              alt="Data visualization dashboards for Axstar web app development clients in Colombo Sri Lanka" loading="lazy"
              className="w-full h-full object-cover opacity-50 grayscale-0 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            
            
          </motion.div>

          {/* Deliverables Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
                Key Deliverables
              </h3>
              <div className="h-px w-12 bg-white/20" />
            </div>

            <div className="space-y-6">
              {deliverables.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6 group"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-mono text-sm group-hover:text-white/60 transition-colors">
                    0{index + 1}
                  </span>
                  <p className="text-lg font-light text-gray-300 group-hover:text-white transition-colors tracking-wide">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessSection4;