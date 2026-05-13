import React, { useLayoutEffect } from 'react'
import DigitalGrowthHero from './DigitalGrowthHero'
import DigitalSetup1 from './DigitalSetup1'
import DigitalSetup2 from './DigitalSetup2'
import { useLocation } from 'react-router-dom'
import DigitalSetup3 from './DigitalSetup3'
import DigitalSetup4 from './DigitalSetup4'
import DigitalSetup5 from './DigitalSetup5'
import DigitalSetup6 from './DigitalSetup6'
import ScrollToTopDigitalGrowth from './ScrollToTopDigitalGrowth'

const DigitalGrowthPage = () => {

 const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "auto" }); // no animation = no flicker
      }
    }
  }, [location]);
  return (
    <div>
        <DigitalGrowthHero />
        <DigitalSetup1 />
        <div>
          <DigitalSetup2 />
          <DigitalSetup3 />
          <DigitalSetup4 />
          <DigitalSetup5 />
          <DigitalSetup6 />
        </div>

        <ScrollToTopDigitalGrowth />

    </div>
  )
}

export default DigitalGrowthPage


