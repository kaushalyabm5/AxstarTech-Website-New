import React from 'react';

const WhyChoose = () => {
  const cards = [
    { title: "User-friendly mobile experiences", desc: "Sell access to an exclusive Discord community." },
    { title: "Fast, secure, and scalable apps", desc: "Sell access to your TradingView indicators." },
    { title: "Agile collaboration and transparent communication", desc: "Sell access to an online course or program." },
    { title: "Cross-platform expertise for faster launch", desc: "Sell access to an exclusive Discord community." },
    { title: "Continuous support and maintenance", desc: "Sell access to an exclusive Discord community." },
  ];

  return (
    <div className="w-full bg-[#000000] text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP: CENTERED HEADER */}
        <div className="text-center mb-20 space-y-4">
          



          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            The Advantage
          </span>

          <h2 className="text-3xl md:text-5xl text-center font-light leading-tight text-[#e9e7e2] mb-6">
             Why Choose Axstar for <br />Mobile App Development?
          </h2>
          
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-lg max-w-3xl mx-auto leading-relaxed pt-4">
            Axstar, a leading mobile app development company in Sri Lanka, combines technical expertise with user-focused design to create fast, secure, and scalable apps.
          </p>
        </div>

        {/* BOTTOM: SPLIT CONTENT & IMAGE */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* LEFT: INTERACTIVE LIST */}
          <div className="w-full lg:w-1/2 space-y-2">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="group relative border-l border-neutral-800 p-6 transition-all duration-500 hover:border-[var(--primary-color)] hover:bg-white/[0.02]"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-[var(--primary-color)] transition-colors">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="mt-3 pl-8 text-neutral-500 text-sm md:text-base leading-relaxed group-hover:text-neutral-400 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: PREMIUM IMAGE CONTAINER */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Background Ambient Glow */}
            <div className="absolute -inset-4 bg-teal-500/10 rounded-full blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-[2rem] border border-neutral-800 bg-neutral-900/40 backdrop-blur-3xl overflow-hidden p-4">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-neutral-800">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                  alt="Advanced technology stack graphic for Axstar mobile app development services in Colombo" loading="lazy" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating UI Elements for "Advanced" look */}
              <div className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs text-teal-400 font-mono mb-1">// SYSTEM_STATUS</p>
                <p className="text-sm text-neutral-200">Delivering enterprise-grade mobile solutions with transparent collaboration.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WhyChoose;