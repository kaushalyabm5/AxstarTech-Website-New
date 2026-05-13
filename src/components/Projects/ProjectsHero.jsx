import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const ParticleWarpBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const particles = [];
    const particleCount = 120;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = (Math.random() - 0.5) * canvas.width * 2;
        this.y = (Math.random() - 0.5) * canvas.height * 2;
        this.z = Math.random() * canvas.width;
        this.pz = this.z;
        this.color = Math.random() > 0.5 ? '#02ffdd' : '#3b82f6';
        this.size = 1;
      }

      update() {
        // Speed of the "warp" effect
        this.z -= 4;
        if (this.z < 1) {
          this.z = canvas.width;
          this.x = (Math.random() - 0.5) * canvas.width * 2;
          this.y = (Math.random() - 0.5) * canvas.height * 2;
          this.pz = this.z;
        }
      }

      draw() {
        // Project 3D coordinates to 2D
        const sx = (this.x / this.z) * (canvas.width / 2) + canvas.width / 2;
        const sy = (this.y / this.z) * (canvas.height / 2) + canvas.height / 2;

        const px = (this.x / this.pz) * (canvas.width / 2) + canvas.width / 2;
        const py = (this.y / this.pz) * (canvas.height / 2) + canvas.height / 2;

        this.pz = this.z;

        // Interaction with mouse
        const dx = sx - mouse.x;
        const dy = sy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const opacity = Math.min(1, 400 / this.z);

        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = opacity * 0.4;
        ctx.lineWidth = dist < 150 ? 2 : 1;
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Slight trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const ProjectsHero = () => {
  return (
    <section 
      id='projects-hero' 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Background Glows (Same as before) */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none" />

      {/* New Particle Warp Background */}
      <ParticleWarpBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">Portfolio</span>
        </h1>

        <p className="max-w-3xl text-neutral-600 text-[.9rem] md:text-[.9rem] leading-relaxed mb-10">
          Crafting digital experiences that blend precision engineering with elite aesthetics. Explore our journey through technology and design.
        </p>

        <a href="#portfolio-showcase">
                      <button className="cursor-pointer font-medium px-10 py-3 text-sm rounded-lg 
                        bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]
                        text-[black] transition font-bold flex items-center gap-2">
                        Discover 
                      </button>
                    </a>

      </div>
    </section>
  );
};

export default ProjectsHero;