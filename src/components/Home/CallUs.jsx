import React from "react";
import logo from "../../assets/c1.png";

const CallUs = () => {
  return (
    <section className="relative z-10 w-full bg-black text-[#e9e7e2] py-40 px-4 flex items-center justify-center">


      
      <div className="max-w-3xl w-full text-center flex flex-col items-center">
        
        {/* Logo */}
        <div className="mb-6">
          <img
            src={logo}
            alt="Axstar contact section logo for custom mobile app development in Colombo" loading="lazy"
            className="w-70 md:w-90 lg:w-90 object-contain mx-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl text-center font-light md:text-5xl leading-tight text-[#e9e7e2] mb-4">
       Ready to Sync Your Success?
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mb-8">
          We’re here to transform your ideas into high-performing digital experiences. Let’s make it happen.
        </p>

        {/* Button */}
        <a href="/contact"> 
          <button className="bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] cursor-pointer text-black px-6 py-2.5 sm:px-8 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[var(--primary-color)] transition duration-300">
          Start a Conversation
        </button>
        </a>
        

      </div>
    </section>
  );
};

export default CallUs;