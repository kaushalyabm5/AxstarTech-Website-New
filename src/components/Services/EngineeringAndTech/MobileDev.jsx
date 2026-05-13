import React from 'react';
import { Smartphone, Layers, Cpu, Activity, Cloud, RefreshCw, ArrowRight } from 'lucide-react';
import e2 from "../../../assets/e2-1.jpg";
import { Link } from 'react-router-dom';


const MobileDev = () => {
  const deliverables = [
    { icon: <Smartphone size={20} className="text-orange-400" />, text: "iOS & Android (Native/Cross-platform)" },
    { icon: <Layers size={20} className="text-cyan-400" />, text: "User-centric mobile UI implementation" },
    { icon: <Cpu size={20} className="text-pink-400" />, text: "Backend & API integration" },
    { icon: <Activity size={20} className="text-lime-400" />, text: "Performance optimization & testing" },
    { icon: <Cloud size={20} className="text-sky-400" />, text: "App Store & Google Play deployment" },
    { icon: <RefreshCw size={20} className="text-yellow-400" />, text: "Ongoing maintenance & updates" },
  ];

  return (
    <section className="bg-[#000000] py-20 px-6 md:py-32 text-slate-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-20">
          
        
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
            Service 02
          </span>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-[#e9e7e2]">Mobile App Development</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Container (Swapped to Left for visual variety) */}
          <div className="flex flex-col order-2 lg:order-1">
            <div className="max-w-xl mb-12">
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                We design and develop mobile applications that are not only functional but also 
                <span className="text-white font-normal"> intuitive, engaging, and scalable</span>. 
                Axstar ensures your app delivers a smooth experience while supporting 
                <span className="text-slate-200 font-medium"> long-term growth</span>.
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

          <div className="mt-2">
            <Link to="/mobile-app-development">
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

          {/* Image Container (Swapped to Right) */}
          <div className="relative group rounded-2xl aspect-square lg:aspect-[4/5] overflow-hidden order-1 lg:order-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
              <img 
                src={e2}
                alt="Modern mobile interface design created by Axstar mobile app development in Colombo Sri Lanka" loading="lazy"
                className="object-cover w-full h-full opacity-60 grayscale-0 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileDev;