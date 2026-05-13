import React from "react";
import { FaBrain, FaHeadset, FaLaptopCode, FaUserTie } from "react-icons/fa";

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <FaBrain />,
      title: "Strategic Thinking",
      text: "Strategic planning and smart decision making to build solutions that support long term business growth.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Technology Expertise",
      text: "Deep technical knowledge and modern development tools used to create reliable and scalable digital solutions.",
    },
    {
      icon: <FaUserTie />,
      title: "Client Focus Approach",
      text: "We prioritize understanding client needs to deliver solutions that align perfectly with their goals.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      text: "Complete support throughout the entire process with reliable assistance available whenever you need it.",
    },
  ];

  return (
    <section id="why" className="relative w-full bg-[#000000] py-24 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl z-10 mx-auto">
        
        {/* Minimal Header */}
        <div className="mb-20 w-full">
          

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[.8rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            Our Edge
          </span>
          <h2 className="text-3xl text-center font-light md:text-5xl leading-tight text-[#e9e7e2]">
            The Axstar Advantage
          </h2>
        </div>

        <div className="w-full flex justify-center">
          {/* Changed grid-cols-1 (mobile) 
              to md:grid-cols-2 (tablet) 
              to lg:grid-cols-4 (desktop - all in one line) 
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 w-full">
            
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-start transition-all duration-300 pl-6 md:pl-8"
              >
                {/* Accent line - Visible on all screens to maintain the aesthetic */}
                <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-800 group-hover:bg-[var(--primary-color)] transition-colors duration-500" />

                {/* Icon */}
                <div className="text-[var(--primary-color)] text-2xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {card.icon}
                </div>

                {/* Content */}
                <h3 className="text-[#e9e7e2] text-lg font-medium mb-3 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {card.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;