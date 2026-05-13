import React from 'react';
import { Share2, Link, ShieldCheck, FileCode, Zap, Activity, ArrowRight } from 'lucide-react';

import e7 from "../../../assets/e7-1.png";


const APIIntegration = () => {
  const deliverables = [
    { icon: <Share2 size={20} className="text-blue-400" />, text: "Custom API development (REST / GraphQL)" },
    { icon: <Link size={20} className="text-emerald-400" />, text: "Third-party integrations (Payment, CRM, etc.)" },
    { icon: <ShieldCheck size={20} className="text-rose-400" />, text: "Secure authentication (OAuth, JWT)" },
    { icon: <FileCode size={20} className="text-amber-400" />, text: "API documentation & versioning" },
    { icon: <Zap size={20} className="text-purple-400" />, text: "Data synchronization & connectivity" },
    { icon: <Activity size={20} className="text-cyan-400" />, text: "Testing, monitoring & performance tuning" },
  ];

  return (
    <section id='api-dev' className="bg-[#000000] py-20 px-6 md:py-32 text-slate-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-20">
          
          
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
            Service 07
          </span>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-[#e9e7e2]">API Development & Integration</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Container (Left Side) */}
          <div className="relative group rounded-2xl aspect-square lg:aspect-[4/5] overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
              <img 
                src={e7} 
                alt="Cloud server and API connectivity diagram by the Axstar web app development team in Colombo" loading="lazy"
                className="object-cover opacity-60 w-full h-full grayscale-0 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content Container (Right Side) */}
          <div className="flex flex-col">
            <div className="max-w-xl mb-12">
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                We build <span className="text-white font-normal">robust APIs</span> and integrate systems to ensure smooth communication between platforms. 
                Axstar helps you create a <span className="text-slate-200 font-medium">connected and efficient digital ecosystem</span>.
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

export default APIIntegration;