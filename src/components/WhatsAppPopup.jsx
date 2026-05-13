import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppPopup() {
  const phoneNumber = "94711191251";
  const message = "Hello! I'm interested in your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={handleClick}
        className="
          group flex items-center 
          bg-green-500 hover:bg-green-600 text-white 
          rounded-full shadow-lg overflow-hidden 
          transition-all duration-500 ease-out
          cursor-pointer justify-center
        "
      >
        {/* Perfect Circle Icon */}
        <div className="w-14 h-14 flex items-center justify-center">
          <FaWhatsapp className="text-3xl" />
        </div>

        {/* Smooth Expanding Text */}
        <span
          className="
            max-w-0 
            opacity-0 
            translate-x-[-10px]
            whitespace-nowrap 
            overflow-hidden 
            transition-all duration-500 ease-out
            group-hover:max-w-[160px] 
            group-hover:opacity-100 
            group-hover:translate-x-0
            pr-5
            text-sm font-medium
          "
        >
          Chat with us
        </span>
      </button>
    </div>
  );
}