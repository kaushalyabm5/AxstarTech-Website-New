import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projectImg1desktop from '../../assets/portfolio-images/website1-sixnity/desktop/home-section1-desktop.png';
import projectImg2desktop from '../../assets/portfolio-images/website1-sixnity/desktop/home-section2-desktop.png';
import projectImg1mobile from '../../assets/portfolio-images/website1-sixnity/mobile/home-section1-mobile.png';
import projectImg2mobile from '../../assets/portfolio-images/website1-sixnity/mobile/home-section2-mobile.png';
import projectImg3mobile from '../../assets/portfolio-images/website1-sixnity/mobile/home-section3-mobile.png';

import project2ImgDesktop1 from '../../assets/portfolio-images/website2-ceylonSpace/desktop/imgDesktop1.png';
import project2ImgDesktop2 from '../../assets/portfolio-images/website2-ceylonSpace/desktop/imgDesktop2.png';
import project2ImgDesktop3 from '../../assets/portfolio-images/website2-ceylonSpace/desktop/imgDesktop3.png';
import project2ImgMobile1 from '../../assets/portfolio-images/website2-ceylonSpace/mobile/imgMobile1.png';
import project2ImgMobile2 from '../../assets/portfolio-images/website2-ceylonSpace/mobile/imgMobile2.png';

import project3Imgdesktop1 from '../../assets/portfolio-images/website-kuoni/desktop/desktopImg1.png';
import project3Imgdesktop2 from '../../assets/portfolio-images/website-kuoni/desktop/desktopImg2.png';
import project3Imgdesktop3 from '../../assets/portfolio-images/website-kuoni/desktop/desktopImg3.png';
import project3ImgMobile1 from '../../assets/portfolio-images/website-kuoni/mobile/mobileImg1.png';
import project3ImgMobile2 from '../../assets/portfolio-images/website-kuoni/mobile/mobileImg2.png';


import project4Imgdesktop1 from '../../assets/portfolio-images/website4-susan/desktop/sdesktopImg1.png';
import project4Imgdesktop2 from '../../assets/portfolio-images/website4-susan/desktop/sdesktopImg2.png';
import project4Imgdesktop3 from '../../assets/portfolio-images/website4-susan/desktop/sdesktopImg2.png';
import project4ImgMobile1 from '../../assets/portfolio-images/website4-susan/mobile/smobileImg1.png';
import project4ImgMobile2 from '../../assets/portfolio-images/website4-susan/mobile/smobileImg2.png';

const projects = [
  {
    id: 1,
    category: "Web Development",
    image: projectImg1desktop,
    images: [
      projectImg1desktop,
      projectImg2desktop,
      projectImg1mobile,
      projectImg2mobile,
      projectImg3mobile,
    ],
    title: "Sixnity Product Landing Page",
    description: "Sixnity is a modern fitness web platform focused on workout tracking and progress monitoring through a clean, dark-themed UI. We built it with a responsive, component-based architecture to ensure scalability, smooth performance, and an engaging, data-driven user experience.",
    requirements: [
      "Fully Responsive",
      "SEO-friendly structure",
      "Cross-browser compatibility",
      "Easy navigation and user-friendly layout",
      "High-quality images and visuals",
      "Smooth scrolling and animations",
      "Optimized for conversions",
      "Secure and reliable"
    ],
    clientCountry: "USA",
    industry: 'Fitness',
    duration: '1 Weeks',
    projectType: 'Web Development',
    techStack: ["React", "Tailwind CSS", "Firebase"],
    status: "Completed",
    projectSuccessRate: "4.8",
    deliveryTime: "100%",
    clientName: 'Hiroshi Tanaka',
    clientImg: "https://randomuser.me/api/portraits/women/46.jpg",
    websiteLink: "https://www.sixnity.com/",
  },
  {
    id: 2,
    category: "Web Development",
    image: project2ImgDesktop1,
    images: [
      project2ImgDesktop1,
      project2ImgDesktop2,
      project2ImgDesktop3,
      project2ImgMobile1,
      project2ImgMobile2,
    ],
    title: "Website For ceylonspaceholidays",
    description: "Ceylon Space Holidays is a travel website showcasing curated Sri Lankan experiences and tour packages. We developed a visually rich, responsive platform with smooth navigation and a structured booking flow, ensuring easy content management and strong user engagement.",
    requirements: [
      "36 Compositions",
      "Lightning-fast creation",
      "Beautiful light and dark mode",
      "Fully customizable",
      "Minimal & thoughtful designs",
    ],
    clientCountry: "Sri Lanka",
    industry: 'Tourism',
    duration: '1 Weeks',
    projectType: 'Web Development',
    techStack: ["React", "Tialwindcss", "Firebase"],
    status: "Completed",
    projectSuccessRate: "4.9",
    deliveryTime: "99%",
    clientName: 'Raven Rayes',
    clientImg: "https://randomuser.me/api/portraits/women/45.jpg",
    websiteLink: "https://ceylonspaceholidays.com/",
  },
  {
    id: 3,
    category: "Web Development",
    image: project3Imgdesktop1,
    images: [
      project3Imgdesktop1,
      project3Imgdesktop2,
      project3Imgdesktop3,
      project3ImgMobile1,
      project3ImgMobile2,
    ],
    title: "Website for Kuoni Holydays",
    description: "This travel booking website showcases global destinations and curated holiday packages through a modern, visually engaging interface. It features a responsive design with smooth navigation and clear booking flows, built on a scalable, component-based architecture for efficient performance and easy content management.",
    requirements: [
      "36 Compositions",
      "Lightning-fast creation",
      "Beautiful light and dark mode",
      "Fully customizable",
      "Minimal & thoughtful designs",
    ],
    clientCountry: "UK",
    industry: 'Tourism',
    duration: '2 Weeks',
    projectType: 'Web Development',
    techStack: ["React", "Tialwind", "Firebase"],
    security: ["jwd Auth", "Firebase"],
    status: "Not Completed",
    projectSuccessRate: "5.0",
    deliveryTime: "100%",
    clientName: "Clark Griffin",
    clientImg: "https://randomuser.me/api/portraits/women/44.jpg",
    websiteLink: "https://www.kuoni.co.uk/ ",
  },
  {
    id: 4,
    category: "Web Development",
    image: project4Imgdesktop1,
    images: [
      project4Imgdesktop1,
      project4Imgdesktop2,
      project4Imgdesktop3,
      project4ImgMobile1,
      project4ImgMobile2,
    ],
    title: "Website for Susan Styles",
    description: "A modern, dark-themed website designed for a premium salon and grooming brand. The site showcases services such as haircuts, facials, and custom tattoos, along with a gallery, client testimonials, and an appointment booking section. Built with a focus on clean UI, smooth user experience, and strong visual appeal, the design helps attract customers and increase bookings while maintaining a professional brand identity.",
    requirements: [
  "Modern dark-themed UI design",
  "Fully responsive across all devices",
  "Service showcase (hair, facial, tattoos)",
  "Online appointment booking system",
  "Client testimonials section",
  "Image gallery for transformations",
  "Smooth navigation & user-friendly layout",
  "High-quality visuals and branding",
  "Call-to-action focused design",
  "Fast loading and optimized performance"
],
    clientCountry: "Sri Lanka",
    industry: 'Beauty & Personal Care',
    duration: '2 Weeks',
    projectType: 'Web Development',
    techStack: ["React", "Tialwind", "Firebase"],
    security: ["jwd Auth", "Firebase"],
    status: "Completed",
    projectSuccessRate: "5.0",
    deliveryTime: "100%",
    clientName: "Clark Griffin",
    clientImg: "https://randomuser.me/api/portraits/women/44.jpg",
    websiteLink: "https://www.kuoni.co.uk/ ",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Social Media",
  "Ui Ux Design",
  "Ecommerse Website",
  "Product MVP Development",
];

const ProjectShowcase = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDetails = (project) => {
    navigate("/project-details", { state: project });
  };

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio-showcase" className="w-full bg-[#000000] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#02b96d] to-[#186d60] text-black border-transparent shadow-lg"
                  : "bg-[#131313] text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {/* Projects Grid */}
{/* Projects Grid */}
<div className="grid gap-x-10 gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {filteredProjects.map((project) => (
    <div
      key={project.id}
      onClick={() => handleDetails(project)}
      className="group cursor-pointer select-none"
    >
      {/* 16:9 Image - Floating Frame Style */}
      <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-[#111] ring-1 ring-white/5 group-hover:ring-white/20 transition-all duration-500">
        <img
          src={project.image}
          alt={`${project.title} software solution built by Axstar web app development in Colombo`} loading="lazy"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        
        {/* Subtle Gradient wash for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Text Content - Minimalist Stack */}
      <div className="mt-6 flex flex-col items-start">
        {/* Project Number or Label */}
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.4em] mb-2 block overflow-hidden">
          
        </span>

        {/* Title with Clean Letter Spacing */}
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-medium tracking-tight text-neutral-200 group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Minimalist dot indicator */}
          <div className="w-1.5 h-1.5 rounded-full border border-white/20 group-hover:bg-[var(--primary-color)] group-hover:border-[var(--primary-color)] transition-all duration-500" />
        </div>

        {/* Decorative thin line that grows from the left */}
        <div className="mt-4 w-full h-[1px] bg-neutral-900 overflow-hidden">
          <div className="w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-neutral-600 italic">
            No projects available in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;