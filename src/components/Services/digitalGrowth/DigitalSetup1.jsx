import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const DigitalSetup1 = () => {
  const expertises = [
    {
      id: "01",
      title: "Social Media Management",
      description: "In a noisy digital world, your brand needs a voice that resonates. We don’t just post content; we engineer engagement. Our Digital marketing team handles everything from visual storytelling to community building, ensuring your brand stays top-of-mind across all major social platforms. We focus on building a loyal audience that eventually converts into your brand advocates.",
      deliverables: [
        "Social Media Audit & Strategy Development",
        "Professional Content Creation & Visual Design",
        "Paid Social Media Advertising",
        "Social Listening & Brand Monitoring",
        "Community Management & Real-time Engagement"
      ],
      hasButton: true
    },
    {
      id: "02",
      title: "Search Engine Optimization (SEO)",
      description: "Being on page one isn't a luxury; it’s a necessity. We optimize your digital footprint to ensure that when your customers are looking for a solution, they find you first. By focusing on both the technical health of your site and high-quality content, we build long-term organic authority that reduces your dependence on paid ads.",
      deliverables: [
        "Comprehensive Keyword & Competitor Research",
        "On-Page Optimization & Content Mapping",
        "High-Quality Backlink Building & PR",
        "Local SEO & Google Business Profile Management"
      ],
      hasButton: true
    },
    {
      id: "03",
      title: "Product Strategy & Digital Transformation",
      description: "Growth starts with a solid foundation. We help businesses modernize their approach by identifying gaps in their current digital journey. Whether you are moving from offline to online or looking to optimize an existing product, we provide the roadmap to ensure your technology and marketing are working in perfect harmony.",
      deliverables: [
        "Market Analysis & Product Positioning",
        "Product Roadmap & Planning",
        "User Journey Mapping Strategy & UX Consulting",
        "Product Analytics & Optimization",
        "Business Process Digitalization & Workflow Automation",
        "Technology Stack Audits & Upgrades"
      ]
    },
    {
      id: "04",
      title: "Data Analytics & Performance Optimization",
      description: "We believe what gets measured gets improved. Our analytics services turn raw data into a clear story about your customers' behavior. We set up advanced tracking and custom dashboards so you can see exactly where your budget is going and which channels are delivering the highest return on investment.",
      deliverables: [
        "Advanced Web & App Analytics Setup",
        "Customer & Product Analytics",
        "Custom KPI Dashboards & Automated Reporting",
        "A/B Testing & Conversion Rate Optimization (CRO)",
        "Customer Lifetime Value (CLV) Analysis"
      ]
    },
    {
      id: "05",
      title: "Digital Presence Setup",
      description: "Your digital presence is your first impression — and in most cases, your most important one. We help you build a strong, cohesive foundation across all digital touchpoints so your brand looks professional, trustworthy, and ready to scale from day one. From websites to social platforms, we ensure everything is aligned, optimized, and built for growth.",
      deliverables: [
        "Website Setup & Optimization (Business Websites / Landing Pages)",
        "Social Media Profile Creation & Branding (Facebook, Instagram, LinkedIn, etc.)",
        "Google Business Profile Setup & Optimization",
        "Domain, Hosting & Professional Email Configuration",
        "Basic SEO & Performance Optimization Setup",
        "Brand Consistency Across All Digital Channels",
        "Analytics & Tracking Integration (Google Analytics, Meta Pixel, etc.)"
      ]
    }
  ];

  return (
    <div id='setup-1' className="bg-[#000000] text-slate-300 py-24 px-6 md:px-12  selection:bg-emerald-500/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Centered Header Section */}
        <header className="text-center mb-32">
          

           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-2 block">
            Built for Growth
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-white mb-5">Our Expertise</h2>
          
          <p className="text-lg md:text-[1.1rem] mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] max-w-5xl mx-auto leading-relaxed">
            At Axstar, we bridge the gap between technical infrastructure and market dominance. We don’t just provide digital marketing; we engineer growth ecosystems designed for scale. By integrating deep software expertise with performance-driven marketing, we empower brands to navigate the digital landscape with precision. From high-level Product Strategy and Digital Transformation to the granular execution of Technical SEO and Data Analytics, our approach is built on a foundation of measurable results. 
          </p>
           <p className="text-lg md:text-[1.1rem] bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] max-w-5xl mx-auto leading-relaxed">
            We leverage Social Media Management and Performance Marketing to build community and capture intent, turning raw data into actionable insights that optimize every stage of the user journey. We are not just your service provider; we are your strategic partner in building a future-proof digital presence.
          </p>
          
          
        </header>

     

        

        
      </div>
    </div>
  );
};

export default DigitalSetup1;