import React from 'react';
import { Globe, Layout, Database, Search, Zap, Rocket, ArrowRight } from 'lucide-react';

import e1 from "../../../assets/e1-1.jpg";
import { Link } from 'react-router-dom';


const WebDev = () => {
  const deliverables = [
    { icon: <Layout size={20} className="text-blue-400" />, text: "Custom-built websites & web applications" },
    { icon: <Globe size={20} className="text-emerald-400" />, text: "Fully responsive, cross-device compatibility" },
    { icon: <Database size={20} className="text-purple-400" />, text: "CMS integration (WordPress, Headless CMS, etc.)" },
    { icon: <Search size={20} className="text-amber-400" />, text: "SEO-friendly architecture" },
    { icon: <Zap size={20} className="text-rose-400" />, text: "Performance optimization & security" },
    { icon: <Rocket size={20} className="text-indigo-400" />, text: "Deployment, hosting & post-launch support" },
  ];

  return (
    <section id='web-dev' className="bg-[#000000] py-20 px-6 md:py-32 text-slate-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-20">
          



          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
            Service 01
          </span>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-[#e9e7e2]">Web Development</h2>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Container with Glow Effect */}
          <div className="relative group rounded-2xl aspect-square lg:aspect-[4/5] overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
              <img 
                src={e1}
                alt="Advanced web systems architecture created by the Axstar web app development team in Sri Lanka" loading="lazy"
                className="object-cover w-full h-full opacity-60 grayscale-0 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col">
            <div className="max-w-xl mb-12">
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                At <span className="text-white font-normal">Axstar</span>, we craft modern, 
                high-performance web solutions that go beyond visuals. Our approach focuses on 
                <span className="text-slate-200 font-medium"> speed, scalability, and seamless user experience</span>.
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

            {/* Read More Button - Ghost Variant */}
            <div className="mt-2">

              <Link to="/web-development">
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

        </div>
      </div>
    </section>
  );
};

export default WebDev;