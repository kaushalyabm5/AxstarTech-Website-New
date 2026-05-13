import React, { useLayoutEffect } from 'react'
import EngineeringTechHero from './EngineeringTechHero'
import ScrollToTopEngineeringTech from './ScrollToTopEngineeringTech'
import WebDev from './WebDev'
import MobileDev from './MobileDev'
import ProductMVP from './ProductMvp'
import UIUXDesign from './UIUXDesign'
import CustomSoftware from './CustomSoftware'
import AIAutomation from './AIAutomation'
import APIIntegration from './APIIntegration'
import EcommerceSolutions from './EcommerceSolutions'
import { useLocation } from 'react-router-dom'



const EngineeringandTechPage = () => {

   const location = useLocation();
  
    useLayoutEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "auto" });
    }
  } else {
    // 👇 HANDLE NO HASH (GO TO HERO)
    const hero = document.getElementById("business-strategy-hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "auto" });
    }
  }
}, [location]);

  return (
    <div>
      <EngineeringTechHero />
      <WebDev />
      <MobileDev />
      <ProductMVP />
      <UIUXDesign />
      <CustomSoftware />
      <AIAutomation />
      <APIIntegration />
      <EcommerceSolutions />


      <ScrollToTopEngineeringTech />
    </div>
  )
}

export default EngineeringandTechPage