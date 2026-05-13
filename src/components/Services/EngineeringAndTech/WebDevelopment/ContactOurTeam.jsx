import React from 'react';

const ContactOurTeam = () => {
  return (
    <div className="relative w-full bg-transparent py-24 px-6 flex items-center justify-center overflow-hidden">
      {/* Optional: Subtle Radial Glow for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#02b96d]/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl w-full text-center flex flex-col items-center">
        
        {/* Modernized Subtitle/Badge */}
        


        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-3 block">
           Ready to start?
          </span>

        {/* Title: Balanced and bold */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white  leading-[1.15] tracking-tight">
          Let’s build something <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">
            that works for you
          </span>
        </h2>

        {/* Description: Wider line-height for readability */}
        <p className="mt-6 text-base md:text-lg text-neutral-400 leading-relaxed max-w-4xl">
          Your web app should make life easier, not harder. Whether it’s a simple tool or a 
          full scale platform, we’ll design and build something that feels right for your 
          business and your users.
        </p>

        {/* Button: Original styles preserved */}
        
        <a href='/contact'>
        <button className="bg-gradient-to-r mt-10 from-[var(--primary-color)] via-[#02b96d] to-[#186d60] cursor-pointer text-black px-6 py-2.5 sm:px-8 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[var(--primary-color)] transition duration-300">
          Contact Our Team
        </button>
        </a>
        

      </div>
    </div>
  );
};

export default ContactOurTeam;