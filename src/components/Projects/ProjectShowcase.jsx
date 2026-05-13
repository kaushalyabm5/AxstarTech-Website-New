import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Keep your original imports
import projectImg1desktop from '../../assets/portfolio-images/website1-sixnity/desktop/sixnity1.jpg';
import projectImg2desktop from '../../assets/portfolio-images/website1-sixnity/desktop/home-section2-desktop.png';
import projectImg1mobile from '../../assets/portfolio-images/website1-sixnity/mobile/home-section1-mobile.png';
import projectImg2mobile from '../../assets/portfolio-images/website1-sixnity/mobile/home-section2-mobile.png';
import projectImg3mobile from '../../assets/portfolio-images/website1-sixnity/mobile/home-section3-mobile.png';

import project2ImgDesktop1 from '../../assets/portfolio-images/website2-ceylonSpace/desktop/ceylone1.jpg';
import project2ImgDesktop2 from '../../assets/portfolio-images/website2-ceylonSpace/desktop/imgDesktop2.png';
import project2ImgDesktop3 from '../../assets/portfolio-images/website2-ceylonSpace/desktop/imgDesktop3.png';
import project2ImgMobile1 from '../../assets/portfolio-images/website2-ceylonSpace/mobile/imgMobile1.png';
import project2ImgMobile2 from '../../assets/portfolio-images/website2-ceylonSpace/mobile/imgMobile2.png';

import project3Imgdesktop1 from '../../assets/portfolio-images/website-kuoni/desktop/kuoni1.jpg';
import project3Imgdesktop2 from '../../assets/portfolio-images/website-kuoni/desktop/desktopImg2.png';
import project3Imgdesktop3 from '../../assets/portfolio-images/website-kuoni/desktop/desktopImg3.png';
import project3ImgMobile1 from '../../assets/portfolio-images/website-kuoni/mobile/mobileImg1.png';
import project3ImgMobile2 from '../../assets/portfolio-images/website-kuoni/mobile/mobileImg2.png';

import project4Imgdesktop1 from '../../assets/portfolio-images/website4-susan/desktop/susanstyles1.jpg';
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
    techStack: ["React", "Tailwind", "Firebase"],
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
    techStack: ["React", "Tailwind", "Firebase"],
    security: ["jwd Auth", "Firebase"],
    status: "Active",
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
    industry: 'Beauty & Care',
    duration: '2 Weeks',
    projectType: 'Web Development',
    techStack: ["React", "Tailwind", "Firebase"],
    security: ["jwd Auth", "Firebase"],
    status: "Completed",
    projectSuccessRate: "5.0",
    deliveryTime: "100%",
    clientName: "Clark Griffin",
    clientImg: "https://randomuser.me/api/portraits/women/44.jpg",
    websiteLink: "https://suanstyles.com/",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Social Media",
  "Ui Ux Design",
  "Ecommerse Website",
];

const ProjectShowcase = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDetails = (project) => {
    navigate("/project-details", { state: project });
  };

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio-showcase" className="w-full bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Category Navigation Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-[10px] rounded-[.5rem] uppercase tracking-[0.2em] font-medium transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-black"
                  : "bg-transparent text-neutral-500 border-neutral-800 hover:border-[#02b96d] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Clickable Grid */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleDetails(project)}
              className="group flex flex-col rounded-[1rem] bg-[#070707] border border-neutral-900 transition-all duration-500 cursor-pointer"
            >
              {/* Cinematic Image Container (16:9) */}
              <div className="relative aspect-video w-full overflow-hidden rounded-[1rem] p-2 bg-[#070707]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full rounded-[1rem] object-cover grayscale-[0%] group-hover:grayscale-0 group-hover:scale-100 transition-all duration-1000 ease-out"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/0 px-2 py-0.5 text-[9px] font-black text-black uppercase">
                    
                  </span>
                </div>
              </div>

              {/* Compact Details Section */}
              <div className="px-8 py-5 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[8px] rounded-[.3rem]  uppercase tracking-widest text-neutral-500 border border-neutral-800 px-2 py-1">
                    {project.industry}
                  </span>
                  <span className="text-[8px] rounded-[.3rem] uppercase tracking-widest text-neutral-500 border border-neutral-800 px-2 py-1">
                    {project.clientCountry}
                  </span>
                </div>

                <h3 className="text-xl font-medium tracking-tight text-white  mb-3 transition-colors group-hover:text-neutral-300">
                  {project.title}
                </h3>

                <p className="text-neutral-500 text-xs leading-relaxed mb-4 line-clamp-2 font-light">
                  {project.description}
                </p>
                
                {/* Visual Indicator of clickability (Arrow) */}
                
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-neutral-900">
            <p className="text-neutral-700 uppercase tracking-widest text-[9px]">Empty Archive</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;