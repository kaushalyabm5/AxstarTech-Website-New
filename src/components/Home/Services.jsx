import React, { useState, useEffect, useRef } from "react";
import {
  FaCode, FaShoppingCart, FaRobot, FaBullhorn, FaLightbulb, FaDatabase,
  FaSyncAlt, FaChartLine, FaProjectDiagram, FaSearch, FaLaptopCode,
  FaPencilRuler, FaRocket, FaMobileAlt,
} from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

// --- PARTICLE BACKGROUND ---
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 0.2 + 0.05;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.01 - 0.005;
        this.radius = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.angle += this.spin;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(52, 211, 153, 0.15)";
        ctx.fill();
      }
    }
    const init = () => {
      particles = [];
      for (let i = 0; i < 40; i++) particles.push(new Particle());
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
        p1.update(); p1.draw();
      }
      ctx.strokeStyle = "rgba(52, 211, 153, 0.05)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      animationFrameId = requestAnimationFrame(animate);
    };
    window.addEventListener("resize", resize);
    resize(); init(); animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

const services = [
  { icon: <FaCode />, title: "Web Development", description: "Build responsive, high-performance websites optimized for speed and user engagement." },
  { icon: <FaMobileAlt />, title: "Mobile App Development", description: "Native and cross-platform iOS & Android apps designed for business growth." },
  { icon: <FaRocket />, title: "Product MVP Development", description: "Quickly validate your market ideas with robust minimum viable products." },
  { icon: <FaPencilRuler />, title: "UI/UX Design", description: "Create intuitive, high-fidelity digital experiences that users love." },
  { icon: <FaLaptopCode />, title: "Custom Software", description: "Tailored enterprise solutions designed to meet specific business needs." },
  { icon: <FaRobot />, title: "AI & Automation", description: "Leverage smart automation and AI to improve operational efficiency." },
  { icon: <FaShoppingCart />, title: "E-commerce Platforms", description: "Scalable online stores and marketplace solutions for modern retail." },
  { icon: <FaBullhorn />, title: "Social Media Management", description: "Strategic content and management to grow brand presence and engagement." },
  { icon: <FaSearch />, title: "SEO Optimization", description: "Increase organic visibility and traffic with data-driven search strategies." },
  { icon: <FaProjectDiagram />, title: "Product Strategy", description: "Align your product roadmap with long-term business goals and market trends." },
  { icon: <FaChartLine />, title: "Growth Strategy", description: "Identify and execute scalable, profitable business models for expansion." },
  { icon: <FaSyncAlt />, title: "Digital Transformation", description: "Guide your business through modern technology adoption and legacy migration." },
  { icon: <FaDatabase />, title: "Data Consulting", description: "Make informed data-driven decisions and optimize your technology stack." },
  { icon: <FaLightbulb />, title: "Startup Advisory", description: "Strategic support for startups covering execution, growth, and fundability." },
];

const Services = () => {
  const cardWidth = 300; // Reduced width for compactness
  const gap = 20;
  const totalItemWidth = cardWidth + gap;
  const displayItems = [...services, ...services, ...services];
  const initialIndex = services.length;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleNext = () => { if (isTransitioning) setCurrentIndex(prev => prev + 1); };
  const handlePrev = () => { if (isTransitioning) setCurrentIndex(prev => prev - 1); };

  useEffect(() => {
    const total = services.length;
    if (currentIndex >= total * 2 || currentIndex <= total - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex >= total * 2) setCurrentIndex(total);
        if (currentIndex <= total - 1) setCurrentIndex(total * 2 - 1);
      }, 500);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-black font-sans">
      <ParticleBackground />

      <div className="mb-16 w-full px-4 relative z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-600 text-center text-[.7rem] font-bold tracking-[0.4em] uppercase mb-3 block">
          Built for Growth
        </span>
        <h2 className="text-3xl text-center font-light md:text-5xl leading-tight text-white/90">
          Our Core Services
        </h2>
      </div>

      <div className="relative flex justify-center items-center overflow-visible px-4" 
           style={{ perspective: "1500px" }}>
        
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev} 
          className="absolute left-4 md:left-10 z-20 p-3 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all backdrop-blur-md cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>

        <div className="flex transition-transform duration-500 ease-out"
             style={{
               transform: `translateX(calc(50% - ${currentIndex * totalItemWidth + cardWidth/2}px))`,
               transition: isTransitioning ? "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)" : "none",
             }}>
          
          {displayItems.map((service, i) => {
            const distanceFromCenter = Math.abs(i - currentIndex);
            const isCenter = distanceFromCenter === 0;
            const rotation = (i - currentIndex) * -8; 
            
            return (
              <div
                key={i}
                style={{ 
                  width: cardWidth, 
                  marginRight: gap,
                  transform: `rotateY(${rotation}deg) scale(${isCenter ? 1 : 0.9})`,
                  opacity: distanceFromCenter > 3 ? 0 : 1 / (distanceFromCenter + 0.6),
                  filter: isCenter ? "none" : "blur(0.5px)",
                }}
                className="flex-shrink-0 transition-all duration-500 origin-center"
              >
                {/* Compact Card Container */}
                <div className={`h-[320px] p-6 rounded-[24px] bg-[#0A0A0A] border ${isCenter ? 'border-emerald-500/30' : 'border-zinc-800/40'} flex flex-col items-center justify-between shadow-2xl relative overflow-hidden group`}>
                  
                  {/* Subtle Background Glow for Center Card */}
                  {isCenter && <div className="absolute inset-0 bg-emerald-500/5 blur-[40px] -z-10" />}

                  <div className="flex flex-col items-center text-center w-full">
                    <div className={`mb-4 p-3 rounded-2xl bg-zinc-900/50 text-2xl ${isCenter ? 'text-emerald-400' : 'text-zinc-600'} transition-colors duration-500`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white/90 mb-2 tracking-tight">{service.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3 px-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="w-full mt-auto">
                    <button className={`w-full cursor-pointer py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${isCenter ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'}`}>
                      <FiExternalLink size={12}/> View More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={handleNext} 
          className="absolute right-4 md:right-10 z-20 p-3 rounded-full bg-zinc-900/50 border border-zinc-800 text-emerald-500 hover:scale-110 transition-all backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)] cursor-pointer"
        >
          <FiArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Services;