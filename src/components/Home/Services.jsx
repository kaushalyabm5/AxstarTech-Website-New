import React, { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaShoppingCart,
  FaRobot,
  FaBullhorn,
  FaLightbulb,
  FaDatabase,
  FaSyncAlt,
  FaChartLine,
  FaProjectDiagram,
  FaSearch,
  FaLaptopCode,
  FaPencilRuler,
  FaRocket,
  FaMobileAlt,
} from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

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
        this.speed = Math.random() * 0.4 + 0.1;
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
        ctx.fillStyle = "rgba(16, 185, 129, 0.4)";
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 80; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            const alpha = (1 - dist / 200) * 0.15;
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        p1.update();
        p1.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

// --- SERVICES DATA ---
const services = [
  { icon: <FaCode />, title: "Web Development", description: "Build responsive, high-performance websites" },
  { icon: <FaMobileAlt />, title: "Mobile App Development", description: "iOS & Android apps for business growth" },
  { icon: <FaRocket />, title: "Product MVP Development", description: "Quickly validate ideas with minimum viable products" },
  { icon: <FaPencilRuler />, title: "UI/UX Design", description: "Create intuitive, engaging digital experiences" },
  { icon: <FaLaptopCode />, title: "Custom Software Development", description: "Tailored solutions to meet business needs" },
  { icon: <FaRobot />, title: "AI & Automation Solutions", description: "Smart automation to improve efficiency" },
  { icon: <FaShoppingCart />, title: "E-commerce Platforms & Solutions", description: "Scalable online stores and marketplaces" },
  { icon: <FaBullhorn />, title: "Social Media Management", description: "Grow brand presence and audience engagement" },
  { icon: <FaSearch />, title: "SEO", description: "Increase visibility and organic traffic" },
  { icon: <FaProjectDiagram />, title: "Product Strategy & Digital Transformation", description: "Align products with business goals" },
  { icon: <FaChartLine />, title: "Business Model & Growth Strategy", description: "Plan scalable, profitable business models" },
  { icon: <FaSyncAlt />, title: "Digital Transformation Consulting", description: "Guide your business to modern tech adoption" },
  { icon: <FaDatabase />, title: "Data & Technology Consulting", description: "Make data-driven decisions and optimize tech stacks" },
  { icon: <FaLightbulb />, title: "Startup Advisory", description: "Support startups with strategy, growth, and execution" },
];

// --- SERVICES COMPONENT ---
const Services = () => {
  const visibleCards = 4; 
  const cardWidth = 280;
  const gap = 24;
  const totalItemWidth = cardWidth + gap;
  const transitionSpeed = 400;
  const containerWidth = cardWidth * visibleCards + gap * (visibleCards - 1);

  const extendedServices = [
    ...services.slice(-visibleCards),
    ...services,
    ...services.slice(0, visibleCards),
  ];

  const [index, setIndex] = useState(visibleCards);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const sliderRef = useRef(null);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(-visibleCards * totalItemWidth);
  const isDragging = useRef(false);

  const isMobile = () => window.innerWidth <= 768;

  // --- DRAG HANDLERS ---
  const handleStart = (clientX) => {
    isDragging.current = true;
    startX.current = clientX;
    sliderRef.current.style.transition = "none";
  };

  const handleMove = (clientX) => {
    if (!isDragging.current) return;
    const diff = clientX - startX.current;

    if (isMobile()) {
      // Smooth drag per card on mobile
      currentTranslate.current = prevTranslate.current + diff;
      sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    } else {
      // Desktop multiple cards drag
      currentTranslate.current = prevTranslate.current + diff;
      sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const moveAmount = isMobile() ? 1 : 2; // 1 card per drag on mobile, 2 on desktop
    const movedSlides = Math.round(-currentTranslate.current / totalItemWidth / (visibleCards / moveAmount));

    setIndex(visibleCards + movedSlides);
    prevTranslate.current = -(visibleCards + movedSlides) * totalItemWidth;

    sliderRef.current.style.transition = `transform ${transitionSpeed}ms cubic-bezier(0.4,0,0.2,1)`;
    sliderRef.current.style.transform = `translateX(${prevTranslate.current}px)`;
  };

  const handleTransitionEnd = () => {
    const total = services.length;
    if (index >= total + visibleCards) {
      setIsTransitioning(false);
      setIndex(visibleCards);
      prevTranslate.current = -visibleCards * totalItemWidth;
    }
    if (index <= 0) {
      setIsTransitioning(false);
      setIndex(total);
      prevTranslate.current = -total * totalItemWidth;
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 20);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    const moveAmount = isMobile() ? 1 : 2;
    setIndex((prev) => prev + moveAmount);
    prevTranslate.current -= totalItemWidth * moveAmount;
  };

  const prevSlide = () => {
    const moveAmount = isMobile() ? 1 : 2;
    setIndex((prev) => prev - moveAmount);
    prevTranslate.current += totalItemWidth * moveAmount;
  };

  return (
    <section className="relative w-full py-24 overflow-hidden font-sans bg-black">
      <ParticleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[.8rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            Built for Growth
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">Our Core Services</h2>

        <div className="relative mx-auto" style={{ width: `${containerWidth}px` }}>
          <div
            ref={sliderRef}
            onTransitionEnd={handleTransitionEnd}

            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}

            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}

            className="flex gap-6 cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `translateX(${-index * totalItemWidth}px)`,
              transition: isTransitioning ? `transform ${transitionSpeed}ms cubic-bezier(0.4,0,0.2,1)` : "none",
              userSelect: "none",
            }}
          >
            {extendedServices.map((service, i) => (
              <div key={i} style={{ width: `${cardWidth}px` }} className="flex-shrink-0 relative group select-none">
                <div className="h-full min-h-[320px] flex flex-col items-center p-8 rounded-2xl 
                  bg-emerald-950/20 border border-emerald-500/10 backdrop-blur-xl
                  transition-all duration-500 hover:border-emerald-400/40 hover:bg-emerald-900/20">

                  <div className="h-[60px] flex items-center justify-center text-4xl text-emerald-400 mb-6
                    filter drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">{service.icon}</div>

                  <h3 className="h-[56px] flex items-center justify-center text-center text-xl font-bold text-[#e9e7e2] mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="flex-grow text-sm text-emerald-100/60 leading-relaxed text-center">
                    {service.description}
                  </p>

                  <div className="absolute bottom-4 left-8 right-8 h-[1px] bg-emerald-900/30 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-emerald-500/50 shadow-[0_0_15px_#10b981]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="p-3 cursor-pointer rounded-full border border-emerald-500 text-emerald-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-500"
          >
            <FiArrowLeft size={19} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 cursor-pointer rounded-full border border-emerald-500 text-emerald-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-500"
          >
            <FiArrowRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;