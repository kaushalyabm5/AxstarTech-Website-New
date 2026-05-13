import React, { useRef } from "react";
import { User, MessageCircle, Layout, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: User,
    title: "Understand, Analysis & Explore",
    description:
      "We begin by thoroughly understanding your business, target audience, and project requirements. This ensures every decision aligns with your goals and sets a solid foundation for success.",
  },
  {
    icon: MessageCircle,
    title: "Plan & Strategize",
    description:
      "Using insights from the discovery phase, we develop a clear roadmap and plan, focusing on the most effective approach to achieve your objectives efficiently.",
  },
  {
    icon: Layout,
    title: "Development & Progress Updates",
    description:
      "Our team builds your solution using the latest technologies, while providing regular progress updates to keep you informed at every stage.",
  },
];

const Process2 = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    // 1. Simple Header Fade
    gsap.from(".process-header", {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: ".process-header",
        start: "top 85%",
      },
    });

    // 2. The "Growing Line" Animation
    gsap.from(lineRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: ".steps-container",
        start: "top 70%",
        end: "bottom 80%",
        scrub: 1, // Line grows as you scroll
      },
    });

    // 3. Staggered Step Reveal
    const stepItems = gsap.utils.toArray(".step-item");
    stepItems.forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        x: step.classList.contains("md:flex-row-reverse") ? 30 : -30,
        duration: 0.8,
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // 4. Final Launch Entrance
    gsap.from(".final-launch", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".final-launch",
        start: "top 90%",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="how" className="w-full bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="process-header text-center mb-24">

        

           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[.8rem] font-medium tracking-[0.4em] uppercase mb-4 block">
           A clear roadmap from concept to reality
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">How We Do It</h2>
          
        
        </div>

        <div className="steps-container relative">
          {/* The Animated Line */}
          <div 
            ref={lineRef}
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--primary-color)] via-[var(--primary-color)] to-transparent" 
          />

          {/* Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`step-item relative flex items-center mb-24 md:mb-32 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-[var(--primary-color)] z-10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                  <Icon className="w-5 h-5 text-[var(--primary-color)]" />
                </div>

                {/* Content */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${isEven ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"}`}>
                  <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-bold text-2xl mb-4 group-hover:text-[var(--primary-color)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}

         {/* Final Launch Statement - Minimalist Version */}
<div className="final-launch flex flex-col items-center text-center mt-12 px-4">
  

  <div className="flex flex-col items-center w-full">
    <div className="flex items-center gap-3 mb-4">
      <Rocket className="w-5 h-5 text-[var(--primary-color)]" />
      <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-bold text-lg uppercase tracking-widest">
        Launch & Support
      </h3>
    </div>
    
    <p className="text-gray-400 text-base md:text-lg leading-relaxed italic">
      Your solution is ready to go live! 🚀 <br/>"We ensure a 
      <span className="text-[#e9e7e2] font-medium"> smooth launch </span> 
      and continued support for your long term success."
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Process2;