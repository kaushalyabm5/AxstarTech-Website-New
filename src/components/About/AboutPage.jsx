import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutHero from './AboutHero'

import WhatWeDo from './WhatWeDo'
import ScrollToTopAbout from './ScrollToTopAbout'
import AboutWhatWeDo from './AboutWhatWeDo'
import AboutValues from './AboutValues'
import AboutExcellence from './AboutExcellence'
import OurStory from './OurStory'
import CultureSection from './CultureSection'
import FeaturesSection from './FeaturesSection'
import TeamSection from './TeamSection'
import VisionMission from './VisionMission'


const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Axstar | Sri Lanka's Leading AI Software Company</title>
        <meta name="description" content="Meet Axstar, a Colombo-based AI-powered software engineering team building scalable web applications, mobile apps, SaaS platforms, and digital solutions for modern businesses." />
        <meta property="og:image" content="https://axstartech.com/axstartechog.png" />
        <meta property="og:title" content="About Axstar | Sri Lanka's Leading AI Software Company" />
        <meta property="og:description" content="Meet Axstar, a Colombo-based AI-powered software engineering team building scalable web applications, mobile apps, SaaS platforms, and digital solutions for modern businesses." />
      </Helmet>
      <AboutHero/>
      <AboutWhatWeDo />
      <VisionMission />
      <AboutValues />
      <AboutExcellence />
      <OurStory />
      <CultureSection />
      <WhatWeDo />
      <FeaturesSection />
      <TeamSection />
      
   
      <ScrollToTopAbout />
    </div>
  )
}

export default AboutPage