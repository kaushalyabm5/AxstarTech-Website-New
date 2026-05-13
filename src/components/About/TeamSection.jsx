import React from 'react';
import pic1 from '../../assets/team/tharaka.png';
import pic2 from '../../assets/team/madushan2.png';
import pic3 from '../../assets/team/kaushalya14.png';
import pic4 from '../../assets/team/gimshan2.png';
import pic5 from '../../assets/team/malith1.png';
import pic6 from '../../assets/team/luxshan1.jpeg';
import pic7 from '../../assets/team/sewmini1.jpeg';
import pic8 from '../../assets/team/ranjana11.png';
import pic9 from '../../assets/team/devindi1.jpeg';
import pic10 from '../../assets/team/kavishka1.jpeg';
import pic11 from '../../assets/team/dananjana1.png';
import pic12 from '../../assets/team/dasan.png';
import pic13 from '../../assets/team/tharindu.png';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import { EqualCompare } from 'three';

const TeamSection = () => {
  const team = [
    { name: "Tharaka Gamage", role: "CEO & Founder", image: pic1 },
    { name: "Madhushan Nanayakkara", role: "Managing Partner (Business Operations)", image: pic2 },
    { name: "Sewmini Senarathna", role: "Project Manager ", image: pic7 },
    { name: "Gimshan Menaka", role: "UI/UX Designer", image: pic4 },
     { name: "Kaushalya Udayashan", role: "Software Engineer", image: pic3 },
     { name: "Devindi Nanayakkara", role: "Business Development Associate", image: pic9 },
    { name: "Malith Dias", role: "Senior Engineer", image: pic5 },
     
    { name: "Luxshan Thavaraja", role: "Lead Engineer", image: pic6 },
    
   { name: "Ranjana Gayathri", role: "Marketing Lead", image: pic8 },
    
    { name: "Kavishka Janindu Nimsara", role: "Social Media Manager", image: pic10 },
    
    
    { name: "Dasan Chethana", role: "Web Developer", image: pic12 },
    { name: "Dhananjana Sarachchandra", role: "Digital Marketing & Growth Executive", image: pic11 },
    { name: "Tharindu Dilshan", role: "Mobile Developer", image: pic13 },
  ];

  const carouselData = [...team, ...team];

  return (
    <section className="bg-[#000000] text-[#e9e7e2] py-20 overflow-hidden">
      <div className="max-w-full mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            The Minds Driving Innovation
          </span>
          <h2 className="text-4xl md:text-6xl text-[#e9e7e2] mb-8">
            Meet Our Team
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              At <span className="text-[#e9e7e2] font-medium text-glow">Axstar</span>, innovation is powered by people, talented 
              technologists, strategists, and designers who think differently and deliver 
              results.
            </p>
            <p>
              Every system we engineer and every digital experience we design is guided by 
              creativity, precision, and a commitment to making.
            </p>
          </div>
        </div>

        {/* Compact Vision Quote Card */}
        <div className="relative group max-w-2xl mx-auto mb-20">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)]/50 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
          <div className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 text-center">
            <blockquote className="text-lg md:text-2xl font-light tracking-wide italic">
              " Your Ideas. Our Expertise. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-medium">Shared Success.</span> "
            </blockquote>
          </div>
        </div>



        
      </div>

      {/* Auto-Playing Carousel Container */}
<div className="relative flex overflow-hidden group py-10">
  <div className="flex animate-marquee whitespace-nowrap pause-on-hover">
    {carouselData.map((member, index) => (
      <div 
        key={index} 
        className="w-[220px] md:w-[280px] mx-6 flex-shrink-0 group/card"
      >
        {/* Editorial Photo Container (4:5 Ratio for more vertical space) */}
        <div className="relative aspect-[4/5] overflow-hidden mb-8 transition-all duration-700">
          {/* Subtle Corner Accents instead of full borders */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--primary-color)] z-20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--primary-color)] z-20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
          
          <img 
            src={member.image} 
            alt={`${member.name} working at the Axstar app development agency headquarters in Colombo`} loading="lazy"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover/card:scale-105"
          />
          
          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-700" />
        </div>

        {/* Text Area - Designed for long roles */}
        <div className="text-left relative pl-2 border-l border-white/10 group-hover/card:border-[var(--primary-color)] transition-colors duration-500">
          <h3 className="text-xl md:text-[1.1rem] font-light tracking-tight text-[#e9e7e2] mb-2 whitespace-normal leading-tight">
            {member.name}
          </h3>
          
          {/* Role: Uses whitespace-normal and leading-relaxed to handle long titles perfectly */}
          <p className="text-[10px] md:text-[.7rem] uppercase tracking-[0.2em] leading-relaxed whitespace-normal bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-bold">
            {member.role}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Cinematic Edge Fades */}
  <div className="hidden pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#000000] to-transparent z-10"></div>
  <div className="hidden pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#000000] to-transparent z-10"></div>
</div>

      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 15px rgba(255,255,255,0.2);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 80s linear infinite;
        }

        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;

/*mobile
web
socual
ui,ux
Ecom
soci*/