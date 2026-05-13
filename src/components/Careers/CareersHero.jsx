import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const DigitalMatrixBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#02ffdd' : '#3b82f6',
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Subtle Grid underlay
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 100;
      const offsetX = (mouse.current.x - canvas.width / 2) * 0.02;
      const offsetY = (mouse.current.y - canvas.height / 2) * 0.02;

      for (let x = offsetX % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = offsetY % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Floating Particles
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < -10) p.y = canvas.height + 10;
        
        // Mouse interaction (gentle push)
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = dist < 200 ? (200 - dist) / 2000 : 0;
        p.x -= dx * force;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
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

const CareersHero = () => {
  return (
    <section id='career-hero' className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white">
      {/* Background Glows - Preserved */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      
      {/* New Digital Matrix Background */}
      <DigitalMatrixBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Join with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">Axstar Team</span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          At Axstar Technologies, we don’t just hire, we cultivate talent. Join a team of high-performance specialists shaping the future of IT and Business Consulting. Here, your work becomes a global benchmark.
        </p>

        <a href="#application">
                      <button className="cursor-pointer font-medium px-10 py-3 text-sm rounded-lg 
                        bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]
                        text-[black] transition font-bold flex items-center gap-2">
                        Join With Us <ArrowDown strokeWidth={2.5} />
                      </button>
                    </a>
      </div>
    </section>
  );
};

export default CareersHero;