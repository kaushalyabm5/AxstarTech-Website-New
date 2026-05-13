import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/c1.png";

const Loading = ({ duration = 2000, onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame;
    let isFinished = false;

    const update = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(update);
      } else if (!isFinished) {
        isFinished = true;
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onFinishRef.current) onFinishRef.current();
          }, 500);
        }, 500);
      }
    };

    animationFrame = requestAnimationFrame(update);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [duration]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Logo */}
      <img src={logo} alt="Axstar tech agency logo loading screen for app development services in Colombo" className="w-32 h-auto mb-6 relative z-10" />

      {/* Premium spinner */}
      <div className="relative w-16 h-16">
        {/* Outer arc */}
        <div className="absolute inset-0 border-4 border-[var(--primary-color)] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        {/* Middle arc */}
        <div className="absolute inset-2 border-2 border-[var(--primary-color)] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-reverse"></div>
        {/* Inner arc */}
        <div className="absolute inset-4 border-2 border-t-[var(--primary-color)] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>

      <style>
        {`
          @keyframes spinReverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          .animate-spin-reverse {
            animation: spinReverse 1.2s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Loading;