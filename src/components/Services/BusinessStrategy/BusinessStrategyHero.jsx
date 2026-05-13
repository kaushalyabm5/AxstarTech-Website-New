import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const StrategyFieldBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    handleResize();

    // Strategy Visualization Configuration
    const bubbles = [];
    const bubbleCount = 40;
    const synergyRange = 180; // Distance bubbles connect to each other
    const focusRange = 250; // Distance bubbles react to cursor

    class Bubble {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 4 + 1;
        this.size = this.baseSize;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.hue = 171; // Tailwind #02ffdd hue
        this.focusEffect = 0; // State variable for growth animation
      }

      update() {
        // Linear slow drift
        this.x += this.vx;
        this.y += this.vy;

        // Reactive Growth on Hover (Strategy Interaction)
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < focusRange) {
            const influence = (1 - dist / focusRange);
            // Grow substantially and move slightly towards focus
            this.focusEffect = influence;
            this.vx += (dx / dist) * 0.01 * influence;
            this.vy += (dy / dist) * 0.005 * influence;
          } else {
            this.focusEffect *= 0.95; // Smoothly return to normal
          }
        } else {
          this.focusEffect *= 0.95; // Smoothly return to normal
        }

        // Apply visual size change
        this.size = this.baseSize + (this.focusEffect * 8);

        // Slow return velocity (drag)
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Wrap around screen boundaries
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        // Synergy Lines (Connect nodes if they are close)
        bubbles.forEach(otherBubble => {
          if (this === otherBubble) return;
          const dx = this.x - otherBubble.x;
          const dy = this.y - otherBubble.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < synergyRange) {
            const alpha = (1 - dist / synergyRange) * 0.15;
            ctx.beginPath();
            // Use blue-400 (from gradient) for lines
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(otherBubble.x, otherBubble.y);
            ctx.stroke();
          }
        });

        // Focus Growth Ring (When strategy/mouse is applied)
        if (this.focusEffect > 0.01) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(2, 255, 221, ${this.focusEffect * 0.1})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Core Bubble
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Intensity of color based on growth/focus
        const colorAlpha = 0.2 + (this.focusEffect * 0.6);
        ctx.fillStyle = `rgba(2, 255, 221, ${colorAlpha})`;
        ctx.fill();
      }
    }

    // Initialize data field
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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

const BusinessStrategyHero = () => {
  return (
    <section 
      id='business-strategy-hero' 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Deep Background Glows - Kept as requested */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none" />

      {/* New Strategy Field (Bubble Growth) Animation */}
      <StrategyFieldBackground />

      {/* Content Container - Styles strictly maintained */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Business Strategy & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">Consulting</span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          We partner with organizations to accelerate growth, enable transformation, and unlock new value through data-driven strategies, modern technology, and operational excellence. Our consulting approach is designed to deliver measurable impact and long-term success.
        </p>

        
                <a href="#section1">
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

export default BusinessStrategyHero;