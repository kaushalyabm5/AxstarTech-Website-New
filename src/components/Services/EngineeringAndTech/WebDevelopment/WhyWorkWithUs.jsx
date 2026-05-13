import React from 'react';

const WhyWorkWithUs = () => {
  const points = [
    { title: "Performance", desc: "Fast, smooth performance you can rely on" },
    { title: "Design", desc: "Clean, simple designs that people enjoy using" },
    { title: "Security", desc: "Security baked in from the start" },
    { title: "Scalability", desc: "Solutions that scale as your business grows" },
    { title: "Support", desc: "A team that’s with you before, during, and after launch" }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#020202] py-24 px-6 overflow-hidden">
     

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. CENTERED TITLE */}
        <div className="text-center mb-20">
        

           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-3 block">
           Built for Growth
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">Why Work With Us</h2>
          
        </div>

        {/* 2. SPLIT LAYOUT: IMAGE LEFT, LIST RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: IMAGE/GRAPHIC */}
          <div className="relative group">
            
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center">
              {/* Placeholder for your image */}
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                alt="Step-by-step software engineering process diagram at Axstar web app development in Colombo" loading="lazy"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* RIGHT SIDE: LIST POINTS */}
          <div className="flex flex-col gap-8">
            {points.map((point, index) => (
              <div key={index} className="group flex items-start gap-6 border-b border-white/5 pb-6 last:border-0">
                <span className="text-emerald-500 font-mono text-lg mt-1">0{index + 1}—</span>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] ] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;