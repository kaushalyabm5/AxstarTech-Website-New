import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopWebDev = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 200); // show after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById("webdev-hero").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
  <div className="hidden md:flex fixed right-27 bottom-6 flex-col items-center z-50">
    <button
      onClick={scrollToTop}
      className="cursor-pointer bg-[var(--primary-color)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--primary-color)]/50 transition-all duration-300"
    >
      <FaArrowUp />
    </button>
  </div>
)}
    </>
  );
};

export default ScrollToTopWebDev;