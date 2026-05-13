import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  FaChartLine, FaCheckCircle, FaClock, FaUser, 
  FaArrowLeft, FaExternalLinkAlt, FaChevronLeft, FaChevronRight 
} from "react-icons/fa";
import ScrollToTopProjectsDetails from "./ScrollToTopProjectsDetails";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state;

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project?.images || [project?.image];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const getStatusColor = (status) => {
    if (!status) return "bg-gray-500/20 text-gray-400";
    const value = status.toLowerCase();
    if (value === "completed") return "bg-emerald-500/10 text-emerald-400";
    if (value === "under development") return "bg-amber-500/10 text-amber-400";
    return "bg-rose-500/10 text-rose-400";
  };

  if (!project) {
    return (
      <section className="w-full h-screen bg-[#000000] text-white flex items-center justify-center">
        <p className="text-neutral-500 tracking-widest uppercase font-light font-sans">No project data found</p>
      </section>
    );
  }

  return (
    <section id="project-details" className="w-full bg-[#050505] text-neutral-100 selection:bg-emerald-500/30">
      
      {/* FLOATING BACK BUTTON 
      <nav className="fixed bottom-0 right-100 w-full z-[60] p-6 md:p-10 pointer-events-none">
        <button 
          onClick={() => navigate(-1)}
          className="pointer-events-auto group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-emerald-400 transition-all bg-black/20 backdrop-blur-md px-5 py-3 rounded-full border border-white/5"
        >
          <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back
        </button>
      </nav>*/}

      {/* FULL-VIEW CAROUSEL */}
      <div className="relative w-full  md:pt-0 lg:pt-30 h-[75vh] md:h-[90vh] bg-black flex items-center justify-center overflow-hidden">
        
        {/* Background Blur Effect (For Premium Feel) */}
        {images.map((img, index) => (
          <div
            key={`bg-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-30" : "opacity-0"
            }`}
          >
            <img src={img} alt="Abstract blurred background graphic for Axstar custom software development in Sri Lanka" className="w-full h-full object-cover blur-3xl scale-110" />
          </div>
        ))}

        {/* The Main Visible Image (Object-Contain ensures full visibility) */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-12 lg:p-20">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} screenshot for Axstar web and mobile app development in Colombo`}
              className={`absolute max-w-full max-h-full object-contain transition-all duration-700 ease-out transform ${
                index === currentIndex 
                  ? "opacity-100 translate-y-0 scale-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]" 
                  : "opacity-0 translate-y-10 scale-95 pointer-events-none"
              }`}
            />
          ))}
        </div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

        {/* NAVIGATION CONTROLS */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 flex justify-between px-4 md:px-10 pointer-events-none">
          <button onClick={prevSlide} className="pointer-events-auto cursor-pointer w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-white flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-black transition-all group">
            <FaChevronLeft className="group-active:scale-75 transition-transform" />
          </button>
          <button onClick={nextSlide} className="pointer-events-auto cursor-pointer w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-white flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-black transition-all group">
            <FaChevronRight className="group-active:scale-75 transition-transform" />
          </button>
        </div>

        {/* HERO TITLE AREA */}
        <div className="absolute bottom-0 left-0 w-full z-30 pb-15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] uppercase tracking-widest text-emerald-400 mb-6">
              {project.industry}
            </span>
            <h1 className="text-4xl md:text-[3rem] text-white mb-6">
              {project.title}
            </h1>
            
            {/* Minimal Dot Indicators */}
            <div className="flex gap-3">
              {images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 transition-all duration-500 ${
                    i === currentIndex ? "w-10 bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        
        {/* STATS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden -mt-8 relative z-49 backdrop-blur-2xl">
          {[
            { label: "Success Rate", val: project.projectSuccessRate, icon: <FaChartLine /> },
            { label: "Duration", val: project.duration, icon: <FaClock /> },
            { label: "Delivery", val: project.deliveryTime, icon: <FaCheckCircle /> },
            { label: "Client", val: project.clientName, icon: <FaUser /> }
          ].map((stat, i) => (
            <div key={i} className="bg-[#0a0a0a]/60 p-8 flex flex-col gap-2 hover:bg-white/[0.02] transition-colors">
              <span className="text-emerald-500 text-[1.1rem]">{stat.icon}</span>
              <p className="text-[.8rem] uppercase tracking-[0.2em] text-neutral-500 font-bold">{stat.label}</p>
              <p className="text-lg font-semibold text-white">{stat.val}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-12 gap-16">
          {/* LEFT: TEXT */}
          <div className="lg:col-span-8 space-y-20">
            <section>
              <div className="flex items-center gap-6 mb-10">
                <span className="text-emerald-500 font-mono text-sm">01.</span>
                <h2 className="text-xs uppercase tracking-[0.5em] bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">Project Overview</h2>
                <div className="h-px flex-grow bg-white/10"></div>
              </div>
              <p className="text-xl md:text-[1.4rem] text-neutral-300 font-light">
                {project.description}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-6 mb-10">
                <span className="text-emerald-500 font-mono text-sm">02.</span>
                <h2 className="text-xs uppercase tracking-[0.5em] bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]">Key Deliverables</h2>
                <div className="h-px flex-grow bg-white/10"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.requirements?.map((item, index) => (
                  <div key={index} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-emerald-800 transition-all duration-500">
                    <p className="text-neutral-400 group-hover:text-black font-medium transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="top-32 p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-10">
              <div className="space-y-6">
                <MetaRow label="Status" value={project.status} color={getStatusColor(project.status)} />
                <MetaRow label="Location" value={project.clientCountry} />
                <MetaRow label="Category" value={project.projectType} />
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] text-neutral-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 space-y-6">
               <a 
  href={project.websiteLink} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button
    className="w-full mb-5 cursor-pointer flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-black font-bold text-xs uppercase tracking-widest transition-all active:scale-95"
  >
    Visit Live Site <FaExternalLinkAlt className="text-[10px]" />
  </button>
</a>
                
                
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="relative">
                    <img src={project.clientImg} alt={`Client profile for ${project.clientName} partnering with Axstar app development in Colombo`} loading="lazy" className="w-12 h-12 rounded-full grayscale" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] rounded-full border-2 border-black"></div>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider">{project.clientName}</p>
                    <p className="text-[9px] text-neutral-500 uppercase tracking-widest mt-1">Direct Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopProjectsDetails />
    </section>
  );
};

// Helper component for Meta Rows
const MetaRow = ({ label, value, color }) => (
  <div className="flex justify-between items-center border-b border-white/5 pb-4">
    <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">{label}</span>
    <span className={color ? `px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${color}` : "text-xs font-semibold"}>
      {value}
    </span>
  </div>
);

export default ProjectDetails;