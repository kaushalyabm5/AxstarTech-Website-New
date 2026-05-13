import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const TechNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const particles = [];
    // Lower count than "millions" to keep the lines crisp and performance high
    const particleCount = 120; 
    const connectionDistance = 150; // How close dots need to be to "connect"
    
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = '#02ffdd';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Fade lines based on distance
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(2, 255, 221, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the "tech" connections first
      drawLines();

      // Update and draw dots
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
};

const AboutHero = () => {
  return (
    <section 
      id='about-hero' 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Deep Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none" />

      {/* The Tech Dots Animation */}
      <TechNetworkBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        

        <h1 className="text-[#e9e7e2] py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Driving Innovation with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">
            Expertise
          </span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          Axstar empowers businesses with cutting-edge tech and strategic consulting. 
          We build the bridges between today's challenges and tomorrow's growth.
        </p>

        <a href="#who-we-are-about">
              <button className="cursor-pointer font-medium px-10 py-3 text-sm rounded-lg 
                bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]
                text-[black] transition font-bold flex items-center gap-2">
                Discover <ArrowDown strokeWidth={2.5} />
              </button>
            </a>

      </div>
    </section>
  );
};

export default AboutHero;