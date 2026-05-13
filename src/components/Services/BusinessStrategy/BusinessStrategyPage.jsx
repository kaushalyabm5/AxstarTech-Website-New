import React, { useLayoutEffect } from 'react'
import BusinessStrategyHero from './BusinessStrategyHero'
import BusinessSection1 from './BusinessSection1'
import BusinessSection2 from './BusinessSection2'
import BusinessSection3 from './BusinessSection3'
import BusinessSection4 from './BusinessSection4'
import BusinessSection5 from './BusinessSection5'
import BusinessSection6 from './BusinessSection6'
import { useLocation } from 'react-router-dom'
import ScrollToTopBusinessStrategy from './ScrollToTopBusinessStrategy'

const BusinessStrategyPage = () => {

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
        <BusinessStrategyHero />
        <BusinessSection1 />
        <BusinessSection2 />
        <BusinessSection3 />
        <BusinessSection4 />
        <BusinessSection5 />
        <BusinessSection6 />
        <ScrollToTopBusinessStrategy />
    </div>
  )
}

export default BusinessStrategyPage