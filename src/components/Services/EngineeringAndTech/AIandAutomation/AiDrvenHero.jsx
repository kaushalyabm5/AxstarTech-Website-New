import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const DataFlowBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lines = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const init = () => {
      lines = [];
      const lineCount = 40; // Number of vertical data streams
      for (let i = 0; i < lineCount; i++) {
        lines.push({
          x: (canvas.width / lineCount) * i,
          baseX: (canvas.width / lineCount) * i,
          speed: Math.random() * 2 + 1,
          offset: Math.random() * 1000,
          points: []
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(2, 255, 221, 0.15)`;
        ctx.lineWidth = 1.5;

        for (let y = 0; y < canvas.height; y += 20) {
          // Calculate horizontal distortion based on mouse
          const dx = mouseRef.current.x - line.x;
          const dy = mouseRef.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // The "Magnetic" pull effect
          let xOffset = Math.sin(y * 0.01 + (Date.now() * 0.002) + line.offset) * 20;
          if (dist < 250) {
            const force = (250 - dist) / 250;
            xOffset += dx * force * 0.5;
          }

          if (y === 0) {
            ctx.moveTo(line.x + xOffset, y);
          } else {
            ctx.lineTo(line.x + xOffset, y);
          }
        }
        ctx.stroke();

        // Draw a "Data Packet" (glowing dot) traveling down the line
        const packetY = (Date.now() * 0.1 * line.speed + line.offset) % canvas.height;
        const packetDx = mouseRef.current.x - line.x;
        const packetDy = mouseRef.current.y - packetY;
        const packetDist = Math.sqrt(packetDx * packetDx + packetDy * packetDy);
        
        let packetXOffset = Math.sin(packetY * 0.01 + (Date.now() * 0.002) + line.offset) * 20;
        if (packetDist < 250) {
            packetXOffset += packetDx * ((250 - packetDist) / 250) * 0.5;
        }

        ctx.beginPath();
        ctx.arc(line.x + packetXOffset, packetY, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#02ffdd';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#02ffdd';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for next line
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

const AiDrivenHero = () => {
  return (
    <section 
      id='aidriven-hero' 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Background Layer 1: Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none z-0" />

      {/* Background Layer 2: Flowing Data Animation */}
      <DataFlowBackground />

      {/* Content Container (Original Layout) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Scaling your operations with intelligent systems <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">
            that work while you sleep. 
          </span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          At Axstar, we build AI-driven solutions that help businesses work smarter. Using Machine Learning, Automation, NLP, and Computer Vision, we create intuitive tools that boost efficiency and turn data into your most valuable asset.
        </p>

        <a href="#section-1">
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

export default AiDrivenHero;