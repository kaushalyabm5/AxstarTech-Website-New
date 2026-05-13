import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const NeuralRippleBackground = () => {
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

    // Configuration
    const ripples = [];
    const rippleCount = 3; // How many ripples exist simultaneously
    const rippleInterval = 250; // Delay (in animation frames) between new ripples

    // Generate static "Data Nodes" throughout the background
    const nodes = [];
    const nodeCount = 100;
    const createNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseSize: Math.random() * 1.5 + 0.5,
          brightness: 0 // Will brighten when hit by a ripple
        });
      }
    };
    createNodes();

    class RippleEffect {
      constructor() {
        this.reset();
      }

      reset() {
        // Source location (Digital Growth strategy source)
        this.sourceX = canvas.width / 2;
        this.sourceY = canvas.height / 2;
        
        this.currentRadius = 0;
        this.maxRadius = Math.max(canvas.width, canvas.height) * 0.9;
        this.speed = 4 + Math.random() * 2;
        this.opacity = 0.6;
        this.lineWidth = 1.5;
        this.alive = true;
      }

      update() {
        if (!this.alive) return;

        this.currentRadius += this.speed;

        // Fades out as it gets wider
        this.opacity = (1 - (this.currentRadius / this.maxRadius)) * 0.6;
        this.lineWidth = (1 - (this.currentRadius / this.maxRadius)) * 2;

        if (this.currentRadius >= this.maxRadius || this.opacity <= 0) {
          this.alive = false;
        }
      }

      draw() {
        if (!this.alive) return;

        ctx.beginPath();
        ctx.arc(this.sourceX, this.sourceY, this.currentRadius, 0, Math.PI * 2);
        
        // Use brand teal
        ctx.strokeStyle = `rgba(2, 255, 221, ${this.opacity})`;
        ctx.lineWidth = this.lineWidth;
        
        // Subtle central glow for the active ripple
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#02ffdd';
        ctx.stroke();
        ctx.shadowBlur = 0; // Reset blur for other elements
      }
    }

    let frameCount = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      frameCount++;

      // 1. Manage Ripples Lifecycle (repeating loop)
      if (frameCount >= rippleInterval) {
        // Find a dead ripple to reuse, or add a new one
        const deadRipple = ripples.find(r => !r.alive);
        if (deadRipple) {
          deadRipple.reset();
        } else if (ripples.length < rippleCount) {
          ripples.push(new RippleEffect());
        }
        frameCount = 0; // Reset interval
      }

      // 2. Update and Draw active ripples
      ripples.forEach(ripple => {
        ripple.update();
        ripple.draw();

        // 3. Interactions: Ripples activate static Data Nodes
        if (ripple.alive) {
          nodes.forEach(node => {
            const dx = node.x - ripple.sourceX;
            const dy = node.y - ripple.sourceY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // If the ripple wavefront hits the node
            if (Math.abs(dist - ripple.currentRadius) < 15) {
              node.brightness = 1.0; // Trigger full brightness
            }
          });
        }
      });

      // 4. Draw all Data Nodes and their fade-out logic
      nodes.forEach(node => {
        // Draw the static node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.baseSize + (node.brightness * 1.5), 0, Math.PI * 2);
        
        // Teal for active, dim slate for passive
        ctx.fillStyle = node.brightness > 0.1
          ? `rgba(2, 255, 221, ${node.brightness * 0.7})` 
          : `rgba(148, 163, 184, 0.1)`; 
          
        ctx.fill();

        // Add extra glow for highly active nodes
        if (node.brightness > 0.5) {
          ctx.shadowBlur = 10 * node.brightness;
          ctx.shadowColor = '#02ffdd';
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Decay the brightness over time (fading effect)
        node.brightness *= 0.96; 
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Pre-populate with one ripple to start immediately
    ripples.push(new RippleEffect());
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
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

const DigitalGrowthHero = () => {
  return (
    <section 
      id='digital-growth-hero' 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Background Glows - Preserved exactly */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none" />

      {/* New Repeating Neural Pulse Animation */}
      <NeuralRippleBackground />

      {/* Content Container - Styles strictly maintained */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Scale Your Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">Ecosystem with Axstar</span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          We help your business scale by combining creative strategy with data-driven execution. Our goal is to turn your digital presence into a high-performing growth engine
        </p>

         <a href="#setup-1">
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

export default DigitalGrowthHero;