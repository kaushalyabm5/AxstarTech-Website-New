import React from "react";

const VisionMission = () => {
  const missionText = "To deliver high-performance software, digital solutions, and strategic consulting that simplify complexity, drive measurable results, and help our clients achieve sustainable growth.";
  const visionText = "To empower businesses around the world with innovative technology and strategic insights, enabling them to grow, adapt, and succeed in an ever-evolving digital landscape.";

  return (
    <section className="w-full bg-[#000000] py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Changed md:flex-row to lg:flex-row to give tablets more breathing room */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          
          {/* MISSION CARD */}
          <div className="flex-1 group bg-[#0a0a0a] border border-neutral-800/0 p-6 sm:p-10 md:p-12 rounded-2xl transition-all duration-500 hover:border-neutral-600/0">
            <div className="flex flex-col h-full">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#e9e7e2] opacity-30"></div>
                
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                Our Mission
              </h2>
              
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {missionText}
              </p>
            </div>
          </div>

          {/* VISION CARD */}
          <div className="flex-1 group bg-[#0a0a0a] p-6 border border-neutral-800/0 sm:p-10 md:p-12 rounded-2xl transition-all duration-500 hover:shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#e9e7e2] opacity-30"></div>
                
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                Our Vision
              </h2>
              
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {visionText}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;