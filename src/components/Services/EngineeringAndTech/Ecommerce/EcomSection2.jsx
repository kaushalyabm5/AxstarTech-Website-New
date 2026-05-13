import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Storefront Development",
    description: "Building unique shopping experiences using modern frameworks like Next.js or headless commerce architectures.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
    tag: "01"
  },
  {
    title: "Platform Migration",
    description: "Seamlessly moving your data from legacy systems to Shopify, WooCommerce, or BigCommerce without losing SEO rankings.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    tag: "02"
  },
  {
    title: "B2B Commerce Portals",
    description: "Specialized portals for wholesale clients, featuring bulk pricing, account management, and automated invoicing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tag: "03"
  },
  {
    title: "M-Commerce (Mobile First)",
    description: "Ensuring 100% responsiveness and 'Thumb-First' navigation for the mobile-dominant market.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    tag: "04"
  }
];

const EcomSection2 = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12 overflow-hidden">
      {/* Title - Top Center */}
      <div className="max-w-7xl mx-auto mb-32 text-center">
       


         <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            What We Do
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">Core Service Offerings</h2>

      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto space-y-48">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-32 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <div className="relative inline-block">
                <span className="text-5xl md:text-6xl font-extralight text-neutral-800/50">
                  {service.tag}
                </span>
                <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-white/10"></div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-md font-light">
                  {service.description}
                </p>
              </div>

              
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full group cursor-none">
              <div className="aspect-[4/5] md:aspect-[16/11] bg-neutral-900 overflow-hidden relative rounded-sm shadow-2xl shadow-black/50">
                <img 
                  src={service.image} 
                  alt={`${service.title} capabilities for Axstar web app development in Colombo Sri Lanka`} loading="lazy"
                  className="w-full h-full object-cover grayscale-0 opacity-70 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />
                {/* Brand Tint Overlay */}
                <div className="absolute inset-0 bg-[#006769]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Edge lighting effect */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EcomSection2;