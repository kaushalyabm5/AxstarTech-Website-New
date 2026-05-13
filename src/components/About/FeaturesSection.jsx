import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Agile Tech Team",
      description: "Combining startup energy with seasoned expertise to deliver strategic, high impact solutions."
    },
    {
      title: "Client-Centered",
      description: "Tailored technology built around your specific goals to ensure measurable, long term growth."
    },
    {
      title: "Full Coverage",
      description: "From custom AI automation to data consulting, we handle complex digital challenges with precision."
    },
    {
      title: "Future-Ready",
      description: "Creating scalable, high-performance solutions using the latest industry best practices."
    }
  ];

  return (
    <section className="bg-[#000000] text-[#e9e7e2] py-35 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Sticky Header (Saves vertical space) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          

           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]  text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
          What sets us apart
          </span>
          <h2 className="text-5xl font-light mt-4 leading-tight">
            Why Axstar <br/>
            <span className="">Stands Out</span>
          </h2>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mt-6 text-sm max-w-xs">
            Our methodology is built on speed, precision, and client-focused results.
          </p>
        </div>

        {/* Right Side: Compressed List */}
        <div className="lg:col-span-8 border-t border-white/10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group py-8 border-b border-white/10 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 transition-all duration-300 hover:bg-white/[0.02]"
            >
              {/* Condensed Title */}
              <div className="md:w-1/3 shrink-0">
                <h3 className="text-xl text-[#e9e7e2] font-medium group-hover:text-[var(--primary-color)] transition-colors">
                  {feature.title}
                </h3>
              </div>

              {/* Condensed Description */}
              <div className="md:w-2/3">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;