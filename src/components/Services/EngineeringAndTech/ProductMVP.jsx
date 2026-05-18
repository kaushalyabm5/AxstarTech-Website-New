import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, PenTool, Box, GitBranch, MessageSquare, Zap, ArrowRight } from 'lucide-react';

import e3 from "../../../assets/e3-1.png";


const ProductMVP = () => {
  const deliverables = [
    { icon: <Target size={20} className="text-red-400" />, text: "Product strategy & feature prioritization" },
    { icon: <PenTool size={20} className="text-blue-400" />, text: "Wireframes & interactive prototypes" },
    { icon: <Box size={20} className="text-orange-400" />, text: "Core functionality development" },
    { icon: <GitBranch size={20} className="text-emerald-400" />, text: "Agile development cycles" },
    { icon: <MessageSquare size={20} className="text-purple-400" />, text: "User testing & iteration support" },
    { icon: <Zap size={20} className="text-yellow-400" />, text: "MVP launch with scalable foundation" },
  ];

  return (
    <section id='product-mvp' className="bg-[#000000] py-20 px-6 md:py-32 text-slate-300">
      <Helmet>
        <title>Rapid MVP Development in Sri Lanka | Axstar</title>
        <meta name="description" content="Need to validate your startup idea quickly? Build a scalable, AI-powered MVP in weeks with Axstar’s expert software engineers in Sri Lanka." />
        <meta property="og:image" content="https://axstartech.com/axstartechog.webp" />
        <meta property="og:title" content="Rapid MVP Development in Sri Lanka | Axstar" />
        <meta property="og:description" content="Need to validate your startup idea quickly? Build a scalable, AI-powered MVP in weeks with Axstar’s expert software engineers in Sri Lanka." />
      </Helmet>
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-20">
          
          
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
            Service 03
          </span>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-[#e9e7e2]">Product MVP Development</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Container (Back to Left) */}
          <div className="relative group rounded-2xl aspect-square lg:aspect-[4/5] overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
              <img 
                src={e3} 
                alt="Product design and strategy planning session at the Axstar MVP development agency in Colombo" loading="lazy"
                className="object-cover w-full h-full opacity-60 grayscale-0 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col">
            <div className="max-w-xl mb-12">
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                Axstar helps startups bring ideas to life by building <span className="text-white font-normal">lean, market-ready MVPs</span>. 
                We focus on core features that <span className="text-slate-200 font-medium">validate your idea</span> and reduce time-to-market.
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

export default ProductMVP;