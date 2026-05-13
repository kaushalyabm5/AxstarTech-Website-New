import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const particleCount = 1200;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
        this.size = 0.5;
        this.speed = 0.5 + Math.random() * 1.5;
      }
      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.reset();
          this.z = canvas.width;
        }
      }
      draw() {
        const posX = (this.x - canvas.width / 2) * (canvas.width / this.z) + canvas.width / 2;
        const posY = (this.y - canvas.height / 2) * (canvas.width / this.z) + canvas.height / 2;
        const s = this.size * (canvas.width / this.z);

        if (posX > 0 && posX < canvas.width && posY > 0 && posY < canvas.height) {
          ctx.beginPath();
          ctx.arc(posX, posY, s, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${1 - this.z / canvas.width})`;
          ctx.fill();
        }
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
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

  return (
    <canvas
      ref={canvasRef}
      // Changed "absolute" to "fixed" so it stays when scrolling
      className="fixed inset-0 z-0 pointer-events-none bg-transparent"
    />
  );
};

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".h-animate", {
        opacity: 0,
        y: 60,
        duration: 1.9,
        stagger: 0.25,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".p-animate", {
        opacity: 0,
        y: 60,
        duration: 1.3,
        stagger: 0.3,
        ease: "power3.out",
        delay: 1,
      });

      gsap.from(".buttons-animate", {
        opacity: 0,
        y: 60,
        duration: 1.3,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.5,
      });

      gsap.from(".card-animate", {
        opacity: 0,
        y: 80,
        delay: 1.7,
        duration: 1.4,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cards-wrapper",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="home-hero"
      className="relative w-full text-white h-screen flex items-center overflow-visible"
    >
      {/* ===== FIXED BACKGROUND ANIMATION ===== */}
      <ParticleBackground />

      {/* ===== BOTTOM FOG OVERLAY ===== */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to top,
                rgba(0,0,0,1) 0%,
                rgba(0,0,0,0.9) 7%,
                rgba(0,0,0,0.7) 23%,
                rgba(0,0,0,0.4) 40%,
                rgba(0,0,0,0.15) 70%,
                rgba(0,0,0,0) 100%
              )
            `,
          }}
        />
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col justify-center items-center">
        <div className="space-y-6 w-full max-w-7xl mt-12 md:mt-1 text-center mx-auto">
          <h1 className="h-animate text-[#e9e7e2] text-[2.5rem] sm:text-5xl md:text-[3.3rem] lg:text-[4.1rem] font-medium tracking-w[1rem] leading-tight">
            Transforming Ideas Into
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] block mt-4 md:mt-6 lg:mt-5">
              Scalable Digital Solutions
            </span>
          </h1>

          <p className="p-animate text-sm sm:text-base md:text-[.9rem] text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Axstar drives business growth through smart technology, strategic consulting, and digital transformation. We deliver scalable, high-performance solutions that align technology with your business goals from strategy to full deployment.
          </p>

          <div className="buttons-animate flex flex-wrap justify-center gap-4 pt-4">
            <a href="#about">
              <button className="cursor-pointer font-medium px-10 py-3 text-sm rounded-lg 
                bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]
                text-black transition flex gap-2 items-center">
                Discover 
              </button>
            </a>

            <a href="/projects#projects-hero">
             

              <button className="cursor-pointer font-medium px-10 py-3 text-sm rounded-lg 
                bg-[#afafaf]
                text-black transition flex gap-2 items-center">
                View Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;