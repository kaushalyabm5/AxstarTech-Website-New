import React from "react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaFigma,
  FaGitAlt
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiRedux
} from "react-icons/si";

const technologies = [
  { icon: FaReact, name: "React", color: "#61DBFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiExpress, name: "Express", color: "#ffffff" },
  { icon: FaNodeJs, name: "Node.js", color: "#68A063" },
  { icon: FaFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: FaGitAlt, name: "Git", color: "#F05032" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
];

const Technologies = () => {
  return (
    <section className="relative w-full py-38 bg-[black] overflow-hidden">

      {/* ===== TOP FOG OVERLAY ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
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

      

      {/* ✅ FIX: added relative z-10 */}
      <div className="max-w-full mx-auto px-0 relative z-10">
       

         <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[.8rem] font-medium tracking-[0.4em] uppercase mb-4 block">
           Empowered by Global Standards 
          </span>

        <h2 className="text-3xl text-center font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">
          Cutting-Edge Tech
        </h2>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">

          <div className="carousel-track flex w-max gap-4 md:gap-6 px-2 py-3">

            {[...technologies, ...technologies].map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div
                  key={index}
                  className="
                  min-w-[110px] md:min-w-[140px]
                  h-24 md:h-28
                  bg-[#080808]
                  backdrop-blur-md
                  border-[1px]
                  rounded-[1rem]
                  border-white/10
                  flex flex-col items-center justify-center
                  transition duration-300
                  "
                >
                  <Icon size={60} style={{ color: tech.color }} />

                  <span className="text-xs md:text-sm mt-2 text-gray-200">
                   
                  </span>
                </div>
              );
            })}

          </div>

        </div>
      </div>

      <style jsx>{`
        .carousel-track {
          animation: scroll 30s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
};

export default Technologies;