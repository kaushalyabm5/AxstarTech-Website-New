import React from 'react';
import { Cpu, Zap, Globe } from 'lucide-react';

const EcomSection3 = () => {
  const features = [
    {
      title: "AI-Powered Personalization",
      description: "Product recommendations and dynamic pricing based on user behavior.",
      icon: <Cpu className="w-5 h-5 text-white" />,
      color: "from-blue-500/20 to-transparent",
    },
    {
      title: "Automated Marketing Funnels",
      description: "Integration with email and SMS automation to recover lost sales.",
      icon: <Zap className="w-5 h-5 text-white" />,
      color: "from-purple-500/20 to-transparent",
    },
    {
      title: "Global Readiness",
      description: "Multi-currency, multi-language, and local tax compliance (VAT/GST) built-in.",
      icon: <Globe className="w-5 h-5 text-white" />,
      color: "from-emerald-500/20 to-transparent",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Subtle Background Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] uppercase tracking-widest text-xs font-medium mb-4 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Advanced <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">"Next-Gen"</span> Features
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-xs border-l border-[var(--primary-color)] pl-6 py-2">
            A dedicated section showing off your technical consulting expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 overflow-hidden rounded-sm">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-black p-10 transition-all duration-500 hover:bg-zinc-950"
            >
            
              
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-900 group-hover:border-zinc-500 transition-colors duration-500">
                  {feature.icon}
                </div>
                
                <h3 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-medium mb-4 tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-zinc-700 rounded-full group-hover:scale-150 group-hover:bg-zinc-400 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcomSection3;