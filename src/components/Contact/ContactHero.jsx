import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const ParticleVortexBackground = () => {
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
    const particleCount = 150;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        // Distance from center
        this.radius = Math.random() * (Math.max(canvas.width, canvas.height) * 0.6);
        // Current angle in radians
        this.angle = Math.random() * Math.PI * 2;
        // Rotation speed
        this.velocity = 0.001 + Math.random() * 0.002;
        // Particle size
        this.size = Math.random() * 1.5 + 0.5;
        // Color variation between cyan and white
        this.color = Math.random() > 0.2 ? '#02ffdd' : '#ffffff';
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.angle += this.velocity;

        // Calculate position based on center + angle/radius
        this.x = canvas.width / 2 + Math.cos(this.angle) * this.radius;
        this.y = canvas.height / 2 + Math.sin(this.angle) * this.radius;

        // Occasionally move particles closer/further for "breathing" effect
        this.radius -= 0.1;
        if (this.radius < 10) this.reset();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      // Very slight blur effect for motion trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      style={{ zIndex: 1 }}
    />
  );
};

const ContactHero = () => {
  return (
    <section
      id='contact-hero'
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >

      {/* Deep Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none" />

      {/* Vortex Animation */}
      <ParticleVortexBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Connecting Ideas, Building <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">
            Solutions
          </span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          At Axstar, we value strong client relationships and believe clear communication is the foundation of every successful project. Reach out to Axstar for inquiries, project discussions, quotations, technical support, or partnership opportunities. Our team is always ready to provide innovative, reliable, and professional digital solutions tailored to your business needs.
        </p>
        <a href="#contact-form">
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

export default ContactHero;