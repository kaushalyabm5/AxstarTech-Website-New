import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  FaChartLine, FaCheckCircle, FaClock, FaUser, 
  FaExternalLinkAlt, FaChevronLeft, FaChevronRight,
  FaGlobe, FaLayerGroup, FaInfoCircle
} from "react-icons/fa";
import ScrollToTopProjectsDetails from "./ScrollToTopProjectsDetails";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state;

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project?.images || [project?.image];

  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  if (!project) {
    return (
      <section className="w-full h-screen bg-black text-white flex items-center justify-center">
        <p className="text-neutral-500 tracking-[0.3em] uppercase text-xs">Access Denied: No Data</p>
      </section>
    );
  }

  return (
    // Added pt-24 to prevent the navbar from covering the content
    <section className="min-h-screen bg-[#050505] text-neutral-100 p-4 md:p-8 pt-24 md:pt-32 selection:bg-emerald-500/30">
      <ScrollToTopProjectsDetails />

      {/* TOP NAV BAR - DASHBOARD STYLE */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-white/5 pb-8 gap-6">
        <div>
          
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white">
            {project.title} <span className="text-neutral-700 mx-2">/</span> <span className="text-neutral-500 text-xl md:text-2xl">{project.industry}</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
            <button 
                onClick={() => navigate(-1)}
                className="flex-1 md:flex-none px-8 py-3 rounded-[.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-[10px] uppercase tracking-[0.2em] font-bold"
            >
                Back
            </button>
            <a 
              href={project.websiteLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 md:flex-none px-8 rounded-[.5rem] py-3 bg-emerald-600 hover:bg-emerald-500 text-black font-black text-[10px] uppercase tracking-[0.2em] transition-all text-center"
            >
                Live Access
            </a>
        </div>
      </div>

      {/* MAIN DASHBOARD GRID */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: CAROUSEL & SPECS */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* COMPACT PREMIUM CAROUSEL */}
          <div className="relative aspect-video rounded-[1rem] bg-black border border-white/5 overflow-hidden group shadow-2xl">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Project Screenshot"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110 pointer-events-none"
                }`}
              />
            ))}
            
            {/* Carousel Controls */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <button onClick={prevSlide} className="p-5 bg-black/90 rounded-full cursor-pointer text-white border border-white/10 hover:bg-emerald-500 hover:text-black transition-all">
                <FaChevronLeft size={14} />
              </button>
              <button onClick={nextSlide} className="p-5 rounded-full cursor-pointer bg-black/90 text-white border border-white/10 hover:bg-emerald-500 hover:text-black transition-all">
                <FaChevronRight size={14} />
              </button>
            </div>

            {/* Index Indicator */}
            <div className="absolute bottom-0 left-0 px-6 py-3 bg-black/0  border-t border-r border-white/0 text-[10px] tracking-[0.3em] font-bold">
                IMG: {currentIndex + 1} OF {images.length}
            </div>
          </div>

          {/* QUICK STATS BENTO */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox icon={<FaChartLine />} label="Project Health" value={project.projectSuccessRate} />
            <StatBox icon={<FaClock />} label="Lifecycle" value={project.duration} />
            <StatBox icon={<FaCheckCircle />} label="Deployment" value={project.deliveryTime} />
            <StatBox icon={<FaUser />} label="Principal" value={project.clientName} />
          </div>

          {/* PROJECT OVERVIEW */}
          <div className="bg-[#0a0a0a] border rounded-[1rem] border-white/5 p-10">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-emerald-500"></div>
                <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-bold">Project Intelligence</h2>
            </div>
            <p className="text-xl leading-relaxed text-neutral-300 font-light max-w-4xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: METADATA & STACK */}
        <div className="lg:col-span-4 space-y-5">
          
          {/* STATUS & META CARD */}
          <div className="bg-[#0a0a0a] border rounded-[1rem] border-white/5 p-8 space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500 font-black">System Parameters</h3>
            
            <div className="space-y-5">
                <MetaItem label="Process Status" value={project.status} isStatus />
                <MetaItem label="Client Origin" value={project.clientCountry} icon={<FaGlobe />} />
                <MetaItem label="System Class" value={project.projectType} icon={<FaLayerGroup />} />
            </div>
          </div>

          {/* TECH STACK BENTO */}
          <div className="bg-[#0a0a0a] border rounded-[1rem] border-white/5 p-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold mb-8">
               Core Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech, i) => (
                <span key={i} className="px-4 py-2 rounded-[.5rem] bg-black border border-white/10 text-[10px] text-neutral-400 font-bold tracking-wider hover:border-emerald-500/50 transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* DELIVERABLES LIST */}
          <div className="bg-[#0a0a0a] rounded-[1rem] border border-white/5 p-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold mb-8">
               Project Scope
            </h3>
            <ul className="space-y-4">
              {project.requirements?.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-[11px] text-neutral-400 leading-relaxed uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 bg-emerald-500 mt-1 shrink-0"></div>
                    {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CLIENT PROFILE COMPACT */}
          <div className="border rounded-[1rem] border-white/5 p-[0px]">
              <div className="bg-[#080808] rounded-[1rem] p-6 flex items-center gap-5">
                <img src={project.clientImg} className="w-14 h-14 grayscale-0 rounded-full brightness-125 border border-white/10 object-cover" alt="Client" />
                <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white">{project.clientName}</p>
                    <p className="text-[9px] text-emerald-500 uppercase font-bold mt-1 tracking-widest">Verified Client</p>
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// COMPONENT: STAT BOX
const StatBox = ({ icon, label, value }) => (
  <div className="bg-[#0a0a0a] rounded-[1rem] border border-white/5 p-6 hover:border-emerald-500/30 transition-all group cursor-default">
    <div className="text-emerald-500 mb-4 text-xl group-hover:-translate-y-1 transition-transform duration-300">{icon}</div>
    <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-black mb-2">{label}</p>
    <p className="text-[13px] font-bold text-white tracking-wide">{value}</p>
  </div>
);

// COMPONENT: META ITEM
const MetaItem = ({ label, value, isStatus, icon }) => (
    <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest flex items-center gap-3">
            <span className="text-neutral-700">{icon}</span> {label}
        </span>
        <span className={`text-[10px] font-black uppercase tracking-widest ${
            isStatus ? "bg-emerald-500/5 text-emerald-400 px-3 py-1 border border-emerald-500/20" : "text-neutral-300"
        }`}>
            {value}
        </span>
    </div>
);

export default ProjectDetails;