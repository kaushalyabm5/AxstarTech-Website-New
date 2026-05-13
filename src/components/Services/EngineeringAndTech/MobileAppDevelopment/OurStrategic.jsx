import React from 'react';

const OurStrategic = () => {
  const steps = [
    {
      title: "Analyze the Business Requirements",
      desc: "We collaborate closely with your stakeholders to define core objectives, understand your goals, target users, and desired outcomes.",
    },
    {
      title: "Development and Implementation",
      desc: "Our engineering team utilizes agile development to build scalable, feature-rich solutions. We deliver in efficient, transparent stages to ensure the product evolves with your vision.",
    },
    {
      title: "Quality Assurance and Testing",
      desc: "Every development phase includes comprehensive testing protocols. We identify and resolve technical debt early, ensuring a reliable, high-performance final product.",
    },
    {
      title: "Deployment & Infrastructure Management",
      desc: "We handle the complexities of mobile app store deployment and provide dedicated maintenance to ensure long-term stability and security.",
    },
    {
      title: "Operational User Training & Support",
      desc: "We empower your team with the knowledge and tools required to manage and navigate the application effectively for daily business operations.",
    },
    {
      title: "Optimization & Continuous Improvement",
      desc: "Post-launch, we monitor performance metrics and user feedback to implement data-driven updates, ensuring your digital product remains competitive.",
    }
  ];

  return (
    <section className="w-full py-24 bg-[#000000] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="relative mb-20">
          
          <div className="relative z-10 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
              The Lifecycle
            </span>
            <h2 className="text-3xl md:text-5xl text-center font-light leading-tight text-[#e9e7e2] mb-6">
              Our Strategic Mobile App <br />Development Lifecycle
            </h2>
            <p className="bg-clip-text text-center text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] w-[80%] mx-auto text-[1.rem] leading-relaxed">
              At Axstar Technologies, our refined development process ensures your mobile solution aligns perfectly with your business objectives while maintaining peak performance. We employ a disciplined, iterative methodology that prioritizes high-end quality and seamless user experiences.
            </p>




      
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[black]  rounded-3xl overflow-hidden">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group relative bg-[#0a0a0a] p-10 transition-all duration-500 hover:bg-[#0f0f0f]"
            >
              {/* Animated Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] transition-all duration-700 group-hover:w-full" />
              
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-bold text-neutral-800/50 group-hover:text-[var(--primary-color)]/20 transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-[var(--primary-color)]/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] shadow-[0_0_10px_#6366f1]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mb-4 transition-colors">
                  {step.title}
                </h3>

                <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default OurStrategic;