import React from 'react';
import { BarChart, Server, Code, Database, CheckCircle, FileText, ArrowRight } from 'lucide-react';

import e5 from "../../../assets/e5-1.png";


const CustomSoftware = () => {
  const deliverables = [
    { icon: <BarChart size={20} className="text-indigo-400" />, text: "Business requirement analysis" },
    { icon: <Server size={20} className="text-blue-400" />, text: "System architecture & technical planning" },
    { icon: <Code size={20} className="text-emerald-400" />, text: "Custom software development" },
    { icon: <Database size={20} className="text-amber-400" />, text: "Scalable backend & database design" },
    { icon: <CheckCircle size={20} className="text-rose-400" />, text: "QA testing & performance validation" },
    { icon: <FileText size={20} className="text-slate-400" />, text: "Deployment & technical documentation" },
  ];

  return (
    <section id='custom-software' className="bg-[#000000] py-20 px-6 md:py-32 text-slate-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-20">
          
          
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
            Service 05
          </span>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-[#e9e7e2]">Custom Software Development</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Container (Left Side) */}
          <div className="relative group rounded-2xl aspect-square lg:aspect-[4/5] overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
              <img 
                src={e5} 
                alt="Complex custom software architecture diagram by Axstar app development in Colombo" loading="lazy"
                className="object-cover w-full opacity-60 h-full grayscale-0s group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content Container (Right Side) */}
          <div className="flex flex-col">
            <div className="max-w-xl mb-12">
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                We build <span className="text-white font-normal">tailored software solutions</span> designed specifically for your unique business processes. 
                Axstar focuses on <span className="text-slate-200 font-medium">efficiency, scalability, and long-term reliability</span> to help you operate smarter.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-black mb-8">
                Key Deliverables
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {deliverables.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group/item"
                  >
                    <span className="mr-4 transition-transform duration-300 group-hover/item:scale-110">
                      {item.icon}
                    </span>
                    <span className="text-sm text-slate-400 group-hover/item:text-slate-200 font-light">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomSoftware;