import React from 'react';
import { Cpu, Code2, Server, ShoppingCart, Wallet } from 'lucide-react';

const EcomSection4 = () => {
  const techData = [
    {
      category: "Frontend",
      icon: <Code2 size={18} />,
      items: [
        { name: "React", slug: "react", color: "#61DAFB" },
        { name: "Vue.js", slug: "vuedotjs", color: "#4FC08D" },
        { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" }
      ]
    },
    {
      category: "Backend",
      icon: <Server size={18} />,
      items: [
        { name: "Node.js", slug: "nodedotjs", color: "#339933" },
        { name: "Python", slug: "python", color: "#3776AB" },
        { name: "Go", slug: "go", color: "#00ADD8" }
      ]
    },
    {
      category: "eCom Platforms",
      icon: <ShoppingCart size={18} />,
      items: [
        { name: "Shopify Plus", slug: "shopify", color: "#96BF48" },
        { name: "Magento", slug: "magento", color: "#EE672F" },
        { name: "Headless", slug: "doublezero", color: "#FFFFFF" } // Placeholder for Headless icon
      ]
    },
    {
      category: "Payments",
      icon: <Wallet size={18} />,
      items: [
        { name: "Stripe", slug: "stripe", color: "#635BFF" },
        { name: "PayPal", slug: "paypal", color: "#003087" },
        { name: "Gateways", slug: "googlepay", color: "#A0AEC0" }
      ]
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-6 min-h-screen flex flex-col items-center overflow-hidden">
      {/* Centered Top Header */}
      <div className="text-center mb-24 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/10 blur-[100px] rounded-full"></div>
        
        
        


        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            Systems Architecture
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">Our Tech Stack (The "Engine Room")</h2>

        <p className="text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed">
          A scrolling marquee or a neat grid of logos to show your software engineering depth.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        {techData.map((section, index) => (
          <div 
            key={index} 
            className="group relative bg-neutral-900/20 border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:bg-neutral-900/40 hover:border-white/20"
          >
            {/* Hover Spotlight */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.05)_0%,transparent_100%)]" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10 pb-4 border-b border-white/5">
                <span className="text-blue-500">{section.icon}</span>
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-black text-neutral-500">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-8">
                {section.items.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item cursor-default">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 group-hover/item:border-white/20 transition-all duration-300">
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
                        alt={`${tech.name} technology logo used in Axstar web app development in Colombo`} loading="lazy"
                        className="w-5 h-5 filter grayscale-0 group-hover/item:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-400 group-hover/item:text-white transition-colors">
                        {tech.name}
                      </p>
                      <div 
                        className="h-[1px] w-0 bg-current group-hover/item:w-full transition-all duration-500 opacity-50"
                        style={{ color: tech.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcomSection4;