import React from 'react'
import { Helmet } from 'react-helmet-async'

import Hero from './Hero'
import About from './About'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Technologies from './Technologies'
import Stat from './Stat'

import Testimonials from './Testimonials'


import ScrollToTopHome from './ScrollToTopHome'
import CallUs from './CallUs'
import LatestProjects from './LatestProjects'
import Process2 from './Process2'




const HomePage = () => {
  return (
    <div id='home' className='w-full'>
        <Helmet>
            <title>Axstar | AI-Powered Software, Web & Mobile App Development Company in Sri Lanka</title>
            <meta name="description" content="We are an AI-powered software company in Sri Lanka building scalable web applications, mobile apps, SaaS and MVPs for global startups and businesses." />
            <meta property="og:image" content="https://axstartech.com/axstartechog.webp" />
            <meta property="og:title" content="Axstar | AI-Powered Software, Web & Mobile App Development Company in Sri Lanka" />
            <meta property="og:description" content="We are an AI-powered software company in Sri Lanka building scalable web applications, mobile apps, SaaS and MVPs for global startups and businesses." />
        </Helmet>
        <Hero/>
        <About/>
        <Services/>
        <WhyChooseUs/>
        <Stat/>
        <Process2 />
        <Technologies/>      
        <Testimonials/>
        <LatestProjects />
        <CallUs />
        <ScrollToTopHome />
    </div>
  )
}

export default HomePage