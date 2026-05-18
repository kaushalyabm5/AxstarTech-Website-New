import React from "react";
import { Helmet } from 'react-helmet-async';

import MobileApDevHero from "./MobileApDevHero";
import AfterHero from "./AfterHero";
import Section3 from "./Section3";
import OurStrategic from "./OurStrategic";
import WhatWeDoMobileDev from "./WhatWeDoMobileDev";
import WhyChoose from "./WhyChoose";
import Exxplore from "./Exxplore";
import Boost from "./Boost";
import ScrollToTopMobileAppDev from "./ScrollToTopMobileAppDev";




const MobileAppDevelopment = () => {








  
  return (
    <section id="about-hero" className="relative w-full bg-black text-white overflow-hidden">
      <Helmet>
        <title>AI-Powered Mobile App Development in Sri Lanka | Axstar</title>
        <meta name="description" content="Axstar builds scalable Flutter, iOS, and Android mobile apps. We deliver AI-powered, cross-platform experiences with intuitive UI/UX for global businesses." />
        <meta property="og:image" content="https://axstartech.com/axstartechog.webp" />
        <meta property="og:title" content="AI-Powered Mobile App Development in Sri Lanka | Axstar" />
        <meta property="og:description" content="Axstar builds scalable Flutter, iOS, and Android mobile apps. We deliver AI-powered, cross-platform experiences with intuitive UI/UX for global businesses." />
      </Helmet>


     <MobileApDevHero />

     <div className="px-0">
      <AfterHero />
      <Section3 />
      <OurStrategic />
      <WhatWeDoMobileDev />
      <Exxplore />
      <WhyChoose />
      
      <Boost />

      <ScrollToTopMobileAppDev />
     </div>










      

    </section>
  );
};

export default MobileAppDevelopment;