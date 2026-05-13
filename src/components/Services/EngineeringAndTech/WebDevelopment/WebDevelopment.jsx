import React from "react";
import { Helmet } from 'react-helmet-async';



import WebDevelopmentHero from "./WebDevelopmentHero";
import WhatWeOffer from "./WhatWeOffer";
import WebDevWhatWeDo from "./WebDevWhatWeDo";
import WhyWorkWithUs from "./WhyWorkWithUs";
import ContactOurTeam from "./ContactOurTeam";
import ScrollToTopWebDev from "./ScrollToTopWebDev";


const WebDevelopment = () => {

  






 
  return (
    <section id="about-hero" className="relative w-full bg-black text-white overflow-hidden">
      <Helmet>
        <title>AI-Powered Web App & SaaS Development in Sri Lanka | Axstar</title>
        <meta name="description" content="Build secure, lightning-fast AI-powered web applications and SaaS platforms with Axstar’s expert software engineers in Sri Lanka." />
        <meta property="og:image" content="https://axstartech.com/axstartechog.png" />
        <meta property="og:title" content="AI-Powered Web App & SaaS Development in Sri Lanka | Axstar" />
        <meta property="og:description" content="Build secure, lightning-fast AI-powered web applications and SaaS platforms with Axstar’s expert software engineers in Sri Lanka." />
      </Helmet>
   {/* ✅ TOP GLOW (FIXED) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[var(--primary-color)]/30 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      
    <WebDevelopmentHero />

<div className="px-0 lg:px-14">
    <WhatWeOffer />
    <WebDevWhatWeDo />
      <WhyWorkWithUs />
      <ContactOurTeam />

      
</div>

<ScrollToTopWebDev />











      {/** */}









{/** */}






    {/** */}










    

    </section>
  );
};

export default WebDevelopment;