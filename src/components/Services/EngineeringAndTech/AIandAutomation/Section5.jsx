import React from 'react';

const Section5 = () => {
  const data = [
    {
      step: "1. Find the Gaps",
      process: "We audit your daily tasks to find where you are losing time and money.",
      benefit: "A Clear Plan: You’ll see exactly where AI can save you the most hours.",
    },
    {
      step: "2. Build the Tools",
      process: "We create custom Chatbots, Task Bots, and Automations for your specific needs.",
      benefit: "Custom Logic: Tools built for your business, not a generic 'one-size-fits-all.'",
    },
    {
      step: "3. Plug & Play",
      process: "We connect these new AI tools into your existing email and cloud workspace.",
      benefit: "Zero Stress: Everything works together perfectly from day one.",
    },
    {
      step: "4. Watch it Grow",
      process: "We monitor the AI and fine-tune it every month to make it even smarter.",
      benefit: "Better Results: A business that gets faster and more accurate over time.",
    },
  ];

  return (
    <div className="w-full px-6 py-16 bg-[#000000] rounded-[2rem]">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          
        </p>

       


         <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            Built for Growth
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">The Axstar AI & Automation Roadmap</h2>
      </div>

      

      {/* Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div 
            key={index}
            className="group relative p-8 rounded-2xl bg-gradient-to-b from-[#0c0c0c] to-[#02170f] border border-[var(--primary-color)]/50 hover:border-[var(--primary-color)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
          
            
            {/* Step Number Label */}
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]  text-white text-xs font-bold uppercase tracking-widest mb-6">
              Step {index + 1}
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
              {item.step.split('. ')[1]}
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] uppercase tracking-wider mb-2">Process</p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.process}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <p className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] uppercase tracking-wider mb-2">Benefit</p>
                <p className="text-white text-sm font-medium leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;