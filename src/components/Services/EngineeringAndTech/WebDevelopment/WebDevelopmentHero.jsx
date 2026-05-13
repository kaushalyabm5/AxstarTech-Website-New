import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const VolumetricCloudBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      // Create a smooth target for the rotation based on mouse
      mouse.current.targetX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouse.current.targetY = (e.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    // Advanced: Create a 3D point cloud
    const particles = [];
    const count = 400; // High density for a "cloud" feel
    const radius = 600;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 2 * radius,
        y: (Math.random() - 0.5) * 2 * radius,
        z: (Math.random() - 0.5) * 2 * radius,
        size: Math.random() * 2 + 0.5,
        color: Math.random() > 0.4 ? '#02ffdd' : '#2563eb'
      });
    }

    const rotate = (p, pitch, roll) => {
      // Rotate around X-axis (Pitch)
      let y1 = p.y * Math.cos(pitch) - p.z * Math.sin(pitch);
      let z1 = p.y * Math.sin(pitch) + p.z * Math.cos(pitch);
      // Rotate around Y-axis (Roll)
      let x2 = p.x * Math.cos(roll) + z1 * Math.sin(roll);
      let z2 = -p.x * Math.sin(roll) + z1 * Math.cos(roll);
      return { x: x2, y: y1, z: z2 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Smooth interpolation for mouse movement
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

      const focalLength = 400;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Sort particles by depth so closer ones are drawn on top
      const sortedParticles = particles
        .map(p => ({ ...p, rotated: rotate(p, mouse.current.y, mouse.current.x) }))
        .sort((a, b) => b.rotated.z - a.rotated.z);

      sortedParticles.forEach(p => {
        const { x, y, z } = p.rotated;
        
        // Perspective projection
        const scale = focalLength / (focalLength + z + radius);
        const screenX = x * scale + centerX;
        const screenY = y * scale + centerY;

        if (scale > 0) {
          const opacity = Math.min(1, scale * 1.5);
          ctx.beginPath();
          ctx.arc(screenX, screenY, p.size * scale * 2, 0, Math.PI * 2);
          
          // Add a soft glow to closer particles
          if (scale > 0.8) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
          } else {
            ctx.shadowBlur = 0;
          }

          ctx.fillStyle = p.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
          ctx.fill();
        }
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

const WebDevelopmentHero = () => {
  return (
    <section 
      id='webdev-hero' 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[180px] pointer-events-none" />

      {/* Advanced Volumetric 3D Cloud */}
      <VolumetricCloudBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Web <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">
              Development 
          </span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          Stop dreaming, start building! Your website is your first impression. Let’s build something great together.
          At Axstar, we build high-performance, custom websites designed to convert visitors into loyal customers. 
        </p>

           <a href="#what-we-offer">
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

export default WebDevelopmentHero;