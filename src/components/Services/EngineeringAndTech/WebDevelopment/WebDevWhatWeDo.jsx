import React from 'react';
import { FaHeadset, FaLayerGroup, FaMobileAlt, FaPalette } from 'react-icons/fa';

const WebDevWhatWeDo = () => {
  const services = [
    {
      title: "Custom Mobile App Development",
      description: "Tailored solutions built from the ground up to reflect your unique business goals.",
      icon: <FaMobileAlt />,
    },
    {
      title: "UI/UX Design",
      description: "Clean, intuitive designs crafted to make user interaction simple and enjoyable.",
      icon: <FaPalette />,
    },
    {
      title: "Cross-Platform Development",
      description: "Seamless experiences across all devices, optimizing both time and cost.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Quality & Ongoing Support",
      description: "Reliable post-launch maintenance to ensure your app remains fast and secure.",
      icon: <FaHeadset />,
    },
  ];

  return (
    <section className="w-full bg-[#000000] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center">
            

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-3 block">
           Built with Precision
          </span>
    <h2 className="text-3xl text-center font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">
    What We Do
    </h2>
          <div className="w-12 h-[1px] bg-neutral-700 mx-auto"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-px bg-neutral-900 border border-neutral-900 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-[#000000] p-10 flex flex-col transition-all duration-500 hover:bg-[#141414]"
            >
              {/* Icon Container - Fixed Height for Alignment */}
              <div className="text-neutral-500 text-xl mb-8 group-hover:text-white transition-colors duration-300 min-h-[24px]">
                {item.icon}
              </div>

              {/* Title - Forced Minimum Height for Alignment */}
              <h3 className="text-lg font-medium text-neutral-200 mb-4 tracking-wide min-h-[3.5rem] flex items-start">
                {item.title}
              </h3>

              {/* Description - Forced Minimum Height for Alignment */}
              <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] leading-relaxed font-light transition-colors duration-300 min-h-[4.5rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevWhatWeDo;