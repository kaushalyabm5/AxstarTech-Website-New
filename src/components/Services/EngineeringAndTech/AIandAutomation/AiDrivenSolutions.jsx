import React from "react";

import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import AiDrivenHero from "./AiDrvenHero";
import ScrollToTopAiAutomation from "./ScrollToTopAiAutomation";



const AiDrivenSolutions = () => {




  return (
    <section id="about-hero" className=" relative w-full bg-black text-white overflow-hidden">

    <AiDrivenHero />

    <div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />

      <ScrollToTopAiAutomation />
    </div>
      









































      

    </section>
  );
};

export default AiDrivenSolutions;